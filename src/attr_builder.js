/** @module AttibuteBuilder */

/**
 * @typedef {object} Label
 * @property {Array.<string>} htmlAttrs
 * @property {string} for
 * @property {[]} class
 * @property {string} id
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

  /**
   * @return {string|void}
   */
  for() {
    console.log(this.element);
    if (!this.element.for) return;

    return `for="${this.element.for}"`;
  }

  /**
   * @return {string|void}
   */
  class() {
    if (!this.element.class) return;

    return `class="${this.element.class.join(' ')}"`;
  }

  /**
   * @return {string|void}
   */
  id() {
    if (!this.element.id) return;

    return `class="${this.element.id}"`;
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

    const htmlAttributes = this.element.htmlAttrs.map(
        (attrName) => {
          if (typeof self[attrName] !== 'function') {
            throw new Error(
                `cannot build attribute method '${attrName}' not found`
            );
          }

          return self[attrName]();
        }
    ).filter((found) => found);

    return htmlAttributes;
  }
}

module.exports = AttributeBuilder;
