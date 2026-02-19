sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'br.com.gamma.zuirapisagendaasst',
            componentId: 'ZC_IS_AGENDA_ASSTList',
            contextPath: '/ZC_IS_AGENDA_ASST'
        },
        CustomPageDefinitions
    );
});