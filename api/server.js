import express from 'express';
import data from '../src/components/testData';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({ data: [] });
});

router.get('/contests', (req, res) => {
    res.send(data);
});

export default router;