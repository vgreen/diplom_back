import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {User, SpecDiagnose, MainDiagnose, Statistic, Visit, Income, Patient} from "./entity";
import {Request, Response} from "express";
import * as express from "express";
import { setNewField } from "./controllers/Setter";
import { data } from "./migration/data";

createConnection().then(async connection => {
    
    
    
    const cors = require('cors');
    const server = express();
    server.use(cors());
    server.use(express.json())
    
    const users = await connection.manager.find(User);

    setNewField(MainDiagnose, data.diag);

    console.log("Loading users from the database...");
    console.log("Loaded users: ", users);


    server.get('/', async (request: Request, response: Response) => {
        const diag = await getRepository(MainDiagnose)
            .createQueryBuilder("diagnose")
            .select("diagnose")
            .leftJoinAndSelect("diagnose.author", "author")
            .getMany();
        console.log(diag)

        response.send('Hello' + diag[3].author.firstName);
    })
    server.post("/test", function (request, response) {
        console.log(request.body);
        if(!request.body) return response.sendStatus(400);
        response.send(request.body);
    });

    server.listen(3001);
    

}).catch(error => console.log(error));
