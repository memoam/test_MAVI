import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import pkg from '../package.json';
const app = express();
// Routes

// Settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);
app.set('pkg', pkg); // project data

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

// Routes
app.get('/', (req, res) => {
  const {
    name,
    version,
    description,
    author
  } = app.get('pkg');
  res.json({
    name,
    version,
    description,
    author
  });
});
export default app;