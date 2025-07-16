import { useEffect, useState } from "react";
import { useDocumentTitle } from "../../utils/useDocumenttitle";

export const CountButton = () => {
  const [count, setCount] = useState(0);

  useDocumentTitle(`${count} count`);

  return (
    <>
      <p>You click {count} times!</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click Me!
      </button>
    </>
  );
};
