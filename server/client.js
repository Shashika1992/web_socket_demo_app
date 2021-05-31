const WebSocket = require('ws');
const random = require('random')

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', function open() {
    const array = new Float32Array(100);

    while(true) {
        let x = random.int((min = 0), (max = 1));
        ws.send(x);
    }


});