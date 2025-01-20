import Matkul from '../models/Matkul.js';

export const getMatkuls = async (req, res) => {
    try {
        const matkuls = await Matkul.findAll();
        console.log('\nData Mata Kuliah (JSON):');
        console.log(JSON.stringify(matkuls, null, 2));
        res.status(200).json(matkuls);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            message: 'Error fetching mata kuliah',
            error
        });
    }
};

export const getMatkulById = async (req, res) => {
    const { id } = req.params;
    try {
        const matkul = await Matkul.findByPk(id);
        if (!matkul) {
            return res.status(404).json({
                message: 'Mata kuliah not found'
            });
        }
        res.status(200).json(matkul);
    } catch (error) {
        res.status(500).json({
            message: 'Error fetching mata kuliah',
            error
        });
    }
};

export const addMatkul = async (req, res) => {
    const { nama_mk, semester_mk, sks_mk, keterangan_mk } = req.body;
    try {
        const matkul = await Matkul.create({
            nama_mk,
            semester_mk,
            sks_mk,
            keterangan_mk
        });
        res.status(201).json(matkul);
    } catch (error) {
        res.status(500).json({
            message: 'Error adding mata kuliah',
            error
        });
    }
};

export const updateMatkul = async (req, res) => {
    const { id } = req.params;
    const { nama_mk, semester_mk, sks_mk, keterangan_mk } = req.body;
    try {
        const matkul = await Matkul.findByPk(id);
        if (!matkul) {
            return res.status(404).json({
                message: 'Mata kuliah not found'
            });
        }
        await matkul.update({
            nama_mk: nama_mk || matkul.nama_mk,
            semester_mk: semester_mk || matkul.semester_mk,
            sks_mk: sks_mk || matkul.sks_mk,
            keterangan_mk: keterangan_mk || matkul.keterangan_mk
        });
        res.status(200).json(matkul);
    } catch (error) {
        res.status(500).json({
            message: 'Error updating mata kuliah',
            error
        });
    }
};

export const deleteMatkul = async (req, res) => {
    const { id } = req.params;
    try {
        const matkul = await Matkul.findByPk(id);
        if (!matkul) {
            return res.status(404).json({
                message: 'Mata kuliah not found'
            });
        }
        await matkul.destroy();
        res.status(200).json({
            message: 'Mata kuliah deleted'
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error deleting mata kuliah',
            error
        });
    }
};