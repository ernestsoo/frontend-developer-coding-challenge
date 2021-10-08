const COINGECKO_API = "https://api.coingecko.com/api/v3";

export const getTrendingCoins = () => {
  return new Promise((resolve, reject) => {
    fetch(`${COINGECKO_API}/search/trending`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getCoinMarketInformation = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${COINGECKO_API}/coins/markets?vs_currency=usd&ids=${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getGlobalInformation = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${COINGECKO_API}/global`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
