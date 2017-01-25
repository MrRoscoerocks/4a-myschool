window.addEventListener('load', function() {

	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var movePlayer = function() {
		player.isMoving = true;
	};
	var stopPlayer = function() {
		player.isMoving = false;
	};
	//
	canvas.addEventListener("mousedown", movePlayer);
	//
	canvas.addEventListener("mouseup", stopPlayer);

	var CANVAS_WIDTH = 600;
	var CANVAS_HEIGHT = 400;
	var GAME_WIDTH = 400;
	var GAME_HEIGHT = 360;
	var gameLive = true;
	
	var sprites = {};

	var player = {
		x : 50,
		y : 180,
		speedX : 5,
		w : 40,
		h : 40,
		isMoving : false,
		myColor : "#000000"
	};
	
	
	var goal = {
		x : 540,
		y : 180,
		w : 50,
		h : 36
	};
	

	var enemies = [{
		x : 100,
		y : 0,
		speedY : 2,
		w : 40,
		h : 40,
		myColor : "#00FF00"
	}, {
		x : 200,
		y : 0,
		speedY : 3,
		w : 40,
		h : 40,
		myColor : "#FFFF00"
	}, {
		x : 300,
		y : 0,
		speedY : 2,
		w : 40,
		h : 40,
		myColor : "#00FF00"
	}, {
		x : 400,
		y : 0,
		speedY : 3,
		w : 40,
		h : 40,
		myColor : "#FFFF00"
	}];



	
	
	var load = function(){
		sprites.player = new Image();
		sprites.player.src = 'Sprite/mrKrabs.png';
		
		sprites.goal = new Image();
		sprites.goal.src = 'Sprite/chest.png';
		
		sprites.enemy = new Image();
		sprites.enemy.src = 'Sprite/plankton.png';
		
		sprites.floor = new Image();
		sprites.floor.src = 'Sprite/houses.jpg';
		
	};
	
	
	
	



	var update = function() {
		
		
		//												Check for player in the goal
		if(checkCollision(player, goal)){
			gameLive = false;
			alert('You Win!');
			// pump up difficulty level + 1
			window.location = "";
		}
		
		
		
		
		
		

		//												Update Player
		if (player.isMoving) {
			player.x += player.speedX;
		}

		//												Update Enemies
		var j = 0;
		// just a counter
		var n = enemies.length;

		while (j < n) {
			//											Check for Collision

			if(checkCollision(player, enemies[j])){
				gameLive = false;
				alert("Game Over");
				// make difficulty level = 0
				window.location = "";
			};


			enemies[j].y += enemies[j].speedY;

			if (enemies[j].y >= GAME_HEIGHT) {
				enemies[j].y = GAME_HEIGHT;
				enemies[j].speedY *= -1;
			} else if (enemies[j].y < 0) {
				enemies[j].speedY *= -1;
			}

			//if (enemies[j].y >= 400) {enemies[j].y = 0;}
			j += 1;

		}
	};

	var draw = function() {

		ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
		
		
		ctx.drawImage(sprites.floor, 0, 0);
		
		
		
		

		//												Draw Player
		ctx.fillStyle = player.myColor;
		//ctx.fillRect(player.x, player.y, player.w, player.h);
		ctx.drawImage(sprites.player, player.x, player.y);

		// 												Draw Goal
		ctx.fillStyle = "rgba(200, 150, 0, 0.75)";
		//ctx.fillRect(goal.x, goal.y, goal.w, goal.h);
		ctx.drawImage(sprites.goal, goal.x, goal.y);

		//												Draw Enemies
		//var j = 0;
		//var n = enemies.length;
		//while (j < n) {
		for (var j = 0; j < enemies.length; j++) {
			if (enemies[j].speedY > 0) {
				ctx.fillStyle = enemies[j].myColor;
			} else if (enemies[j].speedY < 0) {
				ctx.fillStyle = "#0000FF";
			} else {
				ctx.fillStyle = "#000000";
			}

			ctx.drawImage(sprites.enemy, enemies[j].x, enemies[j].y);
			//ctx.fillStyle = enemies[j].myColor;
			//ctx.fillRect(enemies[j].x, enemies[j].y, enemies[j].w, enemies[j].h);
			//j ++;
		}

	};

	var step = function() {
		update();
		draw();

		if (gameLive) {

			window.requestAnimationFrame(step);
		}
	};
	
	var checkCollision = function(rect1, rect2){
		var closeOnWidth = Math.abs(rect1.x - rect2.x) <= Math.max(rect1.w, rect2.w);
		var closeOnHeight = Math.abs(rect1.y - rect2.y) <= Math.max(rect1.h, rect2.h);
		return closeOnHeight && closeOnWidth;
	};
	load();
	step();
});
