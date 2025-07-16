import React, { useEffect, useState } from "react";

interface useKeyPressReturnI {
  emoji: string;
}

export const useKeyPress = (): useKeyPressReturnI => {
  const [emoji, setEmoji] = useState("");
  const onKeyDown = (e: KeyboardEvent) => {
    if (e.code === "KeyH") {
      setEmoji("😀");
    } else if (e.code === "KeyS") {
      setEmoji("😒");
    }
  };

  const onReset = (e: KeyboardEvent) => {
    if (e.code === "KeyH" || e.code === "KeyS") setEmoji("");
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onReset);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onReset);
    };
  }, []);

  return { emoji };
};
