export class BinarySearchTreeNode {

  public value: number;
  public right: BinarySearchTreeNode | null;
  public left: BinarySearchTreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
