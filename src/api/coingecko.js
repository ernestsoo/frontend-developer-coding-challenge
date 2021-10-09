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

export const getGlobalInformation = () => {
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

export const getCoinsList = (page = 1, per_page = 10) => {
  return new Promise((resolve, reject) => {
    fetch(
      `${COINGECKO_API}/coins/markets?vs_currency=usd&page=${page}&per_page=${per_page}&sparkline=true`
    )
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

export const getAllCoins = () => {
  return new Promise((resolve, reject) => {
    fetch(`${COINGECKO_API}/coins/list`)
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
