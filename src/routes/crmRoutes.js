import {
  addNewContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from '../contollers/crmController';

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
    .get(getContactById)
    .put(updateContact)
    .delete(deleteContact);
};

export default routes;
