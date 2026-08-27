$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform (100,650,100,5,); 
    createPlatform (100,650,5,100);
    createPlatform (200,550,5,100);
    createPlatform (200,550,100,5,);
    createPlatform (650,350,10,500,);
    createPlatform (900,450,200,5,);
    createBadPlatform (100,725,550,15,);
    createPlatform (550,500,100,5,);
    createPlatform (550,365,100,5,);
    createBadPlatform (600,500,50,5,);
    createPlatform (900,600,100,5,);
    createPlatform (1100,0,10,450,);
    createPlatform (1100,600,100,5,);
    createPlatform (1000,600,100,5,);
    createPlatform (1200,100,10,500,);
    createPlatform (1150,500,50,5,);
    createPlatform (1100,375,50,5,);
    createPlatform (1150,250,50,5,);
    createPlatform (1100,125,50,5,);
    createPlatform (1200,100,100,5,);
    createPlatform (1300,200,100,5,);
    createPlatform (1200,300,100,5,);
    createPlatform (1300,400,100,5,);
    createPlatform (1200,500,100,5,);
    createPlatform (1300,600,100,5,);
    createPlatform (1200,700,100,5,);
    createBadPlatform (800,600,100,5,);
    createBadPlatform (700,600,200,5,);
    createBadPlatform (650,600,50,5,);
    createPlatform (650,700,650,5,);
    createPlatform (1300,600,100,5,);
    createPlatform(400,500,100,5)

  


    




    // TODO 3 - Create Collectables
    createCollectable("steve",670,670,0,0)
    createCollectable("diamond",600,300,5,0)
    createCollectable("diamond",1250,50,5,0)
    

    
    // TODO 4 - Create Cannons

    createCannon("top", 200, 1000, 25, 10, 100,1200, 5)
    createCannon("top", 300, 750, 25, 10, 50, 1200, 5)
    createCannon("top", 400, 500, 25, 10, 25, 1200, 5)
    createCannon("right", 200, 2000, 25, 10, 100,700, 5)
    createCannon("right", 400, 2000, 25, 10, 50, 700, 5)
    createCannon("right", 600, 2000, 25, 10, 25, 700, 5)

   
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
