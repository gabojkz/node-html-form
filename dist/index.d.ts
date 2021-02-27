export = NodeForm;
/**
 * @typedef {object} FormStructure
 * @type {Object.<[key: string], InputNode>}
 */
/**
 * @typedef {object} InputNode
 * @property {string} type
 * @property {[]} classes - array of classes
 */
/**
 * Main class
 */
declare class NodeForm {
    /**
     * @param {FormStructure} formStructure
     */
    constructor(formStructure: FormStructure);
    formStructure: any;
}
declare namespace NodeForm {
    export { FormStructure, InputNode };
}
type FormStructure = any;
type InputNode = {
    type: string;
    /**
     * - array of classes
     */
    classes: [];
};
