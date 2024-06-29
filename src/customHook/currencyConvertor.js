import { useEffect, useState } from "react";

function useCurrencyConvertor(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      .catch((error) => console.error("Error fetching data: ", error));
  }, [currency]);

  return data;
}

export default useCurrencyConvertor;
