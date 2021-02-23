interface Attributes {
    list?: string;
    maxLength?: number;
    minLength?: number;
    pattern?: RegExp;
    placeHolder?: string;
    size?: number;
    spellcheck?: boolean;
    id?: string;
    class?: string;
    name?: string;
    required?: boolean;
}
declare class PasswordInput {
    value: string;
    attributes: Attributes;
    constructor(v: string, a: Attributes);
    build(): string;
    render(): string;
}
export { PasswordInput };
