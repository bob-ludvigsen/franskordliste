/**
 * Created by Bob on 29-06-2015.
 */





Meteor.startup(function() {
    T9n.setLanguage("da");

    AccountsEntry.config({

        homeRoute: '/',                    // mandatory - path to redirect to after sign-out
        dashboardRoute: '/admin'      // mandatory - path to redirect to after successful sign-in

    });



});


