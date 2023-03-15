import mongoose from 'mongoose';

async function main(){
    await mongoose.connect('mongodb://localhost:27017/getapet")
    console.log("Conectou no mongo");
}