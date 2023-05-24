const https = require('https');
const { Writable } = require('stream');
const { Readable } = require('stream');
const GptClient = require('./gptClient');

jest.mock('https');

describe('GptClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('makeRequest should return API response', async () => {
    const mockResponse = {
      choices: [
        { message: { content: 'Mock API response' } }
      ]
    };
    const mockResponseBody = JSON.stringify(mockResponse);

    const client = new GptClient();

    const mockReq = new Writable({
      write: jest.fn((chunk, encoding, callback) => {
        callback();
      })
    });

    const mockRes = new Readable();

    mockRes.push(mockResponseBody);
    mockRes.push(null); 

    https.request.mockImplementation((options, callback) => {
      callback(mockRes);
      return mockReq;
    });

    const responsePromise = client.makeRequest('Test message');

    const response = await responsePromise;

    expect(response).toBe('Mock API response');
    expect(https.request).toHaveBeenCalledWith(expect.objectContaining({ method: 'POST' }), expect.any(Function));
  });
});
