import { getConnection } from "typeorm";
import { Request, Response, Router } from "express";
import { makeStatistic } from "../utils/makeStatistic";
import {generateGenderQuery} from "../queries/genderQuery";
import {generatePatIncQuery} from "../queries/patIncQuery";


export const patIncStatisticRouter = Router();

patIncStatisticRouter.use("/", patIncStatisticRequest);

async function patIncStatisticRequest(request: Request, response: Response) {
    let patIncStatistic: any;
    try {
        patIncStatistic = await getPatIncStatistic(request.body.dateStart, request.body.dateEnd, request.body.dep);
        console.log(request.body);
        makeStatistic(patIncStatistic, 'region_code');
        response.send(patIncStatistic)

    } catch (error) {
        response.status(400).send(error.message);
        console.log(error.message);
    }
}

export const getPatIncStatistic = async (dateStart: string, dateEnd: string, historyNum?: number) => {
        let dateS:string = dateStart.toString() ,
        dateE:string = dateEnd.toString();
    try {
        return await getConnection("mgerm_connect")
            .query(generatePatIncQuery( historyNum, dateS, dateE));

    } catch (error) {
        console.log(error.message);
    }

};