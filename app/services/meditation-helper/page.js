'use client';
import React, { useState, useEffect, useRef } from 'react';
import './meditation-helper.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MeditationHelper = () => {
  const [time, setTime] = useState(300);
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

        <div className="meditationContainer">
        <h1 className="meditationHeading">Meditation Helper</h1>
        <div className="meditationTime">{formatTime(time)}</div>

        <div className="meditationTimeOptions">
            {[60, 300, 600].map((sec) => (
            <button
                key={sec}
                onClick={() => handleTimeSelect(sec)}
                className={`meditationBtn ${time === sec ? "meditationActive" : ''}`}
            >
                {sec / 60} min
            </button>
            ))}
        </div>

        <div className="meditationControls">
            <button className="meditationBtn" onClick={handleStart}>Start</button>
            <button className="meditationBtn" onClick={handlePause}>Pause</button>
            <button className="meditationBtn" onClick={handleReset}>Reset</button>
        </div>
        </div>

        <Footer />
    </>
  );
};

export default MeditationHelper;
