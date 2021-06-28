module.exports = function() {

    this.write = function(x) {
    	console.log(x);
    },

    this.show = function(x) {
    	console.log(x);
    },

    this.print = function(x) {
    	console.log(x);
    },

    this.log = function(x) {
    	console.log(x);
    },

    this.warn = function(x) {
    	console.warn(x);
    },

    this.error = function(x) {
    	console.error(x);
    },

    this.clear = function() {
    	console.clear();
    },

/* 

The Above 5 Functions Are Most Basics Display In Console,

Warn And Error In Console and clear etc

*/

this.bringIn = function(x) {
	require(x);
},

/* 

A Simple Function To Require() modules

*/

this.matHhelp = function() {
	console.log(
		""
	);
},

this.floor = function(x) {
	return Math.floor(x);
},

this.random = function(x) {
	const random = Math.floor(Math.random() * x);
	return random;
},

this.round = function(x) {
	return Math.round(x);
},

this.integer = function(x) {

if (!x) {
var e = new Error("Must Specify A Value Inside The Integer Function Block! \n");
console.error(e + e.lineNumber);
}
else if (isNaN(x)) {
	 console.warn("Value Specified In Integer() isn't a number!")
}

return Number.isInteger(x);

},

this.toInteger = function(x) {
	return parseInt(x);
},

this.isNumber = function(x) {
	if (isNaN(x)) {
		return false;
	} else {
	  return true;
	}
},

this.isString = function(x) {
	if (isNaN(x)) {
		return true;
	} else {
		return false;
	}
},

this.isBool = function(x) {
	if (typeof x == "boolean") {
		return true;
	} else {
		return false;
	}
},

this.type = function(x) {
	return typeof x;
},

this.maxDecimal = function(x, y) {
	return x.toFixed(y);
},

this.exponential = function(x, y) {
	return x.toExponential(y);
},

/*

The above Functions are to Simply The JavaScript Math Functions

These Can Be Used Easily As They Must :)

These also include specific type and other functions too!!

*/

this.randomArray = function(array) {
	const random = Math.floor(Math.random() * array.length);

	return array[random];
	
},

// Random Result From An Array!!!

this.replace = function(x, y, z) {
	var newString =  x.replace(y, z);
	return newString;
},

this.reverse = function(str) {
	return str.split("").reverse().join("");
}

this.comment = function(x) {
	return;
},

this.length = function(x) {
	return x.length;
},

this.index = function(x, y) {

return x.indexOf(y);

},

this.endsBefore = function(x, y) {
	return x.lastIndexOf(y);
},

this.lastIndex = function(x, y) {
	return x.lastIndexOf(y);
}


	
}
