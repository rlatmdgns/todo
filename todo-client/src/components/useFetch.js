import React, { useEffect, useState } from "react";

const useFetch = (callback, url) => {
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const initalData = await response.json();
    console.log(initalData);
    callback(initalData);
    setLoading(false);
  };
  useEffect(() => {
    fetchInitialData(); //비동기 함수를 직접 넣지 말기
  }, []);

  return loading;
};

export default useFetch;
