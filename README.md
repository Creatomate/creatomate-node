# Creatomate Node.js Library

Create videos and images from your Node.js application!

[Creatomate](https://creatomate.com) is a media generation API for editing and rendering videos and images using code. The platform uses templates and JSON for generating **MP4**, **GIF**, **JPEG** or **PNG** files. All processing is handled by Creatomate's cloud infrastructure, so you do not need to maintain your own servers.

This library makes working with the Creatomate API even easier by providing a well-structured, lightweight interface. With just a few lines of code, you can create hundreds, even thousands, of dynamic videos and images.

As an alternative to creating everything from code, Creatomate also comes with an online video editor to create reusable templates. These templates can then be rendered with custom and personalized data using this Node.js library. Check out [Creatomate.com](https://creatomate.com/developers) to learn more.

## Usage

Examples of how to use this library can be found at: [https://github.com/creatomate/node-examples](https://github.com/creatomate/node-examples). For general information about the Creatomate API, check out the [Creatomate API docs](https://creatomate.com/docs/api/introduction).

### Installation

Install `creatomate` into your Node.js project with the following command:

```bash
npm install creatomate
```

### Quick example

Video or images are composed from elements (*videos, images, texts, shapes, compositions*), that can be styled, transformed, and animated. You can compare the process to building a webpage using HTML elements, except you're creating a video or image instead. A basic implementation looks like this. Here, two videos are stitched together with a text overlay:

```javascript
const Creatomate = require('creatomate');

const client = new Creatomate.Client('Insert your API key here');

const source = new Creatomate.Source({

  // Supported formats are mp4, gif, jpg and png
  outputFormat: 'mp4',

  // Output resolution
  width: 1280,
  height: 720,

  // Add videos, images, texts, shapes, compositions, keyframes, animations and more. Check out:
  // https://github.com/creatomate/node-examples
  elements: [

    // Video 1
    new Creatomate.Video({
      track: 1,
      source: 'https://creatomate-static.s3.amazonaws.com/demo/video1.mp4',
    }),

    // Video 2, played after video 1 as it is on the same track
    new Creatomate.Video({
      track: 1,
      source: 'https://creatomate-static.s3.amazonaws.com/demo/video2.mp4',
      transition: new Creatomate.Fade({ duration: 1 }),
    }),
    
    // Text overlay
    new Creatomate.Text({
      text: 'Your text overlay here',
      
      // Make the container as big as the screen and add some padding
      width: '100%',
      height: '100%',
      xPadding: '3 vmin',
      yPadding: '8 vmin',

      // Align text to the bottom center
      xAlignment: '50%',
      yAlignment: '100%',

      // Text style
      font: new Creatomate.Font('Aileron', 800, 'normal', '8.48 vh'),
      shadow: new Creatomate.Shadow('rgba(0,0,0,0.65)', '1.6 vmin'),
      fillColor: '#ffffff',
    }),
  ],
});

client.render({ source })
  .then((renders) => console.log('Your video is ready:', renders));
```

## Issues & Comments

Feel free to contact us if you encounter any issues with the library or Creatomate API at [support@creatomate.com](mailto:support@creatomate.com).

## License

The Creatomate JavaScript Library is licensed under the MIT license. Please refer to the [LICENSE](https://github.com/Creatomate/creatomate-node/blob/main/LICENSE) for more information.
