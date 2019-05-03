export default class SpriteSymbol {
  constructor({ id, viewBox, width, height, content }) {
    this.id = id;
    this.viewBox = viewBox;
    this.width = width;
    this.height = height;
    this.content = content;
  }

  /**
   * @return {string}
   */
  stringify() {
    return this.content;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.stringify();
  }

  destroy() {
    ['id', 'viewBox', 'width', 'height', 'content'].forEach(prop => delete this[prop]);
  }
}
