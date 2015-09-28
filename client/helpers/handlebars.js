Handlebars.registerHelper('isAdmin', function() {
    return Roles.userIsInRole(Meteor.userId(), 'admin');
});

Handlebars.registerHelper('isCustomer', function() {
    return Roles.userIsInRole(Meteor.userId(), 'customer');
});

