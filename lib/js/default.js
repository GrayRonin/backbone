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


