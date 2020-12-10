import fs from 'fs';
import app from './server.js';

const {
  PORT=3000,
  NODE_ENV,
} = process.env;

// Read users.json file 
const config = JSON.parse(fs.readFileSync('./.vscode/settings.json', { encoding: 'utf8'}));
const DEV_SERVER_PORT = config['liveServer.settings.port'];

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  // if(NODE_ENV === 'production') {
    console.log(`Birthchart List page: http://localhost:${DEV_SERVER_PORT}/`);
    console.log(`Add Birthchart page:  http://localhost:${DEV_SERVER_PORT}/add-birth-data.html`);
    console.log(`Calling Page:  http://localhost:${DEV_SERVER_PORT}/generator.html`);
    console.log(`Public grid page:  http://localhost:${DEV_SERVER_PORT}/call-reporter.html`);
    console.log(`Example Chart page:  http://localhost:${DEV_SERVER_PORT}/example-chart.html`);
  // }
});