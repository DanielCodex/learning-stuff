import React, { useEffect, useRef } from "react";

function App() {
  // we pass isFocus so then we can
  // return <ComponentWithDomApi label="Label" value="Value" isFocus />;
  return (
    // ah shit it worked lol
    // you can also write (c) => c
    <ComponentWithDomApi label="Label" value="Value" isFocus={(c) => !!c} />
  );
}

function ComponentWithDomApi({ label, value, isFocus }) {
  const ref = useRef();

  useEffect(() => {
    if (isFocus(false)) {
      ref.current.focus();
    }
  }, [isFocus]);

  return (
    <label>
      {label}: <input type="text" value={value} ref={ref} />
    </label>
  );
}

export default App;
