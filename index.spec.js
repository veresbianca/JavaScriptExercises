import {
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
} from "./index";

describe("js exercices", () => {
  describe("getUniqueObj", () => {
    it("should return an array of objects that have unique property values", () => {
      const mockStartArray = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 1, name: "Charlie" },
        { id: 3, name: "David" },
        { id: 2, name: "Eve" },
      ];

      const mockExpected = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "David" },
      ];

      const result = getUniqueObj(mockStartArray);

      expect(result).toEqual(mockExpected);
    });
  });

  describe("checkIfPalindrom", () => {
    it("should return true if a string is palindrom", () => {
      const result = checkIfPalindrom("racecar");

      expect(result).toBe(true);
    });
    it("should return false if a string is not palindrom", () => {
      const result = checkIfPalindrom("hel22lo");

      expect(result).toBe(false);
    });
  });

  describe("getProduct", () => {
    it("should return the largest product that can be made by multiplying any three numbers", () => {
      const mockStartArray = [1, 2, 5, 4, 3];

      const result = getProduct(mockStartArray);

      expect(result).toBe(60);
    });
  });

  describe("getArrayOfKeys", () => {
    it("should return an array of all the property names (keys) that have values that are also objects", () => {
      const mockObj = {
        a: {
          b: 1,
        },
        c: 2,
        d: {
          e: { f: 3 },
        },
      };

      const mockExpected = ["a", "d"];

      const result = getArrayOfKeys(mockObj);

      expect(result).toEqual(mockExpected);
    });

    it("should return empty array if all properties names are different then objects", () => {
      const mockObj = {
        a: 1,
        c: 2,
        d: 3,
      };

      const mockExpected = [];

      const result = getArrayOfKeys(mockObj);

      expect(result).toEqual(mockExpected);
    });
  });

  describe("getUniqueElements", () => {
    it("should return an array with intersection between 2 arrays", () => {
      const mockFirstArray = [1, 2, 3, 2, 6];

      const mockSecondArray = [2, 3, 6];

      const result = getUniqueElements(mockFirstArray, mockSecondArray);

      const mockExpected = [2, 3, 6];

      expect(result).toEqual(mockExpected);
    });

    it("should return an empty array if one of thow parameters is an empty array", () => {
      const mockFirstArray = [1, 2, 3, 2, 6];

      const mockSecondArray = [];

      const result = getUniqueElements(mockFirstArray, mockSecondArray);

      const mockExpected = [];

      expect(result).toEqual(mockExpected);
    });
  });

  describe("reverseCharsInWords", () => {
    it("should return a new string with the letters in each word reversed", () => {
      const mockMessage = "Hello 123 world";

      const mockExpected = "olleH 321 dlrow";

      const result = reverseCharsInWords(mockMessage);

      expect(result).toEqual(mockExpected);
    });

    it("should return undefined if no string as param", () => {
      const mockMessage = "";

      const result = reverseCharsInWords(mockMessage);

      expect(result).toBe(undefined);
    });
  });

  describe("convertObjProps", () => {
    it("should convert obj props in string", () => {
      const mockObj = {
        a: 1,
        b: function () {},
        c: true,
        d: {
          e: 24,
          f: true,
        },
      };

      const result = convertObjProps(mockObj);

      Object.keys(result).forEach((key) => expect(typeof key).toBe("string"));
      Object.values(result).forEach((value) =>
        expect(typeof value).toBe("string")
      );
    });

    it("should return null if prop is not an obj", () => {
      const mockObj = "Hello world";

      const result = convertObjProps(mockObj);

      expect(result).toEqual(null);
    });
  });

  describe("editString", () => {
    it("should return string with 1 occurence from each character", () => {
      const mockInput = "Hello world";

      const mockExpected = "Helo wrd";

      const result = editString(mockInput);

      expect(result).toEqual(mockExpected);
    });

    it("should return null if prop is an empty string", () => {
      const mockInput = "";

      const result = editString(mockInput);

      expect(result).toEqual(null);
    });
  });

  describe("findPairs", () => {
    it("should return pairs of numbers with the sum provided", () => {
      const result = findPairs([1, 14, 6, 10, 5, 9], 15);

      const mockExpected = [
        [1, 14],
        [10, 5],
        [6, 9],
      ];

      expect(result).toEqual(mockExpected);
    });

    it("should return empty array", () => {
      const result = findPairs([1, 2, 3, 4, 5], 15);

      expect(result).toEqual([]);
    });
  });

  describe("findCombinations", () => {
    it("should return pairs of numbers with the sum provided", () => {
      const result = findCombinations([0, 1, 2, 3, 4, 5], 6);

      const mockExpected = [
        [0, 1, 5],
        [0, 2, 4],
        [1, 2, 3],
      ];

      expect(result).toEqual(mockExpected);
    });

    it("should return empty array", () => {
      const result = findPairs([1, 2, 3, 4, 5], 15);

      expect(result).toEqual([]);
    });
  });
});
