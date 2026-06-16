import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import {
  sendSwapRequest,
  getMyRequests,
  getReceivedRequests,
  acceptRequest,
  rejectRequest,
  getRequestStats,
  cancelRequest,
} from "../controllers/swapController.js";

const router = express.Router();

router.post(
  "/send",
  authMiddleware,
  sendSwapRequest
);
router.get(
  "/my-requests",
  authMiddleware,
  getMyRequests
);
router.get(
  "/received",
  authMiddleware,
  getReceivedRequests
);
router.put(
  "/accept/:id",
  authMiddleware,
  acceptRequest
);

router.put(
  "/reject/:id",
  authMiddleware,
  rejectRequest
);
router.get(
  "/stats",
  authMiddleware,
  getRequestStats
);
router.delete(
  "/cancel/:id",
  authMiddleware,
  cancelRequest
);
export default router;