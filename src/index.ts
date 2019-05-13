import "reflect-metadata";
import {createConnection, getRepository} from "typeorm";
import {User, SpecDiagnose, MainDiagnose, Statistic, Visit, Income, Patient} from "./entity";
import {Request, Response} from "express";
import * as express from "express";
import {setNewBasicField, setPatients, setUsers} from "./controllers/Setter";
import { data } from "./migration/data";
createConnection().then(async connection => {
    
    
    
    const cors = require('cors');
    const server = express();
    server.use(cors());
    server.use(express.json())


    //setNewBasicField(MainDiagnose, data.diag);

    let stat_str = require('fs').readFileSync('/data/stat.txt', 'utf-8').toString();
    let stat:any;
    const parse = require('csv-parse')
    parse(stat_str.trim(), {
                columns: ["rid","SHkala_Beka_pri_postuplenii","SB_na_moment_vipiski","Situatsionnaya_trevoga_pri_postuplenii","ST_Na_moment_vipiski","Lichnostnaya_trevoga_pri_postuplenii","LT_na_moment_vipiski","SHkala_Gamiltona_pri_postuplenii","SHG_na_moment_vipiski"
                ]
            }, function(err, records){
                stat = records;
            });

    console.log(stat_str[10]);

    // server.get('/', async (request: Request, response: Response) => {
    //     const diag = await getRepository(MainDiagnose)
    //         .createQueryBuilder("diagnose")
    //         .select("diagnose")
    //         .leftJoinAndSelect("diagnose.author", "author")
    //         .getMany();
    //     console.log(diag)
    //
    //     response.send('Hello' + diag[3].author.firstName);
    // })
    // server.post("/test", function (request, response) {
    //     console.log(request.body);
    //     if(!request.body) return response.sendStatus(400);
    //     response.send(request.body);
    // });

    server.listen(3001);
    

}).catch(error => console.log(error));
