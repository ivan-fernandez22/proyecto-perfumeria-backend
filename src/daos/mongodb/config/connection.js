import {connect} from "mongoose";
import 'dotenv/config'

const connectionString = process.env.MONGO_URL;

export const initMongoDB = async () => {
    try {
        await connect(connectionString);
        console.log("conectado a base de datos mongoDB")
    } catch (error) {
        console.log(`ERROR -> ${error}`);
    }
}