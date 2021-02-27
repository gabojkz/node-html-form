/**
 * @typedef  {object} Attributes
 * @property {string} id    - input[id]
 * @property {[]}     class - input[class]
 * @property {string} name  - input[name]
 * @property {boolean} required - input[required]
 */

/**
  * html checkbox input
  */
class CheckboxInput {
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
   *
   * @param {string} attr
   */
  render(attr) {
    return `<input type="checkbox" ${attr} value="${this.value}">`;
  }
}

module.exports = CheckboxInput;
