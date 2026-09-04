
let currentScene = "start";
let storyData = null;
let typingTimeout = null;
let textSpeed = 30; 



// starting screen
document.getElementById('start_button').addEventListener('click', () => {
    document.getElementById('start_screen').style.display = 'none';
    document.getElementById('game_content').style.display = 'flex';
    loadStory();
    
});

//restart button for endings
const restartButton = document.getElementById('restart_button');

restartButton.addEventListener('click', () => {
    document.getElementById('game_content').style.display = 'none';
    document.getElementById('start_screen').style.display = 'flex';
    restartButton.style.display = 'none';
    currentScene = storyData.start_scene;
});

// Load the story data from the JSON file
// Взяли и подгрузили JSON файл с историей, чтобы использовать его в игре.
function loadStory() {
    fetch('json/story.json')
        .then(response => response.json())
        .then(data => {
            storyData = data;
            currentScene = data.start_scene;
            showScene(currentScene);
        });
    
}
// Event listener for the spacebar to speed up text display

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        textSpeed = 0;
    }
});

// Function to type out text character by character
function typeText(text, callback) {
    const textEl = document.getElementById('text');
    textEl.textContent = '';
    clearTimeout(typingTimeout);

    

    let i = 0;
    function typeChar() {
        if (i < text.length) {
            textEl.textContent += text.charAt(i);
            i++;
            typingTimeout = setTimeout(typeChar, textSpeed);
        } else if (callback) {
            callback();
        }
    }
    typeChar();
    textSpeed = 30; // Reset text speed after typing is done
}

// Function to display a scene based on its name
// Функция для отображения сцены на основе её имени
function showScene(sceneName) {
    // Check if the storyData is loaded
    //проверка на дурака
    if (!storyData) return;

    // Get the scene data from the storyData object
    // Получаем данные сцены из объекта storyData
    const scene = storyData.scenes[sceneName];
    // If the scene doesn't exist, return early
    //проверка на дурака, если сцена не существует, то выходим из функции
    if (!scene) return;

    // minigame 
    if (scene.id == "1") {
        kahvipeli();
    }
    if (scene.id == "47") {
        first_battle();
    }
    
    if (scene.id == "2") {
        first_battle();
    }

    if (scene.id == "3") {
        console.log("raner_game function called1111");
        raner_game();
    }

    // Get the buttons for the choices
    // Получаем кнопки для выбора
    const buttons = [
        document.getElementById('button1'),
        document.getElementById('button2'),
        document.getElementById('button3')
    ];

    // Hide all buttons initially, even though there are 3 of them everywhere, in some scenes there may be fewer (if you expand the game, you can add more buttons)
    // Сначала скрываем все кнопки хоть и везде их 3 но в некоторых сценах их может быть меньше (если розшмирять игру, то можно будет добавить больше кнопок)
    buttons.forEach(btn => {
        if (btn) btn.style.display = 'none';
    });
    restartButton.style.display = 'none';

  // type out the text and show options
    typeText(scene.text, () => {
            // if scene has no choices it is an ending, show restart button instead
            if (scene.choices.length === 0) {
            restartButton.style.display = 'inline-block';
            return;
        }

        restartButton.style.display = 'none';

        scene.choices.forEach((choice, index) => {
            if (buttons[index]) {
                buttons[index].textContent = choice.text;
                buttons[index].style.display = 'inline-block';
                buttons[index].onclick = () => {
                    showScene(choice.next);
                };
            }
        });
    });

}







