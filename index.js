// Code your solutions in this file
function writeCards(names, eventName) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
  const names = ['Alice', 'Bob', 'Carol'];
  const eventName = 'birthday';
  
  const cards = writeCards(names, eventName);
  console.log(cards);
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  countDown(11);