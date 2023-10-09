const canvas = document.getElementById('graphics');
const gl = canvas.getContext('webgl');

if(!gl) {
    console.error('No support for WebGL in this browser');
}

