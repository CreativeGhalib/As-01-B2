// Ans-1:
const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((value: number) => value % 2 === 0);
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Ans-2:
const reverseString = (input: string): string => {
  return input.split('').reverse().join('');
};

reverseString('typescript');

// Ans-3:
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): 'String' | 'Number' => {
  if (typeof value === 'string') {
    return 'String';
  }
  return 'Number';
};

checkType('Hello');
checkType(42);

// Ans-4:
const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const user = { id: 1, name: 'John Doe', age: 21 };
getProperty(user, 'name');

// Ans-5:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  return { ...book, isRead: true };
};

const myBook = { title: 'TypeScript Guide', author: 'Jane Doe', publishedYear: 2024 };

toggleReadStatus(myBook);

// Ans-6:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student('Alice', 20, 'A');
student.getDetails();

// Ans-7:
const getIntersection = <T>(arr1: T[], arr2: T[]): T[] => {
  const targetSet = new Set(arr2);
  return arr1.filter(element => targetSet.has(element));
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

getIntersection(array1, array2);
