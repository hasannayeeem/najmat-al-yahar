import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useSadikur = () => {
  const lc = useLocation();
  const [sadikur, setSadikur] = useState([]);
  useEffect(() => {
    fetch("sadikur.json")
      .then((res) => res.json())
      .then((data) => setSadikur(data));
  }, [sadikur, setSadikur, lc?.pathname]);
  return [sadikur,  lc?.pathname];
};
export default useSadikur;
