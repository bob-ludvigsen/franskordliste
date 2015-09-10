/**
 * Created by pfu on 20/08/14.
 */
Template.adminTemplate.helpers({
    // check if user is an admin
    isAdminUser: function() {
        return Roles.userIsInRole(Meteor.user(), ['admin']);
    },
    resetPassword : function(t) {

        if (Accounts._resetPasswordToken) {
            Session.set('resetPassword', Accounts._resetPasswordToken);
        }
        return Session.get('resetPassword');
    }

});

Template.adminTemplate.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        console.log('logger ud.....')
        Router.go('/');
    },



});
