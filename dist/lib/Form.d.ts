export = BaseForm;
/**
 * Class: BaseForm
 *
 * BaseForm works allowing you to create your own custom html forms programmatically
 * by inherit from this class it also validates the data submited and returns
 * and array of errors
 */
declare function BaseForm(): void;
declare class BaseForm {
    inputField(value: any, validations?: {}, htmlAttributes?: {}): TextInput;
    emailField(value: any, validations?: {}, htmlAttributes?: {}): EmailInput;
    passwordField(value: any, validations?: {}, htmlAttributes?: {}): PasswordInput;
    checkboxField(value: any, validations?: {}, htmlAttributes?: {}): CheckboxInput;
    errors(): Promise<any>;
}
import TextInput = require("./inputs/TextInput");
import EmailInput = require("./inputs/EmailInput");
import PasswordInput = require("./inputs/PasswordInput");
import CheckboxInput = require("./inputs/CheckboxInput");
