import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log("OK");
});

export default app;