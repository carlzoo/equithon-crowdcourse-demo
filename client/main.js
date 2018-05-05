import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './coursecontent.html';
import './coursecontent.css';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });
//
// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });
//
// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

Template.signup.events({
  'submit form': function() {
    event.preventDefault();
    var fullname = $('[name=fullname]').val();
    var email = $('[name=email]').val();
    var username = $('[name=username]').val();
    var password = $('[name=password]').val();

    Accounts.createUser({
      email: email,
      username: username,
      password: password,
      profile: {
        fullname: fullname
      }
    });
  }
});
