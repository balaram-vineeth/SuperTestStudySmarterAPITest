import { envData } from '../data/data';
import * as superteste from 'supertest';


export function client(): superteste.SuperTest<superteste.Test> {
    return superteste(envData.baseUrl);
}

export const checkStatusCode = (res: any, expectedStatus: any = 200): superteste.Response => {
    if (res.status === expectedStatus) {
      return res
    };
    const reqData = JSON.parse(JSON.stringify(res)).req;
    throw new Error(` 
    reponse-error   : ${JSON.stringify(res.error)}
    request-method  : ${JSON.stringify(reqData.method)} 
    request-url     : ${JSON.stringify(reqData.url)}
    request-data    : ${JSON.stringify(reqData.data)}
    request-headers : ${JSON.stringify(reqData.headers)}
    reponse-status  : ${JSON.stringify(res.status)}
    reponse-body    : ${JSON.stringify(res.body)}
    `
    );
  };
  