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
            "mouseenter nav .main_menu li":"scroll",
            "mouseleave nav .main_menu li":"scrollHide",
            "click #power":'shutdown'
            
        },
        render: function(){
            var view=this;
            var variables={mainvar:"now", mainButton:"Press Me"};
            var maintemplate= _.template( mainTemplate,variables);
            this.$el.html(maintemplate);
            
        },
        scroll:function(e){
           $('.scroll').animate({
                marginTop:'-10px',
                opacity: 0,
                
           },100);
           $('#' + e.currentTarget.id + ' .scroll').animate({
              marginTop:'+=15px',
              opacity: 1,
           },500);
        },
        scrollHide:function(e){
            $('.scroll').animate({
                marginTop:'+=-10px',
                opacity: 0,
           },100);
        },
        shutdown:function(){
            var status = $('.shutdown').css('display'), view = this;
            if (status == 'none')
                $('.shutdown').css({
                    'display' : 'block'
                });
            else
                $('.shutdown').css({
                    'display' : 'none'
                });
            var windowHeight = $(window).height();
            $(window).resize(function() {
                view.resizeShutdow($(window).height());
            });
            view.resizeShutdow($(window).height()); 
        },
        resizeShutdow:function(Height){
            $('.topHalf').css({'height':Height/2+'px'});
            $('.bottomHalf').css({'height':Height/2+'px'});
        },
        animateShutdown:function(){
            
        }
    });
    return {
        mainView : mainView
    };

});