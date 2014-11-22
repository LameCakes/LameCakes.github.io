function Far(path){
	var texture = PIXI.Texture.fromImage(path)
	PIXI.TilingSprite.call(this, texture, 
							texture.baseTexture.width, 
							texture.baseTexture.height);


	this.position.x=0;
	this.position.y=0;
	this.tilePosition.x=0;
	this.tilePosition.y=0;
}

Far.constructor = Far;
Far.prototype = Object.create(PIXI.TilingSprite.prototype) 