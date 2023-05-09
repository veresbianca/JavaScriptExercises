//1
const getUniqueObj = function (startArray) {
  const uniqueIdsArray = [];

  const result = startArray.filter((obj) => {
    if (!uniqueIdsArray.includes(obj.id)) {
      uniqueIdsArray.push(obj.id);
      return true;
    }
  });

  return result;
};

//2
const checkIfPalindrom = function (str) {
  return str === str.split("").reverse().join("");
};

//3
const getProduct = function (numberArray) {
  const sortedArray = numberArray.sort(function (a, b) {
    return b - a;
  });

  const result = sortedArray.reduce(function (prod, elem, index) {
    if (index <= 2) {
      prod = prod * elem;
    }
    return prod;
  }, 1);

  return result;
};

//4
const findPairs = function (arr, targetSum) {
  let pairs = [];
  let seen = [];

  arr.forEach((element) => {
    let complement = targetSum - element;

    if (seen.includes(complement)) {
      let pair = [element, complement].sort();
      pairs.push(pair);
    }
    seen.push(element);
  });

  return pairs;
};

//5
const getArrayOfKeys = function (obj) {
  return Object.keys(obj).reduce(function (array, elem) {
    if (typeof obj[elem] === "object") {
      array.push(elem);
    }
    return array;
  }, []);
};

//6
const getUniqueElements = function (a1, a2) {
  return a1.reduce(function (array, elem) {
    if (a2.includes(elem) && !array.includes(elem)) array.push(elem);
    return array;
  }, []);
};

//7
const reverseCharsInWords = function (message) {
  if (message) {
    const words = message.split(" ");
    return words.map((word) => word.split("").reverse().join("")).join(" ");
  }
};

//8
function findCombinations(arr, targetSum) {
  let combinations = [];

  function generateCombos(currentCombo, currentIndex, remainingSum) {
    if (currentCombo.length === 3) {
      if (remainingSum === 0) {
        combinations.push(currentCombo);
      }
      return;
    }

    for (let i = currentIndex; i < arr.length; i++) {
      generateCombos([...currentCombo, arr[i]], i + 1, remainingSum - arr[i]);
    }
  }

  generateCombos([], 0, targetSum);

  return combinations;
}

//9
const editString = function (input) {
  if (input) {
    const characters = input.split("");

    const reducedChars = characters.reduce(function (array, char) {
      if (!array.includes(char)) {
        array.push(char);
      }
      return array;
    }, []);

    return reducedChars.join("");
  }
  return null;
};

//10
const convertObjProps = function (obj) {
  if (typeof obj === "object") {
    let newObj = {};

    for (const prop in obj) {
      let key = prop;
      let val = obj[prop].toString();
      newObj[key] = val;
    }

    return newObj;
  }
  return null;
};

export {
  getUniqueObj,
  checkIfPalindrom,
  getProduct,
  getArrayOfKeys,
  getUniqueElements,
  reverseCharsInWords,
  convertObjProps,
  editString,
  findPairs,
  findCombinations,
};
