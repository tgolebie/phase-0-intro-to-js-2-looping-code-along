function writeCards(names, occasion) {
    const messages = names.map(name => `Thank you, ${name}, for the wonderful ${occasion} gift!`);
    return messages;
  }
  
  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  module.exports = {
    writeCards,
    countDown