import express from 'express';
import cors from 'cors';
import router from './router';
import expressListRoutes from 'express-list-routes';


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const API_PREFIX = '/api/v1';
app.use(`${API_PREFIX}/todos`, router);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  const paths = expressListRoutes(app);
});