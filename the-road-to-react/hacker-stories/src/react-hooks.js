import React, { useEffect, useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);
  const [timer, setTimer] = useState(0);

  // think like a design pattern rather than something scientific
  useEffect(() => {
    let interval;
    if (isOn) {
      interval = setInterval(() => {
        setTimer((currentTime) => currentTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isOn]);

  const onReset = () => {
    setIsOn(false);
    setTimer(0);
  };

  return (
    <div>
      {timer}
      <br />
      {!isOn && (
        <button type="button" onClick={() => setIsOn(true)}>
          start
        </button>
      )}
      {isOn && (
        <button type="button" onClick={() => setIsOn(false)}>
          stop
        </button>
      )}
      <button type="button" onClick={onReset}>
        rest
      </button>
    </div>
  );
}

export default App;
