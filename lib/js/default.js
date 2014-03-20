console.log('h');
/*(function ($) {
  
  Friend = Backbone.Model.extend({
    //Create a model to hold friend atribute
    name: null
  });
  
  Friends = Backbone.Collection.extend({
    //This is our Friends collection and holds our Friend models
    initialize: function (models, options) {
      this.bind("add", options.view.addFriendLi);
      //Listen for new additions to the collection and call a view function if so
    }
  });
  
  AppView = Backbone.View.extend({
    el: $("body"),
    initialize: function () {
      this.friends = new Friends( null, { view: this });
      //Create a friends collection when the view is initialized.
      //Pass it a reference to this view to create a connection between the two
    },
    events: {
      "click #add_friend":  "showPrompt",
    },
    showPrompt: function () {
      var friend_name = prompt("Who is your friend?");
      var friend_model = new Friend({ name: friend_name });
      //Add a new friend model to our friend collection
      this.friends.add( friend_model );
    },
    addFriendLi: function (model) {
      //The parameter passed is a reference to the model that was added
      $("#friends-list").append("<li>" + model.get('name') + "</li>");
      //Use .get to receive attributes of the model
    }
  });
  
  var appview = new AppView;
})(jQuery);*/
/*
SearchView = Backbone.View.extend({
    initialize:function(){
        this.render();
    },
    render:function(){
        var template=_.template($('#search_template').html(),{});
        this.el.html(template);
    }
});
var search_view=new SearchView({el: $("#search_container")});*/

require.config({
  paths: {
    jquery: '/lib/js/jquery',
    underscore: '/lib/js/underscore',
    backbone: '/lib/js/backbone-min',
    vistas:'/views/mainView'
  },
  shim: {
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        underscore: {
            exports: "_"
        }
    }
});


require([
    'jquery',
    'underscore',
    'backbone',
    'vistas'
    ], function ($, _, Backbone,vistas) {
    // rutas de la aplicación
    var router = Backbone.Router.extend({
        routes: {
          '': 'home'
        },
        home: function(){
            this.homeView = new vistas.mainView();
            this.homeView.render();
        }
    });
    // iniciamos la aplicación
     app = new router;
         Backbone.history.start(); 
});


