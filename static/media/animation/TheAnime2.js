(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/TheAnime2_atlas_.png", id:"TheAnime2_atlas_"}
		//,	{src:"sounds/music2.mp3", id:"music2"}
	]
};



lib.ssMetadata = [
		{name:"TheAnime2_atlas_", frames: [[0,0,1920,1080],[1922,0,1131,1028],[1922,1030,1131,1028],[0,1082,1131,1028],[0,2112,1131,1028],[1133,2060,1131,1028],[1133,1082,305,264],[1440,1082,119,119]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.BG3 = function() {
	this.spriteSheet = ss["TheAnime2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Leland01 = function() {
	this.spriteSheet = ss["TheAnime2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Leland02 = function() {
	this.spriteSheet = ss["TheAnime2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Leland03 = function() {
	this.spriteSheet = ss["TheAnime2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Leland04 = function() {
	this.spriteSheet = ss["TheAnime2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Leland05 = function() {
	this.spriteSheet = ss["TheAnime2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lelandLogo = function() {
	this.spriteSheet = ss["TheAnime2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Play = function() {
	this.spriteSheet = ss["TheAnime2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Play();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,119);


(lib.LelandSalute = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leland01();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540);

	this.instance_1 = new lib.Leland02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-960,-540);

	this.instance_2 = new lib.Leland03();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-960,-540);

	this.instance_3 = new lib.Leland04();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-960,-540);

	this.instance_4 = new lib.Leland05();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},61).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},2).wait(143));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-960,-540,1130.9,1027.9);


(lib.BG3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BG3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1919.8,1079.9);


(lib.PlayButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(153.5,153.5,1,1,0,0,0,153.5,153.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,119);


(lib.LelandLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.PlayButton();
	this.instance.parent = this;
	this.instance.setTransform(262.5,256.5,1.992,1.992,0,0,0,120,120);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({alpha:1},10).wait(91).to({alpha:0},10).wait(50));

	// Layer 1
	this.instance_1 = new lib.lelandLogo();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,305,264);


(lib.LelandAnime3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.instance = new lib.LelandLogo();
	this.instance.parent = this;
	this.instance.setTransform(628,-336.1,1,1,0,0,0,152.5,131.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

	// Leland
	this.instance_1 = new lib.LelandSalute();
	this.instance_1.parent = this;
	this.instance_1.setTransform(262.6,-8,1,1,0,0,0,-394.6,-26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(220));

	// BG3
	this.instance_2 = new lib.BG3_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,0,1,1,0,0,0,959.9,539.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-959.8,-539.9,1919.8,1079.9);


// stage content:
(lib.TheAnime2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("music2",7);
	}
	this.frame_529 = function() {
		this.gotoAndPlay("695");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(529).call(this.frame_529).wait(1));

	// Layer 28
	this.instance = new lib.LelandAnime3();
	this.instance.parent = this;
	this.instance.setTransform(458.7,900.6,1.672,1.672);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:960,y:540},150).wait(380));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.1,537.9,3209.7,1805.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;