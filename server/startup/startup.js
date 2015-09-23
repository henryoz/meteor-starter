// ***************************************************************
// STARTUP (Will run as soon as the server process is finished starting)
// ***************************************************************

Meteor.startup(function () {
    console.log("Executing startup");
  if(Meteor.users.find().count<1){
console.log("Adding admin account");
    var users = [
        {name:'Admin', email: 'wauterw@gmail.com', roles:['admin']}
    ];
    _.each(users, function(userData){
        var userid = Accounts.createUser({
            email: userData.email,
            password:'12345678a-',
            username: userData.email,
            profile:{name:userData.name}
        })
        Meteor.users.update({_id:userid},{$set:{'emails.0.verified': true}});
        Roles.addUsersToRoles(userid, userData.roles);
    })
  }
});
