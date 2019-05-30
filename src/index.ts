import "reflect-metadata";
import {createConnections, getRepository} from "typeorm";
import * as express from "express";
import {ageStatisticRouter} from "./controllers/ageStatistic";

createConnections().then(async connections => {

    var patientRecords: any[];
    const cors = require('cors');
    const server = express();
    server.use(cors());
    server.use(express.json());

    server.use('/ageStatistic', ageStatisticRouter);


    server.listen(3001, () => console.log(`Backend running on 3001`));
    

}).catch(error => console.log(error));
