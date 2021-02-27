export class CheckboxInput {
    constructor(v: string, a: Attributes);
    value: string;
    attributes: Attributes;
    render(attr: string): string;
}
interface Attributes {
    list?: string | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: RegExp | undefined;
    placeHolder?: string | undefined;
    size?: number | undefined;
    spellcheck?: boolean | undefined;
    id?: string | undefined;
    class?: string | undefined;
    name?: string | undefined;
    required?: boolean | undefined;
}
export {};
