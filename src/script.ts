interface treeType {
  value: number;
  child: treeType | null;
}

function createTree(depth: number): treeType {
  if (depth === 1) {
    return {
      value: 1,
      child: null,
    };
  }
  return {
    value: depth,
    child: createTree(depth - 1),
  };
}

const tree = createTree(3);
console.log(tree);
