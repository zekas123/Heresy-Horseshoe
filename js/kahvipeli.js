let kahvipeli_score = 4;

let kahvipeli_bg = new Image();
kahvipeli_bg.src = 'assets/images/kahvipeli/bg.png';
kahvipeli_bg.style.width = '100%';
kahvipeli_bg.style.height = '100%';
kahvipeli_bg.style.objectFit = 'cover';
kahvipeli_bg.style.position = 'absolute'; 
kahvipeli_bg.style.top = '0';
kahvipeli_bg.style.left = '0';
kahvipeli_bg.style.zIndex = '10'; 

let kahvipeli_tea = new Image();
kahvipeli_tea.src = 'assets/images/kahvipeli/tea.png';
kahvipeli_tea.style.width = '200px';
kahvipeli_tea.style.height = '200px';
kahvipeli_tea.style.position = 'absolute';
kahvipeli_tea.style.left = `${Math.floor(Math.random() * 291) + 10}%`; // 300 10 
kahvipeli_tea.style.left = `${Math.floor(Math.random() * 81) + 10}%`; //90 10 
kahvipeli_tea.style.transform = 'translateX(-50%)';
kahvipeli_tea.style.zIndex = '11';


let kahvipeli_blabla = new Image();
kahvipeli_blabla.src = 'assets/images/kahvipeli/blabla.png';
kahvipeli_blabla.style.width = '200px';
kahvipeli_blabla.style.height = '300px';
kahvipeli_blabla.style.position = 'absolute';
kahvipeli_blabla.style.left = `${Math.floor(Math.random() * 291) + 10}%`; // 300 10 
kahvipeli_blabla.style.left = `${Math.floor(Math.random() * 81) + 10}%`; //90 10 
kahvipeli_blabla.style.transform = 'translateX(-50%)';
kahvipeli_blabla.style.zIndex = '11';

let kahvipeli_pan = new Image();
kahvipeli_pan.src = 'assets/images/kahvipeli/pan.png';
kahvipeli_pan.style.width = '240px';
kahvipeli_pan.style.height = '200px';
kahvipeli_pan.style.position = 'absolute';
kahvipeli_pan.style.left = `${Math.floor(Math.random() * 291) + 10}%`; // 300 10 
kahvipeli_pan.style.left = `${Math.floor(Math.random() * 81) + 10}%`; //90 10 
kahvipeli_pan.style.transform = 'translateX(-50%)';
kahvipeli_pan.style.zIndex = '11';

let kahvipeli_tea1 = new Image();
kahvipeli_tea1.src = 'assets/images/kahvipeli/tea1.png';
kahvipeli_tea1.style.width = '200px';
kahvipeli_tea1.style.height = '130px';
kahvipeli_tea1.style.position = 'absolute';
kahvipeli_tea1.style.left = `${Math.floor(Math.random() * 291) + 10}%`; // 300 10 
kahvipeli_tea1.style.left = `${Math.floor(Math.random() * 81) + 10}%`; //90 10 
kahvipeli_tea1.style.transform = 'translateX(-50%)';
kahvipeli_tea1.style.zIndex = '11';



function kahvipeli() {
    

    const container = document.querySelector('.image_area');
    kahvipeli_bg.style.display = 'block';
    container.append(kahvipeli_bg);
    container.append(kahvipeli_tea1);
    container.append(kahvipeli_tea);
    container.append(kahvipeli_blabla);
    container.append(kahvipeli_pan);

    
    
    

    kahvipeli_tea.addEventListener('click', () => {
        kahvipeli_score -= 1;
        kahvipeli_tea.remove();
        if (kahvipeli_score <= 0) {
        kahvipeli_bg.remove(); 
        }
    });

    kahvipeli_blabla.addEventListener('click', () => {
        kahvipeli_score -= 1;
        kahvipeli_blabla.remove(); 
        if (kahvipeli_score <= 0) {
            kahvipeli_bg.remove();
        }
    });

    kahvipeli_pan.addEventListener('click', () => {
        kahvipeli_score -= 1;
        console.log(kahvipeli_score);
        kahvipeli_pan.remove(); 
        if (kahvipeli_score <= 0) {
        kahvipeli_bg.remove(); 
        }
        
    });
    
    kahvipeli_tea1.addEventListener('click', () => {
        kahvipeli_score -= 1;
        kahvipeli_tea1.remove();
        if (kahvipeli_score <= 0) {
            kahvipeli_bg.remove();
        }
    });
   
}