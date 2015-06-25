/**
 * Created by Bob on 22-06-2015.
 */
Meteor.startup(function() {

    // if there are no polls available create sample data
    if (Lists.find().count() === 0) {

        // create sample polls
        var sampleWords = JSON.parse(Assets.getText('fransk.json'));

        // loop over each sample poll and insert into database
        _.each(sampleWords, function(words) {
            Lists.insert(words);
        });

    }

});
