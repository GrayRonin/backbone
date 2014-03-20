/*define([
  'jquery',
  'underscore',
  'backbone',
  'text!/templates/main.html'
], function($, _, Backbone, mainTemplate){
  var ProjectListView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
      // Compile the template using Underscores micro-templating
      var compiledTemplate = _.template( mainTemplate );
      this.$el.html(compiledTemplate);
    }
  });
  // Returning instantiated views can be quite useful for having "state"
  return ProjectListView;
});*/
define([
    "jquery",
    "underscore",
    "backbone",
    'text!/templates/home'
    ], function( $, _, Backbone, mainTemplate ) {

    var mainView = Backbone.View.extend({
        el: 'body',
        initialize:function(){
            this.render();
        },
        events:{
            "click #mainButton":"actionButon"
        },
        render: function(){
            var holaMundo={mainvar:"now", mainButton:"Press Me"};
            var template= _.template( mainTemplate,holaMundo );
            this.$el.html(template);
        },
        actionButon:function(){
            alert('hihi');
        }
    });
    return {
        mainView : mainView
    };

});