# OpenAI GPT3.5 API Test

A simple test to learn the OpenAI GPT3.5 API. It allows the user to interact with the GPT3.5 model by sending a prompt and receiving a response from the API.

## Installation

To use this project, please follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running the following command in the project directory:
   ```
   npm install
   ```
3. Obtain an API key from OpenAI. You can visit [OpenAI API Keys](https://platform.openai.com/account/api-keys) to get your API key.
4. Once you have obtained the API key, create a file called `apiKey.js` in the project directory.
5. Inside the `apiKey.js` file, add the following code and replace `'YOUR_API_KEY'` with your actual API key:
   ```javascript
   module.exports = 'YOUR_API_KEY';
   ```

## Usage

To use the OpenAI GPT3.5 API test, follow these steps:

1. Make sure you have completed the installation steps mentioned above.
2. Open the `app.js` file and uncomment the following lines:
    ```javascript
    // const chatbot = new App();
    // chatbot.chat('Write a horror story in two sentences')
    ```
3. Replace the prompt 'Write a horror story in two sentences' with your desired prompt. For example:
   ```javascript
   chatbot.chat("What is the capital of France?");
   ```
4. Save the changes to the `app.js` file.
5. In the terminal, navigate to the project directory.
6. Run the following command to execute the code:
   ```
   node app.js
   ```
7. The response from the GPT3.5 model will be displayed in the console.

## How It Works

The project consists of two main files: `app.js` and `gptClient.js`.

- `app.js` is the entry point of the application. It creates an instance of the `App` class and calls the `chat` method to interact with the GPT3.5 model. The `chat` method sends a request to the `GptClient` class to make an API call and receives the response.
- `gptClient.js` defines the `GptClient` class, which is responsible for making API requests to the OpenAI GPT3.5 model. The `makeRequest` method sends a POST request to the OpenAI API with the provided prompt and receives the generated response.