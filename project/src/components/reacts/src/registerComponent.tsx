import React from 'react';
import * as ReactDOM from 'react-dom';

import Operator from './components/Operator';

const initOperator: string = 'initOperator';
window[initOperator] = (dom: HTMLElement) => {
  return ReactDOM.render(
    <Operator />,
    dom
  );
};
