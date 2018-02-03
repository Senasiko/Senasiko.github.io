import * as React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

const Html = props => (
  <html>
    <head><title>My Static Site</title></head>
    <body>
      <div id="app">
        {props.children}
      </div>
      <script src="/index.js"/>
    </body>
  </html>
);

const Home = props => (
    <div>Home</div>
);

const About = props => (
  <div>About</div>
);

class App extends React.Component {
  render() {
    return (
      <Html>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/about" component={About} />
        </div>
      </Html>
    );
  }
}

export default App;
