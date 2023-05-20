import { useEffect } from "react";

const usePath = (title) => {
  document.title = title;

  useEffect(() => {}, [title]);
};
export default usePath;
