//definicion del puerto 
process.env.PORT = process.env.PORT || 3000;

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//vencimiento del token
//60 segundos * 60 mins = 1hr
process.env.CADUCIDAD_TOKEN = 60 * 60  * 24 * 30;

//SEED de autenticacion
process.env.SEED = process.env.SEED || 'secret';

//base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/cafe';
} else {
  urlDB = process.env.MONGO_URI;
}

process.env.URL_DB = urlDB;