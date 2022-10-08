import { Sequelize } from "sequelize";

const db = new Sequelize("productflow", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
db
  .authenticate()
  .then(() => {
    console.log('You are connected to mySQL database.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default db;
