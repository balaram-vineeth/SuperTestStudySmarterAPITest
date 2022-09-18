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

        expect(study_set.body.name).toBe(setData.name);

    });


})