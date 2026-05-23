import PulsoidSocket from './node_module/@pulsoid/socket/src/PulsoidSocket.ts';

const socket = PulsoidSocket.create('77ccc9d3-3a67-485b-a8bb-34095c2ad8f6');

socket.on('heart-rate', (data) => {
    console.log('${data.heartRate} BPM');
    document.getElementsByClassName('value-text').innerHTML = '${data.heartRate}';
});

await socket.connect();