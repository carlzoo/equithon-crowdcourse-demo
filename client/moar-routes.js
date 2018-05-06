Router.route('/course/1', function () {
    this.render('coursecontent');
    this.layout('user-topnav');
  });

  Router.route('/course/1/edit', function () {
    this.render('editcoursecontent');
    this.layout('user-topnav');
  });

Router.route('/course/1/edit/2', function () {
    this.render('pendingedit');
    this.layout('user-topnav');
  });
