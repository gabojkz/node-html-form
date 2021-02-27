export = AttributeBuilder;
/** @module AttibuteBuilder */
/**
 * @typedef {object} Label
 * @property {Array.<string>} htmlAttrs
 * @property {string} for
 * @property {[]} class
 * @property {string} id
 */
/**
 * build html attributes
 */
declare class AttributeBuilder {
    /**
     * @param {Label} element
     */
    constructor(element: Label);
    element: Label;
    /**
     * @return {string|void}
     */
    for(): string | void;
    /**
     * @return {string|void}
     */
    class(): string | void;
    /**
     * @return {string|void}
     */
    id(): string | void;
    /**
     * build attributes for the input
     * @return {string} html attributes
     */
    build(): string;
}
declare namespace AttributeBuilder {
    export { Label };
}
type Label = {
    htmlAttrs: Array<string>;
    for: string;
    class: [];
    id: string;
};
