function Idle(path){
	var idletexture = PIXI.Texture.fromImage(path);
	PIXI.TilingSprite.call(this, idletexture, 
							26, 
							36);



	this.position.x=256;
	this.position.y=290;
	this.tilePosition.x=0;
	this.tilePosition.y=0;

				
}

Idle.constructor = Idle;
Idle.prototype = Object.create(PIXI.TilingSprite.prototype);

Idle.prototype.update = function(e){
		
	var me = Idle.prototype
	this.tilePosition.x -= 26;
	renderer.render(stage);

	setTimeout(function(){
		requestAnimFrame(function(){me.idlesprite();});
	}, 100);
}