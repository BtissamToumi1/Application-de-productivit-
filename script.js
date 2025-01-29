//recuperer les informations d'un formulaire
const submit = document.getElementById("buutonSubmit");//recuperer le boutton
const formulaire = document.getElementById("donnees");//recuperer form
displayListTaches();
submit.addEventListener('click', function(event) {

    //empecher le rechargement de la page
    event.preventDefault();

    // recuperation des valeurs du formulaire
    const titre=document.getElementById("titre").value;
    const description=document.getElementById("description").value;
    const priorite=document.getElementById("disabledSelect").value;
    const cycle=document.getElementById("cycleInput").value;
    const datedebut=document.getElementById("datedebut").value;
    const datefin=document.getElementById("datefin").value;

    //creation d'un objet avec les donnes de formulaire
    const formData={
          titre : titre,
          description: description,
          priorite:priorite,
          cycle:cycle,
          datedebut:datedebut,
          datefin:datedebut, 
    };
    //recuperer les donnes existantes dùns le local storage(si disponible)
    let allFormData=JSON.parse(localStorage.getItem("formData")) || [];
    //ajouter l'objet formData au tableau
    allFormData.push(formData);
    //sauvgarder les donnees dans local storage
    localStorage.setItem('formData',JSON.stringify(allFormData));
    //
    formulaire.reset();
    //afficher les donnes dans le tabelau
    displayListTaches();
});


function displayListTaches(){
    //recuperer le nom du tableau
    const tachesList=document.getElementById("taches-list");
    tachesList.innerHTML="";//effacer les anciennes lignes pour eviter les doublons

    //recuperer les donnees du localStorage
    let allFormData=JSON.parse(localStorage.getItem("formData")) || [];
    
    //parcourir les donnes du local storage

    allFormData.forEach((tache,index)=>{
        const row=document.createElement("tr");
        row.innerHTML='<td><input class="form-check-input" type="checkbox"></td><td>${tache.titre}</td><td>${tache.priorite}</td><td>${tache.cycle}</td><td>${tache.description}</td><td><button class="action"><i class="fa-solid fa-pen-to-square" onclick="editerTache(${index})"></i></button ><button class="action"><i class="fa-solid fa-trash" onclick="supprimerTache(${index})"></i></button><button class="action"><i class="fas fa-clock"></i></button></td>';
        tachesList.appendChild(row)
    })
}



























































































// const taskInput=document.getElementById("task-input");
// const taskList=document.getElementById("taskList");
// const tasks=JSON.parse(localStorage.getItem("tasks")) || [];
// function displayTasks() {
//     taskList.innerHTML = ""; // Correction de 'innerHTML'

//     tasks.forEach((task, index) => { // Utilisation directe de 'tasks' s'il s'agit d'un tableau
//         const li = document.createElement("li");

//         li.innerHTML = `
//             <span>${task.text}</span>
//             <hr>
//             <button class="edit-button" onclick="editTask(${index})">Edit</button>
//             <button class="delete-button" onclick="deleteTask(${index})">Delete</button>
//         `; // Correction des balises <button> et guillemets

//         taskList.appendChild(li); // Ajout de l'élément 'li' à la liste des tâches
//     });
// }

// function addTask(){
//     const taskText= taskInput.value.trim();
//     console.log(taskText);
    
//     if(taskText === "") return;
//         const task= {text: taskText};
//         tasks.push(task);

//         localStorage.setItem("tasks" , JSON.stringify(tasks));

//         taskInput.value="";

//         displayTasks();
// }

// function deleteTask(index){
//     tasks.splice(index, 1);

//     localStorage.setItem("tasks",JSON.stringify(tasks));

//     displayTasks();
// }

// function editTask(index){
//     const newTaskText=prompt("Edit the Task: ", tasks[index].text);

//     if(newTaskText !== null){
//         tasks[index].text== newTasksText;

//         localStorage.setItem("tasks",JSON.stringify(tasks));
//     }
//     displayTasks();
// }


