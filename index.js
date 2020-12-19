function getName(node){
  return node["name"];
}

function headNode(linkedList, collection){
  return collection[linkedList];
}

function next(node, collection){
  return collection[node["next"]];
}

function nodeAt(index, linkedList, collection){
  let node = collection[linkedList];
  for (let i=0; i<index; i++){
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection){
  if (index === 0){
    return linkedList;
  }
  let node = nodeAt(index-1, linkedList, collection);
  return node["next"];
}

// function indexAt(node, collection, linkedList){
//   let i = 0;
//   let flag = false;
//   while (flag === false){
//     if (nodeAt(i, linkedList, collection) === node){
//       flag = true;
//     }
//   }
//   return i;
// }

function insertNodeAt(index, next, linkedList, collection){
  let prevNode = nodeAt(index-1, linkedList, collection);
  prevNode.next = next;
  let afterNode = nodeAt(index+1, linkedList, collection);
  collection[n]
}