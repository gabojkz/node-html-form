interface Attributes {
  list?: string,
  maxLength?: number,
  minLength?: number,
  pattern?: RegExp,
  placeHolder?: string,
  size?: number,
  spellcheck?: boolean,

  id?: string,
  class?: string,
  name?: string,
  required?: boolean
}

class CheckboxInput {
  value: string;
  attributes: Attributes;
  constructor(v: string, a: Attributes) {
    this.value = v;
    this.attributes = a;
  }

  render(attr: string) {
    return `<input type="checkbox" ${attr} value="${this.value}">`;
  }
}

export { CheckboxInput }