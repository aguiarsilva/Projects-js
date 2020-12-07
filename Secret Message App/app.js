let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();
secretMessage.push('to', 'Program');
secretMessage[6] = 'right';
secretMessage.shift();
secretMessage.unshift('Program');
secretMessage.splice(5, 6, 'know');
console.log(secretMessage.join(' '));
