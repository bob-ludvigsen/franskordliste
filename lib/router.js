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
Router.route('/searchfr', function () {
    this.render('searchfr');
})
Router.route('/contact', function () {
    this.render('contact');
});
