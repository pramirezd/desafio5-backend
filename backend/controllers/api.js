import dotenv from 'dotenv';
import { getJewelry, getJewelries, getFilteredJewelries } from '../models/queries.js';

dotenv.config();

export const apiGetJewelry = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await getJewelry(id);
        res.json(result);
    } catch (error) {
        res.status(error.status).json({ message: error.message });
    }
}

export const apiGetJewelries = async (req, res) => {
    try {
        const queryStrings = req.query;
        const result = await getJewelries(queryStrings);
        return res.status(200).json({ result });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const apiGetFilteredJewelries = async (req, res) => {
    try {
        const queryStrings = req.query;
        const result = await getFilteredJewelries(queryStrings);
        return res.status(200).json({ result });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
