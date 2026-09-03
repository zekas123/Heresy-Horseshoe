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
kahvipeli_tea.style.top = `${Math.floor(Math.random() * 81) + 10}%`; //90 10 
kahvipeli_tea.style.transform = 'translateX(-50%)';
kahvipeli_tea.style.zIndex = '11';


let kahvipeli_blabla = new Image();
kahvipeli_blabla.src = 'assets/images/kahvipeli/blabla.png';
kahvipeli_blabla.style.width = '200px';
kahvipeli_blabla.style.height = '300px';
kahvipeli_blabla.style.position = 'absolute';
kahvipeli_blabla.style.left = `${Math.floor(Math.random() * 291) + 10}%`; // 300 10 
kahvipeli_blabla.style.top = `${Math.floor(Math.random() * 81) + 10}%`; //90 10 
kahvipeli_blabla.style.transform = 'translateX(-50%)';
kahvipeli_blabla.style.zIndex = '11';

let kahvipeli_pan = new Image();
kahvipeli_pan.src = 'assets/images/kahvipeli/pan.png';
kahvipeli_pan.style.width = '240px';
kahvipeli_pan.style.height = '200px';
kahvipeli_pan.style.position = 'absolute';
kahvipeli_pan.style.left = `${Math.floor(Math.random() * 291) + 10}%`; // 300 10 
kahvipeli_pan.style.top = `${Math.floor(Math.random() * 81) + 10}%`; //90 10 
kahvipeli_pan.style.transform = 'translateX(-50%)';
kahvipeli_pan.style.zIndex = '11';

let kahvipeli_tea1 = new Image();
kahvipeli_tea1.src = 'assets/images/kahvipeli/tea1.png';
kahvipeli_tea1.style.width = '200px';
kahvipeli_tea1.style.height = '130px';
kahvipeli_tea1.style.position = 'absolute';
kahvipeli_tea1.style.left = `${Math.floor(Math.random() * 291) + 10}%`; // 300 10 
kahvipeli_tea1.style.top = `${Math.floor(Math.random() * 81) + 10}%`; //90 10 
kahvipeli_tea1.style.transform = 'translateX(-50%)';
kahvipeli_tea1.style.zIndex = '11';



function kahvipeli() {
    const container = document.querySelector('.image_area');
    // Set the initial score for the game
    let kahvipeli_score = 4;

    // Append the background image to the container
    container.append(kahvipeli_bg);

    // Function to create an item and add it to the container
    function createItem(src, width, height) {
        let item = new Image();
        item.src = src;
        item.style.width = width;
        item.style.height = height;
        item.style.position = 'absolute';

        // Randomly position the item within the container
        item.style.left = `${Math.floor(Math.random() * 80) + 10}%`; 
        item.style.top = `${Math.floor(Math.random() * 80) + 10}%`; 
        item.style.transform = 'translateX(-50%)';
        item.style.zIndex = '11';
        // Add a click event listener to the item
        item.addEventListener('click', () => {
            // Decrease the score and remove the item when clicked
            kahvipeli_score -= 1;
            item.remove();
            if (kahvipeli_score <= 0) {
                kahvipeli_bg.remove(); 
            }
        });

        container.append(item);
        return item;
    }
    // Create the items for the game
    createItem('assets/images/kahvipeli/tea1.png', '200px', '130px');
    createItem('assets/images/kahvipeli/tea.png', '200px', '200px');
    createItem('assets/images/kahvipeli/blabla.png', '200px', '300px');
    createItem('assets/images/kahvipeli/pan.png', '240px', '200px');
}