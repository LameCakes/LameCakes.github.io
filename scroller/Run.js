function Run(path){
	var runtexture = PIXI.Texture.fromImage("resources/run.png");
	PIXI.TilingSprite.call(this, runtexture, 
							30, 
							36);


	this.position.x=256;
	this.position.y=290;
	this.tilePosition.x=0;
	this.tilePosition.y=0;

				
}

Run.constructor = Run;
Run.prototype = Object.create(PIXI.TilingSprite.prototype);

Run.prototype.update = function(){

	var me = this;

	for(i=0;i<5;i++){
		setTimeout(function(){					
			me.tilePosition.x -=30;
			renderer.render(stage);
		}, 500);
	}
	

	/*
	var me = Idle.prototype
	this.idle.tilePosition.x -= 26;
	renderer.render(stage);

	setTimeout(function(){
		requestAnimFrame(function(){me.idlesprite();});
	}, 100);*/
}