const App = require('./app');
const GptClient = require('./gptClient');

jest.mock('./gptClient');

describe('App', () => {
  let originalLog;
  let loggedOutput;

  beforeEach(() => {
    originalLog = console.log;
    loggedOutput = '';
    console.log = jest.fn((output) => {
      loggedOutput += output;
    });
  });

  afterEach(() => {
    console.log = originalLog;
    jest.clearAllMocks();
  });

  it('should send request to API and receive response', async () => {
    // Mock the makeRequest method of the GptClient instance
    const mockMakeRequest = jest.fn().mockResolvedValue('The capital of England is London');
    GptClient.prototype.makeRequest = mockMakeRequest;

    // Create an instance of the App class
    const chatbot = new App();

    // Call the chat method with a test message
    await chatbot.chat("What is the capital of England?");

    // Expect makeRequest to have been called with the test message
    expect(mockMakeRequest).toHaveBeenCalledWith("What is the capital of England?");

    // Expect console.log to have been called with the expected response
    expect(console.log).toHaveBeenCalledWith("The capital of England is London");
  });
});
