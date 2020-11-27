(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"200x300_atlas_P_", frames: [[0,0,200,242]]},
		{name:"200x300_atlas_NP_", frames: [[0,302,261,176],[302,0,200,300],[0,0,300,300]]}
];


// symbols:



(lib._2000300 = function() {
	this.initialize(ss["200x300_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._200300_bg = function() {
	this.initialize(ss["200x300_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._300300 = function() {
	this.initialize(ss["200x300_atlas_NP_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bank = function() {
	this.initialize(ss["200x300_atlas_P_"]);
	this.gotoAndStop(0);
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


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKALQgFgEAAgHQAAgGAFgEQAEgFAGAAQAHAAAEAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape.setTransform(118.275,27.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqA5IAAhzIBNAAIAAAWIgzAAIAAATIAOAAQATgBANAKQAOAJAAASQAAAQgMAKQgPAOgfAAQgRAAgLgCgAgQACIAAAkIAKABQAKAAAGgFQAGgGAAgJQAAgHgGgFQgHgGgKAAg");
	this.shape_1.setTransform(110.9,23.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglA6IACgVIAJAAQALAAAFgLQABgCgCgDIgnhQIAeAAIARAqIAHAVIAAAAIAHgWIANgpIAbAAIgWA5QgNAigKAMQgLAPgTAAQgIAAgFgBg");
	this.shape_2.setTransform(100.375,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA7IAAhyQAOgDAWAAQAXAAALAJQANAKAAARQAAASgKAKQgOALgYABIgJgBIAAAqgAgPglIAAAjIAJABQAKAAAFgGQAHgFAAgJQAAgRgUAAIgLABg");
	this.shape_3.setTransform(90.5,23.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWA6IAAgwIgrAAIAAAwIgaAAIAAh0IAaAAIAAAtIArAAIAAgtIAaAAIAAB0g");
	this.shape_4.setTransform(116.975,9.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyAmQAIgBAGgFQAIgJABgeIAAgzIBOAAIAAB0IgbAAIAAhfIgZAAIAAAcQAAAYgFAOQgEARgNAIQgKAFgNAAg");
	this.shape_5.setTransform(104.8,9.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAnA6IgCgtIgBgvIgBAAQgFAXgHAWIgPAtIgTAAIgNgtQgGgWgFgXIAAAAIgCAwIgCAsIgZAAIAIh0IAjAAIALAoQAIAXACARIAAAAIALgpIANgnIAiAAIAGB0g");
	this.shape_6.setTransform(92.5,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgNA7IAAhfIgfAAIAAgWIBZAAIAAAWIggAAIAABfg");
	this.shape_7.setTransform(19.45,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpArQgOgQAAgaQAAgaAPgRQAQgRAZAAQAaAAAPARQAOAQAAAZQAAAcgPARQgQAQgZAAQgZAAgQgRgAgUgbQgHALAAARQAAARAHALQAIAKAMABQANAAAIgMQAHgLAAgRQAAgQgHgLQgIgMgNAAQgMAAgIAMg");
	this.shape_8.setTransform(8.525,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.4,35.9);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._200300_bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,300);


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


(lib.Анимация8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAmQgDgDAAgFQAAgFADgDQADgDAEAAQAFAAACADQADADABAFQAAAFgDADQgDADgFAAQgEAAgDgDgAgGANIgDg1IASAAIgCA1g");
	this.shape.setTransform(57.725,-0.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAbAoIgBgeIgBghIgBAAQgDAPgGAQIgJAfIgOAAIgIgfIgIgfIgBAhIgCAeIgRAAIAGhQIAYAAIAIAbIAGAdIAIgdIAIgbIAYAAIAFBQg");
	this.shape_1.setTransform(51.025,-1.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAeQgKgMAAgSQAAgRALgMQALgMAQAAQATAAAKAMQAKALAAASQAAATgLALQgLAMgRAAQgSAAgKgMgAgNgTQgGAIAAALQABAMAFAIQAFAHAIAAQAJAAAGgIQAEgHAAgMQAAgLgEgHQgGgIgJAAQgIAAgFAHg");
	this.shape_2.setTransform(41.65,-1.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAoIAAhAIgVAAIAAgQIA9AAIAAAQIgWAAIAABAg");
	this.shape_3.setTransform(34.1,-1.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcApIAAhPQAKgCAOAAQAQAAAJAHQAIAHAAAMQAAAMgIAGQgJAIgQAAIgGAAIAAAdgAgKgZIAAAYIAGAAQAGAAAEgDQAFgEAAgGQAAgMgOAAIgHABg");
	this.shape_4.setTransform(27.55,-1.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAoIgGgUIgWAAIgGAUIgTAAIAZhQIAXAAIAZBQgAAJAGIgGgQIgDgPIgEAPIgEAQIARAAg");
	this.shape_5.setTransform(19.9,-1.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJAoIAAhAIgVAAIAAgQIA9AAIAAAQIgWAAIAABAg");
	this.shape_6.setTransform(12.75,-1.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAeQgLgLAAgSQAAgTANgMQAMgKASgBQANABAHADIgEAOQgHgCgIAAQgLAAgGAGQgIAHAAAMQAAAMAHAHQAGAIAMAAQAJgBAGgCIADAOQgHADgOAAQgTABgLgMg");
	this.shape_7.setTransform(5.975,-1.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbAoIgBgeIgBghIgBAAQgDAPgGAQIgJAfIgOAAIgIgfIgIgfIgBAhIgCAeIgRAAIAGhQIAYAAIAIAbIAGAdIAIgdIAIgbIAYAAIAFBQg");
	this.shape_8.setTransform(-5.125,-1.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqAoIAAhQIASAAIAAAcIAJAAQAOAAAIAGQAKAGAAANQgBAKgGAIQgKAKgWAAQgLAAgJgBgAgYABIAAAZIAHABQAGAAAEgDQAFgEABgGQgBgHgFgDQgEgDgGgBgAAYAoIAAhQIATAAIAABQg");
	this.shape_9.setTransform(-15.35,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAoIAAhPQAJgBAOAAQAQAAAHAEQAKAFAAALQAAANgNAEIAAABQAHACAFAEQAEAFAAAIQAAAKgJAHQgIAHgWAAQgMAAgIgBgAgLAbIAHABQAOAAAAgMQABgLgQAAIgGAAgAgLgaIAAASIAGAAQAGAAAEgCQAEgDAAgFQAAgJgMAAIgIABg");
	this.shape_10.setTransform(-23.8,-1.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcAeQgKgMAAgSQAAgRALgMQALgMAQAAQASAAALAMQAKALAAASQAAATgLALQgLAMgRAAQgSAAgKgMgAgOgTQgEAIAAALQAAAMAFAIQAFAHAIAAQAJAAAGgIQAEgHAAgMQAAgLgEgHQgGgIgJAAQgIAAgGAHg");
	this.shape_11.setTransform(-31.9,-1.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAoIAAghIgdAAIAAAhIgSAAIAAhQIASAAIAAAgIAdAAIAAggIASAAIAABQg");
	this.shape_12.setTransform(-40.325,-1.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAeQgLgLAAgSQAAgTANgMQAMgKASgBQANABAHADIgEAOQgHgCgIAAQgLAAgGAGQgIAHAAAMQAAAMAHAHQAGAIAMAAQAJgBAGgCIADAOQgHADgOAAQgTABgLgMg");
	this.shape_13.setTransform(-50.325,-1.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAAFIgGATIgLgGIANgPIAAgBIgTAEIAAgLIATAEIAAgBIgNgPIALgGIAGASIAHgSIAKAGIgNAPIABABIATgEIAAALIgUgDIANAPIgKAGg");
	this.shape_14.setTransform(-56.625,-2.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,-8,122.8,16);


(lib.Анимация7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAIIgKAcIgQgJIAUgXIAAAAIgdAFIAAgSIAcAGIABAAIgUgXIAQgJIAKAbIAAAAIAKgbIAQAJIgTAXIAAAAIAdgGIAAASIgdgFIAAAAIATAXIgQAJg");
	this.shape.setTransform(46.075,-9.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBZQgHgIAAgLQAAgLAHgHQAHgHAKAAQALAAAHAHQAHAHAAALQAAALgHAIQgHAHgLAAQgKAAgHgHgAgPAfIgHh+IAsAAIgGB+g");
	this.shape_1.setTransform(38.2,-2.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBeIAAiYIgzAAIAAgjICRAAIAAAjIg0AAIAACYg");
	this.shape_2.setTransform(26.825,-2.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBfQgFgHgJglQgDgRgHgHQgGgGgNAAIgNAAIAABKIgqAAIAAi5QAYgEAhAAQApAAATAPQARAOAAAZQAAARgLAOQgJAKgNAEIAAABQARAIAIAcIAPA1gAgcg9IAAA0IARAAQAPAAAJgHQAJgIAAgMQAAgagfAAQgLAAgIABg");
	this.shape_3.setTransform(11.525,-2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBeIgOgwIg1AAIgOAwIgsAAIA6i7IA2AAIA7C7gAATAOIgLgnIgJglIAAAAIgJAlIgLAnIAoAAg");
	this.shape_4.setTransform(-6.7,-2.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVBeIAAiYIgzAAIAAgjICRAAIAAAjIg0AAIAACYg");
	this.shape_5.setTransform(-23.425,-2.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhABWIAJgjQAXALAZAAQAcAAAAgUQAAgIgHgHQgHgFgRgHQgzgRAAglQgBgZAUgQQATgQAgAAQAbAAAVAKIgJAiQgTgJgVAAQgMAAgIAFQgGAFAAAIQAAAJAIAFQAHAFATAIQAxARAAAmQAAAZgTAQQgUARglAAQggAAgVgLg");
	this.shape_6.setTransform(-38.6,-2.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.3,-16,100.6,32);


(lib.Анимация6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib._300300();
	this.instance.parent = this;
	this.instance.setTransform(4,-66,0.3334,0.3334);

	this.instance_1 = new lib._300300();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-96,-66,0.3334,0.3334);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-66,200,100);


(lib.Анимация5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhgB3IAMg2QAbALAhABQATAAAMgIQAQgIAAgRQAAglhIAAQgQAAgSACIAQiNICYAAIAAA7IhmAAIgDAdIAPgBQAtAAAcAVQAdAWAAAqQAAAmgeAbQgiAcg1AAQgvAAgdgOg");
	this.shape.setTransform(17.025,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAqQgSAAgLgMQgLgMAAgSQgBgSAMgMQAMgLARAAQASAAAMALQAMAMAAASQAAATgMALQgMAMgSAAg");
	this.shape_1.setTransform(0.35,6.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhgCFIAAgsIAkgfQAsgnAQgTQATgXABgSQAAghgmAAQgaAAgeAVIgUgzQAmgcA1AAQAsAAAaAXQAZAXAAAmQAAAzg9AxIgZAUIAAACIBbAAIAAA7g");
	this.shape_2.setTransform(-17.475,-3.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-22.2,62,44.5);


(lib.Анимация4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhUBPIAAigIAlAAIAAA4IASgBQAbAAAQANQAUANAAAaQAAAVgNAOQgVAUgtAAQgXAAgQgCgAgwACIAAAzIANABQANAAAJgGQAJgIAAgNQAAgMgKgIQgJgFgMgBgAAxBQIAAihIAkAAIAAChg");
	this.shape.setTransform(50.925,-2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BSIAAifQAUgDAdAAQAgAAARAMQARAOAAAYQAAAYgPANQgSASgigBIgMgBIAAA7gAgVgzIAAAvIAMABQAOABAJgIQAHgHABgMQAAgYgcAAQgJAAgGACg");
	this.shape_1.setTransform(34.35,-2.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhBRIAAgwQAAgpADgaIgBAAQgLAdgQAbIggA7IgqAAIAAihIAiAAIAAAwQAAArgCAdIABAAQAMgcAQgcIAihAIAmAAIAAChg");
	this.shape_2.setTransform(18.675,-2.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBRIAAiCIgrAAIAAgfIB7AAIAAAfIgsAAIAACCg");
	this.shape_3.setTransform(3.825,-2.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BSIAAifQAUgDAeAAQAfAAAQAMQASAOAAAYQAAAYgPANQgSASghgBIgNgBIAAA7gAgVgzIAAAvIANABQANABAIgIQAJgHgBgMQABgYgcAAQgJAAgGACg");
	this.shape_4.setTransform(-9.25,-2.15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAjBRIgNgqIgtAAIgMAqIgmAAIAyihIAvAAIAyChgAARAMIgKghIgHggIgBAAIgHAgIgKAhIAjAAg");
	this.shape_5.setTransform(-24.575,-2.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag7BQIAAieQARgDAeAAQAfAAAQAJQAUAKgBAWQAAAYgbAKIAAABQAPAEAJAJQAJAKAAAQQAAAUgRAOQgSAOgsAAQgYAAgQgCgAgXA3IAOAAQAfAAgBgXQAAgXgfAAIgNAAgAgXg2IAAAmIAMAAQANAAAIgFQAHgGABgJQAAgTgaAAIgPABg");
	this.shape_6.setTransform(-39.2,-2.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYBRQgDgGgKgeQgEgPgHgIQgHgJgNAAIgHAAIAABEIgkAAIAAihIAkAAIAABDIADAAIAshDIAsAAIg4BIQAZAGAMAgQAMAnAGAMg");
	this.shape_7.setTransform(-53.275,-2.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-14,126.69999999999999,28);


(lib.Анимация3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgDAFQgCgBAAgEQAAgCACgCQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape.setTransform(32.875,77.925);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgDAlIAAgLIgCAAQgJAAgGgDQgGgEgEgGQgEgGAAgHQAAgIAEgGQADgGAGgDQAGgEAJAAIADAAIAAgJIAHAAIAAAJIAEAAQAIAAAGADQAGAEAEAGQADAGAAAIQAAAHgEAGQgDAGgHAEQgGADgJAAIgCAAIAAALgAAEATIACAAQAJAAAGgGQAFgFAAgIQAAgJgFgGQgFgFgJAAIgDAAgAgUgPQgFAGAAAJQAAAIAFAFQAGAGAKAAIABAAIAAgnIgDAAQgJAAgFAFg");
	this.shape_1.setTransform(27.575,74.875);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgVAkIAAhHIASAAQAaAAAAAVQAAALgIAFQgHAGgNAAIgIAAIAAAcgAgNABIAHAAQAKAAAFgDQAFgEAAgHQAAgIgFgDQgEgDgJAAIgJAAg");
	this.shape_2.setTransform(20.85,74.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_3.setTransform(11.925,75.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AgXAbIAAgHIACABQAGAAADgMQAEgLABgYIAfAAIAAA1IgIAAIAAguIgQAAQgBARgCAKQgDAJgDAFQgEAFgGAAIgEAAg");
	this.shape_4.setTransform(5.525,75.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AgRAeQgGgJAAgPQAAgRAFgKQAFgKALgCIAYgFIABAHIgXAFQgHABgEAGQgDAGAAALIAAAAQADgEAFgDQAFgCAEAAQAKAAAGAGQAFAGAAALQAAANgGAHQgHAHgLAAQgKAAgHgJgAgEgDIgHADIgEAGQAAANAEAGQAEAHAIAAQAOAAAAgTQAAgRgNAAIgGABg");
	this.shape_5.setTransform(0.1,74.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_6.setTransform(-5.375,76.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgWAnIAAhMIAGAAIACAHQADgEAEgCQAEgCAFAAQAKAAAGAHQAFAHAAANQAAANgFAHQgGAHgKAAQgFAAgEgCQgEgCgDgEIgBAAIABAJIAAAWgAgLgbQgDAFAAAKIAAABQAAALADAFQAEAEAIAAQAGAAAFgFQADgFAAgKQAAgKgDgFQgFgFgGAAQgIAAgEAEg");
	this.shape_7.setTransform(-10.8,76.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AgUAEIAAgHIApAAIAAAHg");
	this.shape_8.setTransform(-19.05,75.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgQAYQgFgEABgIQAAgPAYgBIAJAAIAAgEQAAgGgCgDQgDgDgGAAQgFAAgJAEIgDgGIAJgDIAIgCQALAAAEAFQAFAEgBAJIAAAkIgFAAIgCgIIgBAAQgEAFgDACQgFACgFAAQgHAAgFgEgAAGABQgKAAgEADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEgBgIIAAgFg");
	this.shape_9.setTransform(-27.05,75.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_10.setTransform(-31.975,75.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgFAVQgFgGgBgMIgPAAIAAAYIgIAAIAAg1IAIAAIAAAXIAPAAQABgLAGgHQAFgGAKAAQALAAAGAIQAGAHABAMQgBANgGAHQgGAIgLAAQgKAAgGgHgAAAgPQgDAGAAAJQAAAKADAGQADAFAIAAQAIAAADgFQAEgFAAgLQAAgJgEgGQgDgFgIAAQgIAAgDAFg");
	this.shape_11.setTransform(-38.3,75.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgXAbIAAgHIACABQAGAAADgMQAEgLABgYIAfAAIAAA1IgIAAIAAguIgQAAQgBARgCAKQgDAJgDAFQgEAFgGAAIgEAAg");
	this.shape_12.setTransform(-45.825,75.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgQAYQgFgEABgIQAAgPAZgBIAJAAIAAgEQAAgGgDgDQgDgDgGAAQgGAAgIAEIgDgGIAJgDIAIgCQALAAAEAFQAFAEgBAJIAAAkIgFAAIgCgIIAAAAQgFAFgDACQgFACgEAAQgJAAgEgEgAAGABQgKAAgEADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEAAgIIAAgFg");
	this.shape_13.setTransform(-51.25,75.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgYAkIAAhHIAUAAQANAAAHAFQAGAEAAAJQAAAGgDAFQgEAEgHABIAAAAQARACAAAOQAAAKgHAFQgGAGgMAAgAgQAdIAPAAQAIAAAEgEQAFgDAAgHQAAgHgFgDQgEgDgIAAIgPAAgAgQgEIAOAAQAIAAAEgDQAEgDAAgGQAAgGgFgDQgEgCgIAAIgNAAg");
	this.shape_14.setTransform(-56.825,74.875);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgDAFQgCgBAAgEQAAgCACgCQAAAAABgBQAAAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_15.setTransform(-64.175,77.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgRAeQgGgJAAgPQAAgRAFgKQAFgKAMgCIAXgFIACAHIgYAFQgHABgDAGQgEAGAAALIAAAAQAEgEAEgDQAFgCAEAAQAKAAAFAGQAGAGAAALQAAANgGAHQgHAHgLAAQgKAAgHgJgAgEgDIgGADIgFAGQAAANAEAGQAEAHAHAAQAQAAAAgTQAAgRgOAAIgGABg");
	this.shape_16.setTransform(-68.45,74.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_17.setTransform(-73.925,76.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHgBANQABANgGAHQgGAHgLAAQgDAAgFgCQgFgCgDgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAIAAQAGAAAEgFQAEgFABgKQgBgKgEgFQgEgFgGAAQgIAAgDAEg");
	this.shape_18.setTransform(-79.35,76.925);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgQAbQgHgJABgSQgBgSAHgJQAFgJALAAQAMAAAFAKQAHAJgBARQAAASgFAKQgGAJgMAAQgLAAgFgKgAgLgWQgDAHAAAPQAAAQADAHQAEAHAHAAQAIAAAEgHQAEgIgBgPQABgOgEgIQgEgHgIAAQgHAAgEAHg");
	this.shape_19.setTransform(79.65,64.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgRAbQgFgJAAgSQAAgSAFgJQAGgJALAAQAMAAAFAKQAHAJAAARQgBASgFAKQgGAJgMAAQgKAAgHgKgAgKgWQgEAHgBAPQABAQAEAHQADAHAHAAQAIAAAEgHQADgIABgPQgBgOgDgIQgEgHgIAAQgHAAgDAHg");
	this.shape_20.setTransform(73.95,64.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgQAbQgHgJAAgSQAAgSAHgJQAFgJALAAQALAAAHAKQAFAJAAARQABASgGAKQgGAJgMAAQgLAAgFgKgAgKgWQgFAHAAAPQAAAQAFAHQADAHAHAAQAIAAAEgHQAEgIAAgPQAAgOgEgIQgEgHgIAAQgHAAgDAHg");
	this.shape_21.setTransform(68.25,64.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AgQAbQgHgJAAgSQAAgSAHgJQAFgJALAAQALAAAHAKQAFAJAAARQABASgGAKQgGAJgMAAQgLAAgFgKgAgLgWQgDAHAAAPQAAAQADAHQAEAHAHAAQAIAAAEgHQAEgIgBgPQABgOgEgIQgEgHgIAAQgHAAgEAHg");
	this.shape_22.setTransform(55.9,64.225);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AgRAbQgFgJAAgSQAAgSAFgJQAGgJALAAQAMAAAFAKQAHAJAAARQgBASgFAKQgGAJgMAAQgKAAgHgKgAgLgWQgDAHAAAPQAAAQADAHQAEAHAHAAQAIAAAEgHQADgIAAgPQAAgOgDgIQgEgHgIAAQgHAAgEAHg");
	this.shape_23.setTransform(50.2,64.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgRAbQgFgJgBgSQABgSAFgJQAGgJALAAQALAAAHAKQAFAJABARQAAASgGAKQgGAJgMAAQgKAAgHgKgAgKgWQgFAHAAAPQAAAQAFAHQADAHAHAAQAIAAAEgHQAEgIAAgPQAAgOgEgIQgEgHgIAAQgHAAgDAHg");
	this.shape_24.setTransform(44.5,64.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgXAkIAAgHIATgTQAIgIACgDIAFgHQABgEAAgEQAAgGgDgDQgEgDgFAAQgEAAgEABQgFACgEAEIgFgGQAKgIAMAAQAJAAAFAFQAHAFAAAJQgBAHgDAGQgFAGgKAKIgPAPIAAABIAkAAIAAAHg");
	this.shape_25.setTransform(32.15,64.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AAFAkIAAgyIABgMIgDACIgLAKIgEgGIASgPIAHAAIAABHg");
	this.shape_26.setTransform(25.8,64.225);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_27.setTransform(13.975,65.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AATAkIAAgTIglAAIAAATIgHAAIAAgZIADAAQAHgKAEgLQADgMABgNIAaAAIAAAuIAHAAIAAAZgAgEgGQgDAJgGAIIAYAAIAAgoIgLAAQAAALgEAMg");
	this.shape_28.setTransform(8.1,66.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgQAYQgFgEABgIQAAgPAZgBIAJAAIAAgEQAAgGgDgDQgDgDgGAAQgGAAgIAEIgDgGIAJgDIAIgCQAKAAAFAFQAFAEAAAJIAAAkIgGAAIgCgIIAAAAQgFAFgDACQgFACgEAAQgJAAgEgEgAAGABQgJAAgFADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEAAgIIAAgFg");
	this.shape_29.setTransform(-4.35,65.125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_30.setTransform(-9.275,65.125);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_31.setTransform(-14.725,65.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AASAkIAAgTIgjAAIAAATIgJAAIAAgZIAEAAQAHgKAEgLQADgMABgNIAaAAIAAAuIAIAAIAAAZgAgEgGQgEAJgFAIIAYAAIAAgoIgLAAQgBALgDAMg");
	this.shape_32.setTransform(-20.75,66.05);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_33.setTransform(-26.375,65.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHgBANQABANgGAHQgGAHgLAAQgDAAgFgCQgFgCgDgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAIAAQAGAAAEgFQAEgFABgKQgBgKgEgFQgEgFgGAAQgIAAgDAEg");
	this.shape_34.setTransform(-32.1,66.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AALAbIgXgbIAAAbIgIAAIAAg1IAIAAIAAAaIAWgaIAJAAIgWAaIAYAbg");
	this.shape_35.setTransform(-37.5,65.125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHAAANQAAANgGAHQgGAHgLAAQgDAAgFgCQgFgCgDgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAHAAQAIAAADgFQAFgFAAgKQAAgKgFgFQgDgFgIAAQgHAAgDAEg");
	this.shape_36.setTransform(-50,66.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_37.setTransform(-55.975,65.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_38.setTransform(-62.425,65.125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgTAYIAAgHQAJAEAJAAQAGAAAEgCQADgDAAgEQAAgKgOAAIgHAAIAAgGIAFAAQAOAAAAgIQAAgIgLAAIgGABIgJADIgCgHQAHgEALAAQAIAAAFAEQAFAEABAGQAAAJgKADIAAABQAGAAADAEQACADAAAFQAAAHgGAFQgGAEgJAAQgMAAgGgEg");
	this.shape_39.setTransform(-68.55,65.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgQAYQgFgEABgIQAAgPAYgBIAJAAIAAgEQAAgGgCgDQgDgDgGAAQgFAAgJAEIgDgGIAJgDIAIgCQALAAAEAFQAFAEgBAJIAAAkIgFAAIgCgIIgBAAQgEAFgDACQgFACgFAAQgHAAgFgEgAAGABQgKAAgEADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEgBgIIAAgFg");
	this.shape_40.setTransform(-73.85,65.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHgBANQABANgGAHQgGAHgLAAQgDAAgFgCQgFgCgDgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAIAAQAGAAAEgFQAEgFABgKQgBgKgEgFQgEgFgGAAQgIAAgDAEg");
	this.shape_41.setTransform(-79.35,66.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AAPAmIAAghIABgFIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1gAgMgZQgFgEAAgIIAIAAQAAAFACACQACACAFAAQAFAAACgCQADgCAAgFIAIAAQgBAIgEAEQgEADgJAAQgIAAgEgDg");
	this.shape_42.setTransform(79.425,53.375);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAWAbIAAg1IAIAAIAAA1gAgdAbIAAg1IAIAAIAAAWIAPAAQAJAAAFAEQAFADAAAHQAAAIgFAFQgGAEgJAAgAgVAUIAOAAQAMAAAAgJQAAgFgDgCQgCgCgIAAIgNAAg");
	this.shape_43.setTransform(72.4,54.475);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AAPAbIAAgYIgdAAIAAAYIgIAAIAAg1IAIAAIAAAXIAdAAIAAgXIAIAAIAAA1g");
	this.shape_44.setTransform(65.425,54.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgVAbIAAg1IAHAAIAAAWIAQAAQAUAAABAOQgBAIgEAFQgGAEgLAAgAgOAUIAPAAQAHAAADgCQAEgDAAgEQAAgFgEgCQgDgCgHAAIgPAAg");
	this.shape_45.setTransform(59.45,54.475);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgXAaIAAgGIACABQAGAAADgMQAEgLABgYIAfAAIAAA0IgIAAIAAgtIgQAAQgBASgCAJQgDAKgDAFQgEAEgGAAIgEgBg");
	this.shape_46.setTransform(53.125,54.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgQAYQgEgEgBgIQAAgPAZgBIAJAAIAAgEQAAgGgCgDQgDgDgGAAQgGAAgIAEIgCgGIAJgDIAIgCQAKAAAEAFQAEAEABAJIAAAkIgHAAIgBgIIgBAAQgEAFgEACQgEACgFAAQgIAAgEgEgAAFABQgJAAgDADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEAAgIIAAgFg");
	this.shape_47.setTransform(47.7,54.475);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_48.setTransform(41.475,54.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_49.setTransform(34.675,54.475);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgMAVQgHgIAAgNQAAgMAHgHQAGgIALAAIAIABIAHACIgDAHIgGgCIgGgBQgPAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_50.setTransform(29.25,54.475);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AAMAbIgYgbIAAAbIgIAAIAAg1IAIAAIAAAaIAWgaIAJAAIgWAaIAYAbg");
	this.shape_51.setTransform(24.55,54.475);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgQAYQgFgEAAgIQAAgPAZgBIAJAAIAAgEQABgGgDgDQgDgDgGAAQgGAAgIAEIgCgGIAJgDIAHgCQALAAAEAFQAEAEAAAJIAAAkIgGAAIgBgIIgBAAQgDAFgFACQgDACgGAAQgHAAgFgEgAAFABQgIAAgEADQgFACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEgBgIIAAgFg");
	this.shape_52.setTransform(18.65,54.475);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AAbAkIAAgtIABgRIgBAAIgYA+IgGAAIgYg/IAAASIAAAtIgHAAIAAhHIAMAAIAWA6IAAAAIAXg6IAMAAIAABHg");
	this.shape_53.setTransform(11.575,53.575);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgDAFQgCgBAAgEQAAgCACgCQAAAAABgBQAAAAAAAAQABAAABgBQAAAAAAAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_54.setTransform(-23.425,56.625);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AAPAbIAAgWIgOAAIgNAWIgJAAIAOgXQgFgBgEgDQgDgEAAgGQAAgHAFgFQAFgEAJAAIAXAAIAAA1gAgLgKQAAAJAMAAIAOAAIAAgSIgPAAQgLAAAAAJg");
	this.shape_55.setTransform(-27.85,54.475);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_56.setTransform(-33.425,54.475);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AAPAbIAAgYIgdAAIAAAYIgIAAIAAg1IAIAAIAAAXIAdAAIAAgXIAIAAIAAA1g");
	this.shape_57.setTransform(-39.725,54.475);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_58.setTransform(-45.675,54.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AAgAkIAAgTIhHAAIAAg0IAIAAIAAAtIAYAAIAAgtIAHAAIAAAtIAYAAIAAgtIAIAAIAAAtIAIAAIAAAag");
	this.shape_59.setTransform(-52.625,55.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_60.setTransform(-60.225,54.475);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_61.setTransform(-66.675,54.475);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_62.setTransform(-73.325,54.475);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AAOAbIAAguIgcAAIAAAuIgIAAIAAg1IAsAAIAAA1g");
	this.shape_63.setTransform(-79.45,54.475);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_64.setTransform(79.525,43.825);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#333333").s().p("AgPAbIAAg1IAfAAIAAAHIgXAAIAAAug");
	this.shape_65.setTransform(74.725,43.825);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_66.setTransform(69.275,43.825);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AgXAbIAAgHIACABQAGAAADgMQAEgLABgYIAfAAIAAA1IgIAAIAAguIgQAAQgBARgCAKQgDAJgDAFQgEAFgGAAIgEAAg");
	this.shape_67.setTransform(63.025,43.85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_68.setTransform(57.425,43.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AAbAbIgXgbIAAAbIgHAAIAAgbIgXAbIgKAAIAZgbIgXgaIAJAAIAWAaIAAgaIAHAAIAAAaIAWgaIAJAAIgXAaIAZAbg");
	this.shape_69.setTransform(50.575,43.825);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_70.setTransform(38.375,43.825);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgPAbIAAg1IAfAAIAAAHIgXAAIAAAug");
	this.shape_71.setTransform(33.575,43.825);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_72.setTransform(28.125,43.825);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_73.setTransform(21.475,43.825);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_74.setTransform(15.025,43.825);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_75.setTransform(9.725,45.025);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_76.setTransform(4.875,43.825);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_77.setTransform(-0.575,43.825);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AASAkIAAgSIgkAAIAAASIgIAAIAAgZIAFAAQAGgKAEgKQAEgMAAgOIAaAAIAAAuIAHAAIAAAZgAgEgGQgDAJgGAIIAYAAIAAgoIgLAAQgBALgDAMg");
	this.shape_78.setTransform(-6.6,44.75);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_79.setTransform(-12.225,43.825);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHAAANQAAANgGAHQgGAHgLAAQgDAAgFgCQgEgCgEgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAHAAQAIAAADgFQAFgFAAgKQAAgKgFgFQgDgFgIAAQgHAAgDAEg");
	this.shape_80.setTransform(-17.95,44.975);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AALAbIgXgbIAAAbIgIAAIAAg1IAIAAIAAAaIAWgaIAJAAIgWAaIAYAbg");
	this.shape_81.setTransform(-23.35,43.825);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_82.setTransform(-34.975,43.825);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_83.setTransform(-40.475,43.825);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgMAVQgGgIAAgNQAAgMAGgHQAGgIAMAAIAHABIAGACIgCAHIgGgCIgFgBQgQAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAHgDIAAAHQgFADgIAAQgLAAgGgHg");
	this.shape_84.setTransform(-45.05,43.825);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_85.setTransform(-50.525,43.825);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_86.setTransform(-57.175,43.825);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_87.setTransform(-63.975,43.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_88.setTransform(-70.125,43.825);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_89.setTransform(-75.475,43.825);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgMAVQgGgIAAgNQAAgMAGgHQAHgIALAAIAHABIAGACIgCAHIgGgCIgFgBQgQAAAAAUQAAAKAEAFQAEAGAHAAQAHAAAGgDIAAAHQgFADgIAAQgKAAgHgHg");
	this.shape_90.setTransform(-80.05,43.825);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_91.setTransform(80.075,33.175);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_92.setTransform(74.775,33.175);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AALAfQgEgGAAgLQAAgLAEgEQAEgGAGAAQAIAAADAGQAEAEAAALQAAALgEAGQgDAGgIAAQgGAAgEgGgAAPACQgBAEAAAIQAAAJABAEQADAEADAAQAEAAADgEQABgEAAgJQAAgIgBgEQgDgDgEAAQgDAAgDADgAgWAkIAnhHIAGAAIgmBHgAgfACQgEgEAAgLQAAgLADgGQAEgGAHAAQAHAAAFAGQADAGAAALQAAALgDAEQgFAGgHAAQgGAAgEgGgAgagaQgCAEAAAJQAAAIACAEQACADADAAQAJAAgBgPQABgRgJAAQgDAAgCAEg");
	this.shape_93.setTransform(65,32.275);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgVAgIAAgHIAIADIAKABQAIAAAEgEQAFgEAAgIQAAgNgRAAIgNAAIgEgCIADghIAiAAIAAAHIgbAAIgCAWIALgBQALAAAGAFQAHAFAAAKQgBALgGAGQgIAGgLAAQgMAAgGgEg");
	this.shape_94.setTransform(58.1,32.325);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AAFAkIAAgyIABgMIgDACIgLAKIgEgGIASgPIAHAAIAABHg");
	this.shape_95.setTransform(51.7,32.275);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_96.setTransform(44.525,33.175);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_97.setTransform(39.225,33.175);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgMAVQgGgIgBgNQABgMAGgHQAHgIALAAIAHABIAGACIgCAHIgGgCIgFgBQgQAAAAAUQAAAKAEAFQAEAGAHAAQAHAAAGgDIAAAHQgFADgIAAQgLAAgGgHg");
	this.shape_98.setTransform(31.3,33.175);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_99.setTransform(25.825,33.175);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AAPAbIAAgYIgdAAIAAAYIgIAAIAAg1IAIAAIAAAXIAdAAIAAgXIAIAAIAAA1g");
	this.shape_100.setTransform(19.675,33.175);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AgTAYIAAgHQAJAEAJAAQAGAAAEgCQADgDAAgEQAAgKgOAAIgIAAIAAgGIAGAAQAOAAABgIQAAgIgMAAIgGABIgIADIgEgHQAJgEAJAAQAJAAAFAEQAGAEAAAGQgBAJgJADIAAABQAFAAAEAEQACADAAAFQAAAHgGAFQgGAEgKAAQgLAAgGgEg");
	this.shape_101.setTransform(14.05,33.175);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#333333").s().p("AgVAbIAAg1IAWAAQAUAAAAAOQAAAFgDADQgDACgGABIAAABQAIAAACADQAEADAAAFQAAAIgGAEQgFAEgLAAgAgNAUIANAAQAOAAABgJQAAgFgEgCQgDgCgIAAIgNAAgAgNgEIANAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgOAAg");
	this.shape_102.setTransform(9.15,33.175);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#333333").s().p("AAPAmIAAghIABgFIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1gAgMgZQgFgEAAgIIAIAAQAAAFACACQACACAFAAQAFAAACgCQADgCAAgFIAIAAQgBAIgEAEQgEADgJAAQgIAAgEgDg");
	this.shape_103.setTransform(0.275,32.075);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#333333").s().p("AAWAbIAAg1IAIAAIAAA1gAgdAbIAAg1IAIAAIAAAWIAPAAQAJAAAFAEQAFADAAAHQAAAIgGAFQgFAEgIAAgAgVAUIAOAAQAMAAAAgJQAAgFgDgCQgCgCgHAAIgOAAg");
	this.shape_104.setTransform(-6.75,33.175);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AAPAbIAAgYIgdAAIAAAYIgIAAIAAg1IAIAAIAAAXIAdAAIAAgXIAIAAIAAA1g");
	this.shape_105.setTransform(-13.725,33.175);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#333333").s().p("AgWAbIAAg1IAIAAIAAAWIAQAAQAVAAgBAOQAAAIgEAFQgGAEgKAAgAgOAUIAQAAQAGAAADgCQAEgDgBgEQAAgFgCgCQgDgCgIAAIgPAAg");
	this.shape_106.setTransform(-19.7,33.175);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#333333").s().p("AgXAaIAAgFIACAAQAGAAADgMQAEgLABgYIAfAAIAAA0IgIAAIAAgtIgQAAQgBARgCAJQgDALgDAFQgEAEgGAAIgEgBg");
	this.shape_107.setTransform(-26.025,33.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AgQAYQgFgEABgIQAAgPAZgBIAJAAIAAgEQAAgGgDgDQgDgDgGAAQgGAAgIAEIgDgGIAJgDIAIgCQALAAAEAFQAFAEgBAJIAAAkIgFAAIgCgIIAAAAQgFAFgDACQgFACgEAAQgJAAgEgEgAAGABQgKAAgEADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEAAgIIAAgFg");
	this.shape_108.setTransform(-31.45,33.175);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AAOAbIAAgYQgFADgEACIgJABQgIAAgFgEQgEgEAAgHIAAgUIAIAAIAAAUQAAAIALAAQADAAAEgBIAJgEIAAgXIAIAAIAAA1g");
	this.shape_109.setTransform(-37.125,33.175);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgQAYQgFgEABgIQAAgPAZgBIAJAAIAAgEQAAgGgDgDQgDgDgGAAQgGAAgIAEIgDgGIAJgDIAIgCQAKAAAFAFQAFAEAAAJIAAAkIgGAAIgCgIIAAAAQgFAFgDACQgFACgEAAQgJAAgEgEgAAGABQgJAAgFADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEAAgIIAAgFg");
	this.shape_110.setTransform(-43.05,33.175);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AAPAbIAAgYIgdAAIAAAYIgIAAIAAg1IAIAAIAAAXIAdAAIAAgXIAIAAIAAA1g");
	this.shape_111.setTransform(-48.775,33.175);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_112.setTransform(-54.925,33.175);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgVAbIAAg1IAWAAQAUAAAAAOQAAAFgDADQgDACgGABIAAABQAIAAACADQAEADAAAFQgBAIgFAEQgGAEgKAAgAgNAUIANAAQAOAAABgJQAAgFgDgCQgEgCgIAAIgNAAgAgNgEIANAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgOAAg");
	this.shape_113.setTransform(-60.5,33.175);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIACAHQADgEAEgCQAEgCAFAAQAKAAAGAHQAGAHgBANQABANgGAHQgGAHgKAAQgEAAgFgCQgEgCgDgEIgBAAIABAJIAAAWgAgLgbQgDAFAAAKIAAABQAAALADAFQAEAEAIAAQAHAAAEgFQADgFAAgKQAAgKgDgFQgEgFgHAAQgIAAgEAEg");
	this.shape_114.setTransform(-66.5,34.325);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_115.setTransform(-72.475,33.175);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AATAkIAAg/IgkAAIAAA/IgIAAIAAhHIA0AAIAABHg");
	this.shape_116.setTransform(-78.9,32.275);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AgDAFQgCgBAAgEQAAgCACgCQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBg");
	this.shape_117.setTransform(81.225,24.675);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AgBARIANgRIgNgQIAFgEIARAUIAAABIgRAUgAgUARIAOgRIgOgQIAGgEIAQAUIAAABIgQAUg");
	this.shape_118.setTransform(77.425,22.575);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("AgQAbQgHgJABgSQgBgSAHgJQAFgJALAAQALAAAHAKQAFAJAAARQABASgGAKQgGAJgMAAQgLAAgFgKgAgLgWQgDAHAAAPQAAAQADAHQAEAHAHAAQAIAAAEgHQAEgIgBgPQABgOgEgIQgEgHgIAAQgHAAgEAHg");
	this.shape_119.setTransform(72.1,21.625);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgWAkIAAgHIASgTQAIgIACgDIAEgHQACgEAAgEQAAgGgEgDQgDgDgFAAQgEAAgFABQgDACgGAEIgDgGQAJgIAMAAQAJAAAGAFQAFAFABAJQgBAHgEAGQgDAGgLAKIgOAPIAAABIAkAAIAAAHg");
	this.shape_120.setTransform(66.4,21.575);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgQAbQgGgJgBgSQABgSAGgJQAFgJALAAQALAAAHAKQAFAJABARQAAASgGAKQgGAJgMAAQgKAAgGgKgAgKgWQgFAHAAAPQAAAQAFAHQADAHAHAAQAIAAAEgHQAEgIAAgPQAAgOgEgIQgEgHgIAAQgHAAgDAHg");
	this.shape_121.setTransform(60.7,21.625);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgXAkIAAgHIATgTQAIgIACgDIAFgHQABgEAAgEQAAgGgDgDQgEgDgFAAQgEAAgEABQgFACgEAEIgFgGQAKgIAMAAQAJAAAFAFQAHAFAAAJQAAAHgFAGQgEAGgKAKIgPAPIAAABIAkAAIAAAHg");
	this.shape_122.setTransform(55,21.575);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AgQAYQgEgEgBgIQAAgPAZgBIAJAAIAAgEQABgGgDgDQgDgDgGAAQgGAAgIAEIgCgGIAJgDIAIgCQAKAAAEAFQAEAEAAAJIAAAkIgGAAIgBgIIgBAAQgDAFgFACQgDACgGAAQgHAAgFgEgAAFABQgJAAgDADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEAAgIIAAgFg");
	this.shape_123.setTransform(-10.25,22.525);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_124.setTransform(-16.475,22.525);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_125.setTransform(-23.775,22.525);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AgQAYQgFgEAAgIQAAgPAZgBIAJAAIAAgEQABgGgDgDQgDgDgGAAQgGAAgIAEIgDgGIAJgDIAIgCQALAAAEAFQAEAEAAAJIAAAkIgGAAIgBgIIgBAAQgDAFgFACQgDACgGAAQgHAAgFgEgAAFABQgIAAgEADQgFACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEgBgIIAAgFg");
	this.shape_126.setTransform(-30.4,22.525);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIACAHQADgEAEgCQAEgCAFAAQAKAAAGAHQAGAHgBANQABANgGAHQgGAHgKAAQgEAAgFgCQgEgCgDgEIgBAAIABAJIAAAWgAgLgbQgDAFAAAKIAAABQAAALADAFQAEAEAIAAQAHAAAEgFQADgFAAgKQAAgKgDgFQgEgFgHAAQgIAAgEAEg");
	this.shape_127.setTransform(-35.9,23.675);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgPAbIAAg1IAfAAIAAAHIgXAAIAAAug");
	this.shape_128.setTransform(-40.875,22.525);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_129.setTransform(-46.325,22.525);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHAAANQAAANgGAHQgGAHgLAAQgDAAgFgCQgFgCgDgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAHAAQAIAAADgFQAFgFAAgKQAAgKgFgFQgDgFgIAAQgHAAgDAEg");
	this.shape_130.setTransform(-52.25,23.675);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AAPAbIAAguIgdAAIAAAuIgIAAIAAg1IAsAAIAAA1g");
	this.shape_131.setTransform(-58.55,22.525);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgMAVQgHgIAAgNQAAgMAHgHQAGgIALAAIAIABIAHACIgDAHIgGgCIgGgBQgPAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_132.setTransform(-63.9,22.525);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_133.setTransform(-69.375,22.525);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#333333").s().p("AgTAkIAAhHIAnAAIAAAIIgfAAIAAA/g");
	this.shape_134.setTransform(-74.625,21.625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#333333").s().p("AAAABIAAgBIAPgUIAGAEIgOAQIAOARIgGAEgAgUABIAAgBIARgUIAEAEIgMAQIAMARIgEAEg");
	this.shape_135.setTransform(-80.05,22.575);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#333333").s().p("AgQAYQgFgEABgIQAAgPAYgBIAJAAIAAgEQAAgGgCgDQgDgDgGAAQgFAAgJAEIgDgGIAJgDIAIgCQALAAAEAFQAFAEgBAJIAAAkIgFAAIgCgIIgBAAQgEAFgDACQgFACgFAAQgHAAgFgEgAAGABQgKAAgDADQgFACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEgBgIIAAgFg");
	this.shape_136.setTransform(79.6,11.875);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#333333").s().p("AAMAbIgYgbIAAAbIgIAAIAAg1IAIAAIAAAaIAXgaIAIAAIgWAaIAYAbg");
	this.shape_137.setTransform(74.8,11.875);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_138.setTransform(69.075,11.875);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_139.setTransform(63.925,11.875);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_140.setTransform(58.625,11.875);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#333333").s().p("AAOAbIAAguIgcAAIAAAuIgIAAIAAg1IAsAAIAAA1g");
	this.shape_141.setTransform(52.5,11.875);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#333333").s().p("AAUAkIAAgnIABgUIAAAAIgnA7IgJAAIAAhHIAHAAIAAAnIAAAUIAAAAIAng7IAJAAIAABHg");
	this.shape_142.setTransform(45.625,10.975);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#333333").s().p("AgDAFQgCgBAAgEQAAgCACgCQAAAAABgBQAAAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_143.setTransform(31.125,14.025);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#333333").s().p("AgBARIANgRIgNgQIAFgEIARAUIAAABIgRAUgAgUARIAOgRIgOgQIAGgEIAQAUIAAABIgQAUg");
	this.shape_144.setTransform(27.325,11.925);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#333333").s().p("AgRAbQgFgJgBgSQABgSAFgJQAGgJALAAQALAAAHAKQAFAJABARQAAASgGAKQgGAJgMAAQgKAAgHgKgAgKgWQgFAHAAAPQAAAQAFAHQADAHAHAAQAIAAAEgHQAEgIAAgPQAAgOgEgIQgEgHgIAAQgHAAgDAHg");
	this.shape_145.setTransform(22,10.975);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AgXAkIAAgHIATgTQAIgIACgDIAFgHQABgEAAgEQAAgGgDgDQgEgDgFAAQgEAAgEABQgFACgEAEIgFgGQAKgIAMAAQAJAAAFAFQAHAFAAAJQAAAHgFAGQgEAGgKAKIgPAPIAAABIAkAAIAAAHg");
	this.shape_146.setTransform(16.3,10.925);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#333333").s().p("AgRAbQgFgJAAgSQAAgSAFgJQAGgJALAAQAMAAAFAKQAHAJAAARQgBASgFAKQgGAJgMAAQgKAAgHgKgAgLgWQgDAHAAAPQAAAQADAHQAEAHAHAAQAIAAAEgHQADgIAAgPQAAgOgDgIQgEgHgIAAQgHAAgEAHg");
	this.shape_147.setTransform(10.6,10.975);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#333333").s().p("AgXAkIAAgHIATgTQAIgIADgDIADgHQACgEAAgEQAAgGgDgDQgEgDgFAAQgFAAgDABQgEACgFAEIgFgGQAKgIAMAAQAJAAAGAFQAFAFAAAJQAAAHgDAGQgFAGgKAKIgPAPIAAABIAlAAIAAAHg");
	this.shape_148.setTransform(4.9,10.925);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#333333").s().p("AgQAYQgEgEgBgIQAAgPAZgBIAJAAIAAgEQABgGgDgDQgDgDgGAAQgGAAgIAEIgCgGIAJgDIAIgCQAKAAAEAFQAEAEAAAJIAAAkIgGAAIgBgIIgBAAQgDAFgFACQgDACgGAAQgHAAgFgEgAAFABQgJAAgDADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEAAgIIAAgFg");
	this.shape_149.setTransform(-10.25,11.875);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_150.setTransform(-16.475,11.875);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_151.setTransform(-23.775,11.875);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#333333").s().p("AgQAYQgFgEAAgIQAAgPAZgBIAJAAIAAgEQABgGgDgDQgDgDgGAAQgGAAgIAEIgDgGIAJgDIAIgCQALAAAEAFQAEAEAAAJIAAAkIgGAAIgBgIIgBAAQgDAFgFACQgDACgGAAQgHAAgFgEgAAFABQgIAAgEADQgFACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEgBgIIAAgFg");
	this.shape_152.setTransform(-30.4,11.875);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIACAHQADgEAEgCQAEgCAFAAQAKAAAGAHQAGAHgBANQABANgGAHQgGAHgKAAQgEAAgFgCQgEgCgDgEIgBAAIABAJIAAAWgAgLgbQgDAFAAAKIAAABQAAALADAFQAEAEAIAAQAHAAAEgFQADgFAAgKQAAgKgDgFQgEgFgHAAQgIAAgEAEg");
	this.shape_153.setTransform(-35.9,13.025);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#333333").s().p("AgPAbIAAg1IAfAAIAAAHIgXAAIAAAug");
	this.shape_154.setTransform(-40.875,11.875);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_155.setTransform(-46.325,11.875);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHAAANQAAANgGAHQgGAHgLAAQgDAAgFgCQgFgCgDgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAHAAQAIAAADgFQAFgFAAgKQAAgKgFgFQgDgFgIAAQgHAAgDAEg");
	this.shape_156.setTransform(-52.25,13.025);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#333333").s().p("AAPAbIAAguIgdAAIAAAuIgIAAIAAg1IAsAAIAAA1g");
	this.shape_157.setTransform(-58.55,11.875);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#333333").s().p("AgMAVQgHgIAAgNQAAgMAHgHQAGgIALAAIAIABIAHACIgDAHIgGgCIgGgBQgPAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_158.setTransform(-63.9,11.875);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_159.setTransform(-69.375,11.875);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#333333").s().p("AgTAkIAAhHIAnAAIAAAIIgfAAIAAA/g");
	this.shape_160.setTransform(-74.625,10.975);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#333333").s().p("AAAABIAAgBIAPgUIAGAEIgOAQIAOARIgGAEgAgUABIAAgBIARgUIAEAEIgMAQIAMARIgEAEg");
	this.shape_161.setTransform(-80.05,11.925);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_162.setTransform(79.725,1.225);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_163.setTransform(73.275,1.225);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_164.setTransform(65.975,1.225);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#333333").s().p("AgQAYQgFgEABgIQAAgPAYgBIAJAAIAAgEQAAgGgCgDQgDgDgGAAQgFAAgJAEIgDgGIAJgDIAIgCQALAAAEAFQAFAEgBAJIAAAkIgFAAIgCgIIgBAAQgDAFgEACQgFACgFAAQgHAAgFgEgAAGABQgKAAgEADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAFgEgBgIIAAgFg");
	this.shape_165.setTransform(59.35,1.225);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHgBANQABANgGAHQgGAHgLAAQgDAAgFgCQgFgCgDgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAIAAQAGAAAEgFQAEgFABgKQgBgKgEgFQgEgFgGAAQgIAAgDAEg");
	this.shape_166.setTransform(53.85,2.375);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#333333").s().p("AgPAbIAAg1IAfAAIAAAHIgXAAIAAAug");
	this.shape_167.setTransform(48.875,1.225);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_168.setTransform(43.425,1.225);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#333333").s().p("AgWAnIAAhMIAGAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAFAHABANQgBANgFAHQgGAHgLAAQgEAAgEgCQgFgCgDgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQABALAEAFQADAEAHAAQAIAAADgFQAFgFAAgKQAAgKgFgFQgDgFgIAAQgHAAgDAEg");
	this.shape_169.setTransform(37.5,2.375);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#333333").s().p("AAPAbIAAguIgcAAIAAAuIgIAAIAAg1IAsAAIAAA1g");
	this.shape_170.setTransform(31.2,1.225);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_171.setTransform(18.775,1.225);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#333333").s().p("AAPAbIAAguIgdAAIAAAuIgHAAIAAg1IAsAAIAAA1g");
	this.shape_172.setTransform(12.65,1.225);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#333333").s().p("AgBARIANgRIgNgQIAKgGIASAWIAAABIgSAWgAgaARIAOgRIgOgQIALgGIARAWIAAABIgRAWg");
	this.shape_173.setTransform(0.125,1.175);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#333333").s().p("AgZAoIAAhOIAMAAIADAHIAAAAQAGgIAIAAQAKAAAGAIQAFAHABANQgBAJgCAGQgDAGgEADQgGAEgGAAQgIAAgGgHIAAAAIAAAIIAAAWgAgHgYQgDAEAAAIIAAABQAAAJADADQADAEAEAAQAKAAAAgQQAAgIgCgEQgDgEgFAAQgEAAgDADg");
	this.shape_174.setTransform(-5.9,2.325);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#333333").s().p("AAOAbIAAgWIABgPIgYAlIgSAAIAAg1IAOAAIAAAVIgBAQIAZglIARAAIAAA1g");
	this.shape_175.setTransform(-12.85,1.175);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#333333").s().p("AAUAbIAAgqIAAADQgDALgCAEIgKAYIgJAAIgKgYIgFgOIgBgEIAAAqIgNAAIAAg1IAUAAIAJAXIADAIIABAIIACgLIACgEIAKgYIAUAAIAAA1g");
	this.shape_176.setTransform(-20.625,1.175);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#333333").s().p("AAOAnIAAgWIABgQIgYAmIgSAAIAAg1IAOAAIAAAUIgBARIAYglIASAAIAAA1gAgQgYQgGgFgBgJIAOAAQAAAFACACQADACAEAAQAFAAADgCQACgDAAgEIAOAAQgBAJgGAFQgGADgLAAQgLAAgFgDg");
	this.shape_177.setTransform(-34.8,0);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#333333").s().p("AgNAZQgGgEgEgGQgDgHAAgIQAAgNAIgHQAHgHALAAQAIAAAGADQAGADADAHQADAGABAIQAAANgIAIQgGAHgNAAQgHAAgGgDgAgIgLQgCAEAAAHQAAAIACAEQADAEAFAAQAGAAADgEQACgEAAgIQAAgHgCgEQgDgEgGAAQgFAAgDAEg");
	this.shape_178.setTransform(-41.45,1.175);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("AAYAkIAAgiIAAgFIABgQIgBAAIgSA3IgNAAIgRg3IgBAAIABAWIAAAhIgNAAIAAhHIAUAAIARA2IAAAAIARg2IAVAAIAABHg");
	this.shape_179.setTransform(-49.225,0.325);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#333333").s().p("AgBABIAAgBIARgWIALAGIgOAQIAOARIgLAGgAgaABIAAgBIASgWIAKAGIgNAQIANARIgKAGg");
	this.shape_180.setTransform(-57.025,1.175);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#333333").s().p("AAMAkIgZgkIAAAkIgPAAIAAhHIAPAAIAAAjIAYgjIARAAIgaAjIAbAkg");
	this.shape_181.setTransform(-69.35,0.325);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#333333").s().p("AAfAkIgYgkIAAAkIgNAAIAAgkIgYAkIgQAAIAZgkIgYgjIAQAAIAXAjIAAgjIANAAIAAAjIAXgjIAQAAIgYAjIAZAkg");
	this.shape_182.setTransform(-77.825,0.325);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#333333").s().p("AgWAbIAAg1IAXAAQAUAAAAAOQAAAFgDADQgDACgFABIAAABQAGAAAEADQACADAAAFQABAIgGAEQgFAEgLAAgAgOAUIAPAAQANAAAAgJQAAgFgDgCQgDgCgHAAIgPAAgAgOgEIAOAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgPAAg");
	this.shape_183.setTransform(79.95,-9.425);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#333333").s().p("AAPAmIAAghIABgFIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1gAgMgZQgFgEAAgIIAIAAQAAAFACACQACACAFAAQAFAAACgCQADgCAAgFIAIAAQgBAIgEAEQgEADgJAAQgIAAgEgDg");
	this.shape_184.setTransform(68.475,-10.525);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_185.setTransform(62.525,-9.425);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#333333").s().p("AgXAaIAAgGIACABQAGAAADgMQAEgLABgYIAfAAIAAA0IgIAAIAAgtIgQAAQgBASgCAJQgDAJgDAGQgEAEgGAAIgEgBg");
	this.shape_186.setTransform(56.475,-9.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#333333").s().p("AgRAeQgGgJAAgPQAAgRAFgKQAFgKALgCIAYgFIABAHIgXAFQgHABgEAGQgDAGAAALIAAAAQADgEAFgDQAFgCAEAAQAKAAAGAGQAFAGAAALQAAANgGAHQgHAHgLAAQgKAAgHgJgAgEgDIgHADIgEAGQAAANAEAGQAEAHAIAAQAOAAAAgTQAAgRgNAAIgGABg");
	this.shape_187.setTransform(51.05,-10.525);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#333333").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_188.setTransform(45.575,-8.225);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIACAHQADgEAEgCQAEgCAFAAQAKAAAGAHQAGAHgBANQABANgGAHQgGAHgKAAQgEAAgFgCQgEgCgDgEIgBAAIABAJIAAAWgAgLgbQgDAFAAAKIAAABQAAALADAFQAEAEAIAAQAHAAAEgFQADgFAAgKQAAgKgDgFQgEgFgHAAQgIAAgEAEg");
	this.shape_189.setTransform(40.15,-8.275);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#333333").s().p("AgRAkIAAgHQAEABAFAAQAKAAAGgHQAGgHABgPIAAAAQgEAEgDACQgFACgEAAQgKAAgGgGQgGgEAAgLQAAgLAHgGQAGgHAKAAQAGAAAGAEQAFAEADAHQAEAHAAAKQAAApggAAIgJgBgAgKgYQgFAEAAAIQAAAHAEAEQADADAIAAQAEAAADgBQAEgBACgDQACgEAAgDQAAgFgCgEQgCgFgDgCQgEgDgEAAQgHAAgDAFg");
	this.shape_190.setTransform(28.85,-10.325);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#333333").s().p("AAJAkIAAgQIgiAAIAAgHIAhgwIAIAAIAAAvIALAAIAAAIIgLAAIAAAQgAAEgTIgVAfIAaAAIAAgXIAAgQIAAAAg");
	this.shape_191.setTransform(23.15,-10.35);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#333333").s().p("AgNAkIAcg/IgmAAIAAgIIAvAAIAAAHIgcBAg");
	this.shape_192.setTransform(17.425,-10.325);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#333333").s().p("AgQAgQgHgFAAgJQABgNAPgGQgHgDgDgFQgDgEAAgGQAAgHAFgFQAHgFAIAAQAKAAAFAFQAGAEAAAIQAAAGgDAEQgEAEgGAEQAIADAEAFQAEAEgBAGQAAAJgFAFQgHAGgKAAQgLAAgGgFgAgLAJQgDADgBAGQAAAGAEADQAFADAGAAQAIAAAEgDQADgEAAgGQAAgEgDgEQgEgEgIgDQgIADgDAEgAgIgaQgEADAAAFQAAAEADADQACAEAIADQAGgDAEgDQACgEAAgEQAAgFgDgDQgEgDgGAAQgFAAgDADg");
	this.shape_193.setTransform(6.5,-10.325);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#333333").s().p("AgNAkQgFgBgFgCIAAgIIAKAEIAKABQASAAAAgPQAAgNgUAAIgHAAIAAgGIAHAAQAIAAAFgDQAFgEgBgHQABgFgEgDQgEgDgFAAQgFAAgDACQgFABgFADIgEgFQAEgEAGgCQAGgCAGAAQAJAAAHAFQAFAFAAAIQAAAHgDAEQgFAFgGABIAAABQAIAAAEAEQAFAEgBAIQABAKgIAFQgHAGgMAAIgKgBg");
	this.shape_194.setTransform(0.75,-10.325);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#333333").s().p("AgRAbQgFgJgBgSQABgSAFgJQAGgJALAAQALAAAGAKQAGAJABARQAAASgGAKQgGAJgMAAQgKAAgHgKgAgKgWQgFAHAAAPQAAAQAFAHQADAHAHAAQAIAAAEgHQADgIABgPQgBgOgDgIQgEgHgIAAQgHAAgDAHg");
	this.shape_195.setTransform(-4.9,-10.325);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#333333").s().p("AgWAkIAAgHIASgTQAIgIACgDIAFgHQABgEAAgEQAAgGgEgDQgDgDgFAAQgFAAgEABQgDACgGAEIgDgGQAJgIAMAAQAJAAAFAFQAGAFABAJQAAAHgFAGQgDAGgLAKIgOAPIAAABIAjAAIAAAHg");
	this.shape_196.setTransform(-15.85,-10.375);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#333333").s().p("AgFAVQgFgGgBgMIgPAAIAAAYIgIAAIAAg1IAIAAIAAAXIAPAAQABgLAGgHQAFgGAKAAQALAAAGAIQAGAHABAMQgBANgGAHQgGAIgLAAQgKAAgGgHgAAAgPQgDAGAAAJQAAAKADAGQADAFAIAAQAIAAADgFQAEgFAAgLQAAgJgEgGQgDgFgIAAQgIAAgDAFg");
	this.shape_197.setTransform(-27.95,-9.425);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#333333").s().p("AgVAbIAAg1IAHAAIAAAWIAQAAQAUAAABAOQgBAIgFAFQgFAEgLAAgAgOAUIAPAAQAHAAADgCQAEgDAAgEQAAgFgEgCQgDgCgHAAIgPAAg");
	this.shape_198.setTransform(-35.05,-9.425);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_199.setTransform(-40.475,-9.425);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#333333").s().p("AgMAVQgGgIAAgNQAAgMAGgHQAGgIAMAAIAHABIAGACIgCAHIgGgCIgFgBQgQAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAHgDIAAAHQgFADgIAAQgLAAgGgHg");
	this.shape_200.setTransform(-45.05,-9.425);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_201.setTransform(-50.525,-9.425);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_202.setTransform(-57.175,-9.425);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_203.setTransform(-63.975,-9.425);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_204.setTransform(-70.125,-9.425);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_205.setTransform(-75.475,-9.425);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#333333").s().p("AgMAVQgGgIAAgNQAAgMAGgHQAHgIALAAIAHABIAGACIgCAHIgGgCIgFgBQgQAAAAAUQAAAKAEAFQAEAGAHAAQAHAAAGgDIAAAHQgFADgIAAQgKAAgHgHg");
	this.shape_206.setTransform(-80.05,-9.425);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_207.setTransform(78.925,-20.075);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#333333").s().p("AgDAFQgCgBAAgEQAAgCACgCQAAAAABgBQAAAAAAAAQABgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQACACAAACQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBAAAAgBg");
	this.shape_208.setTransform(65.425,-17.925);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#333333").s().p("AgVAbIAAg1IAWAAQAUAAAAAOQAAAFgDADQgDACgGABIAAABQAHAAAEADQADADAAAFQgBAIgFAEQgGAEgKAAgAgNAUIANAAQAOAAABgJQAAgFgDgCQgEgCgIAAIgNAAgAgNgEIANAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgOAAg");
	this.shape_209.setTransform(61.55,-20.075);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#333333").s().p("AAMAbIgYgbIAAAbIgIAAIAAg1IAIAAIAAAaIAXgaIAIAAIgWAaIAYAbg");
	this.shape_210.setTransform(56.25,-20.075);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#333333").s().p("AgXAkIAAgHIATgTQAIgIACgDIAFgHQABgEAAgEQAAgGgDgDQgEgDgFAAQgEAAgEABQgFACgEAEIgFgGQAKgIAMAAQAJAAAFAFQAHAFAAAJQAAAHgFAGQgEAGgKAKIgPAPIAAABIAkAAIAAAHg");
	this.shape_211.setTransform(41.95,-21.025);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#333333").s().p("AgWAgIAAgHIAJADIAKABQAIAAAFgEQAEgEAAgIQAAgNgRAAIgNAAIgEgCIADghIAjAAIAAAHIgcAAIgCAWIALgBQALAAAGAFQAHAFgBAKQAAALgGAGQgIAGgLAAQgMAAgHgEg");
	this.shape_212.setTransform(36.3,-20.925);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#333333").s().p("AgHAMIAEgMIACgLIAIAAIABABIgFAKIgDAMg");
	this.shape_213.setTransform(32,-17.325);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#333333").s().p("AAFAkIAAgyIAAgMIgCACIgKAKIgFgGIASgPIAHAAIAABHg");
	this.shape_214.setTransform(27.45,-20.975);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#333333").s().p("AgWAkIAAgHIASgTQAIgIACgDIAFgHQABgEAAgEQAAgGgEgDQgDgDgFAAQgFAAgEABQgDACgGAEIgDgGQAJgIAMAAQAJAAAGAFQAFAFABAJQAAAHgFAGQgDAGgLAKIgOAPIAAABIAkAAIAAAHg");
	this.shape_215.setTransform(22.4,-21.025);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#333333").s().p("AgFAVQgFgGgCgMIgNAAIAAAYIgJAAIAAg1IAJAAIAAAXIAOAAQABgLAGgHQAFgGAKAAQALAAAGAIQAHAHAAAMQAAANgHAHQgGAIgLAAQgKAAgGgHgAAAgPQgDAGAAAJQAAAKADAGQADAFAIAAQAIAAADgFQAEgFAAgLQAAgJgEgGQgDgFgIAAQgIAAgDAFg");
	this.shape_216.setTransform(7.05,-20.075);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#333333").s().p("AgWAbIAAg1IAIAAIAAAWIAQAAQAUAAAAAOQAAAIgEAFQgGAEgLAAgAgOAUIAPAAQAHAAADgCQAEgDAAgEQgBgFgDgCQgDgCgHAAIgPAAg");
	this.shape_217.setTransform(-0.05,-20.075);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#333333").s().p("AATAkIAAgSIgkAAIAAASIgIAAIAAgZIADAAQAHgKAEgKQADgMABgOIAaAAIAAAuIAIAAIAAAZgAgEgGQgDAJgGAIIAYAAIAAgoIgLAAQgBALgDAMg");
	this.shape_218.setTransform(-6,-19.15);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#333333").s().p("AgQAYQgEgEgBgIQAAgPAagBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAEAEABAJIAAAkIgHAAIgBgIIAAAAQgEAFgFACQgEACgEAAQgJAAgEgEgAAFABQgIAAgFADQgEACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_219.setTransform(-11.8,-20.075);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#333333").s().p("AAgAkIAAgSIhHAAIAAg1IAIAAIAAAuIAYAAIAAguIAHAAIAAAuIAYAAIAAguIAIAAIAAAuIAIAAIAAAZg");
	this.shape_220.setTransform(-18.525,-19.15);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_221.setTransform(-26.325,-20.075);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#333333").s().p("AgXAbIAAgHIACABQAGAAADgMQAEgLABgYIAfAAIAAA1IgIAAIAAguIgQAAQgBARgCAKQgDAJgDAFQgEAFgGAAIgEAAg");
	this.shape_222.setTransform(-32.575,-20.05);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#333333").s().p("AAOAbIAAguIgcAAIAAAuIgIAAIAAg1IAsAAIAAA1g");
	this.shape_223.setTransform(-38.15,-20.075);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#333333").s().p("AAPAmIAAghIABgFIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1gAgMgZQgFgEAAgIIAIAAQAAAFACACQACACAFAAQAFAAACgCQADgCAAgFIAIAAQgBAIgEAEQgEADgJAAQgIAAgEgDg");
	this.shape_224.setTransform(-52.875,-21.175);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_225.setTransform(-58.825,-20.075);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#333333").s().p("AAgAkIAAgSIhHAAIAAg1IAIAAIAAAuIAYAAIAAguIAHAAIAAAuIAYAAIAAguIAIAAIAAAuIAIAAIAAAZg");
	this.shape_226.setTransform(-65.775,-19.15);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#333333").s().p("AgRAeQgGgJAAgPQAAgRAFgKQAFgKALgCIAYgFIACAHIgYAFQgHABgEAGQgDAGAAALIABAAQADgEAEgDQAFgCAEAAQAKAAAFAGQAGAGAAALQAAANgHAHQgFAHgMAAQgLAAgGgJgAgEgDIgHADIgEAGQAAANAEAGQAEAHAHAAQAPAAAAgTQAAgRgNAAIgGABg");
	this.shape_227.setTransform(-73.55,-21.175);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_228.setTransform(-79.525,-20.075);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_229.setTransform(79.375,-30.725);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_230.setTransform(73.075,-30.725);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#333333").s().p("AATAkIAAgTIglAAIAAATIgHAAIAAgZIADAAQAHgKAEgLQADgMABgNIAaAAIAAAuIAHAAIAAAZgAgEgGQgDAJgGAIIAYAAIAAgoIgLAAQAAALgEAMg");
	this.shape_231.setTransform(67.05,-29.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#333333").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_232.setTransform(61.725,-29.525);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_233.setTransform(56.875,-30.725);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#333333").s().p("AgMAVQgHgIAAgNQAAgMAHgHQAGgIALAAIAIABIAHACIgDAHIgGgCIgGgBQgPAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_234.setTransform(52.3,-30.725);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#333333").s().p("AAWAbIAAg1IAIAAIAAA1gAgdAbIAAg1IAIAAIAAAWIAPAAQAJAAAFAEQAFADAAAHQAAAIgFAFQgFAEgKAAgAgVAUIAOAAQAMAAAAgJQAAgFgDgCQgCgCgIAAIgNAAg");
	this.shape_235.setTransform(31.55,-30.725);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHAAANQAAANgGAHQgGAHgLAAQgDAAgFgCQgEgCgEgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAHAAQAIAAADgFQAFgFAAgKQAAgKgFgFQgDgFgIAAQgHAAgDAEg");
	this.shape_236.setTransform(24.8,-29.575);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_237.setTransform(18.475,-30.725);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_238.setTransform(12.975,-30.725);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#333333").s().p("AgWAnIAAhMIAGAAIACAHQADgEAEgCQAEgCAFAAQAKAAAGAHQAGAHgBANQABANgGAHQgGAHgKAAQgEAAgFgCQgEgCgDgEIgBAAIABAJIAAAWgAgLgbQgDAFAAAKIAAABQAAALADAFQAEAEAIAAQAHAAAEgFQADgFAAgKQAAgKgDgFQgEgFgHAAQgIAAgEAEg");
	this.shape_239.setTransform(7.75,-29.575);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#333333").s().p("AgQAYQgEgEAAgIQAAgPAZgBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAFAEAAAJIAAAkIgHAAIgBgIIAAAAQgFAFgDACQgEACgFAAQgJAAgEgEgAAGABQgJAAgFADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_240.setTransform(1.6,-30.725);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#333333").s().p("AgVAbIAAg1IAWAAQAUAAAAAOQAAAFgDADQgDACgGABIAAABQAIAAACADQADADABAFQAAAIgGAEQgGAEgKAAgAgOAUIAOAAQAPAAAAgJQAAgFgEgCQgDgCgIAAIgOAAgAgOgEIAOAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgPAAg");
	this.shape_241.setTransform(-3.55,-30.725);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#333333").s().p("AALAbIgXgbIAAAbIgIAAIAAg1IAIAAIAAAaIAWgaIAJAAIgWAaIAYAbg");
	this.shape_242.setTransform(-8.85,-30.725);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_243.setTransform(-29.325,-30.725);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_244.setTransform(-35.625,-30.725);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#333333").s().p("AAPAbIAAgYIgdAAIAAAYIgIAAIAAg1IAIAAIAAAXIAdAAIAAgXIAIAAIAAA1g");
	this.shape_245.setTransform(-41.925,-30.725);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_246.setTransform(-47.875,-30.725);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#333333").s().p("AgjAbIAAg1IAIAAIAAAuIAYAAIAAguIAHAAIAAAuIAYAAIAAguIAIAAIAAA1g");
	this.shape_247.setTransform(-55.15,-30.725);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_248.setTransform(-62.575,-30.725);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#333333").s().p("AAPAbIAAgYIgdAAIAAAYIgIAAIAAg1IAIAAIAAAXIAdAAIAAgXIAIAAIAAA1g");
	this.shape_249.setTransform(-68.725,-30.725);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_250.setTransform(-74.225,-30.725);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_251.setTransform(-79.525,-30.725);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#333333").s().p("AgVAbIAAg1IAWAAQAUAAAAAOQAAAFgDADQgDACgGABIAAABQAIAAACADQAEADAAAFQgBAIgFAEQgGAEgKAAgAgNAUIANAAQAOAAABgJQAAgFgDgCQgEgCgIAAIgNAAgAgNgEIANAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgOAAg");
	this.shape_252.setTransform(79.9,-41.375);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_253.setTransform(42.625,-41.375);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#333333").s().p("AgVAbIAAg1IAWAAQAUAAAAAOQAAAFgDADQgDACgGABIAAABQAHAAAEADQADADAAAFQgBAIgFAEQgGAEgKAAgAgNAUIANAAQAOAAABgJQgBgFgCgCQgEgCgIAAIgNAAgAgNgEIANAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgOAAg");
	this.shape_254.setTransform(37.25,-41.375);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_255.setTransform(31.825,-41.375);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#333333").s().p("AgMAVQgGgIgBgNQABgMAGgHQAHgIALAAIAHABIAGACIgCAHIgGgCIgFgBQgQAAAAAUQAAAKAEAFQAEAGAHAAQAHAAAGgDIAAAHQgFADgIAAQgLAAgGgHg");
	this.shape_256.setTransform(27.25,-41.375);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#333333").s().p("AgVAbIAAg1IAIAAIAAAWIAPAAQAVAAAAAOQAAAIgGAFQgFAEgKAAgAgNAUIAPAAQAGAAADgCQADgDAAgEQABgFgDgCQgEgCgHAAIgOAAg");
	this.shape_257.setTransform(21.95,-41.375);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#333333").s().p("AgXAaIAAgGIACABQAGAAADgMQAEgLABgYIAfAAIAAA0IgIAAIAAgtIgQAAQgBASgCAJQgDAJgDAGQgEAEgGAAIgEgBg");
	this.shape_258.setTransform(15.625,-41.35);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_259.setTransform(10.375,-41.375);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_260.setTransform(5.225,-41.375);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_261.setTransform(-0.225,-41.375);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_262.setTransform(-6.375,-41.375);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAEAAQALAAAGAHQAGAHgBANQABANgGAHQgGAHgLAAQgDAAgFgCQgFgCgDgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAIAAQAGAAAEgFQAEgFABgKQgBgKgEgFQgEgFgGAAQgIAAgDAEg");
	this.shape_263.setTransform(-12.3,-40.225);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_264.setTransform(-17.825,-41.375);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#333333").s().p("AgMAVQgHgIAAgNQAAgMAHgHQAGgIALAAIAIABIAHACIgDAHIgGgCIgGgBQgPAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_265.setTransform(-22.4,-41.375);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_266.setTransform(-44.225,-41.375);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_267.setTransform(-50.875,-41.375);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#333333").s().p("AgVAbIAAg1IAWAAQAUAAAAAOQAAAFgDADQgDACgGABIAAABQAIAAACADQAEADAAAFQgBAIgFAEQgGAEgKAAgAgNAUIANAAQAOAAABgJQAAgFgDgCQgEgCgIAAIgNAAgAgNgEIANAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgOAAg");
	this.shape_268.setTransform(-56.45,-41.375);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_269.setTransform(-62.325,-41.375);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#333333").s().p("AgXAaIAAgGIACABQAGAAADgMQAEgLABgYIAfAAIAAA0IgIAAIAAgtIgQAAQgBASgCAJQgDAJgDAGQgEAEgGAAIgEgBg");
	this.shape_270.setTransform(-68.375,-41.35);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_271.setTransform(-73.825,-41.375);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#333333").s().p("AASAkIAAgTIgjAAIAAATIgJAAIAAgaIAEAAQAHgIAEgLQADgMABgOIAaAAIAAAtIAIAAIAAAagAgEgHQgEALgFAGIAYAAIAAgmIgLAAQgBAKgDALg");
	this.shape_272.setTransform(-79.7,-40.45);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#333333").s().p("AgWAbIAAg1IAXAAQAUAAAAAOQAAAFgDADQgDACgFABIAAABQAGAAAEADQACADAAAFQABAIgGAEQgFAEgLAAgAgOAUIAPAAQANAAAAgJQAAgFgDgCQgDgCgHAAIgPAAgAgOgEIAOAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgPAAg");
	this.shape_273.setTransform(79.95,-52.025);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#333333").s().p("AAOAbIAAgWIgNAAIgNAWIgKAAIAQgXQgGgBgEgDQgDgEAAgGQAAgHAFgFQAFgEAJAAIAWAAIAAA1gAgLgKQAAAJANAAIAMAAIAAgSIgOAAQgLAAAAAJg");
	this.shape_274.setTransform(69.5,-52.025);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_275.setTransform(63.925,-52.025);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_276.setTransform(58.425,-52.025);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#333333").s().p("AgMAVQgHgIABgNQgBgMAHgHQAHgIAKAAIAIABIAGACIgCAHIgGgCIgGgBQgPAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_277.setTransform(53.85,-52.025);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#333333").s().p("AgQAYQgEgEAAgIQAAgPAZgBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAFAEAAAJIAAAkIgGAAIgCgIIAAAAQgFAFgDACQgEACgFAAQgJAAgEgEgAAGABQgJAAgFADQgEACAAAGQAAAEADADQADACAEAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_278.setTransform(48.4,-52.025);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#333333").s().p("AAOAbIAAgYQgFADgEACIgJABQgIAAgFgEQgEgEAAgHIAAgUIAIAAIAAAUQAAAIALAAQADAAAEgBIAJgEIAAgXIAIAAIAAA1g");
	this.shape_279.setTransform(42.725,-52.025);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#333333").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_280.setTransform(37.275,-50.825);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#333333").s().p("AgQAYQgEgEgBgIQAAgPAagBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAEAEABAJIAAAkIgHAAIgBgIIAAAAQgEAFgEACQgFACgEAAQgJAAgEgEgAAGABQgJAAgFADQgEACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_281.setTransform(23.3,-52.025);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#333333").s().p("AgWAnIAAhMIAGAAIACAHQADgEAEgCQAEgCAEAAQALAAAGAHQAFAHABANQgBANgFAHQgGAHgLAAQgEAAgEgCQgEgCgDgEIgBAAIABAJIAAAWgAgLgbQgDAFAAAKIAAABQAAALADAFQAEAEAHAAQAHAAAFgFQADgFABgKQgBgKgDgFQgFgFgHAAQgHAAgEAEg");
	this.shape_282.setTransform(17.8,-50.875);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_283.setTransform(11.625,-52.025);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#333333").s().p("AgWAbIAAg1IAXAAQAUAAAAAOQAAAFgDADQgDACgFABIAAABQAGAAAEADQACADAAAFQABAIgGAEQgFAEgLAAgAgOAUIAPAAQANAAAAgJQAAgFgDgCQgDgCgHAAIgPAAgAgOgEIAOAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgPAAg");
	this.shape_284.setTransform(6.05,-52.025);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_285.setTransform(-0.025,-52.025);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#333333").s().p("AgPAbIAAg1IAfAAIAAAHIgXAAIAAAug");
	this.shape_286.setTransform(-4.825,-52.025);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_287.setTransform(-10.275,-52.025);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#333333").s().p("AASAkIAAgSIgkAAIAAASIgIAAIAAgZIAFAAQAGgKAEgKQADgMABgOIAaAAIAAAuIAHAAIAAAZgAgEgGQgEAJgFAIIAYAAIAAgoIgLAAQgBALgDAMg");
	this.shape_288.setTransform(-16.15,-51.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#333333").s().p("AAOAbIAAgWIgNAAIgNAWIgKAAIAQgXQgGgBgEgDQgDgEAAgGQAAgHAFgFQAFgEAJAAIAWAAIAAA1gAgLgKQAAAJANAAIAMAAIAAgSIgOAAQgLAAAAAJg");
	this.shape_289.setTransform(-26.35,-52.025);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_290.setTransform(-31.925,-52.025);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#333333").s().p("AAPAbIAAgYIgdAAIAAAYIgIAAIAAg1IAIAAIAAAXIAdAAIAAgXIAIAAIAAA1g");
	this.shape_291.setTransform(-38.225,-52.025);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_292.setTransform(-44.175,-52.025);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#333333").s().p("AAOAbIAAgYQgFADgEACIgJABQgIAAgFgEQgEgEAAgHIAAgUIAIAAIAAAUQAAAIALAAQADAAAEgBIAJgEIAAgXIAIAAIAAA1g");
	this.shape_293.setTransform(-50.075,-52.025);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#333333").s().p("AgFAVQgFgGgCgMIgNAAIAAAYIgIAAIAAg1IAIAAIAAAXIAOAAQABgLAGgHQAFgGAKAAQALAAAGAIQAHAHgBAMQABANgHAHQgGAIgLAAQgKAAgGgHgAAAgPQgDAGAAAJQAAAKADAGQADAFAIAAQAIAAADgFQAEgFAAgLQAAgJgEgGQgDgFgIAAQgIAAgDAFg");
	this.shape_294.setTransform(-57.05,-52.025);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#333333").s().p("AgXAbIAAgHIACABQAGAAADgMQAEgLABgYIAfAAIAAA1IgIAAIAAguIgQAAQgBARgCAKQgDAJgDAFQgEAFgGAAIgEAAg");
	this.shape_295.setTransform(-64.575,-52);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#333333").s().p("AALAbIgXgbIAAAbIgIAAIAAg1IAIAAIAAAaIAWgaIAJAAIgWAaIAYAbg");
	this.shape_296.setTransform(-69.25,-52.025);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#333333").s().p("AgQAYQgEgEgBgIQAAgPAZgBIAJAAIAAgEQAAgGgCgDQgDgDgGAAQgGAAgIAEIgCgGIAJgDIAIgCQAKAAAEAFQAEAEABAJIAAAkIgHAAIgBgIIgBAAQgEAFgEACQgEACgFAAQgIAAgEgEgAAFABQgJAAgDADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEAAgIIAAgFg");
	this.shape_297.setTransform(-75.15,-52.025);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#333333").s().p("AgTAYIAAgHQAJAEAJAAQAGAAADgCQAEgDAAgEQAAgKgOAAIgIAAIAAgGIAHAAQAOAAAAgIQAAgIgMAAIgHABIgHADIgEgHQAIgEAKAAQAJAAAFAEQAGAEgBAGQAAAJgKADIAAABQAHAAACAEQADADAAAFQAAAHgGAFQgGAEgKAAQgLAAgGgEg");
	this.shape_298.setTransform(-80.2,-52.025);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_299.setTransform(79.425,-62.675);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_300.setTransform(73.125,-62.675);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#333333").s().p("AgVAbIAAg1IAWAAQAUAAAAAOQAAAFgDADQgDACgGABIAAABQAHAAAEADQADADAAAFQgBAIgFAEQgGAEgKAAgAgNAUIANAAQAOAAAAgJQAAgFgCgCQgEgCgIAAIgNAAgAgNgEIANAAQAHAAADgCQADgBAAgFQAAgDgDgCQgDgCgGAAIgOAAg");
	this.shape_301.setTransform(67.4,-62.675);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_302.setTransform(61.325,-62.675);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#333333").s().p("AgXAaIAAgFIACAAQAGAAADgMQAEgLABgYIAfAAIAAA0IgIAAIAAgtIgQAAQgBARgCAJQgDALgDAFQgEAEgGAAIgEgBg");
	this.shape_303.setTransform(55.075,-62.65);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#333333").s().p("AgMAVQgGgIAAgNQAAgMAGgHQAGgIAMAAIAHABIAGACIgCAHIgGgCIgFgBQgQAAAAAUQAAAKAEAFQAEAGAHAAQAGAAAIgDIAAAHQgGADgIAAQgLAAgGgHg");
	this.shape_304.setTransform(50.35,-62.675);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#333333").s().p("AgXAmIAAgHIAGABQAIAAADgJIADgIIgVg1IAJAAIALAfIAEAOIADgIIANglIAJAAIgXA8QgCAJgFAEQgFAEgGAAIgHgBg");
	this.shape_305.setTransform(45.375,-61.475);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#333333").s().p("AAPAbIAAggIABgGIAAgHIgcAtIgKAAIAAg1IAHAAIAAAhIAAAJIAAADIAcgtIAKAAIAAA1g");
	this.shape_306.setTransform(6.625,-62.675);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIACAHQADgEAEgCQAEgCAFAAQAKAAAGAHQAGAHgBANQABANgGAHQgGAHgKAAQgEAAgFgCQgEgCgDgEIgBAAIABAJIAAAWgAgLgbQgDAFAAAKIAAABQAAALADAFQAEAEAIAAQAHAAAEgFQADgFAAgKQAAgKgDgFQgEgFgHAAQgIAAgEAEg");
	this.shape_307.setTransform(0.55,-61.525);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#333333").s().p("AAOAbIAAguIgcAAIAAAuIgIAAIAAg1IAsAAIAAA1g");
	this.shape_308.setTransform(-5.75,-62.675);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#333333").s().p("AgQAYQgEgEgBgIQAAgPAZgBIAJAAIAAgEQABgGgDgDQgDgDgGAAQgGAAgIAEIgCgGIAJgDIAIgCQAKAAAEAFQAEAEAAAJIAAAkIgGAAIgBgIIgBAAQgDAFgFACQgDACgGAAQgHAAgFgEgAAFABQgJAAgDADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEAAgIIAAgFg");
	this.shape_309.setTransform(-44.9,-62.675);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#333333").s().p("AAbAbIgXgbIAAAbIgHAAIAAgbIgXAbIgKAAIAZgbIgXgaIAJAAIAWAaIAAgaIAHAAIAAAaIAWgaIAJAAIgXAaIAZAbg");
	this.shape_310.setTransform(-51.175,-62.675);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_311.setTransform(-57.625,-62.675);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#333333").s().p("AgDAbIAAguIgRAAIAAgHIApAAIAAAHIgRAAIAAAug");
	this.shape_312.setTransform(-62.775,-62.675);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#333333").s().p("AgQAYQgEgEgBgIQAAgPAagBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAEAEABAJIAAAkIgHAAIgBgIIAAAAQgEAFgFACQgEACgEAAQgJAAgEgEgAAFABQgIAAgFADQgEACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_313.setTransform(-68.05,-62.675);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#333333").s().p("AgXAaIAAgFIACAAQAGAAADgMQAEgLABgYIAfAAIAAA0IgIAAIAAgtIgQAAQgBARgCAJQgDALgDAFQgEAEgGAAIgEgBg");
	this.shape_314.setTransform(-73.875,-62.65);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#333333").s().p("AAOAbIAAguIgcAAIAAAuIgIAAIAAg1IAsAAIAAA1g");
	this.shape_315.setTransform(-79.45,-62.675);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_316.setTransform(79.575,-73.325);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#333333").s().p("AgPAbIAAg1IAfAAIAAAHIgXAAIAAAug");
	this.shape_317.setTransform(74.775,-73.325);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#333333").s().p("AgMAYQgGgDgDgGQgDgHAAgIQAAgMAHgHQAGgIALAAQALAAAHAIQAHAHAAAMQAAANgHAHQgHAIgLAAQgGAAgGgEgAgLgPQgEAGAAAJQAAAKAEAGQAEAFAHAAQAIAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgIAAQgHAAgEAFg");
	this.shape_318.setTransform(69.325,-73.325);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#333333").s().p("AAPAbIAAgYIgdAAIAAAYIgIAAIAAg1IAIAAIAAAXIAdAAIAAgXIAIAAIAAA1g");
	this.shape_319.setTransform(63.175,-73.325);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#333333").s().p("AAOAbIAAgYQgFADgEACIgJABQgIAAgFgEQgEgEAAgHIAAgUIAIAAIAAAUQAAAIALAAQADAAAEgBIAJgEIAAgXIAIAAIAAA1g");
	this.shape_320.setTransform(56.925,-73.325);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#333333").s().p("AAOAbIAAgWIgNAAIgNAWIgKAAIAQgXQgHgBgDgDQgDgEAAgGQAAgHAFgFQAFgEAIAAIAXAAIAAA1gAgLgKQAAAJANAAIAMAAIAAgSIgOAAQgLAAAAAJg");
	this.shape_321.setTransform(50.85,-73.325);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#333333").s().p("AgMAVQgGgIgBgNQABgMAGgHQAHgIALAAIAHABIAGACIgCAHIgGgCIgFgBQgQAAAAAUQAAAKAEAFQAEAGAHAAQAHAAAGgDIAAAHQgFADgIAAQgLAAgGgHg");
	this.shape_322.setTransform(46.15,-73.325);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_323.setTransform(40.875,-73.325);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_324.setTransform(34.425,-73.325);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_325.setTransform(27.975,-73.325);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#333333").s().p("AAbAbIgXgbIAAAbIgHAAIAAgbIgXAbIgKAAIAZgbIgXgaIAJAAIAWAaIAAgaIAHAAIAAAaIAWgaIAJAAIgXAaIAZAbg");
	this.shape_326.setTransform(21.475,-73.325);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_327.setTransform(15.025,-73.325);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAFAAQAKAAAGAHQAGAHgBANQABANgGAHQgGAHgKAAQgEAAgFgCQgFgCgDgEIAAAAIAAAJIAAAWgAgKgbQgEAFgBAKIAAABQAAALAFAFQADAEAIAAQAGAAAEgFQAEgFABgKQgBgKgEgFQgEgFgGAAQgIAAgDAEg");
	this.shape_328.setTransform(2.55,-72.175);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#333333").s().p("AgPAVQgHgIAAgNQAAgMAHgHQAGgIAKAAQAKAAAGAHQAGAGAAALIAAAEIgkAAQAAAKAFAFQAEAFAHAAQAJAAAIgEIAAAHIgIADIgJABQgLAAgHgHgAAOgEQAAgIgDgEQgEgEgGAAQgGAAgDAEQgEAEgBAIIAbAAIAAAAg");
	this.shape_329.setTransform(-3.425,-73.325);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#333333").s().p("AAVAbIAAgrIgBACIgDAIIgOAhIgGAAIgNghIgEgKIAAArIgHAAIAAg1IAKAAIAOAhIADAMIABgFIACgFIAPgjIAKAAIAAA1g");
	this.shape_330.setTransform(-9.875,-73.325);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#333333").s().p("AgTAYIAAgHQAJAEAJAAQAGAAAEgCQADgDAAgEQAAgKgOAAIgHAAIAAgGIAFAAQAOAAABgIQAAgIgMAAIgGABIgIADIgDgHQAHgEALAAQAIAAAFAEQAFAEABAGQgBAJgJADIAAABQAFAAAEAEQACADAAAFQAAAHgGAFQgGAEgKAAQgLAAgGgEg");
	this.shape_331.setTransform(-16,-73.325);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#333333").s().p("AgQAYQgFgEAAgIQAAgPAZgBIAJAAIAAgEQAAgGgCgDQgDgDgGAAQgFAAgJAEIgDgGIAJgDIAIgCQALAAAEAFQAFAEgBAJIAAAkIgFAAIgCgIIgBAAQgDAFgFACQgDACgGAAQgHAAgFgEgAAFABQgIAAgEADQgFACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAFgEgBgIIAAgFg");
	this.shape_332.setTransform(-21.3,-73.325);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#333333").s().p("AgXAnIAAhMIAHAAIABAHQAEgEAEgCQAEgCAFAAQAKAAAGAHQAGAHgBANQABANgGAHQgGAHgKAAQgEAAgFgCQgFgCgDgEIAAAAIAAAJIAAAWgAgLgbQgDAFgBAKIAAABQAAALAEAFQAEAEAIAAQAGAAAEgFQAEgFAAgKQAAgKgEgFQgEgFgGAAQgIAAgEAEg");
	this.shape_333.setTransform(-26.8,-72.175);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#333333").s().p("AAPAbIAAgYIgdAAIAAAYIgIAAIAAg1IAIAAIAAAXIAdAAIAAgXIAIAAIAAA1g");
	this.shape_334.setTransform(-39.875,-73.325);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#333333").s().p("AgQAYQgEgEgBgIQAAgPAagBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAEAEABAJIAAAkIgHAAIgBgIIAAAAQgEAFgFACQgEACgEAAQgJAAgEgEgAAFABQgIAAgFADQgEACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_335.setTransform(-46,-73.325);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#333333").s().p("AgTAYIAAgHQAJAEAJAAQAGAAADgCQAEgDAAgEQAAgKgOAAIgIAAIAAgGIAHAAQANAAAAgIQAAgIgLAAIgHABIgIADIgDgHQAIgEAKAAQAJAAAFAEQAGAEgBAGQAAAJgKADIAAABQAHAAACAEQADADAAAFQAAAHgGAFQgGAEgKAAQgLAAgGgEg");
	this.shape_336.setTransform(-51.05,-73.325);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#333333").s().p("AgQAYQgEgEgBgIQAAgPAagBIAJAAIAAgEQgBgGgCgDQgDgDgGAAQgFAAgJAEIgCgGIAJgDIAIgCQAJAAAFAFQAEAEABAJIAAAkIgHAAIgBgIIAAAAQgEAFgFACQgEACgEAAQgJAAgEgEgAAFABQgIAAgFADQgEACAAAGQAAAEADADQACACAFAAQAHAAAEgEQAEgEABgIIAAgFg");
	this.shape_337.setTransform(-56.35,-73.325);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#333333").s().p("AALAbIgXgbIAAAbIgIAAIAAg1IAIAAIAAAaIAWgaIAJAAIgWAaIAYAbg");
	this.shape_338.setTransform(-61.15,-73.325);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#333333").s().p("AgaAjIAAgIQAFACAEAAQAGAAADgDQADgCADgHIgbg0IAJAAIAUAnIACAFIAAAAIACgFIASgnIAIAAIgWAyIgIANQgCAEgEACQgEACgGAAQgGAAgEgBg");
	this.shape_339.setTransform(-67.125,-74.175);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#333333").s().p("AAAAFIgHASIgIgGIALgPIgSgCIABgIIATAGIgCgTIAJAAIgCATIATgGIABAIIgSACIAMAPIgIAGg");
	this.shape_340.setTransform(-79.825,-76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-83.3,169.1,166.7);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgjYANmIAA7LMBGxAAAIAAbLg");
	mask.setTransform(88.55,0.025);

	// Слой_1
	this.instance = new lib._2000300();
	this.instance.parent = this;
	this.instance.setTransform(-130.5,-88);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.5,-87,261,174.1);


(lib.shape35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAEIgkASIAigWIgigVIAkATIABgpIACApIAkgTIgiAVIAiAWIgkgSIgCAog");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABAIIgsBEIAmhIIhSgEIBSgDIgmhIIAsBEIArhEIgmBIIBSADIhSAEIAmBIg");
	this.shape_1.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.8,-7.6,17.6,15.3);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2xHqIAAvTMAtjAAAIAAPTg");
	mask.setTransform(145.8,49.025);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBAIgDgBIAAgIQAEAAADgCQACgBADgEQADgDABgGQACgIAAgHIAFhYIA8AAIAAB/IgRAAIAAhyIgbAAIgEBLQgBALgCAIQgCAHgDAFQgDAFgFACQgEADgEAAg");
	this.shape.setTransform(245.075,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaBAIgIghIgjAAIgJAhIgQAAIAfh/IAXAAIAfB/gAgPASIAeAAIgPg+IAAAAg");
	this.shape_1.setTransform(236.075,88.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBAIAAhyIgdAAIAAgNIBJAAIAAANIgdAAIAAByg");
	this.shape_2.setTransform(228.225,88.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghBBIAAh9QAHgCAGgBIAQgBQAJAAAIADQAIACAEAFQAFAGACAIQACAIAAAOQAAAOgCAHQgCAJgEAFQgDAGgIACQgFACgKAAIgJAAIgIgBIAAAngAgRAPIANAAQAEAAAFgCQAEgBAEgEQADgEABgGIABgQIgBgQQgBgHgDgEQgEgEgEgBQgFgCgEAAIgNAAg");
	this.shape_3.setTransform(219.95,88.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBAIgJghIgjAAIgIAhIgRAAIAfh/IAXAAIAfB/gAgOASIAeAAIgPg+IgBAAg");
	this.shape_4.setTransform(210.375,88.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBBQgIgBgHgCIAAh7QAHgCAIgBIAOgBQASAAAKAJQAIAIAAARQAAAJgDAGQgEAIgHAEIAAABQALADAEAIQAEAJAAAMQAAAIgBAJQgCAGgGAFQgFAFgIABQgJADgKAAgAgSA2IAMAAQANAAAGgGQAGgFAAgOQAAgOgGgGQgGgGgNAAIgMAAgAgSgIIALAAQAUAAABgXQgBgWgUAAIgLAAg");
	this.shape_5.setTransform(201.3,88.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAOA8QgFgGgDgKIgEgYQgCgJgEgEQgEgDgGAAIgHAAIAAA8IgQAAIAAh/IAQAAIAAA3IAHAAQAFAAADgEQAEgCACgKIAFgTQAFgWAQAAIAHABIADABIAAAJQgHAAgDADQgDADgBAFIgIAcIgDAHIgFAEIgFACIAAABIAGABQADABACADIAEAGIADAKIAFAYQABAFADADQAEAEAGAAIAAAIIgDABIgIABQgIAAgFgGg");
	this.shape_6.setTransform(192.375,88.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUBQIAAheIgBAAIgkBeIgTAAIAAh/IARAAIAABeIABAAIAjheIATAAIAAB/gAgPg9QgFgDgFgHIAIgIQADADAEADQAFADAFAAQAHAAAEgDQAEgDADgDIAIAIQgFAHgFADQgHADgJAAQgIAAgHgDg");
	this.shape_7.setTransform(177.45,87.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPA+QgHgDgGgHQgFgIgCgMQgDgNAAgTQAAgSADgNQACgMAFgIQAGgHAHgDQAIgEAHAAQAIAAAJAEQAHADAFAHQAFAHADANQACAOAAARQAAASgCAOQgDANgFAHQgFAHgHADQgJAEgIAAQgHAAgIgEgAgHgzQgFACgDAGQgCAFgDAMQgCAKAAAQQAAARACAKQADAMACAFQADAGAFACQAEADADAAQAEAAAFgDQAEgCADgGQADgGACgLQACgKAAgRQAAgQgCgKQgCgLgDgGQgDgGgEgCQgFgDgEAAQgDAAgEADg");
	this.shape_8.setTransform(167.525,88.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AANA8QgFgGgBgKIgFgYQgCgKgEgDQgDgDgIAAIgGAAIAAA8IgQAAIAAh/IAQAAIAAA3IAGAAQAGAAADgEQAFgDABgJIAEgTQAGgWAQAAIAIABIACABIAAAJQgHAAgCADQgDADgCAFIgHAcIgFAHIgDAEIgGACIAAABIAGABQADABACADIAFAGIACAKIAFAYQABAGADACQADAEAHAAIAAAIIgDABIgHABQgIAAgHgGg");
	this.shape_9.setTransform(158.8,88.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKA+QgHgDgFgHQgGgIgCgMQgDgNAAgTQAAgSADgNQACgMAGgIQAEgHAIgDQAIgEAHAAQAIAAAHACQAHAAAFACIAAAIIgYAAQgFAAgEADQgFACgDAGQgEAHgBAKQgCAJAAAQQAAARACAJQACAMADAFQAEAGAFACQAFADAFAAIAYAAIAAAIIgMACQgHACgJAAQgHAAgJgEg");
	this.shape_10.setTransform(149.875,88.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlBNQgFgJgBgSIg9AAQgBASgEAJIgLAAIAAgoIAKAAIAEgJIADgMIACgQIAEhMIA5AAIAABxIANAAIAAAogAgNAQIgCAMIgFAJIAnAAIAAhkIgaAAg");
	this.shape_11.setTransform(140.5,90.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQA+QgGgDgGgHQgFgHgDgNQgCgOAAgSQAAgRACgOQADgNAFgHQAGgHAGgDQAJgEAHAAQAIAAAIAEQAHADAGAHQAFAIACAMQADANAAASQAAATgDANQgCAMgFAIQgGAHgHADQgIAEgIAAQgHAAgJgEgAgIgzQgEACgDAGQgDAGgCALQgCAKAAAQQAAARACAKQACALADAGQADAGAEACQAFADADAAQAEAAAEgDQAFgCADgGQACgFADgMQACgOAAgNQAAgMgCgOQgDgMgCgFQgDgGgFgCQgEgDgEAAQgDAAgFADg");
	this.shape_12.setTransform(130.875,88.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiBBIAAh9IAOgDIAQgBQAIAAAJADQAIACAEAFQAFAFACAJQADAKAAAMQAAAMgDAJQgBAIgFAGQgEAGgHACQgFACgKAAIgIAAIgJgBIAAAngAgRAPIANAAQAFAAAEgCQAEgBAEgEIAEgKQABgGAAgKQAAgKgBgGIgEgLQgEgEgEgBQgEgCgFAAIgNAAg");
	this.shape_13.setTransform(121.675,88.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgPA+QgHgDgGgHQgFgIgCgMQgDgNAAgTQAAgSADgNQACgMAFgIQAGgHAHgDQAIgEAHAAQAIAAAJAEQAHADAFAHQAFAHADANQACAOAAARQAAASgCAOQgDANgFAHQgFAHgHADQgJAEgIAAQgHAAgIgEgAgHgzQgFACgDAGQgCAFgDAMQgCAKAAAQQAAARACAKQADAMACAFQADAGAFACQAEADADAAQAEAAAFgDQAEgCADgGQADgHACgKQACgKAAgRQAAgQgCgKQgCgKgDgHQgDgGgEgCQgFgDgEAAQgDAAgEADg");
	this.shape_14.setTransform(111.925,88.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcBAIAAh/IA5AAIAAANIgpAAIAAByg");
	this.shape_15.setTransform(104.025,88.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAjCbIAAikIgCAAIhBCkIgqAAIAAj0IAoAAIAACgIACAAIBAigIArAAIAAD0gAgdh0QgMgHgJgNIASgSQAEAFAKAGQAIAFAKAAQALAAAIgFQAJgFAFgGIASASQgIANgNAHQgMAIgSAAQgQAAgNgIg");
	this.shape_16.setTransform(284.075,58.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjB6IAAijIgCAAIhBCjIgqAAIAAjzIAoAAIAACgIACAAIBAigIArAAIAADzg");
	this.shape_17.setTransform(264.125,61.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAXBzQgKgLgFgUIgJgtQgEgRgHgHQgGgGgKAAIgHAAIAABxIgqAAIAAjzIAqAAIAABnIAHAAQAGAAAGgGQAFgGAGgSIAKgjQAGgVAJgKQALgLATAAIALAAIANAEIAAATQgMAAgGAFQgFAGgDAIIgLAjQgFAVgIAJQgIAKgKADIAAACIALADQAFAEAEAEQAEAEAFAJQAEAHACALIALAtQACAJAGAEQAGAHAMAAIAAASIgGACQgHACgLAAQgUAAgLgLg");
	this.shape_18.setTransform(246.2,61.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWB4QgPgGgKgOQgKgOgGgZQgFgZAAgkQAAgjAFgZQAGgZAJgOQALgPAOgFQAPgGASAAQAOAAATACQAQACAHADIAAATIgqAAQgMAAgJAFQgIAFgHALQgGAKgEAVQgEATAAAcQAAAcAEAVQAEATAHALQAHAMAJAEQAKAFAMAAIAqAAIAAATQgHACgQADQgMACgVAAQgTAAgQgGg");
	this.shape_19.setTransform(228.525,61.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhHB8IAAjwQAPgEANgCQAOgBAUAAQAVAAAPAFQAQAFAJAKQALALAEAQQAFARAAAXQAAAZgFARQgEAQgJAMQgKALgNAEQgNAFgSAAIgdgDIAABJgAgdAaIAUAAQAJAAAHgDQAIgDAFgHQAGgJABgJQADgKAAgVQAAgTgDgKQgCgKgFgJQgFgHgIgDQgHgDgJAAIgUAAg");
	this.shape_20.setTransform(211.625,61.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggB4QgOgGgMgQQgJgOgHgZQgGgZAAgiQAAgiAGgYQAHgaAJgOQAKgNAQgIQAQgGAQAAQARAAAQAGQAPAIALANQAKAQAGAYQAFAYAAAiQAAAkgFAXQgGAYgKAPQgMAQgOAGQgPAGgSAAQgSAAgOgGgAgNhgQgHAEgGAMQgEAMgFAUQgCATAAAdQAAAeACAUQAEATAFAMQAGAMAHAEQAHAFAGAAQAHAAAHgFQAGgEAGgMQAGgNADgSQAEgTAAgfQAAgegEgSQgDgTgGgNQgGgMgGgEQgHgEgHgBQgGABgHAEg");
	this.shape_21.setTransform(192.4,61.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABMB6IgKikIgCAAIgtCHIglAAIgtiHIgCAAIgJCkIgpAAIAPjzIAtAAIA3ClIABAAIA3ilIAuAAIANDzg");
	this.shape_22.setTransform(169.45,61.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAjB6IAAijIgCAAIhBCjIgqAAIAAjzIAoAAIAACgIACAAIBAigIArAAIAADzg");
	this.shape_23.setTransform(146.175,61.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhHB8IAAjwQAPgEAMgCQAPgBATAAQAWAAAPAFQAQAFAJAKQAKALAFAQQAFAQAAAYQAAAZgFARQgEARgKALQgJALgNAEQgNAFgSAAIgVgCIgIgBIAABJgAgdAaIATAAQAKAAAHgDQAHgDAFgHQAFgHADgLQADgOAAgRQAAgQgDgNQgDgMgFgHQgFgHgHgDQgHgDgKAAIgTAAg");
	this.shape_24.setTransform(127.825,61.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAfB6IAAjXIg+AAIAADXIgpAAIAAjzICRAAIAADzg");
	this.shape_25.setTransform(108.4,61.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWB4QgPgGgKgOQgKgOgGgZQgFgZAAgkQAAgjAFgZQAGgYAJgOQALgQAOgFQAPgGASAAQAOAAATACQAQADAHACIAAAUIgqAAQgMgBgJAFQgIAFgHALQgGALgEATQgEAVAAAbQAAAcAEAVQAEATAHAMQAHALAJAEQAKAFAMAAIAqAAIAAATQgHADgQACQgMACgVAAQgTAAgQgGg");
	this.shape_26.setTransform(186.525,28.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAjB6IAAijIgCAAIhBCjIgqAAIAAj0IAoAAIAACgIACAAIA/igIAsAAIAAD0g");
	this.shape_27.setTransform(167.725,28.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhPB7IgGgCIAAgTQAHAAAFgDQAGgDAFgGQAFgIACgJQACgKABgQIAJiqICBAAIAAD0IgqAAIAAjYIguAAIgICOQAAATgFARQgEAPgGAJQgHAJgJAEQgJAEgKAAQgLAAgIgBg");
	this.shape_28.setTransform(146.375,28.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggB4QgOgGgLgPQgMgQgFgYQgFgXgBgkQABgiAFgZQAFgXAMgPQAKgOAPgIQAQgGAQAAQARAAAQAGQAPAIALAOQAKAOAGAYQAGAagBAhQABAigGAZQgGAZgKAPQgMAPgOAGQgOAGgTAAQgTAAgNgGgAgNhgQgGAEgHAMQgFANgDASQgDAXgBAaQABAaADAYQADASAFANQAHAMAGAEQAHAEAGABQAIgBAGgEQAHgEAFgMQAGgNADgSQAEgUAAgeQAAgdgEgUQgDgTgGgMQgFgLgHgFQgGgFgIAAQgGAAgHAFg");
	this.shape_29.setTransform(128.15,28.55);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(101.1,16,190.50000000000003,82.1), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvnXcMAAAgu3IfPAAMAAAAu3g");
	this.shape.setTransform(100,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,200,300), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkiCvIAAldIJFAAIAAFdg");
	mask.setTransform(54.425,17.55);

	// Слой_1
	this.instance = new lib.Анимация5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(54.8,52.25);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:22.25},28,cjs.Ease.quartOut).wait(22));

	// Символ 5
	this.instance_1 = new lib.Символ5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(62.6,8.7,1,1,0,0,0,62.6,17.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:21.2,alpha:1},28,cjs.Ease.cubicOut).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.2,125.4,48.400000000000006);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Символ4("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(64.05,42.15,1,1,0,0,0,62.6,22.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(70));

	// Слой_1
	this.instance_1 = new lib.Анимация4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(63.35,3.75);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:14,alpha:1},22,cjs.Ease.cubicOut).wait(57));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.2,126.8,69.3);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AolXNMAAAguZIRLAAMAAAAuZg");
	var mask_graphics_1 = new cjs.Graphics().p("AqIXNMAAAguZIURAAMAAAAuZg");
	var mask_graphics_2 = new cjs.Graphics().p("ArkXNMAAAguZIXJAAMAAAAuZg");
	var mask_graphics_3 = new cjs.Graphics().p("As5XNMAAAguZIZzAAMAAAAuZg");
	var mask_graphics_4 = new cjs.Graphics().p("AuJXNMAAAguZIcTAAMAAAAuZg");
	var mask_graphics_5 = new cjs.Graphics().p("AvTXNMAAAguZIenAAMAAAAuZg");
	var mask_graphics_6 = new cjs.Graphics().p("AwXXNMAAAguZMAgvAAAMAAAAuZg");
	var mask_graphics_7 = new cjs.Graphics().p("AxVXNMAAAguZMAirAAAMAAAAuZg");
	var mask_graphics_8 = new cjs.Graphics().p("AyPXNMAAAguZMAkfAAAMAAAAuZg");
	var mask_graphics_9 = new cjs.Graphics().p("AzDXNMAAAguZMAmHAAAMAAAAuZg");
	var mask_graphics_10 = new cjs.Graphics().p("AzzXNMAAAguZMAnnAAAMAAAAuZg");
	var mask_graphics_11 = new cjs.Graphics().p("A0eXNMAAAguZMAo9AAAMAAAAuZg");
	var mask_graphics_12 = new cjs.Graphics().p("A1FXNMAAAguZMAqLAAAMAAAAuZg");
	var mask_graphics_13 = new cjs.Graphics().p("A1nXNMAAAguZMArPAAAMAAAAuZg");
	var mask_graphics_14 = new cjs.Graphics().p("A2GXNMAAAguZMAsNAAAMAAAAuZg");
	var mask_graphics_15 = new cjs.Graphics().p("A2hXNMAAAguZMAtDAAAMAAAAuZg");
	var mask_graphics_16 = new cjs.Graphics().p("A25XNMAAAguZMAtzAAAMAAAAuZg");
	var mask_graphics_17 = new cjs.Graphics().p("A3OXNMAAAguZMAudAAAMAAAAuZg");
	var mask_graphics_18 = new cjs.Graphics().p("A3gXNMAAAguZMAvBAAAMAAAAuZg");
	var mask_graphics_19 = new cjs.Graphics().p("A3vXNMAAAguZMAvfAAAMAAAAuZg");
	var mask_graphics_20 = new cjs.Graphics().p("A37XNMAAAguZMAv3AAAMAAAAuZg");
	var mask_graphics_21 = new cjs.Graphics().p("A4FXNMAAAguZMAwLAAAMAAAAuZg");
	var mask_graphics_22 = new cjs.Graphics().p("A4OXNMAAAguZMAwdAAAMAAAAuZg");
	var mask_graphics_23 = new cjs.Graphics().p("A4UXNMAAAguZMAwpAAAMAAAAuZg");
	var mask_graphics_24 = new cjs.Graphics().p("A4ZXNMAAAguZMAwzAAAMAAAAuZg");
	var mask_graphics_25 = new cjs.Graphics().p("A4cXNMAAAguZMAw5AAAMAAAAuZg");
	var mask_graphics_26 = new cjs.Graphics().p("A4fXNMAAAguZMAw/AAAMAAAAuZg");
	var mask_graphics_27 = new cjs.Graphics().p("A4gXNMAAAguZMAxBAAAMAAAAuZg");
	var mask_graphics_28 = new cjs.Graphics().p("A4hXNMAAAguZMAxDAAAMAAAAuZg");
	var mask_graphics_29 = new cjs.Graphics().p("A4hXNMAAAguZMAxDAAAMAAAAuZg");
	var mask_graphics_30 = new cjs.Graphics().p("A4hXNMAAAguZMAxDAAAMAAAAuZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:5,y:85.525}).wait(1).to({graphics:mask_graphics_1,x:14.8727,y:85.5298}).wait(1).to({graphics:mask_graphics_2,x:24.0876,y:85.5343}).wait(1).to({graphics:mask_graphics_3,x:32.6671,y:85.5386}).wait(1).to({graphics:mask_graphics_4,x:40.6341,y:85.5425}).wait(1).to({graphics:mask_graphics_5,x:48.0113,y:85.5461}).wait(1).to({graphics:mask_graphics_6,x:54.8213,y:85.5494}).wait(1).to({graphics:mask_graphics_7,x:61.0867,y:85.5525}).wait(1).to({graphics:mask_graphics_8,x:66.8304,y:85.5553}).wait(1).to({graphics:mask_graphics_9,x:72.0749,y:85.5579}).wait(1).to({graphics:mask_graphics_10,x:76.843,y:85.5602}).wait(1).to({graphics:mask_graphics_11,x:81.1574,y:85.5623}).wait(1).to({graphics:mask_graphics_12,x:85.0407,y:85.5642}).wait(1).to({graphics:mask_graphics_13,x:88.5156,y:85.5659}).wait(1).to({graphics:mask_graphics_14,x:91.6049,y:85.5674}).wait(1).to({graphics:mask_graphics_15,x:94.3311,y:85.5688}).wait(1).to({graphics:mask_graphics_16,x:96.7171,y:85.5699}).wait(1).to({graphics:mask_graphics_17,x:98.7854,y:85.5709}).wait(1).to({graphics:mask_graphics_18,x:100.5588,y:85.5718}).wait(1).to({graphics:mask_graphics_19,x:102.0599,y:85.5725}).wait(1).to({graphics:mask_graphics_20,x:103.3115,y:85.5731}).wait(1).to({graphics:mask_graphics_21,x:104.3362,y:85.5737}).wait(1).to({graphics:mask_graphics_22,x:105.1568,y:85.5741}).wait(1).to({graphics:mask_graphics_23,x:105.7958,y:85.5744}).wait(1).to({graphics:mask_graphics_24,x:106.276,y:85.5746}).wait(1).to({graphics:mask_graphics_25,x:106.6201,y:85.5748}).wait(1).to({graphics:mask_graphics_26,x:106.8507,y:85.5749}).wait(1).to({graphics:mask_graphics_27,x:106.9906,y:85.575}).wait(1).to({graphics:mask_graphics_28,x:107.0625,y:85.575}).wait(1).to({graphics:mask_graphics_29,x:107.089,y:85.575}).wait(1).to({graphics:mask_graphics_30,x:106.95,y:85.525}).wait(1).to({graphics:null,x:0,y:0}).wait(225));

	// Слой_1
	this.instance = new lib.Анимация1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(180.5,88);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:130.5},255,cjs.Ease.cubicOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,294.9,174.1);


(lib.Символ4копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.bank();
	this.instance.parent = this;
	this.instance.setTransform(113,-53,0.2625,0.2625);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#183570").s().p("AgFAjIAAg7IgVAAIAAgLIA0AAIAAALIgUAAIAAA7g");
	this.shape.setTransform(58.2,12.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183570").s().p("AAOAjIgdgjIAAAjIgLAAIAAhGIALAAIAAAjIAcgjIANAAIgcAjIAdAjg");
	this.shape_1.setTransform(52.7,12.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183570").s().p("AgTAjIAAhGIAnAAIAAALIgcAAIAAATIAaAAIAAAJIgaAAIAAAVIAcAAIAAAKg");
	this.shape_2.setTransform(46.5,12.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183570").s().p("AAPAjIAAg7IgeAAIAAA7IgLAAIAAhGIA1AAIAABGg");
	this.shape_3.setTransform(39.925,12.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#183570").s().p("AgSAbQgIgKAAgRQAAgKAEgIQAEgIAIgFQAHgFAKAAQALABAJAFIgEAJIgIgDQgEgCgEAAQgJABgGAGQgGAIAAALQAAANAGAHQAFAHAKgBIAIgBIAJgBIAAAJQgIADgLAAQgOABgJgKg");
	this.shape_4.setTransform(33.275,12.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#183570").s().p("AgXAbQgJgKAAgRQAAgQAJgKQAIgKAPAAQAQAAAIAKQAJAKAAAQQAAARgJAKQgIAKgQgBQgPABgIgKgAgOgTQgGAHAAAMQAAANAGAHQAEAHAKgBQALABAEgHQAGgHAAgNQAAgMgGgHQgEgGgLgBQgJABgFAGg");
	this.shape_5.setTransform(26.1,12.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#183570").s().p("AgWAjIAAhGIAUAAQAMAAAHAGQAGAGAAAKQAAALgHAFQgHAGgMAAIgIAAIAAAagAgLAAIAGAAQAIAAAEgDQAFgDAAgGQAAgHgEgCQgEgDgHAAIgIAAg");
	this.shape_6.setTransform(19.375,12.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#183570").s().p("AAPAjIAAg7IgeAAIAAA7IgLAAIAAhGIA1AAIAABGg");
	this.shape_7.setTransform(12.475,12.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#183570").s().p("AATAuIAAgkIABgUIgBAAIgjA4IgNAAIAAhGIALAAIAAAkIgBAMIAAAIIAAAAIAkg4IANAAIAABGgAgOghQgFgEAAgIIAKAAIACAFQAAABAAAAQAAABABAAQAAAAABAAQAAABAAAAIAGABQAEAAADgCQACgCAAgFIALAAQAAAIgFAEQgGAEgKAAQgJAAgFgEg");
	this.shape_8.setTransform(96.15,0.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#183570").s().p("AATAkIAAgkIABgUIgBAAIgjA4IgNAAIAAhHIALAAIAAAkIgBAMIAAAIIAAAAIAkg4IANAAIAABHg");
	this.shape_9.setTransform(88.35,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#183570").s().p("AAOAkIgcgkIAAAkIgMAAIAAhHIAMAAIAAAjIAbgjIANAAIgcAjIAdAkg");
	this.shape_10.setTransform(81.7,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#183570").s().p("AgSAbQgIgJAAgSQAAgKAEgIQAEgIAIgFQAHgEAKAAQALAAAJAEIgEAKIgIgDQgEgBgEgBQgJAAgGAIQgGAHAAALQAAANAGAHQAFAGAKABIAIgBIAJgCIAAAKQgIACgLAAQgOAAgJgJg");
	this.shape_11.setTransform(75.025,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#183570").s().p("AgFAkIAAg9IgUAAIAAgKIA0AAIAAAKIgVAAIAAA9g");
	this.shape_12.setTransform(68.95,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#183570").s().p("AAQAkIAAghIgfAAIAAAhIgMAAIAAhHIAMAAIAAAdIAfAAIAAgdIAMAAIAABHg");
	this.shape_13.setTransform(62.475,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#183570").s().p("AAUAkIgHgUIgaAAIgHAUIgMAAIAbhHIALAAIAbBHgAAKAGIgGgTIgCgFIgCgHIgDAOIgGARIATAAg");
	this.shape_14.setTransform(55.475,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#183570").s().p("AAYAtIAAgTIgvAAIAAATIgLAAIAAgdIAGAAQAHgNAFgPQAEgQACgQIAkAAIAAA8IAJAAIAAAdgAgGgIQgEANgGALIAeAAIAAgyIgOAAQgBALgFAPg");
	this.shape_15.setTransform(48.55,2.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#183570").s().p("AAQAkIAAghIgfAAIAAAhIgMAAIAAhHIAMAAIAAAdIAfAAIAAgdIAMAAIAABHg");
	this.shape_16.setTransform(41.325,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#183570").s().p("AgTAkIAAhHIAnAAIAAAKIgbAAIAAAUIAZAAIAAAIIgZAAIAAAXIAbAAIAAAKg");
	this.shape_17.setTransform(35.05,1.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#183570").s().p("AAZAkIAAgjIABgNIAAgLIAAAAIgWA7IgJAAIgUg7IgBAAIABAYIAAAjIgKAAIAAhHIAQAAIATA4IAUg4IAQAAIAABHg");
	this.shape_18.setTransform(27.525,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#183570").s().p("AgYAbQgIgJAAgSQAAgRAIgJQAJgJAPAAQAQAAAJAJQAIAJAAARQAAASgIAJQgJAJgQAAQgPAAgJgJgAgPgSQgFAGAAAMQAAANAFAHQAGAGAJABQAKgBAGgGQAFgHAAgNQAAgMgFgGQgGgIgKAAQgJAAgGAIg");
	this.shape_19.setTransform(19.05,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#183570").s().p("AANAkIgcgkIAAAkIgLAAIAAhHIALAAIAAAjIAcgjIANAAIgcAjIAdAkg");
	this.shape_20.setTransform(12.45,1.3);

	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.15,-30.55,0.6944,0.6944,0,0,0,0.5,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#183570").s().p("AgPAnIgBAAIgRAAIAAAAQgGgFgDgIIgEgNIgBgIQAAgHADgGQAEgNAHgGQAIgJAHgCIADAAIAPA2IARg2IABAAIAKAFQAMAIAGARQACADAAAFIAAAHQAAAHgCALIgGAKIgFAEIgTAAIACgCQAJgFAFgHQAGgIABgJIAAgFQABgJgFgJQgDgGgDgCIgEgCIgFAAIgUA/IgSg9QAAAAgBgBQAAAAAAAAQAAgBAAAAQgBAAAAAAIgCAAIgEAAQgEACgBAFQgEAGgCAHIgBAFQAAAJAFAKQADAHAKAIIAHAFIABAAg");
	this.shape_21.setTransform(1.5875,1.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.instance_1},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4копия2, new cjs.Rectangle(-3.2,-53.9,168.7,75.2), null);


(lib.sprite36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.shape35("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(15.15,13.15,0.3106,0.3106);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.7415,scaleY:0.7415,alpha:1},12).to({scaleX:1,scaleY:1,y:13.1},4).to({scaleX:0.2244,scaleY:0.2244,alpha:0},16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,5.5,17.6,15.3);


(lib.sprite37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sprite36("synched",0,false);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,5.5,17.6,15.3);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_20
	this.instance = new lib.sprite37("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-10,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(84).to({_off:false},0).to({_off:true},38).wait(21));

	// Слой_19
	this.instance_1 = new lib.sprite37("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(16.9,-7.65);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90).to({_off:false},0).to({_off:true},35).wait(18));

	// Слой_18
	this.instance_2 = new lib.sprite37("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(135.65,-2.15);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(72).to({_off:false},0).to({_off:true},40).wait(31));

	// Слой_17
	this.instance_3 = new lib.sprite37("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(118.85,0.05);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(80).to({_off:false},0).to({_off:true},38).wait(25));

	// Слой_16
	this.instance_4 = new lib.sprite37("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(53.15,-7.95);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(68).to({_off:false},0).to({_off:true},41).wait(34));

	// Слой_15
	this.instance_5 = new lib.sprite37("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1.9,6.15);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(64).to({_off:false},0).to({_off:true},40).wait(39));

	// Слой_14
	this.instance_6 = new lib.sprite37("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(63.65,6.15);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(56).to({_off:false},0).to({_off:true},39).wait(48));

	// Слой_13
	this.instance_7 = new lib.sprite37("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(31,4.65);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(62).to({_off:false},0).to({_off:true},39).wait(42));

	// Слой_12
	this.instance_8 = new lib.sprite37("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(135.65,-2.15);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).to({_off:true},41).wait(58));

	// Слой_11
	this.instance_9 = new lib.sprite37("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(103.95,-5.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(52).to({_off:false},0).to({_off:true},36).wait(55));

	// Слой_10
	this.instance_10 = new lib.sprite37("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(83.15,4.65);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40).to({_off:false},0).to({_off:true},34).wait(69));

	// Слой_9
	this.instance_11 = new lib.sprite37("synched",0,false);
	this.instance_11.parent = this;
	this.instance_11.setTransform(50.9,2.65);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(36).to({_off:false},0).to({_off:true},39).wait(68));

	// Слой_8
	this.instance_12 = new lib.sprite37("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,9.35);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(26).to({_off:false},0).to({_off:true},46).wait(71));

	// Слой_7
	this.instance_13 = new lib.sprite37("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(29.9,-7.65);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(32).to({_off:false},0).to({_off:true},40).wait(71));

	// Слой_6
	this.instance_14 = new lib.sprite37("synched",0,false);
	this.instance_14.parent = this;
	this.instance_14.setTransform(135.65,-2.15);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(14).to({_off:false},0).to({_off:true},41).wait(88));

	// Слой_5
	this.instance_15 = new lib.sprite37("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(106.65,7.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(22).to({_off:false},0).to({_off:true},40).wait(81));

	// Слой_4
	this.instance_16 = new lib.sprite37("synched",0,false);
	this.instance_16.parent = this;
	this.instance_16.setTransform(53.15,-7.95);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({_off:false},0).to({_off:true},42).wait(91));

	// Слой_3
	this.instance_17 = new lib.sprite37("synched",0,false);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-11.1,-7.95);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).to({_off:true},38).wait(99));

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKMBfIgPhRQgHghgCgYIgBAAQgGAjgFAWIgSBRIgvAAIgti8IAuAAIAaCPIAAAAIANhBIAPhOIAuAAIAPBQQAFAcAFAiIABAAIAKhAIAQhOIArAAIgwC8gAFzBfIAAi8IB1AAIAAAkIhJAAIAAAmIBFAAIAAAiIhFAAIAAAtIBNAAIAAAjgAEiBfIgohIQgVgkgMgeIgBAAQACAmgBArIAAA5IgmAAIAAi8IAxAAIAoBGQARAeANAhIABAAQgEggABguIAAg3IAmAAIAAC8gAgCBfIAAhNIg8hvIAxAAIAhBSIAAAAIAihSIAwAAIg/BtIAABPgAjQBfIAAi5QAXgEAiAAQAnAAAUAPQATAQABAcQAAAcgSAPQgVAVgoAAIgPgBIAABDgAimg8IAAA4IAPABQAQAAALgJQAJgIAAgOQAAgcghAAQgMAAgGACgAlyBfIAAi5QAWgEAjAAQAnAAATAPQAUAQAAAcQAAAcgRAPQgWAVgnAAIgQgBIAABDgAlJg8IAAA4IAPABQARAAAKgJQAJgIAAgOQABgcgiAAQgLAAgHACgAm5BfIgPgwIg2AAIgNAwIgsAAIA5i8IA4AAIA7C8gAnOAOIgWhLIAAAAIgUBLIAqAAgAp6BfIAAhPIhFAAIAABPIgrAAIAAi8IArAAIAABJIBFAAIAAhJIArAAIAAC8g");
	mask.setTransform(78.7,13.5);

	// Слой_2
	this.instance_18 = new lib.Анимация6("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(75,92.5);

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({y:43},50,cjs.Ease.cubicOut).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-2.4,164.29999999999998,32.5);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Анимация8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(64.7,53.55);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({alpha:1},18).wait(108));

	// START!*
	this.instance_1 = new lib.Анимация7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(64.8,35.7,1.8891,1.8891,0,0,0,0.1,0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1,x:64.6,y:35.5,alpha:1},19,cjs.Ease.cubicOut).wait(123));

	// Символ 7
	this.instance_2 = new lib.Символ7("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(64.65,11,1,1,0,0,0,78,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(152));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.6,-7.4,190.1,73.10000000000001);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(393).to({_off:false},0).to({alpha:1},17).wait(1));

	// Слой_10
	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(99.45,170.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(293).to({_off:false},0).to({alpha:1},11).wait(107));

	// Слой_9
	this.instance_2 = new lib.Symbol6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(99.8,317.6,0.7602,0.7602,0,0,0,0.1,-9.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(285).to({_off:false},0).to({y:277.6},10,cjs.Ease.cubicOut).wait(116));

	// lgoo
	this.instance_3 = new lib.Символ4копия2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(100.9,45.7,1.0184,1.0184,0,0,0,82.2,-15.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(277).to({_off:false},0).to({alpha:1},12).wait(122));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(261).to({_off:false},0).to({alpha:1},22,cjs.Ease.cubicInOut).wait(128));

	// bg
	this.instance_5 = new lib.bg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0},25,cjs.Ease.cubicInOut).to({_off:true},1).wait(385));

	// logo
	this.instance_6 = new lib.ClipGroup();
	this.instance_6.parent = this;
	this.instance_6.setTransform(100,24.65,0.3488,0.3488,0,0,0,146.1,49.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfB6IAAjYIg+AAIAADYIgpAAIAAj0ICRAAIAAD0g");
	this.shape.setTransform(86.8633,17.3591,0.3488,0.3488);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAhIAAhBIA7AAIAABBg");
	this.shape_1.setTransform(70.6514,37.0245,0.3488,0.3488);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAlIAAhIIAfAAIAABIg");
	this.shape_2.setTransform(71.2095,30.7717,0.3488,0.3488);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAiIAAhCIBBAAIAABCg");
	this.shape_3.setTransform(71.5845,24.4404,0.3488,0.3488);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQATIAAgkIAhAAIAAAkg");
	this.shape_4.setTransform(71.8287,19.051,0.3488,0.3488);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAWIAAgrIBFAAIAAArg");
	this.shape_5.setTransform(72.2822,14.0191,0.3488,0.3488);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAdIAAg5IA7AAIAAA5g");
	this.shape_6.setTransform(63.4829,23.9956,0.3488,0.3488);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgOARIAAgiIAdAAIAAAig");
	this.shape_7.setTransform(63.5265,19.1382,0.3488,0.3488);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWARIAAghIAtAAIAAAhg");
	this.shape_8.setTransform(63.6486,14.4028,0.3488,0.3488);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAZIAAgxIAzAAIAAAxg");
	this.shape_9.setTransform(55.9656,37.5041,0.3488,0.3488);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAoIAAhPIApAAIAABPg");
	this.shape_10.setTransform(55.9569,31.199,0.3488,0.3488);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAoIAAhPIBNAAIAABPg");
	this.shape_11.setTransform(55.5208,25.2427,0.3488,0.3488);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAWIAAgrIApAAIAAArg");
	this.shape_12.setTransform(55.1109,20.019,0.3488,0.3488);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAUIAAgnIA1AAIAAAng");
	this.shape_13.setTransform(54.9452,15.3272,0.3488,0.3488);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhaG0IhNtnIFPA1IAAMygAhAGXIDMAAIAAr8IkUgsg");
	this.shape_14.setTransform(54.9104,26.3154,0.3488,0.3488);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AinHlIAAt0IFPhVIhFPJgAiKl5IAANCIDSAAIBBuIg");
	this.shape_15.setTransform(71.8548,24.5887,0.3488,0.3488);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiTEmIgjn6IFuhRIgjJLgAiYi+IAfHIIDzAAIAfoLg");
	this.shape_16.setTransform(63.387,17.6556,0.3488,0.3488);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_6}]}).to({state:[]},284).wait(127));

	// t2
	this.instance_7 = new lib.Символ6("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(99.55,249.55,1,1,0,0,0,64.3,13.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(135).to({_off:false},0).wait(276));

	// t1
	this.instance_8 = new lib.Символ3("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(99.9,245.4,1,1,0,0,0,63.4,14);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(25).to({_off:false},0).wait(97).to({startPosition:73},0).to({alpha:0},15).to({_off:true},1).wait(273));

	// pic
	this.instance_9 = new lib.Символ2("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(69.5,138.5,1,1,0,0,0,130.5,88);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({_off:true},275).wait(127));

	// blue
	this.instance_10 = new lib.Символ1("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(100.05,150,1.3733,1.3733,0,0,0,100,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,x:100},72,cjs.Ease.quadInOut).to({_off:true},212).wait(127));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(411));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-56,298.4,412);


// stage content:
(lib._200x300 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(62.7,94,174.7,262);
// library properties:
lib.properties = {
	id: '0DA85D765483451782C6CB3230505573',
	width: 200,
	height: 300,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"200x300_atlas_P_.png", id:"200x300_atlas_P_"},
		{src:"200x300_atlas_NP_.jpg", id:"200x300_atlas_NP_"}
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