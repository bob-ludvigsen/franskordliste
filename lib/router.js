/**
 * Created by Bob on 24-06-2015.
 */

Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function () {
    this.render('home');
});

Router.route('/search', function () {
    this.render('search');
})
Router.route('/searchTactic', function () {
    this.render('searchTactic');
})
Router.route('/searchfr', function () {
    this.render('searchfr');
})
Router.route('/contact', function () {
    this.render('contact');
});

Router.route('/searchEng', function () {
    this.render('searchEng');
});
Router.route('/descriptioneng', function () {
    this.render('descreng');
});
Router.route('/descriptionfr', function () {
    this.render('descrfr');
});
Router.route('/descriptiontac', function () {
    this.render('descrtac');
});


Router.route('/login', function () {
    this.render('login');
});

Router.route('/ForgotPassword', function () {
    this.render('ForgotPassword');
});
Router.route('/ResetPassword', function () {
    this.render('ResetPassword');
});

Router.route('/searchEngDa', function () {
    this.render('searchEngDa');
});
Router.route('admin', {
    path:'/admin',
    layoutTemplate: 'admin_layout',
    template: 'adminTemplate',
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['admin', 'hto', 'taktiskordbog', 'fransk'])) {
            //console.log('redirecting');
            this.redirect('login');
        }
        else {

            this.next();
        }
    }
});

/*
Administrations moduler

 */
Router.route('list_tactic', {
    path:'/list_tactic',
    layoutTemplate: 'admin_layout',
    template: 'listtactic',
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['admin','taktiskordbog'])) {
            //console.log('redirecting');
            this.redirect('/');
        }
        else {
            this.next();
        }
    }
});

Router.route('create_tactic', {
    path:'/create_tactic',
    layoutTemplate: 'admin_layout',
    template: 'createtactic',
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['admin','taktiskordbog'])) {
            //console.log('redirecting');
            this.redirect('/');
        }
        else {
            this.next();
        }
    }
});


Router.route('edittactic', {
    path:'/edit_tactic',
    layoutTemplate: 'admin_layout',
    template: 'edittactic',
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['admin', 'taktiskordbog'])) {
            //console.log('redirecting');
            this.redirect('/');
        }
        else {
            this.next();
        }
    }
});


Router.route('list_english', {
    path:'/list_english',
    layoutTemplate: 'admin_layout',
    template: 'listeng',
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['admin','hto'])) {
            //console.log('redirecting');
            this.redirect('/');
        }
        else {
            this.next();
        }
    }
});

Router.route('create_english', {
    path:'/create_english',
    layoutTemplate: 'admin_layout',
    template: 'createeng',
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['admin','hto'])) {
            //console.log('redirecting');
            this.redirect('/');
        }
        else {
            this.next();
        }
    }
});


Router.route('edit_english', {
    path:'/edit_english',
    layoutTemplate: 'admin_layout',
    template: 'editeng',
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['admin','hto'])) {
            //console.log('redirecting');
            this.redirect('/');
        }
        else {
            this.next();
        }
    }
});



Router.route('list_french', {
    path:'/list_french',
    layoutTemplate: 'admin_layout',
    template: 'listfrench',
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['admin','fransk'])) {
            //console.log('redirecting');
            this.redirect('/');
        }
        else {
            this.next();
        }
    }
});

Router.route('create_french', {
    path:'/create_french',
    layoutTemplate: 'admin_layout',
    template: 'createfrench',
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['admin','fransk'])) {
            //console.log('redirecting');
            this.redirect('/');
        }
        else {
            this.next();
        }
    }
});


Router.route('edit_french', {
    path:'/edit_french',
    layoutTemplate: 'admin_layout',
    template: 'editfrench',
    onBeforeAction: function() {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else if(!Roles.userIsInRole(Meteor.user(), ['admin','fransk'])) {
            //console.log('redirecting');
            this.redirect('/');
        }
        else {
            this.next();
        }
    }
});
