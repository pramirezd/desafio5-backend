import { Router } from "express";
import express from 'express';
import { apiGetJewelries, apiGetFilteredJewelries, apiGetJewelry } from "../controllers/api.js";

const router = Router();

router.use(express.json());

router.get('/joyas', apiGetJewelries);
router.get('/joyas/filtros', apiGetFilteredJewelries);
router.get('/joyas/joya/:id', apiGetJewelry);

export default router;