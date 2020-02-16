//definicion del puerto 
process.env.PORT = process.env.PORT || 3000;

//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//base de datos
let urlDB;

if (process.env.NODE_ENV === 'dev') {
  urlDB = 'mongodb://localhost:27017/cafe';
} else {
  urlDB = 'mongodb+srv://alberto:YIQMTnZGLjRngqKi@cluster0-ctcpe.mongodb.net/cafe?retryWrites=true&w=majority';
}

process.env.URL_DB = urlDB;