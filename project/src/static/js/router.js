window.router = {
  _changeRouter: function(href, newTag) {
    if (newTag) {
      window.open(href);
    }else {
      location.href = href;
    }
  },
  goIndex: function () {
    this._changeRouter('/')
  },
  goPage: function (page) {
    if (page === 1) {
      this.goIndex();
    }else {
      this._changeRouter('/pages/' + page);
    }
  },
  goPost: function (postUrl) {
    this._changeRouter(postUrl, true)
  }
};
