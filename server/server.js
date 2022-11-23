import express from "express";
import cors from 'cors';
import  { UsersApi } from "./usersApi.js";
import  { MenusApi } from "./menuApi.js";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import routerMenu from './routers/menu.js';
import routerUser from "./routers/user.js";
import connectionDB from './config/db.js';
import connectionMenu from './config/dbMenu.js';

dotenv.config();

const app = express();
connectionDB()
connectionMenu()

app.use(bodyParser.json());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET","POST","PUT","DELETE"],
    })
);
app.use(express.urlencoded({
    extended:false
}))


app.use('/api/menus', routerMenu);
app.use('/api/users', routerUser);

routerUser.use((req, res, next) => {
    next()
})


const mongodburl = process.env.MONGODB_URL;
if(mongodburl){
    const client = new MongoClient(mongodburl);

    client
        .connect()
        .then((conn) => app.use("/api/menus",
            MenusApi(conn.db(process.env.MONGODB_DATABASE || "test"))));

}
if(mongodburl){
    const client = new MongoClient(mongodburl);

    client
        .connect()
        .then((conn) => app.use("/api/users",
            UsersApi(conn.db(process.env.MONGODB_DATABASE || "test"))));

}





app.use(express.static("../client/dist"));



const server = app.listen(process.env.PORT || 2500,
    () => {console.log(`Server started on: http://localhost:${server.address().port}`)});