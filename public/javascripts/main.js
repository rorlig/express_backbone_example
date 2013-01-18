/**
 * Created by IntelliJ IDEA.
 * User: admin
 * Date: 10/2/12
 * Time: 9:09 PM
 * To change this template use File | Settings | File Templates.
 */


require.config({
    paths: {
        'jquery': 'libs/jquery',
        
      	
        'backbone':'libs/backbone',
        
        'modernizer':'libs/modernizer',
        'mustache': 'libs/mustache-wrap',
        'underscore': 'libs/underscore',
        'use':'libs/use',
        'text':'libs/text',
        'app' : 'app',
        'bootstrap': 'libs/bootstrap',
        'bootstrap-dropdown': 'libs/bootstrap-dropdown',
        


    } ,

    use: {
        "jquery": {
            attach: "$"

        },

        "underscore": {
            attach: "_"
        },

        "backbone": {
            deps: [ "jquery", "use!underscore"],
            attach: function(_, $) {
                return Backbone;
            }
        } ,
       
       
        "bootstrap": {
            deps:["jquery"]
        },

        "bootstrap-dropdown": {
            deps:["jquery", "bootstrap"]
        }
    }



});


require(['app']
    , function(App){
   console.log('initializing main');
   new App($('#content'));


//    Backbone.history.start();
    }
//    ,
//
//    //comment this line to enable logging
//    console.log = function() {}
);