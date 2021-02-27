export = Label;
/**
 * @typedef {object} PlainLabel
 * @property {string} for - html attr match input id
 * @property {[]} classes - html attr
 * @property {string} id  - html attr
 * @property {string|boolean} text
 */
/**
 * TODO: make sure the for attr match the input id
 */
/**
 * html label element
 *
 * @example
 *   <label for="male">Text value</label>
 */
declare class Label {
    /**
     * @param {Input} input
     * @param {PlainLabel} plainLabel
     * @property {Array.<string>} htmlAttrs
     */
    constructor(input: any, plainLabel: PlainLabel);
    for: string;
    class: [];
    id: string;
    input: any;
    htmlAttrs: string[];
    /**
     * label text value
     * @return {string}
     */
    get text(): string;
    /**
     * tag html element
     */
    get tag(): string;
}
declare namespace Label {
    export { PlainLabel };
}
type PlainLabel = {
    /**
     * - html attr match input id
     */
    for: string;
    /**
     * - html attr
     */
    classes: [];
    /**
     * - html attr
     */
    id: string;
    text: string | boolean;
};
