Router.route('/course/1', function () {
    this.render('coursecontent');
    this.layout('topnav1');
  });

  Router.route('/course/1/edit', function () {
    this.render('editcoursecontent');
    this.layout('topnav1');
  });