/**
 * Created by Bob on 08-09-2015.
 */
var instance;
Template.searchEngDa.onCreated(function () {

    instance = EasySearch.getComponentInstance(
        {  index: 'engDk'}
    );

    instance.on('searchingDone', function (searchingIsDone) {
        //return instance.get('currentValue');
        // searchingIsDone && console.log('I am done!' + instance.get('total'));
    });

    instance.on('currentValue', function (val) {
        // console.log('The user searches for ' + val);
    });

});

Template.searchEngDa.helpers({

    total: function () {
        var total = 0;
        total = instance.get('total');
        return  total;
    }

})
