/**
 * FatArrow Function to return the name and age of an employee
 * @param name - string
 * @param age - number
 */
let personDetails = (name: string, age: number) => {return 'The Person Name is ' + name + ' who is ' + age + ' years old.'};

// Calling the Person Details and storing into a result Variable 
let result = personDetails('Arvind', 44);

// Result will be printed in the Console
console.log(result);