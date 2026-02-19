sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'br.com.gamma.zuirapisagendaasst',
            componentId: 'ZC_IS_AGENDA_ASSTObjectPage',
            contextPath: '/ZC_IS_AGENDA_ASST'
        },
        CustomPageDefinitions
    );
});