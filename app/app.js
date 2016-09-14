define(["require", "exports"], function(require, exports) {
    var App = (function () {
        function App() {
            console.log("Hello from SystemJS");
        }
        App.prototype.sayHello = function () {
            console.log("Hello SystemJs");
        };
        return App;
    })();
    exports.App = App;
});
