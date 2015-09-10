/**
 * Created by Bob on 22-06-2015.
 */
Meteor.startup(function() {

/*

    if (Lists.find().count() === 0) {

        // create sample polls
        var sampleWords = JSON.parse(Assets.getText('fransk.json'));

        // loop over each sample poll and insert into database
        _.each(sampleWords, function(words) {
            Lists.insert(words);
        });

    }

    if (Eng.find().count() === 0) {

        // create sample polls
        var sampleWords = JSON.parse(Assets.getText('eng.json'));

        // loop over each sample poll and insert into database
        _.each(sampleWords, function(words) {
            Eng.insert(words);
        });

    }

    if (Tactic.find().count() === 0) {

        // create sample polls
        var sampleWords = JSON.parse(Assets.getText('taktik.json'));

        // loop over each sample poll and insert into database
        _.each(sampleWords, function(words) {
            Tactic.insert(words);
        });

    }

    var users = [
        {name:"Normal User",email:"normal@example.com",roles:''},
        {name:"engelsk",email:"view@example.com",roles: 'hto'},
        {name:"Manage-Users User",email:"manage@example.com",roles: 'manage-users'},
        {name:"Admin User",email:"bob@hesse-ludvigsen.dk",roles: 'admin'}
    ];

    _.each(users, function (user) {
        var id;

        id = Accounts.createUser({
            email: user.email,
            password: "belgien123",
            profile: { name: user.name }
        });

        if (user.roles.length > 0) {
            // Need _id of existing user record so this call must come
            // after `Accounts.createUser` or `Accounts.onCreate`
            Roles.addUsersToRoles(id, user.roles, 'default-group');
        }

    });*/
});
