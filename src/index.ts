import "reflect-metadata";
import {createConnections, getRepository} from "typeorm";
import * as express from "express";
import {ageStatisticRouter} from "./controllers/ageStatistic";
import {regionStatisticRouter} from "./controllers/regionStatistic";

createConnections().then(async connections => {

    const cors = require('cors');
    const server = express();
    server.use(cors());
    server.use(express.json());

    server.use('/ageStatistic', ageStatisticRouter);
    server.use('/regionStatistic', regionStatisticRouter);
    // server.use('/genderStatistic', genderStatisticRouter)

    server.listen(3001, () => console.log(`Backend running on 3001`));


}).catch(error => console.log(error));
