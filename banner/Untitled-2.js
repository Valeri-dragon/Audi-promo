(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Untitled_2_atlas_1", frames: [[0,0,174,224],[0,226,174,224],[176,0,174,224]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.black_clock = function() {
	this.initialize(ss["Untitled_2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.red_clock = function() {
	this.initialize(ss["Untitled_2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.thermos = function() {
	this.initialize(ss["Untitled_2_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.thermos_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.thermos();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.thermos_1, new cjs.Rectangle(0,0,174,224), null);


(lib.text_test = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Каждому прошедшему \nтест-драйв", "21px 'Gotham Pro Narrow Medium'", "#0F1E36");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 244;
	this.text.parent = this;
	this.text.setTransform(123.95,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text_test, new cjs.Rectangle(0,0,248,59.1), null);


(lib.text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("подарок при покупке\nAudi Q3 Sportback", "21px 'Gotham Pro Narrow Medium'", "#0F1E36");
	this.text.textAlign = "center";
	this.text.lineHeight = 25;
	this.text.lineWidth = 245;
	this.text.parent = this;
	this.text.setTransform(124.45,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(0,0,249,55.1), null);


(lib.clock_red = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.red_clock();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock_red, new cjs.Rectangle(0,0,174,224), null);


(lib.clock_black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.black_clock();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.clock_black, new cjs.Rectangle(0,0,174,224), null);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clock_red
	this.instance = new lib.clock_red();
	this.instance.setTransform(119.05,276.05,1,1,0,0,0,87,112);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).to({alpha:1},17).to({alpha:0},18).wait(1));

	// thermos
	this.instance_1 = new lib.thermos_1();
	this.instance_1.setTransform(140.95,269.15,0.6437,0.6438,0,0,0,86.9,112);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(95).to({_off:false},0).to({alpha:1},18).to({alpha:0},18).to({_off:true},1).wait(33));

	// clock_black
	this.instance_2 = new lib.clock_black();
	this.instance_2.setTransform(119.1,277.1,0.6437,0.6437,0,0,0,87,112);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({_off:false},0).to({alpha:1},23).to({alpha:0},17).to({_off:true},1).wait(67));

	// text
	this.instance_3 = new lib.text();
	this.instance_3.setTransform(-137.05,152.35,1,1,0,0,0,124.4,30.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(1).to({regX:124.5,regY:27.5,x:-119.2,y:149.25,alpha:0.0227},0).wait(1).to({x:-101.7,y:149.15,alpha:0.0455},0).wait(1).to({x:-84.45,y:149.05,alpha:0.0682},0).wait(1).to({x:-67.4,y:149,alpha:0.0909},0).wait(1).to({x:-50.65,y:148.9,alpha:0.1136},0).wait(1).to({x:-34.1,y:148.8,alpha:0.1364},0).wait(1).to({x:-17.8,y:148.75,alpha:0.1591},0).wait(1).to({x:-1.75,y:148.65,alpha:0.1818},0).wait(1).to({x:14.1,y:148.6,alpha:0.2045},0).wait(1).to({x:29.7,y:148.5,alpha:0.2273},0).wait(1).to({x:45.05,y:148.4,alpha:0.25},0).wait(1).to({x:60.2,y:148.35,alpha:0.2727},0).wait(1).to({x:75.15,y:148.25,alpha:0.2955},0).wait(1).to({x:89.85,y:148.2,alpha:0.3182},0).wait(1).to({x:104.3,y:148.15,alpha:0.3409},0).wait(1).to({x:118.55,y:148.05,alpha:0.3636},0).wait(1).to({x:125.1,alpha:0.3864},0).wait(1).to({alpha:0.4091},0).wait(1).to({alpha:0.4318},0).wait(1).to({alpha:0.4545},0).wait(1).to({alpha:0.4773},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5227},0).wait(1).to({alpha:0.5455},0).wait(1).to({alpha:0.5682},0).wait(1).to({alpha:0.5909},0).wait(1).to({alpha:0.6136},0).wait(1).to({alpha:0.6364},0).wait(1).to({alpha:0.6591},0).wait(1).to({alpha:0.6818},0).wait(1).to({alpha:0.7045},0).wait(1).to({alpha:0.7273},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7727},0).wait(1).to({alpha:0.7955},0).wait(1).to({alpha:0.8182},0).wait(1).to({alpha:0.8409},0).wait(1).to({alpha:0.8636},0).wait(1).to({alpha:0.8864},0).wait(1).to({alpha:0.9091},0).wait(1).to({alpha:0.9318},0).wait(1).to({alpha:0.9545},0).wait(1).to({alpha:0.9773},0).wait(1).to({alpha:1},0).wait(98).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

	// text_test_drive
	this.instance_4 = new lib.text_test();
	this.instance_4.setTransform(124.95,-176,1,1,0,0,0,123.9,44);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:124,regY:29.5,y:-173.5,alpha:0.0208},0).wait(1).to({x:124.9,y:-156.75,alpha:0.0417},0).wait(1).to({x:124.85,y:-140.2,alpha:0.0625},0).wait(1).to({x:124.8,y:-123.85,alpha:0.0833},0).wait(1).to({x:124.75,y:-107.7,alpha:0.1042},0).wait(1).to({x:124.7,y:-91.8,alpha:0.125},0).wait(1).to({x:124.65,y:-76.05,alpha:0.1458},0).wait(1).to({x:124.55,y:-60.5,alpha:0.1667},0).wait(1).to({x:124.5,y:-45.15,alpha:0.1875},0).wait(1).to({x:124.45,y:-30,alpha:0.2083},0).wait(1).to({x:124.4,y:-15.05,alpha:0.2292},0).wait(1).to({x:124.35,y:-0.3,alpha:0.25},0).wait(1).to({x:124.3,y:14.25,alpha:0.2708},0).wait(1).to({x:124.25,y:28.6,alpha:0.2917},0).wait(1).to({x:124.2,y:42.75,alpha:0.3125},0).wait(1).to({x:124.15,y:56.75,alpha:0.3333},0).wait(1).to({x:124.1,y:70.55,alpha:0.3542},0).wait(1).to({y:82.55,alpha:0.375},0).wait(1).to({alpha:0.3958},0).wait(1).to({alpha:0.4167},0).wait(1).to({alpha:0.4375},0).wait(1).to({alpha:0.4583},0).wait(1).to({alpha:0.4792},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.5208},0).wait(1).to({alpha:0.5417},0).wait(1).to({alpha:0.5625},0).wait(1).to({alpha:0.5833},0).wait(1).to({alpha:0.6042},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.6458},0).wait(1).to({alpha:0.6667},0).wait(1).to({alpha:0.6875},0).wait(1).to({alpha:0.7083},0).wait(1).to({alpha:0.7292},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.7708},0).wait(1).to({alpha:0.7917},0).wait(1).to({alpha:0.8125},0).wait(1).to({alpha:0.8333},0).wait(1).to({alpha:0.8542},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.8958},0).wait(1).to({alpha:0.9167},0).wait(1).to({alpha:0.9375},0).wait(1).to({alpha:0.9583},0).wait(1).to({alpha:0.9792},0).wait(1).to({alpha:1},0).wait(113).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-136.4,-20,386,408.1);
// library properties:
lib.properties = {
	id: '5E99D7AAECDE9E4C9FFFF123C2DEB837',
	width: 250,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Untitled_2_atlas_1.png?1611581402160", id:"Untitled_2_atlas_1"}
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
an.compositions['5E99D7AAECDE9E4C9FFFF123C2DEB837'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;