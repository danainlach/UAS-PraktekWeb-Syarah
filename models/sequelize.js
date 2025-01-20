import {
    Sequelize
} from 'sequelize';

const sequelize = new Sequelize('dbuas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

try {
    await sequelize.authenticate();
    console.log('Hahahah, berhasil bro...');
} catch (error) {
    console.error('Pesan: Masa gitu saja gagal !', error);
}

export default sequelize;