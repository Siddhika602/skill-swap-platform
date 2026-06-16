import { useEffect, useState } from "react";
import "../styles/CursorGlow.css";

function CursorGlow() {
  const [pos, setPos] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
    />
  );
}

export default CursorGlow;