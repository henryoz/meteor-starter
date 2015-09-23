Accounts.onCreateUser(function(options, user) {
    // Add an user roles array
    user.roles = ["customer"];

    if (options.profile)
    user.profile = options.profile;
    return user;
});