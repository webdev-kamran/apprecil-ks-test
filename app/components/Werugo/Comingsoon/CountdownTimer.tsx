"use client"
import React, { useState, useEffect } from 'react';
import Collen from '@/app/assets/werugo/images/icons/collen.svg'
import Image from 'next/image';
interface CountdownTimerProps {
  targetDate: any;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}


const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [targetDate]);

  const formatDoubleDigit = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString();
  };

  const renderDigits = (value: number) => {
    const stringValue = formatDoubleDigit(value);
    return stringValue.split('').map((digit, index) => (
      <div key={index} className='bg-[#27323B] rounded sm:py-3 p-2 text-white w-8 xs:w-10 sm:w-12 md:w-14 relative shadow-2'>
        {digit}
        <span className='h-0.5 bg-black absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-1 items-center'>
          <span className='w-0.5 xs:w-1 h-2 rounded bg-white'></span>
          <span className='w-0.5 xs:w-1 h-2 rounded bg-white'></span>
        </span>
      </div>
    ));
  };

  return (
    <div className="flex justify-center items-center gap-1 xs:gap-2 md:gap-3 pt-7">
      {timeLeft.days !== undefined && (
        <div className="text-center space-y-2">
          <div className="font-semibold tracking-widest uppercase text-grey text-sm text-center">Days</div>
          <div className="text-xl xs:text-2xl md:text-4xl flex gap-1 font-bold justify-center text-center">
            {renderDigits(timeLeft.days)}
          </div>
        </div>
      )}
      <div className='pt-6 shrink-0'><Image width={20} height={20} src={Collen} alt="Collen" className='w-1 xs:w-2 h-auto' /></div>
      {timeLeft.hours !== undefined && (
        <div className="text-center space-y-2">
          <div className="font-semibold tracking-widest uppercase text-grey text-sm text-center">Hours</div>
          <div className="text-xl xs:text-2xl md:text-4xl flex gap-1 font-bold justify-center text-center">
            {renderDigits(timeLeft.hours)}
          </div>
        </div>
      )}
      <div className='pt-6 shrink-0'><Image width={20} height={20}  src={Collen} alt="Collen" className='w-1 xs:w-2 h-auto' /></div>
      {timeLeft.minutes !== undefined && (
        <div className="text-center space-y-2">
          <div className="font-semibold tracking-widest uppercase text-grey text-sm text-center">Minutes</div>
          <div className="text-xl xs:text-2xl md:text-4xl flex gap-1 font-bold justify-center text-center">
            {renderDigits(timeLeft.minutes)}
          </div>
        </div>
      )}
      <div className='pt-6 shrink-0'><Image width={20} height={20}  src={Collen} alt="Collen" className='w-1 xs:w-2 h-auto' /></div>
      {timeLeft.seconds !== undefined && (
        <div className="text-center space-y-2">
          <div className="font-semibold tracking-widest uppercase text-grey text-sm text-center">Seconds</div>
          <div className="text-xl xs:text-2xl md:text-4xl flex gap-1 font-bold justify-center text-center">
            {renderDigits(timeLeft.seconds)}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;