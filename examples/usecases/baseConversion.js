var Stack = require('../datastructures/stack');

function baseConversion(num, base) {
	var s = new Stack();
	while(num) {
		s.push(num % base);
		num = Math.floor(num / base);
	}
	var ans = "";
	while(!s.empty())
		ans += s.pop();
	return ans;
}

module.exports = baseConversion;
