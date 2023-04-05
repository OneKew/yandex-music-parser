import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import {mainRouter} from "./route/main-router.js";

export const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors());
app.use(morgan('dev'));

app.use('/', mainRouter);
