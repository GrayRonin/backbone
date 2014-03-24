define(["jquery", "underscore", "backbone", 'text!/templates/contact'], function($, _, Backbone, contactTemplate) {

    var  contactView= Backbone.View.extend({
        el : 'body',
        initialize : function() {
            // this.render();
        },
        events : {

        },
        render : function() {
            var view = this;
            var variables = {
                mainvar : "now",
                mainButton : "Press Me"
            };
            var contactTemplate = _.template(contactTemplate, variables);
            this.$el.html(maintemplate);
        }
    });
    return {
        contactView : contactView
    };

}); 