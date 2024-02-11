// Datatypes - There are two types of datatypes Primitive and Non-Primitives
// Primitives - Number , String, BigInt , Boolean , undefined, Null etc.
// Non-Prmitives - Object

// How to conversion the datatypes in JS - Datatypes Conversion

// 1. let Check into Number

// let value = "33";
// let value = "33aab";
// let value = true
// let value = "";


// // Before Conversion
// console.log(value);
// console.log(typeof value);

// // After Conversion
// let numberConversion = Number(value)
// console.log(typeof numberConversion);
// console.log(numberConversion);

// left side Before => Right side After Conversion
// String => to Number - "33"(string) => 33 (Number type) - 33 Output
// Mix String and Number -  "33afb"(string) => NaN(Number type) - Not a Number Output
// Undefined -> undefined (undefined) => NaN (Number type)
// Null -> Null (Object) -> 0 (Number type) - 0 output
// Boolean -> true (Boolean) -> 1 (Number type) - 1 Output , false (Boolean) -> 0 (Number type) - 0 Output
// Blank String -> "" (string) => 0 (Number type)


// 2. Let check in Boolean

// let value = true;
// let value = 1;
// let value = "hitesh";
// let value = "";
// let value = undefined
// let value = null
// let value = NaN

// Before Conversion
// console.log(value);
// console.log(typeof value);

// After Conversion
// let booleanConversion = Boolean(value)
// console.log(typeof booleanConversion);
// console.log(booleanConversion);

// left side Before => Right side After Conversion
// Boolean = True (Boolean) => True (Boolean type), false (Boolean) -> false (Boolean type)
// Number = 1 (Number) => true (Boolean type), // Number = 0 (Number) => False (Boolean type)
// String = Hitesh (String) => true (Boolean Type)
// Blank String = ""(string) => false (Boolean type)
// Undefined = undefined => false(Boolean type)
// null = null (object) => false (Boolean type)
// NaN = NaN (Number) => False (Boolean type)


// 3. Let check into string


// let value = "33";
// let value = 33;
// let value = false;
// let value = undefined;
// let value = null;
// let value = NaN;



// Before Conversion
console.log(value);
console.log(typeof value);

// After Conversion
let stringConversion = String(value)
console.log(typeof stringConversion);
console.log(stringConversion);

// left side Before => Right side After Conversion
// String -> "33" (String) => 33 (String type)
// Number -> 33 (Number) => 33 (String type)
// Boolean -> true (Boolean) => true (String type), Boolean -> false (Boolean) => false (String type)
// Undefined -> Undefined (Undefined) => undefined (String type)
// Null -> Null (Object) => Null (String type)
// NaN -> NaN (Number) => NaN (String type)

