import "reflect-metadata";
import {createConnections, getRepository} from "typeorm";
import * as express from "express";
import {mgerm} from "./utils/connections";
import {ageStatisticRouter} from "./controllers/ageStatistic";

createConnections().then(async connections => {

    var patientRecords: any[];
    const cors = require('cors');
    const server = express();
    server.use(cors());
    server.use(express.json());
    patientRecords = await connections[mgerm]
        .query("select distinct(dinc.patientID), plist.birthday, " +
            "plist.first_name, plist.second_name, plist.last_name, dinc.age, dinc.sx,   " +
            "dinc.region_code from mgerm.department_income as dinc \n" +
            "left join mgerm.patients_list as plist on dinc.patientID = plist.patientID \n" +
            "left join mgerm.department_outcome as dout on dout.hystoryNumber = dinc.hystoryNumber \n" +
            "where dinc.date > '2015-01-01'" +
            "limit 1;");


    patientRecords = patientRecords.map((item)=>{
        return {
            oldPatientID: item.patientID,
            firstName: item.first_name,
            secondName: item.second_name,
            lastName: item.last_name,
            age: item.age,
            type: item.sx,
            region: item.region_code,
            birthday: item.birthday.toLocaleString(),
        }
    });

    console.log(patientRecords);




    server.use('/ageStatistic', ageStatisticRouter);
    //
    // server.post('/test1',function (request, response) {
    //     if(!request.body) return response.sendStatus(400);
    //     response.send(request.body);
    // });

    server.listen(3001, () => console.log(`Backend running on 3001`));
    

}).catch(error => console.log(error));
