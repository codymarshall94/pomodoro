"use client";

import { Columns4, Grid2X2, Pause, Play, RotateCcw, Rows } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useTimerStore } from "@/store/timeStore";
import { cn } from "@/lib/utils";

type GridOrientation = "grid-cols-5" | "grid-cols-2";

const Timer = () => {
  const [orientation, setOrientation] =
    useState<GridOrientation>("grid-cols-5");
  const {
    userSetTime,
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

  const handleResetTimer = () => {
    setIsCountingDown(false);
    setMinutes(userSetTime);
    setSeconds(0);
  };

  const toggleOrientation = () => {
    setOrientation((currentOrientation) =>
      currentOrientation === "grid-cols-5" ? "grid-cols-2" : "grid-cols-5"
    );
  };

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return (
    <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto">
      <div className={cn("grid", orientation)}>
        <span className="text-9xl">{formattedMinutes[0]}</span>
        <span className="text-9xl">{formattedMinutes[1]}</span>
        {orientation === "grid-cols-5" && (
          <span className="text-9xl justify-self-center">:</span>
        )}
        <span className="text-9xl">{formattedSeconds[0]}</span>
        <span className="text-9xl">{formattedSeconds[1]}</span>
      </div>
      <Button
        variant="ghost"
        onClick={!isCountingDown ? handleStartCounting : handleStopCounting}
      >
        {!isCountingDown ? <Play className="text" /> : <Pause />}
      </Button>
      <Button variant="ghost" onClick={handleResetTimer}>
        <RotateCcw />
      </Button>
      <Button variant="ghost" onClick={toggleOrientation}>
        {orientation === "grid-cols-5" ? <Grid2X2 /> : <Columns4 />}
      </Button>
    </div>
  );
};

export default Timer;
