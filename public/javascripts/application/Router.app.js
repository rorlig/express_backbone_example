/**
 * Created by IntelliJ IDEA.
 * User: admin
 * Date: 10/2/12
 * Time: 9:17 PM
 * To change this template use File | Settings | File Templates.
 */


define(['jquery', 'use!underscore', 'use!backbone','application/Views.ItemCollectionView'],
    function($,_,Backbone, ItemCollectionView) {

    return Backbone.Router.extend({


    routes: {
        "":       "index",
       

    },



    initialize: function() {
       
        if (window.location.hash == '#_=_') {
            window.location.hash = '';
        }
        return this;
    },

   


    index: function() {
        console.log('in index');
        if (!this.itemCollectionView) {
            console.log('itemCollectionView is null');
            this.itemCollectionView = new ItemCollectionView();
            this.itemCollectionView.render();
        } else {
            console.log('itemCollectionView is not null');
            this.itemCollectionView.render();
            this.itemCollectionView.delegateEvents(); // delegate events when the view is recycled
        }
//        console.log('homeView el' + this.homeView.el);
        $("#content").html(this.itemCollectionView.html);


    },

  
     

})});

//----------------------------------------

