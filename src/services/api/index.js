const callApi = {
  getCards() {
    return fetch("./data.json");
  }
};

export default callApi;
