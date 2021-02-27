export function FormValidationError(message: any, inputName: any, inputValue: any, requirement: any): void;
export class FormValidationError {
    constructor(message: any, inputName: any, inputValue: any, requirement: any);
    name: string;
    message: any;
    inputName: any;
    inputValue: any;
    requirement: any;
    constructor: typeof FormValidationError;
    asJSON(): string;
    asMessage(): any;
}
/**
 * Class: FormError
 *
 * Custom error class use this in the form to throw errors for custom
 * validation checks
 *
 * @param {*} label
 * @param {*} value
 * @param {*} message
 */
export function FormError(message: any): void;
export class FormError {
    /**
     * Class: FormError
     *
     * Custom error class use this in the form to throw errors for custom
     * validation checks
     *
     * @param {*} label
     * @param {*} value
     * @param {*} message
     */
    constructor(message: any);
    name: string;
    validationType: string;
    message: any;
    constructor: typeof FormError;
}
