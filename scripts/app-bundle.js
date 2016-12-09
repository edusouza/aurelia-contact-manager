define('app',["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Contatos';
            config.map([
                { route: '', moduleId: 'no-selection', title: 'Selecione' },
                { route: 'contatos/:id', moduleId: 'contact-detail', name: 'contatos' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", './environment'], function (require, exports, environment_1) {
    "use strict";
    Promise.config({
        longStackTraces: environment_1.default.debug,
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('no-selection',["require", "exports"], function (require, exports) {
    "use strict";
    var NoSelection = (function () {
        function NoSelection() {
            this.message = "Por favor, selecione um contato";
        }
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    function configure(config) {
    }
    exports.configure = configure;
});



define("contact-list", [],function(){});

define('text!app.html', ['module'], function(module) { module.exports = "<template>\n    <require from=\"bootstrap/css/bootstrap.css\"></require>\n    <require from=\"./styles.css\"></require>\n    \n    <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">\n                <i class=\"fa fa-user\"></i>\n                <span>Contatos</span>\n            </a>\n        </div>\n    </nav>\n    \n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">Lista de Contatos placeholder</div>\n            <router-view class=\"col-md-8\"></router-view>\n        </div>\n    </div>\n</template>\n"; });
define('text!styles.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!no-selection.html', ['module'], function(module) { module.exports = "<template>\r\n    <div class=\"no-selecion text-center\">\r\n        <h2>${message}</h2>\r\n    </div>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map