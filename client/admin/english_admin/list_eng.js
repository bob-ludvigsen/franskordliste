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



Template.listeng.helpers({
    words: function() {
        return filteredEnglishQuery(Meteor.userId(), Session.get("englishFilter"));
    }
});
// search no more than 2 times per second
var setEnglishFilter = _.throttle(function(template) {
    var search = template.find(".search-input-filter").value;
    Session.set("englishFilter", search);
}, 500);

Template.listeng.events({
    'keyup .search-input-filter': function(event, template) {
        setEnglishFilter(template);
        return false;
    },
    //

    'click #editenglish': function (e) {
        e.preventDefault();
        Session.set('qId', this._id);
        //Session.set('questionInScope', Quizzes.findOne({_id:this._id}));
        Router.go('/edit_english');

       // alert(this._id)
        //Router.go('/edit_questions/', {_id: this._id});

    },
    'click .opret-nyt': function (e) {
        e.preventDefault();

        //Session.set('questionInScope', Quizzes.findOne({_id:this._id}));
        Router.go('/create_english');

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
            Meteor.call('removeenglish', id);
           // Tactic.remove({_id: this._id});
        };

    },
    // Fires when any element with the 'accept' class is clicked
    'click .btn-danger': function (event) {
        $('.empty').val('');


    }


});
Template.listeng.rendered = function() {
    var searchElement = document.getElementsByClassName('search-input-filter');
    if(!searchElement)
        return;
    var filterValue = Session.get("englishFilter");

    var pos = 0;
    if (filterValue)
        pos = filterValue.length;

    searchElement[0].focus();
    searchElement[0].setSelectionRange(pos, pos);
};
