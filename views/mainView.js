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
    "backbone"
    ], function( $, _, Backbone ) {

    var mainView = Backbone.View.extend({
        el: $( "#main" ),
        initialize: function () {
             this.render();
        },
        render: function() {
            this.el.html("huzzah!");
        }
    });
    return mainView;

});