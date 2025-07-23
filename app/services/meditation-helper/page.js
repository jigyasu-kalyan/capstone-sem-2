'use client';
import React, { useState, useEffect, useRef } from 'react';
import './meditation-helper.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MeditationHelper = () => {
  const [time, setTime] = useState(300); // default 5 mins
  const [duration, setDuration] = useState(300);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (secs) => {
    const mins = String(Math.floor(secs / 60)).padStart(2, '0');
    const seconds = String(secs % 60).padStart(2, '0');
    return `${mins}:${seconds}`;
  };

  useEffect(() => {
    if (running) {
        intervalRef.current = setInterval(() => {
        setTime(prev => {
            if (prev <= 1) {
            clearInterval(intervalRef.current);
            return 0;
            }
            return prev - 1;
        });
        }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [running]);

  const handleStart = () => {
    if (time > 0) setRunning(true);
  };

  const handlePause = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(duration);
  };

  const handleTimeSelect = (seconds) => {
    setRunning(false);
    setDuration(seconds);
    setTime(seconds);
  };

  return (
    <>
        <Header />

        <div className="container">
        <h1 className="heading">Meditation Helper</h1>
        <div className="time">{formatTime(time)}</div>

        <div className="timeOptions">
            {[60, 300, 600].map((sec) => (
            <button
                key={sec}
                onClick={() => handleTimeSelect(sec)}
                className={`btn ${time === sec ? "active" : ''}`}
            >
                {sec / 60} min
            </button>
            ))}
        </div>

        <div className="controls">
            <button className="btn" onClick={handleStart}>Start</button>
            <button className="btn" onClick={handlePause}>Pause</button>
            <button className="btn" onClick={handleReset}>Reset</button>
        </div>
        </div>

        <Footer />
    </>
  );
};

export default MeditationHelper;
