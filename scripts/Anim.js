function particle(velX, velY, velZ, posX, posY, posZ) {
				this.velX = velX;
				this.velY = velY;
				this.velZ = velZ;
				this.posX = posX;
				this.posY = posY;
				this.posZ = posZ;
				this.tempX = posX;
				this.tempY = posY;
				this.tempZ = posZ;
			}

			var renderCount = 0;
			var canvas = document.getElementById("canvas2");
/*
			if(canvas.getContext) {
				var context = canvas.getContext('2d');
				context.beginPath();
				context.rect(50, 50, 100, 100);
				context.fillStyle = "#ffff00";
				context.fill();
			}
*/
/*
			var ctx=canvas.getContext('2d');
			ctx.beginPath();
			ctx.fillStyle = "#ffff00";
			ctx.fill();
*/

/*			var canvasOffset=$("#canvas2").offset();

			var offsetX = canvasOffset.left;
			var offsetY = canvasOffset.top;

			function handleMouseDown(e) {
				mouseX=parseInt(e.clientX-offsetX);
				mouseY=parseInt(e.clientY-offsetY);
				document.getElementById("mouseCoordCanvas").innerHTML = "X: " + mouseX + "; Y: " + mouseY;
			}

			$("#canvas").mousedown(function(e){handleMouseDown(e);});
*/
			var scene = new THREE.Scene();
			scene.background = new THREE.Color ( 0xeeeeee );

			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
			document.onmousedown = function(event){
				document.getElementById("mouse").innerHTML = "DOWN";
				addObject();
			}
			document.onmouseup = function(event){
				document.getElementById("mouse").innerHTML = "UP";
			}
			document.onmousemove = function(event){

				yCoord=event.clientY - 400; // document.getElementByType("canvas").style.top;
			    	var mouse2D = new THREE.Vector3();
			    	var mouse3D = new THREE.Vector3();
			    	mouse2D.x = (event.clientX / window.innerWidth) * 2 - 1;
			    	mouse2D.y = -(event.clientY / window.innerHeight) * 2 + 1;
			   	mouse2D.z = 0.5;

	//		    	mouse3D = projector.unprojectVector(mouse2D.clone(), camera);

				document.getElementById("mouseCoord").innerHTML = event.clientX + ", " + yCoord;
			}

			renderImage.onclick = function() {
				document.getElementById("renderCount").innerHTML = renderCount;
			}

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );


			function getMousePosition(clientX, clientY) {
			    var mouse2D = new THREE.Vector3();
			    var mouse3D = new THREE.Vector3();
			    mouse2D.x = (clientX / window.innerWidth) * 2 - 1;
			    mouse2D.y = -(clientY / window.innerHeight) * 2 + 1;
			    mouse2D.z = 0.5;
			    mouse3D = projector.unprojectVector(mouse2D.clone(), camera);
			    return mouse3D;
			}

			function onDocumentMouseMove(event) {
			    	event.preventDefault();

			    	var mouse3D = getMousePosition(event.clientX, event.clientY);
				document.getElementById("mouseCanvas").innerHTML = "OK";
			    	document.getElementById("mouseCanvas").innerHTML = mouse3D.x + ' ' + mouse3D.y + ' ' + mouse3D.z;
				document.getElementById("mouseCanvas").innerHTML = " " + mouse3D.x + ", " + mouse3D.y;
			}


			document.body.appendChild( renderer.domElement );

			renderer.setSize( 800, 600 );
//			renderer.setClearColorHex( 0xffff00 , 1)

// Spare Rectangle
/*
			canvas.style.top = "20px";
			canvas.style.left = "500px";
*/
//			renderer.domElement.style.left = "10px";
//			renderer.domElement.width = "500px";

			document.getElementById("window").innerHTML = "Width: " + renderer.domElement.style.width + "; y: " + renderer.domElement.style.height; //.style.top; //document.clientX;
//			document.getElementById("window").innerHTML = "Width: " + renderer.domElement.style.width + "; y: " + canvas2.style.top; //.style.top; //document.clientX;

			var geometry = new THREE.BoxGeometry( 1, 1, 1 );
			var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			var geometry1 = new THREE.BoxGeometry( 1, 1, 1 );
			var material1 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
			var geometry2 = new THREE.BoxGeometry( 1, 1, 1 );
			var material2 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
			var geometry3 = new THREE.BoxGeometry( 1, 1, 1 );
			var material3 = new THREE.MeshBasicMaterial( { color: 0xffffff } );

			var c=[];
			c.push(new THREE.Mesh( geometry, material ));
			c.push(new THREE.Mesh( geometry1, material1 ));
			c.push(new THREE.Mesh( geometry2, material2 ));

			scene.add( c[0] );
			scene.add( c[1] );
			scene.add( c[2] );

			document.getElementById("scene").innerHTML = scene.position.y;

			var cube = new THREE.Mesh( geometry, material );
			var cube1 = new THREE.Mesh( geometry1, material1 );
			var cube2 = new THREE.Mesh( geometry2, material2 );

			camera.position.z = 20;

			cube.position.x = 1.5;
			cube.position.y = 2;
			cube.position.z = 3;
			cube2.position.x = 1;
			cube2.position.y = 4;
			cube2.position.z = 6;

			var cubeVelX = 2;
			var cube1VelX = 0.2;
			var cube2VelX = 3;

			var cubeVelY = 1;
			var cube1VelY = 2;
			var cube2VelY = 1.5;

			var cubeVelZ = -6;
			var cube1VelZ = 4;
			var cube2VelZ = 0.5;
			
			var cubeForce = 0;
			var cube1Force = 0;
			var cube2Force = 0;

			var distX = 0;
			var distY = 0;
			var distZ = 0;

			p=[];
			p.push(new particle(1,2,3,1,20,3));
			p.push(new particle(2,3,1,2,30,1));
			p.push(new particle(3,1,2,3,10,2));

			p1 = new particle(1,2,3,4,5,6);
			p2 = new particle(1,2,3,4,5,6);
			p3 = new particle(1,2,3,4,5,6);

			var count=0;
/*
			var addObject = function() {
				renderCount = renderCount + 1;
				document.getElementById("renderCount").innerHTML = renderCount;
				p.push( new particle(Math.random()*4-2, Math.random()*4-2, Math.random()*4-2, Math.random()*4-2, Math.random()*4-2, Math.random()*4-2) );
				
				if(Math.random()*3 > 2)
					c.push( new THREE.Mesh( geometry, material ) );
				if(Math.random()*3 > 1 && Math.random()*3 < 2 )
					c.push( new THREE.Mesh( geometry1, material1 ) );
				if(Math.random()*3 < 1 )
					c.push( new THREE.Mesh( geometry2, material2 ) );

				scene.add( c[renderCount+2] );

			}
*/
			var addObjectManually = function() {
				if ( document.getElementById("mouse").innerHTML == "DOWN" ) {
				    renderCount = renderCount + 1;
				    document.getElementById("renderCount").innerHTML = renderCount;
				    p.push( new particle(0, 0, 0, 0, 0, 0) );
				    c.push( new THREE.Mesh( geometry3, material3 ) );
				    scene.add( c[c.length-1] );

				    var table = document.getElementById("myTable");
				    var row = table.insertRow(c.length-1);
				    var cell1 = row.insertCell(0);
				    var cell2 = row.insertCell(1);
				    var cell3 = row.insertCell(2);

				    var indent = c.length;
				    cell1.innerHTML = '<div id="' + indent + 'x" class="divType"></div>';
				    cell2.innerHTML = '<div id="' + indent + 'y" class="divType"></div>';
				    cell3.innerHTML = '<div id="' + indent + 'z" class="divType"></div>';
				}
			}

			var addObjectautonatically = function() {
				renderCount = renderCount + 1;
				document.getElementById("renderCount").innerHTML = renderCount;
				p.push( new particle(Math.random()*4-2, Math.random()*4-2, Math.random()*4-2, Math.random()*4-2, Math.random()*4-2, Math.random()*4-2) );

				var randomized=Math.random()*3;
				if(randomized > 2)
					c.push( new THREE.Mesh( geometry, material ) );
				if(randomized > 1 && randomized < 2 )
					c.push( new THREE.Mesh( geometry1, material1 ) );
				if(randomized < 1 )
					c.push( new THREE.Mesh( geometry2, material2 ) );

				scene.add( c[renderCount+2] );

				var table = document.getElementById("myTable");
			        var row = table.insertRow(renderCount+2);
				var cell1 = row.insertCell(0);
				var cell2 = row.insertCell(1);
				var cell3 = row.insertCell(2);

			   	var indent = renderCount+3;
				cell1.innerHTML = '<div id="' + indent + 'x" class="divType"></div>';
				cell2.innerHTML = '<div id="' + indent + 'y" class="divType"></div>';
				cell3.innerHTML = '<div id="' + indent + 'z" class="divType"></div>';
			}

			var render2 = function() {
//				renderer.setClearColorHex( 0xffff00 , 1)
				document.getElementById("arrayLength").innerHTML = p.length;
//				requestAnimationFrame( render );
				for(var i=0; i<(p.length); i++) {
					for(var j=0; j<(p.length); j++) {
						if(i !== j) {
							distX = p[i].tempX - p[j].tempX;
							distY = p[i].tempY - p[j].tempY;
								distZ = p[i].tempZ - p[j].tempZ;
							cubeForce =  Math.sqrt((distX*distX)+(distY*distY)+(distZ*distZ));
							p[i].velX += distX / (cubeForce*cubeForce);
							p[i].velY += distY / (cubeForce*cubeForce);
							p[i].velZ += distZ / (cubeForce*cubeForce);
						}
					}
					p[i].posX -= p[i].velX/30;
					p[i].posY -= p[i].velY/30;
					p[i].posZ -= p[i].velZ/30;
					p[i].posX -= p[i].velX/30;
					p[i].posY -= p[i].velY/30;
					p[i].posZ -= p[i].velZ/30;


					distX = p[i].posX;
					distY = p[i].posY;
					distZ = p[i].posZ;
					cubeForce =  Math.sqrt((distX*distX)+(distY*distY)+(distZ*distZ));
					p[i].velX += distX / (cubeForce*cubeForce);
					p[i].velY += distY / (cubeForce*cubeForce);
					p[i].velZ += distZ / (cubeForce*cubeForce);

					p[i].posX -= p[i].velX/30;
					p[i].posY -= p[i].velY/30;
					p[i].posZ -= p[i].velZ/30;
					p[i].posX -= p[i].velX/30;
					p[i].posY -= p[i].velY/30;
					p[i].posZ -= p[i].velZ/30;
				}
				var xCam=0;
				var yCam=0;
				var zCam;
				var count2=0;
				for(var i=0; i<(p.length); i++) {
					if(i===0) {
						zCam = p[i].posZ;
					}
					if(zCam < p[i].tempZ) {
						zCam = p[i].posZ;
					}
					xCam += p[i].posX;
					yCam += p[i].posY;
					count2++;
					p[i].tempX = p[i].posX;
					p[i].tempY = p[i].posY;
					p[i].tempZ = p[i].posZ;
					c[i].position.x = p[i].posX;
					c[i].position.y = p[i].posY;
					c[i].position.z = p[i].posZ;
				}

				camera.position.x = xCam / count2;
				camera.position.y = yCam / count2;
				camera.position.z = zCam + 20;

				count++;
				document.getElementById("counter").innerHTML = count;
				document.getElementById("1z%").style.height = 20 + camera.position.z - c[0].position.z;
				document.getElementById("2z%").style.height = 20 + camera.position.z - c[1].position.z;
				document.getElementById("3z%").style.height = 20 + camera.position.z - c[2].position.z;

				for(var dat=0; dat<(p.length); dat++) {
					var dat1 = dat + 1;
					document.getElementById(dat1 + "x").innerHTML = dat1 + "x: " + Math.round(p[dat].posX);
					document.getElementById(dat1 + "y").innerHTML = dat1 + "y: " + Math.round(p[dat].posY);
					document.getElementById(dat1 + "z").innerHTML = dat1 + "z: " + Math.round(p[dat].posZ);
				}

/*
				document.getElementById("1x").innerHTML = "1x: " + Math.round(p[0].posX);
				document.getElementById("1y").innerHTML = "1y: " + Math.round(p[0].posY);
				document.getElementById("1z").innerHTML = "1z: " + Math.round(p[0].posZ);
				document.getElementById("2x").innerHTML = "2x: " + Math.round(p[1].posX);
				document.getElementById("2y").innerHTML = "2y: " + Math.round(p[1].posY);
				document.getElementById("2z").innerHTML = "2z: " + Math.round(p[1].posZ);
				document.getElementById("3x").innerHTML = "3x: " + Math.round(p[2].posX);
				document.getElementById("3y").innerHTML = "3y: " + Math.round(p[2].posY);
				document.getElementById("3z").innerHTML = "3z: " + Math.round(p[2].posZ);
				document.getElementById("4x").innerHTML = "4x: " + Math.round(p[3].posX);
				document.getElementById("4y").innerHTML = "4y: " + Math.round(p[3].posY);
				document.getElementById("4z").innerHTML = "4z: " + Math.round(p[3].posZ);
				document.getElementById("camX").innerHTML = "camX: " + Math.round(camera.position.x);
				document.getElementById("camY").innerHTML = "camY: " + Math.round(camera.position.y);
				document.getElementById("camZ").innerHTML = "camZ: " + Math.round(camera.position.z);
*/

				document.getElementById("camX").innerHTML = "camX: " + Math.round(camera.position.x);
				document.getElementById("camY").innerHTML = "camY: " + Math.round(camera.position.y);
				document.getElementById("camZ").innerHTML = "camZ: " + Math.round(camera.position.z);

				document.getElementById("windowWidth").innerHTML = window.innerWidth/2;

/*
function displayText(textDiv, text, top, left) {

textDiv = document.createElement('div');
textDiv.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
textDiv.style.width = 100;
//text3.style.backgroundColor = "blue";
textDiv.style.color = "white";
textDiv.innerHTML = text;
textDiv.style.top = top + 'px';
textDiv.style.left = left + 'px';
document.body.appendChild(textDiv);
}


var textDiv;
var textDiv1;
displayText(textDiv , p[0].posX , 50 , 405);
displayText(textDiv1 , "newText2" , 70 , 405);

function amendText(text, text2) {
	getElementById(""+text).innerHTML = ""+text2;
}
//amendText(textDiv1 , "text3");

var text3 = document.createElement('div');
text3.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
text3.style.width = 100;
//text3.style.backgroundColor = "blue";
text3.style.color = "white";
text3.innerHTML = "hi there!";
text3.style.top = 100 + 'px';
text3.style.left = 405 + 'px';
document.body.appendChild(text3);

var text2 = document.createElement('div');
text2.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
text2.style.width = 100;
//text2.style.backgroundColor = "blue";
text2.style.color = "white";
text2.innerHTML = "hi there!";
text2.style.top = 200 + 'px';
text2.style.left = 405 + 'px';
document.body.appendChild(text2);
*/
				renderer.render(scene, camera);
			};

			setInterval(render2, 20);
			setInterval(addObjectautonatically, 20);
		//	setInterval(addObjectManually, 20);
