import {
    addNewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/apiController';


const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            //middleware 
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)
        // POST Endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        // GET a spesific contact
        .get(getContactWithID)
        // updating a specific contact
        .put(updateContact)
        // deleting a specific contact
        .delete(deleteContact);
}

export default routes;