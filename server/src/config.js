
//PUERTO DE SERVER
process.env.PORT = process.env.PORT || 4000;


//PUERTO DE DB DE MONGODB
process.env.URLDB = "mongodb://localhost/heroes"


//VARIABLE DE ENTORNO SECRET  SUBIR A HEROKU
process.env.SECRET =  process.env.SECRET || "DESARROLLO_SECRET"






// //URL DE FRONTEND PARA PEDIR DATOS
// process.env.FRONTEND_URL = 'http://localhost:3000'



// //SI ESTOY EN DEV O PRODUCCION
// process.env.NODE_ENV = process.env.NODE_ENV || "dev";



// //PUERTO DE DB DE MONGODB
// let urlDB;

// if (process.env.NODE_ENV === "dev") {
//   urlDB = "mongodb://localhost/heroes";
// } else {
//   urlDB = "mongodb+srv://abraham:jIjRdwT5uLjmCu2L@cafe.8wspk.mongodb.net/cafe";
// }

// process.env.URLDB = urlDB
