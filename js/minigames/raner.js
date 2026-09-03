let speed = 5; 
let position = 90; 
let scene = 1;
let isGameOver = false; 

let raner_bg = new Image();
raner_bg.src = 'assets/images/raner/bg.jpg';
raner_bg.style.width = '100%';
raner_bg.style.height = '100%';
raner_bg.style.objectFit = 'cover';
raner_bg.style.position = 'absolute'; 
raner_bg.style.top = '0px';
raner_bg.style.left = '0px';
raner_bg.style.zIndex = '10'; 

let raner_bg2 = new Image();
raner_bg2.src = 'assets/images/raner/bg2.jpg';
raner_bg2.style.width = '100%';
raner_bg2.style.height = '100%';
raner_bg2.style.objectFit = 'cover';
raner_bg2.style.position = 'absolute'; 
raner_bg2.style.top = '0px';
raner_bg2.style.left = '0px';
raner_bg2.style.zIndex = '10'; 

let raner_bg3 = new Image();
raner_bg3.src = 'assets/images/raner/bg3.jpg';
raner_bg3.style.width = '100%';
raner_bg3.style.height = '100%';
raner_bg3.style.objectFit = 'cover';
raner_bg3.style.position = 'absolute'; 
raner_bg3.style.top = '0px';
raner_bg3.style.left = '0px';
raner_bg3.style.zIndex = '10'; 

let raner_me_R = new Image();
raner_me_R.src = `assets/images/raner/run_R.gif`;
raner_me_R.style.width = '210px';
raner_me_R.style.height = '200px';
raner_me_R.style.position = 'absolute';
raner_me_R.style.transform = 'translateX(-50%)';
raner_me_R.style.zIndex = '11';
raner_me_R.style.top = '400px'; 
raner_me_R.style.left = `${position}px`; 

let raner_me_L = new Image();
raner_me_L.src = `assets/images/raner/run_L.gif`;
raner_me_L.style.width = '210px';
raner_me_L.style.height = '200px';
raner_me_L.style.position = 'absolute';
raner_me_L.style.transform = 'translateX(-50%)';
raner_me_L.style.zIndex = '11';
raner_me_L.style.top = '400px'; 
raner_me_L.style.left = `${position}px`; 

let raner_stay_me = new Image();
raner_stay_me.src = `assets/images/raner/stay.png`;
raner_stay_me.style.width = '200px';
raner_stay_me.style.height = '200px';
raner_stay_me.style.position = 'absolute';
raner_stay_me.style.transform = 'translateX(-50%)';
raner_stay_me.style.zIndex = '11';
raner_stay_me.style.top = '400px';
raner_stay_me.style.left = `${position}px`; 

let isGameInitialized = false;

function raner_game(event) {
    console.log("raner function called FINISHED");
    //spawn all 
    const container = document.querySelector('.image_area');
    if (!container) return;
    if (!container.contains(raner_bg)) container.append(raner_bg);
    if (!container.contains(raner_stay_me)) container.append(raner_stay_me);
    if (isGameInitialized) return;
    isGameInitialized = true;

    //button click check 
    document.addEventListener('keydown', (event) => {
        if (isGameOver) return; 
        
        if (event.code === 'ArrowRight') {
            if (scene === 3 && position >= 680) {
                scene += 1; 
                reset_game();
                return;
            }

            if (position <= 876) {
                position += speed;
            } else {
                scene += 1;
                reset_game();
            }

            if (container.contains(raner_stay_me)) container.removeChild(raner_stay_me);
            if (container.contains(raner_me_L)) container.removeChild(raner_me_L);
            if (!container.contains(raner_me_R)) container.append(raner_me_R);
   
            raner_me_R.style.left = `${position}px`;
            raner_stay_me.style.left = `${position}px`;
            
            
        }
        else if (event.code === 'ArrowLeft') {
            if (position >= 96) {
                position -= (speed - 2);
            }

            if (container.contains(raner_stay_me)) container.removeChild(raner_stay_me);
            if (container.contains(raner_me_R)) container.removeChild(raner_me_R);
            if (!container.contains(raner_me_L)) container.append(raner_me_L);
            
            raner_me_L.style.left = `${position}px`;
            raner_stay_me.style.left = `${position}px`;
            
            
        }
    });

    document.addEventListener('keyup', (e) => {
        if (isGameOver) return; 
        //if ! presed remowe ran_R an ran_L pictures 
        if (e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
            
            if (container.contains(raner_me_R)) container.removeChild(raner_me_R);
            if (container.contains(raner_me_L)) container.removeChild(raner_me_L);
            
            if (!container.contains(raner_stay_me)) {
                container.append(raner_stay_me);
            }
 
            raner_stay_me.style.left = `${position}px`;
        }
    });

    function reset_game() {
        //remove all pictures 
        if (container.contains(raner_me_L)) container.removeChild(raner_me_L);
        if (container.contains(raner_me_R)) container.removeChild(raner_me_R);
        if (container.contains(raner_stay_me)) container.removeChild(raner_stay_me);
        
        
        if (container.contains(raner_bg)) container.removeChild(raner_bg);
        if (container.contains(raner_bg2)) container.removeChild(raner_bg2);
        if (container.contains(raner_bg3)) container.removeChild(raner_bg3);

        
        if (scene < 4) {
            position = 90; 
            
            raner_stay_me.style.left = `${position}px`;
            raner_me_R.style.left = `${position}px`;
            raner_me_L.style.left = `${position}px`;

            if (scene === 2) {
                container.append(raner_bg2);
            } else if (scene === 3) {
                container.append(raner_bg3);
            }

            container.append(raner_stay_me);
        } else {
           
            isGameOver = true; 
            console.log("Game over");
        }
    }
}