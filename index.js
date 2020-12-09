import app from './server.js';

const {
  PORT=3000,
  NODE_ENV,
} = process.env;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  if(NODE_ENV === 'production') {
    console.log(`Birthchart List page: http://localhost:${PORT}/`);
    console.log(`Add Birthchart page:  http://localhost:${PORT}/add-birth-data.html`);
    console.log(`Calling Page:  http://localhost:${PORT}/generator.html`);
    console.log(`Public grid page:  http://localhost:${PORT}/call-reporter.html`);
    console.log(`Example Chart page:  http://localhost:${PORT}/example-chart.html`);
  }
});