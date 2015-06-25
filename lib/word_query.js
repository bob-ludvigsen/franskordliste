/**
 * Created by Bob on 22-06-2015.
 */
filteredWordQuery = function(filter, cursor) {

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
};
