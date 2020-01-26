import {Router, Request, Response} from "express";
import {getConnection} from "typeorm";
import {generateSemPologQuery} from "../queries/semeinPolog";
import {
    generateShBekaInQuery,
    generateShBekaOutQuery,
    generateShGamiltonaInQuery,
    generateShGamiltonaOutQuery, generateShLTInQuery, generateShLTOutQuery, generateShSTInQuery, generateShSTOutQuery
} from "../queries/shkaliQuery";


export const shkaliStatisticRouter = Router();

shkaliStatisticRouter.use("/", shkaliStatisticRequest);

async function shkaliStatisticRequest(req: Request, response: Response) {
    var request: any;
    let shkaliStatistic: any;
    try {
        request = await req;
        const { dateStart, dateEnd, dep, type } = request.body;
        shkaliStatistic = await getShkaliPologStatistic(dateStart, dateEnd, dep, type);
        console.log(request.body);
        console.log(shkaliStatistic);
        response.send(shkaliStatistic)

    } catch (error) {
        response.status(400).send(error.message);
        console.log(error.message);
    }
}

export const getShkaliPologStatistic = async (dateStart: string, dateEnd: string, department?: string, type?:string) => {
    let dateS:string = dateStart ,
        dateE:string = dateEnd.toString();
    try {
        switch(type){
            case 'SB_in': {

                return await getConnection("mgerm_connect")
                    .query(generateShBekaInQuery(dateStart, dateEnd, department))
            }
            case 'SB_out': {
                console.log(generateShBekaInQuery(dateStart, dateEnd, department));
                return await getConnection("mgerm_connect")
                    .query(generateShBekaOutQuery(dateStart, dateEnd, department))
            }
            case 'SG_in': {
                return await getConnection("mgerm_connect")
                    .query(generateShGamiltonaInQuery(dateStart, dateEnd, department))
            }
            case 'SG_out': {
                return await getConnection("mgerm_connect")
                    .query(generateShGamiltonaOutQuery(dateS, dateE, department))
            }
            case 'ST_in': {
                return await getConnection("mgerm_connect")
                    .query(generateShSTInQuery(dateS, dateE, department))
            }
            case 'ST_out': {
                return await getConnection("mgerm_connect")
                    .query(generateShSTOutQuery(dateS, dateE, department))
            }
            case 'LT_in': {
                return await getConnection("mgerm_connect")
                    .query(generateShLTInQuery(dateS, dateE, department))
            }
            case 'LT_out': {
                return await getConnection("mgerm_connect")
                    .query(generateShLTOutQuery(dateS, dateE, department))
            }
            default: {
                return []
            }
        }

    } catch (error) {
        console.log(error.message);
    }

};