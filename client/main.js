import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './coursecontent.html';
import './coursecontent.css';
import './active-tab.js';

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

Template.usertopnav.events({
  'click li.nav-items': function(event) {
    console.log(event.currentTarget.id);
    $('.active-tab').removeClass('active-tab');
    $(event.currentTarget).addClass('active-tab');
  }
});

Template.modtopnav.events({
  'click li.nav-items': function(event) {
    console.log(event.currentTarget.id);
    $('.active-tab').removeClass('active-tab');
    $(event.currentTarget).addClass('active-tab');
  }
});
