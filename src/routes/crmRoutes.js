const routes = app => {
  app
    .route('/contact')
    .get((req, res) => {
      res.send('GET response to /contact was successfull');
    })
    .post((req, res) => {
      res.send('POST response to /contact was successfull');
    });

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