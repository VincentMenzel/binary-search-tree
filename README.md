#Binary Search Tree for Typescript

## Installing

```shell
npm install --save binary-search-tree-ts
```

## Usage

This binary-search-tree-ts package includes the implementation for a Binary Search Tree with insert, contains, min, nax as well as a few more helper functions.

```typescript
import {BinarySearchTree} from 'binary-search-tree-ts';

// Create a new binary search tree
const binarySearchTree = new BinarySearchTree(10);

// Insert new numbers
binarySearchTree.insert(15); // -> true
binarySearchTree.insert(13); // -> true
binarySearchTree.insert(10); // -> false

// Check if BST contains a value
binarySearchTree.contains(12) // -> false
binarySearchTree.contains(10) // -> true

// Find min and max of the BST
binarySearchTree.min(); // -> 10
binarySearchTree.max(); // -> 15

// Find closest node to a value
binarySearchTree.findClosestNode(17); // -> BTSNode with value 15
binarySearchTree.findClosestValueNode(14); // -> BTSNode with value 15

// Find the max depth of the 
binarySearchTree.depth(); // -> 2
binarySearchTree.valuesAtDepth(0); // -> [10]
binarySearchTree.valuesAtDepth(1); // -> ['-', 15]
binarySearchTree.valuesAtDepth(2); // -> ['-', '-', 13, '-']

// Count of nodes in the BST
binarySearchTree.size(); // -> 3

// Printing a tree for debugging
console.log(binarySearchTree.toString()) // ->
//        10
//
//       -   15
//
//   -   -   13  -


```

##License
(MIT License)
Copyright (c) Vincent Menzel

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
