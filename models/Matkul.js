import { DataTypes } from 'sequelize';
import sequelize from './sequelize.js';

const Matkul = sequelize.define('Matkul', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_mk: {
        type: DataTypes.STRING,
        allowNull: false
    },
    semester_mk: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sks_mk: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    keterangan_mk: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'matakuliah',
    timestamps: false
});

export default Matkul;