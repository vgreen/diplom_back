import "reflect-metadata";
import {createConnections, getRepository} from "typeorm";
import * as express from "express";
import {ageStatisticRouter} from "./controllers/ageStatistic";
import {regionStatisticRouter} from "./controllers/regionStatistic";
import {genderStatisticRouter} from "./controllers/genderStatistic";
import {semPologStatisticRouter} from "./controllers/semPologStatistic";

createConnections().then(async connections => {

    const cors = require('cors');
    const server = express();
    server.use(cors());
    server.use(express.json());

    server.use('/ageStatistic', ageStatisticRouter);
    server.use('/regionStatistic', regionStatisticRouter);
    server.use('/semeinPologStatistic', semPologStatisticRouter);
    server.use('/sexStatistic', genderStatisticRouter)
    server.use(express.static('build'));
    server.listen(3001, () => console.log(`Backend running on 3001`));


}).catch(error => console.log(error));
