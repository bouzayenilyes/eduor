"use client";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
type Props = {
  marginTop: string;
  showAll: boolean;
};
const CounterArea = ({ marginTop, showAll }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const targetElement = document.querySelector(".tf__counter2_overlay");

    if (targetElement) {
      intersectionObserverRef.current = new IntersectionObserver(
        onVisibilityChange,
        {
          threshold: 0.5,
        }
      );

      intersectionObserverRef.current.observe(targetElement);
    }

    return () => {
      if (intersectionObserverRef.current) {
        intersectionObserverRef.current.disconnect();
      }
    };
  }, []);
  return (
    <div className={`tf__counter_area ${marginTop}`}>
      <div className="tf__counter2_overlay">
        <ul className=" d-flex flex-wrap">
          <li className="tf__single_counter">
            <h2 className="counter">
              {isVisible && <CountUp start={1} end={22} duration={5} />}
            </h2>
            <h4>Successflly Trained</h4>
          </li>
          <li className="tf__single_counter">
            <h2 className="counter">
              {isVisible && <CountUp start={1} end={69} duration={5} />}
            </h2>
            <h4>Keywords Updated</h4>
          </li>
          <li className="tf__single_counter">
            <h2 className="counter">
              {isVisible && <CountUp start={1} end={56} duration={5} />}
            </h2>
            <h4>Google Search</h4>
          </li>
          {showAll && (
            <li className="tf__single_counter">
              <h2 className="counter">
                {isVisible && <CountUp start={1} end={13} duration={5} />}
              </h2>
              <h4>Success Rate</h4>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default CounterArea;
