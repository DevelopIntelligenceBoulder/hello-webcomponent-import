(function() {
    'use strict';

    //The element id specifying where the web application will reside
    var APP_ELEMENT_ID = 'app';
    //The Hello Component template link ID
    var HELLO_COMPONENT_TEMPLATE_ID = 'hello-template';

    /**
     * Initiates the view interaction.
     * @param model The data to be applied to the view
     */
    var initializeHelloComponent = function initializeHelloComponent(model) {
        DI.App.HelloComponent.render(APP_ELEMENT_ID, HELLO_COMPONENT_TEMPLATE_ID, model);
    };

    /**
     * "Main" functionality for the application
     * Is invoked when the DOM Ready event is fired thanks to jQuery.
     */
    $(function() {

        //Hello model containing place information
        var helloModel = {
            place: 'World'
        };

        //Get the Hello component setup for the application
        initializeHelloComponent(helloModel);

    });

})();