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



Template.listtactic.helpers({
    words: function() {
        return filteredTacticQuery(Meteor.userId(), Session.get("tacticFilter"));
    }
});
// search no more than 2 times per second
var setTacticFilter = _.throttle(function(template) {
    var search = template.find(".search-input-filter").value;
    Session.set("tacticFilter", search);
}, 500);

Template.listtactic.events({
    'keyup .search-input-filter': function(event, template) {
        setTacticFilter(template);
        return false;
    },
    //

    'click #edittactic': function (e) {
        e.preventDefault();
        Session.set('qId', this._id);
        //Session.set('questionInScope', Quizzes.findOne({_id:this._id}));
        Router.go('/edit_tactic');

       // alert(this._id)
        //Router.go('/edit_questions/', {_id: this._id});

    },
    'click .opret-nyt': function (e) {
        e.preventDefault();

        //Session.set('questionInScope', Quizzes.findOne({_id:this._id}));
        Router.go('/create_tactic');

        // alert(this._id)
        //Router.go('/edit_questions/', {_id: this._id});

    },
    'click #deletetactic': function (e) {
        e.preventDefault();
        Session.set('qId', this._id);
        //Session.set('questionInScope', Quizzes.findOne({_id:this._id}));
        //Router.go('/edit_questions');
        var id = this._id;
        var r = confirm("Er du sikker på du vil slette??");
        if (r == true) {
            Meteor.call('removetactic', id);
           // Tactic.remove({_id: this._id});
        };

    }


});
Template.listtactic.rendered = function() {
    var searchElement = document.getElementsByClassName('search-input-filter');
    if(!searchElement)
        return;
    var filterValue = Session.get("tacticFilter");

    var pos = 0;
    if (filterValue)
        pos = filterValue.length;

    searchElement[0].focus();
    searchElement[0].setSelectionRange(pos, pos);
};
