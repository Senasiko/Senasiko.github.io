import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
/*import registerServiceWorker from './registerServiceWorker';*/
import './index.css';

export default locals =>
  ReactDOMServer.renderToString(
    <StaticRouter location={locals.path} context={{}}>
      <App />
    </StaticRouter>
  );
/*registerServiceWorker();*/
