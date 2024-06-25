# WebGL Shaded Pyramid

This project is a demonstration of the power and flexibility of WebGL, laying a foundational understanding for creating complex and lifelike 3D graphics directly in the browser. By starting with a simple pyramid, we explore the fundamental principles of vertex and fragment shaders, linear algebra, and vectors—essential tools for harnessing the full potential of WebGL. This introductory project not only showcases a color-detailed rendering of a pyramid shape but also serves as a stepping stone to more intricate and dynamic web-based graphical applications.
## Features

- **Vertex Shader**: Processes vertex positions and passes color information.
- **Fragment Shader**: Colors each pixel based on interpolated vertex colors.
- **Interactive Graphics**: Renders a pyramid with vertices of different colors, showcasing smooth color transitions and realistic shading.

## Technologies Used

- **HTML5**: For the canvas element.
- **JavaScript**: To set up and run WebGL.
- **WebGL**: For rendering graphics.

## How It Works

1. **Vertex Shader**: Processes each vertex of the pyramid, setting its position and passing its color to the fragment shader.
2. **Fragment Shader**: Receives interpolated colors from the vertex shader and sets the color for each pixel, creating a smooth gradient.
3. **WebGL Context**: Initializes the WebGL context and sets up the necessary buffers and shaders.

## Differentiation

This project builds upon the concepts presented in the [Indigo Code tutorial](https://www.youtube.com/watch?v=kB0ZVUrI4Aw), which demonstrates how to create a rainbow-colored triangle using WebGL. While the tutorial provided a foundational understanding of WebGL shaders and rendering, this project extends those ideas by:

- Creating a more complex and lifelike 3D pyramid with realistic shading and coloring.
- Implementing more intricate vertex and fragment shader logic to achieve natural color gradients and shading effects.

The goal was to move beyond a simple demonstration and create a more visually appealing and technically advanced graphical representation.

## Demo

Check out the live demo <a href="https://ezequielcutin.github.io/webgl-pyramid/" target="_blank">here</a>.

## Screenshots

![Screenshot of the rendered pyramid, an object in the real world](screenshot.png)

## Learning Outcomes

- Understanding the basics of WebGL.
- Learning how to write and use vertex and fragment shaders.
- Setting up a simple WebGL project.

## Credits

This project was inspired by the [Indigo Code tutorial on YouTube](https://www.youtube.com/watch?v=kB0ZVUrI4Aw). Special thanks to Indigo Code for providing a clear and informative introduction to WebGL.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[Ezequiel Cutin](https://github.com/ezequielcutin)
