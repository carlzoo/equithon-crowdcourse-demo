Router.route('/course/1', function () {
    this.render('coursecontent');
    this.layout('usertopnav');
  });

  Router.route('/course/1/edit', function () {
    this.render('editcoursecontent');
    this.layout('usertopnav');
  });

  Router.route('/course/1/edit/2', function () {
    this.render('pendingedit');
    this.layout('usertopnav');
  });