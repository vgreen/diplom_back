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
    

    setNewField( User, data.user );
    setNewField( SpecDiagnose, data.spec );
    setNewField( Statistic, data.stitistic );
    const users = await connection.manager.find(User);
    //     diag.value = 'Joe Smith';
    //     diag.code = '1231';
    //     diag.date = 12312;
    //     diag.author = users[5];
    //     await connection.manager.save(diag);


    

    console.log("Loading users from the database...");
    console.log("Loaded users: ", users);


    server.get('/', async (request: Request, response: Response) => {
    const diag = await getRepository(MainDiagnose)
        .createQueryBuilder("diagnose")
        .select("diagnose")
        .leftJoinAndSelect("diagnose.author", "author")
        .getMany();
    console.log(diag)

        response.send('Hello' + diag[1].author.firstName);
    })
    server.post("/test", function (request, response) {
        console.log(request.body);
        if(!request.body) return response.sendStatus(400);
        response.send(request.body);
    });

    server.listen(3001);
    

}).catch(error => console.log(error));
