sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        /**
         * Generated event handler.
         *
         * @param oContext the context of the page on which the event was fired. `undefined` for list report page.
         * @param aSelectedContexts the selected contexts of the table rows.
         */
        onPressCriarOrdemVenda: function(oContext, aSelectedContexts) {
            var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation");
            // // trigger navigation
            // oCrossAppNav.toExternal({
            //     target: { semanticObject: "SalesDocument", action: "create" }
            // });
            // Open app in external window
            var sHash = oCrossAppNav.hrefForExternal({
                target: {
                    semanticObject: "SalesDocument",
                    action: "create"
                }
            });

            // Create full URL and Redirect to New Window
            var sUrl = window.location.href.split('#')[0] + sHash;
            sap.m.URLHelper.redirect(sUrl, true); // true = open in new tab/*  */
        }
    };
});
