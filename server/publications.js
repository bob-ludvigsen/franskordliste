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
