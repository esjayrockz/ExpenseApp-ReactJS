const add = (a, b) => a+b;

const getGreeting = (name) => `Hello. My name is ${name}!`;

test('should add two numbers',()=>{
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('get proper greeting',()=>{
  const result = getGreeting('Mike');
  expect(result).toBe('Hello. My name is Mike!')
})
