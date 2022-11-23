import express from "express";
import request from "supertest";
import bodyParser from "body-parser";
import { UsersApi } from "../usersApi.js";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";


const app = express();
app.use(bodyParser.json());
let mongoClient;

beforeAll(async () => {
    dotenv.config();
    mongoClient = new MongoClient(process.env.MONGODB_URL);
    await mongoClient.connect();
    const database = mongoClient.db("test");
    await database.collection("menus").deleteMany({});
    app.use("/api/menus", UsersApi(database));
});

afterAll(() => {
    mongoClient.close();
});

describe("menus api test suite", () => {
    it("does something", async () => {
       const agent = request.agent(app);
       const response = await agent
           .get("/api/menus");

       expect(response.status).toEqual(200);
    });
});