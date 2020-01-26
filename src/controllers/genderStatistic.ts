import {Router, Request, Response} from "express";
import {getConnection} from "typeorm";
import {generateGenderQuery} from "../queries/genderQuery";


export const genderStatisticRouter = Router();

genderStatisticRouter.use("/", genderStatisticRequest);

async function genderStatisticRequest(request: Request, response: Response) {
    let genderStatistic: any;
    try {
        genderStatistic = await getGenderStatistic(request.body.dateStart, request.body.dateEnd, request.body.dep);
        console.log(request.body);
        response.send(genderStatistic)

    } catch (error) {
        response.status(400).send(error.message);
        console.log(error.message);
    }
}

export const getGenderStatistic = async (dateStart: string, dateEnd: string, department?: string) => {
    let dep: string = (department) ? ("and di.department  = '" + department + "'\n ") : '',
        dateS:string = dateStart.toString() ,
        dateE:string = dateEnd.toString();
    try {
        return await getConnection("mgerm_connect")
            .query(generateGenderQuery(dateS, dateE));

    } catch (error) {
        console.log(error.message);
    }

};