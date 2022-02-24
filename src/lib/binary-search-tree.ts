import {BinarySearchTreeNode} from './binary-search-tree-node';
import {diff, getSpacing, valueWithSpacing} from './helper';

/**
 * Creates a binary search tree
 */
export class BinarySearchTree {
  /**
   * Root node of the tree
   * @type {BinarySearchTreeNode}
   * @private
   */
  private readonly rootNode: BinarySearchTreeNode;

  /**
   * Node counter
   */
  private nodeCount: number = 1;

  /**
   * Create tree with root node
   * @param value {number} - Root node value
   */
  constructor(value: number) {
    this.rootNode = new BinarySearchTreeNode(value);
  }

  /**
   * Get the size of the tree
   * @return {number} - Returns the node count in the tree
   */
  public size(): number {
    return this.nodeCount;
  }

  /**
   * Get the smallest number in the tree
   * @return {number} - Returns the smallest number in the tree
   */
  public min(): number {
    let currentNode = this.rootNode;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode.value;
  }

  /**
   * Get the biggest number in the tree
   * @return {number} - Returns the biggest number in the tree
   */
  public max(): number {
    let currentNode = this.rootNode;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  /**
   * Validate the presence of a given value in the tree
   * @param value {number} - Value to validate in the tree
   * @return {boolean} - Returns if the value is present in the tree
   */
  public contains(value: number): boolean {
    let currentNode = this.rootNode;

    while (value !== currentNode.value) {
      if (value < currentNode.value && currentNode.left) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value && currentNode.right) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }

    return currentNode.value === value;
  }

  /**
   * Get the max depth of the tree
   * @return {number} - Returns the max depth of the tree
   */
  public depth(): number {
    const getDepth = (node: BinarySearchTreeNode, depth: number): number => {
      let maxDepth = depth;

      if (node.right) {
        const maxDepthRight = getDepth(node.right, depth + 1);
        if (maxDepthRight > maxDepth) {
          maxDepth = maxDepthRight;
        }
      }

      if (node.left) {
        const maxDepthLeft = getDepth(node.left, depth + 1);
        if (maxDepthLeft > maxDepth) {
          maxDepth = maxDepthLeft;
        }
      }
      return maxDepth;
    };

    return getDepth(this.rootNode, 1);
  }

  /**
   * Insert a new value into the tree
   * @param {number} value - Value to insert into the tree
   * @return {boolean} - Returns if the value was inserted
   */
  public insert(value: number): boolean {
    const newNode = new BinarySearchTreeNode(value);
    const parentNode = this.findClosestNode(value);
    let isNew = true;

    if (parentNode.value > value) {
      parentNode.left = newNode;
      this.nodeCount++;
    } else if (parentNode.value < value) {
      parentNode.right = newNode;
      this.nodeCount++;
    } else {
      isNew = false;
    }

    return isNew;
  }

  /**
   * Get the values of the tree at a depth
   * @param height {number} - Depth of which the values should be returned
   * @return {array<(number|string)>} - return the values at the given depth
   */
  public valuesAtDepth(height: number) {
    const res: (string | number)[] = [];
    const getValuesAtDepth = (
      node: BinarySearchTreeNode | null | undefined,
      currentHeight: number,
    ) => {
      if (currentHeight === height) {
        const value = node ? node.value : '-';
        res.push(value);
        return;
      }

      const nextDepth = currentHeight + 1;
      getValuesAtDepth(node?.left, nextDepth);
      getValuesAtDepth(node?.right, nextDepth);
    };

    getValuesAtDepth(this.rootNode, 0);
    return res;
  }

  /**
   * Get the tree as a 2d Array
   * @description - Each depth will be represented as an array. If a node does not have a child node it will be replaced with '='
   * @return {array<(string|number)>}
   */
  btsTo2DArray(): (string | number)[][] {
    const size = this.depth() - 1;
    const res: (string | number)[][] = [];

    for (let i = 0; i < size; i++) {
      res.push(this.valuesAtDepth(i));
    }

    return res;
  }

  /**
   * Get the tree as a string
   * @description - Turns the output of the 2D array into a concatenated string
   * @return {string} - Returns the tree as a string
   */
  toString() {
    const btsAs2DArr = this.btsTo2DArray();
    const valueMaxChars = this.max().toString().length;
    const valueSpacing = Math.ceil(valueMaxChars / 2);
    const maxWidth =
      btsAs2DArr.at(-1)!.length * valueMaxChars +
      btsAs2DArr.at(-1)!.length * (2 * valueSpacing);

    let treeAsString = '';

    btsAs2DArr.forEach((row, i) => {
      const totalPaddingWidth =
        maxWidth -
        (row.length * valueMaxChars + row.length * (valueSpacing * 2));

      const paddingOneSide = Math.floor(totalPaddingWidth / 2);

      let currentLine = getSpacing(paddingOneSide);

      row.forEach((nodeValue, j) => {
        const valuePaddingString = getSpacing(valueSpacing);
        const newValueWithPadding = `${valuePaddingString}${valueWithSpacing(
          nodeValue,
          valueMaxChars,
        )}${valuePaddingString}`;

        currentLine += newValueWithPadding;
      });

      treeAsString += `\n${currentLine}\n`;
    });

    return treeAsString;
  }

  /**
   * Get the value with the least difference to the given value
   * @param {number} value - Value to search for
   * @return {number} - Closest value to the provided number
   */
  public findClosestValueNode(value: number): BinarySearchTreeNode {
    let node = this.rootNode;
    const searchNode = (node: BinarySearchTreeNode): BinarySearchTreeNode => {
      const currentDiff = diff(node.value, value);
      const currentDiffLeft = node.left ? diff(node.left.value, value) : null;
      const currentDiffRight = node.right
        ? diff(node.right.value, value)
        : null;

      if (currentDiff === 0) {
        return node;
      }

      if (currentDiffLeft && currentDiffLeft < currentDiff) {
        if (node.left) {
          return searchNode(node.left);
        } else {
          return node;
        }
      } else if (currentDiffRight && currentDiffRight < currentDiff) {
        if (node.right) {
          return searchNode(node.right);
        } else {
          return node;
        }
      } else {
        return node;
      }
    };

    return searchNode(node);
  }

  /**
   * Get the closest node to a given value
   * @param value {number}
   * @return {BinarySearchTreeNode} - Closest node to the provided value. If inserted the value would be added as the child.
   */
  public findClosestNode(value: number): BinarySearchTreeNode {
    const searchNode = (node: BinarySearchTreeNode): BinarySearchTreeNode => {
      if (node.value > value) {
        if (node.left) {
          return searchNode(node.left);
        } else {
          return node;
        }
      } else if (node.value < value) {
        if (node.right) {
          return searchNode(node.right);
        } else {
          return node;
        }
      } else {
        return node;
      }
    };

    return searchNode(this.rootNode);
  }
}
