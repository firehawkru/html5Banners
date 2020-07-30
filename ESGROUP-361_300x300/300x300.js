(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x300_atlas_P_", frames: [[0,302,289,207],[0,0,751,300]]},
		{name:"300x300_atlas_NP_", frames: [[0,360,300,300],[0,0,414,358],[416,309,414,258],[416,0,414,307]]}
];


// symbols:



(lib._300300 = function() {
	this.initialize(ss["300x300_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300300_22 = function() {
	this.initialize(ss["300x300_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._300300render = function() {
	this.initialize(ss["300x300_atlas_NP_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._300300render3 = function() {
	this.initialize(ss["300x300_atlas_NP_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["300x300_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.plan = function() {
	this.initialize(ss["300x300_atlas_P_"]);
	this.gotoAndStop(1);
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

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","#000000"],[0,1],0,45.5,0,-45.5).s().p("A70HHIAAuNMA3pAAAIAAONg");
	this.shape.setTransform(178.05,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356.1,91);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.plan();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,751,300);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAC07B").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape.setTransform(1.325,1.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2.7,2.7);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,289,207);


(lib.Символ3копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlNXsMAAAgvXIKbAAMAAAAvXg");
	this.shape.setTransform(359.075,90.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_6
	this.instance = new lib._300300_22();
	this.instance.parent = this;
	this.instance.setTransform(0,-56,0.7962,0.7962);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-61.3,392.5,303.3);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(120,144,170,0)","#7B91A8"],[0,1],0,43,0,13.7).s().p("A5sGuIAAtbMAzYAAAIAANbg");
	this.shape.setTransform(164.45,-1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.instance = new lib._300300render();
	this.instance.parent = this;
	this.instance.setTransform(0,12,0.7946,0.7946);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-44.8,329,261.8);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("A3bXcMAAAgu3MAu3AAAMAAAAu3g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._300300();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAsQAAgJAEgHQADgHAFgEIALgJIAKgIQAGgCADgFQAEgFAAgGQAAgHgFgFQgFgEgJAAQgDAAgEABIgFAEIgDAEIgCAEIgBACIgIgEIABgCIACgFIAFgGQADgDAFgCQAFgCAFAAQAMAAAIAHQAIAIAAAKQAAAHgDAFQgDAFgEADIgKAIIgJAHQgFADgEAFQgFAFgBAFIAsAAIAAAJg");
	this.shape.setTransform(130.575,-3.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA1BCIAAhrIg1BFIg1hFIAABrIgNAAIAAiDIAMAAIA2BHIA3hHIANAAIAACDg");
	this.shape_1.setTransform(118.6,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DAC07B").s().p("AgRBDQgJgCgFgDIgKgGIgGgFIgCgDIARgSIABACIAEAEIAHAEIAIADQAFABAGABQAKgBAGgEQAFgFAAgIQAAgHgFgEQgGgGgJAAIgPAAIAAgXIAOAAQAHAAAFgEQAFgEAAgHQAAgHgFgFQgFgEgHAAQgIAAgGADQgGAEgDACIgDADIgRgRIACgCIAFgEIAJgHIANgEQAIgCAHgBQAVABAMAKQAMALAAAPQAAAGgCAGQgCAFgDADIgFAFIgFADIgCABIADACIAFABQAFADADAEQADADACAGQADAGAAAHQAAARgOALQgNANgXAAQgIAAgJgDg");
	this.shape_2.setTransform(100.275,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DAC07B").s().p("AAKBCIAAgXIg+AAIAAgcIA5hQIAhAAIAABTIAPAAIAAAZIgPAAIAAAXgAgZASIAjAAIAAgyg");
	this.shape_3.setTransform(89.425,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAC07B").s().p("AgCBCIAAhfIgXAAIAAgSQAGgBAGgDIAIgEIAEgFIACgEIABgBIAYAAIAACDg");
	this.shape_4.setTransform(79.325,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvAwQgUgTAAgdQAAgcAUgTQAUgVAbAAQAdAAATAVQAUATAAAcQAAAdgUATQgTAVgdAAQgbAAgUgVgAglgmQgQAQAAAWQAAAYAQAPQAPAQAWAAQAXAAAQgQQAPgPAAgYQAAgWgPgQQgQgQgXAAQgWAAgPAQg");
	this.shape_5.setTransform(64.425,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAzBRIAAgdIhkAAIAAAdIgOAAIAAgqIAHAAIADgDIAGgIQADgHADgIQAEgJACgNQADgOAAgRIAAgoIBQAAIAAB3IAQAAIAAAqgAgSgoQAAAQgCAPQgDANgDAIIgHAPIgFAJIgDADIBMAAIAAhpIg1AAg");
	this.shape_6.setTransform(49.45,1.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DAC07B").s().p("AgoAzQgQgUAAgfQAAgeAQgTQARgUAXAAQAYAAAQAUQARATAAAeQAAAfgRAUQgQATgYAAQgXAAgRgTgAgTggQgJAMABAUQgBAVAJAMQAIAKALABQALgBAJgKQAIgMAAgVQAAgUgIgMQgJgKgLgBQgLABgIAKg");
	this.shape_7.setTransform(32.7,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DAC07B").s().p("AgnAzQgRgUAAgfQAAgeARgTQAQgUAXAAQAYAAARAUQAQATAAAeQAAAfgQAUQgRATgYAAQgXAAgQgTgAgTggQgJAMAAAUQAAAVAJAMQAIAKALABQALgBAJgKQAJgMAAgVQAAgUgJgMQgJgKgLgBQgLABgIAKg");
	this.shape_8.setTransform(19.25,0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DAC07B").s().p("AgCBCIAAhfIgXAAIAAgSQAGgBAGgDIAIgEIAEgFIACgEIABgBIAYAAIAACDg");
	this.shape_9.setTransform(8.275,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGBCIAAh2IgqAAIAAgNIBhAAIAAANIgqAAIAAB2g");
	this.shape_10.setTransform(-3.875,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvAwQgUgTAAgdQAAgcAUgTQAUgVAbAAQAdAAATAVQAUATAAAcQAAAdgUATQgTAVgdAAQgbAAgUgVgAglgmQgQAQAAAWQAAAYAQAPQAPAQAWAAQAXAAAQgQQAPgPAAgYQAAgWgPgQQgQgQgXAAQgWAAgPAQg");
	this.shape_11.setTransform(-17.125,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAyBCIAAiDIAOAAIAACDgAg/BCIAAiDIAOAAIAAAxIAjAAQARAAAMAMQAMALAAASQAAASgMALQgMAMgRAAgAgxA1IAjAAQANAAAGgIQAIgIAAgMQAAgNgIgIQgGgHgNAAIgjAAg");
	this.shape_12.setTransform(-37.1,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguBCIAAiDIAyAAQASAAAMAMQAMAMAAARQAAASgMALQgMAMgSAAIgjAAIAAAxgAgfAEIAjAAQAMAAAJgHQAHgIABgNQgBgNgHgHQgJgIgMAAIgjAAg");
	this.shape_13.setTransform(-51.15,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAoBCIAAhqIhRBqIgMAAIAAiDIAOAAIAABqIBRhqIAMAAIAACDg");
	this.shape_14.setTransform(-65.2,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGBCIAAh2IgqAAIAAgNIBhAAIAAANIgqAAIAAB2g");
	this.shape_15.setTransform(-77.825,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguBCIAAiDIAyAAQATAAALAMQANAMAAARQAAASgNALQgMAMgSAAIgjAAIAAAxgAgfAEIAjAAQANAAAHgHQAJgIgBgNQABgNgJgHQgHgIgNAAIgjAAg");
	this.shape_16.setTransform(-88.75,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAvBCIgPglIg+AAIgPAlIgQAAIA4iDIAMAAIA3CDgAAaAQIgag9IgYA9IAyAAg");
	this.shape_17.setTransform(-102.025,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AguBCIAAiDIAyAAQAQAAALAKQAKAJAAAOQAAAGgBAGQgCAEgDADIgEAFIgEADIgCABIADACIAFACIAHAGIAFAKQACAGAAAGQABARgMAKQgLALgSAAgAghA1IAoAAQAMAAAHgHQAHgGAAgMQAAgKgHgIQgHgIgMAAIgoAAgAghgJIAlAAQALAAAFgHQAHgFgBgLQABgIgHgGQgFgGgLAAIglAAg");
	this.shape_18.setTransform(-114.6,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAkBCIgvhCIgbAbIAAAnIgOAAIAAiDIAOAAIAABKIBEhKIASAAIgxA3IA2BMg");
	this.shape_19.setTransform(-126.775,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.1,-13.2,272.29999999999995,26.5);


(lib.Анимация9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAbBRQgJgGgFgKQgFgKAAgMQAAgMAGgLQAGgKALgHQAKgFALAAQAOAAAKAEQAKAHAFAKQAFALAAALQAAAMgGAKQgEALgKAHQgLAHgOAAQgOAAgKgHgAAiAQQgFAKAAAOQAAAOAGANQAFAMAMAAQAMAAAGgKQAFgLABgNQgBgPgFgMQgGgMgNAAQgLAAgGAKgAhKBQICGinIALAKIiHClgAhLgBQgJgHgGgKQgFgLAAgLQAAgMAFgLQAGgLAKgGQAKgHAOAAQAOAAAJAGQAKAHAFAKQAFAKgBALQAAAMgFAMQgGALgLAGQgKAGgLAAQgOgBgKgEgAhEhDQgGAKAAAMQAAAPAFANQAGAMANAAQALAAAGgKQAFgLAAgNQAAgPgFgMQgGgNgMAAQgMAAgFAMg");
	this.shape.setTransform(75.05,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBDQgNgWAAgoQAAgRAGgWQAFgVAPgQQAPgQAYAAQANAAAJAFQAKAFAFAHQAFAHAAAHQAAAFgDAEQgCADgFAAQgGABgCgEQgDgDAAgEQAAgFADgFQgCgFgGgEQgHgFgJAAQgXAAgJAZQgJAZgBAcQAGgJALgGQAKgFAMAAQASAAALAIQAMAIAFALQAFAMAAAOQAAAPgIANQgHAMgNAHQgNAIgPAAQgeAAgOgVgAgTgBQgKAGgEAMQABAaAJASQAIASAQAAQAQAAAIgMQAIgMAAgRQAAgSgHgPQgHgOgSAAQgKAAgKAIg");
	this.shape_1.setTransform(57.775,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYA8IAAgHQAHAAADgEQADgDABgGIABgRIAAg5IABgPIgRAAQgLAAgEAGQgEAFAAAPIgJAAIABgkIBpAAIABAkIgJAAQgBgKgBgGQgCgFgEgCQgEgDgIAAIgPAAIAABUIgBAQIAQgBIAAAKg");
	this.shape_2.setTransform(38.55,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeA4QgNgHgIgOQgIgOAAgSQAAgSAIgPQAHgPAOgJQAOgJAQAAQAQAAAOAIQAOAIAIAOQAIAOAAARQAAARgIAPQgIAQgOAJQgNAJgRAAQgQAAgOgIgAgagnQgJAOAAAWQAAAPAEANQAFANAIAIQAJAJALAAQARAAAJgPQAIgPAAgVQAAgXgJgRQgJgSgSABQgRAAgJAOg");
	this.shape_3.setTransform(25.625,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsA4QgKgIAAgMQAAgOALgLQAMgJAQgDQAQgFARAAIAAgPQAAgPgEgJQgFgJgOAAQgHAAgHADQgGAEgDAFQACAEAAAFQAAAEgCAEQgDACgFAAQgFAAgDgCQgCgEAAgFQAAgIAFgHQAGgGALgEQALgEANAAQAUAAAJALQAKAKAAAYIgBA1IAAAQIARgBIAAAKIgjAAIgBgNQgSARgTAAQgRAAgJgIgAgQAKQgPAGAAAPQAAAKAFAFQAGAEAHAAQAKAAAGgDQAHgEAIgHIAAgMIAAgXQgSABgQAIg");
	this.shape_4.setTransform(6.25,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAmA8QgGAAgFgFIgOgSIgKgMIgJgPIgHgJIgLABIAAAhIgBAQIAPgBIAAAKIgwAAIAAgHQAGAAAEgEQADgDAAgGIABgRIAAg5IABgQIgPABIAAgKIAxAAIAAAHQgHAAgDADQgDAEAAAFIgBARIgBARIAKAAIAdgfQAIgKAFgDIgQAAIAAgJIAsAAIAAAHQgKACgKAGQgIAHgLALIgSATIAIAFIAHAHIARAWIAFAHQAFAHAHAGQAGAGAGAAIAAAHg");
	this.shape_5.setTransform(-6.15,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZA4QgOgIgHgOQgIgPAAgTQAAgQAIgPQAHgOAOgJQAOgJAQAAQAOAAALAGQALAGAHAMQAGAMAAARIhTACQgBAcAKAQQAKAQATAAQALAAAMgGQAMgGAGgJIAFAGQgJANgOAHQgPAHgOAAQgPAAgNgIgAAfgSQAAgPgGgKQgGgKgNAAQgdgBgGAkIA8AAIAAAAg");
	this.shape_6.setTransform(-19.375,2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYA8IAAgHQAHAAADgEQADgDABgGIAAgRIAAg5IABgPIgRAAQgKAAgEAGQgEAFAAAPIgJAAIAAgkIBqAAIABAkIgJAAQAAgKgCgGQgCgFgEgCQgFgDgHAAIgPAAIAABUIgBAQIAQgBIAAAKg");
	this.shape_7.setTransform(-31.8,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgeA4QgNgHgIgOQgIgOAAgSQAAgSAIgPQAHgPAOgJQAOgJAQAAQAQAAAOAIQAOAIAIAOQAIAOAAARQAAARgIAPQgIAQgOAJQgNAJgRAAQgQAAgOgIgAgagnQgJAOAAAWQAAAPAEANQAFANAIAIQAJAJALAAQARAAAJgPQAIgPAAgVQAAgXgJgRQgJgSgSABQgRAAgJAOg");
	this.shape_8.setTransform(-44.725,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOA8IAAgHQAHAAADgEQADgDAAgGIABgRIAAg5IABgQIgqAAQgHAAgDAEQgDADAAAEIgBAQIAAA6IgBAQIAPgBIAAAKIgxAAIAAgHQAHAAADgEQADgDAAgGIABgRIAAg5IABgQIgPABIAAgKIB9AAIAAAHQgHAAgDADQgDAEAAAFIgBARIAAA6IgBAQIAPgBIAAAKg");
	this.shape_9.setTransform(-59.125,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcBUIAAgIQAIAAAEgEQADgDABgGIAAgRIAAhfIhXBuIgBANIARgBIAAALIg2AAIAAgIQAJAAADgEQAEgDABgGIAAgRIAAhmIABgRIgSAAIAAgKIA2AAIAAAIQgIAAgEAEQgDADgBAFIAAARIAABaIBXhsIABgJIgRAAIAAgKIA2AAIAAAIQgJAAgDAEQgEADAAAFIgBARIAABlIgBATIASgBIAAALg");
	this.shape_10.setTransform(-75.975,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.8,-16.5,267.70000000000005,33.1);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAdQgHgFABgKQAAgDABgDQABgDACgDIAEgCIADgCIAAAAIAAgBIgCgBIgEgDIgCgEIgBgFQAAgIAHgGQAFgFAIAAQAIAAAHAFQAFAGABAIIgCAFIgCAEIgCADIgCABIgBABIABAAIADACIADACIADAGIACAGQAAAKgIAFQgGAHgKAAQgJAAgHgHgAgLAEQgEAFAAAFQAAAHAEADQAFAFAGAAQAHAAAFgFQAEgDAAgHQAAgFgEgFQgGgEgGAAQgGAAgFAEgAgJgYQgDACAAAGQAAAEADAEQAEADAFAAQAGAAADgDQAEgEAAgEQAAgGgEgCQgDgEgGAAQgFAAgEAEg");
	this.shape.setTransform(128.5,43.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAaQgIgKAAgQQAAgPAIgKQAJgKAKAAQAMAAAHAKQAJAKAAAPQAAAQgIAKQgJAKgLAAQgKAAgJgKgAgNgVQgHAJABAMQgBAOAHAHQAFAIAIAAQAIAAAHgIQAFgHABgOQgBgMgFgJQgHgHgIAAQgIAAgFAHg");
	this.shape_1.setTransform(122.2,43.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQADIAAgFIAhAAIAAAFg");
	this.shape_2.setTransform(116.725,43.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgQAjIAfg+IgkAAIAAgHIArAAIAAAHIgeA+g");
	this.shape_3.setTransform(112.2,43.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAjIAdg+IgjAAIAAgHIArAAIAAAHIgeA+g");
	this.shape_4.setTransform(107.3,43.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQADIAAgFIAhAAIAAAFg");
	this.shape_5.setTransform(102.725,43.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSAaQgJgKAAgQQAAgPAJgKQAHgKALAAQALAAAIAKQAJAKAAAPQAAAQgIAKQgJAKgLAAQgLAAgHgKgAgOgVQgFAJAAAMQAAAOAFAHQAHAIAHAAQAIAAAHgIQAFgHAAgOQAAgMgFgJQgHgHgIAAQgHAAgHAHg");
	this.shape_6.setTransform(97.25,43.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AADAjIAAg3IgMAAIAAgEIAGgBIADgDIADgDIABgCIABgBIAFAAIAABFg");
	this.shape_7.setTransform(91.825,43.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWAjQAAgGAEgGQACgGAEgDIAJgHIAIgHQAEgBADgFQADgEAAgEQAAgGgEgEQgEgDgHAAQgDAAgDABIgDACIgEAFIgBACIAAABIgHgDIABgBIACgEIADgFIAHgEQAEgCAEAAQAKAAAHAHQAFAFAAAJQAAAFgCAFQgCAEgEACIgHAGIgIAGQgEACgDAEQgDAEgCAEIAjAAIAAAHg");
	this.shape_8.setTransform(87.6,43.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKAsIABgCIAFgGIAEgJIADgMIACgPQgBgGgBgIQgBgHgCgFIgEgJIgFgGIgBgCIAGgDIACACIACAGIAGAKIADANQACAIAAAHIgCAQIgEANIgFAJIgDAHIgBACg");
	this.shape_9.setTransform(81.25,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVAjQAAgGADgGQACgGAFgDIAJgHIAHgHQAEgBADgFQADgEAAgEQAAgGgEgEQgEgDgHAAQgCAAgEABIgDACIgDAFIgCACIAAABIgGgDIAAgBIACgEIADgFIAHgEQAEgCAEAAQAKAAAHAHQAFAFABAJQAAAFgDAFQgCAEgDACIgIAGIgIAGQgEACgDAEQgEAEgBAEIAkAAIAAAHg");
	this.shape_10.setTransform(77,43.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADAjIAAg3IgMAAIAAgEIAGgBIADgDIADgDIABgCIABgBIAFAAIAABFg");
	this.shape_11.setTransform(72.325,43.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQAdQgHgFAAgKQAAgDACgDQABgDACgDIADgCIAEgCIABAAIgBgBIgDgBIgDgDIgBgEIgBgFQAAgIAFgGQAHgFAHAAQAIAAAHAFQAFAGAAAIIgBAFIgBAEIgDADIgDABIgBABIACAAIADACIADACIADAGIACAGQgBAKgGAFQgHAHgKAAQgJAAgHgHgAgKAEQgFAFAAAFQAAAHAFADQAEAFAGAAQAHAAAEgFQAFgDAAgHQAAgFgFgFQgFgEgGAAQgGAAgEAEgAgJgYQgDACAAAGQAAAEADAEQAEADAFAAQAGAAADgDQAEgEAAgEQAAgGgEgCQgDgEgGAAQgFAAgEAEg");
	this.shape_12.setTransform(68,43.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AADAtIgDgGIgEgKQgDgFgBgIQgCgIAAgIIACgPIAEgNIAEgJIAEgHIABgCIAGADIgBACIgFAGIgEAJIgDAMQgBAIgBAGQABAIABAGQABAIACAFIAEAJIAFAGIABACIgGADg");
	this.shape_13.setTransform(63.65,44.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPAjIAeg+IgkAAIAAgHIArAAIAAAHIgeA+g");
	this.shape_14.setTransform(57.5,43.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgCAWIAAgTIgTAAIAAgFIATAAIAAgTIAFAAIAAATIATAAIAAAFIgTAAIAAATg");
	this.shape_15.setTransform(52.475,43.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgQAiIgDgBIAAAAIAAgGIAFABQAGAAADgHIADgIIgUguIAHAAIAPAlIAQglIAHAAIgWA2QgCAHgDADQgEADgFAAg");
	this.shape_16.setTransform(45.6,45.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_17.setTransform(40.325,44.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQAKAAAIAHQAGAIABAJQgBALgGAHQgIAHgKAAQgJAAgIgHgAgLgMQgGAFAAAHQAAAHAGAGQAFAFAGAAQAHAAAFgFQAGgFAAgIQAAgHgGgFQgFgFgHAAQgGAAgFAFg");
	this.shape_18.setTransform(34.6,44.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgDAtIAAgUQgLABgJgIQgHgHAAgLQAAgJAHgIQAJgGALAAIAAgWIAGAAIAAAWQANAAAHAGQAIAIAAAJQAAALgIAHQgHAIgNgBIAAAUgAADATQAJAAAHgFQAFgFAAgJQAAgGgFgGQgHgFgJAAgAgRgMQgGAGAAAGQAAAJAGAFQAGAFAIAAIAAgkQgIAAgGAFg");
	this.shape_19.setTransform(28.2,44.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_20.setTransform(21.925,44.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAYIgCgBIgBAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgDACgDgBg");
	this.shape_21.setTransform(16,44.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_22.setTransform(10.875,44.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_23.setTransform(5.9,44.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQASQgIgHAAgLQAAgJAIgIQAHgHAJAAQAKAAAIAHQAGAIABAJQgBALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAGgFAAgIQAAgHgGgFQgFgFgHAAQgGAAgGAFg");
	this.shape_24.setTransform(-1.05,44.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAOAYIAAgpIgbAAIAAApIgHAAIAAgvIApAAIAAAvg");
	this.shape_25.setTransform(-6.775,44.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAcAYIgRgYIgIAIIAAAQIgGAAIAAgQIgGgIIgRAYIgIAAIAUgcIgTgTIAJAAIAVAXIAAgXIAGAAIAAAXIAWgXIAIAAIgSATIAVAcg");
	this.shape_26.setTransform(-15.1,44.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_27.setTransform(-21.475,44.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AATAeIAAgMIglAAIAAAMIgHAAIAAgSIADAAIABgBIACgEIADgFIACgHIABgKIAAgOIAgAAIAAApIAHAAIAAASgAgGgPQAAAIgCAHQgCAGgCADIgCADIAaAAIAAgjIgSAAg");
	this.shape_28.setTransform(-26.775,45.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRASQgGgHgBgLQABgJAGgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgGAFAAAHQAAAHAGAGQAFAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_29.setTransform(-32.25,44.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAHAAIAAAHIAAgBIADgBIADgDIAFgCIAEgBQAKAAAGAHQAIAIgBAKQABAJgIAIQgGAHgKAAIgEgBIgFgCIgDgDIgDgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAFAAQAGAAAGgFQAEgFAAgHQAAgIgEgFQgGgFgGAAQgFAAgFAFg");
	this.shape_30.setTransform(-37.9,45.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAOAYIAAgpIgbAAIAAApIgHAAIAAgvIApAAIAAAvg");
	this.shape_31.setTransform(-43.875,44.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_32.setTransform(-51.325,44.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAYIgCgBIgBAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgDACgDgBg");
	this.shape_33.setTransform(-56.9,44.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_34.setTransform(-62.025,44.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AATAeIAAgMIglAAIAAAMIgHAAIAAgSIADAAIABgBIACgEIADgFIACgHIABgKIAAgOIAgAAIAAApIAHAAIAAASgAgGgPQAAAIgCAHQgCAGgCADIgCADIAaAAIAAgjIgSAAg");
	this.shape_35.setTransform(-67.675,45.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_36.setTransform(-72.5,44.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgRASQgGgHAAgLQAAgJAGgIQAIgHAJAAQAKAAAHAHQAIAIgBAJQABALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgFAFgBAHQABAHAFAGQAFAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_37.setTransform(-77.6,44.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AASAYIAAgiIgSAUIgRgUIAAAiIgHAAIAAgvIAGAAIASAXIATgXIAGAAIAAAvg");
	this.shape_38.setTransform(-85.55,44.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_39.setTransform(-91.525,44.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgXAjIAAhEIAHAAIAAAHIABgBIADgBIADgDIAEgCIAFgBQAJAAAIAHQAGAIABAKQgBAJgGAIQgIAHgJAAIgFgBIgEgCIgDgDIgDgBIgBgBIAAAcgAgKgWQgFAFgBAIQABAHAFAFQAFAFAFAAQAHAAAEgFQAGgFAAgHQAAgIgGgFQgEgFgHAAQgFAAgFAFg");
	this.shape_40.setTransform(-96.7,45.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_41.setTransform(-102.575,44.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAbAYIgRgYIgHAIIAAAQIgFAAIAAgQIgHgIIgRAYIgJAAIAVgcIgTgTIAJAAIAWAXIAAgXIAFAAIAAAXIAWgXIAJAAIgTATIAVAcg");
	this.shape_42.setTransform(-108.95,44.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AATAeIAAgMIglAAIAAAMIgHAAIAAgSIADAAIABgBIACgEIADgFIACgHIABgKIAAgOIAgAAIAAApIAHAAIAAASgAgGgPQAAAIgCAHQgCAGgCADIgCADIAaAAIAAgjIgSAAg");
	this.shape_43.setTransform(-115.475,45.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_44.setTransform(-120.825,44.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_45.setTransform(-126.425,44.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_46.setTransform(-132.025,44.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AARAYIAAgiIgRAUIgRgUIAAAiIgHAAIAAgvIAGAAIASAXIATgXIAGAAIAAAvg");
	this.shape_47.setTransform(-138,44.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AANAYIgQgYIgKAKIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_48.setTransform(139.075,33.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAHAAIAAAQIAMAAQAIAAAFAFQAFADgBAHQABAHgFAEQgFAFgIAAgAgLASIAMAAQAFgBACgCQAEgDAAgEQAAgEgEgDQgCgCgFABIgMAAg");
	this.shape_49.setTransform(131.3,33.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgHQAHgIAJAAQAGAAAEACIAIAFIABACIgEAGIgBgBIgCgDIgDgCIgEgBIgFgBQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAFgFIACgCIAFAFIgBABIgCACIgFADIgFADIgHABQgJAAgHgHg");
	this.shape_50.setTransform(126.2,33.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgHQAHgIAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_51.setTransform(120.825,33.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAYIAAgoIgRAAIAAgHIApAAIAAAHIgSAAIAAAog");
	this.shape_52.setTransform(115.85,33.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAOAjIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvgAgJgYQgDgEAAgGIAFAAQAAAEACADQACACADAAQAEAAACgCQACgDAAgEIAGAAQAAAGgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_53.setTransform(110.75,32.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_54.setTransform(105.125,33.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAcAeIAAgMIg+AAIAAgvIAHAAIAAApIAVAAIAAgpIAGAAIAAApIAUAAIAAgpIAHAAIAAApIAIAAIAAASg");
	this.shape_55.setTransform(98.975,34.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_56.setTransform(91.975,33.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgXAjIAAhEIAHAAIAAAHIABAAIACgCIAEgDIAEgCIAFgBQAKAAAHAIQAGAHABAKQgBAJgGAIQgHAHgKAAIgFgBIgEgCIgEgDIgCgBIgBgBIAAAcgAgKgWQgFAFgBAIQABAHAFAFQAFAFAFAAQAGAAAFgFQAGgFAAgHQAAgIgGgFQgFgFgGAAQgFAAgFAFg");
	this.shape_57.setTransform(86.8,34.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgQAdQgHgIAAgPQAAggAYgFIAJgCIAGgCIABgBIAEAFQgEAEgPADQgHABgFAHQgFAGAAAJIAAgBIACgCIAEgCIAFgDIAFgBQAJAAAHAHQAHAGAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgIgAgKABQgFAEAAAIQAAAHAFAFQAEAGAGgBQAHABAFgGQAFgFAAgHQAAgIgFgEQgFgFgHAAQgGAAgEAFg");
	this.shape_58.setTransform(80.825,32.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgQASQgIgHAAgLQAAgJAIgHQAHgIAJAAQAKAAAIAIQAGAHABAJQgBALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAGgFAAgIQAAgHgGgFQgFgFgHAAQgGAAgGAFg");
	this.shape_59.setTransform(75,33.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgHAJIAIgTIAHAEIgKARg");
	this.shape_60.setTransform(68.2,36.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_61.setTransform(64.625,33.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgCAYIAAgoIgRAAIAAgHIAnAAIAAAHIgQAAIAAAog");
	this.shape_62.setTransform(60,33.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgHQAHgIAJAAQAFAAAFACIAHAFIACACIgEAGIgBgBIgCgDIgDgCIgEgBIgFgBQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgDADIgGADIgHABQgJAAgHgHg");
	this.shape_63.setTransform(55.3,33.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAOAjIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvgAgIgYQgFgEAAgGIAGAAQAAAEACADQACACADAAQAEAAACgCQACgDAAgEIAFAAQABAGgEAEQgEADgGAAQgFAAgDgDg");
	this.shape_64.setTransform(49.8,32.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgQAiIgCgBIgBAAIAAgGIAFABQAGAAADgHIADgIIgUguIAHAAIAPAlIAQglIAHAAIgWA2QgCAHgEADQgDADgFAAg");
	this.shape_65.setTransform(44.5,34.75);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgVAYIgCgBIAAAAIAAgHIAEABQADAAACgCQACgBABgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgDACgDgBg");
	this.shape_66.setTransform(38.9,33.75);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_67.setTransform(33.775,33.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAcAYIgSgYIgHAIIAAAQIgGAAIAAgQIgGgIIgRAYIgIAAIAUgcIgTgTIAJAAIAVAXIAAgXIAGAAIAAAXIAWgXIAJAAIgTATIAVAcg");
	this.shape_68.setTransform(27.75,33.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgHQAHgIAJAAQAKAAAIAIQAGAHAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAGgFQAEgFABgIQgBgHgEgFQgGgFgHAAQgGAAgGAFg");
	this.shape_69.setTransform(21.25,33.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAOAYIAAgoIgbAAIAAAoIgHAAIAAgvIApAAIAAAvg");
	this.shape_70.setTransform(15.525,33.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgHAJIAIgTIAHAEIgLARg");
	this.shape_71.setTransform(8.75,36.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgPAYIAAgvIAfAAIAAAHIgYAAIAAAog");
	this.shape_72.setTransform(6.25,33.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgQAiIgDgBIAAAAIAAgGIAFABQAHAAACgHIACgIIgTguIAIAAIAOAlIAPglIAIAAIgWA2QgCAHgEADQgDADgFAAg");
	this.shape_73.setTransform(1.45,34.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgVAYIgBgBIgBAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgDACgDgBg");
	this.shape_74.setTransform(-4.15,33.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgHQAHgIAJAAQAGAAAFACIAHAFIACACIgGAGIAAgBIgCgDIgCgCIgFgBIgFgBQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAFgFIACgCIAFAFIgBABIgCACIgFADIgFADIgHABQgJAAgHgHg");
	this.shape_75.setTransform(-9,33.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgQAiIgDgBIAAAAIAAgGIAFABQAHAAACgHIACgIIgTguIAIAAIAOAlIAPglIAIAAIgWA2QgCAHgDADQgEADgFAAg");
	this.shape_76.setTransform(-14.05,34.75);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgKAsIACgCIADgGIAFgJIADgMIABgPQABgGgCgIQgCgHgBgFIgFgJIgDgGIgCgCIAFgDIACACIADAGIAFAKIAEANQACAIAAAHIgBAQIgFANIgEAJIgEAHIgCACg");
	this.shape_77.setTransform(-20.95,33.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_78.setTransform(-25.3,33.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgUAYIgCgBIgBAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgCACgEgBg");
	this.shape_79.setTransform(-31.35,33.75);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_80.setTransform(-36.6,33.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AADAtIgDgGIgEgKQgDgFgBgIQgCgIAAgIQAAgHACgIIAEgNIAEgJIAEgHIABgCIAGADIgBACIgFAGIgEAJIgDAMQgBAIgBAGQABAIABAGQACAIABAFIAEAJIAFAGIABACIgGADg");
	this.shape_81.setTransform(-40.85,33.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_82.setTransform(-48.3,33.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAVAAQAGAAAEAEQAEADAAAGQAAADgBACIgDAEIgCABIABAAIACAAIADACIABADIABAFQAAAGgEAEQgEAEgHAAgAgLASIAPAAQAEAAACgCQACgCAAgFQAAgEgCgCQgCgCgEAAIgPAAgAgLgEIAOAAQAHABAAgHQAAgGgHAAIgOAAg");
	this.shape_83.setTransform(-56.275,33.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgRASQgGgHAAgLQAAgJAGgHQAIgIAJAAQAKAAAHAIQAIAHgBAJQABALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgFAFgBAHQABAHAFAGQAFAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_84.setTransform(-61.85,33.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAHAAIAAAHIAAAAIACgCIAEgDIAFgCIAFgBQAIAAAHAIQAIAHgBAKQABAJgIAIQgHAHgIAAIgFgBIgFgCIgEgDIgCgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAGAAQAFAAAGgFQAEgFAAgHQAAgIgEgFQgGgFgFAAQgGAAgFAFg");
	this.shape_85.setTransform(-67.5,34.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_86.setTransform(-73.375,33.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAVAAQAGAAAEAEQAEADAAAGQAAADgBACIgDAEIgCABIABAAIACAAIADACIABADIABAFQAAAGgEAEQgEAEgHAAgAgLASIAPAAQAEAAACgCQACgCAAgFQAAgEgCgCQgCgCgEAAIgPAAgAgLgEIAOAAQAHABAAgHQAAgGgHAAIgOAAg");
	this.shape_87.setTransform(-78.225,33.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgRASQgGgHAAgLQAAgJAGgHQAIgIAJAAQAKAAAHAIQAIAHgBAJQABALgIAHQgHAHgKAAQgJAAgIgHgAgMgMQgEAFgBAHQABAHAEAGQAGAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgGAFg");
	this.shape_88.setTransform(-83.8,33.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgDAYIAAgoIgRAAIAAgHIAoAAIAAAHIgRAAIAAAog");
	this.shape_89.setTransform(-88.9,33.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAOAYIgOgUIgNAUIgIAAIASgYIgRgXIAJAAIALARIANgRIAIAAIgQAXIASAYg");
	this.shape_90.setTransform(-96.15,33.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AATAYIAAgvIAHAAIAAAvgAgZAYIAAgvIAHAAIAAAQIAMAAQAHAAAFAFQAEADAAAHQAAAHgEAEQgFAFgHAAgAgSASIAMAAQAFgBABgCQADgDAAgEQAAgEgDgDQgBgCgFABIgMAAg");
	this.shape_91.setTransform(-101.925,33.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_92.setTransform(-108.175,33.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_93.setTransform(-113.875,33.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_94.setTransform(-119.475,33.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgGAYIgFgCIgDgDIgDgBIAAgBIAEgFIACACIAEADQAEABADAAQAFAAADgBQADgDAAgEQAAgDgDgDQgDgCgFAAIgFAAIAAgFIAFAAQAEAAADgCQACgCAAgDQAAgEgCgCQgDgBgEAAQgDgBgDACIgEACIgBACIgFgFIACgCIAFgDQAFgCAEAAQAHAAAFAEQAEAEAAAGIAAAEIgCADIgDACIgBABIgBAAIABAAIACAAIADACIACAEIABAEQAAAGgFAFQgEAEgJAAIgGgBg");
	this.shape_95.setTransform(-124.175,33.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_96.setTransform(-128.975,33.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AANAYIgQgYIgKAKIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_97.setTransform(-133.525,33.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgQAiIgDgBIAAAAIAAgGIAFABQAHAAACgHIADgIIgUguIAIAAIAOAlIAPglIAIAAIgWA2QgCAHgDADQgEADgFAAg");
	this.shape_98.setTransform(-138.8,34.75);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_99.setTransform(138.25,22.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_100.setTransform(133.15,22.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAGAAAEACIAIAFIABACIgEAGIgBgBIgCgDIgDgCIgEgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGABQAEgBAEgBIAFgFIACgCIAFAFIgBABIgCADIgFACIgFADIgHABQgJAAgHgHg");
	this.shape_101.setTransform(128.45,22.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGABQAHgBAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_102.setTransform(122.95,22.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AASAYIAAgiIgSAUIgQgUIAAAiIgIAAIAAgvIAGAAIASAXIATgXIAGAAIAAAvg");
	this.shape_103.setTransform(116.85,22.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_104.setTransform(110.75,22.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgRASQgGgHgBgLQABgJAGgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgGAFAAAHQAAAHAGAGQAFAFAGABQAHgBAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_105.setTransform(105,22.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgRAAIAAgGIApAAIAAAGIgRAAIAAApg");
	this.shape_106.setTransform(99.9,22.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAFAAAGACIAGAFIADACIgGAGIAAgBIgCgDIgCgCIgFgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGABQAEgBAEgBIAFgFIACgCIAFAFIgBABIgDADIgDACIgGADIgHABQgJAAgHgHg");
	this.shape_107.setTransform(95.2,22.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_108.setTransform(85.8,22.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_109.setTransform(76.15,22.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_110.setTransform(70.4,22.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AANAYIAAgUQgGAFgHAAQgIAAgFgGQgFgEgBgIIAAgOIAHAAIAAAOQABAFADAEQADACAFAAIAGgBIAFgBIACgBIAAgWIAHAAIAAAvg");
	this.shape_111.setTransform(64.8,22.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_112.setTransform(59.3,22.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgUAYIgCgBIgBAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgCACgEgBg");
	this.shape_113.setTransform(53.25,22.95);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBABIgCABIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEABQAGgBAEgEQAFgEAAgIIAAgCg");
	this.shape_114.setTransform(48.125,22.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_115.setTransform(42.875,22.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQAKAAAIAHQAGAIABAJQgBALgGAHQgIAHgKAAQgJAAgIgHgAgLgMQgGAFAAAHQAAAHAGAGQAFAFAGABQAHgBAFgFQAGgFAAgIQAAgHgGgFQgFgFgHAAQgGAAgFAFg");
	this.shape_116.setTransform(33.25,22.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_117.setTransform(23.6,22.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_118.setTransform(17.85,22.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AARAeIAAgMIgoAAIAAgvIAHAAIAAApIAZAAIAAgpIAHAAIAAApIAIAAIAAASg");
	this.shape_119.setTransform(12.3,23.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBABIgCABIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEABQAGgBAEgEQAFgEAAgIIAAgCg");
	this.shape_120.setTransform(6.375,22.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AASAYIAAgiIgSAUIgQgUIAAAiIgIAAIAAgvIAGAAIASAXIATgXIAGAAIAAAvg");
	this.shape_121.setTransform(0.75,22.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAGAAIAAAHIABgBIADgBIADgDIAFgCIAEgBQAJAAAHAHQAIAIAAAKQAAAJgIAIQgHAHgJAAIgEgBIgFgCIgDgDIgDgBIgBgBIAAAcgAgKgWQgGAFAAAIQAAAHAGAFQAFAFAFABQAHgBAEgFQAGgFgBgHQABgIgGgFQgEgFgHAAQgFAAgFAFg");
	this.shape_122.setTransform(-5.25,23.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAHAHQAIAIgBAJQABALgIAHQgHAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGABQAHgBAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgGAFg");
	this.shape_123.setTransform(-11.25,22.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgDAtIAAgUQgMABgHgIQgIgHAAgLQAAgJAIgIQAHgGAMAAIAAgWIAHAAIAAAWQALAAAIAGQAIAIAAAJQAAALgIAHQgIAIgLgBIAAAUgAAEATQAIAAAGgFQAGgFAAgJQAAgGgGgGQgGgFgIAAgAgSgMQgFAGAAAGQAAAJAFAFQAGAFAJAAIAAgkQgJAAgGAFg");
	this.shape_124.setTransform(-17.65,22.85);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_125.setTransform(-24.025,22.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_126.setTransform(-29.75,22.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAOAjIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvgAgIgYQgFgEAAgGIAGAAQAAAEACADQACACADAAQAEAAACgCQACgDAAgEIAFAAQABAGgEAEQgEADgGAAQgFAAgDgDg");
	this.shape_127.setTransform(-39.4,21.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgQASQgIgHAAgLQAAgJAIgIQAHgHAJAAQAKAAAIAHQAGAIABAJQgBALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGABQAHgBAFgFQAGgFAAgIQAAgHgGgFQgFgFgHAAQgGAAgGAFg");
	this.shape_128.setTransform(-45.15,22.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_129.setTransform(-50.875,22.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgQAdQgHgIAAgPQAAggAYgFIAJgCIAGgCIABgBIAEAFQgEAEgPADQgHABgFAHQgFAGAAAJIAAgBIACgCIAEgCIAFgDIAFgBQAJAAAHAHQAHAGAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgIgAgKABQgFAEAAAIQAAAHAFAFQAEAGAGAAQAHAAAFgGQAFgFAAgHQAAgIgFgEQgFgFgHAAQgGAAgEAFg");
	this.shape_130.setTransform(-56.575,21.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgRASQgGgHgBgLQABgJAGgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgGAFAAAHQAAAHAGAGQAFAFAGABQAHgBAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_131.setTransform(-62.4,22.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAHAAIAAAHIAAgBIADgBIADgDIAFgCIAEgBQAKAAAGAHQAIAIgBAKQABAJgIAIQgGAHgKAAIgEgBIgFgCIgDgDIgDgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAFABQAGgBAGgFQAEgFAAgHQAAgIgEgFQgGgFgGAAQgFAAgFAFg");
	this.shape_132.setTransform(-68.05,23.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AATAeIAAgMIglAAIAAAMIgHAAIAAgSIADAAIABgBIACgEIADgFIACgHIABgKIAAgOIAgAAIAAApIAHAAIAAASgAgGgPQAAAIgCAHQgCAGgCADIgCADIAaAAIAAgjIgSAAg");
	this.shape_133.setTransform(-74.075,23.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGABQAHgBAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_134.setTransform(-79.55,22.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAOAYIAAgpIgbAAIAAApIgHAAIAAgvIApAAIAAAvg");
	this.shape_135.setTransform(-85.275,22.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AAMAYIAAgQIgMAAIgLAQIgHAAIALgRIgBgBIgDgBIgDgDIgCgDIgBgGQAAgHAEgEQAFgFAIAAIAUAAIAAAvgAgHgOQgDADgBAEQABAEADADQACACAFgBIAMAAIAAgSIgMAAQgFABgCACg");
	this.shape_136.setTransform(-94.75,22.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_137.setTransform(-99.95,22.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_138.setTransform(-105.675,22.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGAAQAEgBAEgBIAGgFIABgCIAFAFIgBABIgDADIgEACIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_139.setTransform(-111.275,22.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AANAYIAAgUQgGAFgHAAQgIAAgFgGQgGgEAAgIIAAgOIAIAAIAAAOQAAAFADAEQADACAFAAIAGgBIAFgBIACgBIAAgWIAGAAIAAAvg");
	this.shape_140.setTransform(-116.75,22.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgQAiIgDgBIAAAAIAAgGIAFABQAGAAADgHIADgIIgUguIAHAAIAPAlIAQglIAHAAIgWA2QgCAHgDADQgEADgFAAg");
	this.shape_141.setTransform(-121.8,23.95);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgUAYIgDgBIAAAAIAAgHIAEABQADAAACgCQACgBABgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgCACgEgBg");
	this.shape_142.setTransform(-127.4,22.95);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGABQAHgBAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_143.setTransform(-132.65,22.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAOAYIAAgpIgbAAIAAApIgHAAIAAgvIApAAIAAAvg");
	this.shape_144.setTransform(-138.375,22.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AANAYIAAgQIgOAAIgKAQIgIAAIAMgRIgBgBIgDgBIgDgDIgCgDIgBgGQAAgHAEgEQAFgFAIAAIAUAAIAAAvgAgHgOQgEADAAAEQAAAEAEADQACACAFgBIANAAIAAgSIgNAAQgFABgCACg");
	this.shape_145.setTransform(138.25,12.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgVAYIgBgBIgBAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgDACgDgBg");
	this.shape_146.setTransform(132.75,12.15);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAbArIAAgQIg0AAIAAAQIgIAAIAAgXIAEAAIACgBIACgEIAEgIQACgFABgGQABgIABgIIAAgWIAqAAIAAA+IAIAAIAAAXgAgJgUIgBAPIgDAMIgDAIIgEAEIgBABIAnAAIAAg3IgbAAg");
	this.shape_147.setTransform(126.75,11.75);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_148.setTransform(118.45,14.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgPAYIAAgvIAfAAIAAAGIgYAAIAAApg");
	this.shape_149.setTransform(115.7,12.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgSAaQgJgKAAgQQAAgPAJgKQAHgKALAAQALAAAJAKQAIAKAAAPQAAAQgIAKQgIAKgMAAQgLAAgHgKgAgOgVQgFAJgBAMQABAOAFAHQAHAIAHAAQAJAAAFgIQAHgHgBgOQABgMgHgJQgFgHgJAAQgHAAgHAHg");
	this.shape_150.setTransform(110,11);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgWAjQAAgGAEgGQACgGAEgDIAJgHIAIgHQAEgBADgFQADgEAAgEQAAgGgEgEQgEgDgHgBQgDABgDABIgDACIgEAFIgBACIAAABIgHgCIABgCIACgEIADgFIAHgEQAEgCAEAAQAKAAAHAHQAFAFAAAJQAAAFgCAFQgCAEgEACIgHAGIgIAGQgEACgDAEQgDAEgCAEIAjAAIAAAHg");
	this.shape_151.setTransform(103.8,10.95);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgTAaQgIgKAAgQQAAgPAIgKQAJgKAKAAQAMAAAHAKQAJAKAAAPQAAAQgIAKQgIAKgMAAQgKAAgJgKgAgNgVQgHAJABAMQgBAOAHAHQAFAIAIAAQAIAAAHgIQAFgHAAgOQAAgMgFgJQgHgHgIAAQgIAAgFAHg");
	this.shape_152.setTransform(97.8,11);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgVAjQAAgGACgGQADgGAFgDIAJgHIAHgHQAFgBACgFQADgEAAgEQAAgGgEgEQgEgDgHgBQgCABgDABIgFACIgCAFIgBACIgBABIgGgCIAAgCIACgEIAEgFIAGgEQAEgCAEAAQAKAAAGAHQAHAFAAAJQgBAFgCAFQgCAEgDACIgIAGIgIAGQgEACgDAEQgDAEgCAEIAkAAIAAAHg");
	this.shape_153.setTransform(91.6,10.95);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_154.setTransform(87.95,14.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgQAdQgGgFgBgKQABgDABgDQABgDACgCIADgDIADgCIACAAIgCgBIgCgBIgCgDIgCgEIgBgFQAAgIAFgGQAHgFAHAAQAJAAAFAFQAHAGgBAIIgBAFIgBAEIgEADIgCABIgBABIACAAIADACIADADIADAFIABAGQAAAKgGAFQgHAHgKAAQgJAAgHgHgAgKAEQgFAFAAAFQAAAHAFADQAEAFAGAAQAHAAAEgFQAFgDAAgHQAAgFgFgFQgEgEgHAAQgFAAgFAEgAgIgYQgEACAAAGQAAAEAEAEQADADAFAAQAGAAAEgDQADgEAAgEQAAgGgDgCQgEgEgGAAQgFAAgDAEg");
	this.shape_155.setTransform(84,11);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgSAaQgJgKAAgQQAAgPAJgKQAHgKALAAQALAAAJAKQAIAKAAAPQAAAQgIAKQgJAKgLAAQgLAAgHgKgAgOgVQgFAJAAAMQAAAOAFAHQAHAIAHAAQAJAAAFgIQAHgHgBgOQABgMgHgJQgFgHgJAAQgHAAgHAHg");
	this.shape_156.setTransform(77.7,11);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgCAEQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_157.setTransform(73.3,14.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AADAjIAAg3IgMAAIAAgEIAGgBIADgDIADgDIABgCIABgBIAFAAIAABFg");
	this.shape_158.setTransform(70.225,11);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_159.setTransform(62.125,12.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_160.setTransform(56.875,12.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AATAYIAAgvIAHAAIAAAvgAgZAYIAAgvIAHAAIAAAQIAMAAQAHAAAFAFQAEADAAAHQAAAHgEAEQgFAFgHAAgAgSASIAMAAQAFgBABgCQADgDAAgEQAAgEgDgDQgBgCgFABIgMAAg");
	this.shape_161.setTransform(46.725,12.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_162.setTransform(40.475,12.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAIAAIAAAQIALAAQAIAAAFAFQAFADgBAHQABAHgFAEQgFAFgIAAgAgKASIALAAQAFgBACgCQADgDABgEQgBgEgDgDQgCgCgFABIgLAAg");
	this.shape_163.setTransform(35.35,12.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgVAYIgCgBIAAAAIAAgHIAEABQADAAACgCQACgBABgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgDACgDgBg");
	this.shape_164.setTransform(29.55,12.15);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_165.setTransform(24.425,12.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgRAAIAAgGIApAAIAAAGIgSAAIAAApg");
	this.shape_166.setTransform(19.45,12.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_167.setTransform(14.35,12.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAVAAQAGAAAEAEQAEADAAAGQAAADgBACIgDAEIgCABIABAAIACAAIADACIABADIABAFQAAAGgEAEQgEAEgHAAgAgLASIAPAAQAEAAACgCQACgCAAgEQAAgFgCgCQgCgCgEAAIgPAAgAgLgEIAOAAQAHABAAgHQAAgGgHgBIgOAAg");
	this.shape_168.setTransform(9.025,12.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_169.setTransform(4.1,12.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAGAAAEACIAIAFIABACIgEAGIgBgBIgCgDIgDgCIgEgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAGgFIABgCIAFAFIgBABIgCACIgFADIgFADIgHABQgJAAgHgHg");
	this.shape_170.setTransform(-0.6,12.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAOAjIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvgAgIgYQgFgEAAgGIAGAAQAAAEACADQACACADAAQAEAAACgCQACgDAAgEIAFAAQABAGgEAEQgEADgGAAQgFAAgDgDg");
	this.shape_171.setTransform(-6.1,11);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_172.setTransform(-11.725,12.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AATAeIAAgMIglAAIAAAMIgHAAIAAgSIADAAIABgBIACgEIADgFIACgHIABgKIAAgOIAgAAIAAApIAHAAIAAASgAgGgPQAAAIgCAHQgCAGgCADIgCADIAaAAIAAgjIgSAAg");
	this.shape_173.setTransform(-17.375,12.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAHAAIAAAHIAAgBIADgBIADgDIAFgCIAEgBQAKAAAGAHQAIAIgBAKQABAJgIAIQgGAHgKAAIgEgBIgFgCIgDgDIgDgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAFAAQAGAAAGgFQAEgFAAgHQAAgIgEgFQgGgFgGAAQgFAAgFAFg");
	this.shape_174.setTransform(-26.65,13.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_175.setTransform(-32.65,12.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_176.setTransform(-37.75,12.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAHAAIAAAHIAAgBIACgBIAEgDIAFgCIAFgBQAIAAAHAHQAIAIgBAKQABAJgIAIQgHAHgIAAIgFgBIgFgCIgEgDIgCgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAGAAQAFAAAGgFQAEgFAAgHQAAgIgEgFQgGgFgFAAQgGAAgFAFg");
	this.shape_177.setTransform(-42.75,13.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_178.setTransform(-48.625,12.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAVAAQAGAAAEAEQAEADAAAGQAAADgBACIgDAEIgCABIABAAIACAAIADACIABADIABAFQAAAGgEAEQgEAEgHAAgAgLASIAPAAQAEAAACgCQACgCAAgEQAAgFgCgCQgCgCgEAAIgPAAgAgLgEIAOAAQAHABAAgHQAAgGgHgBIgOAAg");
	this.shape_179.setTransform(-53.475,12.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AANAYIgQgYIgKAKIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_180.setTransform(-58.325,12.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_181.setTransform(-67.825,12.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_182.setTransform(-73.45,12.1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AANAYIAAgUQgGAFgHAAQgIAAgFgGQgGgEAAgIIAAgOIAIAAIAAAOQgBAFAEAEQADACAFAAIAHgBIAEgBIACgBIAAgWIAGAAIAAAvg");
	this.shape_183.setTransform(-79.05,12.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_184.setTransform(-84.55,12.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgVAYIgCgBIAAAAIAAgHIAEABQADAAACgCQACgBABgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgDACgDgBg");
	this.shape_185.setTransform(-90.6,12.15);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_186.setTransform(-95.725,12.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_187.setTransform(-100.975,12.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_188.setTransform(-110.6,12.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_189.setTransform(-120.125,12.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_190.setTransform(-125.375,12.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_191.setTransform(-130.975,12.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AAXArIAAgQIg1AAIAAhFIAHAAIAAA+IAlAAIAAg+IAIAAIAAA+IAJAAIAAAXg");
	this.shape_192.setTransform(-137.05,11.75);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_193.setTransform(140.05,3.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_194.setTransform(136.225,1.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_195.setTransform(130.975,1.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_196.setTransform(125.375,1.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_197.setTransform(119.775,1.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_198.setTransform(114.175,1.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AASAYIAAgiIgSAUIgQgUIAAAiIgIAAIAAgvIAGAAIASAXIATgXIAFAAIAAAvg");
	this.shape_199.setTransform(108.2,1.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgGAYIgFgCIgDgDIgDgBIAAgBIAEgFIACACIAEADQAEABADAAQAFAAADgBQADgDAAgEQAAgDgDgDQgDgCgFAAIgFAAIAAgFIAFAAQAEAAADgCQACgCAAgDQAAgEgCgCQgDgBgEAAQgDgBgDACIgEACIgBACIgFgFIACgCIAFgDQAFgCAEAAQAHAAAFAEQAEAEAAAGIAAAEIgCADIgDACIgBABIgBAAIABAAIACAAIADACIACAEIABAEQAAAGgFAFQgEAEgJAAIgGgBg");
	this.shape_200.setTransform(102.675,1.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_201.setTransform(97.75,1.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgRAYIAAgvIAHAAIAAAQIALAAQAIAAAFAFQAEADABAHQgBAHgEAEQgFAFgIAAgAgKASIALAAQAFgBADgCQACgDAAgEQAAgEgCgDQgDgCgFABIgLAAg");
	this.shape_202.setTransform(89.4,1.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_203.setTransform(84.55,1.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AATAYIAAgvIAHAAIAAAvgAgZAYIAAgvIAHAAIAAAQIAMAAQAHAAAFAFQAEADAAAHQAAAHgEAEQgFAFgHAAgAgSASIAMAAQAFgBABgCQADgDAAgEQAAgEgDgDQgBgCgFABIgMAAg");
	this.shape_204.setTransform(78.925,1.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgQAdQgHgIAAgPQAAggAYgFIAJgCIAGgCIABgBIAEAFQgEAEgPADQgHABgFAHQgFAGAAAJIAAgBIACgCIAEgCIAFgDIAFgBQAJAAAHAHQAHAGAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgIgAgKABQgFAEAAAIQAAAHAFAFQAEAGAGgBQAHABAFgGQAFgFAAgHQAAgIgFgEQgFgFgHAAQgGAAgEAFg");
	this.shape_205.setTransform(72.675,0.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_206.setTransform(64.3,1.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_207.setTransform(59.325,1.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AAcAYIgSgXIgHAHIAAAQIgGAAIAAgQIgGgHIgRAXIgIAAIAUgcIgTgTIAJAAIAVAXIAAgXIAGAAIAAAXIAWgXIAJAAIgTATIAVAcg");
	this.shape_208.setTransform(52.95,1.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAGgFQAEgFABgIQgBgHgEgFQgGgFgHAAQgGAAgGAFg");
	this.shape_209.setTransform(46.45,1.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AASAYIAAgiIgSAUIgQgUIAAAiIgIAAIAAgvIAGAAIASAXIATgXIAGAAIAAAvg");
	this.shape_210.setTransform(40.35,1.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_211.setTransform(31.05,1.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgHAJIAIgTIAHAEIgLARg");
	this.shape_212.setTransform(23.7,3.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_213.setTransform(20.125,1.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgRAAIAAgGIAoAAIAAAGIgRAAIAAApg");
	this.shape_214.setTransform(15.5,1.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AANAYIgQgXIgKAJIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_215.setTransform(11.125,1.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_216.setTransform(5.525,1.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgLAYIAAgpIgMAAIAAgGIATAAIAAAQIALAAQAIAAAFAFQAEADAAAHQAAAHgEAEQgFAFgIAAgAgEASIALAAQAFgBADgCQACgDAAgEQAAgEgCgDQgDgCgFABIgLAAg");
	this.shape_217.setTransform(-0.1,1.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgQAdQgHgIAAgPQAAggAYgFIAJgCIAGgCIABgBIAEAFQgEAEgPADQgHABgFAHQgFAGAAAJIAAgBIACgCIAEgCIAFgDIAFgBQAJAAAHAHQAHAGAAAKQAAAKgHAHQgHAHgKAAQgJAAgHgIgAgKABQgFAEAAAIQAAAHAFAFQAEAGAGgBQAHABAFgGQAFgFAAgHQAAgIgFgEQgFgFgHAAQgGAAgEAFg");
	this.shape_218.setTransform(-5.375,0.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgRASQgGgHgBgLQABgJAGgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgGAFAAAHQAAAHAGAGQAFAFAGAAQAHAAAFgFQAGgFgBgIQABgHgGgFQgFgFgHAAQgGAAgFAFg");
	this.shape_219.setTransform(-11.2,1.3);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AANAYIgQgXIgKAJIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_220.setTransform(-19.425,1.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_221.setTransform(-25.15,1.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgRAAIAAgGIApAAIAAAGIgRAAIAAApg");
	this.shape_222.setTransform(-30.25,1.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAFAAAGACIAGAFIADACIgGAGIAAgBIgCgDIgDgCIgEgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgDADIgGADIgHABQgJAAgHgHg");
	this.shape_223.setTransform(-34.95,1.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_224.setTransform(-40.45,1.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAGAAIAAAHIABgBIADgBIADgDIAFgCIAEgBQAKAAAGAHQAIAIAAAKQAAAJgIAIQgGAHgKAAIgEgBIgFgCIgDgDIgDgBIgBgBIAAAcgAgKgWQgGAFAAAIQAAAHAGAFQAFAFAFAAQAGAAAGgFQAEgFAAgHQAAgIgEgFQgGgFgGAAQgFAAgFAFg");
	this.shape_225.setTransform(-46.1,2.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_226.setTransform(-51.975,1.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgRAAIAAgGIAoAAIAAAGIgRAAIAAApg");
	this.shape_227.setTransform(-56.95,1.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AANAYIgQgXIgKAJIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_228.setTransform(-61.325,1.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_229.setTransform(-66.925,1.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAHAAIAAAHIAAgBIADgBIADgDIAFgCIAEgBQAKAAAGAHQAIAIgBAKQABAJgIAIQgGAHgKAAIgEgBIgFgCIgDgDIgDgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAFAAQAGAAAGgFQAEgFAAgHQAAgIgEgFQgGgFgGAAQgFAAgFAFg");
	this.shape_230.setTransform(-72.1,2.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_231.setTransform(-77.975,1.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAOAYIgOgUIgNAUIgIAAIASgYIgRgXIAJAAIALARIAMgRIAJAAIgQAXIASAYg");
	this.shape_232.setTransform(-82.75,1.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_233.setTransform(-91.2,1.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AANAYIAAgQIgOAAIgKAQIgIAAIALgRIgBgBIgCgBIgDgDIgDgDIgBgGQABgHAFgEQAEgFAIAAIAUAAIAAAvgAgIgOQgDADAAAEQAAAEADADQADACAFgBIANAAIAAgSIgNAAQgFABgDACg");
	this.shape_234.setTransform(-100,1.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_235.setTransform(-105.2,1.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_236.setTransform(-110.925,1.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_237.setTransform(-116.525,1.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAGAAAEACIAIAFIABACIgFAGIAAgBIgCgDIgCgCIgFgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAFgFIACgCIAFAFIgBABIgCACIgFADIgFADIgHABQgJAAgHgHg");
	this.shape_238.setTransform(-121.4,1.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_239.setTransform(-126.9,1.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAOAYIAAgpIgbAAIAAApIgHAAIAAgvIApAAIAAAvg");
	this.shape_240.setTransform(-132.625,1.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgRASQgGgHAAgLQAAgJAGgIQAIgHAJAAQAKAAAHAHQAIAIgBAJQABALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgFAFgBAHQABAHAFAGQAFAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_241.setTransform(-138.35,1.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAHAHQAIAIgBAJQABALgIAHQgHAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgGAFg");
	this.shape_242.setTransform(138.15,-9.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgPAYIAAgvIAfAAIAAAGIgYAAIAAApg");
	this.shape_243.setTransform(133.6,-9.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_244.setTransform(128.35,-9.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_245.setTransform(122.625,-9.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgUAYIgDgBIAAAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgCACgEgBg");
	this.shape_246.setTransform(116.6,-9.45);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_247.setTransform(111.35,-9.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AAOAYIAAgpIgbAAIAAApIgHAAIAAgvIApAAIAAAvg");
	this.shape_248.setTransform(105.625,-9.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_249.setTransform(96.8,-9.5);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgQASQgIgHAAgLQAAgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_250.setTransform(87.95,-9.5);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgPAYIAAgvIAfAAIAAAGIgYAAIAAApg");
	this.shape_251.setTransform(83.4,-9.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgQASQgIgHAAgLQAAgJAIgIQAHgHAJAAQAKAAAIAHQAGAIABAJQgBALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAGgFAAgIQAAgHgGgFQgFgFgHAAQgGAAgGAFg");
	this.shape_252.setTransform(78.15,-9.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_253.setTransform(72.425,-9.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AANAYIAAgUQgGAFgHAAQgIAAgFgGQgGgEAAgIIAAgOIAIAAIAAAOQAAAFADAEQADACAFAAIAHgBIAEgBIACgBIAAgWIAGAAIAAAvg");
	this.shape_254.setTransform(66.85,-9.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgRASQgGgHgBgLQABgJAGgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgGAFAAAHQAAAHAGAGQAFAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_255.setTransform(61.35,-9.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgRAAIAAgGIApAAIAAAGIgRAAIAAApg");
	this.shape_256.setTransform(56.25,-9.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgRAAIAAgGIApAAIAAAGIgSAAIAAApg");
	this.shape_257.setTransform(48.7,-9.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_258.setTransform(43.6,-9.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AAcAYIgRgYIgIAIIAAAQIgGAAIAAgQIgGgIIgRAYIgIAAIAUgcIgSgTIAIAAIAVAXIAAgXIAGAAIAAAXIAWgXIAIAAIgSATIAVAcg");
	this.shape_259.setTransform(37.1,-9.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAHAAIAAAHIAAgBIACgBIAEgDIAEgCIAGgBQAIAAAHAHQAIAIgBAKQABAJgIAIQgHAHgIAAIgGgBIgEgCIgEgDIgCgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAGAAQAGAAAFgFQAEgFAAgHQAAgIgEgFQgFgFgGAAQgGAAgFAFg");
	this.shape_260.setTransform(30.7,-8.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_261.setTransform(24.825,-9.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AATAeIAAgMIglAAIAAAMIgHAAIAAgSIADAAIABgBIACgEIADgFIACgHIABgKIAAgOIAgAAIAAApIAHAAIAAASgAgGgPQAAAIgCAHQgCAGgCADIgCADIAaAAIAAgjIgSAAg");
	this.shape_262.setTransform(19.175,-8.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_263.setTransform(13.7,-9.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAFAAAGACIAGAFIADACIgGAGIAAgBIgCgDIgCgCIgFgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAFgFIACgCIAFAFIgBABIgDACIgDADIgGADIgHABQgJAAgHgHg");
	this.shape_264.setTransform(8.35,-9.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_265.setTransform(-0.125,-9.5);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_266.setTransform(-5.725,-9.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgHAJIAIgTIAHAEIgLARg");
	this.shape_267.setTransform(-12.95,-6.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgXAjIAAhEIAIAAIAAAHIAAgBIACgBIAEgDIAEgCIAGgBQAIAAAHAHQAIAIgBAKQABAJgIAIQgHAHgIAAIgGgBIgEgCIgEgDIgCgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAGAAQAGAAAFgFQAEgFAAgHQAAgIgEgFQgFgFgGAAQgGAAgFAFg");
	this.shape_268.setTransform(-16.55,-8.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_269.setTransform(-22.425,-9.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_270.setTransform(-27.4,-9.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AANAYIgQgYIgKAKIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_271.setTransform(-31.775,-9.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_272.setTransform(-37.375,-9.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgXAjIAAhEIAIAAIAAAHIAAgBIACgBIAEgDIAEgCIAGgBQAIAAAIAHQAGAIAAAKQAAAJgGAIQgIAHgIAAIgGgBIgEgCIgEgDIgCgBIAAgBIAAAcgAgKgWQgFAFAAAIQAAAHAFAFQAFAFAGAAQAGAAAEgFQAFgFABgHQgBgIgFgFQgEgFgGAAQgGAAgFAFg");
	this.shape_273.setTransform(-42.55,-8.5);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_274.setTransform(-48.425,-9.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AAOAYIgOgUIgNAUIgIAAIASgYIgRgXIAIAAIAMARIANgRIAIAAIgQAXIASAYg");
	this.shape_275.setTransform(-53.2,-9.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AAOAjIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvgAgIgYQgFgEAAgGIAGAAQAAAEACADQACACADAAQAEAAACgCQACgDAAgEIAFAAQAAAGgDAEQgEADgGAAQgFAAgDgDg");
	this.shape_276.setTransform(-61.55,-10.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AATAYIAAgvIAHAAIAAAvgAgZAYIAAgvIAHAAIAAAQIAMAAQAHAAAFAFQAEADAAAHQAAAHgEAEQgFAFgHAAgAgSASIAMAAQAFgBABgCQADgDAAgEQAAgEgDgDQgBgCgFABIgMAAg");
	this.shape_277.setTransform(-67.825,-9.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_278.setTransform(-74.075,-9.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAHAAIAAAQIAMAAQAIAAAFAFQAFADAAAHQAAAHgFAEQgFAFgIAAgAgLASIAMAAQAFgBACgCQAEgDAAgEQAAgEgEgDQgCgCgFABIgMAAg");
	this.shape_279.setTransform(-79.2,-9.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgUAYIgDgBIAAAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgCACgEgBg");
	this.shape_280.setTransform(-85,-9.45);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_281.setTransform(-90.125,-9.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgQAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_282.setTransform(-95.1,-9.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_283.setTransform(-100.2,-9.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AARAYIAAgiIgRAUIgRgUIAAAiIgGAAIAAgvIAFAAIASAXIATgXIAFAAIAAAvg");
	this.shape_284.setTransform(-106.3,-9.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_285.setTransform(-112.4,-9.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AANAYIgQgYIgKAKIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_286.setTransform(-117.425,-9.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_287.setTransform(-123.025,-9.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_288.setTransform(-128.275,-9.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgGAYIgFgCIgDgDIgDgBIAAgBIAEgFIACACIAEADQAEABADAAQAFAAADgBQADgDAAgEQAAgDgDgDQgDgCgFAAIgFAAIAAgFIAFAAQAEAAADgCQACgCAAgDQAAgEgCgCQgDgBgEAAQgDgBgDACIgEACIgBACIgFgFIACgCIAFgDQAFgCAEAAQAHAAAFAEQAEAEAAAGIAAAEIgCADIgDACIgBABIgBAAIABAAIACAAIADACIACAEIABAEQAAAGgFAFQgEAEgJAAIgGgBg");
	this.shape_289.setTransform(-133.425,-9.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgRASQgGgHAAgLQAAgJAGgIQAIgHAJAAQAKAAAHAHQAIAIgBAJQABALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgFAFgBAHQABAHAFAGQAFAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_290.setTransform(-138.35,-9.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgRASQgGgHgBgLQABgJAGgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgGAFAAAHQAAAHAGAGQAFAFAGAAQAHAAAFgFQAGgFgBgIQABgHgGgFQgFgFgHAAQgGAAgFAFg");
	this.shape_291.setTransform(138.2,-20.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_292.setTransform(132.475,-20.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgSAYIAAgvIAHAAIAAAQIAMAAQAIAAAFAFQAFADAAAHQAAAHgFAEQgFAFgIAAgAgLASIAMAAQAFgBACgCQAEgDAAgEQAAgEgEgDQgCgCgFABIgMAAg");
	this.shape_293.setTransform(127.35,-20.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgUAYIgDgBIAAAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgCACgEgBg");
	this.shape_294.setTransform(121.55,-20.25);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_295.setTransform(116.425,-20.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgQAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_296.setTransform(111.45,-20.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_297.setTransform(106.35,-20.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AAMAYIAAgUQgFAFgHAAQgIAAgGgGQgEgEAAgIIAAgOIAHAAIAAAOQAAAFADAEQADACAFAAIAHgBIAEgBIABgBIAAgWIAHAAIAAAvg");
	this.shape_298.setTransform(100.75,-20.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgGASQgHgGgBgJIgLAAIAAAVIgHAAIAAgvIAHAAIAAAVIALAAQABgKAHgFQAGgHAJAAQAKAAAHAHQAHAIAAAJQAAAKgHAIQgHAHgKAAQgJAAgGgHgAgCgMQgFAFAAAHQAAAIAFAFQAEAFAHAAQAHAAAFgFQAFgFAAgIQAAgHgFgFQgFgFgHAAQgHAAgEAFg");
	this.shape_299.setTransform(94.425,-20.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgVAYIgBgBIgBAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgDACgDgBg");
	this.shape_300.setTransform(87.2,-20.25);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AANAYIgQgYIgKAKIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_301.setTransform(82.675,-20.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAFAAAFACIAHAFIACACIgEAGIgBgBIgCgDIgDgCIgEgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgDADIgGADIgHABQgJAAgHgHg");
	this.shape_302.setTransform(77.35,-20.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_303.setTransform(71.85,-20.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_304.setTransform(55.3,-20.3);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_305.setTransform(50.2,-20.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAGAAAEACIAHAFIACACIgEAGIgBgBIgCgDIgDgCIgEgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAGgFIABgCIAFAFIgBABIgCACIgFADIgFADIgHABQgJAAgHgHg");
	this.shape_306.setTransform(44.85,-20.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgQASQgIgHAAgLQAAgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_307.setTransform(39.35,-20.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_308.setTransform(33.625,-20.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AAMAYIAAgQIgMAAIgKAQIgIAAIAKgRIAAgBIgDgBIgDgDIgDgDIAAgGQAAgHAEgEQAFgFAIAAIATAAIAAAvgAgIgOQgCADAAAEQAAAEACADQADACAFgBIAMAAIAAgSIgMAAQgFABgDACg");
	this.shape_309.setTransform(16.6,-20.3);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_310.setTransform(11.4,-20.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AARAeIAAgMIgoAAIAAgvIAHAAIAAApIAaAAIAAgpIAGAAIAAApIAIAAIAAASg");
	this.shape_311.setTransform(5.85,-19.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_312.setTransform(-0.075,-20.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AARAYIAAgiIgRAUIgRgUIAAAiIgHAAIAAgvIAGAAIASAXIATgXIAGAAIAAAvg");
	this.shape_313.setTransform(-5.7,-20.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAHAAIAAAHIAAgBIACgBIAEgDIAFgCIAFgBQAIAAAHAHQAIAIgBAKQABAJgIAIQgHAHgIAAIgFgBIgFgCIgEgDIgCgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAGAAQAFAAAGgFQAEgFAAgHQAAgIgEgFQgGgFgFAAQgGAAgFAFg");
	this.shape_314.setTransform(-11.7,-19.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgQASQgIgHAAgLQAAgJAIgIQAHgHAJAAQAKAAAIAHQAGAIABAJQgBALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAGgFAAgIQAAgHgGgFQgFgFgHAAQgGAAgGAFg");
	this.shape_315.setTransform(-17.7,-20.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgDAtIAAgUQgMABgIgIQgHgHAAgLQAAgJAHgIQAIgGAMAAIAAgWIAGAAIAAAWQANAAAHAGQAIAIAAAJQAAALgIAHQgHAIgNgBIAAAUgAADATQAJAAAHgFQAFgFAAgJQAAgGgFgGQgHgFgJAAgAgRgMQgGAGAAAGQAAAJAGAFQAGAFAIAAIAAgkQgIAAgGAFg");
	this.shape_316.setTransform(-24.1,-20.35);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_317.setTransform(-30.475,-20.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_318.setTransform(-36.2,-20.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AAMAYIAAgQIgMAAIgKAQIgIAAIALgRIgBgBIgDgBIgDgDIgCgDIgBgGQAAgHAEgEQAFgFAIAAIATAAIAAAvgAgHgOQgDADAAAEQAAAEADADQACACAFgBIAMAAIAAgSIgMAAQgFABgCACg");
	this.shape_319.setTransform(-53.25,-20.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_320.setTransform(-58.325,-20.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_321.setTransform(-63.575,-20.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_322.setTransform(-69.275,-20.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_323.setTransform(-74.875,-20.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AAcAeIAAgMIg+AAIAAgvIAHAAIAAApIAVAAIAAgpIAGAAIAAApIAUAAIAAgpIAHAAIAAApIAIAAIAAASg");
	this.shape_324.setTransform(-81.375,-19.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_325.setTransform(-88.375,-20.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AARAYIAAgiIgRAUIgRgUIAAAiIgHAAIAAgvIAGAAIASAXIATgXIAGAAIAAAvg");
	this.shape_326.setTransform(-94.35,-20.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgGAYIgFgCIgDgDIgDgBIAAgBIAEgFIACACIAEADQAEABADAAQAFAAADgBQADgDAAgEQAAgDgDgDQgDgCgFAAIgFAAIAAgFIAFAAQAEAAADgCQACgCAAgDQAAgEgCgCQgDgBgEAAQgDgBgDACIgEACIgBACIgFgFIACgCIAFgDQAFgCAEAAQAHAAAFAEQAEAEAAAGIAAAEIgCADIgDACIgBABIgBAAIABAAIACAAIADACIACAEIABAEQAAAGgFAFQgEAEgJAAIgGgBg");
	this.shape_327.setTransform(-99.875,-20.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_328.setTransform(-104.675,-20.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgXAjIAAhEIAHAAIAAAHIABgBIACgBIAEgDIAEgCIAFgBQAJAAAIAHQAGAIABAKQgBAJgGAIQgIAHgJAAIgFgBIgEgCIgEgDIgCgBIgBgBIAAAcgAgKgWQgFAFgBAIQABAHAFAFQAFAFAFAAQAGAAAFgFQAGgFAAgHQAAgIgGgFQgFgFgGAAQgFAAgFAFg");
	this.shape_329.setTransform(-109.85,-19.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AAMAYIAAgQIgMAAIgLAQIgHAAIALgRIgBgBIgDgBIgDgDIgCgDIgBgGQAAgHAEgEQAFgFAIAAIAUAAIAAAvgAgHgOQgDADgBAEQABAEADADQACACAFgBIAMAAIAAgSIgMAAQgFABgCACg");
	this.shape_330.setTransform(-127.15,-20.3);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAGAAAFACIAHAFIACACIgGAGIAAgBIgCgDIgCgCIgFgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAFgFIACgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHg");
	this.shape_331.setTransform(-131.95,-20.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgYAjIAAhFIAaAAQAIAAAGAFQAGAFgBAIIgBAFQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAIgBACIgCACIgBAAIABABIACABIAEADIADAFIABAHQAAAJgGAFQgGAGgKAAgAgRAcIAUAAQAHAAAEgEQADgEAAgFQAAgGgDgEQgFgEgGAAIgUAAgAgRgFIATAAQAGAAADgCQADgDAAgGQAAgFgDgDQgDgDgGAAIgTAAg");
	this.shape_332.setTransform(-137.65,-21.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_333.setTransform(140.25,-29.1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgOATQgGgGAAgJIAAgbIAHAAIAAAbQAAAGAEAEQAEAEAFAAQAGAAAEgFQAEgEAAgHIAAgZIAHAAIAAAuIgHAAIAAgGIAAABIgCACIgEACIgEABIgFABQgIAAgFgFg");
	this.shape_334.setTransform(136.25,-31.05);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgLAYIAAguIAHAAIAAAGIAAgBIACgCIACgCIAFgBIAFgBIADAAIAAAGIgEAAQgFAAgEAFQgFAEABAHIAAAZg");
	this.shape_335.setTransform(132,-31.15);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgDAEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_336.setTransform(129,-29.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_337.setTransform(125.175,-31.1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgFAYIgGgCIgDgDIgCgBIAAgBIAEgGIABABIABACIADACIADACIAEAAQAFAAADgCQACgCABgEQgBgCgCgCIgGgEIgHgCQgEAAgDgDQgDgDABgEQAAgGAEgEQAEgEAHAAIAFAAIAFACIACACIACACIABABIgFAEIgBgBIgEgCIgFgBQgDAAgDABQgCACAAAEQAAADACABIAGADIAIADQADAAADADQADADAAAEQAAAGgFAFQgFAEgIAAIgFgBg");
	this.shape_338.setTransform(120.25,-31.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgPATQgFgGAAgJIAAgbIAHAAIAAAbQAAAGAEAEQAEAEAFAAQAFAAAFgFQAEgEAAgHIAAgZIAHAAIAAAuIgHAAIAAgGIAAABIgDACIgDACIgEABIgEABQgJAAgGgFg");
	this.shape_339.setTransform(115.25,-31.05);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgRASQgGgHgBgLQABgJAGgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgGAFAAAHQAAAHAGAGQAFAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_340.setTransform(109.5,-31.1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AAOAjIAAgdQAAgGgEgDQgEgDgFAAQgFAAgFAEQgEADAAAIIAAAaIgHAAIAAhFIAHAAIAAAdIABgBIABgCIADgCQABAAAAgBQABAAAAAAQABAAABgBQAAAAABAAIAEgBQAJAAAFAGQAGAFAAAIIAAAdg");
	this.shape_341.setTransform(103.75,-32.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgFAiIgEgBIgEgDIgCgCIgBgBIAAAHIgHAAIAAhFIAHAAIAAAeIABgBIACgCIAEgDIAEgBIAFgBQAKgBAHAIQAGAGABAKQgBALgGAHQgHAHgKAAIgFgBgAgKgCQgFAFgBAHQABAIAFAGQAFAFAFAAQAGAAAFgFQAGgGAAgIQAAgHgGgFQgFgFgGAAQgFAAgFAFg");
	this.shape_342.setTransform(98.05,-32.15);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgPATQgFgGAAgJIAAgbIAHAAIAAAbQAAAGAEAEQAEAEAFAAQAFAAAFgFQAEgEAAgHIAAgZIAHAAIAAAuIgHAAIAAgGIAAABIgDACIgDACIgEABIgFABQgIAAgGgFg");
	this.shape_343.setTransform(91.95,-31.05);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgCAjIAAhFIAGAAIAABFg");
	this.shape_344.setTransform(87.9,-32.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAGAAAFACIAHAFIACACIgGAGIAAgBIgCgDIgCgCIgFgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAFgFIACgCIAFAFIgBABIgCACIgFADIgFADIgHABQgJAAgHgHg");
	this.shape_345.setTransform(84.25,-31.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgQADIAAgFIAhAAIAAAFg");
	this.shape_346.setTransform(79.575,-31.675);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgBAdQgDgEAAgGIAAgcIgJAAIAAgGIAFAAQAEAAAAgGIAAgLIAGAAIAAARIAKAAIAAAGIgKAAIAAAcQgBAHAHAAIADgBIACAAIABgBIAAAHQgCACgFgBQgFABgDgEg");
	this.shape_347.setTransform(75.6,-31.85);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgGAYIgEgCIgDgDIgDgBIgBgBIAGgGIAAABIACACIACACIAEACIADAAQAFAAADgCQACgCAAgEQAAgCgCgCIgHgEIgHgCQgDAAgDgDQgDgDAAgEQAAgGAFgEQAFgEAFAAIAGAAIAEACIAEACIACACIAAABIgFAEIgBgBIgDgCIgHgBQgDAAgCABQgCACgBAEQABADACABIAFADIAIADQAEAAADADQADADgBAEQAAAGgEAFQgFAEgIAAIgGgBg");
	this.shape_348.setTransform(71.7,-31.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgDAiIAAgvIAGAAIAAAvgAgCgaQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_349.setTransform(68.5,-32.125);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgCAjIAAhFIAFAAIAABFg");
	this.shape_350.setTransform(66.2,-32.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_351.setTransform(62.275,-31.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_352.setTransform(57.125,-31.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgPAcQgIgHABgLQgBgKAIgGQAHgIAIABIAFABIAFABIAEADIACACIAAABIAAgeIAHAAIAABFIgHAAIAAgHIAAABIgCACIgEADIgFABIgFABQgIAAgHgHgAgLgCQgEAFAAAHQAAAIAEAGQAFAFAGAAQAGAAAGgFQAEgGAAgIQAAgHgEgFQgGgFgGAAQgGAAgFAFg");
	this.shape_353.setTransform(51.2,-32.15);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgCAiIAAgvIAFAAIAAAvgAgCgaQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_354.setTransform(47.3,-32.125);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#DAC07B").s().p("AAAARIALgRIgLgQIAHAAIAMAQIgMARgAgSARIAMgRIgMgQIAIAAIAKAQIgKARg");
	this.shape_355.setTransform(38.725,-31.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#DAC07B").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_356.setTransform(34.15,-31.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#DAC07B").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAGAAAEACIAIAFIABACIgEAGIgBgBIgCgDIgCgCIgFgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAFgFIACgCIAFAFIgBABIgCACIgFADIgFADIgHABQgJAAgHgHg");
	this.shape_357.setTransform(29.45,-31.1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#DAC07B").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_358.setTransform(23.95,-31.1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#DAC07B").s().p("AgUAYIgCgBIgBAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgDACgDgBg");
	this.shape_359.setTransform(17.9,-31.05);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#DAC07B").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_360.setTransform(12.775,-31.1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#DAC07B").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_361.setTransform(7.625,-31.1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#DAC07B").s().p("AATAeIAAgMIglAAIAAAMIgHAAIAAgSIADAAIABgBIACgEIADgFIACgHIABgKIAAgOIAgAAIAAApIAHAAIAAASgAgGgPQAAAIgCAHQgCAGgCADIgCADIAaAAIAAgjIgSAAg");
	this.shape_362.setTransform(1.975,-30.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#DAC07B").s().p("AAVAjIAAg4IgqA4IgGAAIAAhFIAHAAIAAA3IAqg3IAGAAIAABFg");
	this.shape_363.setTransform(-4.45,-32.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#DAC07B").s().p("AALARIgLgRIALgQIAIAAIgMAQIAMARgAgGARIgMgRIAMgQIAGAAIgKAQIAKARg");
	this.shape_364.setTransform(-10.625,-31.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#DAC07B").s().p("AATAjIgYgjIgOAOIAAAVIgIAAIAAhFIAIAAIAAAmIAjgmIAJAAIgZAdIAcAog");
	this.shape_365.setTransform(-20.975,-32.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#DAC07B").s().p("AAmAjIgZgjIgJAKIAAAZIgHAAIAAgZIgJgKIgZAjIgJAAIAdgoIgbgdIAKAAIAfAiIAAgiIAHAAIAAAiIAfgiIAKAAIgbAdIAdAog");
	this.shape_366.setTransform(-29.575,-32.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_367.setTransform(-42.375,-31.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgRAAIAAgGIApAAIAAAGIgRAAIAAApg");
	this.shape_368.setTransform(-47.35,-31.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AAOAjIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvgAgIgYQgFgEAAgGIAGAAQAAAEACADQACACADAAQAEAAACgCQACgDAAgEIAFAAQABAGgEAEQgEADgGAAQgFAAgDgDg");
	this.shape_369.setTransform(-52.45,-32.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_370.setTransform(-58.075,-31.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAFAAAFACIAHAFIACACIgEAGIgBgBIgCgDIgDgCIgEgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgDADIgGADIgHABQgJAAgHgHg");
	this.shape_371.setTransform(-62.95,-31.1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_372.setTransform(-73.525,-31.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_373.setTransform(-78.775,-31.1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AANAYIAAgQIgOAAIgKAQIgIAAIAMgRIgCgBIgCgBIgDgDIgCgDIgCgGQABgHAEgEQAFgFAIAAIAUAAIAAAvgAgHgOQgEADAAAEQAAAEAEADQACACAFgBIANAAIAAgSIgNAAQgFABgCACg");
	this.shape_374.setTransform(-89.55,-31.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_375.setTransform(-94.75,-31.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AARAeIAAgMIgoAAIAAgvIAHAAIAAApIAZAAIAAgpIAIAAIAAApIAHAAIAAASg");
	this.shape_376.setTransform(-100.3,-30.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_377.setTransform(-106.225,-31.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgXAjIAAhEIAIAAIAAAHIAAgBIACgBIAEgDIAEgCIAGgBQAIAAAIAHQAGAIAAAKQAAAJgGAIQgIAHgIAAIgGgBIgEgCIgEgDIgCgBIAAgBIAAAcgAgKgWQgFAFAAAIQAAAHAFAFQAFAFAGAAQAGAAAEgFQAFgFABgHQgBgIgFgFQgEgFgGAAQgGAAgFAFg");
	this.shape_378.setTransform(-111.4,-30.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_379.setTransform(-117.275,-31.1);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgVAYIgBgBIgBAAIAAgHIAEABQADAAACgCQABgBACgHIABgRIAAgNIAiAAIAAAuIgHAAIAAgoIgUAAIAAAHIgBARQgBAHgCAEIgFAFQgDACgDgBg");
	this.shape_380.setTransform(-122.85,-31.05);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AANAYIgQgYIgKAKIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_381.setTransform(-127.375,-31.1);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_382.setTransform(-132.975,-31.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AATAeIAAgMIglAAIAAAMIgHAAIAAgSIADAAIABgBIACgEIADgFIACgHIABgKIAAgOIAgAAIAAApIAHAAIAAASgAgGgPQAAAIgCAHQgCAGgCADIgCADIAaAAIAAgjIgSAAg");
	this.shape_383.setTransform(-138.625,-30.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("AAMAYIAAgQIgMAAIgLAQIgHAAIALgRIgBgBIgDgBIgDgDIgCgDIgBgGQAAgHAEgEQAFgFAIAAIAUAAIAAAvgAgHgOQgDADgBAEQABAEADADQACACAFgBIAMAAIAAgSIgMAAQgFABgCACg");
	this.shape_384.setTransform(138.35,-41.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_385.setTransform(133.275,-41.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_386.setTransform(128.025,-41.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgRAAIAAgGIApAAIAAAGIgSAAIAAApg");
	this.shape_387.setTransform(122.95,-41.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AANAYIgQgYIgKAKIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_388.setTransform(118.575,-41.9);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgPASQgHgIAAgKQAAgJAHgIQAHgHAIAAQAKAAAHAHQAGAHAAAKIAAACIgmAAQAAAHAFAEQAFAGAGgBQAEAAAEgBIAGgFIABgCIAFAFIgBABIgDACIgEADIgFADIgHABQgJAAgHgHgAAQgCQgBgHgEgEQgEgEgHAAQgFAAgFAEQgEAEgBAHIAfAAIAAAAg");
	this.shape_389.setTransform(112.975,-41.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgRASQgGgHAAgLQAAgJAGgIQAIgHAJAAQAKAAAHAHQAIAIgBAJQABALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgFAFgBAHQABAHAFAGQAFAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_390.setTransform(107.35,-41.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgWAjIAAhEIAHAAIAAAHIAAgBIACgBIAEgDIAFgCIAFgBQAIAAAHAHQAIAIgBAKQABAJgIAIQgHAHgIAAIgFgBIgFgCIgEgDIgCgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAGAAQAFAAAGgFQAEgFAAgHQAAgIgEgFQgGgFgFAAQgGAAgFAFg");
	this.shape_391.setTransform(101.7,-40.9);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AAUAjIAAg+IgnAAIAAA+IgHAAIAAhFIA1AAIAABFg");
	this.shape_392.setTransform(94.85,-43);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgCAEQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAAAg");
	this.shape_393.setTransform(81.05,-39.9);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#DAC07B").s().p("AAAARIALgRIgLgQIAHAAIAMAQIgMARgAgSARIAMgRIgMgQIAIAAIAKAQIgKARg");
	this.shape_394.setTransform(77.725,-41.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#DAC07B").s().p("AAOAjIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvgAgJgYQgDgEAAgGIAFAAQAAAEACADQACACADAAQAEAAACgCQACgDAAgEIAGAAQAAAGgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_395.setTransform(72.5,-43);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#DAC07B").s().p("AgRASQgGgHgBgLQABgJAGgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHgAgLgMQgGAFAAAHQAAAHAGAGQAFAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgFAFg");
	this.shape_396.setTransform(66.75,-41.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#DAC07B").s().p("AgWAjIAAhEIAHAAIAAAHIAAgBIADgBIADgDIAFgCIAEgBQAKAAAGAHQAIAIAAAKQAAAJgIAIQgGAHgKAAIgEgBIgFgCIgDgDIgDgBIAAgBIAAAcgAgKgWQgGAFABAIQgBAHAGAFQAFAFAFAAQAGAAAGgFQAEgFAAgHQAAgIgEgFQgGgFgGAAQgFAAgFAFg");
	this.shape_397.setTransform(61.1,-40.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#DAC07B").s().p("AgCAYIAAgpIgRAAIAAgGIAnAAIAAAGIgRAAIAAApg");
	this.shape_398.setTransform(55.75,-41.9);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#DAC07B").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAGAAAEACIAIAFIABACIgEAGIgBgBIgCgDIgCgCIgFgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAFgFIACgCIAFAFIgBABIgCACIgFADIgFADIgHABQgJAAgHgHg");
	this.shape_399.setTransform(51.05,-41.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#DAC07B").s().p("AgQASQgIgHABgLQgBgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_400.setTransform(45.55,-41.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#DAC07B").s().p("AgXAjIAAhEIAIAAIAAAHIAAgBIACgBIAEgDIAEgCIAGgBQAJAAAHAHQAGAIAAAKQAAAJgGAIQgHAHgJAAIgGgBIgEgCIgEgDIgCgBIAAgBIAAAcgAgKgWQgFAFAAAIQAAAHAFAFQAFAFAGAAQAFAAAFgFQAFgFABgHQgBgIgFgFQgFgFgFAAQgGAAgFAFg");
	this.shape_401.setTransform(39.9,-40.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#DAC07B").s().p("AgSAYIAAgvIAVAAQAGAAAEAEQAEADAAAGQAAADgBACIgDAEIgCABIABAAIACAAIADACIABADIABAFQAAAGgEAEQgEAEgHAAgAgLASIAPAAQAEAAACgCQACgCAAgFQAAgEgCgCQgCgCgEAAIgPAAgAgLgEIAOAAQAHABAAgHQAAgGgHgBIgOAAg");
	this.shape_402.setTransform(34.325,-41.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#DAC07B").s().p("AgXAjIAAhFIAuAAIAAAHIgnAAIAAAXIAfAAIAAAGIgfAAIAAAaIAoAAIAAAHg");
	this.shape_403.setTransform(28.8,-43);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#DAC07B").s().p("AALARIgLgRIALgQIAIAAIgMAQIAMARgAgGARIgMgRIAMgQIAGAAIgKAQIAKARg");
	this.shape_404.setTransform(23.025,-41.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#DAC07B").s().p("AAOAjIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvgAgIgYQgFgEAAgGIAGAAQAAAEACADQACACADAAQAEAAACgCQACgDAAgEIAFAAQABAGgEAEQgEADgGAAQgFAAgDgDg");
	this.shape_405.setTransform(8.75,-43);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#DAC07B").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_406.setTransform(3,-41.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#DAC07B").s().p("AAOAYIAAgVIgbAAIAAAVIgHAAIAAgvIAHAAIAAAVIAbAAIAAgVIAHAAIAAAvg");
	this.shape_407.setTransform(-2.725,-41.9);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#DAC07B").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_408.setTransform(-8.325,-41.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#DAC07B").s().p("AAOAYIAAgpIgbAAIAAApIgHAAIAAgvIApAAIAAAvg");
	this.shape_409.setTransform(-13.575,-41.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#DAC07B").s().p("AARAYIAAgiIgRAUIgRgUIAAAiIgHAAIAAgvIAGAAIASAXIATgXIAGAAIAAAvg");
	this.shape_410.setTransform(-19.65,-41.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#DAC07B").s().p("AgRASQgGgHAAgLQAAgJAGgIQAIgHAJAAQAKAAAHAHQAIAIgBAJQABALgIAHQgHAHgKAAQgJAAgIgHgAgMgMQgEAFgBAHQABAHAEAGQAGAFAGAAQAHAAAGgFQAEgFAAgIQAAgHgEgFQgGgFgHAAQgGAAgGAFg");
	this.shape_411.setTransform(-25.75,-41.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#DAC07B").s().p("AANAYIgQgYIgKAKIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_412.setTransform(-30.775,-41.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#DAC07B").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_413.setTransform(-45.425,-41.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#DAC07B").s().p("AAOAYIAAgpIgbAAIAAApIgHAAIAAgvIApAAIAAAvg");
	this.shape_414.setTransform(-50.675,-41.9);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#DAC07B").s().p("AAOAYIAAgpIgbAAIAAApIgHAAIAAgvIApAAIAAAvg");
	this.shape_415.setTransform(-56.375,-41.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#DAC07B").s().p("AgQAiIgDgBIAAAAIAAgGIAFABQAHAAACgHIACgIIgTguIAIAAIAOAlIAPglIAIAAIgWA2QgCAHgDADQgEADgFAAg");
	this.shape_416.setTransform(-61.65,-40.85);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#DAC07B").s().p("AgXAjIAAhEIAIAAIAAAHIAAgBIACgBIAEgDIAEgCIAGgBQAIAAAIAHQAGAIAAAKQAAAJgGAIQgIAHgIAAIgGgBIgEgCIgEgDIgCgBIAAgBIAAAcgAgKgWQgFAFAAAIQAAAHAFAFQAFAFAGAAQAGAAAEgFQAFgFABgHQgBgIgFgFQgEgFgGAAQgGAAgFAFg");
	this.shape_417.setTransform(-66.85,-40.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#DAC07B").s().p("AgVAjIAAhFIArAAIAAAHIgjAAIAAA+g");
	this.shape_418.setTransform(-72.175,-43);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#FFFFFF").s().p("AANAYIgQgYIgKAKIAAAOIgHAAIAAgvIAHAAIAAAYIAXgYIAJAAIgTATIAVAcg");
	this.shape_419.setTransform(-86.625,-41.9);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#FFFFFF").s().p("AAOAYIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvg");
	this.shape_420.setTransform(-92.35,-41.9);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#FFFFFF").s().p("AAcAeIAAgMIg+AAIAAgvIAHAAIAAApIAVAAIAAgpIAGAAIAAApIAUAAIAAgpIAHAAIAAApIAIAAIAAASg");
	this.shape_421.setTransform(-98.975,-41.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#FFFFFF").s().p("AAOAjIAAgjIgcAjIgGAAIAAgvIAHAAIAAAjIAcgjIAGAAIAAAvgAgIgYQgFgEAAgGIAGAAQAAAEACADQACACADAAQAEAAACgCQACgDAAgEIAFAAQAAAGgDAEQgEADgGAAQgFAAgDgDg");
	this.shape_422.setTransform(-106.1,-43);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FFFFFF").s().p("AgQASQgIgHAAgLQAAgJAIgIQAHgHAJAAQAKAAAIAHQAGAIAAAJQAAALgGAHQgIAHgKAAQgJAAgHgHgAgMgMQgEAFAAAHQAAAHAEAGQAGAFAGAAQAHAAAFgFQAFgFABgIQgBgHgFgFQgFgFgHAAQgGAAgGAFg");
	this.shape_423.setTransform(-111.85,-41.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#FFFFFF").s().p("AgXAjIAAhEIAHAAIAAAHIABgBIACgBIAEgDIAEgCIAFgBQAJAAAIAHQAGAIABAKQgBAJgGAIQgIAHgJAAIgFgBIgEgCIgEgDIgCgBIgBgBIAAAcgAgKgWQgFAFgBAIQABAHAFAFQAFAFAFAAQAGAAAFgFQAGgFAAgHQAAgIgGgFQgFgFgGAAQgFAAgFAFg");
	this.shape_424.setTransform(-117.5,-40.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("AgDAYIAAgpIgRAAIAAgGIApAAIAAAGIgRAAIAAApg");
	this.shape_425.setTransform(-122.85,-41.9);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#FFFFFF").s().p("AgOASQgHgIAAgKQAAgJAHgIQAHgHAJAAQAFAAAGACIAGAFIADACIgGAGIAAgBIgCgDIgCgCIgFgCIgFAAQgGAAgFAFQgFAFAAAHQAAAIAFAFQAFAFAGAAQAEAAAEgBIAFgFIACgCIAFAFIgBABIgDACIgDADIgGADIgHABQgJAAgHgHg");
	this.shape_426.setTransform(-127.55,-41.9);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#FFFFFF").s().p("AgOAUQgFgEAAgFQAAgGAEgEQADgCAHgBIASgEQAAgFgEgDQgDgDgFAAQgDAAgDABQgEACgBACIgCACIgEgFIABgBIACgCIADgDIAFgCIAGgBQAIAAAFAGQAGAFAAAHIAAAeIgHAAIAAgGIgBAAIgCACIgDACIgEACIgFABQgHAAgFgFgAgDACQgJACAAAHQAAADADADQADABAEAAQAGAAAEgEQAFgEAAgIIAAgCg");
	this.shape_427.setTransform(-132.925,-41.9);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#FFFFFF").s().p("AgIAjIgHgDIgFgDIgDgDIgBgBIAFgFIABABIACACIAEADIAGACIAGABQAIAAAFgEQAFgEAAgGQAAgFgFgFQgFgDgIAAIgHAAIAAgHIAHAAQAHAAAEgDQAEgDAAgFQAAgFgEgDQgEgEgHAAQgEAAgEACIgHAEIgCACIgFgFIABgBIADgDIAFgDIAGgCIAHgBQAKAAAGAFQAHAGAAAIIgBAFIgDAFIgEADIgDABIgBABIABABIAEAAIAEADQACACACAEQABACAAAEQAAAIgHAHQgHAGgLAAIgIgBg");
	this.shape_428.setTransform(-138.375,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.2,-51.1,286.5,102.2);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAC07B").s().p("AAAAkIAZgkIgZgjIAQAAIAZAjIgZAkgAgoAkIAZgkIgZgjIAQAAIAYAjIgYAkg");
	this.shape.setTransform(123.925,2.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DAC07B").s().p("AgHA1IAAhbIglAAIAAgOIBZAAIAAAOIglAAIAABbg");
	this.shape_1.setTransform(113.8,2.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DAC07B").s().p("AggAnQgPgQAAgXQAAgWAPgPQAQgRAUAAQANAAAKAGQALAFAFAFIAEAFIgLALIgBgCIgEgEIgGgGQgEgCgFgBQgGgCgGAAQgOAAgLAMQgLALAAAQQAAARALAMQALAMAOAAQAKAAAIgFQAIgEAEgFIADgDIALAJIgCACIgFAGIgJAGIgMAGQgIACgIAAQgUAAgQgQg");
	this.shape_2.setTransform(103.375,2.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DAC07B").s().p("AAfA1IAAhOIg/BOIgNAAIAAhpIAPAAIAABOIA/hOIANAAIAABpg");
	this.shape_3.setTransform(91.175,2.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAC07B").s().p("AguA1IgEgBIgCAAIAAgQQAFADAEAAQAHAAAEgEQADgEADgOQADgOAAgZIAAgfIBMAAIAABpIgQAAIAAhbIgtAAIAAARQAAAWgCAQQgDAPgEAJQgFAIgFADQgGADgIAAg");
	this.shape_4.setTransform(77.775,2.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DAC07B").s().p("AggAuQgKgJAAgMQAAgOAIgIQAHgHAPgDIAogGQAAgMgHgHQgIgIgLABQgIAAgHADQgHAEgEAEIgDAEIgKgKIACgCIAFgFIAIgGQAEgDAHgCQAHgCAGAAQASAAAMAMQALAMAAARIAABCIgPAAIAAgPIgBADIgEADIgHAGIgKADQgGACgFAAQgQAAgLgJgAgHAGQgUAEAAAPQAAAGAGAFQAGAFAKAAQAOAAAKgKQAJgKAAgPIAAgGg");
	this.shape_5.setTransform(66.425,2.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DAC07B").s().p("AgiAnQgQgQAAgXQAAgWAQgPQAOgRAVAAQAVAAAPAPQAOAPAAAXIgBAHIhVAAQABAOALALQALAKAOAAQAKAAAIgFQAIgEAEgFIAEgDIAKAJIgCACIgFAGIgJAGIgNAGQgIACgHAAQgVAAgPgQgAAkgHQgCgOgKgJQgJgJgOAAQgNAAgLAKQgKAJgCANIBHAAIAAAAg");
	this.shape_6.setTransform(55,2.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DAC07B").s().p("AAqBCIAAgaIhTAAIAAAaIgQAAIAAgpIAIAAIACgCIAEgHIAGgMQADgFACgLQACgLAAgMIAAgeIBHAAIAABaIARAAIAAApgAgPgjQAAATgEAPQgFAOgEAGIgFAGIA7AAIAAhMIgpAAg");
	this.shape_7.setTransform(42.475,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DAC07B").s().p("AAuBNIAAh8IhdB8IgPAAIAAiZIARAAIAAB8IBdh8IAPAAIAACZg");
	this.shape_8.setTransform(28.225,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DAC07B").s().p("AAZAkIgZgkIAZgjIAQAAIgZAjIAZAkgAgPAkIgZgkIAZgjIAPAAIgYAjIAYAkg");
	this.shape_9.setTransform(14.575,2.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DAC07B").s().p("AAnA1IAAhNIgnAvIgmgvIAABNIgPAAIAAhpIAMAAIApA0IAqg0IAMAAIAABpg");
	this.shape_10.setTransform(-1.9,2.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DAC07B").s().p("AglAoQgQgRAAgXQAAgWAQgQQAQgQAVAAQAWAAAQAQQAQAQAAAWQAAAXgQARQgQAPgWAAQgVAAgQgPgAgagbQgMALAAAQQAAARAMAMQALAMAPAAQAQAAALgMQALgMAAgRQAAgQgLgLQgLgMgQAAQgPAAgLAMg");
	this.shape_11.setTransform(-15.425,2.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DAC07B").s().p("AAqBCIAAgaIhTAAIAAAaIgQAAIAAgpIAIAAIACgCIAEgHIAGgMQADgFACgLQACgLAAgMIAAgeIBHAAIAABaIARAAIAAApgAgPgjQAAATgEAPQgFAOgEAGIgFAGIA7AAIAAhMIgpAAg");
	this.shape_12.setTransform(-28.225,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DAC07B").s().p("AAfBNIAAhOIg/BOIgNAAIAAhpIAPAAIAABOIA/hOIANAAIAABpgAgUg3QgJgIAAgNIAMAAQAAAJAFAFQAFAEAHAAQAIAAAFgEQAFgFAAgJIAMAAQAAANgJAIQgIAJgNgBQgMABgIgJg");
	this.shape_13.setTransform(-44.525,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DAC07B").s().p("AAqA1IAAhpIAQAAIAABpgAg5A1IAAhpIAQAAIAAAjIAaAAQARAAAKAKQALAJAAAQQAAAPgLAKQgKAKgRAAgAgpAmIAaAAQALAAAFgFQAGgGAAgJQAAgKgGgGQgFgEgLAAIgaAAg");
	this.shape_14.setTransform(-58.425,2.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DAC07B").s().p("AAeA1IAAguIg7AAIAAAuIgQAAIAAhpIAQAAIAAAtIA7AAIAAgtIAQAAIAABpg");
	this.shape_15.setTransform(-72.225,2.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DAC07B").s().p("AgkBAQgPgSAAghQAAhIA1gJIAVgFIAMgFIADgCIAIAMQgJAIghAGQgQAEgLANQgLANgBAWIACgDIAEgEIAIgHQAEgDAGgCQAHgCAGAAQAVAAAOAPQAPAPAAAWQAAAWgPAPQgPAPgVAAQgXAAgOgRgAgYABQgLALAAARQAAAQALALQALALAOAAQAPAAAKgLQALgLAAgQQAAgRgLgLQgKgKgPAAQgOAAgLAKg");
	this.shape_16.setTransform(-84.875,0.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DAC07B").s().p("AgkBLIgFgBIgCAAIAAgPQAGADAFAAQAOAAAGgRIAFgPIgrhpIARAAIAhBVIAihVIARAAIgxB4QgFARgIAHQgHAHgMAAg");
	this.shape_17.setTransform(-96.775,5.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DAC07B").s().p("AguA1IgEgBIgCAAIAAgQQAFADAEAAQAHAAAEgEQADgEADgOQADgOAAgZIAAgfIBMAAIAABpIgQAAIAAhbIgtAAIAAARQAAAWgCAQQgDAPgEAJQgFAIgFADQgGADgIAAg");
	this.shape_18.setTransform(-109.175,2.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DAC07B").s().p("AAqBNIg3hNIgfAgIAAAtIgQAAIAAiZIAQAAIAABWIBPhWIAUAAIg4BAIA+BZg");
	this.shape_19.setTransform(-120.65,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.1,-14.9,262.2,29.9);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AANBLIAAgHQAGAAADgDQADgDABgEIAAgQIAAguIgzBBIgBAFIANAAIAAAJIgrAAIAAgHQAHAAACgDQADgDAAgEIABgQIAAgxIABgPIgNABIAAgJIArAAIAAAHQgGAAgDADQgDADAAAEIgBAPIAAAsIA0g/IAAgFIgNABIAAgJIArAAIAAAHQgGAAgDADQgDADAAAEIgBAPIAAAyIgBAOIANAAIAAAJgAgUgyQgIgFAAgJQAAgEACgDQACgDAEAAQAFAAACADQACADAAADQAAAEgCADQABACAEABIAIACIAJgCQAEgBABgCQgBgDAAgEQAAgDACgDQACgDAEAAQAEAAACAEQADACAAAEQAAAJgJAFQgIAEgNAAQgLAAgJgEg");
	this.shape.setTransform(94.275,-0.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgWAxQgMgHgHgNQgGgMAAgRQAAgOAGgNQAHgMAMgIQAMgIAOAAQAMAAAKAFQAKAGAFAKQAGAKAAAPIhJACQAAAYAJAOQAIAOARAAQAKAAAKgFQAKgFAFgIIAFAFQgIAMgMAGQgNAGgMAAQgOAAgLgHgAAbgQQAAgNgFgIQgGgKgLABQgZgBgFAfIA0AAIAAAAg");
	this.shape_1.setTransform(82.075,1.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AAcA1IAAgHQAMABAAgNIgBgGIgIg1IgfBOIgIAAIghhQIgHA7IgDAMIANAAIAAAJIggAAIAAgHQAGABADgEQACgDABgIIAJhMIgMABIAAgJIAcAAIAhBQIAhhQIAZAAIAAAHQgLAAAAAKIAAAFIAKA/IAAAFIAAAGIAOAAIAAAJg");
	this.shape_2.setTransform(68.675,1.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgWAxQgMgHgHgNQgGgMAAgRQAAgOAGgNQAHgMAMgIQAMgIAOAAQAMAAAKAFQAKAGAFAKQAGAKAAAPIhJACQAAAYAJAOQAIAOARAAQAKAAAKgFQAKgFAFgIIAFAFQgIAMgMAGQgNAGgMAAQgOAAgLgHgAAbgQQAAgNgFgIQgGgKgLABQgZgBgFAfIA0AAIAAAAg");
	this.shape_3.setTransform(55.275,1.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgVAyQgMgHgHgNQgHgLAAgRQAAgOAHgNQAHgOANgHQAMgJAPAAQAMAAAIADQAJAFAFAFQAEAGAAAHQAAAFgCADQgDADgEAAQgFAAgDgDQgCgDAAgDQAAgFADgEQgCgHgHgCQgGgCgGAAQgJAAgIAFQgIAFgEAKQgEALgBAOQABANAEAKQAFALAIAHQAIAGAKAAQAJAAAJgFQAJgFAGgIIAFAEQgIAMgMAHQgMAGgMAAQgNAAgMgGg");
	this.shape_4.setTransform(44.05,1.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AAMA1IAAgHQAHAAAAgEQAAgCgCgEIgVgbIgSAYIgKALIARAAIAAAJIgkAAIAAgHQAGgBAEgDIAKgNIAVgbIgHgIIgGgJIgIgKQgHgJgDgKIgKABIAAgJIArAAIAAAHQgFAAgDABQgDABAAAEQAAADAHAKIAMARIASgYIAEgEIAGgHIgPABIAAgJIAjAAIAAAHQgIACgFAEIgOAQIgQAUIAdAjIADAEIAGAIIAJAAIAAAJg");
	this.shape_5.setTransform(27.475,1.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AANA1IAAgHQAGAAADgDQADgDABgEIAAgQIAAguIgzBBIgBAFIANAAIAAAJIgrAAIAAgHQAHAAACgDQADgDAAgEIABgQIAAgxIABgPIgNABIAAgJIArAAIAAAHQgGAAgDADQgDADAAAEIgBAQIAAArIA0g/IAAgFIgNABIAAgJIArAAIAAAHQgGAAgDADQgDADAAAEIgBAQIAAAxIgBAOIANAAIAAAJg");
	this.shape_6.setTransform(15.225,1.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AhNA1IAAgHQAGAAADgDQACgDABgEIABgQIAAgxIABgPIgOABIAAgJIArAAIAAAHQgFAAgEADQgCADAAAEIgBAQIAAAxIgBAOIAcAAQAFAAADgCQACgDABgEIABgPIAAgxIABgPIgNABIAAgJIApAAIAAAHQgGAAgCADQgDADgBAEIAAAQIAAAxIgBAOIAaAAQAGAAADgCQACgDABgEIAAgPIAAgxIABgPIgNABIAAgJIArAAIAAAHQgGAAgCADQgEADAAAEIgBAQIAAAxIAAAGIgBAIIAOAAIAAAJg");
	this.shape_7.setTransform(-0.05,1.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgrA1IAAgHQAHAAADgEQADgFAAgJIAAg5IAAgPIgNABIAAgJIArAAIAAAHQgGAAgDACQgCADgBAEIAAAJIAAATIAMAAQAXAAALAIQAKAHAAAOQAAAPgJAIQgKAJgPAAgAgMAAIAAAgIgBAMIAJAAIAHAAQAKAAAHgFQAGgGAAgLQAAgLgGgGQgGgFgLAAg");
	this.shape_8.setTransform(-14.025,1.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("Ag0AzQgEgEAAgFQAAgEADgDQACgDAEAAQAFAAACACQADACAAADIAAADIABABQAFAAAFgJQAEgJAEgUQAEgTABgfIgUABIAAgJIBaAAIAAAHQgGAAgDADQgCADgBAEIgBAPIAAAyIAAAEIgBAKIANAAIAAAIIgqAAIAAgGQAGAAACgDQADgDABgFIAAgPIAAgxIABgPIgSAAQgHAAgCAEQgDAFAAAIQgCAigIAYQgJAYgSAAQgIAAgEgDg");
	this.shape_9.setTransform(-25.925,1.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgZAxQgNgHgHgMQgHgMAAgQQAAgPAHgNQAHgNAMgIQAMgIAOAAQAPAAAMAHQAMAHAHANQAHAMAAAPQAAAPgHANQgHANgMAIQgMAIgPAAQgNAAgMgHgAgWgiQgIAMAAAUQAAAMADALQAEAMAIAIQAHAGAKAAQAPAAAHgMQAIgMAAgUQAAgTgIgQQgIgPgQAAQgPAAgHANg");
	this.shape_10.setTransform(-37.875,1.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("Ag2BKIAAgIQAHAAADgDQADgDAAgEIABgRIAAhYIABgPIgPABIAAgJIBgAAIABAlIgIAAQAAgSgHgHQgIgFgNAAIgOAAQgIABgDADQgCADgBAFIAAAOIAAAeIAQAAQAggCAPALQAOAKgBAVQAAANgGAKQgHAJgKAFQgMAGgOAAgAgVgBIAAAxIgCARIAQAAIAHAAQAQAAAJgIQAKgJAAgQQAAgigjAAg");
	this.shape_11.setTransform(-50.35,-0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AAIA1IAAgHQAHAAADgEQACgGAAgJIAAgRIgMAAIgCAAIgIAKIgFAIIgDAFQgHAJgFAFQgGAFgFABIgRAAIAAgHQAGAAADgDIALgMIAGgHIAHgKQAEgFAGgBQgdgFAAgXQAAgPAKgIQAKgJAPAAIA0AAIAAAHQgIAAgCAEQgDAFAAAJIAAA5IgBAOIAOAAIAAAJgAgLgmQgGAGAAALQAAALAGAHQAGAGAKAAIAPgBIAAghIABgMIgJAAIgHAAQgJAAgHAFg");
	this.shape_12.setTransform(-68.525,1.85);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("Ag0AzQgEgEAAgFQAAgEADgDQACgDAEAAQAFAAACACQADACAAADIAAADIABABQAFAAAFgJQAEgJAEgUQAEgTABgfIgUABIAAgJIBaAAIAAAHQgGAAgDADQgCADgBAEIgBAPIAAAyIAAAEIgBAKIANAAIAAAIIgqAAIAAgGQAGAAACgDQADgDABgFIAAgPIAAgxIABgPIgSAAQgHAAgCAEQgDAFAAAIQgCAigIAYQgJAYgSAAQgIAAgEgDg");
	this.shape_13.setTransform(-80.525,1.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AA6BcQAAgTgEgJQgEgJgKAAIhQAAQgJAAgEAJQgDAJAAATIgJAAIAAguIAHAAQALAAAHgMQAHgLAEgRQADgQABgUIACg1IgEAAIgQABIAAgJIBqAAIAAAHQgHAAgDADQgDADgBAEIAAAQIAABYIgBAQIASAAIAAAugAgBhTQgLABgBAKQgBArgFAbQgEAbgKAQIgEAFIA1AAQAIAAADgDQADgCAAgEIAAgPIAAhpg");
	this.shape_14.setTransform(-93.65,1.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.8,-14.7,267.70000000000005,29.5);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBCIAAg9IhJAAIAAA9IgOAAIAAiEIAOAAIAAA8IBJAAIAAg8IAOAAIAACEg");
	this.shape.setTransform(50.425,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1BDIgFgBIgBgBIAAgOQAFACAFAAQAGAAAEgDQAEgDAEgIQAEgIABgRQACgPAAgZIAAgpIBUAAIAACEIgOAAIAAh2Ig4AAIAAAbQAAAcgCATQgDAUgFAJQgFAKgGAEQgHAEgJgBg");
	this.shape_1.setTransform(35.275,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA1BCIAAhrIg1BGIg0hGIAABrIgPAAIAAiEIANAAIA2BHIA3hHIAMAAIAACEg");
	this.shape_2.setTransform(20.65,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DAC07B").s().p("AgSBCQgIgCgGgEIgJgGIgGgFIgCgCIARgSIAEAEQACACAIAEQAIADAIAAQAKAAAHgGQAFgGABgIQAAgKgHgGQgGgGgKAAQgGAAgGACIgHAFIgCADIgVgCIAGhLIBPAAIAAAZIg2AAIgCAYQAIgEAMAAQAUgBAMANQANAMAAAUQAAATgOANQgOAOgWAAQgJAAgJgCg");
	this.shape_3.setTransform(2.5,10.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAC07B").s().p("AgUASIAUgrIAVAMIgYAng");
	this.shape_4.setTransform(-6.35,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DAC07B").s().p("AgjA2QgPgNAAgTQAAgIADgIIAGgMIADgEIAlg5IAdAAIgcAsIAEgBQATAAAOAOQANANAAATQAAATgOANQgOAOgWAAQgVAAgOgOgAgPAGQgHAGAAAKQAAAIAHAHQAGAGAJAAQAKAAAHgGQAFgHAAgIQAAgKgFgGQgHgGgKAAQgJAAgGAGg");
	this.shape_5.setTransform(-14.2,10.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DAC07B").s().p("AgCBCIAAhgIgXAAIAAgSQAGAAAGgDIAIgEIAEgFIACgEIABgCIAYAAIAACEg");
	this.shape_6.setTransform(-24.225,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGBCIAAh2IgqAAIAAgOIBhAAIAAAOIgqAAIAAB2g");
	this.shape_7.setTransform(-36.375,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvAwQgUgTAAgdQAAgbAUgVQAUgTAbgBQAdABATATQAUAVAAAbQAAAdgUATQgTAVgdgBQgbABgUgVgAglgnQgQARAAAWQAAAXAQAQQAPAQAWAAQAXAAAQgQQAPgQAAgXQAAgWgPgRQgQgPgXAAQgWAAgPAPg");
	this.shape_8.setTransform(-49.625,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAyBCIAAiEIAOAAIAACEgAg/BCIAAiEIAOAAIAAAyIAiAAQASAAAMAMQAMALAAASQAAARgMANQgMAMgSgBgAgxA1IAiAAQAOAAAGgHQAIgJAAgMQAAgNgIgIQgGgHgOAAIgiAAg");
	this.shape_9.setTransform(103.1,-9.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgtBCIAAiEIAxAAQASABANAMQAMALgBATQABARgMALQgNAMgSAAIgkAAIAAAxgAggAEIAkAAQAMAAAJgHQAHgIABgMQgBgOgHgHQgJgIgMAAIgkAAg");
	this.shape_10.setTransform(89.05,-9.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAoBCIAAhqIhRBqIgMAAIAAiEIAOAAIAABrIBRhrIAMAAIAACEg");
	this.shape_11.setTransform(75,-9.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGBCIAAh2IgqAAIAAgOIBhAAIAAAOIgqAAIAAB2g");
	this.shape_12.setTransform(62.375,-9.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguBCIAAiEIAyAAQASABAMAMQAMALAAATQAAARgMALQgMAMgSAAIgjAAIAAAxgAgfAEIAjAAQAMAAAJgHQAHgIABgMQgBgOgHgHQgJgIgMAAIgjAAg");
	this.shape_13.setTransform(51.45,-9.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAvBCIgPgkIg+AAIgPAkIgQAAIA4iEIAMAAIA3CEgAAaAQIgag+IgYA+IAyAAg");
	this.shape_14.setTransform(38.175,-9.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguBCIAAiEIAyAAQAQABAKAJQALAKAAAOQAAAGgCAFQgBAGgCACIgFAGIgEACIgBABIACABIAFADIAHAGIAFAJQADAGgBAIQAAAQgLALQgLALgSgBgAghA1IAoAAQAMAAAHgGQAHgIAAgKQAAgMgHgHQgHgIgMAAIgoAAgAghgKIAlAAQALAAAFgFQAHgGAAgLQAAgJgHgGQgFgFgLAAIglAAg");
	this.shape_15.setTransform(25.6,-9.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAkBCIgvhCIgbAcIAAAmIgOAAIAAiEIAOAAIAABLIBEhLIASAAIgxA3IA2BNg");
	this.shape_16.setTransform(13.425,-9.35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgtBCIAAiEIBaAAIAAAOIhNAAIAAAsIA9AAIAAAMIg9AAIAAAxIBPAAIAAANg");
	this.shape_17.setTransform(-2.95,-9.35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAyBCIAAiEIAOAAIAACEgAg/BCIAAiEIAOAAIAAAyIAjAAQARAAAMAMQAMALAAASQAAARgMANQgMAMgRgBgAgxA1IAjAAQANAAAGgHQAIgJAAgMQAAgNgIgIQgGgHgNAAIgjAAg");
	this.shape_18.setTransform(-18,-9.35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAlBCIAAg9IhJAAIAAA9IgOAAIAAiEIAOAAIAAA8IBJAAIAAg8IAOAAIAACEg");
	this.shape_19.setTransform(-33.525,-9.35);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAoBYIAAhqIhRBqIgMAAIAAiEIAOAAIAABrIBRhrIAMAAIAACEgAgRhFQgIgHABgLIAKAAQAAAGAEAEQAFAFAFAAQAHAAAEgFQAFgEgBgGIAKAAQAAALgGAHQgIAHgLAAQgLAAgGgHg");
	this.shape_20.setTransform(-48.05,-11.525);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguBCIAAiEIBaAAIAAAOIhLAAIAAAsIA9AAIAAAMIg9AAIAAAxIBNAAIAAANg");
	this.shape_21.setTransform(-60.95,-9.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AA1BCIAAhrIg1BGIg0hGIAABrIgPAAIAAiEIANAAIA2BHIA3hHIAMAAIAACEg");
	this.shape_22.setTransform(-76.3,-9.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AguBCIAAiEIBaAAIAAAOIhLAAIAAAsIA9AAIAAAMIg9AAIAAAxIBOAAIAAANg");
	this.shape_23.setTransform(-90.55,-9.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgpAwQgUgTAAgdQAAgbAUgVQAUgTAcgBQAKAAAJADQAJAEAGADIALAIIAHAIIACACIgKAIIgCgBIgFgGIgJgHQgEgDgIgCQgIgDgIAAQgWAAgQAPQgQAQAAAXQAAAYAQAPQAQAQAWAAQAIAAAIgCQAIgCAFgEIAJgHIAFgGIACgCIAKAJIgDADIgGAGIgLAJQgGAEgKADQgJACgKAAQgcAAgUgUg");
	this.shape_24.setTransform(-104.175,-9.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.6,-22.9,227.2,45.9);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BUIAAinIA/AAQAXAAAPAPQAQAPAAAXQAAAXgQAOQgPAOgXAAIgtAAIAAA/gAgoAFIAtAAQAQAAAKgJQAKgKAAgQQAAgRgKgJQgKgKgQAAIgtAAg");
	this.shape.setTransform(115.45,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAzBUIAAiHIhnCHIgQAAIAAinIASAAIAACHIBniHIAQAAIAACng");
	this.shape_1.setTransform(97.7,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIBUIAAiWIg1AAIAAgRIB7AAIAAARIg1AAIAACWg");
	this.shape_2.setTransform(81.725,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BUIAAinIA/AAQAXAAAQAPQAPAPAAAXQAAAXgPAOQgQAOgXAAIgtAAIAAA/gAgoAFIAtAAQAQAAAKgJQAKgKAAgQQAAgRgKgJQgKgKgQAAIgtAAg");
	this.shape_3.setTransform(67.9,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA7BUIgUgvIhOAAIgTAvIgTAAIBGinIAQAAIBFCngAAgAUIgghOIggBOIBAAAg");
	this.shape_4.setTransform(51.15,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag7BUIAAinIBAAAQAUAAAOAMQANANAAASQAAAIgCAGQgCAGgDAEIgGAHIgFADIgCABIAEACIAGADIAIAIQAEAEAEAIQACAHAAAJQAAAVgOAOQgPANgWAAgAgpBDIAyAAQAPAAAJgIQAJgJAAgOQAAgOgJgKQgJgJgPgBIgyAAgAgpgMIAuAAQANgBAIgGQAIgIAAgNQAAgMgIgHQgIgHgNAAIguAAg");
	this.shape_5.setTransform(35.2,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAtBUIg7hUIgiAjIAAAxIgSAAIAAinIASAAIAABeIBWheIAXAAIg/BFIBFBig");
	this.shape_6.setTransform(19.825,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DAC07B").s().p("AgXBTQgLgDgGgDIgMgIQgGgEgBgDIgDgDIAVgWIAGAEQACADAKAFQALAEAKAAQANAAAHgHQAIgHAAgMQAAgMgIgIQgIgHgMAAQgJAAgGADQgIADgCADIgDAEIgZgDIAGhfIBlAAIAAAfIhEAAIgDAgQAKgGAPAAQAZAAAQAQQAQAPAAAYQAAAZgRARQgSARgcAAQgLAAgMgDg");
	this.shape_7.setTransform(-1.25,0.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DAC07B").s().p("AgyA/QgVgYAAgnQAAgmAVgZQAVgYAdAAQAeAAAVAYQAVAZAAAmQAAAngVAYQgVAZgeAAQgdAAgVgZgAgYgoQgLAPAAAZQAAAbALAOQAKAOAOAAQAPAAALgOQAKgOAAgbQAAgZgKgPQgLgOgPAAQgOAAgKAOg");
	this.shape_8.setTransform(-17.25,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DAC07B").s().p("AgCBUIAAh5IgeAAIAAgXQAJgBAGgDQAGgDAEgDIAGgGIACgFIABgCIAfAAIAACng");
	this.shape_9.setTransform(-31.1,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag8A9QgZgZAAgkQAAgjAZgZQAZgaAjAAQAkAAAZAaQAZAZAAAjQAAAkgZAZQgZAagkAAQgjAAgZgagAgwgwQgTATAAAdQAAAdATAVQAUATAcABQAdgBAUgTQATgVAAgdQAAgdgTgTQgUgVgdAAQgcAAgUAVg");
	this.shape_10.setTransform(-49.925,0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgzBUIAAinIBnAAIAAARIhVAAIAACWg");
	this.shape_11.setTransform(-65.425,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag6BUIAAinIBzAAIAAARIhhAAIAAA3IBNAAIAAAQIhNAAIAAA+IBjAAIAAARg");
	this.shape_12.setTransform(-80.1,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag0A9QgZgZAAgkQAAgjAZgZQAZgaAkAAQAMAAAMAEQAMAEAHAFIANAKIAJAJIACADIgMALIgBgDIgHgHIgLgJQgGgEgKgCQgKgEgKAAQgcAAgVAVQgTATAAAdQAAAdATAVQAVATAcABQAKAAAKgEQAKgDAHgDIAKgJIAIgHIACgDIAMALIgDADIgJAIIgNALQgIAFgMADQgMAFgMAAQgkAAgZgag");
	this.shape_13.setTransform(-97.35,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag7BUIAAinIBAAAQAUAAANAMQAOANAAASQAAAIgCAGQgCAGgDAEIgFAHIgGADIgBABIACACIAHADIAJAIQADAEAEAIQACAHAAAJQAAAVgOAOQgOANgYAAgAgpBDIAxAAQAQAAAJgIQAJgJAAgOQAAgOgJgKQgJgJgQgBIgxAAgAgpgMIAuAAQANgBAIgGQAIgIAAgNQAAgMgIgHQgIgHgNAAIguAAg");
	this.shape_14.setTransform(-114.15,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.7,-16.1,249.4,32.3);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnAxQgIgHAAgLQAAgMAKgIQAKgJAOgEQAOgEAPABIAAgNQAAgNgEgIQgEgIgMAAQgGAAgGACQgGADgDAGQADADAAAFQAAADgCADQgCADgFgBQgFABgCgDQgCgDgBgFQABgGAFgGQAFgGAJgDQAKgEALAAQASAAAIAJQAJAKgBAUIAAAuIgBAOIAPgBIAAAJIgeAAIgBgLQgQAPgQAAQgQAAgIgHgAgOAIQgNAGAAAOQAAAIAEAEQAFAEAHAAQAIAAAGgDQAHgDAGgHIAAgKIAAgUQgQAAgOAHg");
	this.shape.setTransform(47.45,13.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVA0IAAgGQAHAAACgDQADgDAAgFIABgOIAAgyIAAgNIgOAAQgJgBgEAFQgEAFAAANIgIAAIABgfIBcAAIACAfIgIAAQgBgJgBgEQgCgGgEgBQgDgCgHAAIgNAAIAABIIgBAOIAOAAIAAAIg");
	this.shape_1.setTransform(36.8,13.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhA0QgFABgFgFIgMgQIgJgLIgHgMIgHgIIgIABIgBAcIgBAOIAOAAIAAAIIgrAAIAAgGQAGAAADgDQACgDABgFIABgOIAAgyIABgOIgOAAIAAgIIArAAIAAAGQgGAAgDADQgCADgBAFIAAAOIAAAOIAIAAIAYgaQAIgJAFgCIgPAAIAAgIIAnAAIAAAGQgKABgHAFQgIAGgJAKIgPARIAFAEIAHAGIAPATIAEAHQAFAGAGAFQAGAFAEAAIAAAGg");
	this.shape_2.setTransform(26.275,13.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWAxQgMgHgHgMQgGgNAAgRQAAgOAGgNQAHgNAMgHQAMgIAOAAQAMAAAKAGQAKAEAFALQAGAKAAAPIhJACQAAAYAJAOQAIAOARAAQAKAAAKgFQAKgFAFgHIAFAEQgIAMgMAGQgNAGgMAAQgOAAgLgHgAAbgQQAAgMgFgKQgGgIgLgBQgZABgFAeIA0AAIAAAAg");
	this.shape_3.setTransform(14.725,13.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMA0IAAgGQAGAAACgDQADgDABgFIABgOIAAgyIABgOIglAAQgGAAgCADQgEACAAAEIgBAOIAAAyIgBAOIAOAAIAAAIIgrAAIAAgGQAGAAADgDQACgDAAgFIABgOIAAgyIABgOIgNAAIAAgIIBtAAIAAAGQgFAAgEADQgCADAAAFIgBAOIAAAyIgCAOIAOAAIAAAIg");
	this.shape_4.setTransform(2.55,13.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVAyQgMgHgHgMQgHgNAAgQQAAgOAHgNQAHgNANgJQAMgIAPAAQALAAAJAEQAJAEAFAFQAEAGAAAHQABAFgDADQgDADgFAAQgEAAgDgDQgCgDAAgEQAAgEADgEQgCgGgHgDQgGgCgGAAQgKAAgHAFQgIAGgEAJQgEAKgBAOQABAOAEALQAEALAJAGQAIAGAJAAQAKAAAJgFQAJgFAGgIIAFAEQgIANgMAGQgMAGgMAAQgNAAgMgGg");
	this.shape_5.setTransform(-9.4,13.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAxQgNgHgHgMQgHgMAAgPQAAgQAHgNQAHgOAMgHQAMgIAOAAQAPAAAMAHQAMAHAHAMQAHAMAAAPQAAAPgHAOQgHAOgMAHQgMAIgPAAQgNAAgMgHgAgWgiQgIANAAASQAAANADAMQAEALAIAIQAHAHAKAAQAPAAAHgNQAIgNAAgSQAAgVgIgOQgIgQgQAAQgPAAgHANg");
	this.shape_6.setTransform(-21.175,13.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag1BRIAAgGQAGAAADgEQACgDABgEIABgPIAAhlIABgNIgPABIAAgJIARgBQAEgBADgEIAHAAIABAMQAGgGAJgDQAHgEAJAAQAMAAALAGQALAHAGAMQAGALAAAQQAAARgHANQgHANgNAJQgMAHgOAAQgOAAgKgHIAAAjIgBAOIANgBIAAAJgAgLhCQgGADgFAFIAAANIAAA8QAKAHANABQAKAAAHgHQAIgFAEgLQAEgLAAgOQAAgSgIgNQgIgOgQAAQgGAAgHAEg");
	this.shape_7.setTransform(-33.675,15.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAMA0IAAgGQAGAAADgDQADgDAAgFIAAgOIAAgyIABgOIgkAAQgGAAgDADQgDACAAAEIAAAOIAAAyIgBAOIANAAIAAAIIgsAAIAAgGQAHAAACgDQADgDABgFIABgOIAAgyIAAgOIgNAAIAAgIIBuAAIAAAGQgHAAgCADQgDADgBAFIAAAOIgBAyIgBAOIAOAAIAAAIg");
	this.shape_8.setTransform(-46.25,13.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAxQgNgHgHgMQgHgMAAgQQAAgPAHgNQAHgNAMgIQAMgIAOAAQAPAAAMAHQAMAHAHANQAHAMAAAPQAAAPgHANQgHANgMAIQgMAIgPAAQgNAAgMgHgAgWgiQgIAMAAAUQAAAMADALQAEAMAIAIQAHAGAKAAQAPAAAHgMQAIgMAAgUQAAgTgIgQQgIgPgQAAQgPAAgHANg");
	this.shape_9.setTransform(92.575,-9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgnA1IAAgHQAGAAADgDQACgDABgFIABgPIAAgxIABgPIgOABIAAgJIBOAAIABAgIgIAAQAAgJgDgFQgCgFgGgCQgGgCgMAAQgEAAgDACQgCADgBAFIgBAOIAAAxIgBAOIAMAAIAAAJg");
	this.shape_10.setTransform(82.2,-9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAxQgNgHgHgMQgHgMAAgQQAAgPAHgNQAHgNAMgIQAMgIAOAAQAPAAAMAHQAMAHAHANQAHAMAAAPQAAAPgHANQgHANgMAIQgMAIgPAAQgNAAgMgHgAgWgiQgIAMAAAUQAAAMADALQAEAMAIAIQAHAGAKAAQAPAAAHgMQAIgMAAgUQAAgTgIgQQgIgPgQAAQgPAAgHANg");
	this.shape_11.setTransform(71.175,-9.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAhA1QgFgBgFgEIgMgPIgJgMIgHgMIgHgIIgIAAIgBAdIgBAOIAOAAIAAAJIgrAAIAAgHQAGAAADgDQACgDABgFIABgPIAAgxIABgPIgOABIAAgJIArAAIAAAHQgGAAgDADQgCADgBAEIAAAQIAAANIAIAAIAYgbQAIgIAFgDIgPABIAAgJIAnAAIAAAHQgKABgHAGQgIAFgJAKIgPARIAFAFIAHAGIAPATIAEAGQAFAGAGAFQAGAFAEAAIAAAHg");
	this.shape_12.setTransform(59.725,-9.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAyQgMgHgHgNQgHgLAAgRQAAgOAHgNQAHgOANgHQAMgJAPAAQALAAAJADQAJAFAFAFQAFAGgBAHQABAFgDADQgDADgFAAQgEAAgDgDQgCgDAAgDQAAgFADgEQgCgHgHgCQgGgCgHAAQgJAAgHAFQgHAFgFAKQgEALgBAOQABANAEAKQAFALAIAHQAIAGAJAAQAKAAAJgFQAJgFAGgIIAFAEQgIAMgMAHQgMAGgMAAQgNAAgMgGg");
	this.shape_13.setTransform(48.3,-9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AguA1IAAgHQAHAAADgEQADgFAAgJIAAg8IAAgMIgNABIAAgJIA2AAQAPAAAJAHQAJAFAAAMQAAAJgFAIQgGAGgMADQAOABAIAGQAHAHAAALQAAAIgFAHQgFAIgIADQgIADgKABgAgPAgIgBAMIAKAAIAHAAQAMAAAHgFQAHgFAAgKQAAgLgHgFQgIgFgLAAIgQAAgAgLgpQgEADAAAJIAAAZIAPAAQALAAAGgGQAFgHAAgJQAAgLgGgDQgGgEgKAAQgHAAgEADg");
	this.shape_14.setTransform(37.375,-9.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAxQgNgHgHgMQgHgMAAgQQAAgPAHgNQAHgNAMgIQAMgIAOAAQAPAAAMAHQAMAHAHANQAHAMAAAPQAAAPgHANQgHANgMAIQgMAIgPAAQgNAAgMgHgAgWgiQgIAMAAAUQAAAMADALQAEAMAIAIQAHAGAKAAQAPAAAHgMQAIgMAAgUQAAgTgIgQQgIgPgQAAQgPAAgHANg");
	this.shape_15.setTransform(25.625,-9.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhA1QgFgBgFgEIgMgPIgJgMIgHgMIgHgIIgIAAIgBAdIgBAOIAOAAIAAAJIgrAAIAAgHQAGAAADgDQACgDABgFIABgPIAAgxIABgPIgOABIAAgJIArAAIAAAHQgGAAgDADQgCADgBAEIAAAQIAAANIAIAAIAYgbQAIgIAFgDIgPABIAAgJIAnAAIAAAHQgKABgHAGQgIAFgJAKIgPARIAFAFIAHAGIAPATIAEAGQAFAGAGAFQAGAFAEAAIAAAHg");
	this.shape_16.setTransform(14.175,-9.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgVAyQgMgHgHgNQgHgLAAgRQAAgOAHgNQAHgOANgHQAMgJAPAAQALAAAJADQAJAFAFAFQAEAGAAAHQABAFgDADQgDADgFAAQgEAAgDgDQgCgDAAgDQAAgFADgEQgCgHgHgCQgGgCgGAAQgKAAgHAFQgIAFgEAKQgEALgBAOQABANAEAKQAEALAJAHQAIAGAJAAQAKAAAJgFQAJgFAGgIIAFAEQgIAMgMAHQgMAGgMAAQgNAAgMgGg");
	this.shape_17.setTransform(2.75,-9.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAxQgNgHgHgMQgHgMAAgQQAAgPAHgNQAHgNAMgIQAMgIAOAAQAPAAAMAHQAMAHAHANQAHAMAAAPQAAAPgHANQgHANgMAIQgMAIgPAAQgNAAgMgHgAgWgiQgIAMAAAUQAAAMADALQAEAMAIAIQAHAGAKAAQAPAAAHgMQAIgMAAgUQAAgTgIgQQgIgPgQAAQgPAAgHANg");
	this.shape_18.setTransform(-9.025,-9.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGBKIgLgaIgZg3IgRgrIgBAJIgCBXIAAAFIgBANIAQAAIAAAJIgoAAIAAgIQAJAAACgEQADgFAAgKIAFhvIgPABIAAgJIAgAAIAdBCIAXA2IALgbIASgsIAVgxIAfAAIAAAGQgIAAgDAFQgEAEAAAKIAAAFIAGBeIAAANIAPAAIAAAJIgvAAIAAgIQAJAAACgEQADgEAAgLIAAgGIgFhYIgBADIgCAEIgvBzg");
	this.shape_19.setTransform(-24.675,-11.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgpBNQgEgDAAgGQAAgEADgDQADgDADAAQAFAAACADQACADAAADIAAADIACABQADgBADgCQACgCACgEQAGgIAJgbIghhGQgIgSgDgLIgKABIAAgJIAsAAIAAAGIgBAAQgKABAAAHQAAAGAFALIAYA0IASg0QAHgVADgCIgPABIAAgJIAhAAIAAAGQgGADgEAGQgEAGgFAMIgaBJIgLAgQgGAKgGAHQgGAGgJAAQgHAAgFgEg");
	this.shape_20.setTransform(-45.4,-6.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAcA1IAAgHQAMABAAgNIgBgGIgIg1IgfBOIgIAAIghhQIgHA7IgDAMIANAAIAAAJIggAAIAAgHQAGABADgEQACgDABgIIAJhMIgMABIAAgJIAcAAIAhBQIAhhQIAZAAIAAAHQgLAAAAAKIAAAFIAKA/IAAAFIAAAGIAOAAIAAAJg");
	this.shape_21.setTransform(-64.125,-9.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAxQgNgHgHgMQgHgMAAgQQAAgPAHgNQAHgNAMgIQAMgIAOAAQAPAAAMAHQAMAHAHANQAHAMAAAPQAAAPgHANQgHANgMAIQgMAIgPAAQgNAAgMgHgAgWgiQgIAMAAAUQAAAMADALQAEAMAIAIQAHAGAKAAQAPAAAHgMQAIgMAAgUQAAgTgIgQQgIgPgQAAQgPAAgHANg");
	this.shape_22.setTransform(-78.025,-9.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AA6BcQAAgTgEgJQgEgJgJAAIhQAAQgKAAgEAJQgDAJgBATIgJAAIAAguIAJAAQAJAAAJgMQAGgLADgRQAEgQACgUIACg1IgGAAIgPABIAAgJIBqAAIAAAHQgHAAgDADQgDADAAAEIgBAQIAABYIAAAQIASAAIAAAugAgChTQgKABAAAKQgCArgFAbQgEAbgKAQIgEAFIA1AAQAIAAADgDQADgCAAgEIABgPIAAhpg");
	this.shape_23.setTransform(-91.45,-9.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.8,-25.9,267.70000000000005,51.9);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,250), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Символ6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(220.95,0.35,1,1,45,0,0,1.2,1.2);

	this.instance_1 = new lib.Символ6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.05,0.35,1,1,44.9994,0,0,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DAC07B").s().p("AxNAFIAAgJMAibAAAIAAAJg");
	this.shape.setTransform(110.225,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-1.3,225.70000000000002,3.7);


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Символ10("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.05,-86.45,1,1,0,0,0,178.1,45.5);
	this.instance.alpha = 0.75;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib._300300render3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-178.05,-132,0.8601,0.8601);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178,-132,356.1,264.1);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AIrFoIAArPIALAAIAALPg");
	var mask_graphics_1 = new cjs.Graphics().p("AIrFoIAArPIALAAIAALPg");
	var mask_graphics_2 = new cjs.Graphics().p("AIpFoIAArPIANAAIAALPg");
	var mask_graphics_3 = new cjs.Graphics().p("AIkFoIAArPIAUAAIAALPg");
	var mask_graphics_4 = new cjs.Graphics().p("AIZFoIAArPIAjAAIAALPg");
	var mask_graphics_5 = new cjs.Graphics().p("AIHFoIAArPIA7AAIAALPg");
	var mask_graphics_6 = new cjs.Graphics().p("AHtFoIAArPIBdAAIAALPg");
	var mask_graphics_7 = new cjs.Graphics().p("AHJFoIAArPICOAAIAALPg");
	var mask_graphics_8 = new cjs.Graphics().p("AGYFoIAArPIDPAAIAALPg");
	var mask_graphics_9 = new cjs.Graphics().p("AFZFoIAArPIEjAAIAALPg");
	var mask_graphics_10 = new cjs.Graphics().p("AELFoIAArPIGLAAIAALPg");
	var mask_graphics_11 = new cjs.Graphics().p("ACrFoIAArPIILAAIAALPg");
	var mask_graphics_12 = new cjs.Graphics().p("AA5FoIAArPIKkAAIAALPg");
	var mask_graphics_13 = new cjs.Graphics().p("AhNFoIAArPINXAAIAALPg");
	var mask_graphics_14 = new cjs.Graphics().p("AjrFoIAArPIQqAAIAALPg");
	var mask_graphics_15 = new cjs.Graphics().p("AmbFoIAArPIUVAAIAALPg");
	var mask_graphics_16 = new cjs.Graphics().p("Ao5FoIAArPIXoAAIAALPg");
	var mask_graphics_17 = new cjs.Graphics().p("ArAFoIAArPIacAAIAALPg");
	var mask_graphics_18 = new cjs.Graphics().p("AszFoIAArPIc2AAIAALPg");
	var mask_graphics_19 = new cjs.Graphics().p("AuSFoIAArPIe1AAIAALPg");
	var mask_graphics_20 = new cjs.Graphics().p("AvgFoIAArPMAgdAAAIAALPg");
	var mask_graphics_21 = new cjs.Graphics().p("AwfFoIAArPMAhxAAAIAALPg");
	var mask_graphics_22 = new cjs.Graphics().p("AxQFoIAArPMAizAAAIAALPg");
	var mask_graphics_23 = new cjs.Graphics().p("AxxFoIAArPMAjjAAAIAALPg");
	var mask_graphics_24 = new cjs.Graphics().p("AyDFoIAArPMAkHAAAIAALPg");
	var mask_graphics_25 = new cjs.Graphics().p("AyOFoIAArPMAkdAAAIAALPg");
	var mask_graphics_26 = new cjs.Graphics().p("AyWFoIAArPMAktAAAIAALPg");
	var mask_graphics_27 = new cjs.Graphics().p("AyZFoIAArPMAkzAAAIAALPg");
	var mask_graphics_28 = new cjs.Graphics().p("AybFoIAArPMAk3AAAIAALPg");
	var mask_graphics_29 = new cjs.Graphics().p("AybFoIAArPMAk3AAAIAALPg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:56.5504,y:-1.95}).wait(1).to({graphics:mask_graphics_1,x:56.5601,y:-1.95}).wait(1).to({graphics:mask_graphics_2,x:56.6279,y:-1.95}).wait(1).to({graphics:mask_graphics_3,x:56.8118,y:-1.95}).wait(1).to({graphics:mask_graphics_4,x:57.17,y:-1.95}).wait(1).to({graphics:mask_graphics_5,x:57.7605,y:-1.95}).wait(1).to({graphics:mask_graphics_6,x:58.6414,y:-1.95}).wait(1).to({graphics:mask_graphics_7,x:59.8709,y:-1.95}).wait(1).to({graphics:mask_graphics_8,x:61.5069,y:-1.95}).wait(1).to({graphics:mask_graphics_9,x:63.6075,y:-1.95}).wait(1).to({graphics:mask_graphics_10,x:66.231,y:-1.95}).wait(1).to({graphics:mask_graphics_11,x:69.4352,y:-1.95}).wait(1).to({graphics:mask_graphics_12,x:73.2784,y:-1.95}).wait(1).to({graphics:mask_graphics_13,x:77.8185,y:-1.95}).wait(1).to({graphics:mask_graphics_14,x:83.1138,y:-1.95}).wait(1).to({graphics:mask_graphics_15,x:89.0117,y:-1.95}).wait(1).to({graphics:mask_graphics_16,x:94.3069,y:-1.95}).wait(1).to({graphics:mask_graphics_17,x:98.8471,y:-1.95}).wait(1).to({graphics:mask_graphics_18,x:102.6902,y:-1.95}).wait(1).to({graphics:mask_graphics_19,x:105.8945,y:-1.95}).wait(1).to({graphics:mask_graphics_20,x:108.5179,y:-1.95}).wait(1).to({graphics:mask_graphics_21,x:110.6186,y:-1.95}).wait(1).to({graphics:mask_graphics_22,x:112.2546,y:-1.95}).wait(1).to({graphics:mask_graphics_23,x:113.1547,y:-1.95}).wait(1).to({graphics:mask_graphics_24,x:113.1632,y:-1.95}).wait(1).to({graphics:mask_graphics_25,x:113.169,y:-1.95}).wait(1).to({graphics:mask_graphics_26,x:113.1725,y:-1.95}).wait(1).to({graphics:mask_graphics_27,x:113.1743,y:-1.95}).wait(1).to({graphics:mask_graphics_28,x:113.1749,y:-1.95}).wait(1).to({graphics:mask_graphics_29,x:113.075,y:-1.95}).wait(51));

	// Слой_1
	this.instance = new lib.Символ5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(113.1,1.85,1,1,0,0,0,110.2,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,225.7,3.7);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_14
	this.instance = new lib.Анимация7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(149.75,237.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(441).to({_off:false},0).to({alpha:1},10).wait(86));

	// Слой_15
	this.instance_1 = new lib.Символ7("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150.1,167.5,1,1,0,0,0,112.9,1.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(406).to({_off:false},0).wait(131));

	// t3
	this.instance_2 = new lib.Анимация6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.05,129.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(407).to({_off:false},0).to({y:145.2,alpha:1},34,cjs.Ease.cubicOut).wait(96));

	// logo
	this.instance_3 = new lib.Символ4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150.7,94.2,0.6432,0.6432,0,0,0,144.9,104);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(392).to({_off:false},0).to({y:74.2,alpha:1},30,cjs.Ease.cubicOut).wait(115));

	// black
	this.instance_4 = new lib.Символ2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},44,cjs.Ease.cubicInOut).to({_off:true},1).wait(492));

	// Слой_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_143 = new cjs.Graphics().p("A5dD/IAAn9MAy7AAAIAAH9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(143).to({graphics:mask_graphics_143,x:154,y:274.525}).wait(246).to({graphics:null,x:0,y:0}).wait(148));

	// Слой_5
	this.instance_5 = new lib.Анимация10("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(150.05,238.55);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(280).to({_off:false},0).to({y:274.55},30,cjs.Ease.cubicOut).wait(63).to({startPosition:0},0).to({y:314.55},15,cjs.Ease.cubicInOut).to({_off:true},1).wait(148));

	// t_2
	this.instance_6 = new lib.Анимация3("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150.05,224.8);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(143).to({_off:false},0).to({y:274.8},30,cjs.Ease.cubicOut).wait(82).to({startPosition:0},0).to({y:328.8},27,cjs.Ease.cubicInOut).to({_off:true},1).wait(254));

	// t_1
	this.instance_7 = new lib.Анимация2("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150.05,259.5);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).to({y:273.5,alpha:1},21,cjs.Ease.cubicOut).wait(66).to({startPosition:0},0).to({y:329.5},17,cjs.Ease.cubicInOut).to({_off:true},1).wait(388));

	// up
	this.instance_8 = new lib.Символ1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:398.9},51,cjs.Ease.cubicInOut).wait(322).to({startPosition:0},0).to({y:150},35,cjs.Ease.cubicInOut).wait(129));

	// t_32
	this.instance_9 = new lib.Анимация9("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150.35,1.05);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(269).to({_off:false},0).to({y:20.05,alpha:1},18,cjs.Ease.quartOut).wait(98).to({startPosition:0},0).to({y:-19.95},18,cjs.Ease.cubicInOut).to({_off:true},1).wait(133));

	// t_22
	this.instance_10 = new lib.Анимация5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.35,0.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(161).to({_off:false},0).to({y:21.7,alpha:1},16,cjs.Ease.quartOut).wait(74).to({startPosition:0},0).to({alpha:0},12,cjs.Ease.cubicInOut).to({_off:true},1).wait(273));

	// t_12
	this.instance_11 = new lib.Анимация1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.35,9.95);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(17).to({_off:false},0).to({y:29.95,alpha:1},34,cjs.Ease.quartOut).wait(79).to({startPosition:0},0).to({alpha:0},15,cjs.Ease.quartInOut).to({_off:true},1).wait(391));

	// Слой_3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_257 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_258 = new cjs.Graphics().p("A3bSxMAAAgq+MAu3AAAMAAAAq+I3aFAg");
	var mask_1_graphics_259 = new cjs.Graphics().p("A3bSyMAAAgq+MAu3AAAMAAAAq+I3aFAg");
	var mask_1_graphics_260 = new cjs.Graphics().p("A3bS0MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_261 = new cjs.Graphics().p("A3bS5MAAAgq+MAu3AAAMAAAAq+I3aFAg");
	var mask_1_graphics_262 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_263 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_264 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_265 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_266 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_267 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_268 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_269 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_270 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_271 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_272 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_273 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_274 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_275 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_276 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_277 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_278 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_279 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_280 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_281 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_282 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_283 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_284 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_285 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_286 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_287 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_288 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_289 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_290 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_291 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_292 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_1_graphics_293 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(257).to({graphics:mask_1_graphics_257,x:150,y:-156.475}).wait(1).to({graphics:mask_1_graphics_258,x:150,y:-154.9869}).wait(1).to({graphics:mask_1_graphics_259,x:150,y:-154.8951}).wait(1).to({graphics:mask_1_graphics_260,x:150,y:-154.6458}).wait(1).to({graphics:mask_1_graphics_261,x:150,y:-154.1605}).wait(1).to({graphics:mask_1_graphics_262,x:150,y:-153.1957}).wait(1).to({graphics:mask_1_graphics_263,x:150,y:-150.8083}).wait(1).to({graphics:mask_1_graphics_264,x:150,y:-147.4765}).wait(1).to({graphics:mask_1_graphics_265,x:150,y:-143.0429}).wait(1).to({graphics:mask_1_graphics_266,x:150,y:-137.35}).wait(1).to({graphics:mask_1_graphics_267,x:150,y:-130.2404}).wait(1).to({graphics:mask_1_graphics_268,x:150,y:-121.5568}).wait(1).to({graphics:mask_1_graphics_269,x:150,y:-111.1417}).wait(1).to({graphics:mask_1_graphics_270,x:150,y:-98.8377}).wait(1).to({graphics:mask_1_graphics_271,x:150,y:-84.4873}).wait(1).to({graphics:mask_1_graphics_272,x:150,y:-67.9333}).wait(1).to({graphics:mask_1_graphics_273,x:150,y:-49.0182}).wait(1).to({graphics:mask_1_graphics_274,x:150,y:-27.5846}).wait(1).to({graphics:mask_1_graphics_275,x:150,y:-3.475}).wait(1).to({graphics:mask_1_graphics_276,x:150,y:20.6346}).wait(1).to({graphics:mask_1_graphics_277,x:150,y:42.0682}).wait(1).to({graphics:mask_1_graphics_278,x:150,y:60.9833}).wait(1).to({graphics:mask_1_graphics_279,x:150,y:77.5373}).wait(1).to({graphics:mask_1_graphics_280,x:150,y:91.8877}).wait(1).to({graphics:mask_1_graphics_281,x:150,y:104.1917}).wait(1).to({graphics:mask_1_graphics_282,x:150,y:114.6068}).wait(1).to({graphics:mask_1_graphics_283,x:150,y:123.2904}).wait(1).to({graphics:mask_1_graphics_284,x:150,y:130.4}).wait(1).to({graphics:mask_1_graphics_285,x:150,y:136.0929}).wait(1).to({graphics:mask_1_graphics_286,x:150,y:140.5265}).wait(1).to({graphics:mask_1_graphics_287,x:150,y:143.8583}).wait(1).to({graphics:mask_1_graphics_288,x:150,y:146.2457}).wait(1).to({graphics:mask_1_graphics_289,x:150,y:147.846}).wait(1).to({graphics:mask_1_graphics_290,x:150,y:148.8167}).wait(1).to({graphics:mask_1_graphics_291,x:150,y:149.3151}).wait(1).to({graphics:mask_1_graphics_292,x:150,y:149.4988}).wait(1).to({graphics:mask_1_graphics_293,x:150,y:149.525}).wait(1).to({graphics:null,x:0,y:0}).wait(243));

	// Слой_2
	this.instance_12 = new lib.Анимация8("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(171.05,128);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(257).to({_off:false},0).to({x:126.05},134).wait(146));

	// plan
	this.instance_13 = new lib.Символ9("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(267.3,144.05,0.2598,0.2598,90,0,0,375.7,149.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(161).to({_off:false},0).to({x:247.3,alpha:1},22,cjs.Ease.cubicOut).to({_off:true},109).wait(245));

	// Слой_10 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_137 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_138 = new cjs.Graphics().p("A3bSxMAAAgq+MAu3AAAMAAAAq+I3aFAg");
	var mask_2_graphics_139 = new cjs.Graphics().p("A3bSyMAAAgq+MAu3AAAMAAAAq+I3aFAg");
	var mask_2_graphics_140 = new cjs.Graphics().p("A3bS0MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_141 = new cjs.Graphics().p("A3bS5MAAAgq+MAu3AAAMAAAAq+I3aFAg");
	var mask_2_graphics_142 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_143 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_144 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_145 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_146 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_147 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_148 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_149 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_150 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_151 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_152 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_153 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_154 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_155 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_156 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_157 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_158 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_159 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_160 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_161 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_162 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_163 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_164 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_165 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_166 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_167 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_168 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_169 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_170 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_171 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_172 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");
	var mask_2_graphics_173 = new cjs.Graphics().p("A3bS/MAAAgq9MAu3AAAMAAAAq9I3aFAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(137).to({graphics:mask_2_graphics_137,x:150,y:-156.475}).wait(1).to({graphics:mask_2_graphics_138,x:150,y:-154.9869}).wait(1).to({graphics:mask_2_graphics_139,x:150,y:-154.8951}).wait(1).to({graphics:mask_2_graphics_140,x:150,y:-154.6458}).wait(1).to({graphics:mask_2_graphics_141,x:150,y:-154.1605}).wait(1).to({graphics:mask_2_graphics_142,x:150,y:-153.1957}).wait(1).to({graphics:mask_2_graphics_143,x:150,y:-150.8083}).wait(1).to({graphics:mask_2_graphics_144,x:150,y:-147.4765}).wait(1).to({graphics:mask_2_graphics_145,x:150,y:-143.0429}).wait(1).to({graphics:mask_2_graphics_146,x:150,y:-137.35}).wait(1).to({graphics:mask_2_graphics_147,x:150,y:-130.2404}).wait(1).to({graphics:mask_2_graphics_148,x:150,y:-121.5568}).wait(1).to({graphics:mask_2_graphics_149,x:150,y:-111.1417}).wait(1).to({graphics:mask_2_graphics_150,x:150,y:-98.8377}).wait(1).to({graphics:mask_2_graphics_151,x:150,y:-84.4873}).wait(1).to({graphics:mask_2_graphics_152,x:150,y:-67.9333}).wait(1).to({graphics:mask_2_graphics_153,x:150,y:-49.0182}).wait(1).to({graphics:mask_2_graphics_154,x:150,y:-27.5846}).wait(1).to({graphics:mask_2_graphics_155,x:150,y:-3.475}).wait(1).to({graphics:mask_2_graphics_156,x:150,y:20.6346}).wait(1).to({graphics:mask_2_graphics_157,x:150,y:42.0682}).wait(1).to({graphics:mask_2_graphics_158,x:150,y:60.9833}).wait(1).to({graphics:mask_2_graphics_159,x:150,y:77.5373}).wait(1).to({graphics:mask_2_graphics_160,x:150,y:91.8877}).wait(1).to({graphics:mask_2_graphics_161,x:150,y:104.1917}).wait(1).to({graphics:mask_2_graphics_162,x:150,y:114.6068}).wait(1).to({graphics:mask_2_graphics_163,x:150,y:123.2904}).wait(1).to({graphics:mask_2_graphics_164,x:150,y:130.4}).wait(1).to({graphics:mask_2_graphics_165,x:150,y:136.0929}).wait(1).to({graphics:mask_2_graphics_166,x:150,y:140.5265}).wait(1).to({graphics:mask_2_graphics_167,x:150,y:143.8583}).wait(1).to({graphics:mask_2_graphics_168,x:150,y:146.2457}).wait(1).to({graphics:mask_2_graphics_169,x:150,y:147.846}).wait(1).to({graphics:mask_2_graphics_170,x:150,y:148.8167}).wait(1).to({graphics:mask_2_graphics_171,x:150,y:149.3151}).wait(1).to({graphics:mask_2_graphics_172,x:150,y:149.4988}).wait(1).to({graphics:mask_2_graphics_173,x:150,y:149.525}).wait(1).to({graphics:null,x:0,y:0}).wait(363));

	// family
	this.instance_14 = new lib.Символ3копия("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(144.5,139.15,1.0488,1.0488,0,0,0,174,108.4);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(137).to({_off:false},0).to({x:128.5},155).to({_off:true},1).wait(244));

	// render
	this.instance_15 = new lib.Символ3("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(178.5,139.15,1.0489,1.0489,0,0,0,174,108.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleX:1.0488,scaleY:1.0488,x:140.5},171).to({_off:true},1).wait(365));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(537));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-38.8,423.9,587.6999999999999);


// stage content:
(lib._300x300 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(146,128.5,195,171.5);
// library properties:
lib.properties = {
	id: '0DA85D765483451782C6CB3230505573',
	width: 300,
	height: 300,
	fps: 31,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"300x300_atlas_P_.png", id:"300x300_atlas_P_"},
		{src:"300x300_atlas_NP_.jpg", id:"300x300_atlas_NP_"}
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