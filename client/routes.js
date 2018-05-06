if(Meteor.isClient) {
  Router.configure({
    // the default layout
    layoutTemplate: 'empty'
  });

  Router.route('/', function () {
    console.log("home page route");
    this.render('content');
    this.layout('navbar');
  });


  Router.route('/signup', function () {
    this.render('signup');
    this.layout('navbar');
  });

  Router.route('/explore', function () {
    this.render('explore');
    this.layout('usertopnav');
  });
}
