/**
 * Created by pfu on 20/08/14.
 */
/**
 *sorter vha category
 * list spm
 *
 *
 *
 */



Template.listfrench.helpers({
    words: function() {
        if (Session.get("frenchFilter") != '' ) {
            return filteredFrenchQuery(Meteor.userId(), Session.get("frenchFilter"));

        }
        else {
            return
        }


    }
});
// search no more than 2 times per second
var setFrenchFilter = _.throttle(function(template) {
    var search = template.find(".search-input-filter").value;
    Session.set("frenchFilter", search);
}, 500);

Template.listfrench.events({
    'keyup .search-input-filter': function(event, template) {
        setFrenchFilter(template);
        return false;
    },
    //

    'click #editfrench': function (e) {
        e.preventDefault();
        Session.set('qId', this._id);
        //Session.set('questionInScope', Quizzes.findOne({_id:this._id}));
        Router.go('/edit_french');

       // alert(this._id)
        //Router.go('/edit_questions/', {_id: this._id});

    },
    'click .opret-nyt': function (e) {
        e.preventDefault();

        //Session.set('questionInScope', Quizzes.findOne({_id:this._id}));
        Router.go('/create_french');

        // alert(this._id)
        //Router.go('/edit_questions/', {_id: this._id});

    },
    'click #deletefrench': function (e) {
        e.preventDefault();
        Session.set('qId', this._id);
        //Session.set('questionInScope', Quizzes.findOne({_id:this._id}));
        //Router.go('/edit_questions');
        var id = this._id;
        var r = confirm("Er du sikker på du vil slette??");
        if (r == true) {
            Meteor.call('removefrench', id);
           // Tactic.remove({_id: this._id});
        };

    }


});

/*Template.listfrench.rendered = function() {
    var searchElement = document.getElementsByClassName('search-input-filter');
    if(!searchElement)
        return;
    var filterValue = Session.get("frenchFilter");

    var pos = 0;
    if (filterValue)
        pos = filterValue.length;

    searchElement[0].focus();
    searchElement[0].setSelectionRange(pos, pos);
};*/
