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
var Input = require('../lib/inputs/Input');
var validator = require('../lib/Validations');
var FormValidationError = require('../lib/Exceptions').FormValidationError;
module.exports = {
    startChecking: function (form) {
        return __awaiter(this, void 0, void 0, function () {
            var formInputs, i, len, errors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formInputs = Object.keys(form).filter(function (inputName) {
                            return form[inputName] instanceof Input;
                        }).map(function (inputName) {
                            var input = form[inputName];
                            input.name = inputName;
                            return input;
                        });
                        i = 0, len = formInputs.length;
                        _a.label = 1;
                    case 1:
                        if (!(i < len)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.validate(formInputs[i], form)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        errors = formInputs.reduce(function (acc, input) {
                            if (input.errors.length > 0)
                                acc.push(input.errors[0]);
                            return acc;
                        }, []);
                        return [2 /*return*/, errors];
                }
            });
        });
    },
    validate: function (input, form) {
        return __awaiter(this, void 0, void 0, function () {
            var validationTypes, i, len, propKey, propValue, customUserChecks, i_1, len_1, error_1, message, isValid;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        validationTypes = Object.keys(input.validations);
                        input.errors = [];
                        i = 0, len = validationTypes.length;
                        _a.label = 1;
                    case 1:
                        if (!(i < len)) return [3 /*break*/, 10];
                        propKey = validationTypes[i];
                        propValue = input.validations[propKey];
                        if (!(propKey === 'check')) return [3 /*break*/, 8];
                        if (!propValue || !Array.isArray(propValue))
                            throw new Error('check validation property must be a valid Array');
                        customUserChecks = propValue;
                        if (!customUserChecks) return [3 /*break*/, 7];
                        i_1 = 0, len_1 = customUserChecks;
                        _a.label = 2;
                    case 2:
                        if (!(i_1 < customUserChecks.length)) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        console.log('checikign///', input);
                        return [4 /*yield*/, customUserChecks[i_1].call(form, input.value)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _a.sent();
                        console.log(error_1);
                        input.errors.push(new FormValidationError(error_1.message, input.name, input.value));
                        return [3 /*break*/, 6];
                    case 6:
                        i_1++;
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        message = void 0;
                        // you can have {require = { value: true, message: 'something'}} or {require = true} this is to normalize that
                        if (typeof propValue === 'object') {
                            message = propValue.message;
                            propValue = propValue.value; // doing this assigment at last to not lose all the properties inside the object
                        }
                        isValid = validator(propKey).test(input.value, propValue);
                        if (!isValid) {
                            console.warn(propKey, input.value, propValue);
                            input.errors.push(new FormValidationError(message || propKey, input.name, input.value, propValue));
                        }
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 1];
                    case 10: return [2 /*return*/, input.errors];
                }
            });
        });
    }
};
