/**
 * Created by Bob on 23-06-2015.
 */

/*
Meteor.publish('filteredUsers', function(filter , cursor) {
    return filteredWordQuery(filter , cursor);
    //return Lists.find();
})*/;

Meteor.publish('allDocs', function () {
    return [
        Lists.find({})

    ];
});

Meteor.publish(null, function (){
    return Meteor.roles.find({})
});
Meteor.publish('users', function(){
   // return users.find();

});

Meteor.publish('filteredUsers', function(filter) {

    if (!Roles.userIsInRole(this.userId, ['admin'])){
        return Meteor.users.find(this.userId);
    } else {
        return filteredUserQuery(this.userId, filter);
    }

});

Meteor.publish('allTactics', function() {
    return Tactic.find();
});
Meteor.publish('allEnglish', function() {
    return Eng.find();
});

Meteor.publish('allFrench', function() {
    return Lists.find();
});


Meteor.publish('filteredTactics', function(filter) {

    if (!Roles.userIsInRole(this.userId, ['admin', 'taktiskordbog'])){
        return;
    } else {
        return filteredTacticQuery(this.userId, filter);
    }

});
