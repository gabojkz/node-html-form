'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var formValidation = require('../lib/FormValidation');
var Input = require('./inputs/Input');
var TextInput = require('./inputs/TextInput');
var EmailInput = require('./inputs/EmailInput');
var CheckboxInput = require('./inputs/CheckboxInput');
var PasswordInput = require('./inputs/PasswordInput');
var utils = require('./Utils');
/**
 * Class: BaseForm
 *
 * BaseForm works allowing you to create your own custom html forms programmatically
 * by inherit from this class it also validates the data submited and returns
 * and array of errors
 */
function BaseForm() {
}
BaseForm.prototype.inputField = function (value, validations, htmlAttributes) {
    if (validations === void 0) { validations = {}; }
    if (htmlAttributes === void 0) { htmlAttributes = {}; }
    return new TextInput(value, validations, htmlAttributes);
};
BaseForm.prototype.emailField = function (value, validations, htmlAttributes) {
    if (validations === void 0) { validations = {}; }
    if (htmlAttributes === void 0) { htmlAttributes = {}; }
    return new EmailInput(value, validations, htmlAttributes);
};
BaseForm.prototype.passwordField = function (value, validations, htmlAttributes) {
    if (validations === void 0) { validations = {}; }
    if (htmlAttributes === void 0) { htmlAttributes = {}; }
    return new PasswordInput(value, validations, htmlAttributes);
};
BaseForm.prototype.checkboxField = function (value, validations, htmlAttributes) {
    if (validations === void 0) { validations = {}; }
    if (htmlAttributes === void 0) { htmlAttributes = {}; }
    return new CheckboxInput(value, validations, htmlAttributes);
};
/**
 * Async Property: errors
 *
 * Compare each rule with the data provided
 */
BaseForm.prototype.errors = function () {
    return __awaiter(this, void 0, void 0, function () {
        var formErrors;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, formValidation.startChecking(this)];
                case 1:
                    formErrors = _a.sent();
                    return [2 /*return*/, formErrors.map(function (error) {
                            return error.asMessage();
                        })];
            }
        });
    });
};
module.exports = BaseForm;
