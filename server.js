const express = require('express');
const app = express();

const os = require('os');
const host = os.hostname();
let port = process.env.PORT || 9000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!'
    });
});

app.listen(port, () => {
    console.log(`http://${host}:${port}`);
});