/** @module AttibuteBuilder */

/**
 * @typedef {object} ELEMENT
 * @property {Array.<string>} htmlAttrs
 * @property {string} [for]
 * @property {[]} [class]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [_name_] - structure key
 * @property {number} [maxlength]
 * @property {number} [minlength]
 * @property {object} [pattern]
 * @property {string} [placeholder]
 * @property {boolean} [spellcheck]
 * @property {boolean} [readonly]
 * @property {number} [size]
 * @property {boolean} [required]
 * @property {boolean} [disabled]
 * @property {number} [rows]
 * @property {number} [cols]
 * @property {boolean} [checked]
 * @property {string} [label]
 * @property {string} [value]
 * @property {boolean} [selected]
 * @property {boolean} [indeterminate]
 * @property {string} [accept]
 * @property {boolean} [capture]
 * @property {boolean} [multiple]
 * @property {object} [max]
 * @property {object} [min]
 * @property {boolean} [autocomplete]
 * @property {boolean} [autofocus]
 */

/**
 * build html attributes
 */
class AttributeBuilder {
  /**
   * @param {ELEMENT} element
   */
  constructor(element) {
    this.element = element;
  }

  /** @return {string|undefined} */
  for() {
    if (!this.element.for) return;
    return `for="${this.element.for}"`;
  }

  /** @return {string|undefined} */
  class() {
    if (!this.element.class) return;

    if (Array.isArray(this.element.class)) {
      const unique = [...new Set(this.element.class)];
      return `class="${unique.join(' ')}"`;
    }

    return `class="${this.element.class}"`;
  }

  /** @return {string|undefined} */
  id() {
    if (!this.element.id) return;
    return `id="${this.element.id}"`;
  }

  /**
   * Attribute name for input
   * if input.name is missing then use structure key as name
   * @return {string|undefined}
   */
  name() {
    const name = !this.element.name ? this.element._name_ : this.element.name;
    if (!name) return;
    return `name="${name}"`;
  }

  /** @return {string|undefined} */
  maxlength() {
    if (!this.element.maxlength) return;
    return `maxlength="${this.element.maxlength}"`;
  }

  /** @return {string|undefined} */
  minlength() {
    if (!this.element.maxlength) return;
    return `minlength="${this.element.minlength}"`;
  }

  /** @return {string|undefined} */
  pattern() {
    if (!this.element.pattern) return;
    return `pattern="${this.element.pattern}"`;
  }

  /** @return {string|undefined} */
  placeholder() {
    if (!this.element.placeholder) return;
    return `placeholder="${this.element.placeholder}"`;
  }

  /** @return {string|undefined} */
  spellcheck() {
    if (!this.element.spellcheck) return;
    return `spellcheck="${this.element.spellcheck}"`;
  }

  /** @return {string|undefined} */
  readonly() {
    if (!this.element.readonly) return;
    return `readonly="${this.element.readonly}"`;
  }

  /** @return {string|undefined} */
  size() {
    if (!this.element.size) return;
    return `size="${this.element.size}"`;
  }

  /** @return {string} */
  required() {
    if (typeof this.element.required === 'boolean' &&
        this.element.required === false) {
      return '';
    }
    return 'required';
  }

  /** @return {string|undefined} */
  disabled() {
    if (typeof this.element.disabled === 'boolean' &&
        this.element.disabled === true) {
      return 'disabled';
    }
    return;
  }

  /** @return {string|undefined} */
  rows() {
    if (!this.element.rows) return;
    return `rows="${this.element.rows}"`;
  }

  /** @return {string|undefined} */
  cols() {
    if (!this.element.cols) return;
    return `cols="${this.element.cols}"`;
  }

  /** @return {string|undefined} */
  checked() {
    if (typeof this.element.checked === 'boolean' &&
        this.element.checked === true) {
      return 'checked';
    }
    return;
  }

  /** @return {string|undefined} */
  label() {
    if (!this.element.label) return;
    return `label="${this.element.label}"`;
  }

  /** @return {string|undefined} */
  value() {
    if (!this.element.value) return;
    return `value="${this.element.value}"`;
  }

  /** @return {string|undefined} */
  selected() {
    if (typeof this.element.selected === 'boolean' &&
        this.element.selected === true) {
      return 'selected';
    }
    return;
  }

  /** @return {string|undefined} */
  indeterminate() {
    if (typeof this.element.indeterminate === 'boolean' &&
        this.element.indeterminate === true) {
      return 'indeterminate';
    }
    return;
  }

  /** @return {string|undefined} */
  accept() {
    if (!this.element.accept) return;
    return `accept="${this.element.accept}"`;
  }

  /** @return {string|undefined} */
  max() {
    if (!this.element.max) return;
    return `max="${this.element.max}"`;
  }

  /** @return {string|undefined} */
  min() {
    if (!this.element.min) return;
    return `min="${this.element.min}"`;
  }

  /** @return {string|undefined} */
  capture() {
    if (typeof this.element.capture === 'boolean' &&
        this.element.capture === true) {
      return 'capture';
    }
    return;
  }

  /** @return {undefined} */
  files() {
    // no implemented not sure which is this attr is used in FileInput
    return;
  }

  /** @return {string|undefined} */
  multiple() {
    if (typeof this.element.multiple === 'boolean' &&
        this.element.multiple === true) {
      return 'multiple';
    }
    return;
  }

  /** @return {string|undefined} */
  autocomplete() {
    if (typeof this.element.autocomplete === 'boolean' &&
    this.element.autocomplete === true) {
      return 'autocomplete';
    }
    return;
  }

  /** @return {string|undefined} */
  autofocus() {
    if (typeof this.element.autofocus === 'boolean' &&
      this.element.autofocus === true) {
      return 'autofocus';
    }
    return;
  }

  /**
   * build attributes for the input
   * @return {Array.<string>} html attributes
   */
  build() {
    /**
     * @name AttributeBuilder#self
     * @type  {Object.<{key: string}, Function>}
     */
    const self = this;

    return this.element.htmlAttrs.map(
        (attrName) => {
          if (typeof self[attrName] !== 'function') {
            throw new Error(
                `cannot build attribute method '${attrName}' not found`
            );
          }
          return self[attrName]();
        }
    ).filter((found) => found);
  }

  /**
   * @return {string}
   */
  toString() {
    const attrs = this.build();
    return attrs.join(' ');
  }
}

module.exports = AttributeBuilder;
