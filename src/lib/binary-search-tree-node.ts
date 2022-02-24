/**
 * Create binary search tree node
 */
export class BinarySearchTreeNode {
  /**
   * Node value
   */
  public value: number;

  /**
   * Right node
   */
  public right: BinarySearchTreeNode | null;
  /**
   * Left node
   */
  public left: BinarySearchTreeNode | null;

  /**
   * Create tree node
   * @param {number} value - Node value
   */
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
