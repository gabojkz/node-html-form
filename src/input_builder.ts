class InputBuilder {
  constructor(input) {
    
  }

  build():string {
    return Object.keys(this.attributes).map((key: string) => {
      const val: any = (this.attributes as any)[key];
      
      if(key === 'required') return val ? "required" : "";

      return `${key}="${val}"`;
    }).join(' ');
  }
}

export {InputBuilder};