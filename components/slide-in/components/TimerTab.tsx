import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useTimerStore } from "@/store/timeStore";

const TimerTab = () => {
  const { setMinutes, setSeconds, setIsCountingDown } = useTimerStore();

  const handleSliderChange = (minutes: number[]) => {
    const extractedValue = minutes[0];
    setIsCountingDown(false);
    setMinutes(extractedValue);
    setSeconds(0);
  };
  return (
    <Slider
      defaultValue={[15]}
      max={60}
      step={1}
      onValueChange={(value) => handleSliderChange(value)}
      className={cn("w-[60%]")}
    />
  );
};

export default TimerTab;
