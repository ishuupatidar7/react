
import React, { useState, useRef, useEffect } from 'react';
import { useIdleTimer } from 'react-idle-timer';

function IdleTimerComponent() {
  const [isIdle, setIsIdle] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds = 2 minutes
  const countdownRef = useRef(null);

  const handleOnIdle = () => {
    setIsIdle(true);
    startCountdown();
  };

  const startCountdown = () => {
    countdownRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(countdownRef.current);
          countdownRef.current = null;
          handleLogout(); // Trigger logout or any other action
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const resetTimer = () => {
    setIsIdle(false);
    setTimeLeft(120); // Reset countdown
    clearInterval(countdownRef.current);
    countdownRef.current = null;
  };

  const handleLogout = () => {
    alert('You have been logged out due to inactivity.');
    // Perform logout action here
    resetTimer();
  };

  useIdleTimer({
    timeout: 0.5 * 60 * 1000, // 13 minutes
    onIdle: handleOnIdle,
    debounce: 500,
  });
  useIdleTimeruseIdleTimeruseIdleTimer({
    timeout: 0.5 * 60 * 1000, // 13 minutes
    onIdle: handleOnIdle,
    debounce: 500,
  });
  useEffect(() => {
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const formatTimeformatTimeformatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div>
      {isIdle && (
        <Modal>
          <h2>You have been idle for 13 minutes</h2>
          <p>You will be logged out in {formatTime(timeLeft)} unless you take action.</p>
          <button onClick={resetTimer}>Stay Logged In</button>
        </Modal>
      )}
    </div>
  );
}

function Modal({ children }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
}

export default IdleTimerComponent;
