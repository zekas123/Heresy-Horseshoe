let currentScene = "start";
let storyData = null;


// starting screen
document.getElementById('start_button').addEventListener('click', () => {
    document.getElementById('start_screen').style.display = 'none';
    document.getElementById('game_content').style.display = 'flex';
    loadStory();
});

// Load the story data from the JSON file
// Взяли и подгрузили JSON файл с историей, чтобы использовать его в игре.
fetch('story.json')

    .then(response => response.json())
    .then(data => {
        storyData = data;
        currentScene = data.start_scene;
        showScene(currentScene);
    });

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

    // Update the text content of the scene
    // Обновляем текстовое содержимое сцены
    document.getElementById('text').textContent = scene.text;

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

    // Loop through the choices for the current scene and display them on the buttons
    // Проходимся по выбору для текущей сцены и отображаем их на кнопках
    scene.choices.forEach((choice, index) => {
        // If the button exists, set its text and click handler
        // Если кнопка существует, устанавливаем её текст и обработчик клика
        if (buttons[index]) {
            // Set the text content of the button to the choice text
            // Устанавливаем текстовое содержимое кнопки на текст выбора
            buttons[index].textContent = choice.text;    
            // Show the button and set its click handler to show the next scene
            // Показываем кнопку и устанавливаем её обработчик клика для отображения следующей сцены
            buttons[index].style.display = 'inline-block'; 
            // Set the click handler to show the next scene when the button is clicked
            // Устанавливаем обработчик клика для отображения следующей сцены при нажатии на кнопку
            buttons[index].onclick = () => {
                // Update the current scene to the next scene based on the choice
                // Обновляем текущую сцену на следующую сцену на основе выбора
                showScene(choice.next);                  
            };
        }
    });
}