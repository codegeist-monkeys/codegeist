import util from 'util';

export default function routes(app, addon) {
  // healthcheck route used by micros to ensure the addon is running.
  app.get('/healthcheck', (req, res) => {
    res.send(200);
  });

  // Root route. This route will redirect to the add-on descriptor: `atlassian-connect.json`.
  app.get('/', (req, res) => {
    res.format({
      // If the request content-type is text-html, it will decide which to serve up
      'text/html': () => {
        res.redirect('/atlassian-connect.json');
      },
      // This logic is here to make sure that the `atlassian-connect.json` is always
      // served up when requested by the host
      'application/json': () => {
        res.redirect('/atlassian-connect.json');
      },
    });
  });

  // This route will be targeted by iframes rendered by Bitbucket. It renders a simple template
  // with two pieces of data:
  //
  //   1. the repository path (passed in the query string via a context parameter)
  //   2. the user who installed the add-on's display name (retrieved from Bitbucket via REST)

  app.get('/connect-example', addon.authenticate(), (req, res) => {
    // the call to addon.authenticate() above verifies the JWT token provided by Bitbucket
    // in the iframe URL

    const httpClient = addon.httpClient(req);

    httpClient.get('/2.0/user/', (err, resp, data) => {
      try {
        const parsedData = JSON.parse(data);
        res.render('connect-example', {
          title: 'Atlassian Connect',
          displayName: parsedData.display_name,
          repoPath: req.query.repoPath,
        });
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    });
  });

  // This route will handle webhooks from repositories this add-on is installed for.
  // Webhook subscriptions are managed in the `modules.webhooks` section of
  // `atlassian-connect.json`

  app.post('/webhook', addon.authenticate(), (req, res) => {
    // log the webhook payload
    console.log(util.inspect(req.body, {
      depth: null,
    }));
    res.send(204);
  });
}
