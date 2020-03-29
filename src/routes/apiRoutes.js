import {
    addNewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/apiController';

import { login, register, loginRequired } from '../controllers/userController';


const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware 
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, loginRequired, getContacts)
        // POST Endpoint
        .post(loginRequired, addNewContact);

    app.route('/contact/:contactID')
        // GET a spesific contact
        .get(loginRequired, getContactWithID)
        // updating a specific contact
        .put(loginRequired, updateContact)
        // deleting a specific contact
        .delete(loginRequired, deleteContact);

    // registration route
    app.route('/auth/register')
        .post(register);
    
    // login route
    app.route('/login')
        .post(login);
}

export default routes;