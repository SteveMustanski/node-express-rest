import { addNewContact } from '../contollers/crmController';

const routes = app => {
  app
    .route('/contact')
    .get(
      (req, res, next) => {
        console.log(`${req.method} request from: ${req.originalUrl}`);
        next();
      },
      (req, res, next) => {
        res.send('GET response to /contact was successfull');
      },
    )
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
