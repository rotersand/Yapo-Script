// ==UserScript==
// @name         Yapo Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ahora puedes usar los botones derecha / izquierda para navegar por los anuncios!
// @author       Rotersand
// @match        http://www.yapo.cl/*
// @grant        none
// ==/UserScript==

jQuery(function( $ ) {
   'use strict';
    var keymap = {};

    // LEFT
    keymap[ 37 ] = "#bottom_prev";
    // RIGHT
    keymap[ 39 ] = "#bottom_next";

    $( document ).on( "keyup", function(event) {
        var href,
            selector = keymap[ event.which ];
        // if the key pressed was in our map, check for the href
        if ( selector ) {
            href = $( selector ).attr( "href" );
            if ( href ) {
                // navigate where the link points
                window.location = href;
            }
        }
    });
});
