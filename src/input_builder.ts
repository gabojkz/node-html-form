class InputBuilder {
  input: { attributes: {}, };
  constructor(input: { attributes: {} }) {
    this.input = input;
  }

  buildLabel() {

  }

  buildInput():string {
    return Object.keys(this.input.attributes).map((key: string) => {
      const val: any = (this.input.attributes as any)[key];
      
      if(key === 'required') return val ? "required" : "";

      return `${key}="${val}"`;
    }).join(' ');
  }
}

export {InputBuilder};