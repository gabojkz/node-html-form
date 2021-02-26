'use strict';
import { TextInput } from "./inputs/text_input";
import { TextAreaInput } from "./inputs/textarea_input";
import { CheckboxInput } from "./inputs/checkbox_input";
import { PasswordInput } from "./inputs/password_input";

import { InputBuilder } from "./input_builder";

class NodeForm {

  formStructure: object;
  constructor(formStructure: object) {
    this.formStructure = formStructure;
  }

  render() {
    const fromKeyToInput: { [key: string]: Object; } = {
      'text': TextInput,
    } as const;

    console.log('render')
    try {

      const inputs = Object.keys(this.formStructure)
        .map((key: string) => {
          console.log(key)
          if (!fromKeyToInput[key]) throw new TypeError('Input not found');
          console.log(key)
          return fromKeyToInput[key];
        });
  
      console.log('inputs', inputs);
    } catch (error) {
      console.log(error)
    }
  }
}

export { NodeForm }