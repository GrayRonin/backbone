define([
    "jquery",
    "underscore",
    "backbone",
    'text!/templates/home'
    ], function( $, _, Backbone, mainTemplate) {

    var mainView = Backbone.View.extend({
        el: 'body',
        initialize:function(){
           // this.render();
        },
        events:{
            "click #mainButton":"actionButon"
        },
        render: function(){
            var view=this;
            var variables={mainvar:"now", mainButton:"Press Me"};
            var maintemplate= _.template( mainTemplate,variables);
            this.$el.html(maintemplate);
        },
        actionButon:function(){
            alert('hihi');
        }
    });
    return {
        mainView : mainView
    };

});