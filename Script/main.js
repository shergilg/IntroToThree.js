console.log("Its working")


const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);
                                    //FOV(%), Aspect Ratio(Usually want it width/height), near, far clipping plane( things closer than near and further than far wont be rendered)

const renderer = new THREE.WebGLRenderer();
// intialize the renderer..... we can use any renderer it doesnt have to WebGL
renderer.setSize( window.innerWidth, window.innerHeight);
//               Size at which we want to render our app( in this case its the height and width of the browser)

// to render the app at half of the size...... renderer.setSize(window.innerWidth/2, window.innerHeight/2, false)\
// this renders the app at half of the size of the browser window
document.body.appendChild( renderer.domElement);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Add cube 

var geometry = new THREE.BoxGeometry( 2, 3, 4 ); //vertices and faces of the cube
var material = new THREE.MeshBasicMaterial( { color: 0x00ff } ); //color of the cube
var cube = new THREE.Mesh( geometry, material ); //Mesh takes geometry and applies material to it

scene.add( cube );

camera.position.z = 8; // position of the camera.... higher the value, the further away the camera

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//render function to render the object onto the screen

function render() {
    requestAnimationFrame( render ); // this is so much better than updating every interval since it stops when we click on the other tab in the browser saving the battery and power
    cube.rotation.x += 0.01; //rotates in the x direction
    cube.rotation.y += 0.01; //rotates in the y direction
    // Camera is in the z direction
    renderer.render( scene, camera ); 
}


//function calls
render();