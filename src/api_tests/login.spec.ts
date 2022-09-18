import { checkStatusCode, client } from "../client"
import { setData, signUpData } from "../../data/data";


describe('The user is able to signup and create a study set', () => {
    
    // const body = data

    let user_id;
    let token;
    it('The user is able to signup', async()=> {
        await client().post('https://be.dev.studysmarter-test.de/users/')
        .send(signUpData).expect(201).then((reponse) => {
            expect(reponse.body.id).not.toBe(null);
            expect(reponse.body.token).not.toBe(null);   
            user_id = reponse.body.id;
            token = reponse.body.token; 
        });
    });

    it(('The user should be able to create a set'),async () => {

        let res = await client().post(`https://be.dev.studysmarter-test.de/users/${user_id}/course-subjects/`).set('authorization', `Token ${token}`).send(setData).expect(201);

        expect(res.body.id).not.toBe(null);
        
        let study_set = await client().get(`https://be.dev.studysmarter-test.de/users/${user_id}/course-subjects/${res.body.id}/`).set('authorization', `Token ${token}`).send();
        checkStatusCode(study_set, 200);

        expect(study_set.body.name).toBe('APIT3');

    });

    // it('GET Response',async () => {
    //     let study_set = await client().get('https://be.dev.studysmarter-test.de/users/6767645/course-subjects/9081068/')
    //     .set('Authorization', 'Token f41ffbb94ade38d5d020a2d56cd98fe872985108').send();
    //     // .set('Host', 'demo.studysmarter.de')
    //     // .set('authority', 'be.dev.studysmarter-test.de')
    //     // .set('Accept-Encoding', 'gzip, deflate, br')
    //     // .set('content-type', 'application/json')
    //     // .set('dnt', '1')
    //     // .set('origin', 'https://demo.studysmarter.de')
    //     // .set('Accept', 'application/json, text/plain, */*');
    //     checkStatusCode(study_set, 210);
    // });





})