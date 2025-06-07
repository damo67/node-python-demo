// app.js
const { spawn } = require('child_process');

const py = spawn('python', ['hello.py']);

py.stdout.on('data', (data) => {
  console.log(`Python says a few things: ${data}`);
});

py.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});

py.on('close', (code) => {
  console.log(`Python process exited with code ${code}`);
});
