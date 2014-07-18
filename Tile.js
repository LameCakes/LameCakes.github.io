function Tile(path){
	var texture = PIXI.Texture.fromImage(path)
	PIXI.TilingSprite.call(this, texture, 
							texture.baseTexture.width, 
							texture.baseTexture.height);


	this.position.x=0;
	this.position.y=0;
	this.tilePosition.x=0;
	this.tilePosition.y=0;
};

Tile.constructor = Tile;
Tile.prototype = Object.create(PIXI.TilingSprite.prototype);

Tile.prototype.setHeight = function(height){
	this.position.y = height;
}; 

Tile.prototype.update = function(speed) {
	this.tilePosition.x -= speed;
};