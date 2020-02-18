import {Request, Response, Router} from "express";
import {generateTablePsy} from "../queries/patTablePsy";
import {getConnection} from "typeorm";
import {generateShBekaInQuery} from "../queries/shkaliQuery";


export const patTablePsyRouter = Router();

patTablePsyRouter.use("/", patTablePsyRequest);

async function patTablePsyRequest(req: Request, response: Response) {
    var request: any;
    let shkaliStatistic: any;
    try {
        request = await req;
        const { dateStart, dateEnd, dep} = request.body;
        shkaliStatistic = await getConnection("mgerm_connect").query(generateTablePsy(dateStart, dateEnd, dep));
        console.log(request.body);
        console.log(shkaliStatistic);
        response.send(shkaliStatistic)

    } catch (error) {
        response.status(400).send(error.message);
        console.log(error.message);
    }
}
