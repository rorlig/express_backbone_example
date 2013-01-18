/**
 * Created by IntelliJ IDEA.
 * User: admin
 * Date: 10/24/12
 * Time: 1:40 AM
 * To change this template use File | Settings | File Templates.
 */
define(['use!jquery', 'use!underscore', 'use!backbone', 'application/Collections.ItemCollection',

     'application/Views.ItemView', 'application/Model.Item'],
    function($,_,Backbone, ItemCollection, ItemView, ItemModel
                ) {
		

        return Backbone.View.extend({
             			
             el: "#content",

             events: {
            	"click #add": "addNewItem"
         	 },

            initialize: function(){
           	 console.log('itemcollectionview::initialize');
           	 
           	 
           	 this.itemCollection = new ItemCollection();
           	  _.bindAll(this, 'render',  'addAll', 'addItem', 'addNewItem', 'deleteClicked');
           	 this.$input = this.$('#newItemTitle');
           	  
           	this.listenTo(this.itemCollection, 'add', this.addOne);
			this.listenTo(this.itemCollection, 'reset', this.addAll);
			//this.listenTo(app.Todos, 'change:completed', this.filterOne);
			//this.listenTo(app.Todos, 'filter', this.filterAll);
			//this.listenTo(app.Todos, 'all', this.render);

           	// this.itemCollection.bind('reset', this.addAll, this);
           //  this.itemCollection.bind('change', this.addAll, this);
           // this.itemCollection.on("sync", this.addAll, this);
             
             this.itemCollection.fetch();
	     },

            render:function () {
               
      		//	this.$el.html(this.template(this.model.toJSON()));
   				//this.$el.toggleClass('done', this.model.get('done'));
      			//this.input = this.$('.edit');
    			return this;
    		},
           
            addNewItem:function(e) {
              e.preventDefault();
              e.stopPropagation();
              console.log('add new item');
              var itemModel = new ItemModel();
              var self = this;
              itemModel.save({title:this.$input.val()}, {
              		success:function() {
						//console.log('success');
						self.itemCollection.fetch();
				  	} 
              });
              
           
              			  
			  this.$input.val('');
            	
            },
            
          
            addAll:function() {
            
              console.log('ItemView::addall');
              console.log('ItemView itemCollection is  ' + JSON.stringify(this.itemCollection));
              // $(this.el).empty();
			   this.$('#itemList').html('');
           	   this.itemCollection.each(this.addItem, this);
           	  //	 $(this.el).append();
           	  // this.render();
              
            
            },
            
            addItem: function(item) {

              console.log('HomeView item is  ' + JSON.stringify(item));
              var jsonObj = eval("(" + JSON.stringify(item) + ")");
              var template = $('#itemTemplate').html();
              var itemModel = this.itemCollection.get(jsonObj._id);
              var view = new ItemView({model: item});
              this.$("#itemList").append(view.render().el);
   			  //var html = Mustache.to_html(template, jsonObj);
   			  //console.log('html is ' + html);
             // html = Mustache.to_html(this.itemtemplate, jsonObj);
	          //$("#content").append(html);
            
            
            
            },
            
            deleteClicked:function(e) {
               e.preventDefault();
               var id = $(e.currentTarget).data("id");
               console.log('delete clicked for id' + id);
               var model = this.collection.get(id);
           // model.trigger('click');
           // return false;
            }

        });
    })