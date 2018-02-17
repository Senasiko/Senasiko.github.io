import React, { Component } from 'react';
import Tag from 'antd/lib/tag';

interface PropsType {
  tagList: string[];
}

class Tags extends Component<PropsType, {}> {
  constructor(props: PropsType) {
    super(props);
  }
  render() {
    const { tagList } = this.props;
    return (
      <div>
        {
          tagList.map((tag) =>
            <Tag color={'#2db7f5'} key={tag}>
              {tag}
            </Tag>
          )
        }
      </div>

    );
  }
}

export default Tags;
