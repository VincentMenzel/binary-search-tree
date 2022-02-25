import {BinarySearchTree} from '../src';
describe('Binary Search Tree', () => {
  it('should initialise', function () {
    const bts = new BinarySearchTree(0);

    expect(bts.min()).toEqual(0);
    expect(bts.max()).toEqual(0);
    expect(bts.contains(0)).toBeTruthy();
    expect(bts.size()).toEqual(1);
    expect(bts.findClosestValueNode(0).value).toEqual(0);
    expect(bts.findClosestValueNode(10).value).toEqual(0);
  });

  it('should add new numbers', function () {
    const bts = new BinarySearchTree(0);

    expect(bts.insert(1)).toBeTruthy();
    expect(bts.size()).toEqual(2);
  });

  it('should not add duplicate numbers', function () {
    const bts = new BinarySearchTree(0);

    expect(bts.insert(0)).toBeFalsy();
    expect(bts.size()).toEqual(1);
  });

  it('should find new numbers', function () {
    const bts = new BinarySearchTree(10);

    bts.insert(0);
    bts.insert(20);
    bts.insert(25);

    expect(bts.min()).toEqual(0);
    expect(bts.max()).toEqual(25);
    expect(bts.size()).toEqual(4);

    expect(bts.findClosestValueNode(-5).value).toEqual(0);
    expect(bts.findClosestValueNode(4).value).toEqual(0);
    expect(bts.findClosestValueNode(6).value).toEqual(10);
    expect(bts.findClosestValueNode(14).value).toEqual(10);
    expect(bts.findClosestValueNode(16).value).toEqual(20);
    expect(bts.findClosestValueNode(99).value).toEqual(25);
  });

  it('should calculate depth', function () {
    const bts = new BinarySearchTree(100);

    for (let i = 20; i > 0; i--) {
      bts.insert(i);
    }
    expect(bts.depth()).toEqual(21);
  });

  it('should find values at depth', function () {
    const bts = new BinarySearchTree(10);

    bts.insert(5);
    bts.insert(15);

    bts.insert(4);
    bts.insert(6);
    bts.insert(14);
    bts.insert(16);

    const depth0 = bts.valuesAtDepth(0);
    const depth1 = bts.valuesAtDepth(1);
    const depth2 = bts.valuesAtDepth(2);

    expect(depth0[0]).toEqual(10);

    expect(depth1[0]).toEqual(5);
    expect(depth1[1]).toEqual(15);

    expect(depth2[0]).toEqual(4);
    expect(depth2[1]).toEqual(6);
    expect(depth2[2]).toEqual(14);
    expect(depth2[3]).toEqual(16);
  });

  it('should find closest node', function () {
    const bts = new BinarySearchTree(10);

    const values = [1, 4, 6, 8, 23, 99, 50, 303, 33, 25];

    values.forEach((v) => bts.insert(v));

    expect(bts.findClosestNode(34).value).toEqual(33);
    expect(bts.findClosestNode(7).value).toEqual(8);
    expect(bts.findClosestNode(2).value).toEqual(4);
    expect(bts.findClosestNode(5).value).toEqual(6);
    expect(bts.findClosestNode(304).value).toEqual(303);
    expect(bts.findClosestNode(302).value).toEqual(303);
    expect(bts.findClosestNode(11).value).toEqual(23);
  });

  it('should be correct', function () {
    // Create a new binary search tree
    const binarySearchTree = new BinarySearchTree(10);

    // Insert new numbers
    expect(binarySearchTree.insert(15)).toBeTruthy(); // -> true
    expect(binarySearchTree.insert(13)).toBeTruthy(); // -> true
    expect(binarySearchTree.insert(10)).toBeFalsy(); // -> false

    // Check if BST contains a value
    expect(binarySearchTree.contains(12)).toBeFalsy(); // -> false
    expect(binarySearchTree.contains(10)).toBeTruthy(); // -> true

    // Find min and max of the BST
    expect(binarySearchTree.min()).toEqual(10); // -> 10
    expect(binarySearchTree.max()).toEqual(15); // -> 15

    // Find closest node to a value
    expect(binarySearchTree.findClosestNode(17).value).toEqual(15); // -> BTSNode with value 15
    expect(binarySearchTree.findClosestValueNode(14).value).toEqual(15); // -> BTSNode with value 15

    // Find the max depth of the
    expect(binarySearchTree.depth()).toEqual(3); // -> 2

    const depth0 = binarySearchTree.valuesAtDepth(0);
    expect(depth0[0]).toEqual(10); // -> [10]

    const depth1 = binarySearchTree.valuesAtDepth(1);
    expect(depth1[0]).toEqual('-'); // -> ['-', 15]
    expect(depth1[1]).toEqual(15); // -> ['-', 15]

    const depth2 = binarySearchTree.valuesAtDepth(2);
    expect(depth2[0]).toEqual('-'); // -> ['-', '-', 13, '-']
    expect(depth2[1]).toEqual('-'); // -> ['-', '-', 13, '-']
    expect(depth2[2]).toEqual(13); // -> ['-', '-', 13, '-']
    expect(depth2[3]).toEqual('-'); // -> ['-', '-', 13, '-']

    // Count of nodes in the BST
    expect(binarySearchTree.size()).toEqual(3);
  });

  it('should copy tree', () => {
    const binarySearchTree = new BinarySearchTree(10);
    binarySearchTree.insert(12);
    binarySearchTree.insert(14);
    binarySearchTree.insert(9);

    const copy = binarySearchTree.copy();
    expect(binarySearchTree.toString()).not.toEqual(copy);
    expect(binarySearchTree.toString()).toEqual(copy.toString());
  });

  it('should compare tree', function () {
    const binarySearchTree1 = new BinarySearchTree(10);
    const binarySearchTree2 = new BinarySearchTree(10);
    const binarySearchTree3 = new BinarySearchTree(10);
    const binarySearchTree4 = new BinarySearchTree(10);
    const binarySearchTree5 = new BinarySearchTree(10);

    binarySearchTree1.insert(5);
    binarySearchTree2.insert(5);
    binarySearchTree3.insert(10);
    binarySearchTree4.insert(10);
    binarySearchTree5.insert(6);

    binarySearchTree1.insert(6);
    binarySearchTree2.insert(6);
    binarySearchTree3.insert(15);
    binarySearchTree4.insert(15);
    binarySearchTree5.insert(5);

    binarySearchTree1.insert(15);
    binarySearchTree2.insert(15);
    binarySearchTree3.insert(6);
    binarySearchTree4.insert(6);
    binarySearchTree5.insert(15);

    expect(binarySearchTree1.isEuqal(binarySearchTree2)).toBeTruthy();
    expect(binarySearchTree3.isEuqal(binarySearchTree4)).toBeTruthy();

    expect(binarySearchTree2.isEuqal(binarySearchTree1)).toBeTruthy();
    expect(binarySearchTree4.isEuqal(binarySearchTree3)).toBeTruthy();

    expect(binarySearchTree1.isEuqal(binarySearchTree3)).toBeFalsy();
    expect(binarySearchTree1.isEuqal(binarySearchTree4)).toBeFalsy();
    expect(binarySearchTree3.isEuqal(binarySearchTree1)).toBeFalsy();
    expect(binarySearchTree4.isEuqal(binarySearchTree1)).toBeFalsy();

    expect(binarySearchTree2.isEuqal(binarySearchTree3)).toBeFalsy();
    expect(binarySearchTree2.isEuqal(binarySearchTree4)).toBeFalsy();
    expect(binarySearchTree3.isEuqal(binarySearchTree2)).toBeFalsy();
    expect(binarySearchTree4.isEuqal(binarySearchTree2)).toBeFalsy();

    expect(binarySearchTree1.isEuqal(binarySearchTree5)).toBeFalsy();
    expect(binarySearchTree2.isEuqal(binarySearchTree5)).toBeFalsy();
    expect(binarySearchTree3.isEuqal(binarySearchTree5)).toBeFalsy();
    expect(binarySearchTree4.isEuqal(binarySearchTree5)).toBeFalsy();

    expect(binarySearchTree5.isEuqal(binarySearchTree1)).toBeFalsy();
    expect(binarySearchTree5.isEuqal(binarySearchTree2)).toBeFalsy();
    expect(binarySearchTree5.isEuqal(binarySearchTree3)).toBeFalsy();
    expect(binarySearchTree5.isEuqal(binarySearchTree4)).toBeFalsy();
  });
});
