const mongoose = require("mongoose");

const connectToDatabase = () => {
    mongoose
        .connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.DATABASE_NAME}.9bs11pv.mongodb.net/?retryWrites=true&w=majority`
        )
        .then(() => console.log("CONECTADO AO MONGO"))
        .catch((err) => console.log("erro ao conectar-se ao mongo: ", err));
};

module.exports = connectToDatabase;
