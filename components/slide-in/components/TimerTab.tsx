import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useTimerStore } from "@/store/timeStore";
import { Label } from "@radix-ui/react-label";

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
    <div className="flex flex-col gap-4">
      <Label htmlFor="set-time">Timer Length</Label>
      <Slider
        name="set-time"
        defaultValue={[userSetTime]}
        max={60}
        step={1}
        onValueChange={(value) => handleSliderChange(value)}
      />
    </div>
  );
};

export default TimerTab;
