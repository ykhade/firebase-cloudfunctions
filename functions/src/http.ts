import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';

admin.initializeApp();

import * as express from 'express';

import * as cors from 'cors';


//A basic HTTP cloud function
export const basicHTTP = functions.https.onRequest((request, response) => {
    const name = request.query.name;

    if (!name) {
        response.status(400).send('ERROR you must supply a name :(');
    }

    response.send(`hello ${name}`);
});

//Middleware to handle auth
// @ts-ignore
const auth = (request, response, next) => {
    if (!request.header.authorization) {
        response.status(400).send('unauthorized');
    }
    next();
};


//ExpressJS app

const app = express();
app.use(cors({origin: true}));
app.use(auth);

app.get('/cat', (request, response) => {
    response.send('CAT');
});

app.get('/dog', (request, response) => {
    response.send('DOG');
});


export const api = functions.https.onRequest(app);