export = buildInput;
/**
 * @param {Structure} structure
 * @param {string} inputName
 * @return {unknown} - input element instance
 */
declare function buildInput(structure: Structure, inputName: string): unknown;
declare namespace buildInput {
    export { Structure, InputNode };
}
type Structure = {
    [x: string]: InputNode;
};
type InputNode = {
    type: string;
    value: unknown;
};
