/**
 * Created by Bob on 22-06-2015.
 */

//Lists = new Ground.Collection('lists', { cleanupLocalData: false });
Lists = new Mongo.Collection('lists');
Eng = new Mongo.Collection('eng');
Tactic = new Mongo.Collection('tactic');


EasySearch.createSearchIndex('taktik', {
    collection: Tactic,
    field: ['ord', 'fork', 'definition', 'nato_translation', 'remark', 'rev'],
    'reactive': false,
    'limit': 30,
    'sort': function () {
        return {'ord': 1};
    },
    //returnFields: ['value', 'engelsk', 'fork_uk'],
    use: 'mongo-db'
});

EasySearch.createSearchIndex('eng', {
    collection: Eng,
    field: ['value'],
    'reactive': false,
    'limit': 30,
    'sort': function () {
        return {'value': 1};
    },
    returnFields: ['value', 'engelsk', 'fork_uk'],
    use: 'mongo-db'
});

EasySearch.createSearchIndex('engDk', {
    collection: Eng,
    field: ['engelsk', 'fork_uk'],
    'reactive': false,
    'limit': 30,
    'sort': function () {
        return {'engelsk': 1};
    },
    returnFields: ['value', 'engelsk', 'fork_uk'],
    use: 'mongo-db'
});
EasySearch.createSearchIndex('engFork', {
    collection: Eng,
    field: 'fork_uk',
    'reactive': false,
    'limit': 30,
    'sort': function () {
        return {'fork_uk': 1};
    },
    returnFields: ['value', 'engelsk', 'fork_uk'],
    use: 'mongo-db'
});

EasySearch.createSearchIndex('engFork', {
    collection: Eng,
    field: 'fork_uk',
    'reactive': false,
    'limit': 30,
    'sort': function () {
        return {'fork_uk': 1};
    },
    returnFields: ['value', 'engelsk', 'fork_uk'],
    use: 'mongo-db'
});


EasySearch.createSearchIndex('wordsfr', {
    collection: Lists,
    field: 'FR',
    'reactive': false,
    'limit': 30,
    returnFields: ['FR', 'DK', 'Ordklasse', 'FRForkortelse', 'DKforkortelse'],
    use: 'mongo-db'
});

EasySearch.createSearchIndex('wordsdk', {
    collection: Lists,
    field: 'DK',
    'reactive': false,
    'limit': 30,
    returnFields: ['FR', 'DK', 'Ordklasse', 'FRForkortelse', 'DKforkortelse'],
    use: 'mongo-db'
});
