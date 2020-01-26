import {Router, Request, Response} from "express";
import {getConnection} from "typeorm";
import {generateDiagnoseQuery} from "../queries/diagnoseQuery";


export const diagnoseStatisticRouter = Router();

diagnoseStatisticRouter.use("/", diagnoseStatisticRequest);

async function diagnoseStatisticRequest(request: Request, response: Response) {
    let diagnoseStatistic: any;
    try {
        diagnoseStatistic = await getDiagnoseStatistic(request.body.dateStart, request.body.dateEnd, request.body.dep);
        console.log(request.body);
        console.log(diagnoseStatistic);
        response.send(diagnoseStatistic)

    } catch (error) {
        response.status(400).send(error.message);
        console.log(error.message);
    }
}

export const getDiagnoseStatistic = async (dateStart: string, dateEnd: string, department?: string) => {
    let dateS:string = dateStart.toString() ,
        dateE:string = dateEnd.toString();
    try {
        return await getConnection("mgerm_connect")
            .query(generateDiagnoseQuery(dateS, dateE, department));

    } catch (error) {
        console.log(error.message);
    }

};