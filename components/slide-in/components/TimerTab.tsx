import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useTimerStore } from "@/store/timeStore";

const TimerTab = () => {
  const {
    userSetTime,
    setMinutes,
    setSeconds,
    setIsCountingDown,
    setUserSetTime,
  } = useTimerStore();

  const handleSliderChange = (minutes: number[]) => {
    const extractedValue = minutes[0];
    setIsCountingDown(false);
    setUserSetTime(extractedValue);
    setMinutes(extractedValue);
    setSeconds(0);
  };
  return (
    <Slider
      defaultValue={[userSetTime]}
      max={60}
      step={1}
      onValueChange={(value) => handleSliderChange(value)}
      className={cn("w-[60%]")}
    />
  );
};

export default TimerTab;
