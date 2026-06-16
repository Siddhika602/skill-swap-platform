import SwapRequest from "../models/SwapRequest.js";
import User from "../models/User.js";

// Send Swap Request
export const sendSwapRequest = async (req, res) => {
  try {
    const { receiver, offeredSkill, wantedSkill } = req.body;

    // Cannot send request to yourself
    if (req.user.id === receiver) {
      return res.status(400).json({
        success: false,
        message: "You cannot send a request to yourself",
      });
    }

    // Check if receiver exists
    const receiverUser = await User.findById(receiver);

    if (!receiverUser) {
      return res.status(404).json({
        success: false,
        message: "Receiver not found",
      });
    }

    // Check duplicate pending request
    const existingRequest = await SwapRequest.findOne({
      sender: req.user.id,
      receiver,
      status: "pending",
    });

    if (existingRequest) {
      return res.status(400).json({
        success: false,
        message: "Request already sent",
      });
    }

    // Create swap request
    const swap = await SwapRequest.create({
      sender: req.user.id,
      receiver,
      offeredSkill,
      wantedSkill,
    });

    res.status(201).json({
      success: true,
      message: "Swap Request Sent Successfully",
      swap,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get My Requests
export const getMyRequests = async (req, res) => {
  try {
    const requests = await SwapRequest.find({
      sender: req.user.id,
    }).populate(
      "receiver",
      "name email profilePic"
    );

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getReceivedRequests = async (req, res) => {
  try {
    const requests = await SwapRequest.find({
      receiver: req.user.id,
    }).populate(
      "sender",
      "name email profilePic"
    );

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const acceptRequest = async (req, res) => {
  try {
    const request = await SwapRequest.findByIdAndUpdate(
      req.params.id,
      {
        status: "accepted",
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Request Accepted",
      request,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const rejectRequest = async (req, res) => {
  try {
    const request = await SwapRequest.findByIdAndUpdate(
      req.params.id,
      {
        status: "rejected",
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Request Rejected",
      request,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getRequestStats = async (req, res) => {
  try {
    const total = await SwapRequest.countDocuments({
      sender: req.user.id,
    });

    const pending = await SwapRequest.countDocuments({
      sender: req.user.id,
      status: "pending",
    });

    const accepted = await SwapRequest.countDocuments({
      sender: req.user.id,
      status: "accepted",
    });

    const rejected = await SwapRequest.countDocuments({
      sender: req.user.id,
      status: "rejected",
    });

    res.json({
      total,
      pending,
      accepted,
      rejected,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const cancelRequest = async (req, res) => {
  try {
    const request = await SwapRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        message: "Request not found",
      });
    }

    // Sirf sender hi cancel kar sakta hai
    if (request.sender.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    // Sirf pending request cancel ho
    if (request.status !== "pending") {
      return res.status(400).json({
        message: "Only pending requests can be cancelled",
      });
    }

    await SwapRequest.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Request Cancelled Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};