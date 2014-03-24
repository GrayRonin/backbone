define(["jquery", "underscore", "backbone", 'text!/templates/home'], function($, _, Backbone, mainTemplate) {

    var mainView = Backbone.View.extend({
        el : 'body',
        initialize : function() {
            // this.render();
        },
        events : {
            "mouseenter nav .main_menu li" : "scroll",
            "mouseleave nav .main_menu li" : "scrollHide",
            "click #power" : 'shutdown',
            'click #contact':'contact'

        },
        render : function() {
            var view = this;
            var variables = {
                mainvar : "now",
                mainButton : "Press Me"
            };
            var maintemplate = _.template(mainTemplate, variables);
            this.$el.html(maintemplate);

        },
        scroll : function(e) {
            $('.scroll').animate({
                marginTop : '-10px',
                opacity : 0,

            }, 100);
            $('#' + e.currentTarget.id + ' .scroll').animate({
                marginTop : '+=15px',
                opacity : 1,
            }, 500);
        },
        scrollHide : function(e) {
            $('.scroll').animate({
                marginTop : '+=-10px',
                opacity : 0,
            }, 100);
        },
        shutdown : function() {
            var status = $('.shutdown').css('display'), view = this;
            if (status == 'none')
                $('.shutdown').css({
                    'display' : 'block'
                });
            else {
                $('.shutdown').css({
                    'display' : 'none'
                });
            }
            var windowHeight = $(window).height();
            $(window).resize(function() {
                view.resizeShutdow($(window).height());
            });
            $('.topHalf').animate({
                height : $(window).height() / 2 + 'px'
            }, 2000, function() {
                $('.midLineLeft, .midLineRight').animate({
                    width : '50%'
                }, 1000, function() {
                    $('.midLineLeft').animate({
                        marginLeft : '50%',
                        width : '0%'
                    }, 1000);
                    $('.midLineRight').animate({
                        marginRight : '50%',
                        width : '0%'
                    }, 1000,function(){
                        $('.midpoint').animate({
                            width:'20px',
                            height:'20px',
                            border: '10px solid #fff'
                        });
                    });
                });
            });

            $('.bottomHalf').animate({
                height : $(window).height() / 2 + 'px'
            }, 2000);
            view.resizeShutdow($(window).height());

        },
        resizeShutdow : function(Height) {
            $('.topHalf').css({
                'height' : Height / 2 + 'px'
            });
            $('.bottomHalf').css({
                'height' : Height / 2 + 'px'
            });
        },
        contact : function() {
            console.log('mainView.js')
            window.location.hash='contact';
        }
    });
    return {
        mainView : mainView
    };

}); 