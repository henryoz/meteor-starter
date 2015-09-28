Template.customerDashboard.rendered = function() {
};

Template.customerDashboard.helpers();

Template.customerDashboard.events({
    'click #login-buttons-logout': function (event) {
    Router.go('home');
  }
});