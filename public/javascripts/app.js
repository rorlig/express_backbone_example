/*
 * Copyright (c) 2011  renardi[at]rdacorp[dot]com  (http://mobile.rdacorp.com)
 * Licensed under the MIT License
 * 
 * This is sample demo of Google Map, Twitter Search, Backbone framework 
 *
 *
 */

define(['jquery', 'use!underscore', 'use!backbone', 'application/Router.app'],
    function($, _, Backbone, Router) {


        return function(root_el) {

            console.log('initializing app');
            var router = new Router();
           // var profileRouter = new ProfileRouter();
            Backbone.history.start();




            return {
                router: router
//                mapView: mapView,
//                rentCollection: rentCollection,
//                pubSub: pubSub,
//                headerView: headerView,
//                paneView: paneView

            } ;

        };
    });












