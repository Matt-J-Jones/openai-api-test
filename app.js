const GptClient = require('./gptClient');

class App {
  constructor() {
    this.response = '';
  }

  sendRequest(text) {
    const gpt = new GptClient();
    return gpt.makeRequest(text)
      .then((gptresponse) => {
        this.response = gptresponse;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  chat(text) {
    return this.sendRequest(text)
      .then(() => console.log(this.response));
  }
}

// const chatbot = new App();
// chatbot.chat('Write a horror story in two sentences')

module.exports = App;
