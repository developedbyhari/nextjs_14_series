import mongoose from 'mongoose';
const url = ''

export const connect = async () => {
    try {
        mongoose.connect(url)
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("mongodb connected")
        })
    } catch (error) {
        console.log(error)
    }

}