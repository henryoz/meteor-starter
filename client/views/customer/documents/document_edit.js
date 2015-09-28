Template.documentEdit.rendered = function() {
};

Template.documentEdit.helpers({
});

Template.documentEdit.events ({

  'click #login-buttons-logout': function (event) {
    Router.go('home');
  }

});
