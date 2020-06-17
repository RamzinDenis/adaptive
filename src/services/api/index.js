const callApi = {
  getCards() {
    return fetch(process.env.BASE_URL + "data.json");
  }
};

export default callApi;
