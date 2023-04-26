# YouTube Relay

YouTube Relay is a simple express app that relays YouTube videos to support streaming in a VR environment. It uses the `youtube-dl-js-wrapper` to implement the YouTube downloader, and the video is hosted on a Docker container with `hop.io`. 

With YouTube Relay, users do not need to wait for the entire video to download before streaming it. The app supports streaming directly from the server. Plus, it is CORS supported, which means that anyone from any origin can access and stream videos directly from here.

## Installation

To run YouTube Relay, you will need to have Node.js and NPM installed on your machine. 

1. Clone the repository: `git clone https://github.com/vr-enhanced-learning/youtube-relay.git`.
2. Navigate to the project directory: `cd youtube-relay`.
3. Install the dependencies: `npm install`.
4. Start the server: `npm start`.

The server should now be running on `http://localhost:3000`.

## Usage

YouTube Relay has two REST endpoints:

- `/`: This endpoint will indicate whether the API is online or not.
- `/:id`: This endpoint will stream the video for the given YouTube video ID.
- `*`: This endpoint will return a 404 error for all other routes.

You can use any HTTP client (e.g., Postman) to make requests to the endpoints. For example, to stream a video, send a GET request to `http://localhost:3000/VIDEO_ID`, where `VIDEO_ID` is the ID of the YouTube video you want to stream.

## Dependencies

YouTube Relay has two dependencies:

- `express`: A web framework for Node.js.
- `youtube-dl-js-wrapper`: A JavaScript library for downloading YouTube videos.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
