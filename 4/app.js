import Worker from 'worker-loader!./Worker.js';

import Worker from './file.worker.js';
const worker = new Worker();
worker.postMessage({ a: 1 });
worker.onmessage = function (event) {};
worker.addEventListener("message", function (event) {});