
exports.count = (arr) => {
  var length = 0;
  arr.map( () => {
    length++
  })

  return length;
};

exports.isEmpty = (arr) => {
  if (module.exports.count(arr) == 0)
    return true;
  else
    return false;
}

exports.head = (arr) => {
  if(!module.exports.isEmpty(arr))
    return arr[0];
  else
    return null;
}

exports.tail = (arr) => {
  if(!module.exports.isEmpty(arr)){
    return arr.slice(1, module.exports.count(arr));
  }
  else
    return null;
}

exports.flatten = (arr) => {
  var res = arr.reduce( (prev, curr) => {
    // var newarr = prev_value.slice();
    // newarr.concat(curr);
    var temp = curr;
    if(curr.constructor == Array) {
      // console.log(`curr=${curr} is an array`)
      temp = module.exports.flatten(temp);
    }
    return prev.concat(temp);
  }, [] )

  // console.log(res);
  return res;
}
