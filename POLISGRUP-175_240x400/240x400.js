(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"240x400_atlas_P_", frames: [[201,0,199,212],[0,0,199,223],[201,214,199,155]]},
		{name:"240x400_atlas_NP_", frames: [[0,0,401,500]]}
];


// symbols:



(lib._300500 = function() {
	this.initialize(ss["240x400_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение1 = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение3 = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Растровоеизображение4 = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(2);
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


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Растровоеизображение4();
	this.instance.parent = this;
	this.instance.setTransform(2,819);

	this.instance_1 = new lib.Растровоеизображение3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(2,412);

	this.instance_2 = new lib.Растровоеизображение1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(2,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,2,203.2,986.8);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPBVIAAhGIhEAAIAAgdIBEAAIAAhHIAeAAIAABHIBFAAIAAAdIhFAAIAABGg");
	this.shape.setTransform(39.625,39.35);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBBIAAiBIAmAAQAXAAAMAKQAMAKAAAUQAAAUgNAKQgOAKgXAAIgOAAIAAAxgAgVAAIAMAAQAPAAAIgGQAHgGAAgMQAAgLgHgFQgGgGgOAAIgPAAg");
	this.shape_1.setTransform(226.975,53.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAkQgLgMAAgYQAAgOAFgLQAGgLAKgGQAKgGANAAQAPAAAMAGIgFANIgKgEQgGgCgGAAQgMAAgIAKQgIAJAAAQQAAASAIAJQAHAJANAAIAMgBIAMgEIAAAOQgLAEgPAAQgUAAgLgNg");
	this.shape_2.setTransform(259.225,21.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAkQgMgNAAgXQAAgXAMgNQAMgNAUABQAWgBALANQAMANAAAXQAAAXgMANQgLANgWABQgVgBgLgNgAgUgaQgHAKAAAQQAAARAHAKQAHAJANAAQAOAAAHgJQAHgJAAgSQAAgQgHgKQgHgJgOAAQgNAAgHAJg");
	this.shape_3.setTransform(250.225,21.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWAwIAAgrIgrAAIAAArIgQAAIAAhfIAQAAIAAAnIArAAIAAgnIAQAAIAABfg");
	this.shape_4.setTransform(240.575,21.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAsIAAgOQAGADAIACIAPABQAYAAAAgQQAAgIgHgEQgJgEgNAAIgLAAIAAgLIAKAAQAcAAgBgPQABgHgFgDQgFgEgIAAQgHAAgGACQgHACgGAEIgHgKQAPgKATAAQAOAAAJAGQAKAHgBAKQAAAKgGAGQgGAGgLABIAAABQANABAGAFQAHAGAAAKQAAANgLAIQgKAHgRAAQgUAAgLgFg");
	this.shape_5.setTransform(232.1,21.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiAwIAAhfIAdAAQATAAAIAGQAJAGAAAMQABAIgFAGQgEAFgIACIAAABQAKABAEAFQAGAGAAAJQgBANgIAHQgJAIgRAAgAgRAjIAQAAQAJAAAFgEQAFgEAAgIQAAgIgGgDQgEgEgKAAIgPAAgAgRgHIAPAAQAIAAAEgEQAFgDAAgHQAAgHgFgDQgEgDgKAAIgNAAg");
	this.shape_6.setTransform(224.5,21.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaA+IAAgxIABgaIAAAAIgwBLIgTAAIAAheIAPAAIAAAwIgBARIAAAKIAAAAIAwhLIATAAIAABegAgTgtQgGgFgBgMIAOAAQAAAFACACQABADADACIAHABQAGAAAEgDQADgDABgHIAOAAQgBALgHAGQgHAFgOAAQgMAAgHgFg");
	this.shape_7.setTransform(212.425,20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeAwIAAhfIARAAIAABfgAgtAwIAAhfIAPAAIAAAnIAMAAQASAAAIAHQAJAGAAAOQAAAOgJAHQgIAIgSAAgAgeAjIALAAQAKAAAGgEQAEgEABgIQgBgIgEgDQgFgEgNAAIgJAAg");
	this.shape_8.setTransform(201.9,21.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AghAwIAAhfIAcAAQATAAAJAGQAJAGAAAMQgBAIgEAGQgEAFgJACIAAABQALABAFAFQAEAGAAAJQABANgKAHQgIAIgRAAgAgSAjIARAAQAJAAAFgEQAFgEAAgIQAAgIgFgDQgGgEgJAAIgQAAgAgSgHIAPAAQAJAAAFgEQAEgDAAgHQAAgHgEgDQgGgDgJAAIgOAAg");
	this.shape_9.setTransform(192.5,21.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAwIAAhfIAcAAQARAAAJAHQAJAIAAAOQAAAPgKAHQgKAIgRAAIgKAAIAAAkgAgPAAIAIAAQALAAAGgEQAGgFAAgJQAAgIgFgEQgFgEgKAAIgLAAg");
	this.shape_10.setTransform(184.675,21.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAwIAAhfIA1AAIAAANIglAAIAAAaIAjAAIAAAMIgjAAIAAAeIAlAAIAAAOg");
	this.shape_11.setTransform(177.425,21.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVAwIAAhSIgpAAIAABSIgQAAIAAhfIBJAAIAABfg");
	this.shape_12.setTransform(169.2,21.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag8BWQgUgdAAg4QAAg8AUgbQAUgcAoAAQAoAAAVAcQAUAdAAA6QAAA7gUAcQgUAbgpAAQgnAAgVgdgAgPgzQgFAOAAAmQAAAlAFAPQAFAOAKAAQALAAAFgPQAFgPAAgkQAAglgFgPQgFgPgLAAQgKAAgFAPg");
	this.shape_13.setTransform(208.625,50.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag8BWQgUgdAAg4QAAg8AUgbQAUgcAoAAQAoAAAVAcQAUAdAAA6QAAA7gUAcQgUAbgpAAQgnAAgVgdgAgPgzQgFAOAAAmQAAAlAFAPQAFAOAKAAQALAAAFgPQAFgPAAgkQAAglgFgPQgFgPgLAAQgKAAgFAPg");
	this.shape_14.setTransform(190.175,50.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag8BWQgUgdAAg4QAAg8AUgbQAUgcAoAAQAoAAAVAcQAUAdAAA6QAAA7gUAcQgUAbgpAAQgnAAgVgdgAgPgzQgFAOAAAmQAAAlAFAPQAFAOAKAAQALAAAFgPQAFgPAAgkQAAglgFgPQgFgPgLAAQgKAAgFAPg");
	this.shape_15.setTransform(171.725,50.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiXDHIAAhhQAaAMAhAIQAhAIAYAAQAhAAAQgOQASgOAAgcQAAgZgSgOQgRgOglAAQgcAAggAKIgsgWIARjnID6AAIAABjIiVAAIgGA6IAhgFIASAAQAmAAAfARQAeASASAgQAQAfAAArQAABJgsAoQgsAnhZAAQhOAAgwgYg");
	this.shape_16.setTransform(140.625,39.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiXDHIAAhhQAaAMAhAIQAhAIAYAAQAhAAAQgOQASgOAAgcQAAgZgSgOQgRgOglAAQgcAAggAKIgsgWIARjnID6AAIAABjIiVAAIgGA6IAhgFIASAAQAmAAAfARQAeASASAgQAQAfAAArQAABJgsAoQgsAnhZAAQhOAAgwgYg");
	this.shape_17.setTransform(104.475,39.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AiXDHIAAhhQAaAMAhAIQAhAIAYAAQAhAAAQgOQASgOAAgcQAAgZgSgOQgRgOglAAQgcAAggAKIgsgWIARjnID6AAIAABjIiVAAIgGA6IAhgFIASAAQAmAAAfARQAeASASAgQAQAfAAArQAABJgsAoQgsAnhZAAQhOAAgwgYg");
	this.shape_18.setTransform(68.325,39.875);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnAKIAAgTIBPAAIAAATg");
	this.shape_19.setTransform(225.45,57.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Слой_1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#23537D").s().p("AZDF+MguYAAAIj/r7MAypAAAIAAL7g");
	this.shape_20.setTransform(162.1,38.15);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-5.7,324.2,86.7);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AF8JdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_1 = new cjs.Graphics().p("AEKJdIl7y5MA3sAAAIAAS5g");
	var mask_graphics_2 = new cjs.Graphics().p("ACdJdIl7y5MA3sAAAIAAS5g");
	var mask_graphics_3 = new cjs.Graphics().p("AA2JdIl7y5MA3rAAAIAAS5g");
	var mask_graphics_4 = new cjs.Graphics().p("AgtJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_5 = new cjs.Graphics().p("AiLJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_6 = new cjs.Graphics().p("AjlJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_7 = new cjs.Graphics().p("Ak7JdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_8 = new cjs.Graphics().p("AmNJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_9 = new cjs.Graphics().p("AnaJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_10 = new cjs.Graphics().p("AojJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_11 = new cjs.Graphics().p("ApoJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_12 = new cjs.Graphics().p("AqqJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_13 = new cjs.Graphics().p("ArnJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_14 = new cjs.Graphics().p("AshJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_15 = new cjs.Graphics().p("AtYJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_16 = new cjs.Graphics().p("AuLJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_17 = new cjs.Graphics().p("Au7JdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_18 = new cjs.Graphics().p("AvnJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_19 = new cjs.Graphics().p("AwRJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_20 = new cjs.Graphics().p("Aw3JdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_21 = new cjs.Graphics().p("AxbJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_22 = new cjs.Graphics().p("Ax8JdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_23 = new cjs.Graphics().p("AyaJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_24 = new cjs.Graphics().p("Ay2JdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_25 = new cjs.Graphics().p("AzQJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_26 = new cjs.Graphics().p("AznJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_27 = new cjs.Graphics().p("Az8JdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_28 = new cjs.Graphics().p("A0OJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_29 = new cjs.Graphics().p("A0fJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_30 = new cjs.Graphics().p("A0uJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_31 = new cjs.Graphics().p("A07JdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_32 = new cjs.Graphics().p("A1HJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_33 = new cjs.Graphics().p("A1RJdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_34 = new cjs.Graphics().p("A1aJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_35 = new cjs.Graphics().p("A1hJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_36 = new cjs.Graphics().p("A1nJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_37 = new cjs.Graphics().p("A1sJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_38 = new cjs.Graphics().p("A1wJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_39 = new cjs.Graphics().p("A1zJdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_40 = new cjs.Graphics().p("A11JdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_41 = new cjs.Graphics().p("A13JdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_42 = new cjs.Graphics().p("A14JdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_43 = new cjs.Graphics().p("A15JdIl8y5MA3sAAAIAAS5g");
	var mask_graphics_44 = new cjs.Graphics().p("A15JdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_45 = new cjs.Graphics().p("A15JdIl8y5MA3rAAAIAAS5g");
	var mask_graphics_46 = new cjs.Graphics().p("A15JdIl8y5MA3rAAAIAAS5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:356.45,y:60.5}).wait(1).to({graphics:mask_graphics_1,x:345.0775,y:60.5}).wait(1).to({graphics:mask_graphics_2,x:334.1993,y:60.5}).wait(1).to({graphics:mask_graphics_3,x:323.8046,y:60.5}).wait(1).to({graphics:mask_graphics_4,x:313.8823,y:60.5}).wait(1).to({graphics:mask_graphics_5,x:304.4213,y:60.5}).wait(1).to({graphics:mask_graphics_6,x:295.4108,y:60.5}).wait(1).to({graphics:mask_graphics_7,x:286.8398,y:60.5}).wait(1).to({graphics:mask_graphics_8,x:278.6972,y:60.5}).wait(1).to({graphics:mask_graphics_9,x:270.9721,y:60.5}).wait(1).to({graphics:mask_graphics_10,x:263.6535,y:60.5}).wait(1).to({graphics:mask_graphics_11,x:256.7304,y:60.5}).wait(1).to({graphics:mask_graphics_12,x:250.1918,y:60.5}).wait(1).to({graphics:mask_graphics_13,x:244.0267,y:60.5}).wait(1).to({graphics:mask_graphics_14,x:238.2242,y:60.5}).wait(1).to({graphics:mask_graphics_15,x:232.7732,y:60.5}).wait(1).to({graphics:mask_graphics_16,x:227.6628,y:60.5}).wait(1).to({graphics:mask_graphics_17,x:222.882,y:60.5}).wait(1).to({graphics:mask_graphics_18,x:218.4197,y:60.5}).wait(1).to({graphics:mask_graphics_19,x:214.2651,y:60.5}).wait(1).to({graphics:mask_graphics_20,x:210.4072,y:60.5}).wait(1).to({graphics:mask_graphics_21,x:206.8348,y:60.5}).wait(1).to({graphics:mask_graphics_22,x:203.5371,y:60.5}).wait(1).to({graphics:mask_graphics_23,x:200.5031,y:60.5}).wait(1).to({graphics:mask_graphics_24,x:197.7218,y:60.5}).wait(1).to({graphics:mask_graphics_25,x:195.1822,y:60.5}).wait(1).to({graphics:mask_graphics_26,x:192.8732,y:60.5}).wait(1).to({graphics:mask_graphics_27,x:190.784,y:60.5}).wait(1).to({graphics:mask_graphics_28,x:188.9036,y:60.5}).wait(1).to({graphics:mask_graphics_29,x:187.2208,y:60.5}).wait(1).to({graphics:mask_graphics_30,x:185.7249,y:60.5}).wait(1).to({graphics:mask_graphics_31,x:184.4047,y:60.5}).wait(1).to({graphics:mask_graphics_32,x:183.2493,y:60.5}).wait(1).to({graphics:mask_graphics_33,x:182.2478,y:60.5}).wait(1).to({graphics:mask_graphics_34,x:181.389,y:60.5}).wait(1).to({graphics:mask_graphics_35,x:180.6621,y:60.5}).wait(1).to({graphics:mask_graphics_36,x:180.056,y:60.5}).wait(1).to({graphics:mask_graphics_37,x:179.5598,y:60.5}).wait(1).to({graphics:mask_graphics_38,x:179.1625,y:60.5}).wait(1).to({graphics:mask_graphics_39,x:178.853,y:60.5}).wait(1).to({graphics:mask_graphics_40,x:178.6205,y:60.5}).wait(1).to({graphics:mask_graphics_41,x:178.4539,y:60.5}).wait(1).to({graphics:mask_graphics_42,x:178.3422,y:60.5}).wait(1).to({graphics:mask_graphics_43,x:178.2744,y:60.5}).wait(1).to({graphics:mask_graphics_44,x:178.2397,y:60.5}).wait(1).to({graphics:mask_graphics_45,x:178.2268,y:60.5}).wait(1).to({graphics:mask_graphics_46,x:178.225,y:60.5}).wait(28));

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPARQgHgHAAgKQAAgLAHgFQAFgGAKAAQALAAAGAGQAGAGgBAKQABAKgGAHQgGAGgLAAQgKAAgFgGg");
	this.shape.setTransform(279.2,104.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BUQgagdAAg3QAAghANgaQAMgaAYgOQAYgOAfAAQAiAAAdAPIgNAeIgYgJQgMgFgOAAQgeAAgSAXQgSAWAAAmQAAAoARAVQARAVAgAAQAOAAANgDIAcgHIAAAfQgaAKghAAQgwAAgageg");
	this.shape_1.setTransform(265.575,94.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BvIAAjdIB8AAIAAAfIhYAAIAAA8IBSAAIAAAeIhSAAIAABFIBYAAIAAAfg");
	this.shape_2.setTransform(247.25,94.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABPBvIAAhuIABgqIACggIgCAAIhDC4IgeAAIhAi4IgCAAQADApAAAjIAABsIghAAIAAjdIAzAAIA+CwIAAAAIA/iwIAzAAIAADdg");
	this.shape_3.setTransform(223.85,94.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BvIBSjdIAhAAIhRDdg");
	this.shape_4.setTransform(203.525,94.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhIBvIAAjdIBAAAQAoABAVAQQAUARAAAiQAAAigWASQgXASgpAAIgXAAIAABTgAgkgCIATAAQAbABANgLQANgJAAgUQAAgUgMgJQgLgKgYABIgZAAg");
	this.shape_5.setTransform(188.725,94.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiUDbQgzhJABiSQAAiWAwhIQAxhHBlAAQBiAAA0BLQAxBLAACPQABCWgxBIQgxBIhmAAQhiAAgyhLgAg9iWQgRAvgBBnQABBqARAtQASAuArAAQAqgBATgtQASgvABhoQgBhngSgvQgUgtgpgBQgqABgTAtg");
	this.shape_6.setTransform(295.15,46.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiUDbQgyhJAAiSQgBiWAxhIQAxhHBlAAQBjAAAyBLQAzBLAACPQAACWgxBIQgyBIhlAAQhiAAgyhLgAg8iWQgSAvAABnQAABqASAtQARAuArAAQAqgBASgtQAUgvAAhoQAAhngUgvQgSgtgqgBQgqABgSAtg");
	this.shape_7.setTransform(249.5,46.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai+EDIAAhpQAfARApAKQApAKAkAAQBuAAAAhbQABhWhyAAIguAEIgpAJIgvgaIAVkhIE1AAIAABlIjLAAIgLBxIAOgDQAYgGAiABQBSAAAyAuQAxAuAABQQAABgg7AzQg7A0htAAQhgAAg6geg");
	this.shape_8.setTransform(204.05,46.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjGGdIE1qmImXAAIAAiTIJRAAIAABtIk4LMg");
	this.shape_9.setTransform(141.7,60.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeGeIAAneIAChOIADhXIg8A6IhfBMIhUhqIEJjUICQAAIAAM7g");
	this.shape_10.setTransform(70.175,60.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhBAPIAAgdICDAAIAAAdg");
	this.shape_11.setTransform(185.275,101.25);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(74));

	// Слой_1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#826452").s().p("A15JdIl8y5MA3rAAAIAAS5g");
	this.shape_12.setTransform(178.225,60.5);

	var maskedShapeInstanceList = [this.shape_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356.5,121);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGArIAAhJIgZAAIAAgMIA/AAIAAAMIgZAAIAABJg");
	this.shape.setTransform(119.525,33.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQArIgigrIAAArIgOAAIAAhVIAOAAIAAAqIAigqIAPAAIghApIAjAsg");
	this.shape_1.setTransform(112.875,33.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXArIAAhVIAvAAIAAAMIghAAIAAAXIAfAAIAAALIgfAAIAAAbIAhAAIAAAMg");
	this.shape_2.setTransform(105.375,33.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AATArIAAhJIglAAIAABJIgOAAIAAhVIBBAAIAABVg");
	this.shape_3.setTransform(97.425,33.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAhQgKgMAAgVQAAgMAEgKQAGgKAJgFQAJgGALAAQANAAAMAGIgGALIgJgDQgEgCgGAAQgLAAgHAIQgGAJgBAOQAAAQAHAIQAGAIAMAAIALgBIALgDIAAAMQgKAEgNAAQgSAAgKgLg");
	this.shape_4.setTransform(89.35,33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAhQgKgMAAgVQAAgUAKgMQALgLASAAQATAAALALQAKAMAAAUQAAAVgKAMQgLALgTAAQgSAAgLgLgAgSgXQgGAIAAAPQAAAQAGAIQAGAIAMAAQANAAAGgIQAGgIAAgQQAAgPgGgIQgGgIgNAAQgLAAgHAIg");
	this.shape_5.setTransform(80.725,33.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbArIAAhVIAYAAQAPAAAIAHQAIAGAAANQAAANgJAHQgIAHgQAAIgIAAIAAAggAgNAAIAHAAQAKAAAFgEQAFgEAAgIQAAgHgFgEQgEgDgJAAIgJAAg");
	this.shape_6.setTransform(72.625,33.725);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATArIAAhJIglAAIAABJIgOAAIAAhVIBBAAIAABVg");
	this.shape_7.setTransform(64.275,33.725);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAqBkIAAhPQAAgSACgZIgBAAIhOB6IgdAAIAAiYIAXAAIAABPIgBAZIgBARIABAAIBOh5IAdAAIAACYgAgfhJQgLgIgBgSIAXAAQAAAHADAEQACAEAFACQADACAIAAQALAAAFgEQAFgFACgKIAWAAQgCASgKAIQgLAIgXAAQgVAAgKgIg");
	this.shape_8.setTransform(247.9,14.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAqBNIAAhOQAAgTACgaIgBAAIhOB7IgdAAIAAiZIAXAAIAABPIgBAZIgBASIABAAIBOh6IAdAAIAACZg");
	this.shape_9.setTransform(230.95,16.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdBNIg+hNIAABNIgZAAIAAiZIAZAAIAABLIA9hLIAcAAIg9BKIBABPg");
	this.shape_10.setTransform(216.575,16.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnA7QgSgVAAgmQAAgXAJgRQAIgTARgJQARgKAVAAQAXAAAVAKIgJAVIgRgHQgJgCgJAAQgVAAgMAPQgNAPAAAaQAAAcAMAPQAMAPAWAAQAKAAAJgCIASgFIAAAVQgRAHgYAAQggAAgSgUg");
	this.shape_11.setTransform(202.2,16.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMBNIAAiDIgtAAIAAgWIBzAAIAAAWIgtAAIAACDg");
	this.shape_12.setTransform(188.975,16.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAjBNIAAhFIhFAAIAABFIgaAAIAAiZIAaAAIAAA/IBFAAIAAg/IAaAAIAACZg");
	this.shape_13.setTransform(174.9,16.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAsBNIgPgrIg6AAIgOArIgbAAIA5iZIAbAAIA5CZgAAXANIgPgpIgEgNIgEgOQgCANgFAPIgOAoIAsAAg");
	this.shape_14.setTransform(159.75,16.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAzBiIAAgrIhlAAIAAArIgYAAIAAhAIAMAAQAPgcAKgiQALgiADgjIBOAAIAACDIAUAAIAABAgAgOgUQgKAfgMAXIBCAAIAAhtIggAAQgDAXgJAgg");
	this.shape_15.setTransform(144.675,18.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAjBNIAAhFIhGAAIAABFIgYAAIAAiZIAYAAIAAA/IBGAAIAAg/IAZAAIAACZg");
	this.shape_16.setTransform(129.05,16.475);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgqBNIAAiZIBVAAIAAAVIg8AAIAAAqIA5AAIAAAUIg5AAIAAAwIA8AAIAAAWg");
	this.shape_17.setTransform(115.325,16.475);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AA3BNIAAhMIABgdIABgWIgBAAIguB/IgWAAIgtiAIAAAAIABA1IAABLIgWAAIAAiZIAjAAIArB5IAAAAIArh5IAkAAIAACZg");
	this.shape_18.setTransform(99.1,16.475);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag0A7QgTgVAAgmQAAglATgUQATgVAiAAQAhAAAUAVQASAUAAAlQAAAmgSAVQgUAUghAAQgiAAgTgUgAgggqQgMAPAAAbQAAAcAMAPQALAPAWAAQAVAAAMgPQAMgPAAgcQAAgbgMgPQgLgOgWAAQgWAAgLAOg");
	this.shape_19.setTransform(80.75,16.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAdBNIg+hNIAABNIgZAAIAAiZIAZAAIAABLIA9hLIAcAAIg9BKIBABPg");
	this.shape_20.setTransform(66.475,16.475);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhOBZQgngoAKg2QALg0AtgcIAIgEIAIAAIAjB/IAnh/IABAAQAxAUAQAxQAOAugWArQgGALgJAHIgtACIADgEQAlgRAJgoQAKgrgagjQgIgLgPACIgvCRIgriNIgCgCQgcgFgKAhQgLAmASAkQAMATATAPIAPAKIguABIgCgBg");
	this.shape_21.setTransform(38.6859,17.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#23537D").s().p("AOwEOIg8AAMgg0AAAIi0obMArpAAAIAAIbg");
	this.shape_22.setTransform(139.725,27);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.1,279.5,56.1);


(lib.Символ9копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#575756").s().p("AgCAQIAOgQIgOgQIACgCIATASIgTATgAgSAQIAQgQIgQgQIACgCIATASIgSATg");
	this.shape.setTransform(183.9,72.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#575756").s().p("AgCAZIAAgHQgLgBgFgEQgEgEAAgJQAAgIAEgEQAEgFAMAAIAAgHIAEAAIAAAHQAMAAAFAFQAEAEAAAIQAAAJgEAEQgFAEgMABIAAAHgAACANQAKAAAEgDQACgDAAgHQAAgGgCgDQgEgDgKgBgAgPgJQgCADAAAGQAAAHACADQAEADAJAAIAAgaQgJABgEADg");
	this.shape_1.setTransform(179.025,72.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#575756").s().p("AgRAZIAAgxIAVAAQAOAAAAAQQAAAHgDADQgDAFgIAAIgQAAIAAASgAgMACIAQAAQAEAAADgCQACgDAAgFQAAgMgJAAIgQAAg");
	this.shape_2.setTransform(174.225,72.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#575756").s().p("AgCADIgBgDIABgCIACgBIADABIABACIgBADIgDABIgCgBg");
	this.shape_3.setTransform(170.725,74.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#575756").s().p("AATAZIAAgrIgRAmIgDAAIgRgmIAAArIgFAAIAAgxIAIAAQAJAUAGARQAHgRAKgUIAHAAIAAAxg");
	this.shape_4.setTransform(166.7,72.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#575756").s().p("AgRAVQgFgGAAgPQAAgOAFgGQAGgFALAAQAMAAAFAFQAGAGAAAOQAAAPgGAGQgEAFgNAAQgLAAgGgFgAgMgRQgFAEAAANQAAANAFAEQADAFAJAAQAKAAAEgFQADgEAAgNQAAgNgDgEQgEgEgKAAQgJAAgDAEg");
	this.shape_5.setTransform(160.8,72.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#575756").s().p("AAWAfIAAgLIgrAAIAAALIgEAAIgCgQIAIAAQAHgQABgdIAdAAIAAAtIAKAAIgCAQgAgNAPIAaAAIAAgoIgTAAQgBAZgGAPg");
	this.shape_6.setTransform(155.325,72.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#575756").s().p("AAJASQgFgKgFgEQgEgDgEgBIAAASIgFAAIAAgjIAFAAIAAARIAQgRIAGAAQgNAOgCACQADABACADQAFAEAGALg");
	this.shape_7.setTransform(149.05,72.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#575756").s().p("AAKASIAAgSIgTAAIAAASIgEAAIAAgjIAEAAIAAAOIATAAIAAgOIAFAAIAAAjg");
	this.shape_8.setTransform(145.05,72.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#575756").s().p("AgLARQgDgDAAgHQAAgHAFgCQACgCAHAAIAKABQAAgHgCgCQgDgCgFAAQgGAAgFACIgBgFIAMgBQAIAAADADQAEADAAAIIAAAUQgHADgIAAQgHAAgEgCgAgGAAQgCACAAAFQAAAFACACIAGABQAGAAAEgCIAAgNIgKAAIgGAAg");
	this.shape_9.setTransform(141.05,72.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#575756").s().p("AgSAZIAAgxIAfAAIAAAEIgaAAIAAARIASAAQAIAAADADQADAEAAAHQAAAOgNAAgAgNAVIATAAQAHAAAAgKQAAgLgHAAIgTAAg");
	this.shape_10.setTransform(136.775,72.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#575756").s().p("AgCAAIASgSIADACIgPAQIAPAQIgDADgAgSAAIASgSIADACIgOAQIAOAQIgDADg");
	this.shape_11.setTransform(132,72.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#575756").s().p("AgQAVQgGgGAAgPQAAgOAGgGQAEgFAMAAQAMAAAFAFQAGAGAAAOQAAAPgGAGQgEAFgNAAQgMAAgEgFgAgMgRQgEAEAAANQAAANAEAEQADAFAJAAQAKAAADgFQAEgEAAgNQAAgNgEgEQgDgEgKAAQgJAAgDAEg");
	this.shape_12.setTransform(125.1,72.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#575756").s().p("AASAZIgHgPIgXAAIgFAPIgGAAQAKgaAJgXIAIAAQALAdAIAUgAgKAFIAUAAIgJgZIgBAAIgKAZg");
	this.shape_13.setTransform(120,72.125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#364650").s().p("AAmA/IgMggIg3AAIgJAgIgZAAQATg+Aag/IAlAAQAXBIAWA1gAATALIgSg1IgEAAIgTA1IApAAIAAAAg");
	this.shape_14.setTransform(267.275,54.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#364650").s().p("AgyA/IAAh9IBDAAQASAAAHAIQAGAHAAAPQAAAOgFAGQgFAIgQABQARABAGAHQAGAIAAAQQAAAighAAgAgaArIAnAAQAMAAAAgSQAAgSgNgBIgmAAgAgagMIAmAAQALAAAAgPQAAgPgLAAIgmAAg");
	this.shape_15.setTransform(254.775,54.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#364650").s().p("AgLA/IAAhoIgrAAIAAgVIBtAAIAAAVIgrAAIAABog");
	this.shape_16.setTransform(242.625,54.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#364650").s().p("AggA0QgPgQAAgkQAAglAPgPQANgNAfAAQATAAARAFIgFAVQgLgEgQAAQgVAAgHAHQgJAIAAAcQAAAbAJAJQAHAIAVAAQAQAAALgEIAFAVQgQAFgUAAQgfAAgNgOg");
	this.shape_17.setTransform(232.125,54.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#364650").s().p("AgyA/IAAh9IAYAAIAAAtIArAAQAiAAAAAnQAAApghAAgAgaArIAmAAQANAAAAgVQAAgUgOAAIglAAg");
	this.shape_18.setTransform(220.675,54.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#364650").s().p("AAgA/IAAhoIgnAAQgEA0gSA0IgZAAQAXhGACg3IBUAAIAAB9g");
	this.shape_19.setTransform(206.875,54.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#364650").s().p("AgtA/IAAh9IBbAAIAAAVIhDAAIAAAcIAvAAIAAAUIgvAAIAAAjIBDAAIAAAVg");
	this.shape_20.setTransform(195.775,54.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#364650").s().p("AgLA/IAAhoIgrAAIAAgVIBtAAIAAAVIgrAAIAABog");
	this.shape_21.setTransform(184.125,54.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#364650").s().p("AAfA/IAAhaQgcAygYAoIggAAIAAh9IAYAAIAABeQAgg1AWgpIAdAAIAAB9g");
	this.shape_22.setTransform(171.6,54.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#364650").s().p("AgsA0QgPgPAAglQAAglAPgPQAOgNAeAAQAgAAANANQAPAPAAAlQAAAlgPAPQgOAOgfAAQgeAAgOgOgAgagkQgIAJABAbQgBAcAIAIQAGAJAUgBQAWABAGgJQAHgIAAgcQAAgbgHgJQgGgHgWgBQgUABgGAHg");
	this.shape_23.setTransform(157.6,54.15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#364650").s().p("AgyA/IAAh9IBBAAQAkAAgBArQABARgJALQgJAMgRAAIgpAAIAAAqgAgZACIAiAAQAPAAAAgVQAAgXgPAAIgiAAg");
	this.shape_24.setTransform(145.1,54.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#364650").s().p("AgLA/IAAhoIgrAAIAAgVIBtAAIAAAVIgrAAIAABog");
	this.shape_25.setTransform(132.975,54.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#364650").s().p("AggA0QgPgQAAgkQAAglAPgPQANgNAfAAQATAAARAFIgFAVQgLgEgQAAQgVAAgHAHQgJAIAAAcQAAAbAJAJQAHAIAVAAQAQAAALgEIAFAVQgQAFgUAAQgfAAgNgOg");
	this.shape_26.setTransform(122.475,54.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#364650").s().p("AgtA/IAAh9IBbAAIAAAUIhDAAIAAAeIAvAAIAAATIgvAAIAAAkIBDAAIAAAUg");
	this.shape_27.setTransform(294.525,34.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#364650").s().p("AAfA/IAAhaQgdAzgYAnIgfAAIAAh9IAXAAIAABeQAfgxAYgtIAdAAIAAB9g");
	this.shape_28.setTransform(281.35,34.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#364650").s().p("AAbA/IAAg4Ig1AAIAAA4IgYAAIAAh9IAYAAIAAAwIA1AAIAAgwIAYAAIAAB9g");
	this.shape_29.setTransform(267.725,34.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#364650").s().p("AAmA/IgMgfIg2AAIgKAfIgaAAQAVg/AZg+IAlAAQAXBHAWA2gAATALQgKgZgIgcIgDAAIgUA1IApAAIAAAAg");
	this.shape_30.setTransform(254.95,34.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#364650").s().p("AgyA/IAAh9IBDAAQARAAAHAHQAHAHAAAQQAAAOgFAHQgFAHgQABQAQABAGAHQAHAHAAAQQAAAjghAAgAgaArIAnAAQAMAAAAgSQAAgSgNAAIgmAAgAgagMIAmAAQALAAAAgPQAAgIgDgDQgCgEgGAAIgmAAg");
	this.shape_31.setTransform(242.475,34.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#364650").s().p("AgsA0QgPgPAAglQAAgmAPgNQAIgIALgCQALgEAOAAQAQAAALAEQALACAHAIQAPANAAAmQAAASgEANQgDANgIAIQgIAHgKAEQgLADgQAAQgeAAgOgOgAgQgpQgHABgDAFQgFAEgBAIQgCAIABAPQAAATACAKQAEAJAHADQAHAEANAAQAPAAAGgEQAIgDADgJQADgKAAgTQAAgPgCgIQgBgIgEgEQgEgFgGgBQgGgCgMAAQgLAAgFACg");
	this.shape_32.setTransform(228.8,34.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#364650").s().p("AgxA/IAAh9IA3AAQAYAAALAKQAKAKgBAXQABASgKAKQgJANgQAAIgqAAIAAApgAgaABIAiAAQAQAAAAgUQAAgXgPAAIgjAAg");
	this.shape_33.setTransform(216.35,34.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#364650").s().p("AAfA/IAAhaQgcAzgZAnIgfAAIAAh9IAXAAIAABeQAfgxAZgtIAcAAIAAB9g");
	this.shape_34.setTransform(202.7,34.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#364650").s().p("AgVA8QgagMAAgwQAAgmAPgNQAIgIAKgDQAKgDAQAAQASAAASAFIgFAVQgLgEgQAAQgMAAgFACQgHABgEAEQgFAFgCAIQgCAIAAAPQAAAcAJAJQAEAEAHABQAFACAMAAQAQAAALgEIAFAVQgQAFgUAAQgUAAgNgGg");
	this.shape_35.setTransform(190.725,34.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#364650").s().p("AAbA/IAAg4Ig1AAIAAA4IgYAAIAAh9IAYAAIAAAwIA1AAIAAgwIAYAAIAAB9g");
	this.shape_36.setTransform(178.325,34.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#364650").s().p("AAmA/IgMgfIg2AAIgKAfIgZAAQAUg/Aag+IAkAAQAWBHAXA2gAATALQgJgZgJgcIgDAAIgUA1IApAAIAAAAg");
	this.shape_37.setTransform(165.55,34.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#364650").s().p("AAbA/IAAg4Ig1AAIAAA4IgYAAIAAh9IAYAAIAAAwIA1AAIAAgwIAYAAIAAB9g");
	this.shape_38.setTransform(152.675,34.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#364650").s().p("AAfA/IAAhaQgcAzgZAnIgfAAIAAh9IAYAAIAABeQAegxAZgtIAcAAIAAB9g");
	this.shape_39.setTransform(139,34.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#364650").s().p("AgMA/IAAgQQgegCgLgKQgLgLAAgYQAAgYALgLQALgKAegBIAAgQIAXAAIAAAQQAfABALALQAMALAAAXQAAAYgMALQgMAKgeACIAAAQgAALAbQATgBAFgFQAGgGAAgPQAAgPgGgFQgFgHgTAAgAgjgUQgFAGAAAOQAAAPAFAGQAGAFARABIAAg2QgSABgFAGg");
	this.shape_40.setTransform(124.725,34.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#95C11F").s().p("AgND5IAAnxIAcAAIAAHxg");
	this.shape_41.setTransform(97.45,45.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#364650").s().p("ABmD5IAAgeIh0AAIAAh1IEHAAIAAB1Ih1AAIAAAegACEC+IBYAAIAAg6IhYAAgAAPC+IBXAAIAAg6IhXAAgAj4D5IAAiTIDNAAIAAB1IiwAAIAAAegAjbC+ICTAAIAAg6IiTAAgAj4BJIAAgdIHxAAIAAAdgADcAPIAAjpIg7A6IAACvIgdAAIAAjpIg7A6IAACvIgdAAIAAi+IBJhJIAsAAIAAAsIAsgsIAsAAIAAEHgAhmAPIAAkHIB1AAIAAEHgAhIgOIA6AAIAAjMIg6AAgAj4APIAAi+IBJhJIAsAAIAAEHgAjbigIAACSIA7AAIAAjMg");
	this.shape_42.setTransform(50.075,45.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("A4rHHIAAuNMAxXAAAIAAONg");
	this.shape_43.setTransform(157,45.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0,316,91);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgiA9IAAh5IBFAAIAAAVIgrAAIAAAbIAnAAIAAAUIgnAAIAAAfIArAAIAAAWg");
	this.shape.setTransform(84.35,6.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiA9IAAh5IBFAAIAAAVIgsAAIAAAbIApAAIAAAUIgpAAIAAAfIAsAAIAAAWg");
	this.shape_1.setTransform(74.85,6.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYA9IAAg1IgvAAIAAA1IgaAAIAAh5IAaAAIAAAwIAvAAIAAgwIAaAAIAAB5g");
	this.shape_2.setTransform(63.325,6.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgqA9IAAh5IBMAAIAAAVIgyAAIAAAaIAKAAQAXAAANAJQANAJAAASQAAAmgyAAgAgQAoIAIAAQANAAAGgFQAGgEAAgIQAAgJgGgDQgHgEgOAAIgGAAg");
	this.shape_3.setTransform(51.825,6.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqAvQgPgRAAgeQAAgdAPgQQAPgRAbABQAcgBAPARQAPAQAAAdQAAAegPARQgPAQgcAAQgbAAgPgQgAgWgeQgIALAAATQAAAUAIAKQAIALAOAAQAfAAAAgpQAAgogfAAQgOAAgIAKg");
	this.shape_4.setTransform(39.275,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpA9IAAh5IAnAAQAUAAANAKQALAJAAATQAAAUgNAJQgMALgVAAIgMAAIAAArgAgQgDIAJAAQALAAAGgEQAFgFABgJQgBgJgEgEQgFgFgJAAIgNAAg");
	this.shape_5.setTransform(27.6,6.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAmBOIAAgjIhLAAIAAAjIgZAAIAAg5IAJAAQANgWAHgYQAGgZAEgcIBGAAIAABjIAQAAIAAA5gAgLgQQgHAVgHAQIAuAAIAAhNIgYAAQgCATgGAVg");
	this.shape_6.setTransform(15.275,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqAvQgPgRAAgeQAAgdAPgQQAPgRAbABQAcgBAPARQAPAQAAAdQAAAegPARQgPAQgcAAQgbAAgPgQgAgWgeQgIALAAATQAAAUAIAKQAIALAOAAQAfAAAAgpQAAgogfAAQgOAAgIAKg");
	this.shape_7.setTransform(2.175,6.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXA9IAAhjIgsAAIAABjIgaAAIAAh5IBfAAIAAB5g");
	this.shape_8.setTransform(-10.9,6.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqA9IAAh5IAaAAIAAAvIAKAAQAXAAANAJQANAJAAASQAAAmgyAAgAgQAoIAIAAQANAAAGgFQAGgEAAgIQAAgJgGgDQgHgEgOAAIgGAAg");
	this.shape_9.setTransform(-26.625,6.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMA9IAAhjIghAAIAAgWIBbAAIAAAWIghAAIAABjg");
	this.shape_10.setTransform(-37.375,6.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfA9IgJgdIgrAAIgJAdIgcAAIArh5IAfAAIArB5gAAQALIgOgsIgCgIIgPA0IAfAAg");
	this.shape_11.setTransform(-48.175,6.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAYA9IAAg1IgvAAIAAA1IgaAAIAAh5IAaAAIAAAwIAvAAIAAgwIAaAAIAAB5g");
	this.shape_12.setTransform(-60.525,6.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguA4IAAgVQAIADAKACQALACAJAAQAeABAAgTQAAgHgKgFQgJgEgTAAIgMAAIAAgTIALAAQASAAAJgEQAJgDgBgJQAAgGgEgEQgHgDgKgBQgQAAgRAKIgLgRQALgHAMgDQALgEANABQAUAAAMAIQAMAJAAANQAAAMgJAHQgIAIgOACIAAAAQARACAJAGQAIAJABAMQAAAQgOAKQgNAKgYAAQgbAAgQgHg");
	this.shape_13.setTransform(-72.55,6.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgxA7IAAgWQAHADALAAQAIAAADgDQAFgEACgHIgqhXIAcAAIAdBDIABAAIABgEIAZg/IAbAAIgmBWQgHAQgGAGQgFAIgJADQgJAEgMAAQgKAAgJgDg");
	this.shape_14.setTransform(-83.6,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D4165F").s().p("A0sDXIAAmtMApZAAAIAAGtg");
	this.shape_15.setTransform(0,6.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.4,-15.4,264.9,43);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],0,-25.4,0,25.2).s().p("Ag9D9Ig5n5IDtAAIg5H5g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-25.3,23.700000000000003,50.7);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2xHqIAAvTMAtjAAAIAAPTg");
	mask.setTransform(145.8,49.025);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#326392").s().p("AgmBAIgDgBIAAgIQAEAAADgCQACgBADgEQADgDABgGQACgIAAgHIAFhYIA8AAIAAB/IgRAAIAAhyIgbAAIgEBLQgBALgCAIQgCAHgDAFQgDAFgFACQgEADgEAAg");
	this.shape.setTransform(245.075,89.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#326392").s().p("AAaBAIgIghIgjAAIgJAhIgQAAIAfh/IAXAAIAfB/gAgPASIAeAAIgPg+IAAAAg");
	this.shape_1.setTransform(236.075,88.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#326392").s().p("AgHBAIAAhyIgdAAIAAgNIBJAAIAAANIgdAAIAAByg");
	this.shape_2.setTransform(228.225,88.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#326392").s().p("AghBBIAAh9QAHgCAGgBIAQgBQAJAAAIADQAIACAEAFQAFAGACAIQACAIAAAOQAAAOgCAHQgCAJgEAFQgDAGgIACQgFACgKAAIgJAAIgIgBIAAAngAgRAPIANAAQAEAAAFgCQAEgBAEgEQADgEABgGIABgQIgBgQQgBgHgDgEQgEgEgEgBQgFgCgEAAIgNAAg");
	this.shape_3.setTransform(219.95,88.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#326392").s().p("AAbBAIgJghIgjAAIgIAhIgRAAIAfh/IAXAAIAfB/gAgOASIAeAAIgPg+IgBAAg");
	this.shape_4.setTransform(210.375,88.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#326392").s().p("AgUBBQgIgBgHgCIAAh7QAHgCAIgBIAOgBQASAAAKAJQAIAIAAARQAAAJgDAGQgEAIgHAEIAAABQALADAEAIQAEAJAAAMQAAAIgBAJQgCAGgGAFQgFAFgIABQgJADgKAAgAgSA2IAMAAQANAAAGgGQAGgFAAgOQAAgOgGgGQgGgGgNAAIgMAAgAgSgIIALAAQAUAAABgXQgBgWgUAAIgLAAg");
	this.shape_5.setTransform(201.3,88.975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#326392").s().p("AAOA8QgFgGgDgKIgEgYQgCgJgEgEQgEgDgGAAIgHAAIAAA8IgQAAIAAh/IAQAAIAAA3IAHAAQAFAAADgEQAEgCACgKIAFgTQAFgWAQAAIAHABIADABIAAAIQgGAAgEAEQgDADgBAFIgIAcIgDAHIgFAEIgFACIAAABIAGABIAFAEIAEAGIADAKIAFAYQABAFADADQAEAEAGAAIAAAIIgDABIgIABQgIAAgFgGg");
	this.shape_6.setTransform(192.375,88.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#326392").s().p("AAUBQIAAheIgBAAIgkBeIgTAAIAAh/IARAAIAABeIABAAIAjheIATAAIAAB/gAgPg9QgFgDgFgHIAIgIQADADAEADQAFADAFAAQAHAAAEgDQAEgDADgDIAIAIQgFAHgFADQgHADgJAAQgIAAgHgDg");
	this.shape_7.setTransform(177.45,87.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#326392").s().p("AgPA+QgHgDgGgHQgFgIgCgMQgDgNAAgTQAAgSADgNQACgMAFgIQAGgHAHgDQAIgEAHAAQAIAAAJAEQAHADAFAHQAFAHADANQACAOAAARQAAASgCAOQgDANgFAHQgFAHgHADQgJAEgIAAQgHAAgIgEgAgHgzQgFACgDAGQgCAFgDAMQgCAKAAAQQAAARACAKQADAMACAFQADAGAFACQAEADADAAQAEAAAFgDQAEgCADgGQADgHACgKQACgKAAgRQAAgQgCgKQgCgKgDgHQgDgGgEgCQgFgDgEAAQgDAAgEADg");
	this.shape_8.setTransform(167.525,88.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#326392").s().p("AANA8QgFgGgBgKIgFgYQgCgKgEgDQgDgDgIAAIgGAAIAAA8IgQAAIAAh/IAQAAIAAA3IAGAAQAGAAADgEQAFgDABgJIAEgTQAGgWAQAAIAIABIACABIAAAIQgGAAgDAEQgDADgCAFIgHAcIgFAHIgDAEIgGACIAAABIAGABQADABACADIAFAGIACAKIAFAYQABAGADACQADAEAHAAIAAAIIgDABIgHABQgIAAgHgGg");
	this.shape_9.setTransform(158.8,88.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#326392").s().p("AgKA+QgHgDgFgHQgGgIgCgMQgDgNAAgTQAAgSADgNQACgMAGgIQAEgHAIgDQAIgEAHAAQAIAAAHACQAHAAAFACIAAAIIgYAAQgFAAgEADQgFACgDAGQgEAHgBAKQgCAJAAAQQAAARACAJQACAMADAFQAEAGAFACQAFADAFAAIAYAAIAAAIIgMACQgHACgJAAQgHAAgJgEg");
	this.shape_10.setTransform(149.875,88.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#326392").s().p("AAlBNQgFgJgBgSIg9AAQgBASgEAJIgLAAIAAgoIAKAAIAEgJIADgMIACgQIAEhMIA5AAIAABxIANAAIAAAogAgNAQIgCAMIgFAJIAnAAIAAhkIgaAAg");
	this.shape_11.setTransform(140.5,90.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#326392").s().p("AgQA+QgGgDgGgHQgFgHgDgNQgCgOAAgSQAAgRACgOQADgNAFgHQAGgHAGgDQAJgEAHAAQAIAAAIAEQAHADAGAHQAFAIACAMQADANAAASQAAATgDANQgCAMgFAIQgGAHgHADQgIAEgIAAQgHAAgJgEgAgIgzQgEACgDAGQgDAGgCALQgCAKAAAQQAAARACAKQACALADAGQADAGAEACQAFADADAAQAEAAAEgDQAFgCADgGQACgFADgMQACgOAAgNQAAgMgCgOQgDgMgCgFQgDgGgFgCQgEgDgEAAQgDAAgFADg");
	this.shape_12.setTransform(130.875,88.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#326392").s().p("AgiBBIAAh9IAOgDIAQgBQAIAAAJADQAIACAEAFQAFAFACAJQADAKAAAMQAAAMgDAJQgBAIgFAGQgEAGgHACQgFACgKAAIgIAAIgJgBIAAAngAgRAPIANAAQAFAAAEgCQAEgBAEgEIAEgKQABgGAAgKQAAgKgBgGIgEgLQgEgEgEgBQgEgCgFAAIgNAAg");
	this.shape_13.setTransform(121.675,88.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#326392").s().p("AgPA+QgHgDgGgHQgFgIgCgMQgDgNAAgTQAAgSADgNQACgMAFgIQAGgHAHgDQAIgEAHAAQAIAAAJAEQAHADAFAHQAFAHADANQACAOAAARQAAASgCAOQgDANgFAHQgFAHgHADQgJAEgIAAQgHAAgIgEgAgHgzQgFACgDAGQgCAFgDAMQgCAKAAAQQAAARACAKQADAMACAFQADAGAFACQAEADADAAQAEAAAFgDQAEgCADgGQADgHACgKQACgKAAgRQAAgQgCgKQgCgKgDgHQgDgGgEgCQgFgDgEAAQgDAAgEADg");
	this.shape_14.setTransform(111.925,88.975);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#326392").s().p("AgcBAIAAh/IA5AAIAAANIgpAAIAAByg");
	this.shape_15.setTransform(104.025,88.975);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#826552").s().p("AAjCbIAAikIgCAAIhBCkIgqAAIAAj0IAoAAIAACgIACAAIBAigIArAAIAAD0gAgdh0QgMgHgJgNIASgSQAEAFAKAGQAIAFAKAAQALAAAIgFQAJgFAFgGIASASQgIANgNAHQgMAIgSAAQgQAAgNgIg");
	this.shape_16.setTransform(284.075,58.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#826552").s().p("AAjB6IAAijIgCAAIhBCjIgqAAIAAjzIAoAAIAACgIACAAIBAigIArAAIAADzg");
	this.shape_17.setTransform(264.125,61.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#826552").s().p("AAXBzQgKgLgFgUIgJgtQgEgRgHgHQgGgGgKAAIgHAAIAABxIgqAAIAAjzIAqAAIAABnIAHAAQAGAAAGgGQAFgGAGgSIAKgjQAGgVAJgKQALgLATAAIALAAIANAEIAAATQgMAAgGAFQgFAGgDAIIgLAjQgFAVgIAJQgIAKgKADIAAACIALADQAFAEAEAEQAEAEAFAJQAEAHACALIALAtQACAJAGAEQAGAHAMAAIAAASIgGACQgHACgLAAQgUAAgLgLg");
	this.shape_18.setTransform(246.2,61.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#826552").s().p("AgWB4QgPgGgKgOQgKgOgGgZQgFgZAAgkQAAgjAFgZQAGgZAJgOQALgPAOgFQAPgGASAAQAOAAATACQAQACAHADIAAATIgqAAQgMAAgJAFQgIAFgHALQgGAKgEAVQgEATAAAcQAAAcAEAVQAEATAHALQAGALAKAFQAKAFAMAAIAqAAIAAATQgHACgQADQgMACgVAAQgTAAgQgGg");
	this.shape_19.setTransform(228.525,61.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#826552").s().p("AhHB8IAAjwQAPgEANgCQAOgBAUAAQAVAAAPAFQAQAFAJAKQALALAEAQQAFARAAAXQAAAZgFARQgEAQgJAMQgKALgNAEQgNAFgSAAIgdgDIAABJgAgdAaIAUAAQAJAAAHgDQAIgDAFgHQAGgJABgJQADgKAAgVQAAgTgDgKQgCgKgFgJQgFgHgIgDQgHgDgJAAIgUAAg");
	this.shape_20.setTransform(211.625,61.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#826552").s().p("AggB4QgOgGgMgQQgJgOgHgZQgGgZAAgiQAAgiAGgYQAHgaAJgOQAKgNAQgIQAQgGAQAAQARAAAQAGQAPAIALANQAKAQAGAYQAFAYAAAiQAAAkgFAXQgGAYgKAPQgMAQgOAGQgPAGgSAAQgSAAgOgGgAgNhgQgHAEgGAMQgEAMgFAUQgCATAAAdQAAAeACAUQAEATAFAMQAGAMAHAEQAHAFAGAAQAHAAAHgFQAGgEAGgMQAGgNADgSQAEgTAAgfQAAgegEgSQgDgTgGgNQgGgMgGgEQgHgEgHgBQgGABgHAEg");
	this.shape_21.setTransform(192.4,61.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#826552").s().p("ABMB6IgKikIgCAAIgtCHIglAAIgtiHIgCAAIgJCkIgpAAIAPjzIAtAAIA3ClIABAAIA3ilIAuAAIANDzg");
	this.shape_22.setTransform(169.45,61.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#826552").s().p("AAjB6IAAijIgCAAIhBCjIgqAAIAAjzIAoAAIAACgIACAAIBAigIArAAIAADzg");
	this.shape_23.setTransform(146.175,61.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#826552").s().p("AhHB8IAAjwQAPgEAMgCQAPgBATAAQAWAAAPAFQAQAFAJAKQAKALAFAQQAFAQAAAYQAAAZgFARQgEARgKALQgJALgNAEQgNAFgSAAIgVgCIgIgBIAABJgAgdAaIATAAQAKAAAHgDQAHgDAFgHQAFgHADgLQADgOAAgRQAAgQgDgNQgDgMgFgHQgFgHgHgDQgHgDgKAAIgTAAg");
	this.shape_24.setTransform(127.825,61.375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#826552").s().p("AAfB6IAAjXIg+AAIAADXIgpAAIAAjzICRAAIAADzg");
	this.shape_25.setTransform(108.4,61.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#826552").s().p("AgWB4QgPgGgKgOQgKgOgGgZQgFgZAAgkQAAgjAFgZQAGgYAJgOQALgQAOgFQAPgGASAAQAOAAATACQAQADAHACIAAAUIgqAAQgMgBgJAFQgIAFgHALQgGALgEATQgEAVAAAbQAAAcAEAVQAEATAHAMQAGAKAKAFQAKAFAMAAIAqAAIAAATQgHADgQACQgMACgVAAQgTAAgQgGg");
	this.shape_26.setTransform(186.525,28.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#826552").s().p("AAjB6IAAijIgCAAIhBCjIgqAAIAAj0IAoAAIAACgIACAAIA/igIAsAAIAAD0g");
	this.shape_27.setTransform(167.725,28.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#826552").s().p("AhPB7IgGgCIAAgTQAHAAAFgDQAGgDAFgGQAFgIACgJQACgKABgQIAJiqICBAAIAAD0IgqAAIAAjYIguAAIgICOQAAATgFARQgEAPgGAJQgHAJgJAEQgJAEgKAAQgLAAgIgBg");
	this.shape_28.setTransform(146.375,28.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#826552").s().p("AggB4QgOgGgLgPQgMgQgFgYQgFgXgBgkQABgiAFgZQAFgXAMgPQAKgOAPgIQAQgGAQAAQARAAAQAGQAPAIALAOQAKAOAGAYQAGAWgBAlQABAmgGAVQgGAZgKAPQgMAPgOAGQgOAGgTAAQgTAAgNgGgAgNhgQgHAFgFALQgGAMgDATQgDAXgBAaQABAaADAYQADATAGAMQAFAMAHAEQAHAEAGABQAIgBAGgEQAHgEAFgMQAGgNADgSQAEgUAAgeQAAgdgEgUQgDgTgGgMQgFgLgHgFQgGgFgIAAQgGAAgHAFg");
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
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,240,400), null);


(lib.Символ7копия = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Анимация2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.4,25.3,1,1.0157,0,-10.0748,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.0076,skewX:7.0346,x:14.95},19).to({scaleY:1.0157,skewX:-10.0756,x:7.4},32,cjs.Ease.cubicInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-0.2,38.9,51.2);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ9копия("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(258.2,-8.3,0.6716,0.6716,0,0,0,158.6,45.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},30).wait(58));

	// Слой_3
	this.instance_1 = new lib.Символ5("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(208.5,137.55,1,1,0,0,0,178.2,60.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88));

	// Слой_2
	this.instance_2 = new lib.Символ4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(358.55,58.45,1,1,0,0,0,139.7,27);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:230.75,alpha:1},34,cjs.Ease.cubicInOut).wait(50));

	// Слой_4
	this.instance_3 = new lib.Символ6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(371.7,232.5,1,1,0,0,0,162.1,38.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({_off:false},0).to({x:243.9,alpha:1},36,cjs.Ease.cubicInOut).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.3,-38.9,503.49999999999994,314.29999999999995);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(81.85,32.3,0.4576,0.4576,0,0,0,145.8,49.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#826552").s().p("AAfB6IAAjYIg+AAIAADYIgpAAIAAj0ICRAAIAAD0g");
	this.shape.setTransform(64.7534,22.9144,0.4576,0.4576);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#326392").s().p("AgdAhIAAhBIA7AAIAABBg");
	this.shape_1.setTransform(43.4866,48.7113,0.4576,0.4576);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#326392").s().p("AgPAlIAAhIIAfAAIAABIg");
	this.shape_2.setTransform(44.2188,40.5089,0.4576,0.4576);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#326392").s().p("AggAiIAAhCIBBAAIAABCg");
	this.shape_3.setTransform(44.7107,32.2036,0.4576,0.4576);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#326392").s().p("AgQATIAAgkIAhAAIAAAkg");
	this.shape_4.setTransform(45.031,25.1337,0.4576,0.4576);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#326392").s().p("AgiAWIAAgrIBFAAIAAArg");
	this.shape_5.setTransform(45.6259,18.5329,0.4576,0.4576);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#326392").s().p("AgdAdIAAg5IA7AAIAAA5g");
	this.shape_6.setTransform(34.083,31.6201,0.4576,0.4576);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#326392").s().p("AgOARIAAgiIAdAAIAAAig");
	this.shape_7.setTransform(34.1402,25.2481,0.4576,0.4576);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#326392").s().p("AgWARIAAghIAtAAIAAAhg");
	this.shape_8.setTransform(34.3004,19.0362,0.4576,0.4576);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#326392").s().p("AgZAZIAAgxIAzAAIAAAxg");
	this.shape_9.setTransform(24.2218,49.3405,0.4576,0.4576);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#326392").s().p("AgUAoIAAhPIApAAIAABPg");
	this.shape_10.setTransform(24.2104,41.0695,0.4576,0.4576);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#326392").s().p("AgmAoIAAhPIBNAAIAABPg");
	this.shape_11.setTransform(23.6384,33.256,0.4576,0.4576);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#326392").s().p("AgUAWIAAgrIApAAIAAArg");
	this.shape_12.setTransform(23.1007,26.4035,0.4576,0.4576);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#326392").s().p("AgaAUIAAgnIA1AAIAAAng");
	this.shape_13.setTransform(22.8834,20.2489,0.4576,0.4576);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#326392").s().p("AhaG0IhNtnIFPA1IAAMygAhAGXIDLAAIAAr8IkTgsg");
	this.shape_14.setTransform(22.849,34.6631,0.4576,0.4576);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#326392").s().p("AinHlIAAt0IFPhVIhFPJgAiKl5IAANCIDSAAIBBuIg");
	this.shape_15.setTransform(45.0653,32.398,0.4576,0.4576);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#326392").s().p("AiTEmIgjn6IFuhRIgjJLgAiYi+IAfHIIDzAAIAfoLg");
	this.shape_16.setTransform(33.9572,23.3033,0.4576,0.4576);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Слой_1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AsnFFIAAqJIZOAAIAAKJg");
	this.shape_17.setTransform(80.75,32.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,161.5,65);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.instance = new lib.Символ7копия();
	this.instance.parent = this;
	this.instance.setTransform(92.45,165.75,1.0813,0.6641,0,0,-5.49,11.9,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_1
	this.instance_1 = new lib._300500();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,401,500);


(lib.Символ4копия2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005386").s().p("AgIA2IAAhcIggAAIAAgPIBRAAIAAAPIggAAIAABcg");
	this.shape.setTransform(202.775,24.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#005386").s().p("AAVA2Igsg2IAAA2IgRAAIAAhrIARAAIAAA0IArg0IATAAIgrA0IAtA3g");
	this.shape_1.setTransform(194.4,24.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#005386").s().p("AgdA2IAAhrIA8AAIAAAPIgrAAIAAAdIAoAAIAAAOIgoAAIAAAiIArAAIAAAPg");
	this.shape_2.setTransform(184.85,24.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#005386").s().p("AAYA2IAAhcIgvAAIAABcIgRAAIAAhrIBSAAIAABrg");
	this.shape_3.setTransform(174.75,24.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#005386").s().p("AgbApQgNgOAAgbQAAgQAGgMQAHgNALgHQAMgHAOAAQARAAAOAHIgGAPIgMgEQgGgCgHAAQgOAAgJAKQgIALgBASQAAAUAJAKQAIALAPAAIANgCIAOgDIAAAPQgMAFgRAAQgXAAgMgPg");
	this.shape_4.setTransform(164.55,24.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#005386").s().p("AglApQgNgOAAgbQAAgaANgOQAOgPAXAAQAYAAANAPQAOAOAAAaQAAAagOAPQgNAPgYAAQgXAAgOgPgAgXgdQgIAKAAATQAAAUAIAKQAIALAPAAQAQAAAIgLQAIgKAAgUQAAgTgIgKQgIgLgQAAQgPAAgIALg");
	this.shape_5.setTransform(153.575,24.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#005386").s().p("AgjA2IAAhrIAfAAQAUAAAKAIQAKAJAAAQQAAARgLAIQgLAJgUAAIgLAAIAAAogAgRAAIAJAAQANAAAGgFQAHgFAAgKQAAgJgGgFQgGgEgLAAIgMAAg");
	this.shape_6.setTransform(143.325,24.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#005386").s().p("AAYA2IAAhcIgvAAIAABcIgRAAIAAhrIBRAAIAABrg");
	this.shape_7.setTransform(132.75,24.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#005386").s().p("AAeBHIAAg4IABgeIgBAAIg2BWIgVAAIAAhsIAQAAIAAA4IAAASIgBAMIABAAIA2hWIAVAAIAABsgAgVgzQgIgGgBgNIAQAAQABAGABADQACACADACQADABAFAAQAHAAAEgDQAEgDABgIIAQAAQgBANgIAGQgIAGgQAAQgOAAgHgGg");
	this.shape_8.setTransform(117.275,22.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#005386").s().p("AAeA2IAAg3IABgfIgBAAIg2BWIgVAAIAAhrIAQAAIAAA3IAAASIgBAMIABAAIA2hVIAVAAIAABrg");
	this.shape_9.setTransform(105.325,24.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#005386").s().p("AAVA2Igsg2IAAA2IgRAAIAAhrIARAAIAAA0IArg0IATAAIgqA0IAtA3g");
	this.shape_10.setTransform(95.2,24.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#005386").s().p("AgcApQgMgOAAgbQAAgQAGgMQAGgNAMgHQALgHAQAAQAQAAAOAHIgGAPIgMgEQgGgCgGAAQgPAAgIAKQgKALABASQAAAUAIAKQAIALAQAAIAMgCIAOgDIAAAPQgNAFgQAAQgXAAgNgPg");
	this.shape_11.setTransform(84.95,24.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#005386").s().p("AgIA2IAAhcIggAAIAAgPIBRAAIAAAPIggAAIAABcg");
	this.shape_12.setTransform(75.675,24.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#005386").s().p("AAZA2IAAgxIgxAAIAAAxIgSAAIAAhrIASAAIAAAsIAxAAIAAgsIASAAIAABrg");
	this.shape_13.setTransform(65.75,24.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#005386").s().p("AAfA2IgLgeIgoAAIgLAeIgSAAIAohrIATAAIAoBrgAAQAJIgKgdIgDgJIgDgJIgFAUIgKAbIAfAAg");
	this.shape_14.setTransform(55.075,24.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#005386").s().p("AAkBFIAAgeIhHAAIAAAeIgRAAIAAgtIAJAAQAKgUAIgXQAHgYACgZIA3AAIAABcIAOAAIAAAtgAgKgOQgGAVgJARIAuAAIAAhNIgWAAQgCARgHAWg");
	this.shape_15.setTransform(44.475,25.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#005386").s().p("AAZA2IAAgxIgxAAIAAAxIgSAAIAAhrIASAAIAAAsIAxAAIAAgsIASAAIAABrg");
	this.shape_16.setTransform(33.45,24.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#005386").s().p("AgdA2IAAhrIA7AAIAAAPIgqAAIAAAdIAoAAIAAAOIgoAAIAAAiIAqAAIAAAPg");
	this.shape_17.setTransform(23.8,24.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#005386").s().p("AAmA2IAAg1IABgUIABgQIgBAAIghBZIgOAAIgghZIAAAAIABAlIAAA0IgQAAIAAhrIAZAAIAeBVIAAAAIAehVIAaAAIAABrg");
	this.shape_18.setTransform(12.375,24.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#005386").s().p("AglApQgNgOAAgbQAAgaANgOQAOgPAXAAQAYAAANAPQAOAOAAAaQAAAagOAPQgNAPgYAAQgXAAgOgPgAgXgdQgIAKAAATQAAAUAIAKQAIALAPAAQAQAAAIgLQAIgKAAgUQAAgTgIgKQgIgLgQAAQgPAAgIALg");
	this.shape_19.setTransform(-0.625,24.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#005386").s().p("AAVA2Igsg2IAAA2IgSAAIAAhrIASAAIAAA0IArg0IATAAIgrA0IAtA3g");
	this.shape_20.setTransform(-10.7,24.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#005386").s().p("AgwA2QgXgYAGghQAGgfAcgRIAFgDIAEAAIAWBMIAXhMIABAAQAeAMAKAeQAJAbgOAbQgEAHgFAFIgcAAIACgBQAXgMAGgYQAFgagPgVQgFgHgKACIgcBYIgahWIgBgBQgSgDgGAUQgGAWALAWQAHAMAMAJIAJAGIgcABIgCgBg");
	this.shape_21.setTransform(-29.3255,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.instance = new lib.Symbol7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(86.5,-19.4,0.8256,0.8256,0,0,0,0.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4копия2, new cjs.Rectangle(-36,-47.3,245.3,83.69999999999999), null);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_10
	this.instance = new lib.Символ8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(119.8,605.15,1,1,0,0,0,101.6,504.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(173).to({_off:false},0).to({alpha:1},14).wait(52).to({y:197.15},0).wait(49).to({y:-176.85},0).wait(48));

	// btn
	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.55,352.25,0.7143,0.7143,0,0,0,0.1,-9.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(183).to({_off:false},0).wait(153));

	// logo
	this.instance_2 = new lib.Символ4копия2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(117.6,41.35,0.8947,0.8947,0,0,0,84.4,-16.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(167).to({_off:false},0).to({alpha:1},16).wait(153));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(141).to({_off:false},0).to({alpha:1},26).wait(169));

	// bg
	this.instance_4 = new lib.bg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0},29).to({_off:true},1).wait(306));

	// logo
	this.instance_5 = new lib.Символ2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(65.55,32.3,0.9231,0.9231,0,0,0,71,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},167).wait(169));

	// Слой_5
	this.instance_6 = new lib.Символ3("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(133.95,310.1,0.5981,0.5981,0,0,0,185.1,141.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({_off:true},138).wait(169));

	// pic
	this.instance_7 = new lib.Символ1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(80.4,200,0.8,0.8,0,0,0,200.5,250);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:160.4},68,cjs.Ease.quadOut).to({_off:true},99).wait(169));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-673.9,422.5,1749);


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
p.nominalBounds = new cjs.Rectangle(40,200,200.8,200);
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