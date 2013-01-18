/**
 * Created by IntelliJ IDEA.
 * User: admin
 * Date: 10/24/12
 * Time: 1:40 AM
 * To change this template use File | Settings | File Templates.
 */
define(['use!jquery', 'use!underscore', 'use!backbone', 'application/Model.Item','mustache'],
    function($,_,Backbone, ItemModel, Mustache
                ) {
		

        return Backbone.View.extend({
           
             events: {
            	"click .delete": "deleteClicked",
            	"click .save": "saveClicked"
            
        	},
        	
        	//tagName:  "li",
		    //template: _.template($('#itemTemplate').html()),


            initialize: function(){
            
            
            console.log('itemview::initialize');
            this.model.set('id', this.model.get('_id'));
            // this.model = options.model;
           	 console.log('itemview model is ' + JSON.stringify(this.model));
           	  _.bindAll(this, 'render', 'remove', 'deleteClicked', 'saveClicked');

            
             this.listenTo(this.model, 'change', this.render);
             this.listenTo(this.model, 'destroy', this.remove);

           	 

            //this.model.bind('destroy', this.render);
     		// this.bind(this.model, 'destroy', this.remove);
           	 
           	 // this.model.on('change', this.render);
           	 //this.model.bind('destroy', this.render, this.remove);
           	 
           	 
           	
             
        },

            render:function () {
                console.log('itemview::render');
                var template = $('#itemTemplate').html();
                var jsonObj = eval("(" + JSON.stringify(this.model) + ")");
                var html = Mustache.to_html(template, jsonObj);
                this.$el.html(html);
                return this;
            },
            
            remove:function() {
            
              console.log('itemview::remove');
                $(this.el).remove();
            },
            
            
            
            deleteClicked:function(e) {
               e.preventDefault();
               e.stopPropagation();
               console.log('deleting... for id:' + this.model.get('id'));
                 self = this;
                   this.model.destroy({
                       
                    });
          
            return false;
            },
            
           saveClicked:function(e) {
               e.preventDefault();
               e.stopPropagation();
               console.log('save... for id:' + JSON.stringify(this.model));
                 self = this;
                var titleText = this.$(".titleText").val();
                this.model.save({
                       title:titleText
                });
          
            return false;
            },

        });
    })