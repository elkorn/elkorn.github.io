(function() {
    'use strict';
    var menu = document.querySelector('.vimenu');
    var logo = document.querySelector('.logo');

    var flip = {
        'true': 'false',
        'false': 'true'
    };

    function toggleMenu() {
        menu.dataset.visible = flip[menu.dataset.visible];
    }

    logo.addEventListener('click', toggleMenu);
});
