// // Copyright 2011 David Galles, University of San Francisco. All rights reserved.
// //
// // Redistribution and use in source and binary forms, with or without modification, are
// // permitted provided that the following conditions are met:
// //
// // 1. Redistributions of source code must retain the above copyright notice, this list of
// // conditions and the following disclaimer.
// //
// // 2. Redistributions in binary form must reproduce the above copyright notice, this list
// // of conditions and the following disclaimer in the documentation and/or other materials
// // provided with the distribution.
// //
// // THIS SOFTWARE IS PROVIDED BY David Galles ``AS IS'' AND ANY EXPRESS OR IMPLIED
// // WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// // FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// // CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// // CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// // SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// // ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// // NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// // ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// // The views and conclusions contained in the software and documentation are those of the
// // authors and should not be interpreted as representing official policies, either expressed
// // or implied, of the University of San Francisco

// HeapOrderedTree.LINK_COLOR = "#007700";
// HeapOrderedTree.HIGHLIGHT_CIRCLE_COLOR = "#007700";
// HeapOrderedTree.FOREGROUND_COLOR = "#007700";
// HeapOrderedTree.BACKGROUND_COLOR = "#EEFFEE";
// HeapOrderedTree.PRINT_COLOR = HeapOrderedTree.FOREGROUND_COLOR;

// HeapOrderedTree.WIDTH_DELTA = 50;
// HeapOrderedTree.HEIGHT_DELTA = 50;
// HeapOrderedTree.STARTING_Y = 50;


// HeapOrderedTree.FIRST_PRINT_POS_X = 50;
// HeapOrderedTree.PRINT_VERTICAL_GAP = 20;
// HeapOrderedTree.PRINT_HORIZONTAL_GAP = 50;




// function HeapOrderedTree(am, w, h) {
// 	this.init(am, w, h);
// }

// HeapOrderedTree.prototype = new Algorithm();
// HeapOrderedTree.prototype.constructor = HeapOrderedTree;
// HeapOrderedTree.superclass = Algorithm.prototype;

// HeapOrderedTree.prototype.init = function (am, w, h) {
// 	// Call the unit function of our "superclass", which adds a couple of
// 	// listeners, and sets up the undo stack
// 	HeapOrderedTree.superclass.init.call(this, am, w, h);

// 	this.addControls();

// 	// Useful for memory management
// 	this.nextIndex = 0;

// 	// TODO:  Add any code necessary to set up your own algorithm.  Initialize data
// 	// structures, etc.

// 	// main code here
// 	this.commands = [];
// 	this.cmd("CreateLabel", 0, "", 20, 10, 0);
// 	this.nextIndex = 1;
// 	this.animationManager.StartNewAnimation(this.commands);
// 	this.animationManager.skipForward();
// 	this.animationManager.clearHistory();

// }

// HeapOrderedTree.prototype.addControls = function () {
// 	this.controls = [];

// 	this.insertField = addControlToAlgorithmBar("Text", "");
// 	this.insertField.onkeydown = this.returnSubmit(this.insertField, this.insertCallback.bind(this), 4, true);
// 	// this.controls.push(this.insertField);
// 	this.insertButton = addControlToAlgorithmBar("Button", "Insert");
// 	this.insertButton.onclick = this.insertCallback.bind(this);
// 	// this.controls.push(this.insertButton);
// 	this.removeSmallestButton = addControlToAlgorithmBar("Button", "Remove Smallest");
// 	this.removeSmallestButton.onclick = this.removeSmallestCallback.bind(this);
// 	// this.controls.push(this.removeSmallestButton);
// 	this.clearHeapButton = addControlToAlgorithmBar("Button", "Clear Heap");
// 	this.clearHeapButton.onclick = this.clearCallback.bind(this);
// 	// this.controls.push(this.clearHeapButton);
// }

// HeapOrderedTree.prototype.reset = function () {
// 	// Reset all of your data structures to *exactly* the state they have immediately after the init
// 	// function is called.  This method is called whenever an "undo" is performed.  Your data
// 	// structures are completely cleaned, and then all of the actions *up to but not including* the
// 	// last action are then redone.  If you implement all of your actions through the "implementAction"
// 	// method below, then all of this work is done for you in the Animation "superclass"

// 	// Reset the (very simple) memory manager
// 	this.nextIndex = 0;

// }

// HeapOrderedTree.prototype.insertCallback = function (event) {
// 	var insertedValue;

// 	insertedValue = this.normalizeNumber(this.insertField.value, 4);
// 	if (insertedValue != "") {
// 		this.insertField.value = "";
// 		this.implementAction(this.insertElement.bind(this), insertedValue);
// 	}
// }

// HeapOrderedTree.prototype.removeSmallestCallback = function (event) {
// 	this.implementAction(this.removeSmallest.bind(this), "");
// }

// HeapOrderedTree.prototype.clearCallback = function (event) {
// 	this.commands = new Array();
// 	this.implementAction(this.clear.bind(this), "");
// }

// //////////////////////////////////////////////
// // Callbacks:
// //////////////////////////////////////////////

// HeapOrderedTree.prototype.insertElement = function (insertedValue) {
// 	this.commands = new Array();
// 	this.cmd("SetText", 0, "Inserting " + insertedValue);
// 	this.highlightID = this.nextIndex++;

// 	if (this.treeRoot == null) {
// 		this.cmd("CreateCircle", this.nextIndex, insertedValue, this.startingX, HeapOrderedTree.STARTING_Y);
// 		this.cmd("SetForegroundColor", this.nextIndex, HeapOrderedTree.FOREGROUND_COLOR);
// 		this.cmd("SetBackgroundColor", this.nextIndex, HeapOrderedTree.BACKGROUND_COLOR);
// 		this.cmd("Step");
// 		this.treeRoot = new HoTNode(insertedValue, this.nextIndex, this.startingX, HeapOrderedTree.STARTING_Y)
// 		this.nextIndex += 1;

// 	}
// 	else {
// 		this.cmd("CreateCircle", this.nextIndex, insertedValue, 100, 100);
// 		this.cmd("SetForegroundColor", this.nextIndex, HeapOrderedTree.FOREGROUND_COLOR);
// 		this.cmd("SetBackgroundColor", this.nextIndex, HeapOrderedTree.BACKGROUND_COLOR);
// 		this.cmd("Step");
// 		var insertElem = new HoTNode(insertedValue, this.nextIndex, 100, 100)

// 		this.nextIndex += 1;
// 		this.cmd("SetHighlight", insertElem.graphicID, 1);
// 		this.insert(insertElem, this.treeRoot);
// 		this.resizeTree();
// 	}
// 	this.cmd("SetText", 0, "");
// 	return this.commands;
// }


// HeapOrderedTree.prototype.insert = function (elem, tree) {

// 	// heap-ordered tree main algo here

// 	this.cmd("SetHighlight", tree.graphicID, 1);
// 	this.cmd("SetHighlight", elem.graphicID, 1);

// 	if (elem.data < tree.data) {
// 		this.cmd("SetText", 0, elem.data + " < " + tree.data + ".  Looking at left subtree");
// 	}
// 	else {
// 		this.cmd("SetText", 0, elem.data + " >= " + tree.data + ".  Looking at right subtree");
// 	}
// 	this.cmd("Step");
// 	this.cmd("SetHighlight", tree.graphicID, 0);
// 	this.cmd("SetHighlight", elem.graphicID, 0);

// 	if (elem.data < tree.data) {
// 		if (tree.left == null) {
// 			this.cmd("SetText", 0, "Found null tree, inserting element");

// 			this.cmd("SetHighlight", elem.graphicID, 0);
// 			tree.left = elem;
// 			elem.parent = tree;
// 			this.cmd("Connect", tree.graphicID, elem.graphicID, HeapOrderedTree.LINK_COLOR);
// 		}
// 		else {
// 			this.cmd("CreateHighlightCircle", this.highlightID, HeapOrderedTree.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
// 			this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
// 			this.cmd("Step");
// 			this.cmd("Delete", this.highlightID);
// 			this.insert(elem, tree.left);
// 		}
// 	}
// 	else {
// 		if (tree.right == null) {
// 			this.cmd("SetText", 0, "Found null tree, inserting element");
// 			this.cmd("SetHighlight", elem.graphicID, 0);
// 			tree.right = elem;
// 			elem.parent = tree;
// 			this.cmd("Connect", tree.graphicID, elem.graphicID, HeapOrderedTree.LINK_COLOR);
// 			elem.x = tree.x + HeapOrderedTree.WIDTH_DELTA / 2;
// 			elem.y = tree.y + HeapOrderedTree.HEIGHT_DELTA
// 			this.cmd("Move", elem.graphicID, elem.x, elem.y);
// 		}
// 		else {
// 			this.cmd("CreateHighlightCircle", this.highlightID, HeapOrderedTree.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
// 			this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
// 			this.cmd("Step");
// 			this.cmd("Delete", this.highlightID);
// 			this.insert(elem, tree.right);
// 		}
// 	}
// }

// HeapOrderedTree.prototype.resizeTree = function () {
// 	var startingPoint = this.startingX;
// 	this.resizeWidths(this.treeRoot);
// 	if (this.treeRoot != null) {
// 		if (this.treeRoot.leftWidth > startingPoint) {
// 			startingPoint = this.treeRoot.leftWidth;
// 		}
// 		else if (this.treeRoot.rightWidth > startingPoint) {
// 			startingPoint = Math.max(this.treeRoot.leftWidth, 2 * startingPoint - this.treeRoot.rightWidth);
// 		}
// 		this.setNewPositions(this.treeRoot, startingPoint, HeapOrderedTree.STARTING_Y, 0);
// 		this.animateNewPositions(this.treeRoot);
// 		this.cmd("Step");
// 	}
// }

// HeapOrderedTree.prototype.setNewPositions = function (tree, xPosition, yPosition, side) {
// 	if (tree != null) {
// 		tree.y = yPosition;
// 		if (side == -1) {
// 			xPosition = xPosition - tree.rightWidth;
// 		}
// 		else if (side == 1) {
// 			xPosition = xPosition + tree.leftWidth;
// 		}
// 		tree.x = xPosition;
// 		this.setNewPositions(tree.left, xPosition, yPosition + HeapOrderedTree.HEIGHT_DELTA, -1)
// 		this.setNewPositions(tree.right, xPosition, yPosition + HeapOrderedTree.HEIGHT_DELTA, 1)
// 	}
// }
// HeapOrderedTree.prototype.animateNewPositions = function (tree) {
// 	if (tree != null) {
// 		this.cmd("Move", tree.graphicID, tree.x, tree.y);
// 		this.animateNewPositions(tree.left);
// 		this.animateNewPositions(tree.right);
// 	}
// }

// HeapOrderedTree.prototype.resizeWidths = function (tree) {
// 	if (tree == null) {
// 		return 0;
// 	}
// 	tree.leftWidth = Math.max(this.resizeWidths(tree.left), HeapOrderedTree.WIDTH_DELTA / 2);
// 	tree.rightWidth = Math.max(this.resizeWidths(tree.right), HeapOrderedTree.WIDTH_DELTA / 2);
// 	return tree.leftWidth + tree.rightWidth;
// }


// function HoTNode(val, id, initialX, initialY) {
// 	this.data = val;
// 	this.x = initialX;
// 	this.y = initialY;
// 	this.graphicID = id;
// 	this.left = null;
// 	this.right = null;
// 	this.parent = null;
// }


// // Called by our superclass when we get an animation started event -- need to wait for the
// // event to finish before we start doing anything
// HeapOrderedTree.prototype.disableUI = function (event) {
// 	for (var i = 0; i < this.controls.length; i++) {
// 		this.controls[i].disabled = true;
// 	}
// }

// // Called by our superclass when we get an animation completed event -- we can
// /// now interact again.
// HeapOrderedTree.prototype.enableUI = function (event) {
// 	for (var i = 0; i < this.controls.length; i++) {
// 		this.controls[i].disabled = false;
// 	}
// }


// var currentAlg;

// function init() {
// 	var animManag = initCanvas();
// 	currentAlg = new HeapOrderedTree(animManag, canvas.width, canvas.height);
// }















































// // -------------------------------------------------------------------------------------------------

// // Add any necessary controls for your algorithm.
// 	//   There are libraries that help with text entry, buttons, check boxes, radio groups
// 	//
// 	// To add a button myButton:
// 	//	   this.mybytton = addControlToAlgorithmBar("Button", "MyButtonText");
// 	//     this.mybytton.onclick = this.myCallback.bind(this);
// 	//     this.controls.push(this.mybutton);
// 	//   where myCallback is a method on this function that implemnts the callback
// 	//
// 	// To add a text field myField:
// 	//    this.myField = addControlToAlgorithmBar("Text", "");
// 	//    this.myField.onkeydown = this.returnSubmit(this.myField,  
// 	//                                               this.anotherCallback.bind(this), // callback to make when return is pressed
// 	//                                               maxFieldLen,                     // integer, max number of characters allowed in field
// 	//                                               intOnly);                        // boolean, true of only digits can be entered.
// 	//    this.controls.push(this.myField);
// 	//
// 	// To add a textbox:
// 	//   	this.myCheckbox = addCheckboxToAlgorithmBar("Checkbox Label");
// 	//      this.myCheckbox.onclick = this.checkboxCallback.bind(this);
// 	//      this.controls.push(myCheckbox);
// 	//
// 	// To add a radio button group:
// 	//	  this.radioButtonList = addRadioButtonGroupToAlgorithmBar(["radio button label 1", 
// 	//                                                              "radio button label 2", 
// 	//                                                              "radio button label 3"], 
// 	//                                                              "MyButtonGroupName");
// 	//    this.radioButtonList[0].onclick = this.firstRadioButtonCallback.bind(this);
// 	//    this.controls.push(this.radioButtonList[0]);
// 	//    this.radioButtonList[1].onclick = this.secondRadioButtonCallback.bind(this);
// 	//    this.controls.push(this.radioButtonList[1]);
// 	//    this.radioButtonList[2].onclick = this.thirdRadioButtonCallback.bind(this);
// 	//    this.controls.push(this.radioButtonList[1]);
// 	//
// 	// Note that we are adding the controls to the controls array so that they can be enabled / disabled
// 	// by the animation manager (see enableUI / disableUI below)



// 	// CALLBACKS...

// //   All of your callbacks should *not* do any work directly, but instead should go through the
// //   implement action command.  That way, undos are handled by ths system "behind the scenes"
// //
// //   A typical example:
// //
// // HeapOrderedTree.prototype.insertCallback = function(event)
// // {
// // 	// Get value to insert from textfield (created in addControls above)
// // 	var insertedValue = this.insertField.value;

// //  // If you want numbers to all have leading zeroes, you can add them like this:
// // 	insertedValue = this.normalizeNumber(insertedValue, 4);

// //  // Only do insertion if the text field is not empty ...
// // 	if (insertedValue != "")
// // 	{
// // 		// Clear text field after operation
// // 		this.insertField.value = "";
// //      // Do the actual work.  The function implementAction is defined in the algorithm superclass
// // 		this.implementAction(this.insertElement.bind(this), insertedValue);
// // 	}
// // }
// //  Note that implementAction takes as parameters a function and an argument, and then calls that
// //  function using that argument (while also storing the function/argument pair for future undos)

// //////////////////////////////////////////////
// // Doing actual work
// //////////////////////////////////////////////
// //   The functions that are called by implementAction (like insertElement in the comments above) need to:
// //
// //      1. Create an array of strings that represent commands to give to the animation manager
// //      2. Return this array of commands
// //
// //    We strongly recommend that you use the this.cmd function, which is a handy utility function that
// //    appends commands onto the instance variable this.commands
// //
// //    A simple example:

// // HeapOrderedTree.simpleAction(input)
// // {
// // 	this.commands = [];  // Empty out our commands variable, so it isn't corrupted by previous actions

// // 	// Get a new memory ID for the circle that we are going to create
// // 	var circleID = nextIndex++;
// // 	var circleX = 50;
// // 	var circleY = 50;

// // 	// Create a circle
// // 	this.cmd("CreateCircle", circleID, "Label", circleX, circleY);
// // 	circleX = 100;
// // 	// Move the circle
// // 	this.cmd("Move", circleID, circleX, circleY);
// // 	// First Animation step done
// // 	this.cmd("Step");
// // 	circleX = 50;
// // 	circleY = 100;
// // 	// Move the circle again
// // 	this.cmd("Move", circleID, circleX, circleY);
// // 	// Next Animation step done
// // 	this.cmd("Step");
// // 	// Return the commands that were generated by the "cmd" calls:
// // 	return this.commands;
// // }


// Copyright 2011 David Galles, University of San Francisco. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
// conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
// of conditions and the following disclaimer in the documentation and/or other materials
// provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY David Galles ``AS IS'' AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
// FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> OR
// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
// ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// The views and conclusions contained in the software and documentation are those of the
// authors and should not be interpreted as representing official policies, either expressed
// or implied, of the University of San Francisco


// Constants.

HeapOrderedTree.LINK_COLOR = "#007700";
HeapOrderedTree.HIGHLIGHT_CIRCLE_COLOR = "#007700";
HeapOrderedTree.FOREGROUND_COLOR = "#007700";
HeapOrderedTree.BACKGROUND_COLOR = "#EEFFEE";
HeapOrderedTree.PRINT_COLOR = HeapOrderedTree.FOREGROUND_COLOR;

HeapOrderedTree.WIDTH_DELTA = 50;
HeapOrderedTree.HEIGHT_DELTA = 50;
HeapOrderedTree.STARTING_Y = 50;


HeapOrderedTree.FIRST_PRINT_POS_X = 50;
HeapOrderedTree.PRINT_VERTICAL_GAP = 20;
HeapOrderedTree.PRINT_HORIZONTAL_GAP = 50;



function HeapOrderedTree(am, w, h) {
	this.init(am, w, h);
}

HeapOrderedTree.prototype = new Algorithm();
HeapOrderedTree.prototype.constructor = HeapOrderedTree;
HeapOrderedTree.superclass = Algorithm.prototype;

HeapOrderedTree.prototype.init = function (am, w, h) {
	var sc = HeapOrderedTree.superclass;
	this.startingX = w / 2;
	this.first_print_pos_y = h - 2 * HeapOrderedTree.PRINT_VERTICAL_GAP;
	this.print_max = w - 10;

	var fn = sc.init;
	fn.call(this, am);
	this.addControls();
	this.nextIndex = 0;
	this.commands = [];
	this.cmd("CreateLabel", 0, "", 20, 10, 0);
	this.nextIndex = 1;
	this.animationManager.StartNewAnimation(this.commands);
	this.animationManager.skipForward();
	this.animationManager.clearHistory();

}

HeapOrderedTree.prototype.addControls = function () {
	this.insertField = addControlToAlgorithmBar("Text", "");
	this.insertField.onkeydown = this.returnSubmit(this.insertField, this.insertCallback.bind(this), 4);
	this.insertButton = addControlToAlgorithmBar("Button", "Insert");
	this.insertButton.onclick = this.insertCallback.bind(this);
	this.removeSmallestButton = addControlToAlgorithmBar("Button", "Delete");
	this.removeSmallestButton.onclick = this.deleteCallback.bind(this);
}

HeapOrderedTree.prototype.reset = function () {
	this.nextIndex = 1;
	this.treeRoot = null;
}

HeapOrderedTree.prototype.insertCallback = function (event) {
	var insertedValue = this.insertField.value;
	// Get text value
	insertedValue = this.normalizeNumber(insertedValue, 4);
	if (insertedValue != "") {
		// set text value
		this.insertField.value = "";
		this.implementAction(this.insertElement.bind(this), insertedValue);
	}
}

HeapOrderedTree.prototype.deleteCallback = function (event) {
	var deletedValue = this.deleteField.value;
	if (deletedValue != "") {
		deletedValue = this.normalizeNumber(deletedValue, 4);
		this.deleteField.value = "";
		this.implementAction(this.deleteElement.bind(this), deletedValue);
	}
}


HeapOrderedTree.prototype.insertElement = function (insertedValue) {
	this.commands = new Array();
	this.cmd("SetText", 0, "Inserting " + insertedValue);
	this.highlightID = this.nextIndex++;

	if (this.treeRoot == null) {
		this.cmd("CreateCircle", this.nextIndex, insertedValue, this.startingX, HeapOrderedTree.STARTING_Y);
		this.cmd("SetForegroundColor", this.nextIndex, HeapOrderedTree.FOREGROUND_COLOR);
		this.cmd("SetBackgroundColor", this.nextIndex, HeapOrderedTree.BACKGROUND_COLOR);
		this.cmd("Step");
		this.treeRoot = new HoTNode(insertedValue, this.nextIndex, this.startingX, HeapOrderedTree.STARTING_Y)
		this.nextIndex += 1;
	}
	else {
		this.cmd("CreateCircle", this.nextIndex, insertedValue, 100, 100);
		this.cmd("SetForegroundColor", this.nextIndex, HeapOrderedTree.FOREGROUND_COLOR);
		this.cmd("SetBackgroundColor", this.nextIndex, HeapOrderedTree.BACKGROUND_COLOR);
		this.cmd("Step");
		var insertElem = new HoTNode(insertedValue, this.nextIndex, 100, 100)


		this.nextIndex += 1;
		this.cmd("SetHighlight", insertElem.graphicID, 1);
		this.insert(insertElem, this.treeRoot)
		this.resizeTree();
	}
	this.cmd("SetText", 0, "");
	return this.commands;
}


HeapOrderedTree.prototype.insert = function (elem, tree) {

	/*

	if elem >= tree data,...go randomly to left or right

	else move current to left or right of elem...and shift current down...elem takes currents place

	*/

	this.cmd("SetHighlight", tree.graphicID, 1);
	this.cmd("SetHighlight", elem.graphicID, 1);

	if (elem.data >= tree.data) {
		this.cmd("SetText", 0, elem.data + " >= " + tree.data + ".  Moving to child of current node.");
	}
	this.cmd("Step");
	this.cmd("SetHighlight", tree.graphicID, 0);
	this.cmd("SetHighlight", elem.graphicID, 0);

	if (elem.data >= tree.data) {
		if (tree.left == null) {
			this.cmd("SetText", 0, "Found null left-subtree, inserting element");

			this.cmd("SetHighlight", elem.graphicID, 0);
			tree.left = elem;
			elem.parent = tree;
			this.cmd("Connect", tree.graphicID, elem.graphicID, HeapOrderedTree.LINK_COLOR);
		} else if (tree.right == null) {
			this.cmd("SetText", 0, "Found null right-subtree, inserting element");

			this.cmd("SetHighlight", elem.graphicID, 0);
			tree.right = elem;
			elem.parent = tree;
			this.cmd("Connect", tree.graphicID, elem.graphicID, HeapOrderedTree.LINK_COLOR);
			elem.x = tree.x + HeapOrderedTree.WIDTH_DELTA / 2;
			elem.y = tree.y + HeapOrderedTree.HEIGHT_DELTA
			this.cmd("Move", elem.graphicID, elem.x, elem.y);
		} else {
			var r = getRandom();
			if ((r & 1) == 0) { // go left
				console.log("%d --LEFT-- %d", r, elem.data);
				this.cmd("SetText", 0, "Travelling down left");
				this.cmd("CreateHighlightCircle", this.highlightID, HeapOrderedTree.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
				this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
				this.insert(elem, tree.left);
			}
			else { //go right
				console.log("%d --RIGHT-- %d", r, elem.data);
				this.cmd("SetText", 0, "Travelling down right");
				this.cmd("CreateHighlightCircle", this.highlightID, HeapOrderedTree.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
				this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
				this.cmd("Step");
				this.cmd("Delete", this.highlightID);
				this.insert(elem, tree.right);
			}
		}
	} else {

		// replace tree with elem
		// data, x, y, graphicID, left, right, parent

		this.cmd("SetText", 0, "Replacing current node with new node");

		elem.parent = tree.parent;
		elem.x = tree.x;
		elem.y = tree.y;

		if (tree != this.treeRoot) {

			this.cmd("Disconnect", tree.parent.graphicID, tree.graphicID, HeapOrderedTree.LINK_COLOR);
			this.cmd("Step");
			this.refactor(tree); // moving subtree down;

			this.cmd("Connect", elem.parent.graphicID, elem.graphicID, HeapOrderedTree.LINK_COLOR);
			this.cmd("Move", elem.graphicID, elem.x - 100, elem.y);
			this.cmd("Step");

			this.cmd("Connect", elem.graphicID, tree.graphicID, HeapOrderedTree.LINK_COLOR);
			this.cmd("Step");

			this.resizeTree();

		} else {

		}





	}

	// if (elem.data < tree.data) {
	// 	if (tree.left == null) {
	// 		this.cmd("SetText", 0, "Found null tree, inserting element");

	// 		this.cmd("SetHighlight", elem.graphicID, 0);
	// 		tree.left = elem;
	// 		elem.parent = tree;
	// 		this.cmd("Connect", tree.graphicID, elem.graphicID, HeapOrderedTree.LINK_COLOR);
	// 	}
	// 	else {
	// 		this.cmd("CreateHighlightCircle", this.highlightID, HeapOrderedTree.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
	// 		this.cmd("Move", this.highlightID, tree.left.x, tree.left.y);
	// 		this.cmd("Step");
	// 		this.cmd("Delete", this.highlightID);
	// 		this.insert(elem, tree.left);
	// 	}
	// }
	// else {
	// 	if (tree.right == null) {
	// 		this.cmd("SetText", 0, "Found null tree, inserting element");
	// 		this.cmd("SetHighlight", elem.graphicID, 0);
	// 		tree.right = elem;
	// 		elem.parent = tree;
	// 		this.cmd("Connect", tree.graphicID, elem.graphicID, HeapOrderedTree.LINK_COLOR);
	// 		elem.x = tree.x + HeapOrderedTree.WIDTH_DELTA / 2;
	// 		elem.y = tree.y + HeapOrderedTree.HEIGHT_DELTA
	// 		this.cmd("Move", elem.graphicID, elem.x, elem.y);
	// 	}
	// 	else {
	// 		this.cmd("CreateHighlightCircle", this.highlightID, HeapOrderedTree.HIGHLIGHT_CIRCLE_COLOR, tree.x, tree.y);
	// 		this.cmd("Move", this.highlightID, tree.right.x, tree.right.y);
	// 		this.cmd("Step");
	// 		this.cmd("Delete", this.highlightID);
	// 		this.insert(elem, tree.right);
	// 	}
	// }
}

HeapOrderedTree.prototype.refactor = function (tree) {
	if (tree != null) {
		this.refactor(tree.left);
		this.refactor(tree.right);
		tree.y += 100;
		this.cmd("Move", tree.graphicID, tree.x, tree.y);
		this.cmd("Step");
	}
}

HeapOrderedTree.prototype.resizeTree = function () {
	var startingPoint = this.startingX;
	this.resizeWidths(this.treeRoot);
	if (this.treeRoot != null) {
		if (this.treeRoot.leftWidth > startingPoint) {
			startingPoint = this.treeRoot.leftWidth;
		}
		else if (this.treeRoot.rightWidth > startingPoint) {
			startingPoint = Math.max(this.treeRoot.leftWidth, 2 * startingPoint - this.treeRoot.rightWidth);
		}
		this.setNewPositions(this.treeRoot, startingPoint, HeapOrderedTree.STARTING_Y, 0);
		this.animateNewPositions(this.treeRoot);
		this.cmd("Step");
	}

}

HeapOrderedTree.prototype.setNewPositions = function (tree, xPosition, yPosition, side) {
	if (tree != null) {
		tree.y = yPosition;
		if (side == -1) {
			xPosition = xPosition - tree.rightWidth;
		}
		else if (side == 1) {
			xPosition = xPosition + tree.leftWidth;
		}
		tree.x = xPosition;
		this.setNewPositions(tree.left, xPosition, yPosition + HeapOrderedTree.HEIGHT_DELTA, -1)
		this.setNewPositions(tree.right, xPosition, yPosition + HeapOrderedTree.HEIGHT_DELTA, 1)
	}

}
HeapOrderedTree.prototype.animateNewPositions = function (tree) {
	if (tree != null) {
		this.cmd("Move", tree.graphicID, tree.x, tree.y);
		this.animateNewPositions(tree.left);
		this.animateNewPositions(tree.right);
	}
}

HeapOrderedTree.prototype.resizeWidths = function (tree) {
	if (tree == null) {
		return 0;
	}
	tree.leftWidth = Math.max(this.resizeWidths(tree.left), HeapOrderedTree.WIDTH_DELTA / 2);
	tree.rightWidth = Math.max(this.resizeWidths(tree.right), HeapOrderedTree.WIDTH_DELTA / 2);
	return tree.leftWidth + tree.rightWidth;
}

function getRandom(min, max) {
	return Math.floor(Math.random() * 10);
	// min = Math.ceil(min);
	// max = Math.floor(max);
	// return Math.floor(Math.random() * (max - min + 1) + min); // The maximum IS inclusive and the minimum is inclusive
}




function HoTNode(val, id, initialX, initialY) {
	this.data = val;
	this.x = initialX;
	this.y = initialY;
	this.graphicID = id;
	this.left = null;
	this.right = null;
	this.parent = null;
}

HeapOrderedTree.prototype.disableUI = function (event) {
	this.insertField.disabled = true;
	this.insertButton.disabled = true;
	this.removeSmallestButton.disabled = true;
	this.removeSmallestButton.disabled = true;
}

HeapOrderedTree.prototype.enableUI = function (event) {
	this.insertField.disabled = false;
	this.insertButton.disabled = false;
	this.removeSmallestButton.disabled = false;
	this.removeSmallestButton.disabled = false;
}


var currentAlg;

function init() {
	var animManag = initCanvas();
	currentAlg = new HeapOrderedTree(animManag, canvas.width, canvas.height);

}