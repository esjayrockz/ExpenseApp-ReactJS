const add = (a, b) => a+b;

const getGreeting = (name = 'Anonymous') => `Hello. My name is ${name}!`;

test('should add two numbers',()=>{
  const result = add(3, 4);
  expect(result).toBe(7); //toEqual instead of toBe for Objects/arrays
});

test('get proper greeting',()=>{
  const result = getGreeting('Mike');
  expect(result).toBe('Hello. My name is Mike!')
});

test('get proper greeting - default', ()=>{
  const result = getGreeting();
  expect(result).toBe('Hello. My name is Anonymous!')
});
