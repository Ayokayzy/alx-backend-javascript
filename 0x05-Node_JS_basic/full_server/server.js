import express from 'express';
import route from './routes/index';

const app = express();
app.use(route);
const port = 1245;

app.listen(port, () => {
  // console.log(`Server running at http://127.0.0.1:${port}/`);
});

export default app;
