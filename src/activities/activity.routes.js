import { Router } from "express";
import * as http from "./activity.http.js";

export const router = Router()

router
    .route('/')
    .get(
        http.getMain
    );

router
    .route('/data')
    .get(
        http.getInfo
    )