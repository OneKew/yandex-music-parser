import express from "express";
import {parse} from "../controller/parser.js";



export const mainRouter = express.Router();

mainRouter.get('/', parse)