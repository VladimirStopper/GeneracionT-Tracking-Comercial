import express from 'express';
import mysql from 'mysql';

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  database: 'db_tracking_comercial',
  user: 'root',
  password: '',
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado con el identificador ' + connection.threadId);
});

app.use(express.json());

export default connection;

