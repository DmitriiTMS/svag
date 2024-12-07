import express from 'express';

const expressApp = express();

expressApp.get('/ping', (req, res) => {
  res.send('pong');
});

expressApp.listen(4200, () => {
  console.log('start server in port http://localhost:4200');
});
