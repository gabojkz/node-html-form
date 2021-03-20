/** @module AttibuteBuilder */

/**
 * @typedef {object} Label
 * @property {Array.<string>} htmlAttrs
 * @property {string} for
 * @property {[]} class
 * @property {string} id
 * @property {string} name
 * @property {number} maxlength
 * @property {number} minlength
 * @property {object} pattern
 * @property {string} placeholder
 * @property {boolean} spellcheck
 * @property {boolean} readonly
 * @property {number} size
 * @property {boolean} required
 * @property {boolean} disabled
 * @property {number} rows
 * @property {number} cols
 * @property {boolean} checked
 * @property {string} label
 * @property {string} value
 * @property {boolean} selected
 * @property {boolean} indeterminate
 * @property {string} accept
 * @property {boolean} capture
 * @property {boolean} multiple
 * @property {object} max
 * @property {object} min
 */

/**
 * build html attributes
 */
class AttributeBuilder {
  /**
   * @param {Label} element
   */
  constructor(element) {
    this.element = element;
  }

  /** @return {string|void} */
  for() {
    if (!this.element.for) return;
    return `for="${this.element.for}"`;
  }

  /** @return {string|void} */
  class() {
    if (!this.element.class) return;

    if (Array.isArray(this.element.class)) {
      const unique = [...new Set(this.element.class)];
      return `class="${unique.join(' ')}"`;
    }

    return `class="${this.element.class}"`;
  }

  /** @return {string|void} */
  id() {
    if (!this.element.id) return;
    return `id="${this.element.id}"`;
  }

  /** @return {string|void} */
  name() {
    if (!this.element.name) return;
    return `name="${this.element.name}"`;
  }

  /** @return {string|void} */
  maxlength() {
    if (!this.element.maxlength) return;
    return `maxlength="${this.element.maxlength}"`;
  }

  /** @return {string|void} */
  minlength() {
    if (!this.element.maxlength) return;
    return `minlength="${this.element.minlength}"`;
  }

  /** @return {string|void} */
  pattern() {
    if (!this.element.pattern) return;
    return `pattern="${this.element.pattern}"`;
  }

  /** @return {string|void} */
  placeholder() {
    if (!this.element.placeholder) return;
    return `placeholder="${this.element.placeholder}"`;
  }

  /** @return {string|void} */
  spellcheck() {
    if (!this.element.spellcheck) return;
    return `spellcheck="${this.element.spellcheck}"`;
  }

  /** @return {string|void} */
  readonly() {
    if (!this.element.readonly) return;
    return `readonly="${this.element.readonly}"`;
  }

  /** @return {string|void} */
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

  /** @return {string|void} */
  disabled() {
    if (typeof this.element.disabled === 'boolean' &&
        this.element.disabled === true) {
      return 'disabled';
    }
    return;
  }

  /** @return {string|void} */
  rows() {
    if (!this.element.rows) return;
    return `rows="${this.element.rows}"`;
  }

  /** @return {string|void} */
  cols() {
    if (!this.element.cols) return;
    return `cols="${this.element.cols}"`;
  }

  /** @return {string|void} */
  checked() {
    if (typeof this.element.checked === 'boolean' &&
        this.element.checked === true) {
      return 'checked';
    }
    return;
  }

  /** @return {string|void} */
  label() {
    if (!this.element.label) return;
    return `label="${this.element.label}"`;
  }

  /** @return {string|void} */
  value() {
    if (!this.element.value) return;
    return `value="${this.element.value}"`;
  }

  /** @return {string|void} */
  selected() {
    if (typeof this.element.selected === 'boolean' &&
        this.element.selected === true) {
      return 'selected';
    }
    return;
  }

  /** @return {string|void} */
  indeterminate() {
    if (typeof this.element.indeterminate === 'boolean' &&
        this.element.indeterminate === true) {
      return 'indeterminate';
    }
    return;
  }

  /** @return {string|void} */
  accept() {
    if (!this.element.accept) return;
    return `accept="${this.element.accept}"`;
  }

  /** @return {string|void} */
  max() {
    if (!this.element.max) return;
    return `max="${this.element.max}"`;
  }

  /** @return {string|void} */
  min() {
    if (!this.element.min) return;
    return `min="${this.element.min}"`;
  }

  /** @return {string|void} */
  capture() {
    if (typeof this.element.capture === 'boolean' &&
        this.element.capture === true) {
      return 'capture';
    }
    return;
  }

  /** @return {void} */
  files() {
    // no implemented not sure which is this attr is used in FileInput
    return;
  }

  /** @return {string|void} */
  multiple() {
    if (typeof this.element.multiple === 'boolean' &&
        this.element.multiple === true) {
      return 'multiple';
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
}

module.exports = AttributeBuilder;
