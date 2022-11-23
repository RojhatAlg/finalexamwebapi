import express from "express";
const routerUser= express.Router();
import {login, signup, getMe} from '../controllers/userControllers.js';
import Protect from '../middleware/Authmiddelware.js';
routerUser.post('/login',login)
routerUser.post('/signup', signup)
routerUser.get('/me',Protect,getMe)

export default routerUser;
