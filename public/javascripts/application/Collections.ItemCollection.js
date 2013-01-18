/**
 * Created by IntelliJ IDEA.
 * User: admin
 * Date: 10/3/12
 * Time: 1:29 AM
 * To change this template use File | Settings | File Templates.
 */

define(['use!backbone', 'application/Model.Item'],
    function(Backbone, Item) {
        var ItemCollection = Backbone.Collection.extend({
            url: "http://127.0.0.1:3000/api/items",
            model: Item
        });

        return ItemCollection;
    }
 );




