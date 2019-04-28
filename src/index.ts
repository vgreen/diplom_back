import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Request, Response} from "express";
import * as express from "express";

createConnection().then(async connection => {
    
    
    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");


    const cors = require('cors');
    const server = express();
    server.use(cors());
    server.use(express.json())
    
    server.get('/', (request: Request, response: Response) => {
        response.send('Hello' + users[0].firstName)
    })

    server.post("/test", function (request, response) {
        console.log(request.body);
        if(!request.body) return response.sendStatus(400);
        
        response.send(request.body);
    });

    server.listen(3001);
    

}).catch(error => console.log(error));
