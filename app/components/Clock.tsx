import React, { useEffect, useState } from "react";

const Clock = ({
  format,
  hour12Prop,
  localeProp,
}: {
  format?: string;
  hour12Prop: boolean;
  localeProp: string;
}) => {
  let runner: any;
  const getCurrentTime = () => {
    const locale = localeProp ? localeProp : [];
    const hour12 = hour12Prop == false ? false : true;
    let hour: string, minute: string, second: string;
    if (format) {
      switch (format.toLowerCase()) {
        case "hh":
          hour = "2-digit";
          break;
        case "hh-mm":
          hour = "2-digit";
          minute = "2-digit";
          break;
        case "hh-mm-ss":
          hour = "2-digit";
          minute = "2-digit";
          second = "2-digit";
          break;
        default:
          hour = "2-digit";
          minute = "2-digit";
          second = "2-digit";
      }
    }
    const result = new Date().toLocaleTimeString(locale, {
      hour12: hour12,
      hour: hour,
      minute: minute,
      second: second,
    });
    return result;
  };
  const [time, setTime] = useState(getCurrentTime());
  useEffect(() => {
    runner = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000);
    return () => {
      if (runner) {
        clearInterval(runner);
      }
    };
  }, []);

  return (
    <div>
      <span className="shadow-black [text-shadow:_#000_0px_0px_2px;] text-white">
        {time}
      </span>
    </div>
  );
};
export default Clock;
