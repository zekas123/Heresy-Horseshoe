let go_attack_rule = false;
let go_magick_attack = 90; 

let count_stay = 1;
let count_stay_enemy = 1;
let count_go_attack = 1;

let battle_bg_top = 0;
let battle_bg_left = 0;

let battle_bg = new Image();
battle_bg.src = 'assets/images/battle/bg.jpg';
battle_bg.style.width = '100%';
battle_bg.style.height = '100%';
battle_bg.style.objectFit = 'cover';
battle_bg.style.position = 'absolute'; 
battle_bg.style.top = battle_bg_top + 'px';
battle_bg.style.left = battle_bg_left + 'px';
battle_bg.style.zIndex = '10'; 

let battle_me = new Image();
battle_me.src = `assets/images/battle/me_stay${count_stay}.png`;
battle_me.style.width = '200px';
battle_me.style.height = '210px';
battle_me.style.position = 'absolute';
battle_me.style.left = '90px';
battle_me.style.transform = 'translateX(-50%)';
battle_me.style.zIndex = '11';
battle_me.style.top = '400px'; 

let battle_enemy = new Image();
battle_enemy.src = `assets/images/battle/enemy_stay${count_stay_enemy}.png`;
battle_enemy.style.width = '200px';
battle_enemy.style.height = '260px';
battle_enemy.style.position = 'absolute';
battle_enemy.style.right = '90px';
battle_enemy.style.transform = 'translateX(50%)';
battle_enemy.style.zIndex = '11';
battle_enemy.style.top = '350px';

let battle_go_attack = new Image();
battle_go_attack.src = `assets/images/battle/go_attack${count_go_attack}.png`;
battle_go_attack.style.width = '200px';
battle_go_attack.style.height = '210px';
battle_go_attack.style.position = 'absolute';
battle_go_attack.style.left = '90px';
battle_go_attack.style.transform = 'translateX(-50%)';
battle_go_attack.style.zIndex = '11';
battle_go_attack.style.top = '400px'; 

let magic_attack = new Image();
magic_attack.src = 'assets/images/battle/magick.png';
magic_attack.style.width = '200px';
magic_attack.style.height = '200px';
magic_attack.style.position = 'absolute';
magic_attack.style.left = `${go_magick_attack}px`; 
magic_attack.style.zIndex = '11';
magic_attack.style.top = '300px';

function first_battle() {
    const container = document.querySelector('.image_area');
    
    container.append(battle_bg);
    container.append(battle_me);
    container.append(battle_enemy);

    const animationInterval = setInterval(() => {
        count_stay++;
        count_stay_enemy++;
        
        if (go_attack_rule === true) {
            count_go_attack++;
            
            go_magick_attack -= 15; 


            if (go_magick_attack < 90) {
                go_magick_attack = 90;
            }


            magic_attack.style.left = `${go_magick_attack}px`;

            if (count_go_attack > 3) {
                count_go_attack = 1;
            }


            if (go_magick_attack <= 90 && go_attack_rule === true) {

            }
        }

        if (count_stay > 4) {
            count_stay = 1;
        }
        if (count_stay_enemy > 3) {
            count_stay_enemy = 1;
        }

        battle_go_attack.src = `assets/images/battle/go_attack${count_go_attack}.png`;
        battle_me.src = `assets/images/battle/me_stay${count_stay}.png`;
        battle_enemy.src = `assets/images/battle/enemy_stay${count_stay_enemy}.png`;
    }, 200);

    document.addEventListener('keydown', (event) => {

        if (event.code === 'Space' && !event.repeat) {
            console.log('Space');

            if (go_attack_rule === false) {
                go_attack_rule = true;
                count_go_attack = 1;
                go_magick_attack = 90;
                
                container.removeChild(battle_me);
                container.append(magic_attack);
                container.append(battle_go_attack);
            }

            go_magick_attack += 40; 
            magic_attack.style.left = `${go_magick_attack}px`;

            if (go_magick_attack > 600) {

                if (container.contains(battle_go_attack)) container.removeChild(battle_go_attack);
                if (container.contains(magic_attack)) container.removeChild(magic_attack);
                if (container.contains(battle_me)) container.removeChild(battle_me);
                if (container.contains(battle_enemy)) container.removeChild(battle_enemy);
                if (container.contains(battle_bg)) container.removeChild(battle_bg);
            }
        }
    });
}