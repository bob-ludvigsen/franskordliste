/**
 * Created by Bob on 01-07-2015.
 */
Meteor.methods({
    /*engdata: function () {

        var sampleWords = JSON.parse(Assets.getText('eng.json'));
        return sampleWords;
    },
*/

    adminAddUser: function (user) {

        //admin opretter ny bruger med email og adgangskode
        Accounts.createUser({email: user, password: "abc123"})


    },

    deleteUser: function (userId) {
        var user = Meteor.user();
        if (!user || !Roles.userIsInRole(user, ['admin']))
            throw new Meteor.Error(401, "You need to be an admin to delete a user.");

        if (user._id == userId)
            throw new Meteor.Error(422, 'You can\'t delete yourself.');

        // remove the user
        Meteor.users.remove(userId);
    },

    addUserRole: function (userId, role) {
        var user = Meteor.user();
        if (!user || !Roles.userIsInRole(user, ['admin']))
            throw new Meteor.Error(401, "You need to be an admin to update a user.");

        if (user._id == userId)
            throw new Meteor.Error(422, 'You can\'t update yourself.');

        // handle invalid role
        if (Meteor.roles.find({name: role}).count() < 1)
            throw new Meteor.Error(422, 'Role ' + role + ' does not exist.');

        // handle user already has role
        if (Roles.userIsInRole(userId, role))
            throw new Meteor.Error(422, 'Account already has the role ' + role);

        // add the user to the role
        Roles.addUsersToRoles(userId, role);
    },

    removeUserRole: function (userId, role) {
        var user = Meteor.user();
        if (!user || !Roles.userIsInRole(user, ['admin']))
            throw new Meteor.Error(401, "You need to be an admin to update a user.");

        if (user._id == userId)
            throw new Meteor.Error(422, 'You can\'t update yourself.');

        // handle invalid role
        if (Meteor.roles.find({name: role}).count() < 1)
            throw new Meteor.Error(422, 'Role ' + role + ' does not exist.');

        // handle user already has role
        if (!Roles.userIsInRole(userId, role))
            throw new Meteor.Error(422, 'Account does not have the role ' + role);

        Roles.removeUsersFromRoles(userId, role);
    },

    addRole: function (role) {
        var user = Meteor.user();
        if (!user || !Roles.userIsInRole(user, ['admin']))
            throw new Meteor.Error(401, "You need to be an admin to update a user.");

        // handle existing role
        if (Meteor.roles.find({name: role}).count() > 0)
            throw new Meteor.Error(422, 'Role ' + role + ' already exists.');

        Roles.createRole(role);
    },

    removeRole: function (role) {
        var user = Meteor.user();
        if (!user || !Roles.userIsInRole(user, ['admin']))
            throw new Meteor.Error(401, "You need to be an admin to update a user.");

        // handle non-existing role
        if (Meteor.roles.find({name: role}).count() < 1)
            throw new Meteor.Error(422, 'Role ' + role + ' does not exist.');

        if (role === 'admin')
            throw new Meteor.Error(422, 'Cannot delete role admin');

        // remove the role from all users who currently have the role
        // if successfull remove the role
        Meteor.users.update(
            {roles: role},
            {$pull: {roles: role}},
            {multi: true},
            function (error) {
                if (error) {
                    throw new Meteor.Error(422, error);
                } else {
                    Roles.deleteRole(role);
                }
            }
        );
    },

    updateUserInfo: function (id, property, value) {
        var user = Meteor.user();
        if (!user || !Roles.userIsInRole(user, ['admin']))
            throw new Meteor.Error(401, "You need to be an admin to update a user.");

        if (property !== 'profile.name')
            throw new Meteor.Error(422, "Only 'name' is supported.");

        obj = {};
        obj[property] = value;
        Meteor.users.update({_id: id}, {$set: obj});

    },
    clientEditUser: function (email, username, firstname, lastname, nat, service) {

        var user = Meteor.user();
        //console.log('brugernavn: '+user._id)
        Meteor.users.update({_id: user._id}, {
            $set: {
                email: email,
                profile: {

                    firstname: firstname,
                    lastname: lastname,
                    nationality: nat,
                    Service: service

                },
                username: username
            }

        });

    },

    createtactic: function (ord, abbreviation, def, nato, remarks, rev) {
        Tactic.insert({
            "ord": ord,
            "fork": abbreviation,
            "definition": def,
            "nato_translation": nato,
            "remark": remarks,
            "rev": rev
        });


    },

    edittactic: function (tacId, ord, abbreviation, def, nato, remarks, rev) {
        Tactic.update({_id: tacId}, {
            $set: {
                "ord": ord,
                "fork": abbreviation,
                "definition": def,
                "nato_translation": nato,
                "remark": remarks,
                "rev": rev
            }
        });


    },
    removetactic: function(id){

        Tactic.remove({_id: id});

    },

    createeng: function (dkord, enord, enfork) {
        Eng.insert({
            "value": dkord,
            "engelsk": enord,
            "fork_uk": enfork
        });


    },

    editeng: function (engId, dkord, enord, enfork) {
        Eng.update({_id: engId}, {
            $set: {
                "value": dkord,
                "engelsk": enord,
                "fork_uk": enfork
            }
        });


    },
    removeenglish: function(id){

        Eng.remove({_id: id});

    },

    createfrench: function (cat, dkord, frord, dkfork, frfork, ordklasse, ejefald, flertal, ukat1, ukat2, ukat3) {
        Lists.insert({
            "Kategori" : cat,
            "DK" : dkord,
            "FR" : frord,
            "DKForkortelse" : dkfork,
            "FRForkortelse" : frfork,
            "Ordklasse" : ordklasse,
            "Ejefald" : ejefald,
            "Flertal" : flertal,
            "Ukategori1" : ukat1,
            "Ukategori2" : ukat2,
            "Ukategori3" : ukat3

        });


    },

    editfrench: function (frId, cat, dkord, frord, dkfork, frfork, ordklasse, ejefald, flertal, ukat1, ukat2, ukat3) {
        Lists.update({_id: frId}, {
            $set: {
                "Kategori" : cat,
                "DK" : dkord,
                "FR" : frord,
                "DKForkortelse" : dkfork,
                "FRForkortelse" : frfork,
                "Ordklasse" : ordklasse,
                "Ejefald" : ejefald,
                "Flertal" : flertal,
                "Ukategori1" : ukat1,
                "Ukategori2" : ukat2,
                "Ukategori3" : ukat3
            }
        });


    },
    removefrench: function(id){

        Lists.remove({_id: id});

    },





});


Meteor.startup(function () {
    // By default, the email is sent from no-reply@meteor.com. If you wish to receive email from users asking for help with their account, be sure to set this to an email address that you can receive email at.
    Accounts.emailTemplates.from = 'Forsvarets ordlister <pfu-fu4@fak.dk>';
    // The public name of your application. Defaults to the DNS name of the application (eg: awesome.meteor.com).
    Accounts.emailTemplates.siteName = 'Forsvarets ordlister';
    // A Function that takes a user object and returns a String for the subject line of the email.
    Accounts.emailTemplates.resetPassword.subject = function (user) {
        return 'Ny adgangskode';
    };

    // A Function that takes a user object and a url, and returns the body text for the email.
    // Note: if you need to return HTML instead, use Accounts.emailTemplates.verifyEmail.html
    Accounts.emailTemplates.resetPassword.text = function (user, url) {
        return "Du har anmodet om en ny adgangskode"
            + " Klik på linket herunder for at lave en ny:\n\n"
            + url;
    };

    // init items collection
    /*if (Items.find().count() == 0) {
     Items.insert({name: 'My Item', uploads: []});
     }*/

    /* UploadServer.init({
     tmpDir: process.env.PWD + '/uploads/tmp',
     uploadDir: process.env.PWD + '/uploads/',
     checkCreateDirectories: true,
     getDirectory: function(fileInfo, formData) {
     if (formData && formData.directoryName != null) {
     return formData.directoryName;
     }
     return "";
     },
     getFileName: function(fileInfo, formData) {
     if (formData && formData.prefix != null) {
     // console.log('Vi logger stien '+ formData.prefix + '_' + fileInfo.name);
     return formData.prefix + '_' + fileInfo.name;
     }
     return fileInfo.name;
     },
     finished: function(fileInfo, formData) {
     if (formData && formData._id != null) {
     //console.log('vi logger fileinfo '+fileInfo.path)
     //console.log('vi logger formdata '+formData.directoryName)
     Items.update({_id: formData._id}, { $push: { uploads: fileInfo }});
     }
     }
     });*/
});
