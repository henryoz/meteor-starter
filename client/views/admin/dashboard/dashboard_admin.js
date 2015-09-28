Template.adminDashboard.rendered = function() {
};

Template.adminDashboard.helpers();

Template.adminDashboard.events({
    'click #login-buttons-logout': function (event) {
    Router.go('home');
    //this.redirect('home');
  }
});