sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"br/com/gamma/zuirapisagendaasst/test/integration/pages/ZC_IS_AGENDA_ASSTList",
	"br/com/gamma/zuirapisagendaasst/test/integration/pages/ZC_IS_AGENDA_ASSTObjectPage"
], function (JourneyRunner, ZC_IS_AGENDA_ASSTList, ZC_IS_AGENDA_ASSTObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('br/com/gamma/zuirapisagendaasst') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_IS_AGENDA_ASSTList: ZC_IS_AGENDA_ASSTList,
			onTheZC_IS_AGENDA_ASSTObjectPage: ZC_IS_AGENDA_ASSTObjectPage
        },
        async: true
    });

    return runner;
});

