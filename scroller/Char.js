function Char(path){
	var idletexture = PIXI.Texture.fromImage(path + "/idle.png");
	this.idle = new PIXI.TilingSprite(idletexture, 
							26, 
							36);


	this.idle.position.x=256;
	this.idle.position.y=290;
	this.idle.tilePosition.x=0;
	this.idle.tilePosition.y=0;

	var runtexture = PIXI.Texture.fromImage(path + "/run.png");
	this.run = new PIXI.TilingSprite(runtexture, 
							30, 
							36);



	this.run.position.x=256;
	this.run.position.y=290;
	this.run.tilePosition.x=0;
	this.run.tilePosition.y=0;

	var runbtexture = PIXI.Texture.fromImage(path + "/runb.png");
	this.runb = new PIXI.TilingSprite(runbtexture, 
							30, 
							36);

	this.runb.position.x=256;
	this.runb.position.y=290;
	this.runb.tilePosition.x=60;
	this.runb.tilePosition.y=0;	


};

Char.constructor = Char;
Char.prototype = Object.create(PIXI.TilingSprite.prototype);

Char.prototype.setHeight = function(height){
	this.idle.position.y = height;
}; 


Char.prototype.addIdle = function(stage){
	stage.addChild(this.idle);
}

Char.prototype.removeIdle = function(stage){
	stage.removeChild(this.idle);
}

Char.prototype.addRun = function(stage){
	stage.addChild(this.run);
}

Char.prototype.addRunb = function(stage){
	stage.addChild(this.runb);
}

Char.prototype.removeRun = function(stage){
	stage.removeChild(this.run);
}

Char.prototype.idlesprite = function(){
	var me = Char.prototype
	this.idle.tilePosition.x -= 26;
	renderer.render(stage);

	setTimeout(function(){
		requestAnimFrame(function(){me.idlesprite();});
	}, 100);
}


Char.prototype.updateforward = function(scroll) {
	var run = this.run;
	this.runsprite(scroll, 1, run);
};

Char.prototype.updatebackward = function(scroll) {
	this.runsprite(scroll, -1, this.runb);
};

Char.prototype.runsprite = function(scroll, dir, texture){
	var me = Char.prototype
	texture.tilePosition.x -= dir*30;
	renderer.render(stage);

	setTimeout(function(){
		if(scroll) {requestAnimFrame(me.runsprite)};
		}, 100);
				
}

			