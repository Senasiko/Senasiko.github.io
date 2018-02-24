import React, { Component } from 'react';
import Tag from 'antd/lib/tag';

interface PropsType {
  tagList: string[];
}

class Tags extends Component<PropsType, {}> {
  constructor(props: PropsType) {
    super(props);
  }
  goTag(tag: string) {
    router.goTag(tag);
  }
  render() {
    const { tagList } = this.props;
    return (
      <div>
        {
          tagList.map((tag: string) =>
            <span onClick={() => this.goTag(tag)} key={tag}>
              <Tag color={'#2db7f5'} >
                {tag}
              </Tag>
            </span>

          )
        }
      </div>

    );
  }
}

export default Tags;
