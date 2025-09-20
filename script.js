
document.getElementById('add-note-btn').addEventListener('click', function(){
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-conteiner');
    
    if (noteInput.value.trim() === ''){
        alert('Пожалуйста введи текст заметки');
        return;
    }
   const noteDiv = document.createElement('div');
       noteDiv.classList.add('note');
       noteDiv.textContent = noteInput.value;

       notesContainer.appendChild(noteDiv);
       noteInput.value = '';
    const btn = document.createElement('buttton');
        btn.classList.add('delete-btn');
        btn.textContent = 'Удалить';

        noteDiv.appendChild(btn)
    btn.addEventListener('click', function(){
        notesContainer.removeChild(noteDiv);
    });
});
