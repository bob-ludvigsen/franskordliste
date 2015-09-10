/**
 * Created by Bob on 20-08-2015.
 */

var instance;
Template.search.onCreated(function () {



    instance = EasySearch.getComponentInstance(
        {  index: 'wordsdk'}
    );

    instance.on('searchingDone', function (searchingIsDone) {
        //return instance.get('currentValue');
        //searchingIsDone && console.log('I am done!' + instance.get('total'));
    });

    instance.on('currentValue', function (val) {
        //console.log('The user searches for ' + val);
    });

});

Template.search.helpers({

    total: function () {
        var total = 0;
        total = instance.get('total');
        return  total;
    }

})