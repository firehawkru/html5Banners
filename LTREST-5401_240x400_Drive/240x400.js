(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"240x400_atlas_P_", frames: [[0,302,181,167],[285,302,91,69],[183,302,100,115],[0,0,493,300]]},
		{name:"240x400_atlas_NP_", frames: [[0,0,485,46]]}
];


// symbols:



(lib.coin = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.palka1 = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.palka2 = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.pig = function() {
	this.initialize(ss["240x400_atlas_P_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.red11 = function() {
	this.initialize(ss["240x400_atlas_NP_"]);
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


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.palka2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,115);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACUE1IpIlOICNkNIBRgbIKLGEIg9C1IhkBKg");
	mask.setTransform(44.975,34.3);

	// Слой_1
	this.instance = new lib.palka1();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,2.1,87.4,64.5);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao5I6QjrjsAAlOQAAlNDrjsQDsjrFNAAQFOAADrDrQDsDsAAFNQAAFOjsDsQjrDrlOAAQlNAAjsjrg");
	mask.setTransform(90.075,85.675);

	// Слой_1
	this.instance = new lib.coin();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.6,5.2,161,161);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgnD8QhGgMg5gpQg8grgeg+Qgdg/AIhHQAIhJAtg0QAjgpA3gXQAygWA7gEQBrgHBQAzQAwAeAfAxQAeAxAHA5QAHA4gTA3QgUA3goAoQguAuhEATQgoAMgpAAQgZAAgZgFg");
	var mask_graphics_1 = new cjs.Graphics().p("ABFEPQgQgFgsgUQgkgQgXgGQgWgGgdgBQgSgBgjABIhvACQgkACgJACQgQAEgVAKIgkAQQhCAchJgNQhKgNg1gwQg0gxgThJQgShIAXhDQAYhHBAg2QA7gxBPgZQBDgVBXgFQAxgDBtABQBqABA+AGQCYANBkA7IASANQAYgSAdgNQAygVA7gFQBtgGBPAyQAwAeAfAyQAfAxAHA5QAGA3gTA3QgTA3goAoQgvAvhDATQhCAShDgLQg3gKgwgcIgEADQgvAnhAAMQgYAEgYAAQgmAAgkgLg");
	var mask_graphics_2 = new cjs.Graphics().p("AotI9Qg3gdg9hGQgqgwgPgnQgLgfgEg6QgDhYAVgyQACgHAig/QAWgpACgfQABgNgCgUIgEgiQgFgvAPguQgcgmgNgxQgShJAXhDQAYhHBAg2QA7gyBPgZQBDgUBXgGQAxgDBtABQBqABA9AGQCZANBkA8IASAMQAYgSAdgMQAygWA7gEQBtgHBPAzQAwAeAfAxQAfAxAHA5QAGA5gTA3QgTA3goAoQgvAuhDATQhCAThDgMQg3gJgwgdIgEADQgvAnhAAMQg/AMg7gTQgQgFgsgTQgkgRgXgFQgWgGgdgBIgRgBQALAPAIANQAaAtAIAyQAIA1gMAxQgLAzgeArQgeAsgrAcQgUAMgGAIQgJALgDATIgDAgQgEA8ghA0QghA0g0AdQg0Adg9ABIgHAAQg6AAgygZg");
	var mask_graphics_3 = new cjs.Graphics().p("AqMO4Qg8gng1hTQgwhRgMhIQgIgqAAhVIAAjjQAAhrAJg4QAOhZAqg6QAUgbAigcQASgQAogeIgBgJQgDhYAVgyQACgHAig/QAWgpACgfQABgNgCgVIgEgiQgFgvAPgtQgcgngNgxQgShJAXhDQAYhHBAg2QA7gyBPgZQBDgUBXgGQAxgDBtABQBpABA+AGQCZANBkA8IASAMQAYgSAdgMQAygWA7gEQBtgHBPAzQAwAeAfAxQAfAxAHA5QAGA5gTA3QgTA3goAoQgvAuhDATQhCAThDgMQg3gJgwgdIgEADQgvAnhAAMQg/AMg7gTQgQgFgsgTQglgRgXgFQgWgGgdgBIgQgBQALAPAHANQAaAtAIAzQAIA1gMAxQgGAcgMAZQAsgFAsAJQA9APA0ArQAyArAbA7QAgBGgIBIQgHA6ggAxQggAzgzAcQhVAxhpgeQhmgdg4hUQgTgcgLgfQgSAUgXAQQgXBCg1AsIgUASQgMAKgFAKQgGANgBAhIgBB1QAAA0AHAZQAGATARAaIAbAsQAnBIgRBXQgRBXg/A1QhAA1hYAEIgPABQhOAAg/gqg");
	var mask_graphics_4 = new cjs.Graphics().p("ACrScQh8gEhaggQh2gnhYhZQgSgSgmgrQgjgpgWgUIg6gzQgYgWgRgSQgRADgSABQhXAEhFgtQg8gog1hTQgwhQgMhIQgIgqAAhWIAAjjQAAhrAJg2QAOhaAqg5QAUgcAigdQASgPAogeIgBgJQgDhZAVgyQACgGAig/QAWgqACgeQABgOgCgUIgEgjQgFgvAPgtQgcgmgNgyQgShIAXhEQAYhHBAg2QA7gxBPgZQBDgVBXgFQAxgDBtABQBpABA+AGQCZANBkA7IASAMQAYgRAdgNQAygVA7gFQBtgGBPAyQAwAeAfAyQAfAxAHA5QAGA4gTA3QgTA3goAoQgvAvhDATQhCAShDgLQg3gKgwgcIgEADQgvAnhAAMQg/ALg7gSQgQgFgsgUQglgQgXgGQgWgGgdgBIgQAAQALAOAHANQAaAtAIA0QAIA0gMAyQgGAbgMAZQAsgFAsAKQA9AOA0AsQAyAqAbA8QAgBHgIBIQgHA5ggAxQggAygzAdQhVAwhpgdQhmgdg4hUQgTgcgLgfQgSAUgXAQQgXBBg1AtIgUARQgMAKgFALQgGANgBAhIgBB0QAAA1AHAYQAGATARAbIAAAAQAugJAwAHQA7AIAzAfQAkAVAkAjQAaAaAhAsQApAyASARQAlAiAlAJQAPADAUAAIAjgBQBNAAA5AZQA/AbAoA6QApA6ADBEQAEBDgiA/QgiA+g7AhQgrAYg7AJQgjAFguAAIgdgBg");
	var mask_graphics_5 = new cjs.Graphics().p("AmXWfQg4gIgpgVQhKgkg1hVQg9hlAAh1QABgUAFg8QAEgvgBgdQhpgGhQgcQh1gohYhZQgSgRgmgsQgkgogVgUIg7g0QgYgVgQgTQgRADgSABQhXAFhGguQg8gng1hTQgvhRgNhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZArg6QAUgcAhgcQASgQApgeIgBgJQgDhYAUgyQADgHAig/QAWgpACgfQABgNgCgVIgEgiQgFgvAPguQgcgmgNgxQgThJAXhDQAYhHBBg2QA7gyBPgZQBCgUBYgGQAwgDBtABQBrABA9AGQCaANBjA8IATAMQAYgSAdgMQAygWA7gEQBsgHBQAzQAwAeAfAxQAdAxAHA5QAHA5gSA3QgUA3goAoQguAuhEATQhBAThDgMQg4gJgvgdIgEADQgwAnhAAMQg+AMg8gTQgPgFgsgTQglgRgYgFQgWgGgdgBIgRgBQAMAPAHANQAbAtAIAzQAIA1gMAxQgGAbgMAaQAsgGArAKQA+APAzArQAyArAcA7QAfBHgIBIQgGA6ggAxQghAzgyAcQhWAxhogeQhngdg4hUQgTgdgLgfQgSAVgXAQQgXBBg1AtIgVASQgLAKgFAKQgHANgBAhIgBB0QAAA0AHAZQAGATARAaIABABQAugJAwAHQA7AIAzAeQAkAVAjAkQAaAaAjArQAoAyATARQAkAjAmAIQAOADAVAAIAjAAQBNAAA5AYQA+AbApA7QAlA1AGA+QAOAHAMAJQA3AlAaA3QASAkAGAvQAFAkgBAzQAAATAFAIQAGAKAWAHQBDAZAsA+QAsA+ACBHQADBJgnBAQgoBBhCAdQglAQgvAHQgkAEg0AAQg8AAgogFgAV8pXQhFgDg3glQgVgPgegcIgwgtQhCg3hfghIg1gRQgfgLgVgMQg7gfgjg7Qgkg8AAhCQAAhCAjg8QAkg7A7gfQBRgrBsAQQBPALBpA1QBaAuBRA7QBYA/AwBBQA+BUABBaQABBDgjA7QgjA8g6AeQg0Acg9AAIgOAAg");
	var mask_graphics_6 = new cjs.Graphics().p("ApZWfQg4gIgpgVQhKgkg1hVQg9hlAAh1QABgUAFg8QAEgvgBgdQhpgGhQgcQh1gohYhZQgSgRgmgsQgkgogVgUIg7g0QgYgVgQgTQgRADgSABQhXAFhGguQg8gng1hTQgvhRgNhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZArg6QAUgcAhgcQASgQAogeIAAgJQgDhYAUgyQADgHAig/QAWgpACgfQABgNgCgVIgEgiQgFgvAOguQgcgmgMgxQgThJAXhDQAYhHBBg2QA7gyBPgZQBCgUBYgGQAwgDBtABQBrABA9AGQCaANBjA8IATAMQAXgSAegMQAygWA7gEQBsgHBQAzQAwAeAfAxQAeAxAHA5QAHA5gTA3QgUA3goAoQguAuhEATQhBAThDgMQg4gJgwgdIgDADQgwAnhAAMQg+AMg8gTQgPgFgsgTQglgRgYgFQgWgGgdgBIgRgBQALAPAIANQAbAtAIAzQAIA1gMAxQgHAbgLAaQArgGAsAKQA+APAzArQAyArAcA7QAfBHgIBIQgGA6ggAxQghAzgyAcQhWAxhogeQhngdg4hUQgTgdgLgfQgTAVgWAQQgYBBg0AtIgVASQgLAKgFAKQgHANgBAhIgBB0QAAA0AHAZQAGATARAaIABABQAtgJAxAHQA7AIAzAeQAkAVAjAkQAaAaAjArQAoAyATARQAkAjAmAIQAOADAVAAIAjAAQBNAAA5AYQA+AbApA7QAlA1AGA+QANAHANAJQA3AlAaA3QASAkAGAvIAAABQAqgyA8ghQBpg5CmgJQA8gEAtAFQA5AFArAVQA3AbAkA0QAlAzAGA9QAHA8gZA6QgYA7gwAlQgqAhhDAVIh5AgIiCAhQgmAHgiABQgJAogXAlQgoBBhCAdQglAQgvAHQgkAEg0AAQg8AAgogFgAZAhpQg5gCg0gdQgzgcghgwQgSgdgVgyQgKgWgchCQgihQgLgsIgFgVQgDgMgEgIQgFgKgLgMIgTgVIgKgMIgSAAQhFgDg3glQgVgPgegcIgwgtQhCg3hfghIg1gRQgfgLgVgMQg7gfgjg7Qgkg8AAhCQAAhCAjg8QAkg7A7gfQBRgrBsAQQBPALBpA1QBaAuBRA7QBYA/AwBBIAMARIADAAQA+AAA7AZQBsAuBIB2QAgA0AJAqIAGAsQAEAcADAPQAGAWAOAdIAYAyQApBXgDBRQgCBfg1BDQgjAug1AZQgxAXgzAAIgKAAg");
	var mask_graphics_7 = new cjs.Graphics().p("Ap2WfQg3gIgpgVQhKgkg2hVQg8hlAAh1QAAgUAGg8QAEgvgBgdQhpgGhQgcQh2gohYhZQgSgRgmgsQgjgogWgUIg6g0QgYgVgQgTQgSADgSABQhXAFhFguQg8gng1hTQgwhRgMhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZAqg6QAUgcAigcQASgQAogeIgBgJQgDhYAVgyQACgHAig/QAWgpACgfQABgNgCgVIgEgiQgEgvAOguQgcgmgNgxQgShJAXhDQAYhHBAg2QA7gyBPgZQBDgUBXgGQAxgDBtABQBqABA+AGQCZANBkA8IASAMQAYgSAdgMQAygWA7gEQBtgHBPAzQAwAeAfAxQAfAxAHA5QAGA5gTA3QgTA3goAoQgvAuhDATQhCAThDgMQg3gJgwgdIgEADQgvAnhAAMQg/AMg7gTQgQgFgsgTQglgRgXgFQgWgGgdgBIgRgBQALAPAIANQAaAtAIAzQAIA1gMAxQgGAbgLAaQArgGAsAKQA9APA0ArQAyArAbA7QAgBHgIBIQgHA6ggAxQggAzgzAcQhVAxhpgeQhngdg4hUQgTgdgKgfQgTAVgWAQQgYBBg1AtIgUASQgMAKgFAKQgGANgBAhIgBB0QAAA0AHAZQAGATARAaIAAABQAugJAwAHQA7AIAzAeQAkAVAkAkQAaAaAiArQApAyASARQAlAjAlAIQAPADAUAAIAjAAQBNAAA5AYQA/AbAoA7QAmA1AGA+QANAHANAJQA3AlAaA3QARAkAHAvIAAABQApgyA9ghQBog5CmgJQA8gEAtAFQAcACAZAHQAqgSBlgeQBqgfA8gJQAcg/A8gtQBCgyBQgKQBOgKBOAeQBNAeA3A7QApAsAXA2QAZA6gBA5QgBA8gcA2QgdA3gxAeQg2AhhLACQg2ABhHgOQgeA2gyAjQgrAghBAUQgmAMhQAQQhaASgxADQg6ACgvgMIgaAJIh4AgIiCAhQgnAHgiABQgJAogXAlQgoBBhCAdQgkAQgwAHQgjAEg0AAQg9AAgogFgAW8H7Qg7gYgog0Qgpg1gHg+QgHg+AehiQAlh6AEgmQACgUAAg/QAAg0AGgfIAEgSQgKgLgIgNQgTgdgUgyQgLgWgbhCQgjhQgLgsIgEgVQgDgMgFgIQgFgKgLgMIgTgVIgJgMIgTAAQhFgDg2glQgWgPgdgcIgxgtQhCg3heghIg2gRQgfgLgVgMQg6gfgkg7Qgjg8AAhCQgBhCAkg8QAkg7A6gfQBSgrBsAQQBPALBpA1QBaAuBQA7QBZA/AwBBIAMARIACAAQA/AAA6AZQBtAuBIB2QAgA0AJAqIAGAsQADAcAEAPQAFAWAOAdIAZAyQAoBXgDBRQAAApgLAkQAeAgAPApQAUAxACBOQAJDghMDQQgUA6gYAeQgWAbgkAXQg2AihBAGIgZABQg0AAgvgUg");
	var mask_graphics_8 = new cjs.Graphics().p("Ap2WfQg3gIgpgVQhKgkg2hVQg8hlAAh1QAAgUAGg8QAEgvgBgdQhpgGhQgcQh2gohYhZQgSgRgmgsQgjgogWgUIg6g0QgYgVgQgTQgSADgSABQhXAFhFguQg8gng1hTQgwhRgMhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZAqg6QAUgcAigcQASgQAogeIgBgJQgDhYAVgyQACgHAig/QAWgpACgfQABgNgCgVIgEgiQgEgvAOguQgcgmgNgxQgShJAXhDQAYhHBAg2QA7gyBPgZQBDgUBXgGQAxgDBtABQBqABA+AGQCZANBkA8IASAMQAYgSAdgMQAygWA7gEQBtgHBPAzQAwAeAfAxQAfAxAHA5QAGA5gTA3QgTA3goAoQgvAuhDATQhCAThDgMQg3gJgwgdIgEADQgvAnhAAMQg/AMg7gTQgQgFgsgTQglgRgXgFQgWgGgdgBIgRgBQALAPAIANQAaAtAIAzQAIA1gMAxQgGAbgLAaQArgGAsAKQA9APA0ArQAyArAbA7QAgBHgIBIQgHA6ggAxQggAzgzAcQhVAxhpgeQhngdg4hUQgTgdgKgfQgTAVgWAQQgYBBg1AtIgUASQgMAKgFAKQgGANgBAhIgBB0QAAA0AHAZQAGATARAaIAAABQAugJAwAHQA7AIAzAeQAkAVAkAkQAaAaAiArQApAyASARQAlAjAlAIQAPADAUAAIAjAAQBNAAA5AYQA/AbAoA7QAmA1AGA+QANAHANAJQA3AlAaA3QARAkAHAvIAAABQApgyA9ghQBog5CmgJQA8gEAtAFQAcACAZAHQAqgSBlgeQBqgfA8gJQAcg/A8gtQBCgyBQgKQBOgKBOAeQBNAeA3A7QApAsAXA2QAJAVAGAWQALAJAKALQA4A6ALBMQBJgUAuADQBBACA5AlQA4AkAdA6QAdA6gDBDQgEBEgjA2QggAzg4AjQgzAghBAPQg3ANhDgBQg1AAhHgJQhMgJgugTQhMggg5hQQgrg+gehiIgEgRQgXAagcAUQgrAghBAUQgmAMhQAQQhaASgxADQg6ACgvgMIgaAJIh4AgIiCAhQgnAHgiABQgJAogXAlQgoBBhCAdQgkAQgwAHQgjAEg0AAQg9AAgogFgAW8H7Qg7gYgog0Qgpg1gHg+QgHg+AehiQAlh6AEgmQACgUAAg/QAAg0AGgfIAEgSQgKgLgIgNQgTgdgUgyQgLgWgbhCQgjhQgLgsIgEgVQgDgMgFgIQgFgKgLgMIgTgVIgJgMIgTAAQhFgDg2glQgWgPgdgcIgxgtQhCg3heghIg2gRQgfgLgVgMQg6gfgkg7Qgjg8AAhCQgBhCAkg8QAkg7A6gfQBSgrBsAQQBPALBpA1QBaAuBQA7QBZA/AwBBIAMARIACAAQA/AAA6AZQBtAuBIB2QAgA0AJAqIAGAsQADAcAEAPQAFAWAOAdIAZAyQAoBXgDBRQAAApgLAkQAeAgAPApQAUAxACBOQAJDghMDQQgUA6gYAeQgWAbgkAXQg2AihBAGIgZABQg0AAgvgUg");
	var mask_graphics_9 = new cjs.Graphics().p("Aq7WfQg4gIgpgVQhKgkg1hVQg9hlAAh1QABgUAFg8QAEgvgBgdQhpgGhQgcQh1gohYhZQgSgRgmgsQgkgogVgUIg7g0QgYgVgQgTQgRADgSABQhXAFhGguQg8gng1hTQgvhRgNhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZArg6QAUgcAhgcQASgQAogeIAAgJQgDhYAUgyQADgHAig/QAWgpACgfQABgNgCgVIgEgiQgFgvAOguQgcgmgMgxQgThJAXhDQAYhHBBg2QA7gyBPgZQBCgUBYgGQAwgDBtABQBrABA9AGQCaANBjA8IATAMQAXgSAegMQAygWA7gEQBsgHBQAzQAwAeAfAxQAeAxAHA5QAHA5gTA3QgUA3goAoQguAuhEATQhBAThDgMQg4gJgwgdIgDADQgwAnhAAMQg+AMg8gTQgPgFgsgTQglgRgYgFQgWgGgdgBIgRgBQALAPAIANQAbAtAIAzQAIA1gMAxQgHAbgLAaQArgGAsAKQA+APAzArQAyArAcA7QAfBHgIBIQgGA6ggAxQghAzgyAcQhWAxhogeQhngdg4hUQgTgdgLgfQgTAVgWAQQgYBBg0AtIgVASQgLAKgFAKQgHANgBAhIgBB0QAAA0AHAZQAGATARAaIABABQAtgJAxAHQA7AIAzAeQAkAVAjAkQAaAaAjArQAoAyATARQAkAjAmAIQAOADAVAAIAjAAQBNAAA5AYQA+AbApA7QAlA1AGA+QANAHANAJQA3AlAaA3QASAkAGAvIAAABQAqgyA8ghQBpg5CmgJQA9gEAtAFQAaACAZAHQAqgSBmgeQBqgfA7gJQAdg/A7gtQBDgyBQgKQBOgKBOAeQBMAeA3A7QAqAsAXA2QAJAVAFAWQALAJALALQA3A6AMBMIAJgCQgMhDAXg+QAOgnACgMQAFgTgCgnQgBg2ADgvQADhGARgoQAUgtAwgqQAjgfAmgRQAFgtASg6QAlh6AEgmQACgUgBg/QAAg0AGgfIAEgSQgJgLgJgNQgSgdgVgyQgKgWgchCQgihQgLgsIgFgVQgDgMgEgIQgFgKgLgMIgTgVIgKgMIgSAAQhFgDg3glQgVgPgegcIgwgtQhCg3hfghIg1gRQgfgLgVgMQg7gfgjg7Qgkg8AAhCQAAhCAjg8QAkg7A7gfQBRgrBsAQQBPALBpA1QBaAuBRA7QBYA/AwBBIAMARIADAAQA+AAA7AZQBsAuBIB2QAKAPAHAPQAogLAoADQA1ADAxAbQAwAaAfArQAzBJADBuQADBxgyBMQgcApgrAcQgYAPgaAJIAGAOQATAxADBOQAJDghNDQQgUA6gXAeQgWAbgkAXQgXAOgZAKIAAAFQgBAMgFAYQgFAXgBANQgCASABAbIABAsQABBsgwBkQguBghKAsIgRAIQAFAagCAcQgDBEgjA2QggAzg4AjQg0AghAAPQg4ANhDgBQg0AAhIgJQhMgJgtgTQhNggg4hQQgrg+gehiIgFgRQgWAagcAUQgsAghAAUQgnAMhQAQQhZASgxADQg7ACgvgMIgZAJIh4AgIiDAhQgnAHghABQgJAogXAlQgoBBhCAdQglAQgvAHQgkAEg0AAQg8AAgogFg");
	var mask_graphics_10 = new cjs.Graphics().p("AtAWfQg4gIgpgVQhKgkg1hVQg9hlAAh1QABgUAFg8QAEgvgBgdQhpgGhQgcQh1gohYhZQgSgRgmgsQgkgogVgUIg7g0QgYgVgQgTQgRADgSABQhXAFhGguQg8gng1hTQgvhRgNhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZArg6QAUgcAhgcQASgQAogeIAAgJQgDhYAUgyQADgHAig/QAWgpACgfQABgNgCgVIgEgiQgFgvAOguQgcgmgMgxQgThJAXhDQAYhHBBg2QA7gyBPgZQBCgUBYgGQAwgDBtABQBrABA9AGQCaANBjA8IATAMQAXgSAegMQAygWA7gEQBsgHBQAzQAwAeAfAxQAeAxAHA5QAHA5gTA3QgUA3goAoQguAuhEATQhBAThDgMQg4gJgwgdIgDADQgwAnhAAMQg+AMg8gTQgPgFgsgTQglgRgYgFQgWgGgdgBIgRgBQALAPAIANQAbAtAIAzQAIA1gMAxQgHAbgLAaQArgGAsAKQA+APAzArQAyArAcA7QAfBHgIBIQgGA6ggAxQghAzgyAcQhWAxhogeQhngdg4hUQgTgdgLgfQgTAVgWAQQgYBBg0AtIgVASQgLAKgFAKQgHANgBAhIgBB0QAAA0AHAZQAGATARAaIABABQAtgJAxAHQA7AIAzAeQAkAVAjAkQAaAaAjArQAoAyATARQAkAjAmAIQAOADAVAAIAjAAQBNAAA5AYQA+AbApA7QAlA1AGA+QANAHANAJQA3AlAaA3QASAkAGAvIAAABQAqgyA8ghQBpg5CmgJQA9gEAtAFQAbACAZAHQAqgSBlgeQBpgfA8gJQAdg/A7gtQBDgyBQgKQBOgKBOAeQBMAeA3A7QAqAsAXA2QAJAVAFAWQALAJALALQA3A6AMBMIAJgCQgMhDAXg+QAOgnACgMQAFgTgCgnQgBg2ADgvQADhGARgoQAUgtAwgqQAjgfAmgRQAFgtASg6QAlh6AEgmQACgUgBg/QAAg0AGgfIAEgSQgKgLgIgNQgSgdgVgyQgKgWgchCQgihQgLgsIgFgVQgDgMgEgIQgFgKgLgMIgTgVIgKgMIgSAAQhFgDg3glQgVgPgegcIgwgtQhCg3hfghIg1gRQgfgLgVgMQg7gfgjg7Qgkg8AAhCQAAhCAjg8QAkg7A7gfQBRgrBsAQQBPALBpA1QBaAuBRA7QBYA/AwBBIAMARIADAAQA+AAA7AZQBsAuBIB2IAJAOIATgSQAngiAwgQQAugOA0AFQAwAEAwATQBVAmBHBSQBBBLAKBGQAGApgLAzQgGAagUBBQgRA3gEAkQgGAzAOAoQAJAaAaAlQAfAuAIAPQAkBCgKBOQgJBPgyA5QgyA4hOARQhOAShGgcQgvgUgsgqQgQBUgeBQQgUA6gXAeQgWAbgkAXQgXAOgZAKIAAAFQgBAMgFAYQgFAXgBANQgCASABAbIABAsQABBsgwBkQguBghKAsIgRAIQAEAagBAcQgDBEgjA2QggAzg4AjQg0AghAAPQg4ANhDgBQg0AAhIgJQhMgJgtgTQhNggg4hQQgrg+gehiIgFgRQgWAagcAUQgsAghAAUQgnAMhQAQQhZASgxADQg6ACgvgMIgZAJIh5AgIiDAhQgnAHghABQgJAogXAlQgoBBhCAdQglAQgvAHQgkAEg0AAQg8AAgogFg");
	var mask_graphics_11 = new cjs.Graphics().p("Ax5WfQg3gIgpgVQhKgkg2hVQg8hlAAh1QAAgUAGg8QAEgvgBgdQhpgGhQgcQh2gohYhZQgSgRgmgsQgjgogWgUIg6g0QgYgVgQgTQgSADgSABQhXAFhFguQg8gng1hTQgwhRgMhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZAqg6QAUgcAigcQASgQAogeIgBgJQgDhYAVgyQACgHAig/QAWgpACgfQABgNgCgVIgEgiQgEgvAOguQgcgmgNgxQgShJAXhDQAYhHBAg2QA7gyBPgZQBDgUBXgGQAxgDBtABQBqABA+AGQCZANBkA8IASAMQAYgSAdgMQAygWA7gEQBtgHBPAzQAwAeAfAxQAfAxAHA5QAGA5gTA3QgTA3goAoQgvAuhDATQhCAThDgMQg3gJgwgdIgEADQgvAnhAAMQg/AMg7gTQgQgFgsgTQglgRgXgFQgWgGgdgBIgRgBQALAPAIANQAaAtAIAzQAIA1gMAxQgGAbgLAaQArgGAsAKQA9APA0ArQAyArAbA7QAgBHgIBIQgHA6ggAxQggAzgzAcQhVAxhpgeQhngdg4hUQgSgdgLgfQgTAVgWAQQgYBBg1AtIgUASQgMAKgFAKQgGANgBAhIgBB0QAAA0AHAZQAGATARAaIAAABQAugJAwAHQA7AIAzAeQAkAVAkAkQAaAaAiArQApAyASARQAlAjAlAIQAPADAUAAIAjAAQBNAAA5AYQA/AbAoA7QAmA1AGA+QANAHANAJQA3AlAaA3QARAkAHAvIAAABQApgyA9ghQBog5CmgJQA9gEAtAFQAcACAZAHQAqgSBlgeQBqgfA8gJQAdg/A6gtQBCgyBQgKQBOgKBOAeQBNAeA3A7QApAsAXA2QAJAVAGAWQALAJAKALQA4A6ALBMIAJgCQgLhDAWg+QAOgnADgMQAEgTgCgnQgBg2ADgvQADhGARgoQAUgtAxgqQAjgfAmgRQAFgtARg6QAlh6AEgmQACgUAAg/QAAg0AGgfIAEgSQgKgLgIgNQgTgdgUgyQgLgWgbhCQgjhQgLgsIgEgVQgDgMgFgIQgFgKgLgMIgTgVIgJgMIgTAAQhFgDg2glQgWgPgdgcIgxgtQhCg3heghIg2gRQgfgLgVgMQg6gfgkg7Qgjg8AAhCQgBhCAkg8QAkg7A6gfQBSgrBsAQQBPALBpA1QBaAuBQA7QBZA/AwBBIAMARIACAAQA/AAA6AZQBtAuBIB2IAIAOIATgSQAngiAwgQQAugOA0AFQAxAEAwATQBOAjBCBJQBQg/BbgeQAcgJA+gOQA6gNAegLQAXgIArgTQAngQAcgGQBDgOBDAaQBCAZApA4QAoA3AFBHQAGBHgeA9QguBdh5A5QgtAVg+ASQgcAIhSAVQA4A+ARBZQARBWgXBUQgXBPg5BGQg1BChLAuQhBAohDAOQhKAPhBgTIgXgIQg9AHg5gWQgugUgsgqQgRBUgdBQQgUA6gYAeQgWAbgkAXQgXAOgYAKIgBAFQgBAMgFAYQgEAXgBANQgCASAAAbIABAsQABBsgvBkQgvBghJAsIgRAIQAEAagBAcQgEBEgjA2QggAzg4AjQgzAghBAPQg3ANhDgBQg1AAhHgJQhMgJgugTQhMggg5hQQgrg+gehiIgEgRQgWAagdAUQgrAghAAUQgmAMhQAQQhaASgxADQg6ACgvgMIgaAJIh5AgIiCAhQgnAHgiABQgJAogXAlQgoBBhCAdQgkAQgwAHQgjAEg0AAQg9AAgogFg");
	var mask_graphics_12 = new cjs.Graphics().p("Ax5WfQg3gIgpgVQhKgkg2hVQg8hlAAh1QAAgUAGg8QAEgvgBgdQhpgGhQgcQh2gohYhZQgSgRgmgsQgjgogWgUIg6g0QgYgVgQgTQgSADgSABQhXAFhFguQg8gng1hTQgwhRgMhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZAqg6QAUgcAigcQASgQAogeIgBgJQgDhYAVgyQACgHAig/QAWgpACgfQABgNgCgVIgEgiQgEgvAOguQgcgmgNgxQgShJAXhDQAYhHBAg2QA7gyBPgZQBDgUBXgGQAxgDBtABQBqABA+AGQCZANBkA8IASAMQAYgSAdgMQAygWA7gEQBtgHBPAzQAwAeAfAxQAfAxAHA5QAGA5gTA3QgSAygjAmQAjALAeAUQAsAdAcAqQAcArAIAzQAJA0gOAwQgPAzg0BGQgmAyggAYQgnAfgyAMQgzANgxgJQgqgGgmgWQgmgWgcggQgbghgPgpQgQgpAAgqQAAgWAHguQAHgxAMgdQAPgoAeghIAHgIQgmgLgigUIgEADQgvAnhAAMQg/AMg7gTQgQgFgsgTQglgRgXgFQgWgGgdgBIgRgBQALAPAIANQAaAtAIAzQAIA1gMAxQgGAbgLAaQArgGAsAKQA9APA0ArQAyArAbA7QAgBHgIBIQgHA6ggAxQggAzgzAcQhVAxhpgeQhngdg4hUQgSgdgLgfQgTAVgWAQQgYBBg1AtIgUASQgMAKgFAKQgGANgBAhIgBB0QAAA0AHAZQAGATARAaIAAABQAugJAwAHQA7AIAzAeQAkAVAkAkQAaAaAiArQApAyASARQAlAjAlAIQAPADAUAAIAjAAQBNAAA5AYQA/AbAoA7QAmA1AGA+QANAHANAJQA3AlAaA3QARAkAHAvIAAABQApgyA9ghQBog5CmgJQA9gEAtAFQAcACAZAHQAqgSBlgeQBqgfA8gJQAdg/A6gtQBCgyBQgKQBOgKBOAeQBNAeA3A7QApAsAXA2QAJAVAGAWQALAJAKALQA4A6ALBMIAJgCQgLhDAWg+QAOgnADgMQAEgTgCgnQgBg2ADgvQADhGARgoQAUgtAxgqQAjgfAmgRQAFgtARg6QAlh6AEgmQACgUAAg/QAAg0AGgfIAEgSQgKgLgIgNQgTgdgUgyQgLgWgbhCQgjhQgLgsIgEgVQgDgMgFgIQgFgKgLgMIgTgVIgJgMIgTAAQhFgDg2glQgWgPgdgcIgxgtQhCg3heghIg2gRQgfgLgVgMQg6gfgkg7Qgjg8AAhCQgBhCAkg8QAkg7A6gfQBSgrBsAQQBPALBpA1QBaAuBQA7QBZA/AwBBIAMARIACAAQA/AAA6AZQBtAuBIB2IAIAOIATgSQAngiAwgQQAugOA0AFQAxAEAwATQBOAjBCBJQBQg/BbgeQAcgJA+gOQA6gNAegLQAXgIArgTQAngQAcgGQBDgOBDAaQBCAZApA4QAoA3AFBHQAGBHgeA9QguBdh5A5QgtAVg+ASQgcAIhSAVQA4A+ARBZQARBWgXBUQgXBPg5BGQg1BChLAuQhBAohDAOQhKAPhBgTIgXgIQg9AHg5gWQgugUgsgqQgRBUgdBQQgUA6gYAeQgWAbgkAXQgXAOgYAKIgBAFQgBAMgFAYQgEAXgBANQgCASAAAbIABAsQABBsgvBkQgvBghJAsIgRAIQAEAagBAcQgEBEgjA2QggAzg4AjQgzAghBAPQg3ANhDgBQg1AAhHgJQhMgJgugTQhMggg5hQQgrg+gehiIgEgRQgWAagdAUQgrAghAAUQgmAMhQAQQhaASgxADQg6ACgvgMIgaAJIh5AgIiCAhQgnAHgiABQgJAogXAlQgoBBhCAdQgkAQgwAHQgjAEg0AAQg9AAgogFg");
	var mask_graphics_13 = new cjs.Graphics().p("Ax5WfQg3gIgpgVQhKgkg2hVQg8hlAAh1QAAgUAGg8QAEgvgBgdQhpgGhQgcQh2gohYhZQgSgRgmgsQgjgogWgUIg6g0QgYgVgQgTQgSADgSABQhXAFhFguQg8gng1hTQgwhRgMhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZAqg6QAUgcAigcQASgQAogeIgBgJQgDhYAVgyQACgHAig/QAWgpACgfQABgNgCgVIgEgiQgEgvAOguQgcgmgNgxQgShJAXhDQAYhHBAg2QA7gyBPgZQBDgUBXgGQAxgDBtABQBqABA+AGQCZANBkA8IASAMQAYgSAdgMQAygWA7gEQBtgHBPAzQAwAeAfAxQAfAxAHA5QAGA5gTA3QgGARgIARQAiguAzgbQAlgSApgFQAqgFAnAJQAhAIAoAVIBFAoIAzAdQAdARATAQQA4AwAVBMQAUBLgYBGQgZBGg+AuQg/AuhKACQhFADhegoQgjgQgdgRQgSAfgbAmQgmAyggAYQgnAfgyAMQgzANgxgJQgqgGgmgWQgmgWgcggQgbghgPgpQgQgpAAgqQAAgWAHguQAHgxAMgdQAPgoAeghIAHgIQgmgLgigUIgEADQgvAnhAAMQg/AMg7gTQgQgFgsgTQglgRgXgFQgWgGgdgBIgRgBQALAPAIANQAaAtAIAzQAIA1gMAxQgGAbgLAaQArgGAsAKQA9APA0ArQAyArAbA7QAgBHgIBIQgHA6ggAxQggAzgzAcQhVAxhpgeQhngdg4hUQgSgdgLgfQgTAVgWAQQgYBBg1AtIgUASQgMAKgFAKQgGANgBAhIgBB0QAAA0AHAZQAGATARAaIAAABQAugJAwAHQA7AIAzAeQAkAVAkAkQAaAaAiArQApAyASARQAlAjAlAIQAPADAUAAIAjAAQBNAAA5AYQA/AbAoA7QAmA1AGA+QANAHANAJQA3AlAaA3QARAkAHAvIAAABQApgyA9ghQBog5CmgJQA9gEAtAFQAcACAZAHQAqgSBlgeQBqgfA8gJQAdg/A6gtQBCgyBQgKQBOgKBOAeQBNAeA3A7QApAsAXA2QAJAVAGAWQALAJAKALQA4A6ALBMIAJgCQgLhDAWg+QAOgnADgMQAEgTgCgnQgBg2ADgvQADhGARgoQAUgtAxgqQAjgfAmgRQAFgtARg6QAlh6AEgmQACgUAAg/QAAg0AGgfIAEgSQgKgLgIgNQgTgdgUgyQgLgWgbhCQgjhQgLgsIgEgVQgDgMgFgIQgFgKgLgMIgTgVIgJgMIgTAAQhFgDg2glQgWgPgdgcIgxgtQhCg3heghIg2gRQgfgLgVgMQg6gfgkg7Qgjg8AAhCQgBhCAkg8QAkg7A6gfQBSgrBsAQQBPALBpA1QBaAuBQA7QBZA/AwBBIAMARIACAAQA/AAA6AZQBtAuBIB2IAIAOIATgSQAngiAwgQQAugOA0AFQAxAEAwATQBOAjBCBJQBQg/BbgeQAcgJA+gOQA6gNAegLQAXgIArgTQAngQAcgGQBDgOBDAaQBCAZApA4QAoA3AFBHQAGBHgeA9QguBdh5A5QgtAVg+ASQgcAIhSAVQA4A+ARBZQARBWgXBUQgXBPg5BGQg1BChLAuQhBAohDAOQhKAPhBgTIgXgIQg9AHg5gWQgugUgsgqQgRBUgdBQQgUA6gYAeQgWAbgkAXQgXAOgYAKIgBAFQgBAMgFAYQgEAXgBANQgCASAAAbIABAsQABBsgvBkQgvBghJAsIgRAIQAEAagBAcQgEBEgjA2QggAzg4AjQgzAghBAPQg3ANhDgBQg1AAhHgJQhMgJgugTQhMggg5hQQgrg+gehiIgEgRQgWAagdAUQgrAghAAUQgmAMhQAQQhaASgxADQg6ACgvgMIgaAJIh5AgIiCAhQgnAHgiABQgJAogXAlQgoBBhCAdQgkAQgwAHQgjAEg0AAQg9AAgogFgAsavSIAHACIALgXIgSAVg");
	var mask_graphics_14 = new cjs.Graphics().p("Ax5WfQg3gIgpgVQhKgkg2hVQg8hlAAh1QAAgUAGg8QAEgvgBgdQhpgGhQgcQh2gohYhZQgSgRgmgsQgjgogWgUIg6g0QgYgVgQgTQgSADgSABQhXAFhFguQg8gng1hTQgwhRgMhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZAqg6QAUgcAigcQASgQAogeIgBgJQgDhYAVgyQACgHAig/QAWgpACgfQABgNgCgVIgEgiQgEgvAOguQgcgmgNgxQgShJAXhDQAYhHBAg2QA7gyBPgZQBDgUBXgGQAxgDBtABQBqABA+AGQCZANBkA8IASAMQAYgSAdgMQAygWA7gEQBtgHBPAzQAwAeAfAxQAfAxAHA5QAGA5gTA3QgGARgIARQAiguAzgbQAlgSApgFQAqgFAnAJQAhAIAoAVIAzAdQAVgHAXgDQBGgJA+AaQAZALAeATIAzAkIAxAkQAaAVASATQAnArAQA6QARA7gLA5QgLA6glAwQgkAxg1AYQgsAUgxACQgyACgtgRQghgMgngbIgUgPQgaAHgbABQhFADhegoQgjgQgdgRQgSAfgbAmQgmAyggAYQgnAfgyAMQgzANgxgJQgqgGgmgWQgmgWgcggQgbghgPgpQgQgpAAgqQAAgWAHguQAHgxAMgdQAPgoAeghIAHgIQgmgLgigUIgEADQgvAnhAAMQg/AMg7gTQgQgFgsgTQglgRgXgFQgWgGgdgBIgRgBQALAPAIANQAaAtAIAzQAIA1gMAxQgGAbgLAaQArgGAsAKQA9APA0ArQAyArAbA7QAgBHgIBIQgHA6ggAxQggAzgzAcQhVAxhpgeQhngdg4hUQgSgdgLgfQgTAVgWAQQgYBBg1AtIgUASQgMAKgFAKQgGANgBAhIgBB0QAAA0AHAZQAGATARAaIAAABQAugJAwAHQA7AIAzAeQAkAVAkAkQAaAaAiArQApAyASARQAlAjAlAIQAPADAUAAIAjAAQBNAAA5AYQA/AbAoA7QAmA1AGA+QANAHANAJQA3AlAaA3QARAkAHAvIAAABQApgyA9ghQBog5CmgJQA9gEAtAFQAcACAZAHQAqgSBlgeQBqgfA8gJQAdg/A6gtQBCgyBQgKQBOgKBOAeQBNAeA3A7QApAsAXA2QAJAVAGAWQALAJAKALQA4A6ALBMIAJgCQgLhDAWg+QAOgnADgMQAEgTgCgnQgBg2ADgvQADhGARgoQAUgtAxgqQAjgfAmgRQAFgtARg6QAlh6AEgmQACgUAAg/QAAg0AGgfIAEgSQgKgLgIgNQgTgdgUgyQgLgWgbhCQgjhQgLgsIgEgVQgDgMgFgIQgFgKgLgMIgTgVIgJgMIgTAAQhFgDg2glQgWgPgdgcIgxgtQhCg3heghIg2gRQgfgLgVgMQg6gfgkg7Qgjg8AAhCQgBhCAkg8QAkg7A6gfQBSgrBsAQQBPALBpA1QBaAuBQA7QBZA/AwBBIAMARIACAAQA/AAA6AZQBtAuBIB2IAIAOIATgSQAngiAwgQQAugOA0AFQAxAEAwATQBOAjBCBJQBQg/BbgeQAcgJA+gOQA6gNAegLQAXgIArgTQAngQAcgGQBDgOBDAaQBCAZApA4QAoA3AFBHQAGBHgeA9QguBdh5A5QgtAVg+ASQgcAIhSAVQA4A+ARBZQARBWgXBUQgXBPg5BGQg1BChLAuQhBAohDAOQhKAPhBgTIgXgIQg9AHg5gWQgugUgsgqQgRBUgdBQQgUA6gYAeQgWAbgkAXQgXAOgYAKIgBAFQgBAMgFAYQgEAXgBANQgCASAAAbIABAsQABBsgvBkQgvBghJAsIgRAIQAEAagBAcQgEBEgjA2QggAzg4AjQgzAghBAPQg3ANhDgBQg1AAhHgJQhMgJgugTQhMggg5hQQgrg+gehiIgEgRQgWAagdAUQgrAghAAUQgmAMhQAQQhaASgxADQg6ACgvgMIgaAJIh5AgIiCAhQgnAHgiABQgJAogXAlQgoBBhCAdQgkAQgwAHQgjAEg0AAQg9AAgogFgAsavSIAHACIALgXIgSAVg");
	var mask_graphics_15 = new cjs.Graphics().p("Ax5WfQg3gIgpgVQhKgkg2hVQg8hlAAh1QAAgUAGg8QAEgvgBgdQhpgGhQgcQh2gohYhZQgSgRgmgsQgjgogWgUIg6g0QgYgVgQgTQgSADgSABQhXAFhFguQg8gng1hTQgwhRgMhIQgIgqAAhVIAAjiQAAhrAJg4QAOhZAqg6QAUgcAigcQASgQAogeIgBgJQgDhYAVgyQACgHAig/QAWgpACgfQABgNgCgVIgEgiQgEgvAOguQgcgmgNgxQgShJAXhDQAYhHBAg2QA7gyBPgZQBDgUBXgGQAxgDBtABQBqABA+AGQCZANBkA8IASAMQAYgSAdgMQAygWA7gEQBtgHBPAzQAwAeAfAxQAfAxAHA5QAGA5gTA3QgGARgIARQAiguAzgbQAlgSApgFQAqgFAnAJQAhAIAoAVIAzAdQAVgHAXgDQBGgJA+AaQAZALAeATIAzAkIAYARQAmgWAqgGQAcgEAeADQgJggAAgiQgBhCAkg8QAkg7A6gfQBSgrBsAQQBPALBpA1QBaAuBQA7QBZA/AwBBIAMARIACAAQA/AAA6AZQBtAuBIB2IAIAOIATgSQAngiAwgQQAugOA0AFQAxAEAwATQBOAjBCBJQBQg/BbgeQAcgJA+gOQA6gNAegLQAXgIArgTQAngQAcgGQBDgOBDAaQBCAZApA4QAoA3AFBHQAGBHgeA9QguBdh5A5QgtAVg+ASQgcAIhSAVQA4A+ARBZQARBWgXBUQgXBPg5BGQg1BChLAuQhBAohDAOQhKAPhBgTIgXgIQg9AHg5gWQgugUgsgqQgRBUgdBQQgUA6gYAeQgWAbgkAXQgXAOgYAKIgBAFQgBAMgFAYQgEAXgBANQgCASAAAbIABAsQABBsgvBkQgvBghJAsIgRAIQAEAagBAcQgEBEgjA2QggAzg4AjQgzAghBAPQg3ANhDgBQg1AAhHgJQhMgJgugTQhMggg5hQQgrg+gehiIgEgRQgWAagdAUQgrAghAAUQgmAMhQAQQhaASgxADQg6ACgvgMIgaAJIh5AgIiCAhQgnAHgiABQgJAogXAlQgoBBhCAdQgkAQgwAHQgjAEg0AAQg9AAgogFgAExHNQBNAeA3A7QApAsAXA2QAJAVAGAWQALAJAKALQA4A6ALBMIAJgCQgLhDAWg+QAOgnADgMQAEgTgCgnQgBg2ADgvQADhGARgoQAUgtAxgqQAjgfAmgRQAFgtARg6QAlh6AEgmQACgUAAg/QAAg0AGgfIAEgSQgKgLgIgNQgTgdgUgyQgLgWgbhCQgjhQgLgsIgEgVQgDgMgFgIQgFgKgLgMIgTgVIgJgMIgTAAQhFgDg2glQgWgPgdgcIgxgtQgZgVgdgSQAUA5gJA/QgLBNgxA2QgyA2hMARQhMARhDgbQgXgJgdgSIgwgfIgjgWQgMAHgMAGQgsAUgxACQgyACgtgRQghgMgngbIgUgPQgaAHgbABQhFADhegoQgjgQgdgRQgSAfgbAmQgmAyggAYQgnAfgyAMQgzANgxgJQgqgGgmgWQgmgWgcggQgbghgPgpQgQgpAAgqQAAgWAHguQAHgxAMgdQAPgoAeghIAHgIQgmgLgigUIgEADQgvAnhAAMQg/AMg7gTQgQgFgsgTQglgRgXgFQgWgGgdgBIgRgBQALAPAIANQAaAtAIAzQAIA1gMAxQgGAbgLAaQArgGAsAKQA9APA0ArQAyArAbA7QAgBHgIBIQgHA6ggAxQggAzgzAcQhVAxhpgeQhngdg4hUQgSgdgLgfQgTAVgWAQQgYBBg1AtIgUASQgMAKgFAKQgGANgBAhIgBB0QAAA0AHAZQAGATARAaIAAABQAugJAwAHQA7AIAzAeQAkAVAkAkQAaAaAiArQApAyASARQAlAjAlAIQAPADAUAAIAjAAQBNAAA5AYQA/AbAoA7QAmA1AGA+QANAHANAJQA3AlAaA3QARAkAHAvIAAABQApgyA9ghQBog5CmgJQA9gEAtAFQAcACAZAHQAqgSBlgeQBqgfA8gJQAdg/A6gtQBCgyBQgKQATgDATAAQA7AAA7AXgAsavSIAHACIALgXIgSAVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:154.5225,y:33.7084}).wait(1).to({graphics:mask_graphics_1,x:109.5955,y:32.7579}).wait(1).to({graphics:mask_graphics_2,x:107.8887,y:64.3414}).wait(1).to({graphics:mask_graphics_3,x:99.0828,y:103.9077}).wait(1).to({graphics:mask_graphics_4,x:99.0828,y:122.586}).wait(1).to({graphics:mask_graphics_5,x:181.5014,y:148.9375}).wait(1).to({graphics:mask_graphics_6,x:200.9353,y:148.9375}).wait(1).to({graphics:mask_graphics_7,x:203.7724,y:148.9375}).wait(1).to({graphics:mask_graphics_8,x:203.7724,y:148.9375}).wait(1).to({graphics:mask_graphics_9,x:210.7363,y:148.9375}).wait(1).to({graphics:mask_graphics_10,x:224.0492,y:148.9375}).wait(1).to({graphics:mask_graphics_11,x:255.2676,y:148.9375}).wait(1).to({graphics:mask_graphics_12,x:255.2676,y:148.9375}).wait(1).to({graphics:mask_graphics_13,x:255.2676,y:148.9375}).wait(1).to({graphics:mask_graphics_14,x:255.2676,y:148.9375}).wait(1).to({graphics:mask_graphics_15,x:255.2676,y:148.9375}).wait(50));

	// Слой_1
	this.instance = new lib.pig();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.7,4.5,477.3,288.9);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_1 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_2 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_3 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_4 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_5 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_6 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_7 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_8 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_9 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_10 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_11 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_12 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_13 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_14 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_15 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_16 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_17 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_18 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_19 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_20 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_21 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_22 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_23 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_24 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_25 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_26 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");
	var mask_graphics_27 = new cjs.Graphics().p("AgTbyMAAAg3jIAnAAMAAAA3jg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2,y:-177.7723}).wait(1).to({graphics:mask_graphics_1,x:2,y:-177.7}).wait(1).to({graphics:mask_graphics_2,x:2,y:-177.1943}).wait(1).to({graphics:mask_graphics_3,x:2,y:-175.8214}).wait(1).to({graphics:mask_graphics_4,x:2,y:-173.148}).wait(1).to({graphics:mask_graphics_5,x:2,y:-168.7404}).wait(1).to({graphics:mask_graphics_6,x:2,y:-162.1652}).wait(1).to({graphics:mask_graphics_7,x:2,y:-152.9887}).wait(1).to({graphics:mask_graphics_8,x:2,y:-140.7776}).wait(1).to({graphics:mask_graphics_9,x:2,y:-125.0982}).wait(1).to({graphics:mask_graphics_10,x:2,y:-105.517}).wait(1).to({graphics:mask_graphics_11,x:2,y:-81.6006}).wait(1).to({graphics:mask_graphics_12,x:2,y:-52.9152}).wait(1).to({graphics:mask_graphics_13,x:2,y:-19.0275}).wait(1).to({graphics:mask_graphics_14,x:2,y:19.0329}).wait(1).to({graphics:mask_graphics_15,x:2,y:52.9206}).wait(1).to({graphics:mask_graphics_16,x:2,y:81.606}).wait(1).to({graphics:mask_graphics_17,x:2,y:105.5225}).wait(1).to({graphics:mask_graphics_18,x:2,y:125.1036}).wait(1).to({graphics:mask_graphics_19,x:2,y:140.783}).wait(1).to({graphics:mask_graphics_20,x:2,y:152.9942}).wait(1).to({graphics:mask_graphics_21,x:2,y:162.1706}).wait(1).to({graphics:mask_graphics_22,x:2,y:168.7458}).wait(1).to({graphics:mask_graphics_23,x:2,y:173.1534}).wait(1).to({graphics:mask_graphics_24,x:2,y:175.8268}).wait(1).to({graphics:mask_graphics_25,x:2,y:177.1997}).wait(1).to({graphics:mask_graphics_26,x:2,y:177.7054}).wait(1).to({graphics:mask_graphics_27,x:2,y:177.7765}).wait(27));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7A600").s().p("AuwAUIAAgnIdhAAIAAAng");
	this.shape.setTransform(2,177.7777,1.8807,1,90);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,4,355.6);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_1 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_2 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_3 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_4 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_5 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_6 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_7 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_8 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_9 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_10 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_11 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_12 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_13 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_14 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_15 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_16 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_17 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_18 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_19 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_20 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");
	var mask_graphics_21 = new cjs.Graphics().p("AuwAUIAAgnIdhAAIAAAng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-94.525,y:2}).wait(1).to({graphics:mask_graphics_1,x:-68.7835,y:2}).wait(1).to({graphics:mask_graphics_2,x:-45.4916,y:2}).wait(1).to({graphics:mask_graphics_3,x:-24.5269,y:2}).wait(1).to({graphics:mask_graphics_4,x:-5.7668,y:2}).wait(1).to({graphics:mask_graphics_5,x:10.911,y:2}).wait(1).to({graphics:mask_graphics_6,x:25.6292,y:2}).wait(1).to({graphics:mask_graphics_7,x:38.5102,y:2}).wait(1).to({graphics:mask_graphics_8,x:49.6764,y:2}).wait(1).to({graphics:mask_graphics_9,x:59.2504,y:2}).wait(1).to({graphics:mask_graphics_10,x:67.3545,y:2}).wait(1).to({graphics:mask_graphics_11,x:74.1114,y:2}).wait(1).to({graphics:mask_graphics_12,x:79.6435,y:2}).wait(1).to({graphics:mask_graphics_13,x:84.0733,y:2}).wait(1).to({graphics:mask_graphics_14,x:87.5231,y:2}).wait(1).to({graphics:mask_graphics_15,x:90.1157,y:2}).wait(1).to({graphics:mask_graphics_16,x:91.9733,y:2}).wait(1).to({graphics:mask_graphics_17,x:93.2185,y:2}).wait(1).to({graphics:mask_graphics_18,x:93.9738,y:2}).wait(1).to({graphics:mask_graphics_19,x:94.3617,y:2}).wait(1).to({graphics:mask_graphics_20,x:94.5046,y:2}).wait(1).to({graphics:mask_graphics_21,x:94.525,y:2}).wait(56));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7A600").s().p("AuwAUIAAgnIdhAAIAAAng");
	this.shape.setTransform(94.525,2);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,189.1,4);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AyDGwQgJgbgThhQg0gygRgcQgig2gFhVIgWlqQEqhtKog6QL+hCNzAlQgHEjgHBjQgEA/gxA3QgaAdguAiQgDATgCArQgCAlgEASQgNA3g9ALUgBfAASgg8ACwIgBAAQgZAAgQgxg");
	var mask_graphics_1 = new cjs.Graphics().p("AyDGwQgJgbgThiQg0gxgRgcQghg2gGhVIgWlqQEqhtKog6QL+hCNzAlQgHEjgHBjQgEA/gxA3QgaAdguAiQgDATgCArQgCAlgEASQgNA3g9ALUgBfAASgg8ACwIgBAAQgZAAgQgxg");
	var mask_graphics_2 = new cjs.Graphics().p("AyDGvQgJgagThiQg0gxgRgcQghg2gFhVIgXlqQEqhsKog7QL+hCNzAlQgHEkgHBiQgFA/gwA3QgaAdgvAiQgCATgDArQgCAlgEASQgMA2g9AMUgBfAASgg8ACwIgBAAQgYAAgRgyg");
	var mask_graphics_3 = new cjs.Graphics().p("AyCGvQgJgbgThhQg0gygRgbQghg2gGhWIgWloQEqhtKng6QL9hCNzAlQgHEjgHBiQgEA/gxA3QgaAdguAiQgDATgCArQgCAlgEARQgNA3g8AMUgBgAASgg6ACvIgBAAQgZAAgQgxg");
	var mask_graphics_4 = new cjs.Graphics().p("AyBGtQgJgagThhQg0gxgRgcQghg2gFhVIgXloQEqhsKng6QL8hBNyAlQgHEhgHBiQgFA/gwA3QgaAdgvAiQgCASgDArQgCAlgEASQgMA2g9AMUgBfAASgg4ACvIgBAAQgYAAgRgyg");
	var mask_graphics_5 = new cjs.Graphics().p("Ax/GrQgIgbgUhgQg0gxgQgbQgig2gFhUIgWlmQEphrKlg6QL7hBNwAkQgHEggHBhQgEA/gxA2QgZAegvAhQgCASgDArQgCAlgEASQgMA2g9ALUgBfAASgg0ACuIgBAAQgYAAgRgxg");
	var mask_graphics_6 = new cjs.Graphics().p("Ax7GnQgJgagUhfQgzgxgRgbQghg1gFhUIgWljQEnhqKkg6QL5hANtAkQgGEegHBgQgFA+gwA2QgaAdguAhQgDASgCArQgCAkgEASQgNA1g8AMUgBfAARgguACtIgBAAQgYAAgQgxg");
	var mask_graphics_7 = new cjs.Graphics().p("Ax3GiQgJgZgThfQgzgwgRgbQghg0gFhTIgWlfQEmhpKig5QL1hANqAkQgGEbgHBfQgFA9gwA2QgZAcgvAhQgCASgDAqQgBAkgFARQgMA1g8ALUgBeAASggmACrIgBAAQgZAAgQgxg");
	var mask_graphics_8 = new cjs.Graphics().p("AxxGcQgJgagThdQgzgvgRgaQghg0gFhSIgWlZQEmhnKdg4QLyg/NmAjQgHEXgHBdQgEA8gwA1QgaAcguAhQgCARgDAqQgBAjgEARQgNA0g8ALUgBdAARggcACoIgBAAQgYAAgQgvg");
	var mask_graphics_9 = new cjs.Graphics().p("AxpGTQgJgYgThcQgzgugRgaQgggygFhQIgWlSQEjhmKag3QLsg9NgAjQgHEQgHBcQgEA7gwAzQgZAcgtAgQgDARgCAoQgCAjgEARQgMAzg8ALUgBdAAQggNAClIgBAAQgYAAgQgvg");
	var mask_graphics_10 = new cjs.Graphics().p("AxgGJQgJgYgShZQgzgtgQgZQghgygFhOIgVlJQEhhjKTg1QLng8NYAiQgGEJgHBaQgFA5gvAyQgZAbgtAfQgDARgCAnQgCAigEAQQgMAyg7ALQhcAQ/8CgIgBAAQgYAAgQgtg");
	var mask_graphics_11 = new cjs.Graphics().p("AxUF8QgJgXgShWQgygsgRgYQgggwgFhLIgVk/QEehfKNg0QLeg6NQAhQgHEAgGBXQgFA3guAxQgZAagtAeQgCAQgDAmQgBAhgEAQQgMAwg7AKQhbAQ/nCbIgBAAQgYAAgPgsg");
	var mask_graphics_12 = new cjs.Graphics().p("AxGFtQgJgXgShSQgxgqgRgXQgfgugFhIIgVkyQEahcKFgxQLVg4NFAfQgGD3gHBTQgEA1guAuQgZAZgsAdQgCAQgDAlQgBAfgEAPQgMAug6AKQhaAP/OCVIgBAAQgXAAgPgqg");
	var mask_graphics_13 = new cjs.Graphics().p("Aw2FbQgIgWgShOQgxgogQgWQgfgsgFhEIgVkjQEWhXJ8gvQLKg1M5AeQgHDqgGBPQgFAzgtAsQgYAYgsAbQgCAPgCAjQgCAdgEAPQgMArg4AKQhZAO+wCOIgBAAQgXAAgPgog");
	var mask_graphics_14 = new cjs.Graphics().p("AwmFJQgIgVgShKQgvgmgQgVQgfgpgEhBIgVkTQEShTJxgsQLAgzMsAdQgGDegHBKQgEAwgtAqQgXAXgrAaQgDAOgCAhQgCAcgDANQgMAqg4AJQhXAN+SCGIgBAAQgWAAgQglg");
	var mask_graphics_15 = new cjs.Graphics().p("AwYE5QgIgTgRhHQgvgkgQgUQgegngFg+IgUkGQEOhPJpgrQK3gwMhAbQgGDUgHBHQgEAugsAoQgXAVgqAZQgDANgCAgQgCAagDANQgMAog3AIQhWAO95B/IgBAAQgWAAgPgkg");
	var mask_graphics_16 = new cjs.Graphics().p("AwMEsQgIgSgRhEQgvgigPgUQgeglgFg8IgUj7QELhMJjgpQKuguMZAaQgGDLgHBEQgEAsgrAmQgXAVgqAYQgDAMgCAfQgBAZgEANQgLAmg3AIQhVAN9jB6IgBAAQgWAAgPgjg");
	var mask_graphics_17 = new cjs.Graphics().p("AwDEiQgHgSgShBQgugigPgSQgeglgEg5IgUjzQEJhJJcgnQKpgsMRAZQgGDDgGBCQgEArgsAkQgWAUgqAXQgCANgCAdQgCAYgEAMQgLAlg2AIQhVAM9RB2IgBAAQgWAAgPghg");
	var mask_graphics_18 = new cjs.Graphics().p("Av7EaQgIgSgRg/QgughgPgSQgdgjgFg4IgTjsQEGhGJZgnQKjgrMLAZQgGC+gGBAQgEApgrAkQgWATgqAWQgCAMgCAcQgCAYgDAMQgLAkg2AHQhUAM9EBzIgBAAQgVAAgPggg");
	var mask_graphics_19 = new cjs.Graphics().p("Av1ETQgIgRgRg+QgtgggPgRQgegjgEg2IgUjmQEGhGJUglQKggqMHAYQgGC5gGA/QgEAogrAjQgXATgpAWQgCALgCAcQgCAXgDAMQgLAjg1AHQhUAM85BwIgBAAQgWAAgOggg");
	var mask_graphics_20 = new cjs.Graphics().p("AvxEOQgHgRgRg9QgugegPgSQgdgigEg1IgUjiQEEhEJTglQKcgpMEAXQgGC2gGA+QgEAngrAjQgWASgpAVQgCAMgDAbQgBAXgEALQgLAjg1AHQhTAL8xBuIgBAAQgVAAgPgfg");
	var mask_graphics_21 = new cjs.Graphics().p("AvtELQgIgRgRg8QgtgfgPgRQgdghgFg1IgTjfQEDhDJRgkQKagpMBAXQgGC0gGA9QgEAmgqAiQgXASgoAWQgDALgCAbQgBAWgEAMQgLAhg1AHQhTAM8rBsIgBAAQgVAAgOgeg");
	var mask_graphics_22 = new cjs.Graphics().p("AvrEIQgIgQgRg8QgtgegPgRQgdghgEg1IgUjdQEDhCJPgkQKZgoMAAWQgGCzgGA8QgEAngrAhQgWASgpAVQgCALgCAbQgBAWgEALQgLAig1AHQhTAL8nBsIgBAAQgVAAgOgfg");
	var mask_graphics_23 = new cjs.Graphics().p("AvqEHQgIgQgRg8QgtgegOgRQgdghgFg0IgTjcQEChCJPgjQKYgpL+AXQgGCxgGA8QgEAngqAhQgWASgpAVQgCALgCAaQgCAXgDALQgLAhg1AHQhTAL8lBrIAAAAQgWAAgOgeg");
	var mask_graphics_24 = new cjs.Graphics().p("AvpEGQgIgQgRg7QgtgegPgRQgcghgFg0IgTjbQEChCJOgkQKYgoL9AXQgGCxgGA7QgEAngqAhQgWASgpAUQgCAMgCAaQgBAWgEALQgLAhg1AHQhSAL8kBrIgBAAQgVAAgOgeg");
	var mask_graphics_25 = new cjs.Graphics().p("AvpEGQgIgQgQg7QgtgegPgRQgdghgFg0IgTjbQEChCJOgjQKYgoL9AWQgGCxgGA7QgEAngqAhQgWASgpAUQgCAMgCAaQgCAWgDALQgLAhg1AHQhSAL8jBrIgBAAQgWAAgOgeg");
	var mask_graphics_26 = new cjs.Graphics().p("AvpEGQgIgQgRg7QgtgegOgRQgdghgFg0IgTjbQEChCJOgjQKXgoL+AWQgGCxgGA7QgEAngqAhQgWASgpAUQgCALgCAbQgCAWgDALQgLAhg1AHQhTAL8jBrIgBAAQgVAAgOgeg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-131.3946,y:48.1109}).wait(1).to({graphics:mask_graphics_1,x:-131.3388,y:48.1066}).wait(1).to({graphics:mask_graphics_2,x:-130.9478,y:48.0764}).wait(1).to({graphics:mask_graphics_3,x:-129.8867,y:47.9945}).wait(1).to({graphics:mask_graphics_4,x:-127.8203,y:47.8349}).wait(1).to({graphics:mask_graphics_5,x:-124.4135,y:47.5719}).wait(1).to({graphics:mask_graphics_6,x:-119.3313,y:47.1795}).wait(1).to({graphics:mask_graphics_7,x:-112.2385,y:46.6318}).wait(1).to({graphics:mask_graphics_8,x:-102.8001,y:45.903}).wait(1).to({graphics:mask_graphics_9,x:-90.6809,y:44.9673}).wait(1).to({graphics:mask_graphics_10,x:-75.5459,y:43.7986}).wait(1).to({graphics:mask_graphics_11,x:-57.0599,y:42.3713}).wait(1).to({graphics:mask_graphics_12,x:-34.8879,y:40.6593}).wait(1).to({graphics:mask_graphics_13,x:-8.6949,y:38.6369}).wait(1).to({graphics:mask_graphics_14,x:17.4982,y:36.6144}).wait(1).to({graphics:mask_graphics_15,x:39.6702,y:34.9025}).wait(1).to({graphics:mask_graphics_16,x:58.1561,y:33.4751}).wait(1).to({graphics:mask_graphics_17,x:73.2912,y:32.3065}).wait(1).to({graphics:mask_graphics_18,x:85.4103,y:31.3707}).wait(1).to({graphics:mask_graphics_19,x:94.8488,y:30.642}).wait(1).to({graphics:mask_graphics_20,x:101.9416,y:30.0943}).wait(1).to({graphics:mask_graphics_21,x:107.0238,y:29.7019}).wait(1).to({graphics:mask_graphics_22,x:110.4306,y:29.4388}).wait(1).to({graphics:mask_graphics_23,x:112.497,y:29.2793}).wait(1).to({graphics:mask_graphics_24,x:113.5581,y:29.1973}).wait(1).to({graphics:mask_graphics_25,x:113.929,y:29.1672}).wait(1).to({graphics:mask_graphics_26,x:113.9049,y:29.1629}).wait(30));

	// Слой_3
	this.instance = new lib.red11();
	this.instance.parent = this;
	this.instance.setTransform(0,-11,0.6991,1.5098);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,227.9,58.6);


(lib.Анимация19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADBFUIAAibImAAAIAACbIiTAAIAAkVIBXAAQAqhKAAlIIHBAAIAAGSIBjAAIAAEVgAhaA/ICsAAIAAkYIiRAAQAAC0gbBkg");
	this.shape.setTransform(20.4759,27.7814,0.3245,0.3245);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjRDGQhShNAAh5QAAh4BShNQBRhMCAAAQCBAABRBMQBSBNAAB4QAAB5hSBNQhRBMiBAAQiAAAhRhMgAhVhkQgiAoAAA8QAAA8AiAoQAiAoAzAAQA1AAAhgnQAignAAg+QAAg9gignQgigmg0AAQg0AAghAmg");
	this.shape_1.setTransform(-1.4863,25.2501,0.3245,0.3245);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABnEHIAAkSIjhESIiMAAIAAoNICfAAIAAEYIDokYICGAAIAAINg");
	this.shape_2.setTransform(-22.6047,25.2582,0.3245,0.3245);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AkQGDIAAr5ICfAAIAAAiQAbgUAtgMQAtgOAsAAQBlABA+BHQA+BIAABzQAACBhPBPQhPBRh/AAQg5AAgsgMIAADtgAhVjlQgcAdAAAuIAACqQAmANApgBQA8ABAmgqQAlgpAAhDQAAg7gggnQgfgmgzAAQgtAAgbAcg");
	this.shape_3.setTransform(-43.1633,28.8929,0.3245,0.3245);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ai6DFQhUhOAAh8QAAh3BLhKQBMhLB3AAQB4AABMBNQBMBPgBB4QAAAbgDAcIlwAAQAIAkAqAXQArAXA5AAQBHAAAogfIBWBWQhPBPiKAAQiEAAhUhNgAg8h2QggAYgGAkIDLAAQACglgagXQgbgWgqAAQgpAAgfAWg");
	this.shape_4.setTransform(-63.8679,25.2501,0.3245,0.3245);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABiEHIAAmSIjEAAIAAGSIifAAIAAoNIIEAAIAAINg");
	this.shape_5.setTransform(-84.1831,25.2582,0.3245,0.3245);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjvEHIAAoNICfAAIAACqICHAAQBTABAzAxQAzAwAABPQAABPgzAwQgyAzhUAAgAhQCMIBiAAQAbAAASgPQASgPAAgZQAAgYgSgQQgSgQgbAAIhiAAg");
	this.shape_6.setTransform(22.9886,-3.2418,0.3245,0.3245);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AilDGQhThMAAh5QAAh4BShOQBThMCBAAQB/AABMBLIhcBbQgmgfg8AAQg8AAglAnQgmAnAAA9QAAA8AmAoQAlAnA8AAQA9AAAlggIBcBcQhJBKiAAAQiDAAhShMg");
	this.shape_7.setTransform(4.6449,-3.2499,0.3245,0.3245);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ai7DFQhThOAAh8QgBh3BMhKQBNhLB2AAQB4AABMBNQBMBOAAB5QgBAZgCAeIlxAAQAIAkAqAXQAsAXA4AAQBIAAAogfIBVBWQhPBPiKAAQiEAAhVhNgAg8h2QggAXgGAlIDMAAQABgkgagYQgcgWgpAAQgoAAggAWg");
	this.shape_8.setTransform(-14.4695,-3.2499,0.3245,0.3245);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Aj7EHIAAoNIFEAAQBGAAAsAnQAsAmAAA8QAABRhIAnQArANAZAgQAZAjAAAuQAAA/guAnQgvAohHAAgAhbCMICDAAQAXAAAPgMQAOgMAAgVQABgSgOgNQgPgMgVAAIiGAAgAhbg4IBxAAQAWAAAOgLQAOgMAAgSQAAgSgOgNQgOgMgWABIhxAAg");
	this.shape_9.setTransform(-33.5678,-3.2418,0.3245,0.3245);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjDDmQgzgsAAhEQAAhSBJgzQBKgzByAAQAsAAAcAFIAAgVQAAgZgbgQQgagPgrAAQhPAAhAAsIhLhdQAjglBCgaQBAgXBGAAQBqAABCAzQBDAzAABRIAAFhIigAAIAAggQg/ArhXAAQhRAAgzgsgAgwA2QgeASAAAcQAAAWAUAMQAUANAeAAQArAAAagbQAagbAAgwQgegIgdAAQguAAgeARg");
	this.shape_10.setTransform(-64.4381,-3.2499,0.3245,0.3245);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABlEHIAAjOIjKAAIAADOIifAAIAAoNICfAAIAADGIDKAAIAAjGICgAAIAAINg");
	this.shape_11.setTransform(-84.088,-3.2418,0.3245,0.3245);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-12.1,124,53.6);


(lib.Анимация16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#030000").s().p("ACZCrIhgiPIgMAAIAACPIhaAAIAAiPIgMAAIhgCPIhqAAIB8i0IhyihIBjAAIBXCBIASAAIAAiBIBaAAIAACBIASAAIBXiBIBkAAIhyChIB8C0g");
	this.shape.setTransform(0.0026,0.0095,0.3959,0.3959);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-6.7,20.6,13.5);


(lib.Анимация15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#030000").s().p("ABnCrIAAjFIjYDFIhQAAIAAlVIBbAAIAADJIDbjJIBNAAIAAFVg");
	this.shape.setTransform(0.0289,-0.0001,0.3953,0.3953);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-6.7,15.3,13.5);


(lib.Анимация14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#030000").s().p("ABnCrIAAjFIjYDFIhQAAIAAlVIBbAAIAADJIDbjJIBNAAIAAFVg");
	this.shape.setTransform(0.0052,0.0291,0.3941,0.3941);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-6.7,15.3,13.5);


(lib.Анимация13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC6500").s().p("AkgEJQgeglAHguIBGnEQACgLAIgJQAJgHALgDIAGAAQAWABAKATICDEWIFIBQQAMACAHAKQAIAKAAALQABAMgHAKQgHAKgMAEInSCVQgPAEgRABQgvgBgfgjg");
	this.shape.setTransform(0.006,0.032,0.3455,0.3455);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-10.3,21.700000000000003,20.700000000000003);


(lib.Анимация12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#030000").s().p("AiWCgIAAlAIDBAAQArAAAaAYQAaAXAAAkQAAAygsAYQAaAHAQAVQAPAVAAAcQAAAmgcAYQgbAYgsAAgAhABfIBcAAQAPAAAMgKQALgJAAgQQAAgPgLgJQgLgIgQgBIhcAAgAhAgeIBQAAQASAAAIgJQAKgIAAgPQAAgOgKgIQgKgKgQABIhQAAg");
	this.shape.setTransform(67.0589,-0.2447,0.3455,0.3455);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#030000").s().p("ABJDeIAAi7IibC7IhLAAIAAlAIBWAAIAAC8ICci8IBJAAIAAFAgAhKiYQgdgaAAgrIBCAAQAAAQAKAKQALAJAQAAQAQAAALgJQALgKAAgQIBCAAQAAArgdAaQgdAaguAAQgsAAgegag");
	this.shape_1.setTransform(53.6884,-2.3608,0.3455,0.3455);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#030000").s().p("Ah0CNQgfgbAAgqQAAgxAtgeQAtgfBFAAQAbAAAXAEIAAgRQAAgSgSgNQgTgMgcABQg0AAgoAdIgpgzQAXgXAmgOQAmgOApAAQA/AAAoAfQApAfAAAxIAADXIhWAAIAAgdQgnAkg7AAQgxAAgfgagAgjAfQgWANAAATQAAAPAPAKQANAKAWAAQAdAAAVgUQATgVAAghQgSgGgZAAQgiAAgUANg");
	this.shape_2.setTransform(40.5339,-0.2447,0.3455,0.3455);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#030000").s().p("AijDsIAAnRIBWAAIAAAhQAPgSAdgKQAcgLAfAAQA9AAAnAsQAmAsAABGQAABNgwAxQgxAxhMAAQgpAAgbgLIAACVgAg5iQQgUAWAAAjIAABmQAaALAeAAQApAAAZgbQAagdAAgrQAAgogVgbQgWgaghAAQggABgUAVg");
	this.shape_3.setTransform(27.9408,2.1392,0.3455,0.3455);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#030000").s().p("ACmEUIAAhnIlEAAIAABnIhdAAIAAizIA7AAQARgYAJhUQAIhPAAi5IFaAAIAAF0IBAAAIAACzgAhfBhIC/AAIAAkpIimAAQABDTgaBWg");
	this.shape_4.setTransform(11.6423,-0.6852,0.3455,0.3455);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#030000").s().p("AhzCNQgggbAAgqQAAgxAtgeQAtgfBFAAQAbAAAYAEIAAgRQgBgSgSgNQgTgMgdABQgzAAgoAdIgogzQAWgXAmgOQAngOAoAAQBAAAAoAfQAoAfgBAxIAADXIhUAAIAAgdQgoAkg6AAQgyAAgegagAgjAfQgWANAAATQAAAQAPAJQAOAKAVAAQAeAAATgUQAVgVAAghQgTgGgZAAQghAAgVANg");
	this.shape_5.setTransform(-10.7626,-0.2447,0.3455,0.3455);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#030000").s().p("AirCZIAOg9QAGAFAMAAQAJAAAGgFQAGgFAGgOQAGgQAFgcQAIg5AAiHIEJAAIAAFAIhWAAIAAj+IhkAAQAABsgLA4QgLA3gXAVQgXAVgqAAQgdAAgSgLg");
	this.shape_6.setTransform(-24.2972,-0.1324,0.3455,0.3455);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#030000").s().p("ABJCgIAAi5IiaC5IhMAAIAAlAIBWAAIAAC9ICci9IBJAAIAAFAg");
	this.shape_7.setTransform(-37.4085,-0.2447,0.3455,0.3455);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#030000").s().p("ABHCgIAAiCIiMAAIAACCIhWAAIAAlAIBWAAIAAB9ICMAAIAAh9IBVAAIAAFAg");
	this.shape_8.setTransform(-50.969,-0.2447,0.3455,0.3455);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#030000").s().p("ABiDhIAAinIhdAAIheCnIhkAAIBkiwQgpgPgXgjQgYgkAAguQAAg/AngnQApgnA/AAIDgAAIAAHBgAhEiCQgRARAAAdQAAAeARATQASASAaAAIB6AAIAAiDIh6AAQgbAAgRASg");
	this.shape_9.setTransform(-65.7387,-2.4645,0.3455,0.3455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-10.2,144.6,20.5);


(lib.Анимация10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#030000").s().p("AhbBWIAGgVQAEADAGAAQALAAAGgKQAGgLAEgjQAFgjAAhCICHAAIAACxIgcAAIAAibIhRAAQAABCgGAhQgGAkgLALQgKAMgUAAQgMgBgJgEg");
	this.shape.setTransform(-17.8616,-1.3001,0.3455,0.3455);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#030000").s().p("Ag7BOQgRgPAAgWQAAgaAZgQQAZgQAmAAQAVAAAQAEIAAgQQAAgRgOgKQgNgLgWAAQgPAAgPAFQgQAGgKAJIgPgRQANgNAUgHQATgHAWAAQAhAAAUARQAVARAAAbIAAB3IgcAAIAAgjQgKASgRAKQgQAKgVAAQgcAAgQgOgAgeAMQgRALAAAQQAAANAMAIQAKAJASAAQAZAAAPgSQAQgTAAgZQgPgGgUAAQgaAAgSALg");
	this.shape_1.setTransform(-25.065,-1.3433,0.3455,0.3455);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#030000").s().p("AgNBZIAAibIhEAAIAAgWICjAAIAAAWIhEAAIAACbg");
	this.shape_2.setTransform(-31.5775,-1.3433,0.3455,0.3455);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#030000").s().p("AhUCDIAAkCIAbAAIAAAoQAJgUASgMQASgLAWABQAhAAAWAYQAUAXAAAoQAAAqgaAaQgZAbgpAAQgdAAgVgMIAABagAgohXQgRATAAAfIAAA1QAVANAZAAQAeAAASgUQASgSABggQAAgegQgSQgPgRgYAAQgZAAgQATg");
	this.shape_3.setTransform(-38.0641,-0.0045,0.3455,0.3455);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#030000").s().p("Ag7BOQgRgOAAgXQAAgaAYgQQAagQAlAAQAWAAAQAEIAAgQQAAgRgNgKQgOgLgWAAQgPAAgQAFQgQAGgJAJIgPgRQANgNAUgHQATgHAWAAQAhAAAUARQAVARAAAbIAAB3IgcAAIAAgjQgKASgRAKQgQAKgWAAQgbAAgQgOgAgdAMQgSALAAAQQAAANAMAIQAKAJASAAQAYAAAQgSQAQgSAAgaQgPgGgVAAQgZAAgRALg");
	this.shape_4.setTransform(-45.6994,-1.3433,0.3455,0.3455);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#030000").s().p("AhNBZIAAixIBjAAQAVAAAOAMQANANAAAUQAAAcgYANQAQAEAHALQAKAMgBAQQABAWgOANQgPANgXAAgAgxBDIBFAAQANAAAJgIQAIgJAAgNQABgNgKgIQgJgIgOAAIhDAAgAgxgMIA9AAQAOAAAIgHQAIgIAAgMQAAgMgJgHQgHgIgOAAIg9AAg");
	this.shape_5.setTransform(-52.5228,-1.3433,0.3455,0.3455);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#030000").s().p("AAvBZIhChQIgfAAIAABQIgcAAIAAixIAcAAIAABLIAgAAIA6hLIAgAAIhDBWIBKBbg");
	this.shape_6.setTransform(-59.4844,-1.3433,0.3455,0.3455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-4.5,47.5,9);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwfG2IAAtrMAg/AAAIAANrg");
	mask.setTransform(105.6,43.825);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABoFAQgtg7AAhdQAAheAtg6QAtg5BKAAQBJAAAvA5QAuA7AABdQAABcguA8QgvA7hJAAQhJAAgug7gAC2BPQgRAjAAA2QAAA3AQAjQAQAjAaAAQAaAAARgjQAQgiAAg4QAAg3gQgiQgRgjgaAAQgZAAgQAjgAk7FvIICreIB1AAIoFLegAlWgQQgug7AAhcQAAhdAug7QAtg7BJAAQBJAAAvA6QAuA8AABdQAABdguA6QgvA6hJAAQhJAAgtg6gAkJkCQgQAjAAA4QAAA2AQAjQARAjAYAAQAaAAAQgjQARgjAAg2QAAg3gRgkQgPgigbAAQgZAAgQAig");
	this.shape.setTransform(172.325,37.925);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(133.5,0,77.69999999999999,75.9), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EghpAF1IAArpMBDTAAAIAALpg");
	mask_1.setTransform(215.4,37.325);

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjDDmQgzgsAAhEQAAhSBJgzQBKgzBxAAQAwAAAZAFIAAgVQAAgZgbgQQgagPgqAAQhQAAhAAsIhLhdQAjgmBCgZQA/gXBIAAQBpAABDAzQBCAzAABRIAAFhIigAAIAAggQg/ArhXAAQhRAAgzgsgAgwA3QgdASgBAbQAAAWAUAMQAUANAfAAQArAAAagbQAZgcAAgvQgegIgcAAQgwAAgdASg");
	this.shape_1.setTransform(406.1,47.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABTEHIidjWIgjAAIAADWIifAAIAAoNICfAAIAAC+IAuAAICEi+ICyAAIi2D6IDMETg");
	this.shape_2.setTransform(350.975,47.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai6DFQhUhOAAh8QgBh3BNhKQBMhLB2AAQB4AABMBNQBMBOAAB5QAAAZgDAeIlxAAQAIAkAqAXQAsAXA4AAQBIAAAogfIBVBXQhQBOiJAAQiFAAhThNgAg8h2QggAXgGAlIDLAAQADgkgbgYQgbgWgqAAQgpAAgfAWg");
	this.shape_3.setTransform(287.3,47.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhOEHIAAmSIiqAAIAAh7IHxAAIAAB7IipAAIAAGSg");
	this.shape_4.setTransform(230.6,47.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjRDGQhShNAAh5QAAh4BShNQBRhMCAAAQCAAABTBMQBRBNAAB4QAAB5hRBNQhSBMiBAAQiAAAhRhMgAhVhkQgiAoAAA8QAAA8AiAoQAiAoAzAAQA1AAAignQAggnABg+QgBg8gggoQgjgmg0AAQgzAAgiAmg");
	this.shape_5.setTransform(172.15,47.225);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(143,19.8,287.8,54.900000000000006), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AoLByIAAjkIQWAAIAADkg");
	mask_2.setTransform(52.35,11.45);

	// Слой_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAyBxIAAh6IhmB6IgXAAIAAijIAaAAIAAB8IBnh8IAWAAIAACjgAgihRQgNgMAAgTIAUAAQAAALAIAHQAIAHALAAQAMAAAIgHQAHgHAAgLIAVAAQAAATgNAMQgOAMgVAAQgUAAgOgMg");
	this.shape_6.setTransform(97.075,11.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag9A9QgYgXABgmQgBgkAYgYQAZgXAkAAQAlAAAZAXQAYAYAAAkQAAAmgYAXQgYAXgmAAQglAAgYgXgAgpgsQgQASAAAaQAAAbAQASQARARAYAAQAZAAARgRQAQgSAAgbQAAgagQgSQgQgRgaAAQgYAAgRARg");
	this.shape_7.setTransform(76.1,14.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhHBSIAAijIBbAAQAUAAAMALQANANAAASQAAAagXALQAOAEAIAKQAIALAAAPQAAATgNANQgNAMgVAAgAgtA+IA/AAQANgBAIgHQAIgIAAgLQAAgNgJgHQgHgHgOAAIg+AAgAgtgKIA4AAQANgBAHgGQAIgHAAgLQAAgLgIgHQgHgHgNAAIg4AAg");
	this.shape_8.setTransform(56.375,14.45);

	var maskedShapeInstanceList = [this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(49.2,0,55.5,22.9), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EgiIAFrIAArVMBERAAAIAALVg");
	mask_3.setTransform(218.5,36.325);

	// Слой_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#030000").s().p("AjMEGQhQhlAAihQAAifBQhmQBPhlB9AAQB+AABPBlQBQBmAACfQAAChhQBlQhPBlh+AAQh9AAhPhlgAhjizQgnBGAABtQAABvAnBFQAmBGA9AAQA9AAAnhGQAnhFAAhvQAAhtgnhGQgnhGg9AAQg9AAgmBGg");
	this.shape_9.setTransform(408.525,36.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#030000").s().p("AAcFiIAAooIiEBLIg6hpIDeh9IBnAAIAALDg");
	this.shape_10.setTransform(350.5,36.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#030000").s().p("AiAApIAAhRIEBAAIAABRg");
	this.shape_11.setTransform(317.725,36.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#030000").s().p("Aj9EIIBNhNQA7A6BYAAQBEAAAjgeQAjgdAAg3QAAg9gpgkQgpgihFAAQg4AAhGAPIgegbIAblZIFlAAIAAByIj7AAIgMCNQAegFAogCQB1AABIBGQBIBEAABmQAABphNA8QhNA/h3gBQiCAAhoheg");
	this.shape_12.setTransform(269.65,36.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#030000").s().p("AAdFiIAAooIiFBLIg6hpIDdh9IBpAAIAALDg");
	this.shape_13.setTransform(217.1,36.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#030000").s().p("AiAApIAAhRIEBAAIAABRg");
	this.shape_14.setTransform(184.325,36.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#030000").s().p("AjMEGQhQhlAAihQAAifBQhmQBPhlB9AAQB+AABPBlQBQBmAACfQAAChhQBlQhPBlh+AAQh9AAhPhlgAhjizQgnBGAABtQAABvAnBFQAmBGA9AAQA9AAAnhGQAnhFAAhvQAAhtgnhGQgnhGg9AAQg9AAgmBGg");
	this.shape_15.setTransform(130.725,36.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#030000").s().p("AAcFiIAAooIiDBLIg8hpIDfh9IBnAAIAALDg");
	this.shape_16.setTransform(72.7,36.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#030000").s().p("AjiFnIAAhjIAigZQAXgRAzgvQA5g1AlgqQAqgwAfg6QAhg9AAgzQAAhmhzAAQhPAAg4A7IhJhKQAygxA1gZQA0gZBEAAQBtABBEA5QBFA6AABdQAAA5gaA7QgaA9gkAuQgmAygiAmQgmAogYAWIgaAUIEGAAIAABzg");
	this.shape_17.setTransform(24.225,35.85);

	var maskedShapeInstanceList = [this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,437,72.7), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("Eg5kAIdIAAw5MBzJAAAIAAQ5g");
	mask_4.setTransform(368.5,54.075);

	// Слой_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#030000").s().p("Ap1HBIAAnGIMam7IHREEIAAJ9gAjMiJIDrCFIAAFqIH5AAIAAnuIlzjPgAj8FmIC+AAIAAk3Ii+hwgAoYAvIAAE3IC+AAIAAmmg");
	this.shape_18.setTransform(63.025,44.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#030000").s().p("AgyDkIAAlwIiHAAIAAhXIFzAAIAABXIiHAAIAAFwg");
	this.shape_19.setTransform(547.75,67.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#030000").s().p("ABgDkIAAkwIjHEwIhdAAIAAnHIBlAAIAAEzIDIkzIBcAAIAAHHg");
	this.shape_20.setTransform(502.3,67.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#030000").s().p("Ai8FEIAAp+QBFgIA8AAQB+AAA/A9QA7A5AABtQAABog6BCQg7BFhiAAIAAhgQAygBAfgnQAfgmAAhCQAAg9gfgjQgjgnhDAAQgXAAgSADIAAIog");
	this.shape_21.setTransform(592.375,75.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#030000").s().p("AgzDkIAAlwIiHAAIAAhXIF1AAIAABXIiIAAIAAFwg");
	this.shape_22.setTransform(718.35,67.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#030000").s().p("AiaCxQg4g+AAhyQAAh0A4g+QA2g8BkAAQBjAAA3A8QA5A+AAB0QAAByg5A+Qg3A9hjAAQhjAAg3g9gAhUhqQgYAmAABFQAACVBsAAQA6AAAagpQAXgkAAhIQAAiWhrAAQg4AAgcArg");
	this.shape_23.setTransform(452.475,67.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#030000").s().p("AhnCuQg2g8AAhzQAAhsA7g/QA8hBBpABQAhAAAUADQAOACAYAIIAABbQgugNgzAAQgzAAgeAiQgiAmAABIQAACWCIAAQAYgBARgCIAjgIIAABVQgZAIgJACQgSAFgdAAQh6gBg6g/g");
	this.shape_24.setTransform(678.275,66.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#030000").s().p("AiCC0Qg+g9AAhvQAAj1DNAAQBkAAAtBBQAwBGgSCKIjQAAIAAhTIBuAAQACg2gWgdQgWgcgqAAQgyAAgXAqQgWAoAABQQAABXApAhQAfAYBBAAQA7AAAxgQIAABVQgbALgcAFQgfAFgqAAQhjAAg7g6g");
	this.shape_25.setTransform(637.3205,67.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#030000").s().p("AkIDqQBLghAkhNQAhhEAOhrQANhmABioIFlAAIAAJ5IhoAAIAAokIifAAQgGCzgMBLQgQBdgqBSQgXAtgqAiQgnAgguASg");
	this.shape_26.setTransform(176.25,58.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#030000").s().p("AiCC0Qg+g9AAhvQAAj1DNAAQBjAAAtBBQAwBGgRCKIjQAAIAAhTIBuAAQACg2gWgdQgWgcgrAAQgxAAgYAqQgVAoAABQQAABXApAhQAeAYBCAAQA6AAAygQIAABVQgcALgbAFQgfAFgqAAQhjAAg7g6g");
	this.shape_27.setTransform(230.8088,67.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#030000").s().p("ABZDkIAAi8IixAAIAAC8IhmAAIAAnHIBmAAIAACxICxAAIAAixIBmAAIAAHHg");
	this.shape_28.setTransform(278.075,67.05);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#030000").s().p("AiRgCIgFACIAzhAQAxAuAxAAQA8AAApguIAzA6Qg3BHhhAAQhYAAg4hDg");
	this.shape_29.setTransform(502.3,30.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#030000").s().p("AhnCuQg2g8AAhzQAAhsA7g/QA8hBBpABQAhAAAUADQAOACAYAIIAABbQgugNgzAAQgzAAgdAiQgjAmAABIQAACWCJAAQAYgBAQgCIAjgIIAABVQgZAIgJACQgSAFgdAAQh6gBg6g/g");
	this.shape_30.setTransform(321.325,66.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#030000").s().p("AgzDkIAAlwIiHAAIAAhXIF1AAIAABXIiIAAIAAFwg");
	this.shape_31.setTransform(360.85,67.05);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#030000").s().p("Ai8FEIAAp+QBFgIA8AAQB+AAA/A9QA7A5AABtQAABog6BCQg7BFhiAAIAAhgQAygBAfgnQAfgmAAhCQAAg9gfgjQgjgnhDAAQgYAAgRADIAAIog");
	this.shape_32.setTransform(405.175,75.8);

	var maskedShapeInstanceList = [this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,737,108.2), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AizCrIAAlVIFnAAIAAFVg");
	mask_5.setTransform(18.025,17.075);

	// Слой_3
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#030000").s().p("AizCrIAAlVID1AAQAsAAAdAZQAcAaAAAlQAAA1gvAaQAcAHAQAWQAQAWAAAfQAAApgdAZQgdAaguAAgAhYBlICJAAQASAAALgLQAMgKAAgQQAAgPgMgKQgLgJgSAAIiJAAgAhYggIB9AAQARAAALgJQAKgJAAgPQAAgPgKgKQgMgJgQAAIh9AAg");
	this.shape_33.setTransform(18.025,17.075);

	var maskedShapeInstanceList = [this.shape_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,36.1,34.2), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfQMAAAg+fMAlfAAAMAAAA+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,240,400), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AJAGUIgrh8QhdiHizg+IljgQIhbAeQhshzidBbIgPAtIBTBfIg7BjIhXAMIgiAlIgbBbIk7h8QouoMLLiWIPTh8IOWDYIiiLVg");
	mask.setTransform(83.539,34.275);

	// Символ 15
	this.instance = new lib.Символ15("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(117.1,64.7,0.3721,0.3721,0,0,180,45.4,34.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:160.2,y:36.95},15,cjs.Ease.cubicInOut).to({x:148.1,y:45.2},18,cjs.Ease.quadInOut).to({x:152.4,y:42.35},24,cjs.Ease.quadInOut).wait(1));

	// Символ 16
	this.instance_1 = new lib.Символ16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(103.85,64.05,0.3258,0.3258,0,0,0,50.1,57.4);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:140.2,y:14.85},15,cjs.Ease.cubicInOut).to({x:131.9,y:26.65},18,cjs.Ease.quadInOut).to({x:135.1,y:23.7},22,cjs.Ease.quadInOut).wait(1));

	// Символ 15
	this.instance_2 = new lib.Символ15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(58.7,53.25,0.3721,0.3721,23.1933,0,0,45.4,34.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:36.9,y:10.45},15,cjs.Ease.cubicInOut).to({x:45,y:20.4},18,cjs.Ease.quadInOut).to({x:41.75,y:17.45},22,cjs.Ease.quadInOut).wait(1));

	// Символ 15
	this.instance_3 = new lib.Символ15("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(55.25,72.4,0.3721,0.3721,0,0,0,45.4,34.2);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:8.05,y:38.2},15,cjs.Ease.cubicInOut).to({x:20.45,y:45.2},18,cjs.Ease.quadInOut).to({x:16.4,y:43.85},24,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-4,184.9,85.4);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("AjqERIiCohILZAAIivIhQjjhojFBog");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:68.5625,y:-5.225}).wait(115));

	// Слой_2
	this.instance = new lib.Символ14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(66.65,39.1,0.2395,0.2395,0,0,0,90.8,83.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:68.8,y:-13.05},17,cjs.Ease.cubicInOut).to({y:0.55},14,cjs.Ease.quadInOut).to({y:-8.35},22,cjs.Ease.quadInOut).to({y:-4.15},34,cjs.Ease.quadInOut).wait(28));

	// Слой_3
	this.instance_1 = new lib.Символ17("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(61.85,-6,1,1,0,0,0,84.4,27.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).wait(106));

	// Слой_1
	this.instance_2 = new lib.Символ12("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(75.55,45.95,0.3064,0.3064,0,0,0,246.6,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(129));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.9,-37.9,185,127.80000000000001);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#030000").s().p("AgEAtIAAgGIgIgCIgHgEQgDgDgCgEQgCgDAAgGIAAgjQAAgFACgEQACgEADgDIAHgEIAIgBIAAgFIAJAAIAAAFIAIABIAHAEQADADACAEQACAEAAAFIAAAjQAAAGgCADQgCAEgDADIgHAEIgIACIAAAGgAAFAeQAFgBAEgDQADgDAAgGIAAgjQAAgFgDgEQgEgDgFAAgAgMgaQgEADAAAFIAAAjQAAAGADADQADADAGABIAAg8QgFAAgDAEg");
	this.shape.setTransform(67.975,227.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAGAAAEACQAFABACAEQADADAAAFIABAMIAAAKQgBAFgCADQgEAEgEACQgEACgHAAIgHAAIAAAkgAgJAAIAGAAQAFAAACgBQADgBACgDIACgFIAAgHIAAgHIgCgGQgCgCgDgBQgCgCgEAAIgHAAg");
	this.shape_1.setTransform(62.4,227.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_2.setTransform(58.375,231.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#030000").s().p("AATAtIAAg9IAAAAIgHARIgKAWIgEAAIgJgWIgHgRIgBAAIAAA9IgKAAIAAhZIALAAIAKAcIAIAVIAAAAIAJgWIAKgbIALAAIAABZg");
	this.shape_3.setTransform(53.525,227.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_4.setTransform(47.175,227.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#030000").s().p("AATA2IAAgRIglAAIAAARIgJAAIAAgaIAEAAIADgEIACgEIACgIIABgLIABg2IAlAAIAABRIAFAAIAAAagAgGABIgCAQQgBAGgDAFIAZAAIAAhIIgSAAg");
	this.shape_5.setTransform(41.125,228.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_6.setTransform(36.975,231.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#030000").s().p("AggAtIAAhZIAKAAIAABPIASAAIAAhPIAJAAIAABPIASAAIAAhPIAKAAIAABZg");
	this.shape_7.setTransform(31.75,227.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_8.setTransform(25.225,227.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_9.setTransform(19.875,227.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_10.setTransform(12.475,227.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIApAAIAAAJIgQAAIAABQg");
	this.shape_11.setTransform(7.75,227.375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#030000").s().p("AALA3IAAg/IAAAAIgWA/IgKAAIAAhaIAKAAIAAA/IABAAIAVg/IAKAAIAABagAgHgnIgGgEQgCgCAAgDIgBgGIAIAAIABADIACADIACACIADABIADgBIADgCIACgDIABgDIAIAAIgCAGQgBADgCACIgFAEQgDABgEAAQgFAAgCgBg");
	this.shape_12.setTransform(2.9,226.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_13.setTransform(-2.425,227.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#030000").s().p("AgOAoQgGgFAAgLIAAgrIABgKIAEgIQABgEAFgCQADgCAGAAQALAAAEAGQAFAFAAAKIgLACQABgHgDgDQgCgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAFIAAAtIAAAEIACAEIADADQABACADAAQAFAAACgDQACgEAAgGIAMACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_14.setTransform(-7.3,227.375);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_15.setTransform(192.425,209.275);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_16.setTransform(187.075,209.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#030000").s().p("AAMAtIAAgoIgFAAIgEAAIgDACIgDAEQgCADgBAFIgFAaIgKAAIAFgcIADgJQACgEAEgDQgDAAgDgBIgDgFIgCgGIAAgHQAAgNAFgGQAFgHALAAIATAAIAABZgAgBghQgDABgBACIgDAGIAAAGQAAAPALAAIAJAAIAAggIgIAAQgEAAgBACg");
	this.shape_17.setTransform(173.925,209.275);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgKAAIAAhZIAKAAIAAA/IABAAIAVg/IAKAAIAABZg");
	this.shape_18.setTransform(168.5,209.275);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#030000").s().p("AAOA2IAAgRIgkAAIAAhaIAKAAIAABQIAUAAIAAhQIAKAAIAABQIAFAAIAAAbg");
	this.shape_19.setTransform(163.025,210.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_20.setTransform(157.525,209.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAFAAAFACQAEABADAEQADADAAAFIABAMIAAAKQgBAFgCADQgDAEgFACQgFACgGAAIgHAAIAAAkgAgJAAIAHAAQAEAAACgBQADgBABgDIACgFIAAgHIAAgHIgCgGQgBgCgDgBQgCgCgEAAIgHAAg");
	this.shape_21.setTransform(152.6,209.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_22.setTransform(147.325,209.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#030000").s().p("AgYAnIAFgEQACgCACgEQACgDAAgGIABgNIAAg1IAlAAIAABaIgKAAIAAhQIgSAAIAAAjIgBAUQAAAIgCAGQgCAFgEADQgCADgGACg");
	this.shape_23.setTransform(141.5,209.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_24.setTransform(136.625,209.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_25.setTransform(131.475,209.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#030000").s().p("AATA2IAAgRIglAAIAAARIgJAAIAAgaIAEAAIADgEIACgEIACgIIABgLIABg2IAlAAIAABRIAFAAIAAAagAgGABIgCAQQgBAGgDAFIAZAAIAAhIIgSAAg");
	this.shape_26.setTransform(125.475,210.15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#030000").s().p("AAMAtIAAgoIgFAAIgEAAIgDACIgDAEQgCADgBAFIgFAaIgKAAIAFgcIADgJQACgEAEgDQgDAAgDgBIgDgFIgCgGIAAgHQAAgNAFgGQAFgHALAAIATAAIAABZgAgBghQgDABgBACIgDAGIAAAGQAAAPALAAIAJAAIAAggIgIAAQgEAAgBACg");
	this.shape_27.setTransform(112.225,209.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_28.setTransform(107.025,209.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_29.setTransform(101.675,209.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#030000").s().p("AgEAtIAAhQIgPAAIAAgJIAnAAIAAAJIgOAAIAABQg");
	this.shape_30.setTransform(96.8,209.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_31.setTransform(92.275,209.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_32.setTransform(87.125,209.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_33.setTransform(81.825,209.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAGAAAEACQAFABACAEQADADABAFIAAAMIAAAKQgBAFgCADQgEAEgEACQgEACgHAAIgHAAIAAAkgAgJAAIAGAAQAFAAACgBQADgBACgDIABgFIAAgHIAAgHIgBgGQgCgCgDgBQgDgCgDAAIgHAAg");
	this.shape_34.setTransform(76.8,209.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#030000").s().p("AAKAtIAAhQIgTAAIAABQIgKAAIAAhZIAnAAIAABZg");
	this.shape_35.setTransform(71.4,209.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgJAAIAAhZIAKAAIAAA/IAAAAIAVg/IAKAAIAABZg");
	this.shape_36.setTransform(58.45,209.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgJAAIAAhZIAKAAIAAA/IAAAAIAVg/IAKAAIAABZg");
	this.shape_37.setTransform(45.4,209.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIApAAIAAAJIgQAAIAABQg");
	this.shape_38.setTransform(40.5,209.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#030000").s().p("AgOAoQgFgFgBgLIAAgrIABgKIAEgIQACgEAEgCQAEgCAFAAQALAAAEAGQAFAFAAAKIgKACQAAgHgDgDQgBgEgGAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQADgEAAgGIALACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_39.setTransform(36.1,209.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_40.setTransform(30.775,209.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_41.setTransform(25.325,209.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#030000").s().p("AgUAtIAAhZIAkAAIAAAJIgZAAIAAAbIAHAAQAGAAAFACQAFACACAEQADACABAFIABALIgBALQgBAFgDAEQgCADgFACQgEACgGAAgAgJAjIAHAAIAGgBIAEgEIACgFIABgHIgBgHIgCgFIgEgEQgDgBgDAAIgHAAg");
	this.shape_42.setTransform(20.175,209.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_43.setTransform(14.775,209.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAGAAAEACQAFABACAEQADADAAAFIABAMIAAAKQgBAFgCADQgEAEgEACQgEACgHAAIgHAAIAAAkgAgJAAIAGAAQAFAAACgBQADgBACgDIACgFIAAgHIAAgHIgCgGQgCgCgDgBQgDgCgDAAIgHAAg");
	this.shape_44.setTransform(9.75,209.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#030000").s().p("AATA2IAAgRIglAAIAAARIgJAAIAAgaIAEAAIADgEIACgEIACgIIABgLIABg2IAlAAIAABRIAFAAIAAAagAgGABIgCAQQgBAGgDAFIAZAAIAAhIIgSAAg");
	this.shape_45.setTransform(3.625,210.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_46.setTransform(-1.925,209.275);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#030000").s().p("AAJAtIAAhQIgSAAIAABQIgKAAIAAhZIAnAAIAABZg");
	this.shape_47.setTransform(-7.25,209.275);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_48.setTransform(193.625,195.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#030000").s().p("AgOAoQgFgFgBgLIAAgrIACgKIADgIQACgEAEgCQADgCAGAAQALAAAEAGQAFAFAAAKIgKACQAAgHgCgDQgDgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQACgEABgGIAKACQAAAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_49.setTransform(190.1,191.175);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_50.setTransform(185.325,191.175);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#030000").s().p("AATAtIAAg9IAAAAIgHARIgKAWIgEAAIgJgWIgHgRIgBAAIAAA9IgKAAIAAhZIALAAIAKAcIAIAVIAAAAIAJgWIAKgbIALAAIAABZg");
	this.shape_51.setTransform(179.075,191.175);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#030000").s().p("AgPAyIAXhjIAIAAIgXBjg");
	this.shape_52.setTransform(173.8,191.25);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_53.setTransform(170.825,195.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAGAAAEACQAFABACAEQADADAAAFIABAMIAAAKQgBAFgCADQgEAEgEACQgEACgHAAIgHAAIAAAkgAgJAAIAGAAQAFAAACgBQADgBACgDIACgFIAAgHIAAgHIgCgGQgCgCgDgBQgCgCgEAAIgHAAg");
	this.shape_54.setTransform(167.25,191.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAg4QAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAIAAAFAFQAFAEAAAJIAAA4QAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFghQgCACAAADIAAA5QAAADACADQACACADAAQADAAADgCQACgDAAgDIAAg5QAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_55.setTransform(152.725,191.175);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#030000").s().p("AAFAtIAAgOIgaAAIAAgJIAThCIAJAAIgSBCIAQAAIAAgYIAKAAIAAAYIAHAAIAAAJIgHAAIAAAOg");
	this.shape_56.setTransform(147.825,191.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#030000").s().p("AgFAOIADgOIgDAAIAAgMIALAAIAAAMIgGAOg");
	this.shape_57.setTransform(144.075,195.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAg4QAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAIAAAFAFQAFAEAAAJIAAA4QAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFghQgCACAAADIAAA5QAAADACADQACACADAAQADAAADgCQACgDAAgDIAAg5QAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_58.setTransform(140.425,191.175);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAgRQAAgFACgDQABgEAEgBQgEgCgBgEQgCgDAAgFIAAgMQAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAEAAADABQADABADADQACACACADQABADAAAFIAAAMQAAAFgCADQgCAEgDACQADABACAEQACADAAAFIAAARQAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFAEQgCACAAAEIAAAUQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgUQAAgEgCgCQgDgCgDAAQgDAAgCACgAgFghQgCABAAAEIAAAPQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgPQAAgEgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_59.setTransform(135.525,191.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAgRQAAgFACgDQABgEAEgBQgEgCgBgEQgCgDAAgFIAAgMQAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAEAAADABQADABADADQACACACADQABADAAAFIAAAMQAAAFgCADQgCAEgDACQADABACAEQACADAAAFIAAARQAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFAEQgCACAAAEIAAAUQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgUQAAgEgCgCQgDgCgDAAQgDAAgCACgAgFghQgCABAAAEIAAAPQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgPQAAgEgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_60.setTransform(130.625,191.175);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAgRQAAgFACgDQABgEAEgBQgEgCgBgEQgCgDAAgFIAAgMQAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAEAAADABQADABADADQACACACADQABADAAAFIAAAMQAAAFgCADQgCAEgDACQADABACAEQACADAAAFIAAARQAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFAEQgCACAAAEIAAAUQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgUQAAgEgCgCQgDgCgDAAQgDAAgCACgAgFghQgCABAAAEIAAAPQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgPQAAgEgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_61.setTransform(116.375,191.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#030000").s().p("AABAtIAAhOIgMAKIAAgLIAMgKIALAAIAABZg");
	this.shape_62.setTransform(111.475,191.175);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#030000").s().p("AAeAtIgFgbIgDgHIgEgFIgEgCIgFAAIgEAAIAAApIgJAAIAAgpIgEAAIgFAAIgEACIgEAFQgCACgBAFIgFAbIgLAAIAGgdQACgHADgEQACgFAFgBQgEgBgCgFQgDgEgCgHIgFgaIAJAAIAGAaIADAHIADAEIAFACIAEAAIAEAAIAAgnIAJAAIAAAnIAEAAIAEAAIAEgCQADgBABgDIADgHIAGgaIAJAAIgFAaQgCAHgDAEQgDAFgEABQAGABACAFQADAEACAHIAGAdg");
	this.shape_63.setTransform(95.35,191.175);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_64.setTransform(88.875,191.175);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIApAAIAAAJIgQAAIAABQg");
	this.shape_65.setTransform(84.15,191.175);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_66.setTransform(79.525,191.175);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#030000").s().p("AgYAnIAFgEQADgCABgEQACgDABgGIAAgNIAAg0IAlAAIAABZIgKAAIAAhQIgSAAIAAAkIAAATQgBAIgCAGQgCAFgEADQgDADgFACg");
	this.shape_67.setTransform(73.7,191.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#030000").s().p("AAKAtIAAhQIgTAAIAABQIgKAAIAAhZIAnAAIAABZg");
	this.shape_68.setTransform(68.6,191.175);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#030000").s().p("AgFAOIADgOIgDAAIAAgMIALAAIAAAMIgGAOg");
	this.shape_69.setTransform(55.275,195.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIAoAAIAAAJIgPAAIAABQg");
	this.shape_70.setTransform(51.95,191.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_71.setTransform(47.725,191.175);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#030000").s().p("AgYAnIAFgEQACgCACgEQACgDAAgGIABgNIAAg0IAlAAIAABZIgKAAIAAhQIgSAAIAAAkIgBATQAAAIgCAGQgCAFgEADQgCADgGACg");
	this.shape_72.setTransform(41.85,191.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAg4QAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAIAAAFAFQAFAEAAAJIAAA4QAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFghQgCACAAADIAAA5QAAADACADQACACADAAQADAAADgCQACgDAAgDIAAg5QAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_73.setTransform(27.625,191.175);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#030000").s().p("AgIAtQgEgCgCgDQgCgCgBgEIAAgJIAKgBQgBAGACADQACAEAEAAQADAAACgCQADgDAAgFIAAgOQAAgFgCgCQgCgDgEAAIgEAAIAAgIIAEAAQAEAAACgCQACgCAAgFIAAgMIAAgDIgCgDIgCgCIgDgBQgEAAgCADQgCAEAAAFIgKgBQAAgFABgDIADgHQADgDAEgBQAEgCAEAAQAEAAAEABIAEAEIAEAGIABAHIAAAKIgBAFIAAAEIgDAEIgEADIAAABIAEABIACAEIABAEIABAGIAAAMQAAAFgCAEIgFAGIgFADIgHABQgFAAgDgBg");
	this.shape_74.setTransform(22.7,191.175);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_75.setTransform(8.475,191.175);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_76.setTransform(2.775,191.175);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQAGAAAEACQAEABADAEQADADABAFIABAMIgBAKQgBAFgDADQgDAEgEACQgFACgGAAIgIAAIAAAkgAgKAAIAHAAQAEAAADgBQADgBABgDIADgFIAAgHIAAgHIgDgGQgBgCgDgBQgDgCgDAAIgIAAg");
	this.shape_77.setTransform(-2.25,191.175);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#030000").s().p("AgOAoQgGgFAAgLIAAgrIABgKIAEgIQABgEAFgCQADgCAGAAQALAAAEAGQAFAFAAAKIgLACQABgHgDgDQgCgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAFIAAAtIAAAEIACAEIADADQABACADAAQAFAAACgDQACgEAAgGIAMACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_78.setTransform(-7.3,191.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#030000").s().p("AgFAOIADgOIgDAAIAAgMIALAAIAAAMIgGAOg");
	this.shape_79.setTransform(193.825,177.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#030000").s().p("AgKAzQAGgLADgNQADgOAAgNQAAgNgDgNQgDgOgGgLIAFgCIAGALIAFANIAEAOIABAPQAAAIgBAHQgCAIgCAHIgFAMIgGAMg");
	this.shape_80.setTransform(184.5,173.675);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#030000").s().p("AgYAnIAFgEQADgCABgEQACgDABgGIABgNIAAg0IAkAAIAABZIgKAAIAAhQIgRAAIAAAkIgBATQgBAIgCAGQgCAFgDADQgDADgFACg");
	this.shape_81.setTransform(179.7,173.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_82.setTransform(174.725,173.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#030000").s().p("AgEAtIAAhQIgPAAIAAgJIAnAAIAAAJIgOAAIAABQg");
	this.shape_83.setTransform(170.05,173.075);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgJAAIAAhZIAKAAIAAA/IAAAAIAVg/IAKAAIAABZg");
	this.shape_84.setTransform(165.2,173.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#030000").s().p("AAKAtIAAhQIgTAAIAABQIgKAAIAAhZIAnAAIAABZg");
	this.shape_85.setTransform(159.75,173.075);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_86.setTransform(154.525,173.075);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_87.setTransform(149.525,173.075);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#030000").s().p("AAMA3IAAg/IgBAAIgWA/IgKAAIAAhaIAKAAIAAA/IABAAIAWg/IAKAAIAABagAgHgnIgGgEQgCgCAAgDIgBgGIAIAAIABADIACADIACACIADABIAEgBIACgCIACgDIAAgDIAIAAIgBAGQAAADgDACIgFAEQgDABgEAAQgEAAgDgBg");
	this.shape_88.setTransform(136.8,172.125);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgKAAIAAhZIALAAIAAA/IAAAAIAVg/IAKAAIAABZg");
	this.shape_89.setTransform(131.25,173.075);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_90.setTransform(126.025,173.075);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#030000").s().p("AgOAoQgFgFgBgLIAAgrIABgKIAEgIQACgEAEgCQAEgCAFAAQALAAAEAGQAFAFAAAKIgKACQAAgHgDgDQgBgEgGAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQADgEAAgGIALACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_91.setTransform(120.7,173.075);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_92.setTransform(115.275,173.075);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgJAAIAAhZIAKAAIAAA/IAAAAIAVg/IAKAAIAABZg");
	this.shape_93.setTransform(109.75,173.075);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQAFAAAFACQAFABACAEQADADABAFIABAMIgBAKQgBAFgCADQgDAEgFACQgFACgGAAIgHAAIAAAkgAgJAAIAGAAQAEAAADgBQADgBACgDIACgFIAAgHIAAgHIgCgGQgCgCgDgBQgDgCgDAAIgHAAg");
	this.shape_94.setTransform(104.6,173.075);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_95.setTransform(99.725,173.075);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#030000").s().p("AgEAtIAAhQIgPAAIAAgJIAnAAIAAAJIgOAAIAABQg");
	this.shape_96.setTransform(95,173.075);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_97.setTransform(90.375,173.075);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#030000").s().p("AATAtIAAg9IAAAAIgHARIgKAWIgEAAIgJgWIgHgRIgBAAIAAA9IgKAAIAAhZIALAAIAKAcIAIAVIAAAAIAJgWIAKgbIALAAIAABZg");
	this.shape_98.setTransform(84.175,173.075);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#030000").s().p("AgUAtIAAhZIALAAIAAAkIAHAAQAGAAAFACQAFACACAEQADACABAFIABALIgBALQgBAFgDAEQgCADgFACQgEACgGAAgAgJAjIAHAAIAGgBIAEgEIACgFIABgHIgBgHIgCgFIgEgEQgDgBgDAAIgHAAg");
	this.shape_99.setTransform(71.175,173.075);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIApAAIAAAJIgQAAIAABQg");
	this.shape_100.setTransform(66.35,173.075);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_101.setTransform(61.725,173.075);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#030000").s().p("AAKAtIAAgnIgFACIgFAAIgIgBQgDgBgDgCQgDgCgBgDQgCgEAAgGIAAghIAKAAIAAAhQAAAHADADQADABAFAAIAFAAIAEAAIAAgsIALAAIAABZg");
	this.shape_102.setTransform(56.375,173.075);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#030000").s().p("AABAtQgDgCgCgDIgEgHIgBgJIAAgUIgKAAIAAApIgKAAIAAhZIAKAAIAAAoIAKAAIAAgQIABgJQABgFACgDQACgEADgCQAEgCAGAAQAHAAAEACQAEACACADIADAIIAAAKIAAApQAAAMgEAHQgFAGgLAAQgFAAgEgBgAAFgiIgDAFIgBAFIAAAFIAAArIAAAEIABAEIADADQACACADAAQADAAACgCIADgDIACgFIAAgFIAAgsIAAgEIgBgFIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_103.setTransform(50.175,173.075);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#030000").s().p("AgYAnIAFgEQACgCACgEQACgDAAgGIABgNIAAg0IAlAAIAABZIgKAAIAAhQIgSAAIAAAkIgBATQAAAIgCAGQgCAFgEADQgCADgGACg");
	this.shape_104.setTransform(43.2,173.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_105.setTransform(38.325,173.075);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#030000").s().p("AgTAtIAAhZIATAAQAKAAAFAGQAFAGAAAMQAAAHgCAEQgDAEgFADIAAABQAGABADAFQABAGAAAIQAAAOgFAGQgGAGgLAAgAgJAkIAIAAQADAAACgBIAFgEIABgGIAAgHQAAgIgCgEQgDgEgHAAIgHAAgAgJgGIAGAAQAHAAADgEQADgDAAgHQAAgHgDgEQgDgEgHAAIgGAAg");
	this.shape_106.setTransform(32.7,173.075);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIAoAAIAAAJIgPAAIAABQg");
	this.shape_107.setTransform(20.9,173.075);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_108.setTransform(16.675,173.075);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#030000").s().p("AAeAtIgFgbIgDgHIgDgFIgFgCIgEAAIgFAAIAAApIgJAAIAAgpIgEAAIgFAAIgEACIgEAFQgCACgBAFIgGAbIgKAAIAGgdQACgHADgEQACgFAFgBQgEgBgCgFQgDgEgCgHIgGgaIAKAAIAGAaIADAHIAEAEIAEACIAEAAIAEAAIAAgnIAJAAIAAAnIAEAAIAEAAIAEgCQACgBACgDIADgHIAGgaIAJAAIgFAaQgCAHgDAEQgDAFgEABQAFABADAFQADAEACAHIAGAdg");
	this.shape_109.setTransform(9.75,173.075);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_110.setTransform(2.725,173.075);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#030000").s().p("AATAtIAAg9IAAAAIgHARIgKAWIgEAAIgJgWIgHgRIgBAAIAAA9IgKAAIAAhZIALAAIAKAcIAIAVIAAAAIAJgWIAKgbIALAAIAABZg");
	this.shape_111.setTransform(-3.575,173.075);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#030000").s().p("AAAAqQgDgGgBgGIgFgPQgBgHAAgIQAAgIABgHIAEgOIAFgNIAGgLIAFACQgGALgEAOQgCANAAANQAAANACAOQAEANAGALIgEADg");
	this.shape_112.setTransform(-8.4,173.675);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_113.setTransform(193.725,158.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQAFAAAFACQAEABADAEQADADAAAFIACAMIgBAKQgBAFgDADQgDAEgEACQgFACgGAAIgIAAIAAAkgAgKAAIAIAAQADAAADgBQADgBABgDIACgFIAAgHIAAgHIgCgGQgBgCgDgBQgCgCgEAAIgIAAg");
	this.shape_114.setTransform(190.15,154.975);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAgRQAAgFACgDQABgEAEgBQgEgCgBgEQgCgDAAgFIAAgMQAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAEAAADABQADABADADQACACACADQABADAAAFIAAAMQAAAFgCADQgCAEgDACQADABACAEQACADAAAFIAAARQAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFAEQgCACAAAEIAAAUQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgUQAAgEgCgCQgDgCgDAAQgDAAgCACgAgFghQgCABAAAEIAAAPQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgPQAAgEgCgBQgDgDgDAAQgDAAgCADg");
	this.shape_115.setTransform(182.425,154.975);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#030000").s().p("AgOAtIAWhQIgRAAIAAALIgJAAIAAgUIAlAAIAAAIIgXBRg");
	this.shape_116.setTransform(177.525,154.975);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAg4QAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAIAAAFAFQAFAEAAAJIAAA4QAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFghQgCACAAADIAAA5QAAADACADQACACADAAQADAAADgCQACgDAAgDIAAg5QAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_117.setTransform(172.625,154.975);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#030000").s().p("AgLAuIAOgoIAAAAQgDACgDAAQgEAAgDgCQgDgBgBgCIgDgFIAAgGIAAgTQAAgFABgDIAEgFIAGgEIAGgBQAJAAAEAFQAFAEAAAJIAAAPIAAAKIgCAFIgQArgAgFghQgCACAAADIAAAUQAAAEACACQACACADAAIAEgBIACgDIACgDIAAgDIAAgSQAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_118.setTransform(165.175,154.925);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#030000").s().p("AgIAtQgEgCgCgDQgCgCgBgEIgBgJIALgBQgBAGACADQACAEAEAAQAEAAACgCQACgDAAgFIAAgOQAAgFgCgCQgCgDgEAAIgEAAIAAgIIAEAAQAEAAACgCQACgCAAgFIAAgMIAAgDIgBgDIgCgCIgFgBQgDAAgCADQgCAEAAAFIgLgBQABgFABgDIAEgHQACgDAEgBQAEgCADAAQAFAAADABIAGAEIADAGIAAAHIAAAKIAAAFIAAAEIgDAEIgEADIAAABIAEABIACAEIABAEIAAAGIAAAMQAAAFgBAEIgFAGIgFADIgHABQgEAAgEgBg");
	this.shape_119.setTransform(160.25,154.975);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#030000").s().p("AgLAuIAOgoIAAAAQgDACgDAAQgEAAgDgCQgDgBgBgCIgDgFIAAgGIAAgTQAAgFABgDIAEgFIAGgEIAGgBQAJAAAEAFQAFAEAAAJIAAAPIAAAKIgCAFIgQArgAgFghQgCACAAADIAAAUQAAAEACACQACACADAAIAEgBIACgDIACgDIAAgDIAAgSQAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_120.setTransform(155.375,154.925);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#030000").s().p("AgXAOIAAgIIAvAAIAAAIgAgXgFIAAgIIAvAAIAAAIg");
	this.shape_121.setTransform(147.925,155.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#030000").s().p("AgWAvIAnhdIAHAAIgnBdgAASAtIgEgCIgCgDIgBgFIAAghIABgEIACgDIAEgDIAFAAQAFAAAEADQAEACgBAFIAAAhQABAFgEADQgEADgFAAgAAUAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIAAAgQAAABABAAQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIABgDIAAggIgBgCQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAgAgbAJIgDgCIgDgDIgCgEIAAgiIACgEIADgEIADgCIAGgBQAEABAEACQAEAEAAAEIAAAiQAAAEgEADQgEADgEAAgAgZgkIgBADIAAAhIABABIAEABIACgBIABgBIAAghIgBgDIgCgBIgEABg");
	this.shape_122.setTransform(138.95,154.95);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#030000").s().p("AgIAsIgFgEQgDgDgBgEIgBgIIALgCIAAAGIABADQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABQAEAAACgCQACgCAAgFIAAgYQAAgHgHAAQgCAAgCACIgDADIgJAAIAAguIAiAAIAAAKIgZAAIAAAbIAAAAIAFgDIAFgBQAIAAADAEQADAEAAAGIAAAYQAAAFgBAEQgBAEgDACIgGAEIgHABQgEAAgEgCg");
	this.shape_123.setTransform(132.525,155.025);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#030000").s().p("AABAtIAAhOIgMAKIAAgLIAMgKIALAAIAABZg");
	this.shape_124.setTransform(127.675,154.975);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#030000").s().p("AgPAoQgEgFgBgLIAAgrIACgKIADgIQACgEAEgCQAEgCAFAAQALAAAEAGQAFAFAAAKIgKACQAAgHgCgDQgDgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQACgEABgGIALACQgBAJgFAGQgFAFgKAAQgJAAgGgGg");
	this.shape_125.setTransform(120.35,154.975);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_126.setTransform(115.025,154.975);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_127.setTransform(109.575,154.975);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#030000").s().p("AgIAtQgDgBgDgDQgDgCgBgEQgCgEAAgFIAKgCQAAAHADADQADADAEAAIAEgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBIACgFIABgJIAAgGIgCgFIgDgEQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgFAAIAAgIIAFAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgEIACgFIAAgGIgBgHQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgDgCIgEgBQgFAAgCAEQgDAEAAAGIgKgDQABgJAFgGQAGgFAIAAQAEAAAEABQAEABADADQADADABAEQACAEAAAHIgBAGIgBAGIgCAFIgEAEIAEADQACADAAADIABAFIABAGQAAANgFAHQgFAHgLAAQgEAAgEgBg");
	this.shape_128.setTransform(104.125,154.975);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#030000").s().p("AgTAtIAAhZIATAAQAKAAAFAGQAFAGAAAMQAAAHgCAEQgDAEgFADIAAABQAGABADAFQABAGAAAIQAAAOgFAGQgGAGgLAAgAgJAkIAIAAQADAAACgBIAFgEIABgGIAAgHQAAgIgCgEQgDgEgHAAIgHAAgAgJgGIAGAAQAHAAADgEQADgDAAgHQAAgHgDgEQgDgEgHAAIgGAAg");
	this.shape_129.setTransform(99.3,154.975);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#030000").s().p("AAMA3IAAg/IgBAAIgWA/IgKAAIAAhaIAKAAIAAA/IABAAIAWg/IAKAAIAABagAgIgnIgFgEQgCgCAAgDIgCgGIAJAAIAAADIADADIACACIADABIAEgBIACgCIACgDIAAgDIAIAAIgBAGQgBADgCACIgFAEQgDABgEAAQgEAAgEgBg");
	this.shape_130.setTransform(91.25,154.025);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#030000").s().p("AATAtIAAhZIALAAIAABZgAgdAtIAAhZIALAAIAAAkIAHAAQAHAAAFACQAEACADAEQACACABAFIABALIgBALQgBAFgCAEQgDADgEACQgEACgHAAgAgSAjIAHAAIAHgBIAEgEIACgFIAAgHIAAgHIgCgFIgEgEQgDgBgEAAIgHAAg");
	this.shape_131.setTransform(84.8,154.975);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#030000").s().p("AgTAtIAAhZIATAAQAKAAAFAGQAFAGAAAMQAAAHgCAEQgDAEgEADIAAABQAFABADAFQABAGAAAIQAAAOgFAGQgGAGgLAAgAgJAkIAIAAQADAAACgBIAFgEIACgGIAAgHQgBgIgCgEQgDgEgHAAIgHAAgAgJgGIAGAAQAHAAADgEQADgDAAgHQAAgHgDgEQgDgEgHAAIgGAAg");
	this.shape_132.setTransform(78.6,154.975);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAFAAAFACQAEABADAEQADADAAAFIABAMIAAAKQgBAFgCADQgDAEgFACQgFACgGAAIgIAAIAAAkgAgKAAIAIAAQADAAADgBQADgBABgDIACgFIAAgHIAAgHIgCgGQgBgCgDgBQgCgCgEAAIgIAAg");
	this.shape_133.setTransform(73.5,154.975);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_134.setTransform(68.625,154.975);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#030000").s().p("AAJAtIAAhQIgSAAIAABQIgKAAIAAhZIAnAAIAABZg");
	this.shape_135.setTransform(63.35,154.975);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_136.setTransform(56.825,158.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#030000").s().p("AgWAvIAnhdIAHAAIgnBdgAASAtIgEgCIgCgDIgBgFIAAghIABgEIACgDIAEgDIAFAAQAFAAAEADQAEACgBAFIAAAhQABAFgEADQgEADgFAAgAAUAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBABAAAAIAAAgQAAABABAAQAAABAAAAQAAABAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIABgDIAAggIgBgCQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAgAgbAJIgDgCIgDgDIgCgEIAAgiIACgEIADgEIADgCIAGgBQAEABAEACQAEAEAAAEIAAAiQAAAEgEADQgEADgEAAgAgZgkIgBADIAAAhIABABIAEABIACgBIABgBIAAghIgBgDIgCgBIgEABg");
	this.shape_137.setTransform(51.65,154.95);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#030000").s().p("AgOAtIAWhQIgRAAIAAALIgJAAIAAgUIAlAAIAAAIIgXBRg");
	this.shape_138.setTransform(45.275,154.975);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#030000").s().p("AgFANIADgNIgDAAIAAgNIALAAIAAANIgGANg");
	this.shape_139.setTransform(41.525,159.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#030000").s().p("AABAtIAAhOIgMAKIAAgLIAMgKIALAAIAABZg");
	this.shape_140.setTransform(37.875,154.975);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_141.setTransform(30.325,154.975);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_142.setTransform(25.325,154.975);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQALAAAFAGQAFAGAAAMQAAAHgCAEQgCAEgFADIAAABQAFABACAFQADAGAAAIQAAAOgGAGQgGAGgLAAgAgKAkIAIAAQAEAAADgBIADgEIADgGIAAgHQAAgIgDgEQgDgEgHAAIgIAAgAgKgGIAIAAQAFAAAEgEQADgDAAgHQAAgHgDgEQgDgEgGAAIgIAAg");
	this.shape_143.setTransform(19.7,154.975);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_144.setTransform(14.425,154.975);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#030000").s().p("AgEAtIAAhQIgPAAIAAgJIAnAAIAAAJIgPAAIAABQg");
	this.shape_145.setTransform(9.75,154.975);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#030000").s().p("AgPAoQgEgFAAgLIAAgrIABgKIACgIQACgEAFgCQAEgCAFAAQAKAAAGAGQAEAFAAAKIgLACQABgHgCgDQgCgEgGAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQABACADAAQAFAAACgDQACgEAAgGIALACQAAAJgFAGQgFAFgKAAQgJAAgGgGg");
	this.shape_146.setTransform(5.35,154.975);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#030000").s().p("AgFANIADgNIgDAAIAAgNIALAAIAAANIgGANg");
	this.shape_147.setTransform(-1.125,159.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_148.setTransform(-3.625,158.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQAFAAAFACQAEABADAEQADADABAFIABAMIgBAKQgBAFgDADQgDAEgEACQgFACgGAAIgIAAIAAAkgAgKAAIAHAAQAEAAADgBQADgBABgDIADgFIAAgHIAAgHIgDgGQgBgCgDgBQgDgCgDAAIgIAAg");
	this.shape_149.setTransform(-7.2,154.975);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAg4QAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAIAAAFAFQAFAEAAAJIAAA4QAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFghQgCACAAADIAAA5QAAADACADQACACADAAQADAAADgCQACgDAAgDIAAg5QAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_150.setTransform(192.575,136.875);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#030000").s().p("AgSAuIAAgJIAXguQACgEABgEIAAgHIAAgEIgBgDIgDgDIgEgBQgEAAgCAEQgCAEAAAHIAAABIgKgCIAAgBIABgJIADgHQADgDADgCQAEgCAEAAQAFAAAEACIAGAEIACAGIABAJQAAAKgEAKIgUAoIAYAAIAAAKg");
	this.shape_151.setTransform(187.7,136.825);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#030000").s().p("AgIAsIgFgEQgDgDgBgEIgBgIIALgCIAAAGIABADQAAABABAAQAAABAAAAQAAAAABABQAAAAABAAIADABQAEAAACgCQACgCAAgFIAAgYQAAgHgHAAQgCAAgCACIgDADIgJAAIAAguIAiAAIAAAKIgZAAIAAAbIAAAAIAFgDIAFgBQAIAAADAEQADAEAAAGIAAAYQAAAFgBAEQgBAEgDACIgGAEIgHABQgEAAgEgCg");
	this.shape_152.setTransform(182.725,136.925);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAg4QAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAIAAAFAFQAFAEAAAJIAAA4QAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFghQgCACAAADIAAA5QAAADACADQACACADAAQADAAADgCQACgDAAgDIAAg5QAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_153.setTransform(173.525,136.875);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#030000").s().p("AgGAtIgGgEQgCgCgCgDQgBgDAAgFIAAgPIAAgKIACgFIAQgrIAKAAIgOAoIABAAQACgCAEAAIAHABIAEAEIADAFIAAAGIAAATQAAAEgBAEQgCADgCACIgGAEIgHABIgGgBgAgDACIgCADIgCADIAAADIAAASQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgUQAAgEgCgCQgCgBgEAAIgDAAg");
	this.shape_154.setTransform(168.625,136.925);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#030000").s().p("AgRAuIAAgJIAWguQACgEABgEIAAgHIAAgEIgBgDIgDgDIgEgBQgEAAgCAEQgCAEAAAHIAAABIgJgCIAAgBIAAgJIADgHQADgDADgCQAEgCAEAAQAFAAAEACIAGAEIADAGIAAAJQABAKgGAKIgTAoIAYAAIAAAKg");
	this.shape_155.setTransform(163.75,136.825);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#030000").s().p("AgGAtIgGgEQgCgCgCgDQgBgDAAgFIAAgPIAAgKIACgFIAQgrIAKAAIgOAoIABAAQACgCAEAAIAHABIAEAEIADAFIAAAGIAAATQAAAEgBAEQgCADgCACIgGAEIgHABIgGgBgAgDACIgCADIgCADIAAADIAAASQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgUQAAgEgCgCQgCgBgEAAIgDAAg");
	this.shape_156.setTransform(154.475,136.925);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#030000").s().p("AgFAZIAAgLIALAAIAAALgAgFgMIAAgNIALAAIAAANg");
	this.shape_157.setTransform(146.375,138.85);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#030000").s().p("AAMAtIAAg+IgBAAIgWA+IgKAAIAAhZIAKAAIAAA/IABAAIAWg/IAJAAIAABZg");
	this.shape_158.setTransform(142.4,136.875);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_159.setTransform(137.175,136.875);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#030000").s().p("AgYAnIAFgEQACgCACgEQACgDAAgFIACgPIAAgzIAkAAIAABZIgKAAIAAhQIgRAAIAAAkIgCATQAAAJgCAEQgCAGgDADQgEADgEADg");
	this.shape_160.setTransform(130.9,137);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_161.setTransform(126.325,136.875);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#030000").s().p("AATA2IAAgSIglAAIAAASIgJAAIAAgaIAEgBIADgCIACgGIACgIIABgLIABg1IAlAAIAABQIAFAAIAAAbgAgGABIgCAQQgBAHgDADIAZAAIAAhHIgSAAg");
	this.shape_162.setTransform(120.325,137.75);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#030000").s().p("AgEAtIAAhQIgPAAIAAgJIAnAAIAAAJIgOAAIAABQg");
	this.shape_163.setTransform(115.35,136.875);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_164.setTransform(110.575,136.875);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#030000").s().p("AgIAtQgDgBgDgDQgDgCgBgEQgCgEAAgFIAKgCQAAAHADADQADADAEAAIAEgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBIACgFIABgJIAAgGIgCgFIgDgEQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgFAAIAAgIIAFAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgEIACgFIAAgGIgBgHQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBIgDgCIgEgBQgFAAgCAEQgDAEAAAGIgKgDQABgJAFgGQAGgFAIAAQAEAAAEABQAEABADADQADADABAEQACAEAAAHIgBAGIgBAGIgCAFIgEAEIAEADQACADAAADIABAFIABAGQAAANgFAHQgFAHgLAAQgEAAgEgBg");
	this.shape_165.setTransform(100.875,136.875);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_166.setTransform(96.525,136.875);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#030000").s().p("AgUAtIAAhZIAkAAIAAAJIgZAAIAAAbIAHAAQAGAAAFACQAFACACAEQADACABAFIABALIgBALQgBAFgDAEQgCADgFACQgEACgGAAgAgJAjIAHAAIAGgBIAEgEIACgFIABgHIgBgHIgCgFIgEgEQgDgBgDAAIgHAAg");
	this.shape_167.setTransform(91.525,136.875);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#030000").s().p("AATAtIAAhZIALAAIAABZgAgdAtIAAhZIALAAIAAAkIAIAAQAHAAADACQAFACACAEQADACABAFIABALIgBALQgBAFgDAEQgCADgFACQgDACgHAAgAgSAjIAHAAIAIgBIADgEIABgFIABgHIgBgHIgBgFIgDgEQgDgBgFAAIgHAAg");
	this.shape_168.setTransform(80.8,136.875);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAFAAAFACQAEABADAEQADADAAAFIABAMIAAAKQgBAFgCADQgDAEgFACQgFACgGAAIgIAAIAAAkgAgKAAIAIAAQADAAADgBQADgBABgDIACgFIAAgHIAAgHIgCgGQgBgCgDgBQgCgCgEAAIgIAAg");
	this.shape_169.setTransform(74.85,136.875);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgJAAIAAhZIAKAAIAAA/IAAAAIAVg/IAKAAIAABZg");
	this.shape_170.setTransform(69.35,136.875);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIApAAIAAAJIgQAAIAABQg");
	this.shape_171.setTransform(64.45,136.875);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAFAAAFACQAEABADAEQADADAAAFIABAMIAAAKQgBAFgDADQgCAEgFACQgFACgGAAIgHAAIAAAkgAgJAAIAHAAQADAAADgBQADgBABgDIACgFIAAgHIAAgHIgCgGQgBgCgDgBQgCgCgEAAIgHAAg");
	this.shape_172.setTransform(60,136.875);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_173.setTransform(54.725,136.875);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#030000").s().p("AgTAtIAAhZIATAAQAKAAAFAGQAFAGAAAMQAAAHgCAEQgDAEgFADIAAABQAHABABAFQACAGAAAIQABAOgGAGQgGAGgLAAgAgJAkIAIAAQADAAADgBIADgEIACgGIAAgHQABgIgDgEQgDgEgHAAIgHAAgAgJgGIAHAAQAFAAAEgEQADgDAAgHQAAgHgDgEQgDgEgGAAIgHAAg");
	this.shape_174.setTransform(49.55,136.875);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_175.setTransform(44.375,136.875);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#030000").s().p("AgUAtIAAhZIALAAIAAAkIAHAAQAGAAAFACQAFACACAEQADACABAFIABALIgBALQgBAFgDAEQgCADgFACQgEACgGAAgAgJAjIAHAAIAGgBIAEgEIACgFIABgHIgBgHIgCgFIgEgEQgDgBgDAAIgHAAg");
	this.shape_176.setTransform(34.625,136.875);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIApAAIAAAJIgQAAIAABQg");
	this.shape_177.setTransform(29.8,136.875);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#030000").s().p("AgOAoQgFgFgBgLIAAgrIACgKIADgIQACgEAEgCQADgCAGAAQALAAAEAGQAFAFAAAKIgKACQAAgHgCgDQgDgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQACgEABgGIAKACQAAAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_178.setTransform(25.4,136.875);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_179.setTransform(20.075,136.875);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#030000").s().p("AATAtIAAg9IAAAAIgHARIgKAWIgEAAIgJgWIgHgRIgBAAIAAA9IgKAAIAAhZIALAAIAKAcIAIAVIAAAAIAJgWIAKgbIALAAIAABZg");
	this.shape_180.setTransform(13.775,136.875);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgJAAIAAhZIAKAAIAAA/IAAAAIAVg/IALAAIAABZg");
	this.shape_181.setTransform(7.35,136.875);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_182.setTransform(1.875,136.875);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIApAAIAAAJIgPAAIAABQg");
	this.shape_183.setTransform(-2.9,136.875);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#030000").s().p("AgOAoQgGgFAAgLIAAgrIABgKIAEgIQABgEAFgCQADgCAGAAQALAAAEAGQAFAFAAAKIgLACQABgHgDgDQgCgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAFIAAAtIAAAEIACAEIADADQABACADAAQAFAAACgDQACgEAAgGIAMACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_184.setTransform(-7.3,136.875);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_185.setTransform(193.775,122.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#030000").s().p("AAMAtIAAg+IgBAAIgWA+IgKAAIAAhZIAKAAIAAA/IABAAIAWg/IAKAAIAABZg");
	this.shape_186.setTransform(189.8,118.775);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#030000").s().p("AATAtIAAg9IAAAAIgHARIgKAWIgEAAIgJgWIgHgRIgBAAIAAA9IgKAAIAAhZIALAAIAKAcIAIAVIAAAAIAJgWIAKgbIALAAIAABZg");
	this.shape_187.setTransform(183.375,118.775);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#030000").s().p("AgUAtIAAhZIALAAIAAAkIAHAAQAGAAAFACQAFACACAEQADACABAFIABALIgBALQgBAFgDAEQgCADgFACQgEACgGAAgAgJAjIAHAAIAGgBIAEgEIACgFIABgHIgBgHIgCgFIgEgEQgDgBgDAAIgHAAg");
	this.shape_188.setTransform(177.325,118.775);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#030000").s().p("AgEAtIAAhQIgPAAIAAgJIAnAAIAAAJIgOAAIAABQg");
	this.shape_189.setTransform(172.5,118.775);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_190.setTransform(168.275,118.775);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#030000").s().p("AATA2IAAgSIglAAIAAASIgJAAIAAgaIAEAAIADgDIACgGIACgIIABgLIABg1IAlAAIAABRIAFAAIAAAagAgGABIgCAQQgBAHgDAEIAZAAIAAhIIgSAAg");
	this.shape_191.setTransform(162.275,119.65);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#030000").s().p("AgOAoQgGgFAAgLIAAgrIABgKIAEgIQACgEAEgCQAEgCAFAAQALAAAEAGQAFAFAAAKIgKACQAAgHgDgDQgCgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAFIAAAtIAAAEIACAEIADADQACACACAAQAFAAACgDQADgEAAgGIALACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_192.setTransform(144,118.775);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#030000").s().p("AALA3IAAg/IAAAAIgWA/IgJAAIAAhaIAKAAIAAA/IAAAAIAVg/IAKAAIAABagAgHgnIgGgEQgCgCgBgDIgBgGIAJAAIABADIABADIADACIADABIADgBIADgCIACgDIABgDIAIAAIgBAGQgBADgDACIgFAEQgDABgEAAQgEAAgDgBg");
	this.shape_193.setTransform(125.5,117.825);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_194.setTransform(120.575,118.775);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#030000").s().p("AATAtIAAg9IAAAAIgHARIgKAWIgEAAIgJgWIgHgRIgBAAIAAA9IgKAAIAAhZIALAAIAKAcIAIAVIAAAAIAJgWIAKgbIALAAIAABZg");
	this.shape_195.setTransform(114.325,118.775);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_196.setTransform(108.525,118.775);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#030000").s().p("AgOAoQgFgFgBgLIAAgrIABgKIAEgIQACgEAEgCQAEgCAFAAQALAAAEAGQAFAFAAAKIgKACQAAgHgDgDQgBgEgGAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQADgEAAgGIALACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_197.setTransform(103.6,118.775);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#030000").s().p("AAMAtIAAgoIgFAAIgEAAIgDACIgDAEQgCADgBAFIgFAaIgKAAIAFgcIADgJQACgEAEgDQgDAAgDgBIgDgFIgCgGIAAgHQAAgNAFgGQAFgHALAAIATAAIAABZgAgBghQgDABgBACIgDAGIAAAGQAAAPALAAIAJAAIAAggIgIAAQgEAAgBACg");
	this.shape_198.setTransform(84.975,118.775);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#030000").s().p("AgYAnIAFgEQACgCACgDQACgEAAgFIABgPIAAg0IAlAAIAABaIgKAAIAAhQIgSAAIAAAjIgBAUQAAAJgCAEQgCAGgEADQgDADgEADg");
	this.shape_199.setTransform(79.05,118.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#030000").s().p("AATA2IAAgSIglAAIAAASIgJAAIAAgaIAEAAIADgDIACgGIACgIIABgLIABg1IAlAAIAABRIAFAAIAAAagAgGABIgCAQQgBAHgDAEIAZAAIAAhIIgSAAg");
	this.shape_200.setTransform(73.225,119.65);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_201.setTransform(54.725,118.775);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_202.setTransform(49.725,118.775);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#030000").s().p("AAfAtIgHgbIgCgHIgDgFIgFgCIgEAAIgFAAIAAApIgJAAIAAgpIgEAAIgFAAIgEACIgEAFQgCACgBAFIgGAbIgKAAIAHgdQABgHADgEQADgFAEgBQgDgBgDgFQgDgEgBgHIgHgaIAKAAIAGAaIADAHIAEAEIAEACIAEAAIAEAAIAAgnIAJAAIAAAnIAEAAIAEAAIAEgCQACgBACgDIADgHIAGgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAHAdg");
	this.shape_203.setTransform(42.4,118.775);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAFAAAFACQAEABADAEQADADAAAFIABAMIAAAKQgBAFgDADQgCAEgFACQgFACgGAAIgIAAIAAAkgAgKAAIAIAAQADAAADgBQADgBABgDIACgFIAAgHIAAgHIgCgGQgBgCgDgBQgCgCgEAAIgIAAg");
	this.shape_204.setTransform(35.7,118.775);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_205.setTransform(30.825,118.775);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#030000").s().p("AATA2IAAgSIglAAIAAASIgJAAIAAgaIAEAAIADgDIACgGIACgIIABgLIABg1IAlAAIAABRIAFAAIAAAagAgGABIgCAQQgBAHgDAEIAZAAIAAhIIgSAAg");
	this.shape_206.setTransform(24.825,119.65);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#030000").s().p("AATA2IAAgSIglAAIAAASIgJAAIAAgaIAEAAIADgDIACgGIACgIIABgLIABg1IAlAAIAABRIAFAAIAAAagAgGABIgCAQQgBAHgDAEIAZAAIAAhIIgSAAg");
	this.shape_207.setTransform(18.575,119.65);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_208.setTransform(13.025,118.775);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#030000").s().p("AAJAtIAAhQIgSAAIAABQIgKAAIAAhZIAnAAIAABZg");
	this.shape_209.setTransform(7.7,118.775);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#030000").s().p("AgOAoQgGgFAAgLIAAgrIABgKIAEgIQACgEAEgCQAEgCAFAAQALAAAEAGQAFAFAAAKIgKACQAAgHgDgDQgCgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAFIAAAtIAAAEIACAEIADADQACACACAAQAFAAACgDQADgEAAgGIALACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_210.setTransform(2.7,118.775);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_211.setTransform(-2.625,118.775);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#030000").s().p("AgRAtIAAhZIAjAAIAAAJIgZAAIAABQg");
	this.shape_212.setTransform(-7.425,118.775);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#030000").s().p("AgFAaIAAgMIALAAIAAAMgAgFgMIAAgNIALAAIAAANg");
	this.shape_213.setTransform(193.775,102.65);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAg4QAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAIAAAFAFQAFAEAAAJIAAA4QAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFghQgCACAAADIAAA5QAAADACADQACACADAAQADAAADgCQACgDAAgDIAAg5QAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_214.setTransform(190.125,100.675);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAg4QAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAIAAAFAFQAFAEAAAJIAAA4QAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFghQgCACAAADIAAA5QAAADACADQACACADAAQADAAADgCQACgDAAgDIAAg5QAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_215.setTransform(185.225,100.675);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#030000").s().p("AgGAtIgGgDQgCgCgCgEQgBgDAAgEIAAg4QAAgFABgDQACgDACgCQADgDADgBQADgBADAAQAIAAAFAFQAFAEAAAJIAAA4QAAAEgBADQgCAEgCACIgGADIgHABIgGgBgAgFghQgCACAAADIAAA5QAAADACADQACACADAAQADAAADgCQACgDAAgDIAAg5QAAgDgCgCQgDgCgDAAQgDAAgCACg");
	this.shape_216.setTransform(180.325,100.675);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#030000").s().p("AABAtIAAhOIgMAKIAAgLIAMgKIALAAIAABZg");
	this.shape_217.setTransform(175.425,100.675);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#030000").s().p("AgFAuIgVg7IAAA7IgLAAIAAhaIAKAAIAVA6IAAAAIAAg6IAJAAIAABagAAMAKIAAgIIAZAAIAAAIgAATgBIgEgDIgDgCIgBgDIgBgGIAAgHIAAgJIABgGQACgEADgCQADgBAGAAQAFAAADABQADACABAEIAAADIABAEIAAAFIAAAEIAAAFIgBADQABAFgCACIgDADQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABgBAAIgEAAIgFAAgAAVgkQAAAAAAAAQgBAAAAAAQAAABAAAAQAAAAgBABIAAAEIAAAJIAAAFIAAAEQABAEAEAAIADgBIACgCIABgFIAAgHIAAgGIgBgFQgBgDgEAAg");
	this.shape_218.setTransform(168.7,100.65);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgJAAIAAhZIAKAAIAAA/IAAAAIAVg/IAKAAIAABZg");
	this.shape_219.setTransform(147.55,100.675);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#030000").s().p("AAMAtIAAg+IgBAAIgWA+IgJAAIAAhZIAJAAIAAA/IABAAIAWg/IAKAAIAABZg");
	this.shape_220.setTransform(142,100.675);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#030000").s().p("AgOAoQgFgFgBgLIAAgrIABgKIAEgIQACgEAEgCQAEgCAFAAQALAAAEAGQAFAFAAAKIgKACQAAgHgDgDQgBgEgGAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQADgEAAgGIALACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_221.setTransform(136.9,100.675);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#030000").s().p("AgOAoQgFgFgBgLIAAgrIABgKIAEgIQACgEAEgCQAEgCAFAAQALAAAEAGQAFAFAAAKIgKACQAAgHgDgDQgBgEgGAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQADgEAAgGIALACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_222.setTransform(131.95,100.675);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_223.setTransform(126.625,100.675);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQAFAAAFACQAEABADAEQADADABAFIABAMIgBAKQgBAFgDADQgDAEgEACQgFACgGAAIgIAAIAAAkgAgKAAIAHAAQAEAAADgBQADgBACgDIACgFIAAgHIAAgHIgCgGQgCgCgDgBQgDgCgDAAIgIAAg");
	this.shape_224.setTransform(121.6,100.675);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_225.setTransform(102.375,100.675);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_226.setTransform(97.375,100.675);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_227.setTransform(91.575,100.675);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_228.setTransform(86.275,100.675);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#030000").s().p("AgUAtIAAhZIAkAAIAAAJIgZAAIAAAbIAHAAQAGAAAFACQAFACACAEQADACABAFIABALIgBALQgBAFgDAEQgCADgFACQgEACgGAAgAgJAjIAHAAIAGgBIAEgEIACgFIABgHIgBgHIgCgFIgEgEQgDgBgDAAIgHAAg");
	this.shape_229.setTransform(81.325,100.675);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#030000").s().p("AAMAtIAAgoIgFAAIgEAAIgDACIgDAEQgCADgBAFIgFAaIgKAAIAFgcIADgJQACgEAEgDQgDAAgDgBIgDgFIgCgGIAAgHQAAgNAFgGQAFgHALAAIATAAIAABZgAgBghQgDABgBACIgDAGIAAAGQAAAPALAAIAJAAIAAggIgIAAQgEAAgBACg");
	this.shape_230.setTransform(61.775,100.675);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#030000").s().p("AAMAtIAAg+IgBAAIgWA+IgKAAIAAhZIAKAAIAAA/IABAAIAWg/IAJAAIAABZg");
	this.shape_231.setTransform(56.35,100.675);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#030000").s().p("AgIAtQgDgBgDgDQgDgCgBgEQgCgEAAgFIAKgCQAAAHADADQADADAEAAIAEgBQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBIACgFIABgJIAAgGIgCgFIgDgEQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgFAAIAAgIIAFAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgEIACgFIAAgGIgBgHQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgDgCIgEgBQgFAAgCAEQgDAEAAAGIgKgDQABgJAFgGQAGgFAIAAQAEAAAEABQAEABADADQADADABAEQACAEAAAHIgBAGIgBAGIgCAFIgEAEIAEADQACADAAADIABAFIABAGQAAANgFAHQgFAHgLAAQgEAAgEgBg");
	this.shape_232.setTransform(50.875,100.675);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_233.setTransform(45.875,100.675);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_234.setTransform(40.975,100.675);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#030000").s().p("AAOA2IAAgRIgkAAIAAhaIAKAAIAABQIAUAAIAAhQIAKAAIAABQIAFAAIAAAbg");
	this.shape_235.setTransform(35.675,101.525);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#030000").s().p("AAMAtIAAg+IgBAAIgWA+IgJAAIAAhZIAJAAIAAA/IABAAIAWg/IAKAAIAABZg");
	this.shape_236.setTransform(29.95,100.675);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#030000").s().p("AgYAnIAFgEQADgCABgDQACgEABgFIABgPIAAg0IAkAAIAABaIgKAAIAAhQIgRAAIAAAjIgBAUQgBAJgCAEQgCAGgDADQgEADgEADg");
	this.shape_237.setTransform(23.9,100.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_238.setTransform(6.225,104.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_239.setTransform(2.225,100.675);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_240.setTransform(-2.675,100.675);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#030000").s().p("AgRAtIAAhZIAjAAIAAAJIgZAAIAABQg");
	this.shape_241.setTransform(-7.425,100.675);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#030000").s().p("AgFAOIADgOIgDAAIAAgNIALAAIAAANIgGAOg");
	this.shape_242.setTransform(193.675,87.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#030000").s().p("AAEAMIAAgYIAHAAIAAAYgAgKAMIAAgYIAIAAIAAAYg");
	this.shape_243.setTransform(190.825,79.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#030000").s().p("AgUAtIAAhZIAkAAIAAAJIgZAAIAAAbIAHAAQAGAAAFACQAFACACAEQADACABAFIABALIgBALQgBAFgDAEQgCADgFACQgEACgGAAgAgJAjIAHAAIAGgBIAEgEIACgFIABgHIgBgHIgCgFIgEgEQgDgBgDAAIgHAAg");
	this.shape_244.setTransform(186.825,82.575);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIApAAIAAAJIgQAAIAABQg");
	this.shape_245.setTransform(182,82.575);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQALAAAFAGQAFAGAAAMQAAAHgCAEQgCAEgFADIAAABQAFABADAFQACAGAAAIQgBAOgFAGQgGAGgLAAgAgKAkIAIAAQAEAAACgBIAEgEIADgGIAAgHQAAgIgDgEQgDgEgHAAIgIAAgAgKgGIAHAAQAHAAADgEQADgDAAgHQAAgHgDgEQgDgEgHAAIgHAAg");
	this.shape_246.setTransform(177.3,82.575);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#030000").s().p("AAEAMIAAgYIAHAAIAAAYgAgKAMIAAgYIAIAAIAAAYg");
	this.shape_247.setTransform(172.925,79.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_248.setTransform(163.725,82.575);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_249.setTransform(158.525,82.575);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#030000").s().p("AAKAtIAAhQIgTAAIAABQIgKAAIAAhZIAnAAIAABZg");
	this.shape_250.setTransform(153.3,82.575);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_251.setTransform(143.175,82.575);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#030000").s().p("AATAtIAAg9IAAAAIgHARIgKAWIgEAAIgJgWIgHgRIgBAAIAAA9IgKAAIAAhZIALAAIAKAcIAIAVIAAAAIAJgWIAKgbIALAAIAABZg");
	this.shape_252.setTransform(136.975,82.575);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#030000").s().p("AATAtIAAg9IAAAAIgHARIgKAWIgEAAIgJgWIgHgRIgBAAIAAA9IgKAAIAAhZIALAAIAKAcIAIAVIAAAAIAJgWIAKgbIALAAIAABZg");
	this.shape_253.setTransform(129.675,82.575);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_254.setTransform(123.475,82.575);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQAFAAAFACQAFABACAEQADADABAFIAAAMIAAAKQgBAFgCADQgDAEgFACQgFACgGAAIgHAAIAAAkgAgJAAIAGAAQAEAAADgBQADgBACgDIACgFIAAgHIAAgHIgCgGQgCgCgDgBQgDgCgDAAIgHAAg");
	this.shape_255.setTransform(118.55,82.575);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#030000").s().p("AgRAtIAAhZIAjAAIAAAJIgZAAIAABQg");
	this.shape_256.setTransform(113.675,82.575);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_257.setTransform(108.475,82.575);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAGAAAEACQAFABACAEQADADAAAFIABAMIAAAKQgBAFgCADQgDAEgFACQgEACgHAAIgHAAIAAAkgAgJAAIAHAAQAEAAACgBQADgBACgDIABgFIAAgHIAAgHIgBgGQgCgCgDgBQgDgCgDAAIgHAAg");
	this.shape_258.setTransform(103.45,82.575);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#030000").s().p("AAKAtIAAhQIgTAAIAABQIgKAAIAAhZIAnAAIAABZg");
	this.shape_259.setTransform(98.05,82.575);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_260.setTransform(89.175,86.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#030000").s().p("AgSAuIAAgJIAXguQACgEABgEIAAgHIAAgEIgBgDIgDgDIgEgBQgEAAgCAEQgCAEAAAHIAAABIgKgCIAAgBIABgJIADgHQADgDADgCQAEgCAEAAQAFAAAEACIAGAEIACAGIABAJQAAAKgEAKIgUAoIAYAAIAAAKg");
	this.shape_261.setTransform(85.55,82.525);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#030000").s().p("AgOAoQgGgFAAgLIAAgrIABgKIADgIQADgEAEgCQADgCAGAAQALAAAFAGQAEAFAAAKIgLACQABgHgDgDQgCgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAFIAAAtIAAAEIACAEIADADQACACACAAQAFAAACgDQACgEAAgGIAMACQgBAJgFAGQgFAFgKAAQgJAAgFgGg");
	this.shape_262.setTransform(75.85,82.575);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#030000").s().p("AgRAuIAAgIIAEAAQADAAACgDQACgDACgGIABgFIgThCIAKAAIANAyIAAAAIAMgyIAKAAIgSBFQgCAHgCAFQgBAEgDACIgEADIgGABg");
	this.shape_263.setTransform(70.85,82.625);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#030000").s().p("AAJAtIAAhQIgSAAIAABQIgKAAIAAhZIAnAAIAABZg");
	this.shape_264.setTransform(65.85,82.575);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAFAAAFACQAEABADAEQADADAAAFIABAMIAAAKQgBAFgCADQgDAEgFACQgFACgGAAIgHAAIAAAkgAgJAAIAHAAQAEAAACgBQADgBABgDIACgFIAAgHIAAgHIgCgGQgBgCgDgBQgCgCgEAAIgHAAg");
	this.shape_265.setTransform(60.8,82.575);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_266.setTransform(55.375,82.575);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_267.setTransform(50.275,82.575);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#030000").s().p("AgFAOIADgOIgDAAIAAgNIALAAIAAANIgGAOg");
	this.shape_268.setTransform(41.075,87.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#030000").s().p("AgGAtIgGgEQgCgCgCgDQgBgDAAgFIAAgPIAAgKIACgFIAQgrIAKAAIgOAoIABAAQACgCAEAAIAHABIAEAEIADAFIAAAGIAAATQAAAEgBAEQgCADgCACIgGAEIgHABIgGgBgAgDACIgCADIgCADIAAADIAAASQAAADACACQACACADAAQADAAADgCQACgCAAgDIAAgUQAAgEgCgCQgCgBgEAAIgDAAg");
	this.shape_269.setTransform(37.425,82.625);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#030000").s().p("AABAtIAAhOIgMAKIAAgLIAMgKIALAAIAABZg");
	this.shape_270.setTransform(32.525,82.575);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_271.setTransform(22.725,82.575);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_272.setTransform(17.025,82.575);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#030000").s().p("AgEAtIAAhQIgQAAIAAgJIApAAIAAAJIgQAAIAABQg");
	this.shape_273.setTransform(12.25,82.575);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#030000").s().p("AgPAoQgEgFgBgLIAAgrIACgKIADgIQACgEAEgCQADgCAGAAQALAAAEAGQAFAFAAAKIgKACQAAgHgCgDQgDgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQACgEABgGIAKACQAAAJgFAGQgFAFgKAAQgJAAgGgGg");
	this.shape_274.setTransform(7.85,82.575);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_275.setTransform(2.675,82.575);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#030000").s().p("AAKAtIAAgnIgFACIgFAAIgIgBQgDgBgDgCQgDgCgBgDQgCgEAAgGIAAghIAKAAIAAAhQAAAHADADQADABAFAAIAFAAIAEAAIAAgsIALAAIAABZg");
	this.shape_276.setTransform(-2.675,82.575);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#030000").s().p("AgSAuIAAgIIAFAAQACAAADgDQADgDABgGIACgFIgUhCIAKAAIAMAyIABAAIAMgyIAKAAIgSBFQgCAHgDAFQgBAEgCACIgFADIgEABg");
	this.shape_277.setTransform(-7.6,82.625);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#030000").s().p("AgFAOIADgOIgDAAIAAgMIALAAIAAAMIgGAOg");
	this.shape_278.setTransform(193.775,69.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#030000").s().p("AAMA3IAAg/IgBAAIgWA/IgKAAIAAhaIAKAAIAAA/IABAAIAWg/IAKAAIAABagAgIgnIgFgEQgCgCAAgDIgCgGIAJAAIAAADIADADIACACIADABIAEgBIACgCIACgDIAAgDIAIAAIgBAGQgBADgCACIgFAEQgDABgEAAQgEAAgEgBg");
	this.shape_279.setTransform(189.8,63.525);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#030000").s().p("AATAtIAAhZIALAAIAABZgAgdAtIAAhZIALAAIAAAkIAHAAQAHAAAFACQAEACADAEQACACABAFIABALIgBALQgBAFgCAEQgDADgEACQgEACgHAAgAgSAjIAHAAIAHgBIAEgEIACgFIAAgHIAAgHIgCgFIgEgEQgDgBgEAAIgHAAg");
	this.shape_280.setTransform(183.35,64.475);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_281.setTransform(176.975,64.475);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#030000").s().p("AAKAtIAAgnIgFACIgFAAIgIgBQgDgBgDgCQgDgCgBgDQgCgEAAgGIAAghIAKAAIAAAhQAAAHADADQADABAFAAIAFAAIAEAAIAAgsIALAAIAABZg");
	this.shape_282.setTransform(171.425,64.475);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_283.setTransform(166.175,64.475);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#030000").s().p("AgEAtIAAhQIgPAAIAAgJIAnAAIAAAJIgPAAIAABQg");
	this.shape_284.setTransform(161.4,64.475);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#030000").s().p("AgPAoQgEgFAAgLIAAgrIABgKIACgIQACgEAFgCQAEgCAFAAQAKAAAGAGQAEAFAAAKIgLACQABgHgCgDQgCgEgGAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQABACADAAQAFAAACgDQACgEAAgGIALACQAAAJgFAGQgFAFgKAAQgJAAgGgGg");
	this.shape_285.setTransform(157,64.475);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_286.setTransform(151.675,64.475);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#030000").s().p("AgTAtIAAhZIATAAQAKAAAFAGQAFAGAAAMQAAAHgCAEQgDAEgFADIAAABQAHABABAFQACAGAAAIQABAOgGAGQgGAGgLAAgAgKAkIAJAAQADAAADgBIADgEIACgGIAAgHQAAgIgCgEQgDgEgHAAIgIAAgAgKgGIAIAAQAFAAAEgEQADgDAAgHQAAgHgDgEQgDgEgGAAIgIAAg");
	this.shape_287.setTransform(146.4,64.475);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#030000").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_288.setTransform(141.525,65.275);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_289.setTransform(136.525,64.475);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_290.setTransform(131.075,64.475);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#030000").s().p("AAMAtIAAg+IgBAAIgWA+IgKAAIAAhZIAKAAIAAA/IABAAIAWg/IAKAAIAABZg");
	this.shape_291.setTransform(125.55,64.475);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_292.setTransform(119.975,64.475);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#030000").s().p("AAMAtIAAgoIgFAAIgEAAIgDACIgDAEQgCADgBAFIgFAaIgKAAIAFgcIADgJQACgEAEgDQgDAAgDgBIgDgFIgCgGIAAgHQAAgNAFgGQAFgHALAAIATAAIAABZgAgBghQgDABgBACIgDAGIAAAGQAAAPALAAIAJAAIAAggIgIAAQgEAAgBACg");
	this.shape_293.setTransform(114.325,64.475);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQALAAAFAGQAFAGAAAMQAAAHgCAEQgDAEgEADIAAABQAGABACAFQACAGAAAIQgBAOgFAGQgGAGgLAAgAgKAkIAIAAQAEAAACgBIAFgEIACgGIAAgHQgBgIgCgEQgDgEgHAAIgIAAgAgKgGIAHAAQAHAAADgEQADgDAAgHQAAgHgDgEQgDgEgHAAIgHAAg");
	this.shape_294.setTransform(105.85,64.475);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#030000").s().p("AAMAtIAAg+IgBAAIgWA+IgKAAIAAhZIAKAAIAAA/IABAAIAWg/IAKAAIAABZg");
	this.shape_295.setTransform(100.35,64.475);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#030000").s().p("AgPAoQgEgFAAgLIAAgrIABgKIACgIQADgEAEgCQADgCAGAAQAKAAAGAGQAEAFAAAKIgKACQAAgHgCgDQgCgEgGAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQACgEABgGIAKACQAAAJgFAGQgFAFgKAAQgJAAgGgGg");
	this.shape_296.setTransform(95.25,64.475);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#030000").s().p("AgPAoQgEgFAAgLIAAgrIABgKIADgIQACgEAEgCQADgCAGAAQAKAAAGAGQAEAFAAAKIgKACQAAgHgCgDQgCgEgGAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQACgEABgGIAKACQAAAJgFAGQgFAFgKAAQgJAAgGgGg");
	this.shape_297.setTransform(90.3,64.475);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_298.setTransform(85.125,64.475);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#030000").s().p("AATAtIAAg9IAAAAIgHARIgKAWIgEAAIgJgWIgHgRIgBAAIAAA9IgKAAIAAhZIALAAIAKAcIAIAVIAAAAIAJgWIAKgbIALAAIAABZg");
	this.shape_299.setTransform(78.925,64.475);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#030000").s().p("AgFAOIADgOIgDAAIAAgMIALAAIAAAMIgGAOg");
	this.shape_300.setTransform(70.775,69.2);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#030000").s().p("AABAtIAAhOIgMAKIAAgLIAMgKIALAAIAABZg");
	this.shape_301.setTransform(67.125,64.475);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#030000").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_302.setTransform(62.525,65.275);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_303.setTransform(57.525,64.475);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_304.setTransform(52.075,64.475);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#030000").s().p("AAMAtIAAg+IgBAAIgWA+IgKAAIAAhZIAKAAIAAA/IABAAIAWg/IAJAAIAABZg");
	this.shape_305.setTransform(46.55,64.475);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_306.setTransform(40.975,64.475);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#030000").s().p("AAMAtIAAgoIgFAAIgEAAIgDACIgDAEQgCADgBAFIgFAaIgKAAIAFgcIADgJQACgEAEgDQgDAAgDgBIgDgFIgCgGIAAgHQAAgNAFgGQAFgHALAAIATAAIAABZgAgBghQgDABgBACIgDAGIAAAGQAAAPALAAIAJAAIAAggIgIAAQgEAAgBACg");
	this.shape_307.setTransform(35.325,64.475);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_308.setTransform(28.175,68.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAGAAAEACQAFABACAEQADADAAAFIABAMIAAAKQgBAFgCADQgEAEgEACQgEACgHAAIgHAAIAAAkgAgJAAIAGAAQAFAAACgBQADgBACgDIABgFIAAgHIAAgHIgBgGQgCgCgDgBQgDgCgDAAIgHAAg");
	this.shape_309.setTransform(24.6,64.475);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_310.setTransform(19.725,64.475);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#030000").s().p("AATA2IAAgRIglAAIAAARIgJAAIAAgaIAEAAIADgEIACgEIACgIIABgLIABg2IAlAAIAABRIAFAAIAAAagAgGABIgCAQQgBAGgDAFIAZAAIAAhIIgSAAg");
	this.shape_311.setTransform(13.725,65.35);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#030000").s().p("AgFAOIADgOIgDAAIAAgMIALAAIAAAMIgGAOg");
	this.shape_312.setTransform(6.375,69.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#030000").s().p("AAKAtIAAgpIgUAAIAAApIgKAAIAAhZIAKAAIAAAoIAUAAIAAgoIALAAIAABZg");
	this.shape_313.setTransform(2.375,64.475);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#030000").s().p("AgQAEIAAgHIAhAAIAAAHg");
	this.shape_314.setTransform(-2.525,65.275);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQAFAAAFACQAEABADAEQADADABAFIABAMIgBAKQgBAFgDADQgDAEgEACQgFACgGAAIgIAAIAAAkgAgKAAIAHAAQAEAAADgBQADgBABgDIADgFIAAgHIAAgHIgDgGQgBgCgDgBQgDgCgDAAIgIAAg");
	this.shape_315.setTransform(-7.2,64.475);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#030000").s().p("AAMA3IAAg/IgBAAIgWA/IgKAAIAAhaIAKAAIAAA/IABAAIAWg/IAJAAIAABagAgHgnIgGgEQgCgCAAgDIgBgGIAIAAIABADIACADIACACIADABIADgBIADgCIACgDIABgDIAHAAIgBAGQAAADgDACIgFAEQgDABgEAAQgFAAgCgBg");
	this.shape_316.setTransform(192.25,45.425);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgJAAIAAhZIAKAAIAAA/IAAAAIAVg/IAKAAIAABZg");
	this.shape_317.setTransform(186.7,46.375);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_318.setTransform(181.475,46.375);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#030000").s().p("AgPAoQgEgFgBgLIAAgrIACgKIADgIQACgEAEgCQAEgCAFAAQALAAAEAGQAFAFAAAKIgKACQAAgHgCgDQgDgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQACgEABgGIAKACQAAAJgFAGQgFAFgKAAQgJAAgGgGg");
	this.shape_319.setTransform(176.15,46.375);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#030000").s().p("AAfAtIgHgbIgCgHIgDgFIgFgCIgEAAIgFAAIAAApIgJAAIAAgpIgFAAIgEAAIgFACIgDAFQgCACgBAFIgGAbIgKAAIAHgdQABgHADgEQADgFAEgBQgDgBgDgFQgDgEgBgHIgHgaIAKAAIAGAaIADAHIAEAEIAEACIAEAAIAEAAIAAgnIAJAAIAAAnIAEAAIAEAAIAEgCQACgBACgDIADgHIAGgaIAKAAIgHAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAHAdg");
	this.shape_320.setTransform(169.2,46.375);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_321.setTransform(162.175,46.375);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#030000").s().p("AgYAnIAFgEQACgCACgEQACgDAAgGIABgNIAAg1IAlAAIAABaIgKAAIAAhQIgSAAIAAAjIgBAUQAAAIgCAGQgCAFgEADQgCADgGACg");
	this.shape_322.setTransform(156.25,46.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_323.setTransform(151.125,46.375);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#030000").s().p("AgTAtIAAhZIATAAQAKAAAFAGQAFAGAAAMQAAAHgCAEQgDAEgFADIAAABQAHABABAFQACAGAAAIQABAOgGAGQgGAGgLAAgAgJAkIAIAAQADAAADgBIADgEIACgGIAAgHQABgIgDgEQgDgEgHAAIgHAAgAgJgGIAHAAQAFAAAEgEQADgDAAgHQAAgHgDgEQgDgEgGAAIgHAAg");
	this.shape_324.setTransform(145.85,46.375);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_325.setTransform(140.975,46.375);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#030000").s().p("AgPAoQgEgFAAgLIAAgrIAAgKIADgIQACgEAFgCQADgCAGAAQAKAAAGAGQAEAFAAAKIgLACQABgHgCgDQgDgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAFIAAAtIAAAEIACAEIADADQABACADAAQAFAAACgDQADgEgBgGIALACQAAAJgFAGQgFAFgKAAQgJAAgGgGg");
	this.shape_326.setTransform(136.05,46.375);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#030000").s().p("AgTAtIAAhZIATAAQAKAAAFAGQAFAGAAAMQAAAHgCAEQgDAEgFADIAAABQAGABADAFQABAGAAAIQAAAOgFAGQgGAGgLAAgAgJAkIAIAAQADAAACgBIAFgEIABgGIAAgHQAAgIgCgEQgDgEgHAAIgHAAgAgJgGIAGAAQAHAAADgEQADgDAAgHQAAgHgDgEQgDgEgHAAIgGAAg");
	this.shape_327.setTransform(130.8,46.375);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#030000").s().p("AgFAOIADgOIgDAAIAAgMIALAAIAAAMIgGAOg");
	this.shape_328.setTransform(120.875,51.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_329.setTransform(118.375,50.3);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_330.setTransform(114.475,46.375);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_331.setTransform(110.525,50.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#030000").s().p("AgYAnIAFgEQACgCACgEQACgDAAgGIABgNIAAg1IAlAAIAABaIgKAAIAAhQIgSAAIAAAjIgBAUQAAAIgCAGQgCAFgEADQgDADgEACg");
	this.shape_332.setTransform(106.05,46.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#030000").s().p("AgFAaIAAgNIALAAIAAANgAgFgNIAAgLIALAAIAAALg");
	this.shape_333.setTransform(96.425,48.35);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#030000").s().p("AgPAoQgEgFgBgLIAAgrIACgKIADgIQACgEAEgCQADgCAGAAQALAAAEAGQAFAFAAAKIgKACQAAgHgCgDQgDgEgFAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQACACACAAQAFAAACgDQACgEABgGIAKACQAAAJgFAGQgFAFgKAAQgJAAgGgGg");
	this.shape_334.setTransform(92.9,46.375);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#030000").s().p("AgSAtIAAhZIAlAAIAAAJIgbAAIAAAfIAYAAIAAAIIgYAAIAAAgIAbAAIAAAJg");
	this.shape_335.setTransform(88.125,46.375);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#030000").s().p("AgUAtIAAhZIATAAQAGAAAEACQAEABADAEQADADABAFIABAMIgBAKQgBAFgDADQgDAEgEACQgEACgHAAIgIAAIAAAkgAgKAAIAHAAQAEAAADgBQADgBABgDIADgFIAAgHIAAgHIgDgGQgBgCgDgBQgDgCgDAAIgIAAg");
	this.shape_336.setTransform(83.15,46.375);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#030000").s().p("AATA2IAAgRIglAAIAAARIgJAAIAAgaIAEAAIADgEIACgEIACgIIABgLIABg2IAlAAIAABRIAFAAIAAAagAgGABIgCAQQgBAGgDAFIAZAAIAAhIIgSAAg");
	this.shape_337.setTransform(77.025,47.25);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_338.setTransform(71.625,46.375);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_339.setTransform(61.875,50.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#030000").s().p("AgCAaIAOgaIgOgZIAQAAIAPAZIgPAagAgcAaIAPgaIgPgZIARAAIAOAZIgOAag");
	this.shape_340.setTransform(57.175,47.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#030000").s().p("AgIAtIAAhIIgOAAIAAgRIAtAAIAAARIgOAAIAABIg");
	this.shape_341.setTransform(51.325,46.375);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#030000").s().p("AAGAtIAAglIgKAAIAAAlIgSAAIAAhZIASAAIAAAkIAKAAIAAgkIASAAIAABZg");
	this.shape_342.setTransform(46.05,46.375);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#030000").s().p("AgUAtIAAhZIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAUIAXAAIAAARg");
	this.shape_343.setTransform(40.675,46.375);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#030000").s().p("AAOAtIAAgqIgBAAIgDAOIgEALIgLAAIgEgMIgEgNIAAAAIAAAqIgSAAIAAhZIARAAIAJAYIAFASIAAAAIAGgSIAJgYIARAAIAABZg");
	this.shape_344.setTransform(34.2,46.375);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#030000").s().p("AAEAtIAAhIIgIAAIAABIIgSAAIAAhZIAsAAIAABZg");
	this.shape_345.setTransform(27.55,46.375);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#030000").s().p("AgWAXIAAgtQAAgMAGgGQAGgFAKAAQALAAAHAFQAFAGAAAMIAAAtQAAAMgGAFQgFAGgMAAQgWAAAAgXgAgDgbQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAvQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgvQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_346.setTransform(21.8,46.375);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#030000").s().p("AgaAhIAHgFIADgGQABgDAAgEIABgKIAAgyIApAAIAABZIgRAAIAAhIIgJAAIAAAhIgBAQQAAAHgDAFQgCAFgEADQgEADgHACg");
	this.shape_347.setTransform(15.5,46.475);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#030000").s().p("AgUAtIAAhZIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAUIAXAAIAAARg");
	this.shape_348.setTransform(10.375,46.375);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#030000").s().p("AgWAtIAAhZIAVAAQALAAAGAGQAGAGAAANIgBAFIgBAFIgDAFIgFACIAAABIAFACIADAEIACAGIABAGQAAAPgHAGQgGAHgMAAgAgEAcIADAAIADgBIACgCIACgEIAAgFQAAgGgCgCQgCgCgDAAIgDAAgAgEgJIACAAQAHAAAAgJQAAgGgCgCQgCgBgDAAIgCAAg");
	this.shape_349.setTransform(4.825,46.375);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#030000").s().p("AgUAtIAAhZIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAUIAXAAIAAARg");
	this.shape_350.setTransform(-0.475,46.375);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#030000").s().p("AARA2IAAgRIghAAIAAARIgPAAIAAghIAGgBQAEgEABgGIABgKIADg1IAoAAIAABJIAHAAIAAAigAgDABIgBALQAAAFgCADIANAAIAAg4IgJAAg");
	this.shape_351.setTransform(-6.65,47.225);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#030000").s().p("AgIAtIAAhIIgOAAIAAgRIAtAAIAAARIgOAAIAABIg");
	this.shape_352.setTransform(192.725,28.275);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#030000").s().p("AgRAoQgFgFAAgMIAAgsQAAgLAFgGQAGgHALAAQAMAAAGAGQAFAGAAAJIAAABIAAABIgRADIgCgGQAAgBgBgBQAAAAAAAAQgBgBgBAAQAAAAgBAAIgCABIgCABIAAADIgBACIAAAtIABADQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQACAAACgCQABgDAAgEIASACQAAALgGAGQgGAHgLAAQgLAAgGgGg");
	this.shape_353.setTransform(187.775,28.275);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#030000").s().p("AgaAhIAHgFIADgGQABgDABgEIAAgKIAAgyIApAAIAABZIgRAAIAAhIIgJAAIAAAhIgBAQQAAAHgDAFQgCAFgEADQgEADgHACg");
	this.shape_354.setTransform(181.45,28.375);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#030000").s().p("AAMAaIgOgaIAOgZIARAAIgPAZIAPAagAgNAaIgPgaIAPgZIAQAAIgOAZIAOAag");
	this.shape_355.setTransform(175.225,29.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#030000").s().p("AAIAtIgFgaIgBgEIgBgEIgCgDIgEgBIgCAAIAAAmIgSAAIAAhZIASAAIAAAlIACAAQADAAACgDQACgDABgGIAEgZIARAAIgFAcQgBAGgEAEQgDAEgDABIAAABQAFABACADQADAEABAGIAHAfg");
	this.shape_356.setTransform(165.275,28.275);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#030000").s().p("AAHAtIAAguIAAAAIgNAuIgSAAIAAhZIASAAIAAAvIAAAAIANgvIASAAIAABZg");
	this.shape_357.setTransform(159,28.275);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#030000").s().p("AAZA2IAAgRIg/AAIAAhaIARAAIAABJIAKAAIAAhJIAQAAIAABJIAKAAIAAhJIARAAIAABJIAHAAIAAAig");
	this.shape_358.setTransform(151.875,29.125);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#030000").s().p("AAHA4IAAgvIgBAAIgMAvIgRAAIAAhZIARAAIAAAvIABAAIAMgvIARAAIAABZgAgHglQgEgCgCgDQgDgDgBgDIgBgHIAMAAIABACIACAEIACACIACABIAEgBIABgCIACgEIAAgCIANAAIgCAHQgBADgCADQgDADgDACQgEABgFAAQgFAAgDgBg");
	this.shape_359.setTransform(144.25,27.15);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#030000").s().p("AgWAXIAAgtQAAgMAGgGQAGgFAKAAQALAAAHAFQAFAGAAAMIAAAtQAAAMgGAFQgFAGgMAAQgWAAAAgXgAgDgbQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAvQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgvQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_360.setTransform(138.35,28.275);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#030000").s().p("AgWAtIAAhZIAVAAQAFAAAEABQAFACAEADQACADADAFQACAGAAAIQAAAOgHAGQgFAIgNAAIgDAAIAAAhgAgEgEIADAAIABAAIAEgCQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAABgBIABgGQgBgGgCgDQgDgCgCAAIgDAAg");
	this.shape_361.setTransform(132.9,28.275);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#030000").s().p("AgIAtIAAhIIgOAAIAAgRIAtAAIAAARIgOAAIAABIg");
	this.shape_362.setTransform(127.575,28.275);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#030000").s().p("AgRAoQgFgFAAgMIAAgsQAAgLAFgGQAGgHALAAQAMAAAGAGQAFAGAAAJIAAABIAAABIgRADIgCgGQAAgBgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgCABIgCABIAAADIgBACIAAAtIABADQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQACAAACgCQABgDAAgEIASACQAAALgGAGQgGAHgLAAQgLAAgGgGg");
	this.shape_363.setTransform(122.625,28.275);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#030000").s().p("AAJAtIgCgRIgMAAIgDARIgTAAIARhZIAVAAIARBZgAAFALIgCgNIgDgTIAAAAIgBATIgCANIAIAAg");
	this.shape_364.setTransform(116.8,28.275);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#030000").s().p("AgQAoQgGgHAAgKIARgDQABAEABACQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQADAAABgDIABgHIAAgGIgCgEIgBgCIgCAAIgFAAIAAgOIAFAAQACAAACgDQACgDgBgFIAAgDIgBgCIgBgDIgDAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQgCACABAEIgRgDQAAgLAHgGQAFgGALAAQAFAAAFACQAEACADADQACADACAFIABAKIgBAFIAAAFIgCAGQgCACgDABIAAABQAFAAACAGQABAFAAAHQABAIgCAFQgCAFgDAEQgDADgEABQgEACgGAAQgKAAgGgGg");
	this.shape_365.setTransform(111.25,28.275);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#030000").s().p("AAHA4IAAgvIAAAAIgNAvIgSAAIAAhZIASAAIAAAvIAAAAIANgvIASAAIAABZgAgHglQgEgCgCgDQgCgDgBgDIgCgHIAMAAIABACIABAEIADACIACABIADgBIADgCIABgEIABgCIAMAAIgBAHQgCADgCADQgCADgEACQgEABgFAAQgEAAgEgBg");
	this.shape_366.setTransform(101.55,27.15);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#030000").s().p("AASAtIAAhZIASAAIAABZgAgjAtIAAhZIASAAIAAAhIAFAAQAMAAAGAHQAFAGAAAOQAAAIgCAGQgBAFgEAEQgDADgEACQgEABgGAAgAgRAcIADAAQAEAAADgCQACgDAAgHIgBgGQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgDgCIgDAAIgDAAg");
	this.shape_367.setTransform(94.275,28.275);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#030000").s().p("AAGAtIAAglIgKAAIAAAlIgSAAIAAhZIASAAIAAAkIAKAAIAAgkIASAAIAABZg");
	this.shape_368.setTransform(87.1,28.275);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#030000").s().p("AAGAtIAAglIgKAAIAAAlIgSAAIAAhZIASAAIAAAkIAKAAIAAgkIASAAIAABZg");
	this.shape_369.setTransform(81.15,28.275);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#030000").s().p("AAKAtIgDgRIgMAAIgDARIgTAAIARhZIAVAAIARBZgAAEALIgBgNIgCgTIgBAAIgBATIgCANIAHAAg");
	this.shape_370.setTransform(75.25,28.275);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#030000").s().p("AgWAtIAAhZIAVAAQALAAAGAGQAGAGAAANIgBAFIgBAFIgDAFIgFACIAAABIAFACIADAEIACAGIABAGQAAAPgHAGQgGAHgMAAgAgEAcIADAAIADgBIACgCIACgEIAAgFQAAgGgCgCQgCgCgDAAIgDAAgAgEgJIACAAQAHAAAAgJQAAgGgCgCQgCgBgDAAIgCAAg");
	this.shape_371.setTransform(69.525,28.275);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#030000").s().p("AgWAXIAAgtQAAgMAGgGQAGgFAKAAQALAAAHAFQAFAGAAAMIAAAtQAAAMgGAFQgFAGgMAAQgWAAAAgXgAgDgbQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAvQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgvQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_372.setTransform(63.75,28.275);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#030000").s().p("AgWAtIAAhZIAVAAQAFAAAEABQAFACADADQAEADACAFQACAGAAAIQAAAOgHAGQgFAIgNAAIgDAAIAAAhgAgEgEIACAAIACAAIAEgCQAAgBAAAAQABAAAAgBQAAAAAAgBQAAAAABgBIABgGQgBgGgCgDQgDgCgDAAIgCAAg");
	this.shape_373.setTransform(58.3,28.275);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#030000").s().p("AAHAtIAAguIAAAAIgNAuIgSAAIAAhZIASAAIAAAvIAAAAIANgvIASAAIAABZg");
	this.shape_374.setTransform(52.25,28.275);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#030000").s().p("AgQAoQgGgHgBgKIASgDQABAEABACQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQADAAABgDIABgHIAAgGIgCgEIgBgCIgCAAIgFAAIAAgOIAFAAQACAAACgDQABgDAAgFIAAgDIgBgCIgCgDIgCAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBABQgBACgBAEIgRgDQABgLAHgGQAFgGALAAQAGAAAEACQAEACADADQACADACAFIABAKIgBAFIgBAFIgBAGQgCACgDABIAAABQAFAAABAGQACAFAAAHQAAAIgBAFQgCAFgDAEQgDADgEABQgFACgFAAQgKAAgGgGg");
	this.shape_375.setTransform(46.55,28.275);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#030000").s().p("AAHAtIAAguIgBAAIgMAuIgRAAIAAhZIARAAIAAAvIABAAIAMgvIARAAIAABZg");
	this.shape_376.setTransform(40.6,28.275);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#030000").s().p("AgaAhIAHgFIADgGQACgDgBgEIABgKIAAgyIApAAIAABZIgSAAIAAhIIgIAAIAAAhIgBAQQAAAHgCAFQgDAFgEADQgEADgHACg");
	this.shape_377.setTransform(34.15,28.375);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#030000").s().p("AAJAtIgCgRIgNAAIgCARIgTAAIARhZIAVAAIARBZgAAFALIgDgNIgCgTIAAAAIgBATIgCANIAIAAg");
	this.shape_378.setTransform(28.5,28.275);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#030000").s().p("AAHAtIAAguIAAAAIgNAuIgSAAIAAhZIASAAIAAAvIAAAAIANgvIASAAIAABZg");
	this.shape_379.setTransform(22.55,28.275);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#030000").s().p("AANA2IAAgRIgnAAIAAhaIASAAIAABJIAKAAIAAhJIASAAIAABJIAHAAIAAAig");
	this.shape_380.setTransform(16.775,29.125);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#030000").s().p("AgUAtIAAhZIApAAIAAARIgXAAIAAATIAUAAIAAAQIgUAAIAAAUIAXAAIAAARg");
	this.shape_381.setTransform(11.075,28.275);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#030000").s().p("AAEAtIAAhIIgIAAIAABIIgSAAIAAhZIAsAAIAABZg");
	this.shape_382.setTransform(5.5,28.275);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#030000").s().p("AgRAoQgFgFAAgMIAAgsQAAgLAFgGQAGgHALAAQAMAAAGAGQAFAGAAAJIAAABIAAABIgRADIgCgGQAAgBgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgCABIgCABIAAADIgBACIAAAtIABADQAAABABAAQAAABABAAQAAAAABAAQABAAAAAAQACAAACgCQABgDAAgEIASACQAAALgGAGQgGAHgLAAQgLAAgGgGg");
	this.shape_383.setTransform(-0.025,28.275);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#030000").s().p("AAMAaIgOgaIAOgZIARAAIgPAZIAPAagAgNAaIgPgaIAPgZIAQAAIgOAZIAOAag");
	this.shape_384.setTransform(-6.425,29.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#030000").s().p("AgWAXIAAgtQAAgMAGgGQAGgFAKAAQAMAAAFAFQAGAGAAAMIAAAtQAAAMgGAFQgGAGgLAAQgWAAAAgXgAgDgbQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIAAAvQAAABAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgvQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_385.setTransform(192.15,12.275);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#030000").s().p("AgWAXIAAgtQAAgMAGgGQAGgFAKAAQALAAAHAFQAFAGAAAMIAAAtQAAAMgGAFQgFAGgMAAQgWAAAAgXgAgDgbQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAvQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgvQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_386.setTransform(186.4,12.275);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#030000").s().p("AgWAXIAAgtQAAgMAGgGQAGgFAKAAQALAAAHAFQAFAGAAAMIAAAtQAAAMgGAFQgFAGgMAAQgWAAAAgXgAgDgbQAAAAgBABQAAAAAAABQAAAAAAABQgBABAAAAIAAAvQAAABABAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIAAgvQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_387.setTransform(180.65,12.275);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#030000").s().p("AANAtIgGgbIgCgHIgEgFIgDgCIgFAAIgFAAIAAApIgKAAIAAhZIAKAAIAAAnIAFAAIAEAAIADgCIAEgEIACgHIAHgaIAJAAIgGAaQgBAHgDAEQgDAFgEABQAFABADAFQADAEABAHIAGAdg");
	this.shape_388.setTransform(164.925,12.275);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#030000").s().p("AALAtIAAg+IAAAAIgWA+IgKAAIAAhZIALAAIAAA/IAAAAIAVg/IAKAAIAABZg");
	this.shape_389.setTransform(159.15,12.275);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#030000").s().p("AAaA2IAAgRIg9AAIAAhaIAKAAIAABQIASAAIAAhQIAKAAIAABQIASAAIAAhQIAKAAIAABQIAEAAIAAAbg");
	this.shape_390.setTransform(152.35,13.125);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#030000").s().p("AAMA3IAAg/IgBAAIgWA/IgKAAIAAhaIAKAAIAAA/IABAAIAWg/IAKAAIAABagAgHgnIgGgEQgCgCAAgDIgBgGIAIAAIABADIACADIACACIADABIAEgBIACgCIACgDIAAgDIAIAAIgBAGQAAADgDACIgFAEQgDABgEAAQgEAAgDgBg");
	this.shape_391.setTransform(145.35,11.325);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#030000").s().p("AgPAoQgFgGAAgKIAAgsIABgJIADgIQADgEAEgCQAEgCAFAAQAHAAAEACQAEACACADQADAEAAAEIABAKIAAApQAAAMgFAHQgFAGgLAAQgKAAgFgGgAgFgiIgDAFIgBAFIAAAFIAAArIAAAEIACAEIADADQACACACAAQADAAACgCIAEgDIABgFIABgFIAAgsIgBgEQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBIgDgDQgCgCgEAAQgDAAgCACg");
	this.shape_392.setTransform(139.875,12.275);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#030000").s().p("AgTAtIAAhZIASAAQAGAAAEACQAFABACAEQADADABAFIAAAMIAAAKQgBAFgCADQgEAEgEACQgEACgHAAIgHAAIAAAkgAgJAAIAGAAQAFAAACgBQADgBACgDIABgFIAAgHIAAgHIgBgGQgCgCgDgBQgDgCgDAAIgHAAg");
	this.shape_393.setTransform(134.85,12.275);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#030000").s().p("AgEAtIAAhQIgPAAIAAgJIAnAAIAAAJIgOAAIAABQg");
	this.shape_394.setTransform(130,12.275);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#030000").s().p("AgPAoQgEgFAAgLIAAgrIABgKIACgIQACgEAFgCQAEgCAFAAQAKAAAGAGQAEAFAAAKIgLACQABgHgCgDQgCgEgGAAQgCAAgCACIgDAEQAAAAgBABQAAAAAAABQAAAAAAABQAAABAAAAIgBAFIAAAtIABAEIABAEIADADQABACADAAQAFAAACgDQADgEgBgGIALACQAAAJgFAGQgFAFgKAAQgJAAgGgGg");
	this.shape_395.setTransform(125.6,12.275);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#030000").s().p("AAOAtIgEgUIgTAAIgEAUIgKAAIAThZIAJAAIATBZgAAIAQIgEgVIgEgVIAAAAIgDAVIgEAVIAPAAg");
	this.shape_396.setTransform(120.425,12.275);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#030000").s().p("AgIAtQgDgBgDgDQgDgCgBgEQgCgEAAgFIAKgCQAAAHADADQADADAEAAIAEgBQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABgBIACgFIABgJIAAgGIgCgFIgDgEQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgFAAIAAgIIAFAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAIADgEIACgFIAAgGIgBgHQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBIgDgCIgEgBQgFAAgCAEQgDAEAAAGIgKgDQABgJAFgGQAGgFAIAAQAEAAAEABQAEABADADQADADABAEQACAEAAAHIgBAGIgBAGIgCAFIgEAEIAEADQACADAAADIABAFIABAGQAAANgFAHQgFAHgLAAQgEAAgEgBg");
	this.shape_397.setTransform(115.175,12.275);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#030000").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_398.setTransform(101.275,16.2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#030000").s().p("AgCAaIAOgaIgOgZIAQAAIAPAZIgPAagAgcAaIAPgaIgPgZIARAAIAOAZIgOAag");
	this.shape_399.setTransform(96.575,13.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#030000").s().p("AgWAtIAAhZIAVAAQALAAAGAGQAGAGAAANIgBAFIgBAFIgDAFIgFACIAAABIAFACIADAEIACAGIABAGQAAAPgHAGQgGAHgMAAgAgEAcIADAAIADgBIACgCIACgEIAAgFQAAgGgCgCQgCgCgDAAIgDAAgAgEgJIACAAQAHAAAAgJQAAgGgCgCQgCgBgDAAIgCAAg");
	this.shape_400.setTransform(90.225,12.275);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#030000").s().p("AAHA5IAAgwIgBAAIgMAwIgRAAIAAhaIARAAIAAAvIABAAIAMgvIARAAIAABagAgHgmQgEgBgCgDQgDgDAAgDIgCgIIAMAAIABADIABAEIADACIACABIADgBIACgCIACgEIABgDIAMAAIgBAIQgBADgDADQgDADgDABQgEACgFAAQgFAAgDgCg");
	this.shape_401.setTransform(84.25,11.15);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#030000").s().p("AAKAtIgDgRIgMAAIgDARIgTAAIARhZIAVAAIARBZgAAFALIgCgNIgCgTIgBAAIgBATIgCANIAIAAg");
	this.shape_402.setTransform(78.3,12.275);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#030000").s().p("AgXAtIAAhZIAWAAQAFAAAFABQAEACAEADQACADACAFQACAGABAIQgBAOgFAGQgHAIgLAAIgFAAIAAAhgAgFgEIAEAAIACAAIACgCQABgBAAAAQAAAAABgBQAAAAAAgBQAAAAABgBIABgGQAAgGgDgDQgCgCgDAAIgEAAg");
	this.shape_403.setTransform(72.85,12.275);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#030000").s().p("AARA2IAAgRIghAAIAAARIgOAAIAAghIAFgBQAEgEABgGIABgKIACg1IApAAIAABJIAIAAIAAAigAgCABIgCALQAAAFgDADIAOAAIAAg4IgIAAg");
	this.shape_404.setTransform(66.4,13.125);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#030000").s().p("AAJAtIgCgRIgNAAIgCARIgTAAIAShZIAUAAIARBZgAAFALIgDgNIgCgTIAAAAIgBATIgCANIAIAAg");
	this.shape_405.setTransform(49.55,12.275);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#030000").s().p("AgaAhIAHgFIADgGQABgDAAgEIABgKIAAgyIApAAIAABZIgSAAIAAhIIgJAAIAAAhIAAAQQAAAHgCAFQgDAFgEADQgEADgHACg");
	this.shape_406.setTransform(43.25,12.375);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#030000").s().p("AAHAtIAAguIgBAAIgMAuIgRAAIAAhZIARAAIAAAvIABAAIAMgvIARAAIAABZg");
	this.shape_407.setTransform(37.45,12.275);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#030000").s().p("AAGAtIAAglIgLAAIAAAlIgSAAIAAhZIASAAIAAAkIALAAIAAgkIASAAIAABZg");
	this.shape_408.setTransform(31.45,12.275);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#030000").s().p("AAHAtIAAglIgCAAQgEAAgBAEIgCAIIgEAZIgSAAIAFgdQAAgEACgDQADgEADgBQgGgEgCgEQgCgFAAgIQAAgGACgGQACgFADgDQAEgEAEgBQAFgCAFAAIAVAAIAABZgAgCgZQgCADAAAFIABAFIACADIACABIAEABIACAAIAAgUIgDAAQgEAAgCACg");
	this.shape_409.setTransform(25.35,12.275);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#030000").s().p("AAMAaIgOgaIAOgZIARAAIgPAZIAPAagAgNAaIgPgaIAPgZIAQAAIgOAZIAOAag");
	this.shape_410.setTransform(19.075,13.6);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#030000").s().p("AAIAtIgFgaIgBgEIgBgEIgCgDIgEgBIgCAAIAAAmIgSAAIAAhZIASAAIAAAlIACAAQADAAACgDQACgDABgGIAEgZIARAAIgFAcQgBAGgEAEQgDAEgDABIAAABQAFABACADQADAEABAGIAHAfg");
	this.shape_411.setTransform(2.225,12.275);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#030000").s().p("AAZAtIgFgaIgBgEIgBgEIgDgDIgEgBIgCAAIAAAmIgRAAIAAgmIgCAAQgEAAgDAEIgCAIIgFAaIgSAAIAHgfQABgGADgEQADgDAEgBIAAgBQgDgBgEgEQgDgEgBgGIgFgcIARAAIAFAZQAAAGADADQACADAEAAIABAAIAAglIARAAIAAAlIABAAQAEAAACgDQACgDABgGIAFgZIARAAIgFAcQgCAGgDAEQgDAEgDABIAAABQAEAAADAEQADAEABAGIAHAfg");
	this.shape_412.setTransform(-5.45,12.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(91.45,-35.8,0.4185,0.4185,0,0,0,218.5,36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-51,209,288.2);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ClipGroup_4();
	this.instance.parent = this;
	this.instance.setTransform(105.4,-14.55,0.286,0.286,0,0,0,368.5,54);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:15.45,alpha:1},20,cjs.Ease.cubicOut).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-30,210.9,61);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.Анимация14("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-12.7,375.55,0.4771,0.4771);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.backOut).wait(21));

	// <Clip Group>
	this.instance_1 = new lib.ClipGroup_5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(202.3,375.6,0.1605,0.1605,0,0,0,18.1,17.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).to({regX:17.9,regY:17.1,scaleX:0.3953,scaleY:0.3953,alpha:1},14,cjs.Ease.backOut).wait(42));

	// Слой_5
	this.instance_2 = new lib.Анимация15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(201.75,-1.45,0.2811,0.2811);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.backOut).wait(65));

	// Слой_6
	this.instance_3 = new lib.Анимация16("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-12.65,-1.45,0.2476,0.2476);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,alpha:1},14,cjs.Ease.backOut).wait(80));

	// Слой_8
	this.instance_4 = new lib.Символ9("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(201.6,186.85,1,1,0,0,0,2,177.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).wait(73));

	// Слой_9
	this.instance_5 = new lib.Символ8("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(94.5,-1.5,1,1,0,0,0,94.5,2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).wait(90));

	// Символ 8
	this.instance_6 = new lib.Символ8("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(94.5,376.1,1,1,180,0,0,94.5,2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48).to({_off:false},0).wait(46));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-8.7,233.7,391.5);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AvnHAIAAt/IfPAAIAAN/g");
	var mask_graphics_59 = new cjs.Graphics().p("AvnHAIAAt/IfPAAIAAN/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:96.525,y:7.8}).wait(59).to({graphics:mask_graphics_59,x:96.525,y:7.8}).wait(1).to({graphics:null,x:0,y:0}).wait(20));

	// FlashAICB
	this.instance = new lib.Анимация19("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(92.85,66.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:9},22,cjs.Ease.backOut).wait(37).to({startPosition:0},0).to({_off:true},1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-8.9,124.4,61.5);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.Символ5("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(95.05,20.3,1,1,0,0,0,95.1,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// FlashAICB
	this.instance_1 = new lib.Символ3("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.1,14.9,0.595,0.2299,0,0,0,113.5,29.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(57));

	// Символ 3
	this.instance_2 = new lib.Символ3("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(60.1,43.9,0.595,0.2299,0,0,0,113.5,29.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-9,135.5,61.5);


(lib.Анимация11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.ClipGroup_2();
	this.instance.parent = this;
	this.instance.setTransform(-20,-0.8,0.3757,0.3757,0,0,0,52.6,11.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAyBSIAAh7IhmB7IgXAAIAAijIAaAAIAAB8IBnh8IAWAAIAACjg");
	this.shape.setTransform(-26.3098,0.2787,0.3757,0.3757);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABZBSIg3hKIgVAAIAABKIgZAAIAAhKIgVAAIg3BKIgeAAIA/hUIg7hPIAcAAIA0BGIAWAAIAAhGIAZAAIAABGIAWAAIAzhGIAdAAIg7BPIA/BUg");
	this.shape_1.setTransform(-35.2699,0.2787,0.3757,0.3757);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.7,-5.2,39.300000000000004,8.6);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.ClipGroup_1();
	this.instance.parent = this;
	this.instance.setTransform(-10.3,-3.55,0.3067,0.3067,0,0,0,215.2,37.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABiEHIAAmSIjEAAIAAGSIifAAIAAoNIIDAAIAAINg");
	this.shape.setTransform(-43.317,-0.5062,0.3067,0.3067);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACtFwIAAnaIlaHaIisAAIAArfICsAAIAAHfIFbnfICsAAIAALfg");
	this.shape_1.setTransform(-65.7019,-3.727,0.3067,0.3067);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-14.9,132.1,22.9);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(-28.45,7.3,0.6301,0.6301,0,0,0,105.7,43.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ai4FvIEHpXIldAAIAAiGIIdAAIAABMIkhKRg");
	this.shape.setTransform(-32.2497,3.5789,0.6301,0.6301);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhmCEIAikHICrAAIhUEHg");
	this.shape_1.setTransform(-58.6961,26.5915,0.6301,0.6301);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATFvIAAonIh/BHIhFh8IDpiBIB6AAIAALdg");
	this.shape_2.setTransform(-83.8193,3.5789,0.6301,0.6301);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-20.3,133,55.2);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_6
	this.instance = new lib.Анимация13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(25.8,14.05);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:32.05,y:7.65,alpha:1},24,cjs.Ease.cubicInOut).to({x:29.9,y:10.3},18,cjs.Ease.quadInOut).wait(46));

	// Слой_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AgVAnQgMgHgGgMQgGgMACgNQACgPAJgKQAJgKAOgDQANgDANAFQAMAFAIAMQAIAMAAAMIgCAMQgDANgLAJQgLAJgOABIgEABQgKAAgLgGg");
	var mask_graphics_2 = new cjs.Graphics().p("AgNBFQgMAAgLgHQgKgIgFgLQgJgTAJgTQAHgOANgGQgBgHABgIQACgOAJgKQAJgKANgDQAOgDANAFQAMAFAIALQAIAMAAAOIgCALQgDAMgLAJIgJAGQABAHAAAHQgBAKgFAIQgGALgLAGQgKAFgLAAIgCAAg");
	var mask_graphics_3 = new cjs.Graphics().p("AgxBNQgKgFgGgLQgGgLAAgMQAAgLAGgLQAGgLAKgFQAGgCAGgCIACgFQAHgOAMgGQgBgHABgIQACgPAJgKQAJgKAOgDQAOgDAMAFQANAFAIAMQAIAMgBANIgBAMQgEANgLAJIgIAFQABAGgBAHQgBALgFAIQgGAKgLAGIgKAEIgEAIQgJAQgRAFQgGACgGAAQgMAAgKgHg");
	var mask_graphics_4 = new cjs.Graphics().p("AgzBXQgOAAgNgLQgSgQAEgYQABgLAHgJQAHgKAKgEQASgIAQAGIAGgDQAFgDAHgBIACgFQAHgPALgGQgBgHABgIQACgOAJgKQAKgKAOgDQAOgDAMAFQANAFAIALQAIAMgBAOIgBALQgEANgLAJIgIAGQABAGgBAHQgBAKgFAIQgGALgLAGIgKAEIgEAIQgJAPgSAFQgNAEgMgEIgDABQgMAIgOAAIgDAAg");
	var mask_graphics_5 = new cjs.Graphics().p("AgzBXQgOAAgNgLQgSgQAEgYQABgLAHgJQAHgKAKgEQASgIAQAGIAGgDQAFgDAHgBIACgFQAHgPALgGQgBgHABgIQACgOAJgKQAKgKAOgDQAOgDAMAFQANAFAIALQAIAMgBAOIgBALQgEANgLAJIgIAGQABAGgBAHQgBAKgFAIQgGALgLAGIgKAEIgEAIQgJAPgSAFQgNAEgMgEIgDABQgMAIgOAAIgDAAg");
	var mask_graphics_6 = new cjs.Graphics().p("AhHBnQgNgBgMgHQgLgIgFgMIgCgMIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgIAKgFQASgIAQAHIAGgFQAGgDAFgBIACgFQAHgOANgGQgCgHABgIQACgPAJgKQAKgKAOgDQAOgDAMAFQANAFAIAMQAIAMgBANIgBAMQgEANgLAJIgIAGQABAGgBAHQgBAKgFAIQgGAKgLAGIgKAEIgEAIQgJAQgSAFQgOAEgMgFIgCACQgMAIgOAAIgCAFQgGAMgLAHQgLAHgMAAIgCAAg");
	var mask_graphics_7 = new cjs.Graphics().p("AhGB3QgMgDgIgJQgJgJgDgLIgBgMIAAgEQgGgGgDgIIgCgMIgBgJQABgNAJgLQAIgLAMgDQAIgCAHAAQADgHAEgGQAHgJAKgFQASgIAQAHIAGgFQAGgDAFgBIACgFQAHgOANgGQgCgHABgIQACgPAJgKQAKgKAOgDQAOgDAMAFQANAFAIAMQAIAMgBANIgBAMQgEANgLAJIgIAGQABAGgBAHQgBALgFAIQgGAJgLAGIgKAEIgEAIQgJAQgSAFQgOAEgMgFIgCACQgIAGgKABQAGALgBAOQgBAOgIALQgIALgNAEQgHADgIAAQgFAAgGgCg");
	var mask_graphics_8 = new cjs.Graphics().p("AgZCNQgYgBgNgUQgFgKgBgKIgCgBQgMgDgIgJQgJgJgDgLIgBgMIAAgEQgGgHgDgHIgCgMIgBgJQABgNAJgKQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgJAKgFQASgIAQAGIAGgEQAGgDAFgBIACgFQAHgOANgHQgCgHABgHQACgPAJgKQAKgKAOgDQAOgDAMAFQANAFAIAMQAIAMgBANIgBAMQgEANgLAJIgIAFQABAHgBAHQgBALgFAIQgGAKgLAGIgKAEIgEAHQgJAQgSAFQgOADgMgEIgCACQgIAFgKACQAFAJAAAKQAOACAJAMQAQARgGAYQgDAPgNAKQgLAJgOAAIgDAAg");
	var mask_graphics_9 = new cjs.Graphics().p("AgeCtQgMgBgKgHQgKgHgFgLIgDgIQgDgLADgNQADgNAJgIIABgBIgFgGQgFgKgBgKIgCgBQgMgDgIgJQgJgJgDgLIgBgMIAAgEQgGgGgDgIIgCgLIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgJAKgFQASgIAQAHIAGgFQAGgCAFgCIACgFQAHgOANgGQgCgHABgIQACgPAJgKQAKgKAOgDQAOgDAMAFQANAFAIAMQAIAMgBANIgBAMQgEANgLAJIgIAGQABAGgBAHQgBALgFAIQgGAKgLAGIgKAEIgEAIQgJAQgSAFQgOAEgMgFIgCACQgIAGgKAAQAFAJAAAKQAOADAJALQAQARgGAYQgCANgKAJQAGAIADAKQAGAVgLASQgHAKgKAFQgKAGgKAAIgEgBg");
	var mask_graphics_10 = new cjs.Graphics().p("AgoDKQgQgCgMgOQgJgLgCgPQgBgFABgGQACgMAIgKIAEgEIgCgEIgDgIQgDgLADgNQADgNAJgIIABgBIgFgGQgFgKgBgKIgCgBQgMgDgIgJQgJgJgDgLIgBgLIAAgEQgGgGgDgIIgCgMIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgJAKgFQASgIAQAGIAGgEQAGgDAFgBIACgFQAHgOANgHQgCgHABgHQACgPAJgKQAKgKAOgDQAOgDAMAFQANAFAIAMQAIAMgBANIgBAMQgEANgLAJIgIAFQABAHgBAHQgBALgFAIQgGAKgLAGIgKAEIgEAIQgJAQgSAFQgOADgMgEIgCACQgIAGgKABQAFAJAAAKQAOADAJAKQAQARgGAYQgCAMgKAKQAGAHADALQAGAVgLASIgHAIQADAFACAHQADANgDAMQgGAQgMAJQgMAHgNAAIgGAAg");
	var mask_graphics_11 = new cjs.Graphics().p("AAHDKQgJgFgGgJIgBAAQgPAJgQgCQgQgCgMgOQgJgKgCgPQgBgGABgFQACgNAIgKIAEgEIgCgEIgDgHQgDgLADgNQADgNAJgJIABAAIgFgGQgFgKgBgLIgCAAQgMgEgIgIQgJgJgDgLIgBgLIAAgEQgGgHgDgIIgCgLIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgKAKgEQASgIAQAGIAGgEQAGgDAFgBIACgFQAHgOANgHQgCgHABgIQACgOAJgKQAKgKAOgDQAOgDAMAFQANAFAIALQAIAMgBAOIgBALQgEANgLAJIgIAGQABAHgBAHQgBAKgFAIQgGALgLAGIgKAEIgEAIQgJAPgSAFQgOAEgMgEIgCABQgIAGgKACQAFAJAAAKQAOACAJALQAQARgGAXQgCANgKAKQAGAHADAKQAGAWgLARIgEAFQAIgEAJgBQALgBAKAFQALAEAHAJQAPASgHAXQgEANgLAJQgLAJgNABIgDAAQgLAAgLgGg");
	var mask_graphics_12 = new cjs.Graphics().p("AAHDKQgJgFgGgJIgBAAQgPAJgQgCQgQgCgMgOQgJgKgCgPQgBgGABgFQACgNAIgKIAEgEIgCgEIgDgHQgDgLADgNQADgNAJgJIABAAIgFgGQgFgKgBgLIgCAAQgMgEgIgIQgJgJgDgLIgBgLIAAgEQgGgHgDgIIgCgLIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgKAKgEQASgIAQAGIAGgEQAGgDAFgBIACgFQAHgOANgHQgCgHABgIQACgOAJgKQAKgKAOgDQAOgDAMAFQANAFAIALQAIAMgBAOIgBALQgEANgLAJIgIAGQABAHgBAHQgBAKgFAIQgGALgLAGIgKAEIgEAIQgJAPgSAFQgOAEgMgEIgCABQgIAGgKACQAFAJAAAKQAOACAJALQAQARgGAXQgCANgKAKQAGAHADAKIABAGQAFgJAJgHQAKgHAMgBQAVgCAPAQQAPAPgDAVQgBAJgDAGQgHAOgOAHIgFACQAFANgFAOQgEANgLAJQgLAJgNABIgDAAQgLAAgLgGgAALB2IgEAFIAHgDIgBgFIgCADg");
	var mask_graphics_13 = new cjs.Graphics().p("AgBDKQgKgFgGgJIgBAAQgPAJgPgCQgRgCgMgOQgJgKgBgPQgBgGABgFQACgNAIgKIADgEIgCgEIgCgHQgEgLAEgNQADgNAIgJIABAAIgEgGQgGgKgBgLIgCAAQgLgEgJgIQgIgJgDgLIgCgLIABgEQgHgHgDgIIgCgLIAAgJQABgNAIgLQAIgLANgEQAHgCAIAAQACgHAFgGQAHgKAKgEQARgIARAGIAGgEQAFgDAGgBIACgFQAGgOANgHQgBgHABgIQACgOAJgKQAJgKAOgDQAOgDANAFQAMAFAIALQAIAMAAAOIgCALQgDANgLAJIgJAGQABAHAAAHQgBAKgFAIQgGALgLAGIgLAEIgDAIQgKAPgRAFQgPAEgLgEIgCABQgJAGgKACQAFAJABAKQANACAJALQAQARgFAXQgDANgJAKQAFAHADAKIACAGQAEgJAJgHQAKgHAMgBQAVgCAQAQIADADQAWADALARQAMASgHAUQgDANgMAJQgLAJgOABQgJABgJgEIgCALQgEANgKAJQgLAJgNABIgEAAQgLAAgKgGgAACB2IgDAFIAHgDIgCgFIgCADg");
	var mask_graphics_14 = new cjs.Graphics().p("AgRDKQgKgFgGgJIgBAAQgPAJgQgCQgQgCgMgOQgJgKgCgPQgBgGABgFQACgNAIgKIAEgEIgCgEIgDgHQgDgLADgNQADgNAJgJIABAAIgFgGQgFgKgBgLIgCAAQgMgEgIgIQgJgJgDgLIgBgLIAAgEQgGgHgDgIIgCgLIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgKAKgEQASgIAQAGIAGgEQAGgDAGgBIACgFQAHgOAMgHQgCgHABgIQACgOAJgKQAKgKAOgDQAOgDAMAFQANAFAIALQAIAMgBAOIgBALQgEANgLAJIgIAGQABAHgBAHQgBAKgFAIQgGALgLAGIgKAEIgEAIQgJAPgSAFQgNAEgMgEIgDABQgIAGgKACQAFAJAAAKQAOACAKALQAPARgFAXQgCANgKAKQAGAHADAKIABAGQAFgJAIgHQAKgHAMgBQAVgCAPAQIADADQAWADALARIADAEQAGABAGADQAMAGAHAMQAHAMgBANIgBAJIgDAIQgGAMgMAHQgMAHgNgBQgNAAgLgJQgJgGgEgJIgIgCIgCALQgEANgLAJQgLAJgNABIgDAAQgKAAgLgGgAgNB2IgEAFIAHgDIgBgFIgCADg");
	var mask_graphics_15 = new cjs.Graphics().p("AgnDKQgKgFgGgJIgBAAQgPAJgQgCQgQgCgMgOQgJgKgCgPQgBgGABgFQACgNAIgKIAEgEIgCgEIgDgHQgDgLADgNQADgNAJgJIABAAIgFgGQgFgKgBgLIgCAAQgMgEgIgIQgJgJgDgLIgBgLIAAgEQgGgHgDgIIgCgLIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgKAKgEQASgIAQAGIAGgEQAGgDAGgBIACgFQAHgOANgHQgCgHABgIQACgOAJgKQAJgKAOgDQAOgDAMAFQANAFAIALQAIAMgBAOIgBALQgEANgLAJIgIAGQABAHgBAHQgBAKgFAIQgGALgLAGIgKAEIgEAIQgIAPgSAFQgOAEgMgEIgDABQgIAGgKACQAFAJAAAKQAOACAKALQAQARgGAXQgCANgKAKQAGAHADAKIABAGQAFgJAJgHQAKgHALgBQAVgCAPAQIADADQAWADALARIADAEQAGABAGADQAJAEAGAIIABAAQAOgDANAGQAMAFAIANQAHAMgBANQAAAMgHAKQgGAKgKAFQgJAFgMAAQgMABgKgGQgIgEgFgGQgGABgGgBQgNAAgLgJQgJgGgEgJIgIgCIgCALQgEANgLAJQgKAJgNABIgDAAQgLAAgLgGgAgjB2IgEAFIAHgDIgBgFIgCADg");
	var mask_graphics_16 = new cjs.Graphics().p("Ag0DKQgKgFgGgJIgBAAQgPAJgQgCQgQgCgMgOQgJgKgCgPQgBgGABgFQACgNAIgKIAEgEIgCgEIgDgHQgDgLADgNQADgNAJgJIABAAIgFgGQgFgKgBgLIgCAAQgMgEgIgIQgJgJgDgLIgBgLIAAgEQgGgHgDgIIgCgLIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgKAKgEQASgIAQAGIAGgEQAGgDAGgBIACgFQAHgOANgHQgCgHABgIQACgOAJgKQAKgKANgDQAOgDAMAFQANAFAIALQAIAMgBAOIgBALQgEANgLAJIgIAGQABAHgBAHQgBAKgFAIQgGALgLAGIgJAEIgEAIQgJAPgSAFQgOAEgMgEIgDABQgIAGgKACQAFAJAAAKQAOACAKALQAQARgGAXQgCANgKAKQAGAHADAKIABAGQAFgJAJgHQAKgHAMgBQAUgCAPAQIADADQAWADALARIADAEQAGABAGADQAJAEAGAIIABAAIADgBQAJgIAKgDQANgEANAEQANAFAJAKQAIAKABAOQABAOgGAMQgKARgTAFIgFABQgEAEgGADQgJAFgMAAQgMABgKgGQgIgEgFgGQgGABgGgBQgNAAgLgJQgJgGgEgJIgIgCIgCALQgEANgKAJQgLAJgNABIgDAAQgLAAgLgGgAgwB2IgEAFIAHgDIgBgFIgCADg");
	var mask_graphics_17 = new cjs.Graphics().p("Ag0DKQgKgFgGgJIgBAAQgPAJgQgCQgQgCgMgOQgJgKgCgPQgBgGABgFQACgNAIgKIAEgEIgCgEIgDgHQgDgLADgNQADgNAJgJIABAAIgFgGQgFgKgBgLIgCAAQgMgEgIgIQgJgJgDgLIgBgLIAAgEQgGgHgDgIIgCgLIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgKAKgEQASgIAQAGIAGgEQAGgDAGgBIACgFQAHgOANgHQgCgHABgIQACgOAJgKQAKgKANgDQAOgDAMAFQANAFAIALQAIAMgBAOIgBALQgEANgLAJIgIAGQABAHgBAHQgBAKgFAIQgGALgLAGIgJAEIgEAIQgJAPgSAFQgOAEgMgEIgDABQgIAGgKACQAFAJAAAKQAOACAKALQAQARgGAXQgCANgKAKQAGAHADAKIABAGQAFgJAJgHQAKgHAMgBQAUgCAPAQIADADQAWADALARIADAEQAGABAGADIABAAQgBgFABgHQADgMAIgKQAJgKAMgEQANgDANAEQANAEAJALQAIAKABAOQABANgFAKQAIALABANQABAOgGAMQgKARgTAFIgFABQgEAEgGADQgJAFgMAAQgMABgKgGQgIgEgFgGQgGABgGgBQgNAAgLgJQgJgGgEgJIgIgCIgCALQgEANgKAJQgLAJgNABIgDAAQgLAAgLgGgAgwB2IgEAFIAHgDIgBgFIgCADg");
	var mask_graphics_18 = new cjs.Graphics().p("Ag0DKQgKgFgGgJIgBAAQgPAJgQgCQgQgCgMgOQgJgKgCgPQgBgGABgFQACgNAIgKIAEgEIgCgEIgDgHQgDgLADgNQADgNAJgJIABAAIgFgGQgFgKgBgLIgCAAQgMgEgIgIQgJgJgDgLIgBgLIAAgEQgGgHgDgIIgCgLIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQADgHAEgGQAHgKAKgEQASgIAQAGIAGgEQAGgDAGgBIACgFQAHgOANgHQgCgHABgIQACgOAJgKQAKgKANgDQAOgDAMAFQANAFAIALQAIAMgBAOIgBALQgEANgLAJIgIAGQABAHgBAHQgBAKgFAIQgGALgLAGIgJAEIgEAIQgJAPgSAFQgOAEgMgEIgDABQgIAGgKACQAFAJAAAKQAOACAKALQAQARgGAXQgCANgKAKQAGAHADAKIABAGQAFgJAJgHQAKgHAMgBQAUgCAPAQIADADQAWADALARIADAEQAGABAGADIABAAQgBgFABgHIADgJIAAgBQgIgKgBgOQgBgOAGgMQAHgLANgHQANgGANACQANACAKAJQALAKADANQABAFAAAKQAAAHgDAGQAIAKABAOQABANgFAKQAIALABANQABAOgGAMQgKARgTAFIgFABQgEAEgGADQgJAFgMAAQgMABgKgGQgIgEgFgGQgGABgGgBQgNAAgLgJQgJgGgEgJIgIgCIgCALQgEANgKAJQgLAJgNABIgDAAQgLAAgLgGgAgwB2IgEAFIAHgDIgBgFIgCADg");
	var mask_graphics_19 = new cjs.Graphics().p("Ag9DKQgKgFgGgJIgBAAQgPAJgPgCQgRgCgMgOQgJgKgBgPQgBgGABgFQACgNAIgKIADgEIgCgEIgCgHQgEgLAEgNQADgNAIgJIABAAIgEgGQgGgKgBgLIgCAAQgLgEgJgIQgIgJgDgLIgCgLIABgEQgHgHgDgIIgCgLIAAgJQABgNAIgLQAIgLANgEQAHgCAIAAQACgHAFgGQAHgKAKgEQARgIARAGIAGgEQAFgDAGgBIACgFQAHgOANgHQgCgHACgIQACgOAJgKQAJgKAOgDQANgDANAFQAMAFAIALQAIAMAAAOIgCALQgDANgLAJIgJAGQABAHAAAHQgBAKgFAIQgGALgLAGIgKAEIgDAIQgKAPgRAFQgPAEgMgEIgCABQgJAGgKACQAFAJABAKQANACAKALQAQARgFAXQgDANgKAKQAGAHADAKIACAGQAEgJAJgHQAKgHAMgBQAUgCAQAQIADADQAWADALARIACAEQAHABAGADIAAAAQAAgFABgHIADgJIgBgBQgIgKgBgOQgBgOAHgMQAGgLANgHIAEgBQABgHADgHQAJgQASgGQAMgEAOADQANAEAJAKQAIAIACAOQACAOgGAMQgFAMgMAHIgIAEQgBAGgCAFQAIAKACAOQAAANgFAKQAIALACANQABAOgHAMQgJARgUAFIgFABQgEAEgFADQgKAFgMAAQgMABgKgGQgHgEgGgGQgFABgGgBQgOAAgLgJQgJgGgEgJIgIgCIgCALQgDANgKAJQgLAJgNABIgEAAQgLAAgLgGgAg5B2IgEAFIAIgDIgCgFIgCADg");
	var mask_graphics_20 = new cjs.Graphics().p("AhSDKQgKgFgHgJIAAAAQgPAJgQgCQgQgCgMgOQgJgKgCgPQgBgGABgFQACgNAIgKIAEgEIgCgEIgDgHQgDgLADgNQADgNAJgJIAAAAIgEgGQgGgKAAgLIgCAAQgMgEgIgIQgJgJgDgLIgBgLIAAgEQgGgHgDgIIgCgLIgBgJQABgNAJgLQAIgLAMgEQAIgCAHAAQACgHAFgGQAHgKAKgEQASgIAQAGIAGgEQAGgDAGgBIACgFQAHgOAMgHQgBgHABgIQACgOAJgKQAKgKAOgDQAOgDAMAFQAMAFAIALQAIAMgBAOIgBALQgEANgLAJIgIAGQABAHgBAHQgBAKgEAIQgGALgLAGIgKAEIgEAIQgJAPgSAFQgOAEgMgEIgDABQgJAGgJACQAFAJAAAKQAOACAKALQAQARgGAXQgCANgLAKQAHAHADAKIABAGQAFgJAJgHQAKgHAMgBQAVgCAPAQIACADQAWADALARIADAEQAGABAGADIABAAQgBgFABgHIADgJIAAgBQgIgKgBgOQgBgOAGgMQAHgLANgHIAEgBQABgHADgHQAIgQASgGQAGgCAGAAIABgFQACgOAJgKQAJgJAOgEQAOgDAMAFQATAHAHATQAEAJgBAKIgCAKQgEAMgLAJQgMAJgNABIgBAAQgBAJgDAIQgGAMgMAHIgHAEQgBAGgCAFQAIAKABAOQABANgFAKQAIALABANQABAOgGAMQgKARgTAFIgFABQgEAEgGADQgJAFgMAAQgMABgKgGQgIgEgFgGQgGABgGgBQgNAAgLgJQgIgGgEgJIgIgCIgCALQgEANgLAJQgLAJgNABIgDAAQgMAAgKgGgAhOB2IgEAFIAHgDIgBgFIgCADg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:18.3765,y:5.507}).wait(1).to({graphics:mask_graphics_2,x:17.1826,y:7.9707}).wait(1).to({graphics:mask_graphics_3,x:15.6265,y:9.405}).wait(1).to({graphics:mask_graphics_4,x:13.448,y:9.7738}).wait(1).to({graphics:mask_graphics_5,x:13.448,y:9.7738}).wait(1).to({graphics:mask_graphics_6,x:11.3015,y:11.3203}).wait(1).to({graphics:mask_graphics_7,x:11.3015,y:13.1203}).wait(1).to({graphics:mask_graphics_8,x:11.3015,y:15.1483}).wait(1).to({graphics:mask_graphics_9,x:11.3015,y:18.4009}).wait(1).to({graphics:mask_graphics_10,x:11.3015,y:21.2369}).wait(1).to({graphics:mask_graphics_11,x:11.3015,y:21.8504}).wait(1).to({graphics:mask_graphics_12,x:11.3015,y:21.8504}).wait(1).to({graphics:mask_graphics_13,x:12.1892,y:21.8504}).wait(1).to({graphics:mask_graphics_14,x:13.8059,y:21.8504}).wait(1).to({graphics:mask_graphics_15,x:16.0059,y:21.8504}).wait(1).to({graphics:mask_graphics_16,x:17.3067,y:21.8504}).wait(1).to({graphics:mask_graphics_17,x:17.3067,y:21.8504}).wait(1).to({graphics:mask_graphics_18,x:17.3067,y:21.8504}).wait(1).to({graphics:mask_graphics_19,x:18.1911,y:21.8504}).wait(1).to({graphics:mask_graphics_20,x:20.335,y:21.8504}).wait(68));

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7A500").s().p("AleIUQgUgOgJgWQgIgWADgXIAzkmIjVjOQgRgRgGgXQgFgXAHgXQAHgWASgQQASgPAYgDIEmgrICEkLQALgVAUgNQAUgMAXAAIALABIgSB9IiIESIlAAuIDoDhIg3E/IEeiWIEeCWIg3k/IDNjGICHgrQAEAogcAcIjVDOIAyEmQAEAXgJAWQgJAWgTAOQgUAOgXACQgYACgVgLIkHiLIkHCLQgUAJgTAAQgaAAgWgQg");
	this.shape.setTransform(19.7632,20.8953,0.3455,0.3455);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(87));

	// Слой_2
	this.instance_1 = new lib.Анимация12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.35,16.45);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({x:119.35,alpha:1},24,cjs.Ease.cubicOut).wait(43));

	// Слой_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_21 = new cjs.Graphics().p("ArgBPIAAidIXBAAIAACdg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(21).to({graphics:mask_1_graphics_21,x:119.2,y:34.675}).wait(67));

	// Слой_3
	this.instance_2 = new lib.Анимация10("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(156.9,49.55);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({y:36.3},20,cjs.Ease.cubicInOut).wait(43));

	// Слой_4
	this.instance_3 = new lib.Анимация11("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(87.75,48.45);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({y:34.7},19,cjs.Ease.cubicInOut).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.7,201.7,45.300000000000004);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 20000
	this.instance = new lib.Символ2("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(95.05,117.4,1,1,0,0,0,95.1,20.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(88));

	// Слой_2
	this.instance_1 = new lib.Анимация1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(115.55,51.75);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:95.55,alpha:1},21,cjs.Ease.cubicOut).wait(69));

	// Слой_3
	this.instance_2 = new lib.Анимация2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(97.15,14.95);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:77.15,alpha:1},24,cjs.Ease.cubicOut).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,0,161.1,149.5);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bg
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(364).to({_off:false},0).to({alpha:1},18).wait(1));

	// FlashAICB
	this.instance_1 = new lib.Символ11("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.1,160.15,1,1,0,0,0,91.5,15.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(252).to({_off:false},0).to({alpha:1},18).wait(113));

	// logo
	this.instance_2 = new lib.Символ10("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(121.05,44.1,1,1,0,0,0,105.4,15.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(228).to({_off:false},0).wait(155));

	// bg
	this.instance_3 = new lib.bg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120,200,1,1,0,0,0,120,200);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(207).to({_off:false},0).to({alpha:1},21).wait(155));

	// t1
	this.instance_4 = new lib.Символ1("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(118.8,171.75,1,1,0,0,0,95.1,78.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).to({_off:true},189).wait(155));

	// jivi
	this.instance_5 = new lib.Символ7("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.05,13.05,1,1,0,0,0,94.5,2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4).to({_off:false},0).to({_off:true},224).wait(155));

	// pig
	this.instance_6 = new lib.Символ13("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(121.95,331.15,0.9283,0.9283,0,0,0,75.5,46.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({_off:false},0).wait(316));

	// logo
	this.instance_7 = new lib.Символ6("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(119.5,48.7,1,1,0,0,0,95.8,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},228).wait(155));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(383));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.4,240,401.4);


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
p.nominalBounds = new cjs.Rectangle(120,200,120,200);
// library properties:
lib.properties = {
	id: '0DA85D765483451782C6CB3230505573',
	width: 240,
	height: 400,
	fps: 28,
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