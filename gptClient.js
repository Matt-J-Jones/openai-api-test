const apiKey = require('./apiKey');
const https = require('https');

class GptClient {
  constructor() {
    this.apiKey = apiKey;

    this.options = {
      hostname: 'api.openai.com',
      path: '/v1/chat/completions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      }
    };
  }

  makeRequest(message) {
    return new Promise((resolve, reject) => {
      // Create request to be sent to GPT

      const requestData = {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: message }
        ],
        max_tokens: 100
      };

      const req = https.request(this.options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          const response = JSON.parse(data);
          resolve(response.choices[0].message.content);
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.write(JSON.stringify(requestData));
      req.end();
    });
  }
}

module.exports = GptClient;