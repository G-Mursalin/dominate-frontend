// React-React DOM
import { useState, useEffect } from "react";

const useLoadData = (numSize = 0) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cars?size=${numSize}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return [data, setData];
};

export default useLoadData;
