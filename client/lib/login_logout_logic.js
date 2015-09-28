Accounts.onLogin(function(user){
  console.log(Meteor.user());
  Router.go('adminDashboard');
});

Accounts.onLogin(function(user){
 if (Meteor.userId && Roles.userIsInRole(Meteor.userId(), 'admin')) {
    Router.go('adminDashboard');
 }
 else {
        Router.go('customerDashboard');
    }

});

if (Meteor.isClient) {
    var userWasLoggedIn = false;
    Deps.autorun(function (c) {
        if(!Meteor.userId())
        {
            if(userWasLoggedIn)
            {
                Router.go('home');
                Session.set('store', null);
            }
        }
        else
        {
            userWasLoggedIn = true;
        }
    });
}

