import express from 'express';
import {
    getMatkuls,
    getMatkulById,
    addMatkul,
    updateMatkul,
    deleteMatkul
} from '../controllers/MatkulController.js';

const router = express.Router();

router.get('/api/matkuls', getMatkuls);
router.get('/api/matkuls/:id', getMatkulById);
router.post('/api/matkuls', addMatkul);
router.put('/api/matkuls/:id', updateMatkul);
router.delete('/api/matkuls/:id', deleteMatkul);

export default router;