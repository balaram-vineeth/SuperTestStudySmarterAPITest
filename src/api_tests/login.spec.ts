import { client } from "../client"
import { setData, signUpData } from "../../data/data";


describe('The user is able to signup and create a study set', () => {

    let user_id;
    let token;
    it('The user is able to signup', async () => {
        await client().post('/users/')
            .send(signUpData).expect(201).then((response) => {
                expect(response.body.id).not.toBe(null);
                expect(response.body.token).not.toBe(null);
                user_id = response.body.id;
                token = response.body.token;
            });
    });

    it(('The user should be able to create a set'), async () => {

        let response_id;
        await client().post(`/users/${user_id}/course-subjects/`).set('authorization', `Token ${token}`).send(setData).expect(201).then((response) => {
            expect(response.body.id).not.toBe(null);
            response_id = response.body.id;
        });

        await client().get(`/users/${user_id}/course-subjects/${response_id}/`).set('authorization', `Token ${token}`).expect(200).send().then((response) => {
            expect(response.body.name).toBe(setData.name);
        });
    });


})