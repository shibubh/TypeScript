//// [parserES5ComputedPropertyName4.ts]
var v = { get [e]() { } };

//// [parserES5ComputedPropertyName4.js]
var v = (_a = {},
    _a[e] = Object.defineProperty({ get: function () {
        }, enumerable: true, configurable: true }),
    _a);
var _a;
