var vertexShaderText = [
    'precision mediump float;',
    '',
    'attribute vec2 vertPosition;',
    'attribute vec3 vertColor;',
    'varying vec3 fragColor;',
    '',
    'void main()',
    '{',
    'fragColor = vertColor;',
    'gl_Position = vec4(vertPosition, 0.0, 1.0);',
    '}'
].join('\n');

var fragmentShaderText = [
    'precision mediump float;',
    '',
    'varying vec3 fragColor;',
    'void main()',
    '{',
    '   gl_FragColor = vec4(fragColor, 1.0);',
    '}' 
].join('\n');

var InitDemo = function () {
    console.log('This is working');

    // get canvas from html file
    var canvas = document.getElementById('game-surface');
    var gl =  canvas.getContext('webgl');

    // if webgl can't be gotten from browser
    if (!gl) {
        console.log('WebGL not supported, falling back on experimentalGL');
        gl = canvas.getContext('experimental-webgl');
    }
    if (!gl) {
        alert('Your browser does not support WebGL');
        return;
    }

    // gl.clearColor(R, G, B, A);
    gl.clearColor(0.75, 0.85, 0.8, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //
    // Create shaders
    //
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    
    //(our javScriptVariable,  our C++ code in side our js file)
    gl.shaderSource(vertexShader, vertexShaderText);
    gl.compileShader(vertexShader);
    // chcek for errors in vertex shader
    if(!gl.getShaderParameter(vertexShader,gl.COMPILE_STATUS)) {
        console.error("ERROR compiling vertex shader", gl.getShaderInfoLog(vertexShader));
        return;
    }

    gl.shaderSource(fragmentShader,fragmentShaderText);
    gl.compileShader(fragmentShader);
    // check for errors in fragment sahder
    if(!gl.getShaderParameter(fragmentShader,gl.COMPILE_STATUS)) {
        console.error("ERROR compiling fragment shader", gl.getShaderInfoLog(fragmentShader));
        return;
    }

    // tell openGL to
    //make program run our shaders
    var program = gl.createProgram();
    gl.attachShader(program,vertexShader);
    gl.attachShader(program,fragmentShader);
    // then compile and run the C++ code
    gl.linkProgram(program);
    // check for errors in compiling
    if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
        console.error('ERROR LINKING PROGRAM!', gl.getProgramInfoLog(program));
        return;
    }
    // IDK what this catches, but it catches some other stuff
    gl.validateProgram(program);
    if(!gl.getProgramParameter(program,gl.VALIDATE_STATUS)){
        console.error("ERROR VALIDATING PROGRAM!", gl.getProgramInfoLog(program));
        return;
    }



    
    // 
    // Create buffer
    //
    var triangleVertices = 
    [ //x , y,      r, g, b,
        0.0, 0.5,    1.0, 0.8431, 0.0,
        -0.5, -0.5,  0.8039, 0.5216, 0.2471,
        0.5, -0.5,  0.6275, 0.3216, 0.1765
    ];
    
    var triangleVertexBufferObject = gl.createBuffer();
    // just like we did earlier we got to do this
    //( current active buffer, buffer we gone make current)
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);

    // so java script stores numbers from triangleVertices in 64bit, GLSL uses 32
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
    //    ( active buffer, in our case triangleVerex)

    var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
    var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
    gl.vertexAttribPointer(
        positionAttribLocation, // attribute location
        2, // number of elemnts per attribute
        gl.FLOAT, // type of elements
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT, //size of individual vertex, in our case 4
        0//offset from beginning of vertex to this one
    );
    gl.vertexAttribPointer(
        colorAttribLocation, // attribute location
        3, // number of elemnts per attribute
        gl.FLOAT, // type of elements
        gl.FALSE,
        5 * Float32Array.BYTES_PER_ELEMENT, //size of individual vertex, in our case 4
        2 * Float32Array.BYTES_PER_ELEMENT //offset from beginning of vertex to this one
    );


    gl.enableVertexAttribArray(positionAttribLocation);
    gl.enableVertexAttribArray(colorAttribLocation);

    // 
    // Main render loop
    //
    gl.useProgram(program);
    // (what we want to draw, how many we want to skip, how many to draw )
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    
};



