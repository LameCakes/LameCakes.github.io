function Background(stage){

				this.far = new Tile("resources/bg-far.png");
				stage.addChild(this.far);

				this.mid = new Tile("resources/bg-mid.png");
				this.mid.setHeight(128);
				stage.addChild(this.mid);

				
				this.front = new Tile("resources/front.png");
				this.front.setHeight(230);
				stage.addChild(this.front);
}

Background.prototype.update = function(direction, scroll) {
	var me = Background.prototype
	this.far.update(direction*0.128);
	this.mid.update(direction*0.64);

	setTimeout(function(){
		if(scroll) {requestAnimFrame(me.update)};
		}, 100);

};
