//luke grube
//2/4/14
//infix to postfix calculator
var TEST = true;

function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
	
	if(TEST){
		print ("This stack is empty")
	}
}

function push(element) {
	this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top-1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

//userinput and seperation of input
function postfixCalc(userinput) {
	this();
	pop1 = 0;
	pop2 = 0;
	var operand = '+';
	stack() Stack = userinput;

}

//math function for postfix
function evaluate(int pop1, int pop2, char operand) {
	
	var result = 0;
	
	for (int i = 0; i < Stack.length; i++) {
		if (operand == ('/')) {
			if(TEST) {
				print("This is a division sign");
				print(pop2);
				print(pop1);
				print(operand);
			} //end of if test
			print(pop2);
			print(pop1);
			print(operand);
			result = pop2 / pop1;
			result.push();
		} // end of division math
		else if (operand == ('*')) {
			if(TEST) {
				print("This is a multiplication sign");
				print(pop2);
				print(pop1);
				print(operand);
			} //end of if test
			print(pop2);
			print(pop1);
			print(operand);
			result = pop2 * pop1;
			result.push();
		} // end of multiplication math
		else if (operand == ('-')) {
			if(TEST) {
				print("This is a subtraction sign");
				print(pop2);
				print(pop1);
				print(operand);
			} // end of it test
			print(pop2);
			print(pop1);
			print(operand);
			result = pop2 - pop1;
			result.push();
		} // end of subtraction
		else if (operand == ('+')) {
			if(TEST) {
				print("This is a addition sign");
				print(pop2);
				print(pop1);
				print(operand);
			}//end of if test
			print(pop2);
			print(pop1);
			print(operand);
			result = pop2 + pop1
			result.push();
		}// end of addition math
	} //end of for loop
} //end of evalutate

function seperate(userinput) {
	var string = userinput;
	var nwst = string.split();
	var
	for (int i =0; i<string; i++) {
		if(i >= '0' && i <= '9')
			pop
	}
}