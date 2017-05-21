var Stack = require('../datastructures/stack');

function palindrome(word) {
	var s = new Stack();
	for(var i = 0; i < word.length; i++)
		s.push(word[i]);
	var newWord = "";
	while(!s.empty())
		newWord += s.pop();
	return newWord == word;
}

module.exports = palindrome;
