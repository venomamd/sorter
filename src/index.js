class Sorter { 
  constructor() { 
  // your implementation 
    this.arr = [];  
    this.compareFunction = (a, b) => a-b; 
    this.isCompareFuction = false;
  } 
  
  add(element) { 
  // your implementation 
    this.arr.push(element); 
  } 
  
  at(index) { 
  // your implementation 
    return this.arr[index]; 
  } 
  
  get length() { 
  // your implementation 
    return this.arr.length; 
  } 
  
  toArray() { 
  // your implementation 
    return this.arr; 
  } 
  
  sort(indices) { 
  // your implementation
    let newArr = []; 
    let indicesLength = indices.length; 
   
    indices.sort((a, b) => a-b); 
  
    for(let i = 0; i < indicesLength; i++) { 
    newArr.push(this.arr[indices[i]]); 
    } 
  
    if(!this.isCompareFuction){ 
 
      newArr.sort((a, b) => a-b); 
    } 
    else{ 
      newArr.sort(this.compareFunction); 
    } 

    let length = newArr.length;

    for(let i = 0; i < length; i++){ 
      this.arr[indices[i]] = newArr[i]; 
    } 
  } 
  
  setComparator(compareFunction) { 
    // your implementation 
    this.isCompareFuction = true;
    this.compareFunction = compareFunction; 
  } 

} 
  

  module.exports = Sorter;
  
  