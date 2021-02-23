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

class TextInput {
  value: string;
  attributes: Attributes;
  constructor(v: string, a: Attributes) {
    this.value = v;
    this.attributes = a;
  }

  build():string {
    return Object.keys(this.attributes).map((key: string) => {
      const val: any = (this.attributes as any)[key];
      
      if(key === 'required') return val ? "required" : "";

      return `${key}="${val}"`;
    }).join(' ');
  }

  render() {
    const attr: string = this.build();
    return `<input type="text" ${attr} value="${this.value}">`;
  }
}

export { TextInput }