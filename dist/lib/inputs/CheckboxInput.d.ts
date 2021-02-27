export = CheckboxInput;
declare function CheckboxInput(...args: any[]): void;
declare class CheckboxInput {
    constructor(...args: any[]);
    constructor: typeof CheckboxInput;
    build(): string;
    /**
     * Option variable
     *
     * Specifies if checkbox input is checked. Default is false.
     */
    checked: boolean | undefined;
    setChecked(checked: any): boolean;
    isChecked(): boolean | undefined;
}
