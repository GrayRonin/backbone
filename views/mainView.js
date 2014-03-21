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
            "mouseenter nav .main_menu li":"scroll"
        },
        render: function(){
            var view=this;
            var variables={mainvar:"now", mainButton:"Press Me"};
            var maintemplate= _.template( mainTemplate,variables);
            this.$el.html(maintemplate);
        },
        scroll:function(e){
            console.log($(e.currentTarget))
            console.log($(e.currentTarget).children()[1])
            $(e.currentTarget).children()[1].css({
                'display':'block'
            });
        }
    });
    return {
        mainView : mainView
    };

});