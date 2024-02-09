"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useTimerStore } from "@/store/timeStore";

const Timer = () => {
  const {
    minutes,
    seconds,
    isCountingDown,
    setIsCountingDown,
    setMinutes,
    setSeconds,
  } = useTimerStore();

  useEffect(() => {
    let countdown: NodeJS.Timeout;

    if (isCountingDown) {
      countdown = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
            setIsCountingDown(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(countdown);
  }, [isCountingDown, minutes, seconds]);

  const handleStartCounting = () => {
    setIsCountingDown(true);
  };

  const handleStopCounting = () => {
    setIsCountingDown(false);
  };

  return (
    <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48">
      <span className="text-9xl">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </span>
      <Button
        variant="ghost"
        onClick={!isCountingDown ? handleStartCounting : handleStopCounting}
      >
        {!isCountingDown ? <Play className="text" /> : <Pause />}
      </Button>
    </div>
  );
};

export default Timer;
