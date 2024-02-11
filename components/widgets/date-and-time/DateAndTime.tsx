import HoverAction from "@/components/shared/HoverAction";
import { useState, useEffect } from "react";

const DateAndTime: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState<Date>(new Date());
  const [is24Hour, setIs24Hour] = useState<boolean>(true);
  const [isVerboseDate, setIsVerboseDate] = useState<boolean>(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const verboseDateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const numericDateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedDate: string = isVerboseDate
    ? currentDateTime.toLocaleDateString("en-US", verboseDateOptions)
    : currentDateTime.toLocaleDateString("en-US", numericDateOptions);

  const formattedTime: string = currentDateTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    // second: "2-digit",
    hour12: !is24Hour,
  });

  return (
    <div className="flex flex-col items-start">
      <HoverAction
        text={isVerboseDate ? "Switch to Numeric" : "Switch to Verbose"}
      >
        <time
          className="text-4xl font-bold cursor-pointer"
          onClick={() => setIsVerboseDate(!isVerboseDate)}
        >
          {formattedDate}
        </time>
      </HoverAction>
      <HoverAction text={is24Hour ? "Switch to 12-hour" : "Switch to 24-hour"}>
        <time
          className="text-4xl font-bold cursor-pointer"
          onClick={() => setIs24Hour(!is24Hour)}
        >
          {formattedTime}
        </time>
      </HoverAction>
    </div>
  );
};

export default DateAndTime;
