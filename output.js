(function (modules) {
    function require(id) {
        const [fn, mapping] = modules[id];

        function localRequire(name) {
            return require(mapping[name]);
        }
        const module = { exports: {} };
        fn(localRequire, module, module.exports);
        return module.exports;
    }
    require(0);
})({
    0: [
        function (require, module, exports) {
            "use strict";

            var _relative = require("./relative.js");

            (0, _relative.hello)();
        },
        { "./relative.js": 1 }
    ],

    1: [
        function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.hello = void 0;

            var _message = require("./message.js");

            var hello = function hello() {
                console.log(_message.message);
            };

            exports.hello = hello;
        },
        { "./message.js": 2 }
    ],

    2: [
        function (require, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.message = void 0;
            var message = 2;
            exports.message = message;
        },
        {}
    ]
});
