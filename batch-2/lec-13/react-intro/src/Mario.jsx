import React, { useEffect, useState } from "react";
import "";

function App() {
  const [isJumping, setIsJumping] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const jump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => setIsJumping(false), 500);
    }
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === "Space") {
        jump();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isJumping]);

  useEffect(() => {
    const checkCollision = setInterval(() => {
      const mario = document.querySelector(".mario");
      const obstacle = document.querySelector(".obstacle");

      if (!mario || !obstacle) return;

      const marioTop = parseInt(
        window.getComputedStyle(mario).getPropertyValue("top")
      );
      const obstacleLeft = parseInt(
        window.getComputedStyle(obstacle).getPropertyValue("left")
      );

      if (obstacleLeft < 80 && obstacleLeft > 0 && marioTop >= 130) {
        setGameOver(true);
      }
    }, 10);                 

    return () => clearInterval(checkCollision);
  }, []);

  return (
    <div className="game">
      <h1>Mario Game</h1>

      {gameOver && <h2>Game Over 💀</h2>}

      <div className="game-area" onClick={jump}>
        <div className={`mario ${isJumping ? "jump" : ""}`}></div>
        {!gameOver && <div className="obstacle"></div>}
      </div>

      <p>Press SPACE or click to jump</p>
    </div>
  );
}

export default App;