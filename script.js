// //recuperer les informations d'un formulaire
// const submit = document.getElementById("buutonSubmit");//recuperer le boutton
// const formulaire = document.getElementById("donnees");//recuperer form
// const modalbutton=document.getElementById("boutonaModal");
// const modal=document.getElementById("exampleModal");

// submit.addEventListener('click', function(event) {

//     //empecher le rechargement de la page
//     event.preventDefault();

//     // recuperation des valeurs du formulaire
//     const titre=document.getElementById("titre").value;
//     const description=document.getElementById("description").value;
//     const priorite=document.getElementById("disabledSelect").value;
//     const cycle=document.getElementById("cycleInput").value;
//     const datedebut=document.getElementById("datedebut").value;
//     const datefin=document.getElementById("datefin").value;

//     //creation d'un objet avec les donnes de formulaire
//     const formData={
//           titre : titre,
//           description: description,
//           priorite:priorite,
//           cycle:cycle,
//           datedebut:datedebut,
//           datefin:datedebut, 
//     };
//     //recuperer les donnes existantes dùns le local storage(si disponible)
//     let allFormData=JSON.parse(localStorage.getItem("formData")) || [];
//     //ajouter l'objet formData au tableau
//     allFormData.push(formData);
//     //sauvgarder les donnees dans local storage
//     localStorage.setItem('formData',JSON.stringify(allFormData));
//     //
//     formulaire.reset();
//     //afficher les donnes dans le tabelau
//     displayListTaches();
// });


// function displayListTaches(){
//     //recuperer le nom du tableau
//     const tachesList=document.getElementById("taches-list");
//     tachesList.innerHTML="";//effacer les anciennes lignes pour eviter les doublons

//     //recuperer les donnees du localStorage
//     let allFormData=JSON.parse(localStorage.getItem("formData")) || [];
    
//     //parcourir les donnes du local storage

//     allFormData.forEach((tache,index)=>{
//         const row=document.createElement("tr");
//         row.innerHTML=`<tr id="${index}"><td><input class="form-check-input" type="checkbox"></td><td>${tache.titre}</td><td>${tache.priorite}</td><td><input class="form-check-input cc" type="checkbox"><input class="form-check-input cc" type="checkbox"><input class="form-check-input cc" type="checkbox"></td><td>${tache.description}</td><td><button class="action" ><i class="fa-solid fa-pen-to-square" onclick="editerTache(${index})"></i></button ><button class="action" onclick="supprimerTache(${index})"><i class="fa-solid fa-trash"></i></button><button class="action"><i class="fas fa-clock"></i></button></td></tr>`;
//         tachesList.appendChild(row);
//     })
// }
// displayListTaches();

// function supprimerTache(indice){
//       let allFormaData=JSON.parse(localStorage.getItem("formData")) || [];
//       allFormaData.splice(indice,1);//supprimer l'element a l'index donne 
//       localStorage.setItem('formData',JSON.stringify(allFormaData));
//       displayListTaches();
// }
// function editerTache(index) {
    
//     let allFormData = JSON.parse(localStorage.getItem("formData")) || [];
//     let tache = allFormData[index];
//     modalbutton.click()
    

//     // Remplir les champs du formulaire avec les valeurs de la tâche à éditer
//     document.getElementById("titre").value = tache.titre;
//     document.getElementById("description").value = tache.description;
//     document.getElementById("disabledSelect").value = tache.priorite;
//     document.getElementById("cycleInput").value = tache.cycle;
//     document.getElementById("datedebut").value = tache.datedebut;
//     document.getElementById("datefin").value = tache.datefin;
//     const update=document.getElementById("save");

//     update.addEventListener('click',function(){
//         tache.titre=document.getElementById("titre").value ;
//         console.log(tache.titre);
        
//         tache.description=document.getElementById("description").value;
//         tache.priorite=document.getElementById("disabledSelect").value;
//         tache.cycle=document.getElementById("cycleInput").value;
//         tache.datedebut=document.getElementById("datedebut").value;
//         tache.datefin=document.getElementById("datefin").value;
//         allFormData.splice(index, 1,tache);
//         localStorage.setItem('formData', JSON.stringify(allFormData));
//         displayListTaches();
        
        
//     })
//     formulaire.reset();
//     displayListTaches();
// }
//partie pomodoro
//les variables
const start=document.getElementById("start");
const pause=document.getElementById("pause");
const reset=document.getElementById("reset");
//recuperer le nombre de minute et le nombre de seceonde piur ke work
let wm=document.getElementById("wm");
console.log(wm.innerHTML)

let ws=document.getElementById("ws");
//recuperer le nombre de minute de break et le nombre de seconde
let bm=document.getElementById("bm");
let bs=document.getElementById("bs");
//recuperer le nombre de cycle
let cycles=document.getElementById("nombreDecycle");

var startconteur;
start.addEventListener('click',function(){
      startconteur=setInterval(timer,1000);
})

function  timer(){ 
    let ws=document.getElementById("ws");
    //pour dimnuer le conteur de work
    if(ws.innerHTML !== 0){
         ws.innerHTML=ws.innerHTML--;
         console.log(ws.innerHTML);
         
    }
    if(wm.innerHTML!==0 && ws.innerHTML===0){
        wm.innerHTML-=wm.innerHTML;
        ws=59;
    }
    //pour dimnuer le conteur de break
    if(wm.innerHTML === 0 && ws.innerHTML===0){
        // diminuer le conteur de break
        if(bm.innerHTML !== 0 && bs.innerHTML===0){
           bm.innerHTML-=bm.innerHTML;
           bs.innerHTML=59;
        }
        if(bs.innerHTML!==0){
           bs.innerHTML-=bs.innerHTML;
        }
   } 
   //augmenter le nombre de cycle si les contenurs de break et work sont a zero 
   if(ws.innerHTML===0 && wm.innerHTML===0 && bs.innerHTML===0 && bm.innerHTML===0){

      cycles.innerHTML+=1;

      wm.innerHTML=25;
      ws.innerHTML="00";

      bw.innerHTML=5;
      bs.innerHTML="00";

   }
}

reset.addEventListener('click',function(){
    wm.innerHTML=25;
    ws.innerHTML="00";

    bw.innerHTML=5;
    bs.innerHTML="00";

    cycles.innerHTML=0;
})
 pause.addEventListener('click', clearInterval(startconteur))

       




















































































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


