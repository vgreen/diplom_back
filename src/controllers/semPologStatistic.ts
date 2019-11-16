import {Router, Request, Response} from "express";
import {getConnection} from "typeorm";
import {generateSemPologQuery} from "../queries/semeinPolog";


export const semPologStatisticRouter = Router();

semPologStatisticRouter.use("/", semPologStatisticRequest);

async function semPologStatisticRequest(request: Request, response: Response) {
    let semPologStatistic: any;
    try {
        semPologStatistic = await getSemPologStatistic(request.body.dateStart, request.body.dateEnd, request.body.dep);
        console.log(request.body);
        console.log(semPologStatistic);
        response.send(semPologStatistic)

    } catch (error) {
        response.status(400).send(error.message);
        console.log(error.message);
    }
}

export const getSemPologStatistic = async (dateStart: string, dateEnd: string, department?: string) => {
    let dateS:string = dateStart.toString() ,
        dateE:string = dateEnd.toString();
    try {
        return await getConnection("mgerm_connect")
            .query(generateSemPologQuery(dateS, dateE, department))

    } catch (error) {
        console.log(error.message);
    }

};