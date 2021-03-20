'use strict';

/**
 * building steps
 */
class Steps {
  /**
   * @property {object|null} head
   */
  constructor() {
    /** @var LinkedListNode */
    this.head = null;
    this.tail = null;
  }

  /**
   * @param {unknown} step
   * @return {Steps}
   */
  add(step) {
    const node = new Step(step);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }
}

/**
 * step
 */
class Step {
  /**
   * @param {unknown} value
   * @param {unknown} next
   */
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = Steps;
