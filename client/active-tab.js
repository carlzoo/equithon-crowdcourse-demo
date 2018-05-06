import { Template } from 'meteor/templating';

/*Template.topnav1.rendered = function() {   
    $("#"+Router.current().route.getName()).addClass('active');     
    $('ul.tabs').tabs(); 
  }*/


Template.coursecontent.events({
  'click #editbutton': function(){
    Router.go('/course/1/edit');
  },
})

Template.editcoursecontent.events({
  'click .canceledit': function(){
    Router.go('/course/1');
  },
  'click .submitforapproval': function(){
    Router.go('/course/1/edit/2');
  },
})



