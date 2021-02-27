/**
 * @typedef  {object} Attributes
 * @property {string} id    - input[id]
 * @property {[]}     class - input[class]
 * @property {string} name  - input[name]
 * @property {boolean} required - input[required]
 */

/**
 * html input type text
 */
class TextInput {
  /**
   *
   * @param {string} n - name
   * @param {string} v - value
   * @param {Attributes} a - attributes
   */
  constructor(n, v, a) {
    this.name = n;
    this.value = v;
    this.attributes = a;
  }

  /**
   * @param {string} attr
   * @return {string}
   */
  render(attr) {
    return `<input type="text" ${attr} value="${this.value}">`;
  }
}

module.exports = TextInput;
