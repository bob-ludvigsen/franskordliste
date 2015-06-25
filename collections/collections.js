/**
 * Created by Bob on 22-06-2015.
 */

Lists = new Ground.Collection('lists', { cleanupLocalData: false });
//Lists = new Mongo.Collection('lists',null);

//var language = Session.get("langDirection");
/*
Lists.initEasySearch(['DK'], {
    'limit' : 20,

});*/

EasySearch.createSearchIndex('wordsfr', {
    collection: Lists,
    field: 'FR',
    'limit' : 20,
    use: 'minimongo'
});

EasySearch.createSearchIndex('wordsdk', {
    collection: Lists,
    field: 'DK',
    'limit' : 20,
    use: 'minimongo'
});
