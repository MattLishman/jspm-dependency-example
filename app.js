System.register(['angular', 'angular-ui/ui-codemirror'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular;
    return {
        setters:[
            function (angular_1) {
                angular = angular_1;
            },
            function (_1) {}],
        execute: function() {
            angular.module('app', [
                'ui.codemirror'
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map