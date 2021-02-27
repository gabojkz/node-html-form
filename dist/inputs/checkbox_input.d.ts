export = CheckboxInput;
/**
 * @typedef  {object} Attributes
 * @property {string} id    - input[id]
 * @property {[]}     class - input[class]
 * @property {string} name  - input[name]
 * @property {boolean} required - input[required]
 */
/**
  * html checkbox input
  */
declare class CheckboxInput {
    /**
     *
     * @param {string} n - name
     * @param {string} v - value
     * @param {Attributes} a - attributes
     */
    constructor(n: string, v: string, a: Attributes);
    name: string;
    value: string;
    attributes: Attributes;
    /**
     *
     * @param {string} attr
     */
    render(attr: string): string;
}
declare namespace CheckboxInput {
    export { Attributes };
}
type Attributes = {
    /**
     * - input[id]
     */
    id: string;
    /**
     * - input[class]
     */
    class: [];
    /**
     * - input[name]
     */
    name: string;
    /**
     * - input[required]
     */
    required: boolean;
};
