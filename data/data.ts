import * as Chance from 'chance';

const chance = new Chance();

let signUpData = {
    "email": `demoss-${chance.integer}@mailinator.com`,
    "platform": "web",
    "language": "en",
    "signup_location": "webapp",
    "delayed_confirmation_possible": true,
    "university": null,
    "course_of_studies": null,
    "password": "IfImtVjIygRf93i5",
    "tracking_number": 654
}

let setData = {
    "name": `APIT-${chance.integer}`,
    "colorId": 0,
    "shared": true,
    "exam_date": new Date(),
    "countries": [],
    "level": 0
}

export { signUpData, setData }