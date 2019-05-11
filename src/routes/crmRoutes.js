import { addNewContact, getContacts } from '../contollers/crmController';

const routes = app => {
  app
    .route('/contact')
    .get((req, res, next) => {
      console.log(`${req.method} request from: ${req.originalUrl}`);
      next();
    }, getContacts)
    .post(addNewContact);

  app
    .route('/contact/:contactId')
    .put((req, res) => {
      res.send('PUT response to /contact/:contactId was successfull');
    })
    .delete((req, res) => {
      res.send('DELETE response to /contact/:contactId was successfull');
    });
};

export default routes;
