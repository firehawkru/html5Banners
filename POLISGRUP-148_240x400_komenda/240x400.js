(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"240x400_atlas_P_", frames: [[0,0,249,300],[0,606,232,158],[0,461,289,143],[251,0,218,234],[251,236,218,223],[291,461,218,178]]},
		{name:"240x400_atlas_NP_", frames: [[0,0,375,311]]}
];


// symbols:



(lib._300500 = function() {
	this.initialize(ss["240x400_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.g1 = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.leafs = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.wh = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение1 = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение2 = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение3 = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Растровоеизображение3();
	this.instance.parent = this;
	this.instance.setTransform(2,904);

	this.instance_1 = new lib.Растровоеизображение2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,446);

	this.instance_2 = new lib.Растровоеизображение1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-17,222.4,1114.6);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_1 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_2 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaIg6j2QgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_3 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaIg6j2QgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_4 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaIg6j2QgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_5 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_6 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaIg6j2QgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_7 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_8 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_9 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_10 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_11 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_12 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_13 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_14 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_15 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_16 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaIg6j2QgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_17 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaIg6j2QgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgsAEgfAAIgWgBg");
	var mask_graphics_18 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_19 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaIg6j2QgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_20 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_21 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaIg6j2QgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8QimBWhTAsIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");
	var mask_graphics_22 = new cjs.Graphics().p("AwDSkQg2gCgngSQgfgOgggaQgWgTgfgiQj4kKiJlUQhLi3g+kQQhBk3gliaQg3jmgDgQQgeiNgGhsQgDg7AJgpQALg1AgggQAfgdAzgMQAjgIA9gBQEwgJD0ADQEkADEAAWQC3APEDAhIG5A7QIbBFFcgGIAjgBQC8BWCSBXQgHBqhABaQhABbhhApQC5BRCYA3QiDBYhqBmQgWAWgJAbQgJAgAWANQgpAZgVAfQgaAlAVAdQASAZA0AFQCJAPCNgVQB/gUAXA8Ij5CCIF/FSQAOAMAHAIQAKAMABANQAGAkg4AjQkbCxnBBAQiXAWj0ASQlKAZhAAGQjFAUnLBIQmlBBjtASQgtAEgeAAIgWgBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-153.9101,y:101.2676}).wait(1).to({graphics:mask_graphics_1,x:-112.2337,y:98.0371}).wait(1).to({graphics:mask_graphics_2,x:-74.3433,y:95.1002}).wait(1).to({graphics:mask_graphics_3,x:-40.0586,y:92.4427}).wait(1).to({graphics:mask_graphics_4,x:-9.1994,y:90.0507}).wait(1).to({graphics:mask_graphics_5,x:18.4146,y:87.9103}).wait(1).to({graphics:mask_graphics_6,x:42.9637,y:86.0075}).wait(1).to({graphics:mask_graphics_7,x:64.6283,y:84.3282}).wait(1).to({graphics:mask_graphics_8,x:83.5885,y:82.8586}).wait(1).to({graphics:mask_graphics_9,x:100.0247,y:81.5846}).wait(1).to({graphics:mask_graphics_10,x:114.1171,y:80.4922}).wait(1).to({graphics:mask_graphics_11,x:126.0462,y:79.5676}).wait(1).to({graphics:mask_graphics_12,x:135.992,y:78.7966}).wait(1).to({graphics:mask_graphics_13,x:144.135,y:78.1655}).wait(1).to({graphics:mask_graphics_14,x:150.6554,y:77.6601}).wait(1).to({graphics:mask_graphics_15,x:155.7335,y:77.2664}).wait(1).to({graphics:mask_graphics_16,x:159.5496,y:76.9707}).wait(1).to({graphics:mask_graphics_17,x:162.2839,y:76.7587}).wait(1).to({graphics:mask_graphics_18,x:164.1168,y:76.6166}).wait(1).to({graphics:mask_graphics_19,x:165.2286,y:76.5305}).wait(1).to({graphics:mask_graphics_20,x:165.7995,y:76.4862}).wait(1).to({graphics:mask_graphics_21,x:166.0099,y:76.4699}).wait(1).to({graphics:mask_graphics_22,x:166.0399,y:76.4676}).wait(30));

	// Слой_1
	this.instance = new lib.wh();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289,143);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAqIAAhHIgZAAIAAgMIA/AAIAAAMIgZAAIAABHg");
	this.shape.setTransform(173.125,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAqIghgqIAAAqIgOAAIAAhTIAOAAIAAAoIAhgoIAPAAIghAoIAiArg");
	this.shape_1.setTransform(166.625,40.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAqIAAhTIAvAAIAAAMIghAAIAAAWIAfAAIAAALIgfAAIAAAbIAhAAIAAALg");
	this.shape_2.setTransform(159.225,40.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATAqIAAhHIgkAAIAABHIgOAAIAAhTIA/AAIAABTg");
	this.shape_3.setTransform(151.425,40.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAgQgKgLAAgVQAAgMAFgKQAEgKAJgFQAKgFALAAQANAAALAFIgFALIgJgDIgKgBQgLgBgHAJQgHAJABANQgBAPAHAJQAGAHAMABIAKgBIALgEIAAANQgKADgNAAQgSAAgJgLg");
	this.shape_4.setTransform(143.55,40.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAgQgKgLAAgVQAAgUAKgLQAKgLASAAQATAAAKALQAKAMAAATQAAAVgKALQgKALgTAAQgSAAgKgLgAgRgWQgHAIAAAOQAAAQAHAIQAGAIALAAQAMAAAHgIQAGgIAAgQQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_5.setTransform(135.075,40.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbAqIAAhTIAZAAQAOAAAIAGQAIAHAAAMQAAANgJAHQgIAGgPAAIgJAAIAAAggAgNAAIAHAAQAKAAAFgDQAFgFAAgHQAAgIgFgDQgEgEgIABIgKAAg");
	this.shape_6.setTransform(127.125,40.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAqIAAhHIgkAAIAABHIgOAAIAAhTIA/AAIAABTg");
	this.shape_7.setTransform(118.925,40.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA3IAAgsIABgXIAAAAIgrBDIgQAAIAAhTIANAAIAAAqIAAAPIgBAJIABAAIAqhCIAQAAIAABTgAgQgnQgGgFgBgKIAMAAQABAEABACQABABAAABQAAAAABABQAAAAABAAQAAABABAAIAGABQAFAAADgCQADgDABgGIAMAAQgBAKgGAEQgGAFgMAAQgLAAgFgEg");
	this.shape_8.setTransform(106.975,38.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAXAqIAAgrIABgYIAAAAIgrBDIgQAAIAAhTIANAAIAAAqIAAAPIgBAJIABAAIAqhCIAQAAIAABTg");
	this.shape_9.setTransform(97.725,40.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQAqIghgqIAAAqIgOAAIAAhTIAOAAIAAAoIAhgoIAPAAIghAoIAiArg");
	this.shape_10.setTransform(89.825,40.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVAgQgKgLAAgVQAAgMAFgKQAEgKAKgFQAJgFALAAQANAAALAFIgFALIgJgDIgKgBQgLgBgHAJQgGAJgBANQABAPAGAJQAHAHALABIAKgBIAKgEIAAANQgKADgMAAQgRAAgKgLg");
	this.shape_11.setTransform(81.95,40.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAqIAAhHIgZAAIAAgMIA/AAIAAAMIgZAAIAABHg");
	this.shape_12.setTransform(74.775,40.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAqIAAgmIglAAIAAAmIgOAAIAAhTIAOAAIAAAiIAlAAIAAgiIAOAAIAABTg");
	this.shape_13.setTransform(67.025,40.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAYAqIgIgXIggAAIgHAXIgPAAIAfhTIAOAAIAgBTgAAMAHIgHgWIgDgHIgCgHIgDAPIgIAVIAXAAg");
	this.shape_14.setTransform(58.75,40.175);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAcA2IAAgYIg2AAIAAAYIgOAAIAAgjIAHAAQAIgPAFgTQAHgTABgTIAqAAIAABIIALAAIAAAjgAgHgKQgFAQgHANIAjAAIAAg8IgRAAQgBANgFASg");
	this.shape_15.setTransform(50.5,41.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATAqIAAgmIglAAIAAAmIgOAAIAAhTIAOAAIAAAiIAlAAIAAgiIAOAAIAABTg");
	this.shape_16.setTransform(41.925,40.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAqIAAhTIAvAAIAAAMIghAAIAAAWIAfAAIAAALIgfAAIAAAbIAhAAIAAALg");
	this.shape_17.setTransform(34.425,40.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAeAqIAAgqIAAgPIABgMIgaBFIgLAAIgYhFIgBAAIABAcIAAApIgMAAIAAhTIATAAIAXBCIAYhCIATAAIAABTg");
	this.shape_18.setTransform(25.525,40.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAgQgKgLAAgVQAAgUAKgLQAKgLASAAQATAAAKALQAKAMAAATQAAAVgKALQgKALgTAAQgSAAgKgLgAgRgWQgHAIAAAOQAAAQAHAIQAGAIALAAQAMAAAHgIQAGgIAAgQQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_19.setTransform(15.525,40.175);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAQAqIghgqIAAAqIgOAAIAAhTIAOAAIAAAoIAhgoIAPAAIghAoIAiArg");
	this.shape_20.setTransform(7.675,40.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAqIgBgBIgSABIAAgBQgHgFgDgJIgEgNIgBgJQAAgIAEgGQAEgNAHgIQAIgIAIgDIADAAIAQA6IASg6IABAAIALAFQANAKAGARQACADAAAGIAAAHQAAAIgDALIgGALQgCADgDABIgUAAIACgCQAJgGAHgHQAFgIABgKIAAgFQABgKgFgKQgCgFgEgDIgFgCIgEAAIgWBDIgThBQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAgBAAIgBAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgDACgCAFQgEAGgDAHIAAAGQAAAJAFAKQAEAIAJAJIAIAFIABABg");
	this.shape_21.setTransform(-4.6533,41.0649,0.9948,0.9948);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AiDB8IAAj6IA5AAIAABYQAOgCAOAAQAqgBAaAVQAeAUAAApQAAAhgUAVQgfAghHAAQgkAAgZgDgAhLAEIAABPQAHACANAAQAUAAAOgLQAPgMAAgTQAAgVgQgLQgOgJgTAAgABMB8IAAj6IA4AAIAAD6g");
	this.shape_22.setTransform(163.075,17.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhaB/IAAj4QAggFAtAAQA0AAAZAUQAbAWAAAlQAAAlgYAVQgcAbg0AAIgUgBIAABagAghhRIAABLQAHABAMAAQAWAAANgLQANgLAAgTQAAglgsAAQgPAAgIACg");
	this.shape_23.setTransform(137.25,17.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA0B+IAAhLQAAhAAEgpIgBAAQgRAtgZAsIgzBbIhBAAIAAj7IA1AAIAABLQAABEgEAtIACAAQAUgtAYgsIA2hjIA6AAIAAD7g");
	this.shape_24.setTransform(112.85,17.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcB+IAAjLIhEAAIAAgwIDBAAIAAAwIhFAAIAADLg");
	this.shape_25.setTransform(89.825,17.125);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhaB/IAAj4QAfgFAvAAQAzAAAYAUQAbAWAAAlQABAlgYAVQgcAbg0AAIgUgBIAABagAghhRIAABLQAGABANAAQAWAAANgLQANgLAAgTQAAglgrAAQgQAAgIACg");
	this.shape_26.setTransform(69.45,17.025);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AA1B+IgThBIhHAAIgSBBIg7AAIBNj7IBKAAIBOD7gAAaATIgQg1IgMgwIAAAAIgMAwIgPA1IA3AAg");
	this.shape_27.setTransform(45.625,17.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhdB9IAAj3QAbgFAwAAQAwAAAZAOQAeAQAAAiQAAAmgpAPIAAABQAWAGANAOQAOASAAAXQAAAggaAWQgdAWhFAAQgkAAgagDgAgkBVIAWABQAvAAABgkQAAgjgyAAIgUAAgAgkhUIAAA6IATAAQAVAAAMgIQAMgIAAgOQgBgdgngBQgOAAgKACg");
	this.shape_28.setTransform(22.8,17.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAlB+QgEgKgPgtQgHgZgKgLQgLgPgWAAIgLAAIAABqIg4AAIAAj7IA4AAIAABpIAGAAIBEhpIBFAAIhYBwQAoAKASAyQAUA8AJATg");
	this.shape_29.setTransform(0.85,17.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-0.6,195.70000000000002,51.2);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWBDIgRgDIAAiDIAcAAIAAAzIABAAIAIgBIADAAQATAAAKALQAKAKAAAWQAAAVgLAKQgLALgWAAgAgLAxIAHAAQAIAAAEgFQAFgFAAgNIgBgMQgCgFgCgCIgFgEIgHgBIgHAAg");
	this.shape.setTransform(83.9132,37.1529,0.4084,0.4084);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNBDIAAiFIAaAAIAACFg");
	this.shape_1.setTransform(86.4145,37.1223,0.4084,0.4084);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBDIgEgCIAAgOIACAAIAFgBIAFgEQADgEAAgEIACgNIAEhcIBIAAIAACFIgbAAIAAhxIgTAAIgDBIQgBAMgCAHQgCAJgEAFQgEAFgFACQgFADgGAAIgLgBg");
	this.shape_2.setTransform(79.5128,37.1529,0.4084,0.4084);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWBDIgIghIgbAAIgIAhIgcAAIAiiFIAeAAIAjCFgAAKAPIgKgnIgJAnIATAAg");
	this.shape_3.setTransform(75.2452,37.1223,0.4084,0.4084);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNBDIAAhxIgcAAIAAgUIBTAAIAAAUIgdAAIAABxg");
	this.shape_4.setTransform(71.8964,37.1223,0.4084,0.4084);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBEIAAiDIACAAIAOgDIATgBQAKAAAJADQAJADAFAGQAFAEAEALQACAKAAAMQAAAMgCAJQgCAJgGAHQgFAGgIADQgIADgJAAIgCAAIgJgBIgBgBIAAAngAgMALIAIAAQAEAAADgBQADgCACgDIAEgIQABgGAAgJQAAgKgBgFQgCgHgCgCQgCgDgDgCQgDgBgEAAIgIAAg");
	this.shape_5.setTransform(68.4149,37.0917,0.4084,0.4084);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWBDIgIghIgbAAIgIAhIgcAAIAjiFIAeAAIAiCFgAAKAPIgKgnIgJAnIATAAg");
	this.shape_6.setTransform(64.3208,37.1223,0.4084,0.4084);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYBEIgRgDIAAiBIADAAIAOgDIASAAQAVAAALAJQAKAKAAARQAAAJgFAIQgEAHgGADQAJAEAFAHQAHAIAAAPQAAATgMAJQgKALgagBgAgOAyIAIAAQAJAAAGgFQAFgFgBgLQABgMgFgGQgGgFgJAAIgIAAgAgOgMIAGAAQAIAAADgEQAFgFAAgJQAAgJgFgGQgDgEgIAAIgGAAg");
	this.shape_7.setTransform(60.4412,37.1223,0.4084,0.4084);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAKA+QgGgGgDgMIgEgXQgCgHgDgEQgDgDgDAAIgCAAIAAA8IgbAAIAAiFIAbAAIAAA2IACAAQACABADgDQACgFACgGIAFgTQADgMAGgFQAGgHALABIAGAAIAKACIAAAPIgDAAQgGAAgBABQgDACgCAFIgFASQgDALgEAGIgHAFIACABQAEABACADIAEAHIAEAKIAFAXQABAEADACQACACAGAAIADAAIAAAPIgGACIgKAAQgLABgHgHg");
	this.shape_8.setTransform(56.6228,37.1223,0.4084,0.4084);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRBBQgJgDgGgJQgGgIgDgNQgDgOAAgSQAAgRADgOQADgMAGgJQAGgJAJgDQAIgDAJAAQAKAAAIADQAJADAGAJQAGAJADAMQADAOAAARQAAASgDAOQgDANgGAIQgGAJgJADQgHADgLAAQgKAAgHgDgAgFgwQgDADgDAFQgDAHgBAJQgCAIAAAQQAAARACAIIAEAQQADAGADACQAFAEAGgEIAGgIIAEgQQACgJAAgQQAAgPgCgJIgEgQIgGgIIgGgCQgCAAgDACg");
	this.shape_9.setTransform(50.4867,37.1223,0.4084,0.4084);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKA+QgFgGgDgMIgFgXQgCgJgDgCQgCgDgEAAIgBAAIAAA8IgbAAIAAiFIAbAAIAAA2IABAAQACABADgDQACgDACgIIAFgTQAEgMAFgFQAGgHALABIAGAAIAJABIABACIAAAOIgDAAQgFAAgCABQgDACgBAFIgGASQgDALgEAGIgGAFIABABQAEABACADIAFAHIADAKIAGAXQAAAEADACQACACAGAAIACAAIAAAPIgFACIgKAAQgLABgHgHg");
	this.shape_10.setTransform(46.7909,37.1223,0.4084,0.4084);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYBEIgMgDIgCgBIAAgOIAZAAQAEAAAGgCQADgCAEgFQAEgGABgHQABgGABgOIgkAAIAAgTIAkAAQAAgJgCgJQgDgIgDgEQgDgEgCgCQgEgCgGAAIgYAAIAAgOIACgBIAMgCIASgBQAJAAAIACQAJAFAFAHQAGAIADAOQADANAAASQAAAUgDAMQgDAOgGAIQgGAHgIAFQgJACgKAAIgSAAg");
	this.shape_11.setTransform(42.7887,37.1223,0.4084,0.4084);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXB9QgRgHgKgPQgLgPgGgZQgFgaAAglQAAgkAFgaQAFgZALgPQALgQAQgGQAOgGAUAAQAVAAANACQAPACAJADIABABIAAAYIgtAAQgKAAgKAEQgIAEgGALQgHALgEAUQgDASAAAeQAAAcAEAVQAEAUAGALQAHALAJAEQAKAEAMAAIAtAAIAAAYIgCABQgJADgOACQgUACgPAAQgUAAgQgGg");
	this.shape_12.setTransform(76.2968,12.5272,0.4084,0.4084);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAhCAIAAihIhAChIgvAAIAAj/IAuAAIAACeIA/ieIAwAAIAAD/g");
	this.shape_13.setTransform(68.5885,12.5272,0.4084,0.4084);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhRB/IgHgCIgBAAIAAgYIADAAQAGAAAFgDQAGgCADgGQAEgGAEgLQADgMAAgNIAJiwICIAAIAAD+IgwAAIAAjdIgqAAIgICQQAAATgEASQgFAPgHAKQgHAJgJAFQgKAFgMAAQgNAAgGgDg");
	this.shape_14.setTransform(59.8286,12.5987,0.4084,0.4084);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiB8QgQgGgLgQQgLgPgGgaQgGgaAAgjQAAgiAGgaQAGgaALgPQALgPAQgHQAQgHASAAQASAAARAHQAQAHALAPQALAQAGAZQAGAZAAAjQAAAlgGAYQgGAZgLAQQgLAQgQAGQgRAHgSAAQgSAAgQgHgAgMhgQgGAEgGALQgFAMgEAUQgDATAAAeQAAAfADATQAEAUAFAMQAGALAGAEQAMAJANgJQAGgEAGgLQAFgNADgTQAEgSAAggQAAgfgEgSQgDgTgFgNQgGgLgGgEQgGgEgHAAQgGAAgGAEg");
	this.shape_15.setTransform(52.3857,12.5272,0.4084,0.4084);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAeCAIAAjdIg6AAIAADdIgxAAIAAj/ICbAAIAAD/g");
	this.shape_16.setTransform(44.2691,12.5272,0.4084,0.4084);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABLCAIgKiiIgrCDIgqAAIgsiDIgJCiIgvAAIABgDIAOj7IAzAAIA2ClIA4ilIAyAAIAPD+g");
	this.shape_17.setTransform(160.0568,25.9938,0.4084,0.4084);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiB9QgPgHgMgQQgLgPgGgZQgGgaAAgkQAAgiAGgaQAGgaALgPQALgPAQgHQAQgHASAAQASAAARAHQAQAHALAPQALAQAGAZQAGAZAAAjQAAAkgGAaQgGAXgLARQgMAQgPAHQgPAGgUAAQgTAAgPgGgAgMhgQgHAFgFALQgFALgEAUQgDAUAAAdQAAAfADAUQAEAUAFALQAFAKAHAFQAMAJANgJQAHgEAFgLQAFgMADgTQAEgTAAggQAAgegEgTQgDgTgFgMQgFgLgHgFQgGgEgHAAQgGAAgGAEg");
	this.shape_18.setTransform(150.5005,25.9836,0.4084,0.4084);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWB4QgLgLgGgWIgJgvQgDgQgHgHQgGgFgJAAIgEAAIAAB0IgwAAIAAj+IAwAAIAABpIAEAAQAGAAAFgGQAFgGAFgRIAKgjQAHgXAKgLQALgLAVAAIATACIAIACIAAAYIgCAAQgLAAgFAFQgFAEgEAJIgKAkQgGAVgJALQgGAIgIAEIAGADQAFACAGAGQAGAHADAGQADAHADAMIALAuQACAJAFAEQAHAFAKAAIADAAIAAAYIgIADQgHABgNAAQgVAAgLgLg");
	this.shape_19.setTransform(143.3027,25.9836,0.4084,0.4084);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXB9QgQgFgMgQQgKgPgGgaQgFgYAAgnQAAgmAFgYQAGgaAKgOQALgQAPgGQARgGASAAQARAAARACQAQADAIACIACABIAAAYIguAAQgLAAgJAEQgIAFgGAKQgHAMgEATQgEAVAAAbQAAAdAEAVQAFATAHALQAGALAIAEQAKAFANAAIAtAAIAAAYIgBAAQgIADgRACQgNACgVAAQgUAAgQgGg");
	this.shape_20.setTransform(135.9314,25.9836,0.4084,0.4084);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXCAIAAjdIg3AAIAAghICdAAIAAAhIg3AAIAADdg");
	this.shape_21.setTransform(129.387,25.9938,0.4084,0.4084);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAeCAIAAhxIg7AAIAABxIgwAAIAAj+IAwAAIAABtIA7AAIAAhtIAwAAIAAD+g");
	this.shape_22.setTransform(122.0156,25.9938,0.4084,0.4084);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAtCAIgQg/Ig5AAIgPA/IgzAAIBCj+IA5AAIABABIBAD9gAAVAfIgVhaIgVBaIAqAAg");
	this.shape_23.setTransform(113.9806,25.9938,0.4084,0.4084);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABFCbIAAgCIgKgZQgEgPgBgMIhrAAQgCAQgDALQgEAOgGALIAAACIgfAAIAAhYIATAAIAIgPIAGgWQACgLABgTIAHiZICFAAIAADcIAXAAIAABYgAgPAAQAAASgEANQgCALgEAMIgGANIA8AAIAAi+IgmAAg");
	this.shape_24.setTransform(105.6904,27.0964,0.4084,0.4084);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAdCAIAAhxIg6AAIAABxIgwAAIAAj+IAwAAIAABtIA6AAIAAhtIAwAAIAAD+g");
	this.shape_25.setTransform(97.4818,25.9938,0.4084,0.4084);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhDCAIAAj+ICHAAIAAAhIhXAAIAABIIBMAAIAAAgIhMAAIAABTIBXAAIAAAig");
	this.shape_26.setTransform(90.1411,25.9938,0.4084,0.4084);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABKCAIgJiiIgsCDIgqAAIgriDIgKCiIguAAIAPj+IAyAAIA3ClIA3ilIAzAAIAPD+g");
	this.shape_27.setTransform(80.9115,25.9938,0.4084,0.4084);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgiB9QgQgHgLgQQgLgPgGgZQgGgZAAglQAAgjAGgZQAGgaALgPQALgPAQgHQAQgHASAAQATAAAQAHQAQAHALAPQALAPAGAaQAGAZAAAjQAAAlgGAZQgGAZgLAPQgMAQgPAHQgPAGgUAAQgTAAgPgGgAgMhgQgHAFgFALQgFAMgDATQgEATAAAeQAAAgAEATQADATAFAMQAFALAHAEQAMAJANgJQAHgFAFgKQAFgLAEgUQADgUAAgfQAAgdgDgUQgEgUgFgLQgFgLgHgFQgGgEgHAAQgGAAgGAEg");
	this.shape_28.setTransform(71.3349,25.9836,0.4084,0.4084);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAWB4QgLgKgFgXIgKgvQgEgRgGgGQgHgFgIAAIgEAAIAAB0IgwAAIAAj+IAwAAIAABpIAEAAQAGAAAFgGQAGgGAEgRIAKgjQAGgWALgMQALgLAVAAIALABIAIABIAIACIAAAYIgCAAQgLAAgFAFQgGAFgCAIIgLAkQgHAXgIAJQgGAIgJAEIAHADQAGADAFAFQAGAHADAGQAEAHACAMIALAuQACAIAGAFQAGAFALAAIACAAIAAAYIgIADQgIABgLAAQgWAAgLgLg");
	this.shape_29.setTransform(64.1473,25.9836,0.4084,0.4084);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhRDJIAAigIg7AAIAACgIhsAAIAAgBIggllIBfAPIgCgZICYghIgBAbIBdgYIAAABIgcGNgAhEC7IBUAAIAaluIhPAUIgMDIIgTAAgAjsC7IBSAAIAAiSIgSAAIgMioIhRgNgAhEiXIAACzIAGAAIALi3gAisicIABARIAfAFIAACiIA7AAIAAi9IAfgIIABgOgAigAcIAGAAIAAiXIgQgCgAjSCkIAAgWIAYAAIAAAWgAgnCiIAAgdIAbAAIAAAdgAEEBvIgGgaIgYAAIgGAaIgUAAIAahoIAYAAIAbBogAD7BIIgJglIgJAlIASAAgACuBvIAAguIgYAAIAAAuIgUAAIAAhoIAUAAIAAAtIAYAAIAAgtIATAAIAABogAjPBhIAAgjIATAAIAAAjgAgbBaIAAggIAPAAIAAAggAjcAbIAAgiIAiAAIAAAigAgeAOIAAgcIAeAAIAAAcgAh7AIIAAgZIAbAAIAAAZgAjZgpIAAgUIATAAIAAAUgAh0g1IAAgQIAOAAIAAAQgAgUg1IAAgRIAQAAIAAARgAjehhIAAgSIAYAAIAAASgAh2hsIAAgQIAVAAIAAAQgAgWhvIAAgUIAeAAIAAAUg");
	this.shape_30.setTransform(28.075,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,165,40.2);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007BC2").s().p("Ay+M0IAA5nMAl9AAAIAAZng");
	this.shape.setTransform(107.55,67.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-14.4,243,164);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.leafs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,158);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.g1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,300);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._300500();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,375,311);


(lib.Символ1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,199.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F7462").s().p("AhWI2IAAw/ICtgsIhDRrg");
	this.shape.setTransform(-37.3532,-12.9391,0.2889,0.2889);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F36E21").s().p("AgVHfIg/u8ICpAaIAAOig");
	this.shape_1.setTransform(-54.2273,-10.4181,0.2889,0.2889);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E8165F").s().p("Ai2PMIis+YILFBwIAAcogAAHMdIB6AAIAAhzIh6AAgAAUGdIBgAAIAAi6IhgAAgAgxASICxAAIAAi3IixAAgAgklxIBgAAIAAhlIhgAAgAg8qsIB7AAIAAheIh7AAg");
	this.shape_2.setTransform(-62.0071,1.3996,0.2889,0.2889);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005386").s().p("AlhQ9IAA/FILDi0MgCcAh5gAiUOBICMAAIAAibIiMAAgAhNHqIBIAAIAAipIhIAAgAheA+ICbAAIAAiVIibAAgAgnlJIBNAAIAAhVIhNAAgAg0qOICkAAIAAhnIikAAg");
	this.shape_3.setTransform(-29.6168,-1.851,0.2889,0.2889);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC412").s().p("Ak4KDIhMxZIMJisIhMUFgAg/HkICMAAIAAiHIiMAAgAgZCHIBFAAIAAhRIhFAAgAgji0IBqAAIAAhOIhqAAg");
	this.shape_4.setTransform(-45.812,-15.1711,0.2889,0.2889);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005386").s().p("ACYDvIAAl9IkuAAIAAF9IhrAAIAAndIIDAAIAAHdg");
	this.shape_5.setTransform(2.3905,3.2705,0.2889,0.2889);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005386").s().p("AiyCtIAAlZIFlAAIAABbIkAAAIAAD+g");
	this.shape_6.setTransform(0.1007,24.4859,0.2889,0.2889);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005386").s().p("ACXCtIAAkGIi7AAIgcCqQgMA2gjAWQgbAQg0AAIg3AAIAAhSIArAAQArABALhGIAdjCIFtAAIAAFZg");
	this.shape_7.setTransform(34.7446,5.1558,0.2889,0.2889);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005386").s().p("ACFCtIAAkAIjwEAIh6AAIAAlZIBgAAIAAD2IDqj2ICAAAIAAFZg");
	this.shape_8.setTransform(51.7777,5.1558,0.2889,0.2889);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#005386").s().p("AipCXQhFgpAChuQgChsBFgpQAzgfB2AAQB2AAA0AfQBFApgCBsQACBuhFApQg0Aeh2AAQh2AAgzgegAhmhOQgiAVAAA8QAAA7AiATQAbAOBPAAQBIAAAagQQAjgUAAg9QAAg8gjgSQgbgOhRAAQhFAAgbAQg");
	this.shape_9.setTransform(19.373,5.1342,0.2889,0.2889);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#005386").s().p("AiBCXQhGgpADhuQAAhqA/gpQAyghBuAAQBKAABgAPIAABSQhpgJg1gBQhRAAgWAMQgfARAABAQAABBAfAQQAVALBSAAQBFgBBYgIIAABUQgRAFg6AEQgzAEgfABQh1AAgzgeg");
	this.shape_10.setTransform(66.6063,5.1342,0.2889,0.2889);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005386").s().p("AB5CtIAAkDIjzAAIAAEDIhiAAIAAlZIG5AAIAAFZg");
	this.shape_11.setTransform(45.0093,24.4859,0.2889,0.2889);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#005386").s().p("Ag6D3IA5iTIgzAAQgnAAgQgKQgRgLgNglIhnkgIBpAAIBTDxQAFAQAFAFQAHAGAQAAIAwAAIBpkMIBrAAIjBHtg");
	this.shape_12.setTransform(29.7243,26.6097,0.2889,0.2889);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#005386").s().p("AB4CtIAAkDIjyAAIAAEDIhiAAIAAlZIG5AAIAAFZg");
	this.shape_13.setTransform(61.0527,24.4859,0.2889,0.2889);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#005386").s().p("AjoD9IAAn5IBhAAIAAAmQAqgPAzgIQAxgJArAAQBeAAArAnQAuArAABlQAABbgrApQgtAqhjAAQhtAAhIgKIAACYgAg1iXQgtAIglAMIAACTQA1AJB5AAQA2AAAUgSQAVgSAAg0QAAg4gPgTQgSgYg7AAQgpAAg2ALg");
	this.shape_14.setTransform(14.4249,26.4435,0.2889,0.2889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.2,-33.7,144.5,67.5);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIA5AAIAAARIgjAAIAAAXIAgAAIAAAQIggAAIAAAaIAjAAIAAARg");
	this.shape.setTransform(69.325,-8.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAyIAAhjIA5AAIAAARIgjAAIAAAXIAgAAIAAAQIggAAIAAAaIAjAAIAAARg");
	this.shape_1.setTransform(61.525,-8.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUAyIAAgrIgmAAIAAArIgWAAIAAhjIAWAAIAAAnIAmAAIAAgnIAVAAIAABjg");
	this.shape_2.setTransform(52.05,-8.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiAyIAAhjIA+AAIAAARIgpAAIAAAWIAIAAQATgBALAJQAKAGAAAPQAAAfgoAAgAgNAhIAHAAQAKAAAFgEQAFgDAAgHQAAgHgFgDQgFgDgMAAIgFAAg");
	this.shape_3.setTransform(42.575,-8.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiAmQgNgOAAgYQAAgYANgNQAMgOAWAAQAXAAAMAOQANANAAAYQAAAYgNAOQgMAOgXAAQgWAAgMgOgAgSgZQgGAJAAAQQAAARAGAIQAGAJAMAAQAZgBAAghQAAghgZAAQgMAAgGAIg");
	this.shape_4.setTransform(32.275,-8.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAyIAAhjIAhAAQARAAAJAIQAJAHABAQQAAARgKAHQgKAJgSAAIgJAAIAAAjgAgMgCIAGAAQAKAAAEgEQAFgEAAgHQAAgHgEgEQgEgEgHAAIgKAAg");
	this.shape_5.setTransform(22.65,-8.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfBAIAAgdIg9AAIAAAdIgVAAIAAguIAIAAQAKgTAGgTQAGgVACgXIA6AAIAABSIANAAIAAAugAgJgMQgFAQgHAOIAmAAIAAhAIgTAAQgCAQgFASg");
	this.shape_6.setTransform(12.525,-7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgiAmQgNgOAAgYQAAgYANgNQAMgOAWAAQAXAAAMAOQANANAAAYQAAAYgNAOQgMAOgXAAQgWAAgMgOgAgSgZQgGAJAAAQQAAARAGAIQAGAJAMAAQAZgBAAghQAAghgZAAQgMAAgGAIg");
	this.shape_7.setTransform(1.775,-8.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATAyIAAhSIgkAAIAABSIgWAAIAAhjIBPAAIAABjg");
	this.shape_8.setTransform(-9,-8.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAyIAAhjIAVAAIAAAnIAIAAQATgBALAJQAKAGAAAPQAAAfgoAAgAgNAhIAHAAQAKAAAFgEQAFgDAAgHQAAgHgFgDQgFgDgMAAIgFAAg");
	this.shape_9.setTransform(-21.925,-8.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAyIAAhSIgbAAIAAgRIBLAAIAAARIgcAAIAABSg");
	this.shape_10.setTransform(-30.725,-8.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAaAyIgIgYIgjAAIgHAYIgXAAIAjhjIAZAAIAjBjgAANAJIgLgkIgCgHIgMArIAZAAg");
	this.shape_11.setTransform(-39.625,-8.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAUAyIAAgrIgnAAIAAArIgVAAIAAhjIAVAAIAAAnIAnAAIAAgnIAVAAIAABjg");
	this.shape_12.setTransform(-49.8,-8.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmAuIAAgSQAHADAJACQAIACAIAAQAYAAAAgPQAAgHgIgDQgIgEgPABIgJAAIAAgQIAIAAQAPAAAIgDQAGgDAAgHQABgFgFgDQgEgEgJAAQgOABgNAHIgJgNQAJgGAJgCQAKgEALAAQAPABALAGQAJAIAAAKQAAAKgHAHQgHAFgLADIAAAAQANABAIAGQAHAGAAAJQAAAOgLAJQgLAHgTABQgWgBgOgFg");
	this.shape_13.setTransform(-59.65,-8.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAxIAAgTQAGADAJAAQAGAAADgDQAEgCACgHIgjhHIAXAAIAXA3IABAAIABgDIAVg0IAWAAIgfBGQgGANgFAGQgEAGgHADQgHADgKAAQgJAAgHgCg");
	this.shape_14.setTransform(-68.725,-8.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4165F").s().p("AxACxIAAlhMAiBAAAIAAFhg");
	this.shape_15.setTransform(0,-9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-27,217.8,35.4);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007BC2").s().p("AhVB8ICIj3IAiAAIiHD3gAAoBoQgUgUAAghQAAggATgUQAUgWAgAAIABAAQAgAAATAUQARATAAAfQAAAkgVAVQgUAUgdAAQgeAAgUgUgABFAyQAAAmAWAAQAUAAAAgmQAAgngUAAIgBAAQgVAAAAAngAiLAEQgUgTAAghQAAgfATgWQATgWAhAAIAAAAQAgAAATAVQASAUAAAeQAAAkgWAUQgUAUgdAAQgeAAgTgUgAhugxQAAAnAVAAQAVAAAAgnQAAgngVAAIAAAAQgVAAAAAng");
	this.shape.setTransform(20.275,22.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#007BC2").s().p("AhIB7IAAgzIAYABQAbgBATgLQAWgNAHgXIgBgBQgPAOgdAAQgfAAgWgTQgXgUAAgjQAAglAbgZQAbgZAoAAQAvAAAZAgQAXAcAAAsQAABGgrAnQgkAhhAABgAgUhCQgIAKAAAQQAAANAHAKQAIAKANAAQARAAAHgMQADgEAAgLQAAgQgGgMQgIgNgOAAIgBAAQgLAAgHAJg");
	this.shape_1.setTransform(-6.425,22.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#007BC2").s().p("AgbAcQgKgLAAgRQAAgQALgLQAKgLAQAAQARAAAKALQALALAAAQQAAARgKALQgLALgRAAQgQAAgLgLg");
	this.shape_2.setTransform(-20.725,30.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#007BC2").s().p("AhZBtIALgyQAaAMAeAAQARAAAMgHQAOgIAAgPQAAgihBAAIghABIAQiBICLAAIAAA2IhdAAIgDAaIANAAQArAAAZATQAaAUABAnQAAAjgcAYQgfAagxAAQgrAAgcgNg");
	this.shape_3.setTransform(-36.05,22.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#007BC2").s().p("AAkBiIgNgtIgyAAIgKAtIg3AAIA5jDIBFAAIA7DDgAAQAOIgJgiIgJgnIAAAAIgJAnIgIAiIAjAAg");
	this.shape_4.setTransform(48.5,-6.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#007BC2").s().p("AAYBiQgFgKgIggQgGgSgFgIQgIgLgOAAIgJAAIAABPIgzAAIAAjDIAzAAIAABPIADAAIAwhPIA/AAIhBBWQAcAJALAjQAPAvAJASg");
	this.shape_5.setTransform(31.6,-6.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#007BC2").s().p("AhBBiIAAjDIB+AAIAAArIhJAAIAAAgIBFAAIAAApIhFAAIAAAkIBOAAIAAArg");
	this.shape_6.setTransform(14.85,-6.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#007BC2").s().p("AgaBiIAAiXIgxAAIAAgsICYAAIAAAsIgzAAIAACXg");
	this.shape_7.setTransform(-0.75,-6.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#007BC2").s().p("AhHBHQgYgbAAgrQAAgrAagdQAbgdArAAQAtAAAaAdQAYAcAAApQAAAvgbAcQgaAcgsAAQgsAAgagegAgdgrQgLARABAaQgBAcALAPQAMAQARABQATgBALgRQALgPAAgbQAAgagLgPQgMgSgSABQgRAAgMAPg");
	this.shape_8.setTransform(-18.55,-6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#007BC2").s().p("AAeBiIAAiYIg7AAIAACYIg1AAIAAjDIClAAIAADDg");
	this.shape_9.setTransform(-38.15,-6.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#007BC2").s().p("AAkBiIAAgvQAAg0ADgfIgBAAQgOAngRAgIgeA7Ig8AAIAAjDIAwAAIAAAwQAAAmgCA0IABAAQAOgjAUgkIAghDIA2AAIAADDg");
	this.shape_10.setTransform(-57.4,-6.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag5BMIAAiZIAjAAIAAA2IATgCQAaAAARANQASAMAAAZQAAAUgMAOQgUATgtAAQgWAAgQgCgAgWACIAAAxIANABQANAAAIgGQAJgHAAgNQAAgMgJgHQgIgGgMAAg");
	this.shape_11.setTransform(96.875,-33.925);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAdBNIAAhBIg5AAIAABBIgjAAIAAiaIAjAAIAAA8IA5AAIAAg8IAjAAIAACag");
	this.shape_12.setTransform(82.7,-34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgwBNIAAiaIBeAAIAAAdIg7AAIAAAhIA4AAIAAAbIg4AAIAAAlIA/AAIAAAcg");
	this.shape_13.setTransform(70,-34);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgoA6QgUgVgBgiQAAgmAZgWQAYgWAjAAQAZAAANAHIgHAcQgOgGgPAAQgWAAgNANQgNAOAAAXQAAAYANANQAMAOAXAAQAQAAANgFIAGAbQgOAHgaAAQgmAAgWgWg");
	this.shape_14.setTransform(57.85,-34.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag2A5QgTgVAAgjQgBgiAVgXQAVgXAhAAQAjAAATAXQAUAWgBAiQABAkgWAWQgUAWghAAQgiAAgUgXgAgagkQgLAOABAXQgBAWALAPQAKAOAQAAQARAAALgPQAJgPAAgWQAAgWgJgOQgLgPgRAAQgRAAgJAPg");
	this.shape_15.setTransform(43.7,-34);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAZBOIAAg9IgIAAQgKAAgGAGQgFAGgGAOIgHAWIgGANIgkAAQAEgHADgKIAJgbQAGgOAHgGQAEgFAJgDIAAgBQgOgDgJgIQgKgKAAgQQAAgVAQgMQAQgMAhAAQAaAAATADIAACYgAgPgdQAAAKAJAHQAGAFANAAIAMgBIAAgqIgNgBQgbAAAAAWg");
	this.shape_16.setTransform(25.3,-34.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAhBNIgMgnIgrAAIgMAnIgkAAIAwiaIAtAAIAwCagAAQALIgKggIgHgeIAAAAIgHAeIgJAgIAhAAg");
	this.shape_17.setTransform(12.475,-34);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdBNIAAhBIg5AAIAABBIgjAAIAAiaIAjAAIAAA8IA5AAIAAg8IAjAAIAACag");
	this.shape_18.setTransform(-1.9,-34);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag5BMIAAiZIAjAAIAAA2IATgCQAaAAARANQASAMAAAZQAAAUgMAOQgUATgtAAQgWAAgQgCgAgWACIAAAxIANABQANAAAIgGQAJgHAAgNQAAgMgJgHQgIgGgMAAg");
	this.shape_19.setTransform(-15.375,-33.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhCAyQALgBAHgHQAMgMAAgnIAAhFIBnAAIAACaIgjAAIAAh9IgiAAIAAAlQAAAggFATQgHAXgRAJQgOAIgQAAg");
	this.shape_20.setTransform(-29.85,-33.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAgBNIAAguQAAgnACgZIAAAAQgLAcgQAaIgeA4IgoAAIAAiaIAgAAIAAAuQAAAqgCAbIABAAQAMgbAQgaIAgg+IAkAAIAACag");
	this.shape_21.setTransform(-43.375,-34);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag5BMIAAiZIBnAAIAAAcIhEAAIAAAbIATgBQAaAAARAMQASAMAAAYQAAAWgPANQgUASgqAAQgWAAgQgCgAgWADIAAAwIAOABQANAAAJgIQAHgHAAgLQAAgLgIgGQgJgHgNAAg");
	this.shape_22.setTransform(-56.875,-33.925);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAhBNIgMgnIgrAAIgMAnIgkAAIAwiaIAtAAIAwCagAAQALIgKggIgHgeIAAAAIgHAeIgJAgIAhAAg");
	this.shape_23.setTransform(-70.725,-34);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRBNIAAh8IgqAAIAAgeIB2AAIAAAeIgpAAIAAB8g");
	this.shape_24.setTransform(-83.5,-34);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgoA6QgUgVAAgiQgBgmAZgWQAYgWAjAAQAZAAANAHIgHAcQgOgGgPAAQgWAAgNANQgNAOAAAXQAAAYAMANQAMAOAYAAQAQAAANgFIAFAbQgNAHgaAAQgmAAgWgWg");
	this.shape_25.setTransform(-95.5,-34.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-45.5,209.1,91);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdApQgOgPAAgYQAAgbASgQQAQgPAZAAQATAAAJAFIgFATQgKgEgLAAQgQAAgIAJQgLAKAAARQAAARAKAKQAIAKARAAQAMAAAJgEIADAUQgJAEgTAAQgbAAgQgQg");
	this.shape.setTransform(88.2,9.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiA4IAAhvIBDAAIAAAVIgrAAIAAAXIApAAIAAAUIgpAAIAAAaIAtAAIAAAVg");
	this.shape_1.setTransform(80.1,9.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlA4IgCgrIgBgtIAAAAQgFAWgIAUIgOAsIgSAAIgMgrQgGgWgEgVIgBAAIgCAtIgCArIgXAAIAHhvIAiAAIALAmQAGAWADAQIAAAAIAKgnIANglIAgAAIAGBvg");
	this.shape_2.setTransform(69.55,9.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKALQgEgFAAgGQAAgGAEgEQAFgEAFAAQAHAAAEAEQAEAEAAAGQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_3.setTransform(91,-1.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA3IAAhuIBIAAIAAAUIgvAAIAAAUIANgBQASAAANAJQANAIgBARQAAAQgKAKQgPAMgdAAQgQAAgLgBgAgPACIAAAjIAJABQAJAAAHgGQAFgFAAgIQAAgIgGgFQgHgFgIAAg");
	this.shape_4.setTransform(85.05,-6.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA3IACgUIAIAAQALAAAEgKQABgCgBgDIgmhMIAdAAIAQAoIAHAUIAAAAIAGgVIAMgnIAbAAIgVA2QgNAhgJALQgLAPgSAAQgHAAgFgCg");
	this.shape_5.setTransform(76.025,-6.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnA4IAAhtQANgCAVAAQAWAAALAJQAMAJAAARQAAAQgKAJQgNAMgXAAIgIgBIAAAogAgOgjIAAAhIAIABQAKAAAFgGQAGgEAAgJQAAgQgTAAIgKABg");
	this.shape_6.setTransform(67.7,-6.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAACYQgzAAgbgtQgYgogBhCQAAhDAagpQAcgsAyAAQA2AAAaAuQAXAoAABBQAABHgbAoQgbApgyAAgAgkAAQgBBkAlAAIABAAQAlAAAAhkQAAhjglAAQglAAAABjg");
	this.shape_7.setTransform(48.375,0.225);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhgCGIAMgxQAbANAgAAQAXAAAPgMQAQgNABgWQAAgyhNAAQgQAAgTACIATiYICWAAIAAA3IhnAAIgGAwIAQgBQAqABAcAVQAhAZAAAuQAAAsgfAdQgiAfg2AAQgtAAgdgQg");
	this.shape_8.setTransform(25.65,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhgCGIALgxQAcANAgAAQAXAAAPgMQAQgNABgWQAAgyhNAAQgQAAgTACIAUiYICVAAIAAA3IhnAAIgGAwIAQgBQAqABAcAVQAhAZAAAuQAAAsgfAdQgiAfg2AAQgtAAgdgQg");
	this.shape_9.setTransform(3.25,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhgCGIALgxQAcANAgAAQAXAAAOgMQARgNAAgWQAAgyhLAAQgSAAgRACIATiYICVAAIAAA3IhnAAIgGAwIAPgBQArABAcAVQAhAZAAAuQAAAsggAdQghAfg2AAQgtAAgdgQg");
	this.shape_10.setTransform(-26.7,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AABCUIAAjrIgBAAIg1AbIgLgzIBKgkIA3AAIAAEng");
	this.shape_11.setTransform(-50.675,0.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSBQIAAiBIgqAAIAAgeIB5AAIAAAeIgrAAIAACBg");
	this.shape_12.setTransform(-69.75,7.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4A7QgUgXAAgjQAAgjAVgYQAWgXAhAAQAkAAAVAXQAUAWAAAjQAAAmgWAXQgWAXgiAAQgjAAgUgYgAgcglQgKAPAAAXQAAAYALAOQAKAPARAAQASAAAKgQQAKgOAAgYQAAgWgKgPQgLgQgRAAQgRAAgLAQg");
	this.shape_13.setTransform(-83.65,7.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.3,-21.1,188.5,49.6);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#007BC2").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,240,400), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Анимация3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(79.85,86.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({x:151.35,alpha:1},18,cjs.Ease.cubicOut).wait(41));

	// Слой_1
	this.instance_1 = new lib.Символ9("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(144.5,71.5,1,1,0,0,0,144.5,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.7,0,313.7,143);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxQDhIAAnBMAihAAAIAAHBg");
	mask.setTransform(98.525,30.5);

	// Слой_1
	this.instance = new lib.Анимация2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(100.35,-10.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29.9},20,cjs.Ease.cubicOut).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,8,188.4,45);


(lib.Символ4копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183570").s().p("AgFAmIAAhAIgWAAIAAgLIA3AAIAAALIgWAAIAABAg");
	this.shape.setTransform(168.15,2.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183570").s().p("AAPAmIgfgmIAAAmIgMAAIAAhLIAMAAIAAAlIAeglIANAAIgdAlIAfAmg");
	this.shape_1.setTransform(162.25,2.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183570").s().p("AgVAmIAAhLIArAAIAAALIgeAAIAAAUIAcAAIAAAJIgcAAIAAAZIAeAAIAAAKg");
	this.shape_2.setTransform(155.6,2.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183570").s().p("AARAmIAAhAIghAAIAABAIgMAAIAAhLIA5AAIAABLg");
	this.shape_3.setTransform(148.575,2.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183570").s().p("AgTAdQgJgKAAgTQAAgLAEgJQAFgIAIgFQAIgFAKAAQAMAAAKAFIgFAKIgIgDIgJgBQgKAAgGAHQgGAIAAAMQAAAOAGAHQAGAIAKAAIAJgBIAKgDIAAALQgJADgLAAQgQAAgJgKg");
	this.shape_4.setTransform(141.425,2.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#183570").s().p("AgZAdQgJgKAAgTQAAgSAJgKQAJgKAQAAQARAAAJAKQAKALAAARQAAATgKAKQgJAKgRAAQgRAAgIgKgAgQgUQgFAHgBANQABAOAFAHQAGAHAKABQALAAAFgIQAGgHAAgOQAAgNgGgHQgFgIgLABQgKgBgGAIg");
	this.shape_5.setTransform(133.75,2.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#183570").s().p("AgYAmIAAhLIAWAAQANAAAHAGQAHAGAAALQAAAMgHAFQgJAHgMAAIgIAAIAAAcgAgLAAIAGAAQAJAAAEgDQAFgDgBgIQAAgGgEgEQgDgCgIAAIgIAAg");
	this.shape_6.setTransform(126.5,2.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#183570").s().p("AARAmIAAhAIghAAIAABAIgMAAIAAhLIA5AAIAABLg");
	this.shape_7.setTransform(119.125,2.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#183570").s().p("AAVAxIAAgnIABgUIgBAAIgmA7IgOAAIAAhLIALAAIAAAnIAAANIgBAIIABAAIAmg8IAOAAIAABLgAgPgjQgFgEAAgKIALAAQAAAEABACIADADIAGABQAFAAACgCQADgCABgGIALAAQgBAKgFAEQgGADgLAAQgKAAgFgDg");
	this.shape_8.setTransform(108.275,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#183570").s().p("AAVAmIAAgmIABgWIgBAAIgmA8IgOAAIAAhLIALAAIAAAnIAAAMIgBAIIABAAIAmg7IAOAAIAABLg");
	this.shape_9.setTransform(99.875,2.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#183570").s().p("AAPAmIgfgmIAAAmIgMAAIAAhLIAMAAIAAAlIAeglIANAAIgdAlIAfAmg");
	this.shape_10.setTransform(92.75,2.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#183570").s().p("AgTAdQgJgKAAgTQAAgLAEgJQAFgIAIgFQAIgFAKAAQAMAAAKAFIgFAKIgIgDIgJgBQgKAAgGAHQgGAIAAAMQAAAOAGAHQAGAIAKAAIAJgBIAKgDIAAALQgJADgLAAQgQAAgJgKg");
	this.shape_11.setTransform(85.675,2.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#183570").s().p("AgFAmIAAhAIgWAAIAAgLIA3AAIAAALIgWAAIAABAg");
	this.shape_12.setTransform(79.15,2.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#183570").s().p("AASAmIAAgiIgiAAIAAAiIgNAAIAAhLIANAAIAAAfIAiAAIAAgfIAMAAIAABLg");
	this.shape_13.setTransform(72.2,2.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#183570").s().p("AAWAmIgIgVIgcAAIgHAVIgNAAIAchLIANAAIAcBLgAALAGIgHgUIgCgGIgCgGIgDANIgHATIAVAAg");
	this.shape_14.setTransform(64.65,2.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#183570").s().p("AAZAxIAAgWIgxAAIAAAWIgMAAIAAggIAGAAQAHgOAGgQQAFgRABgSIAnAAIAABBIAJAAIAAAggAgGgKQgFAPgGAMIAgAAIAAg2IgQAAQgBAMgEAPg");
	this.shape_15.setTransform(57.25,3.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#183570").s().p("AARAmIAAgiIgiAAIAAAiIgMAAIAAhLIAMAAIAAAfIAiAAIAAgfIANAAIAABLg");
	this.shape_16.setTransform(49.55,2.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#183570").s().p("AgUAmIAAhLIApAAIAAALIgdAAIAAAUIAbAAIAAAJIgbAAIAAAZIAdAAIAAAKg");
	this.shape_17.setTransform(42.8,2.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#183570").s().p("AAbAmIAAglIABgOIAAgLIAAAAIgYA+IgJAAIgWg+IgBAAIACAZIAAAlIgMAAIAAhLIARAAIAVA7IAAAAIAVg7IASAAIAABLg");
	this.shape_18.setTransform(34.75,2.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#183570").s().p("AgaAdQgJgKAAgTQAAgSAJgKQAKgKAQAAQARAAAJAKQAJALABARQgBATgJAKQgJAKgRAAQgRAAgJgKgAgQgUQgGAHABANQgBAOAGAHQAGAHAKABQALAAAGgIQAFgHAAgOQAAgNgFgHQgGgIgLABQgKgBgGAIg");
	this.shape_19.setTransform(25.7,2.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#183570").s().p("AAPAmIgfgmIAAAmIgMAAIAAhLIAMAAIAAAlIAeglIANAAIgdAlIAfAmg");
	this.shape_20.setTransform(18.6,2.45);

	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.3,-30.65,0.6855,0.6855,0,0,0,0.3,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#183570").s().p("AgPAmIgBgBIgQABIgBgBQgFgDgDgJQgDgEgCgIIAAgIQAAgHADgHQAEgMAHgGQAHgIAHgCIADAAIAPA1IARg1IABAAIAKAEQALAJAGAPQACAEAAAFIAAAHQAAAHgCAKIgGAKQgCADgDAAIgSAAIACgBQAIgFAGgHQAFgHABgKIAAgFQABgIgFgJQgCgGgDgBIgFgDIgEAAIgUA+IgSg7QAAgBAAAAQAAgBAAAAQgBAAAAAAQgBgBAAAAIgBAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAAAAAAAQgEACgCAEQgDAGgDAHIAAAFQAAAJAEAJQAEAHAJAJIAHADIABABg");
	this.shape_21.setTransform(5.5375,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4копия2, new cjs.Rectangle(0.8,-53.8,171.89999999999998,64.6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.instance = new lib.Символ6_1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(107.55,120.4,1,1,0,0,0,100.4,29.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(59));

	// Слой_4
	this.instance_1 = new lib.Символ7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(107.95,65.05,1,1,0,0,0,83.9,18);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({alpha:1},12,cjs.Ease.cubicOut).wait(55));

	// logo
	this.instance_2 = new lib.Символ6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(107.8,19.8,0.9114,0.9114,0,0,0,82.8,19.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(67));

	// Слой_1
	this.instance_3 = new lib.Символ5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(107.5,69.5,1,1,0,0,0,107.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-12.4,243,164);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_8
	this.instance = new lib.Символ10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(120.6,609.1,1,1,0,0,0,111.2,493.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(152).to({_off:false},0).wait(64).to({y:155.1},0).wait(48).to({y:-280.9},0).wait(47));

	// btn
	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.65,370.05,0.7602,0.7602,0,0,0,0.1,-9.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(152).to({_off:false},0).wait(159));

	// logo2
	this.instance_2 = new lib.Символ4копия2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(119.8,112.05,1.1864,1.1864,0,0,0,86.3,28.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(152).to({_off:false},0).wait(159));

	// w
	this.instance_3 = new lib.Символ1_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(138).to({_off:false},0).to({alpha:1},14,cjs.Ease.cubicInOut).wait(159));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:600},20,cjs.Ease.cubicInOut).to({_off:true},1).wait(290));

	// t_dwn
	this.instance_5 = new lib.Символ4("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,318.15,1,1,0,0,0,107.5,67.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},153).wait(158));

	// leaves
	this.instance_6 = new lib.Символ3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(71.6,47.5,0.6519,0.6519,0,0,0,116,79);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},153).wait(158));

	// girls
	this.instance_7 = new lib.Символ2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(171.95,165.35,0.4999,0.4999,0,0,0,124.9,150.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},153).wait(158));

	// white
	this.instance_8 = new lib.Символ8("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(160.5,49.2,0.5934,0.5934,0,0,0,144.6,71.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(48).to({_off:false},0).to({_off:true},105).wait(158));

	// render
	this.instance_9 = new lib.Символ1("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(144.75,120,0.7716,0.7717,0,0,0,187.6,155.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:96.75},152).to({_off:true},1).wait(158));

	// bg
	this.instance_10 = new lib.bg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(311));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-786.3,337.4,1984);


// stage content:
(lib._240x400 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var domOverlay = document.getElementById("dom_overlay_container");
		//domOverlay.style.border = '1px solid rgba( 0, 0, 0, 0.5)'; // width solid/dotted/dashed + color 05 = alpha
		domOverlay.style.border = '1px solid #000000'; // width solid/dotted/dashed + color 05 = alpha
		domOverlay.style.boxSizing = 'border-box';
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 1
	this.instance = new lib.main();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(116,196,173.39999999999998,206.2);
// library properties:
lib.properties = {
	id: '0DA85D765483451782C6CB3230505573',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"240x400_atlas_P_.png", id:"240x400_atlas_P_"},
		{src:"240x400_atlas_NP_.jpg", id:"240x400_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0DA85D765483451782C6CB3230505573'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;