import React from 'react';
import * as ReactDOM from 'react-dom';

import Operator from './components/Operator';
import Tags from './components/Tags';
import Pagination, { PropsType as PaginationProps } from './components/Pagination';

const reactCom = window['reactCom'] = {};
reactCom['initOperator'] = (dom: Element | string | null) => {
  if (typeof dom === 'string') {
    dom = document.querySelector(dom);
  }
  return ReactDOM.render(
    <Operator />,
    dom
  );
};

reactCom['tagList'] = (dom: Element | string | null, tags: string[]) => {
  if (typeof dom === 'string') {
    dom = document.querySelector(dom);
  }
  return ReactDOM.render(
    <Tags tagList={tags}/>,
    dom
  );
};

reactCom['pagination'] = (dom: Element | string | null, data: PaginationProps) => {
  if (typeof dom === 'string') {
    dom = document.querySelector(dom);
  }
  return ReactDOM.render(
    <Pagination {...data}/>,
    dom
  );
};
