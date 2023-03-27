const mongoose = require('mongoose');
const dbConnection =  async () => {
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true
        });
        console.log("Connected to MongoDB");
    }catch (error){
        console.error(error);
        throw new Error("Error connection database");
    }

}

module.exports = {
    dbConnection
}