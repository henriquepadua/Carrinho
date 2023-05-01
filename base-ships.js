"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacecraft = void 0;
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with ".concat(this.propulsor));
    };
    return Spacecraft;
}());
exports.Spacecraft = Spacecraft;
