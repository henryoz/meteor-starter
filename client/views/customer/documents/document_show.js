Template.documentShow.rendered = function() {
};

Template.documentShow.helpers({
});

Template.documentShow.events ({

  'click #login-buttons-logout': function (event) {
    Router.go('home');
  }

});
