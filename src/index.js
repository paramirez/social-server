import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import config from './config';
import mongoose from './config/database';
import routes from './routes/v1';
import socketio from 'socket.io';

mongoose
	.connect(config.database.url)
	.then(() => process.stdout.write('Run mongoose \n'))
	.catch(err => process.stdout.write(err + '\n'));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.use(morgan('dev'));

app.listen(config.app.port, () => process.stdout.write(`Run in port: ${config.app.port} \n`));

socketio.listen(300);
