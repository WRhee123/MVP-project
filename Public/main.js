document.addEventListener('DOMContentLoaded', () => {
    // const baseURL = 'http://localhost:3000/api/workouts'
    let body = document.getElementsByTagName('body')[0];

    // let button = document.createElement('button');
    // button.textContent = 'Home'
    // body.appendChild(button)

    // button.addEventListener('click', () => {
    //     homePage();
    // })
    
let titleContainer = document.createElement('div');
titleContainer.style.display = 'flex'
titleContainer.style.alignItems = 'center'
titleContainer.style.justifyContent = 'center';
titleContainer.style.backgroundColor = 'gray';
titleContainer.style.height = '20vh';
titleContainer.style.width = '98vw';
titleContainer.textContent = 'MVP Fitness';
titleContainer.style.textAlign = 'center';
titleContainer.style.fontSize = '100px'
body.appendChild(titleContainer);

let buttonContainer = document.createElement('div');
buttonContainer.style.height = '5vh';
buttonContainer.style.width = '98vw';
buttonContainer.style.backgroundColor = 'black';
buttonContainer.style.display = 'flex'
buttonContainer.style.gap = '20px'
body.appendChild(buttonContainer);

let homeButton = document.createElement('button');
homeButton.textContent = 'Home'
homeButton.style.width = '100px'
buttonContainer.appendChild(homeButton)
homeButton.addEventListener('click', () => {
    $(mainContainer).show();
    $(pushButton).show();
    $(pullButton).show();
    $(legsButton).show();
    $(workoutContainer).hide();
    $(workoutContainer).empty();
})

let createButton = document.createElement('button');
createButton.textContent = 'Create Workout';
buttonContainer.appendChild(createButton)

let mainContainer = document.createElement('div');
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'row';
mainContainer.style.justifyContent = 'center';
mainContainer.style.height = '75vh';
mainContainer.style.width = '92.8vw';
// mainContainer.style.backgroundColor = 'blue';
mainContainer.style.flexFlow = 'center'
mainContainer.style.alignItems = 'center'
mainContainer.style.justifyContent = 'space-around'
mainContainer.style.padding = '50px'
mainContainer.style.backgroundColor = 'blue'
body.appendChild(mainContainer);

let workoutContainer = document.createElement('div');
workoutContainer.style.display = 'flex';
workoutContainer.style.flex = 'wrap';
workoutContainer.style.flexDirection = 'row'
workoutContainer.style.justifyContent = 'space-around'
workoutContainer.style.height = '75vh';
workoutContainer.style.width = '98vw';
workoutContainer.style.backgroundColor = 'red';
body.appendChild(workoutContainer);
$(workoutContainer).hide();

    homePage();

    async function homePage() {
        const response = await fetch('http://localhost:3000/api/workouts');
       const data = await response.json();
       console.log(data)
   let pushButton = document.createElement('button');
   pushButton.textContent = data[0].workout_name
   pushButton.style.fontSize = '30px'
   pushButton.style.height = '20vh'
   pushButton.style.width = '20vw'
     pushButton.id = 'pushButton'
   mainContainer.appendChild(pushButton)
   
   pushButton.addEventListener('click', async() => {
    const response = await fetch('http://localhost:3000/api/exercises/1')
    const data = await response.json();
    console.log(data)
    $(pushButton).hide();
    $(pullButton).hide();
    $(legsButton).hide();
    $(mainContainer).hide();
    $(workoutContainer).show();
    data.forEach((exercise) => {
      let pullContainer = document.createElement('div');
    pullContainer.style.height = '30vh';
    pullContainer.style.width = '15vw';
    pullContainer.style.backgroundColor = 'white';
    workoutContainer.appendChild(pullContainer) ;
    
    let h1 = document.createElement('h1');
    h1.textContent = exercise.exercise_name;
    pullContainer.appendChild(h1);

    let sets = document.createElement('h3');
    sets.textContent = `sets: ${exercise.set_number}`;
    pullContainer.appendChild(sets);

    let reps = document.createElement('h3');
    reps.textContent = `reps: ${exercise.reps}`;
    pullContainer.appendChild(reps);

    let difficulty = document.createElement('h3');
    difficulty.textContent = `difficulty: ${exercise.difficulty}`
    pullContainer.appendChild(difficulty)
    })
   
    
})

   let pullButton = document.createElement('button');
   pullButton.textContent = data[1].workout_name;
   pullButton.style.fontSize = '30px'
   pullButton.style.height = '20vh'
   pullButton.style.width = '20vw'
   pullButton.id = 'pullButton'
   mainContainer.appendChild(pullButton)

   pullButton.addEventListener('click', async() => {
    const response = await fetch('http://localhost:3000/api/exercises/2')
    const data = await response.json();
    console.log(data)
    $(pushButton).hide();
    $(pullButton).hide();
    $(legsButton).hide();
    $(mainContainer).hide();
    $(workoutContainer).show();
    data.forEach((exercise) => {
      let pullContainer = document.createElement('div');
    pullContainer.style.height = '30vh';
    pullContainer.style.width = '15vw';
    pullContainer.style.backgroundColor = 'white';
    workoutContainer.appendChild(pullContainer) ;
    
    let h1 = document.createElement('h1');
    h1.textContent = exercise.exercise_name;
    pullContainer.appendChild(h1);

    let sets = document.createElement('h3');
    sets.textContent = `sets: ${exercise.set_number}`;
    pullContainer.appendChild(sets);

    let reps = document.createElement('h3');
    reps.textContent = `reps: ${exercise.reps}`;
    pullContainer.appendChild(reps);

    let difficulty = document.createElement('h3');
    difficulty.textContent = `difficulty: ${exercise.difficulty}`
    pullContainer.appendChild(difficulty)
    })
   })

   let legsButton = document.createElement('button');
    legsButton.textContent = data[2].workout_name;
    legsButton.style.fontSize = '30px'
   legsButton.style.height = '20vh'
   legsButton.style.width = '20vw'
legsButton.id = 'legsButton'
mainContainer.appendChild(legsButton)

legsButton.addEventListener('click', async() => {
    const response = await fetch('http://localhost:3000/api/exercises/3')
    const data = await response.json();
    console.log(data)
    $(pushButton).hide();
    $(pullButton).hide();
    $(legsButton).hide();
    $(mainContainer).hide();
    $(workoutContainer).show();
    data.forEach((exercise) => {
      let legsContainer = document.createElement('div');
    legsContainer.style.height = '30vh';
    legsContainer.style.width = '15vw';
    legsContainer.style.backgroundColor = 'white';
    workoutContainer.appendChild(legsContainer) ;
    
    let h1 = document.createElement('h1');
    h1.textContent = exercise.exercise_name;
    legsContainer.appendChild(h1);

    let sets = document.createElement('h3');
    sets.textContent = `sets: ${exercise.set_number}`;
    legsContainer.appendChild(sets);

    let reps = document.createElement('h3');
    reps.textContent = `reps: ${exercise.reps}`;
    legsContainer.appendChild(reps);

    let difficulty = document.createElement('h3');
    difficulty.textContent = `difficulty: ${exercise.difficulty}`
    legsContainer.appendChild(difficulty)
    })
})

    }




})