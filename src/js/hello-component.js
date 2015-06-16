(function() {
    'use strict';

    /**
     * Hello Component module used to handle UI rendering
     */
    DI.App.HelloComponent = (function() {

        //HTML Element Attribute Handle for the "place" model property
        var MODEL_PLACE_HANDLE = '[data-model="place"]';
        //HTML Element Attribute Handle for the template wrapper element (i.e. div)
        var TEMPLATE_HANDLE = '[data-template="hello"]';

        /**
         * Handles the rendering of this Component
         * @param elementID The id of the element the component will be placed within
         * @param templateID The id of the template link element to be utilized
         * @param model The model object holding dynamic data
         */
        var render = function render(elementID, templateID, model) {
            ////Grab imported HTML file and import it
            var templateReference = document.getElementById(templateID).import;

            //Grab template from the imported HTML
            var template = templateReference.querySelector(TEMPLATE_HANDLE);

            //Inject model (i.e. "place")
            template.querySelector(MODEL_PLACE_HANDLE).textContent = model.place;

            //Attach template to DOM
            document.getElementById(elementID).appendChild(template);
        };

        //API for Module Revealing Pattern
        return {
            render: render
        };

    })();

})();