
// ***************************************************************
// ROUTER HOOKS/FILTERS
// ***************************************************************

Iron.Router.hooks.requireCustomer = function () {
  console.log("Executing requireCustomer");
  if (!Meteor.userId || !Roles.userIsInRole(Meteor.userId(), 'customer')) {
    if (Meteor.loggingIn()) {
      this.render('this.loadingTemplate');
    } else {
      this.redirect('/accessDenied');
    }
  } else {

    this.next();
  }
};

Iron.Router.hooks.requireAdmin = function () {
   if (!Meteor.user() || !Roles.userIsInRole(Meteor.userId(), 'admin')) {
    if (Meteor.loggingIn()) {
      this.render('this.loadingTemplate');
    } else {
      Router.go('accessDenied');
    }
  } else {

    this.next();
  }
};


Router.onBeforeAction('requireCustomer', {only: ['customerDashboard', 'documentsIndex']});
Router.onBeforeAction('requireAdmin', {only: ['adminDashboard']});
Router.onBeforeAction('dataNotFound', {only: ['documentIndex','documentNew', 'documentIndex', 'documentShow', 'documentEdit']});

