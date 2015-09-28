Template.documentNew.rendered = function() {
};

Template.documentNew.helpers({
});

Template.documentNew.events ({

  'click #login-buttons-logout': function (event) {
    Router.go('home');
  }

});
