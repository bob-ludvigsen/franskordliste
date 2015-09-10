/**
 * Created by Bob on 22-06-2015.
 */
/*filteredTacticQuery = function(filter, cursor) {

    // TODO: configurable limit and paginiation
    var queryLimit = 20;

    if(!!filter) {
        // TODO: passing to regex directly could be dangerous
        words = Lists.find({$or: [
            {'DK': {$regex: filter, $options: 'i'}},
            {'FR': {$regex: filter, $options: 'i'}}
        ]
        }, {sort: {DK: 1}, limit: queryLimit});
    } else {
        words = Lists.find({},{sort: {DK: 1}, limit: queryLimit});
    }
    return words;
};*/

filteredUserQuery = function(userId, filter) {
    // if not an admin user don't show any other user
    if (!Roles.userIsInRole(userId, ['admin'])){
        return Meteor.users.find(userId);
    }
    // TODO: configurable limit and paginiation
    var queryLimit = 25;

    if(!!filter) {
        // TODO: passing to regex directly could be dangerous
        users = Meteor.users.find({
            $or: [
                {'profile.name': {$regex: filter, $options: 'i'}},
                {'emails.address': {$regex: filter, $options: 'i'}}
            ]
        }, {sort: {emails: 1}, limit: queryLimit});
    } else {
        users = Meteor.users.find({}, {sort: {emails: 1}, limit: queryLimit});
    }
    return users;
};

filteredTacticQuery = function(userId, filter) {
    // if not an admin user don't show any other user
    if (!Roles.userIsInRole(userId, ['admin','taktiskordbog'])){
        return Meteor.users.find(userId);
    }
    // TODO: configurable limit and paginiation
    var queryLimit = 55;

    if(!!filter) {
        // TODO: passing to regex directly could be dangerous
        words = Tactic.find({$or: [
            {'ord': {$regex: filter, $options: 'i'}},
            {'definition': {$regex: filter, $options: 'i'}}
        ]
        }, {sort: {ord: 1}, limit: queryLimit});

        console.log(words.count())
    } else {

        words = Tactic.find({},{sort: {ord: 1}, limit: queryLimit});

    }
    return words;
};

filteredEnglishQuery = function(userId, filter) {
    // if not an admin user don't show any other user
    if (!Roles.userIsInRole(userId, ['admin','hto'])){
        return Meteor.users.find(userId);
    }
    // TODO: configurable limit and paginiation
    var queryLimit = 55;

    if(!!filter) {
        // TODO: passing to regex directly could be dangerous
        words = Eng.find({$or: [
            {'value': {$regex: filter, $options: 'i'}},
            {'engelsk': {$regex: filter, $options: 'i'}}
        ]
        }, {sort: {value: 1}, limit: queryLimit});

        console.log(words.count())
    } else {

        words = Eng.find({},{sort: {value: 1}, limit: queryLimit});

    }
    return words;
};

filteredFrenchQuery = function(userId, filter) {
    // if not an admin user don't show any other user
    if (!Roles.userIsInRole(userId, ['admin','fransk'])){
        return Meteor.users.find(userId);
    }
    // TODO: configurable limit and paginiation
    var queryLimit = 55;

    if(!!filter) {
        // TODO: passing to regex directly could be dangerous
        words = Lists.find({$or: [
            {'DK': {$regex: filter, $options: 'i'}},
            {'FR': {$regex: filter, $options: 'i'}}
        ]
        }, {sort: {DK: 1}, limit: queryLimit});

        console.log(words.count())
    } else {

        words = Lists.find({},{sort: {DK: 1}, limit: queryLimit});

    }
    return words;
};


filteredFrontUserQuery = function(userId, filter) {
    // if not an admin user don't show any other user
    /*if (!Roles.userIsInRole(userId))
     return Meteor.users.find(userId);*/

    // TODO: configurable limit and paginiation
    var queryLimit = 25;

    if(!!filter) {
        // TODO: passing to regex directly could be dangerous
        users = Meteor.users.find({
            $or: [
                {'username': {$regex: filter, $options: 'i'}}
            ]
        }, {sort: {username: 1}, limit: queryLimit});
    } else {
        users = Meteor.users.find({}, {sort: {username: 1}});
    }
    return users;
};
