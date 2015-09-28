// ***************************************************************
// STARTUP (Will run as soon as the server process is finished starting)
// ***************************************************************

Meteor.startup(function () {
console.log(Meteor.users.find().fetch().length);

  if (Meteor.users.find().fetch().length === 0) {
      console.log('Creating admin user now  ');
      var users = [
          { email:"admin@example.com",
            roles:['admin']
          },
          { email:"customer@example.com",
            roles:['customer']
          }
        ];
      _.each(users, function (userData) {
        var id,
            user;

        id = Accounts.createUser({
          email: userData.email,
          password: "12345678",
          profile: {  }
        });

        // email verification
        Meteor.users.update({_id: id}, {$set:{'emails.0.verified': true}});
        Roles.addUsersToRoles(id, userData.roles);
      });
    }


 Accounts.onCreateUser(function (options, user) {
    Roles.setRolesOnUserObj(user, ['customer']);

    if (options.profile) {
      user.profile = options.profile;
    }

    return user;
  });


});
