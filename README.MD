# I2X Coding Challenge

## Challenge: 
Implementation of an app that processes speech input and transform it to text using ASRClient library.

## Solution:

### Architecture:

The application is build using React and service workers for live reloading while developing.

There are four main (reactive) components:
- **Header**: contains the status bar
- **Chat**: grouping component for rendering the chat, message bubbles, and a log for debugging purposes
- **Toolbar**: intended as a configuration sidebar, currently holds the spotting phrases configuration
- **Footer**: holds the start/stop button

These components and their child components interact with each other via reducers (currently only the ASR reducer), which hold the global state. This reducer also controls the ASRClient.

The main functions (non-rendering) are unit tested.

Additionally, I have included TailwindCSS as a dependency to use known CSS patterns, specially that of the grid systems, and in general to ensure that all components have a similar look to them.

##### Dependencies:
- React and Redux
- lodash
- protobufjs
- PropTypes
- TailwindCSS

### Running it:
 - run `npm install`
 - run `npm start`
 - navigate to `localhost:3000`
 
### Testing it:
 Assuming you've installed dependencies (see above)
 - run `npm run test`

### Run on Docker:
There are two Dockerfiles that can be used: Slim and normal.
The difference is, the Slim one uses your local build to save time. However, this would not work in a CI/CD pipeline, so it's only for testing purposes. 

#### Slim
- edit `.dockerignore` and remove the line with `build` on it
- run `npm run build`
- run `docker build . -f slim.Dockerfile -t i2x-slim-docker`
- run `docker run -p 8000:80 i2x-slim-docker`
- navigate to `localhost:8080`

### Full
- make sure that `build` is on the `.dockerignore` file.
- run `docker build . -t i2x-docker`
- run `docker run -p 8000:80 i2x-docker`
- navigate to `localhost:8080`
