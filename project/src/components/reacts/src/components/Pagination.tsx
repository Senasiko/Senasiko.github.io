import React, { Component } from 'react';
import Pagination from 'antd/lib/pagination';

export interface PropsType {
  defaultCurrent: number;
  total: number;
  pageSize: number;
}

class MPagination extends Component<PropsType, {}> {
  constructor(props: PropsType) {
    super(props);
  }
  changePage(page: number) {
    if (page === 1) {
      router.goIndex();
    } else {
      router.goPage(page);
    }
  }
  render() {
    const { defaultCurrent, total, pageSize } = this.props;
    return (
      <Pagination
        defaultCurrent={defaultCurrent}
        total={total}
        pageSize={pageSize}
        size={'small'}
        onChange={(page) => this.changePage(page)}
      />
    );
  }
}

export default MPagination;
