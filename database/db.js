const mongoose = require("mongoose");

const connectToDatabase = () => {
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@database.9bs11pv.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true, // parametros pra evitar erros referentes a digitação da url, algo assim
      }
    )
    .then(() => console.log("CONECTADO AO MONGO"))
    .catch((err) => console.log("erro ao conectar-se ao mongo: ", err));
};

module.exports = connectToDatabase;
