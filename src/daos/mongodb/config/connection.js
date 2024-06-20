import {connect} from "mongoose";

const connectionString = 'mongodb+srv://Admin:y0IHY9LQhldaMPIs@ivancluster.ruow6ge.mongodb.net/velvetPerfumerie?retryWrites=true&w=majority&appName=IvanCluster'

export const initMongoDB = async () => {
    try {
        await connect(connectionString);
        console.log("conectado a base de datos mongoDB")
    } catch (error) {
        console.log(`ERROR -> ${error}`);
    }
}