// ***************************************************************
// ROUTER HOOKS/FILTERS
// ***************************************************************



Iron.Router.hooks.requireLogin = function () {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render('this.loadingTemplate');
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};

Iron.Router.hooks.goToDashboard = function () {
  if (Meteor.user()) {
    Router.go('documentsIndex');
    this.next();
  } else {
    this.next();
  }
};

Iron.Router.hooks.goToFrontpage= function () {
  if (!Meteor.user()) {
    Router.go('frontpage');
    this.next();
  } else {
    this.next();
  }
};

Router.onBeforeAction('goToDashboard', {except: ['documentNew', 'documentIndex', 'documentShow', 'documentEdit']});

Router.onBeforeAction('goToFrontpage', {except: ['frontpage', 'about']});

Router.onBeforeAction('requireLogin', {except: ['frontpage', 'about']});


Router.onBeforeAction('dataNotFound', {only: ['documentIndex','documentNew', 'documentIndex', 'documentShow', 'documentEdit']});
