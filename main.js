

let darkModeEnabled = false;

function toggleDarkMode() {
    const button = document.querySelector('.button');

    if (darkModeEnabled) {
        
        document.body.classList.remove('dark-mode');
        button.textContent = 'Ativar Foco';
    } else {
       
        document.body.classList.add('dark-mode');
        button.textContent = 'Desativar Foco';
    }

    
    darkModeEnabled = !darkModeEnabled;
}

