import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!. Me livrei da maldição');
});

app.listen(3333, () => console.log('Server is runnig: http://localhost:3333'));
