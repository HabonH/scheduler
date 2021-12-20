import { useState } from "react";


// Allows transitions to different phases by using 'useState', this helps when transition from
// different components in the App (e.g Show to Edit, etc)
export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setHistory((prev) => {
      const historyCopy = [...prev];
      if (replace === true) {
        historyCopy.pop();
      }

      historyCopy.push(newMode);
      return historyCopy;
    });
  };

  const back = () => {
    if (history.length < 2) {
      return;
    }
    setHistory((prev) => {
      const historyCopy = [...prev];
      historyCopy.pop();
      return historyCopy;
    });
  };

  const mode = history[history.length - 1];

  return { transition, back, mode };
}
