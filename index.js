let notes = []
let id = 0;
function createNote(){
    const title = document.getElementById("title").value
    const tag = document.getElementById("tag").value
    const newNote = {
        title,
        tag,
        id
    }
    id+=1
    notes.push(newNote)
    localStorage.setItem("notes", JSON.stringify(notes))
    location.href = "http://127.0.0.1:5500/note.html";
}

function addNote(){
    const notes = JSON.parse(localStorage.getItem("notes"))
    
    notes[notes.length -1].message =  document.getElementById("note").value
    localStorage.setItem("notes", JSON.stringify(notes))
    location.href = "http://127.0.0.1:5500/displayNote.html";
}

function display(){
    const notes = JSON.parse(localStorage.getItem("notes"))
    var displayNote = ""
    for(var i=0; i< notes.length; i++){
        displayNote += `<li> ${notes[i].title}  ${notes[i].message}</li>`
    }
    console.log(displayNote)
    //document.getElementById("program").innerHTML = notes[0].message
    document.getElementById("display").innerText = displayNote
}
display();
