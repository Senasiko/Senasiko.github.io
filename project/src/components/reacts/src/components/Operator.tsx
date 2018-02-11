import React, { Component } from 'react';
import Icon from 'antd/lib/icon';

interface PropsType {
  s?: string;
}
class Operator extends Component<PropsType, {}> {
  constructor(props: PropsType) {
    super(props);
  }
  render() {
    return (
      <span>
        more<Icon type="right" />
      </span>
    );
  }
}

export default Operator;
