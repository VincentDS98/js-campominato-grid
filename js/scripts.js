const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function(){
    const gridContainer = document.querySelector('.grid-container');

    for(let i = 1 ; i <= 100; i++){
        const cell = document.createElement('div');
        cell.innerHTML = i;
        cell.classList.add('cell');
        cell.addEventListener('click', function(){
            cell.classList.add('click');
            console.log(cell.innerHTML);
        });
        
    gridContainer.append(cell);
    }
});
