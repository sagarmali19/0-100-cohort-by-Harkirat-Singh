// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);

  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);

  let values = Object.values(obj);
  console.log("After Object.values():", values);

  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);

  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);

  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);


}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);

// Original Object: { key1: 'value1', key2: 'value2', key3: 'value3' }
// After Object.keys(): [ 'key1', 'key2', 'key3' ]
// After Object.values(): [ 'value1', 'value2', 'value3' ]
// After Object.entries(): [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]
// After hasOwnProperty(): false
// After Object.assign(): {
//   key1: 'value1',
//   key2: 'value2',
//   key3: 'value3',
//   newProperty: 'newValue'
// }
