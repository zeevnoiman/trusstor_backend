const express = require('express');
const initJobs = require('./jobs');

const app = express();

app.use(express.json());

initJobs();

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));