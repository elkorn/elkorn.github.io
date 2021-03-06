$(function() {
    $('#search-query').lunrSearch({
        indexUrl: '/js/index.json', // Url for the .json file containing search index data
        results: '#search-results', // selector for containing search results element
        entries: '.entries', // selector for search entries containing element (contained within results above)
        template: '#search-results-template' // selector for Mustache.js template
    });
});
