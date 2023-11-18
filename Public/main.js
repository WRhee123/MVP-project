document.addEventListener('DOMContentLoaded', () => {
    // const baseURL = 'http://localhost:3000/api/workouts'
    let body = document.getElementsByTagName('body')[0];
    

const createTitleContainer =() => {let titleContainer = document.createElement('div');
titleContainer.style.display = 'flex'
titleContainer.style.alignItems = 'center'
titleContainer.style.justifyContent = 'center';
titleContainer.style.backgroundColor = 'gray';
titleContainer.style.height = '20vh';
titleContainer.style.width = '98vw';
titleContainer.textContent = 'MVP Fitness';
titleContainer.style.textAlign = 'center';
titleContainer.style.fontSize = '100px'
body.appendChild(titleContainer);}
createTitleContainer();


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
    $(createWorkoutContainer).hide();
    $(loginContainer).hide();
})



let loginContainer = document.createElement('div');
loginContainer.style.display = 'flex'
loginContainer.style.alignItems = 'center'
loginContainer.style.justifyContent = 'center'
loginContainer.style.height = "50vh"
loginContainer.style.width = '50vw';
loginContainer.style.backgroundColor = 'red';
loginContainer.style.margin = 'auto'
loginContainer.style.marginTop = '5rem'
body.appendChild(loginContainer);

let form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.alignItems = 'center'
form.style.justifyContent = 'center'
form.style.gap = '10px';
loginContainer.appendChild(form)

let userNameInput = document.createElement('input')
// userNameInput.type = 'text';
userNameInput.placeholder = 'Username'
userNameInput.id = "userName"
form.appendChild(userNameInput);

let passwordInput = document.createElement('input');
passwordInput.placeholder = 'Password'
passwordInput.id = 'password'
form.appendChild(passwordInput);

let loginButton = document.createElement('button');
loginButton.textContent = 'Login';
form.appendChild(loginButton);

let registerButton = document.createElement('button');
registerButton.textContent = 'Register';
form.appendChild(registerButton);

loginButton.addEventListener('click', async() => {
let userName = document.getElementById('userName').value;
let password = document.getElementById('password').value;
try{
    let response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            users_name: userName,
            users_password: password
        }), headers: {
            "Content-Type": 'application/json; charset=UTF-8'
        }
    });
    if(response.ok) {
        let resData = await response.json();
        console.log('login successful', resData)
    } else {
        console.log('login unsuccessful')
    }
}catch(error) {
console.log(error.stack);
}
})

registerButton.addEventListener('click', async() => {
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    try{
        let response = await fetch('http://localhost:3000/api/users/register', {
            method: "POST",
            body: JSON.stringify({
                users_name: userName,
                users_password: password
            }), headers: {
                "Content-Type": 'application/json; charset=UTF-8'
            }
        });
        if(response.ok) {
            let resData = await response.json();
            console.log('Registration successful', resData);
        } else {
            console.log('Registration unsuccessful');
        }
    }catch(error) {
    console.log(error.stack)
    }
})

let createWorkoutContainer = document.createElement('div');
createWorkoutContainer.style.height = '75vh';
createWorkoutContainer.style.width= '98.2vw';
createWorkoutContainer.style.backgroundColor = 'green';
createWorkoutContainer.style.textAlign = 'center'
// createWorkoutContainer.style.display = 'flex';
// createWorkoutContainer.style.flexDirection ='row';
// createWorkoutContainer.style.justifyContent = 'center';
// createWorkoutContainer.style.alignItems = 'center'
body.appendChild(createWorkoutContainer);

let name = document.createElement('label');
name.textContent = 'Workout Name';
name.style.fontSize = '50px'
name.style.margin ='auto';
createWorkoutContainer.appendChild(name)
$(createWorkoutContainer).hide();

let nameInput = document.createElement('input');
nameInput.style.height = '30px';
nameInput.style.width = '50px;'
nameInput.id = 'userNameInput'
nameInput.type = 'text'
createWorkoutContainer.appendChild(nameInput);

let submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
createWorkoutContainer.appendChild(submitButton);


let userWorkoutContainer = document.createElement('div');
userWorkoutContainer.style.height = '75vh';
userWorkoutContainer.style.width = '98.2vw';
userWorkoutContainer.style.backgroundColor = 'yellow';
body.appendChild(userWorkoutContainer);
$(userWorkoutContainer).hide();

let exerciseLabel = document.createElement('label');
exerciseLabel.textContent = 'exercise name';
userWorkoutContainer.appendChild(exerciseLabel);
let exerciseInput = document.createElement('input');
exerciseInput.id = 'exercise'
userWorkoutContainer.appendChild(exerciseInput);


let setsLabel = document.createElement('label');
setsLabel.textContent = 'sets';
userWorkoutContainer.appendChild(setsLabel);
let setsInput = document.createElement('input');
setsInput.id = 'sets'
userWorkoutContainer.appendChild(setsInput);

let repsLabel = document.createElement('label');
repsLabel.textContent = 'reps';
userWorkoutContainer.appendChild(repsLabel);
let repsInput = document.createElement('input');
repsInput.id = 'reps'
userWorkoutContainer.appendChild(repsInput);

let addExerciseButton = document.createElement('button');
addExerciseButton.textContent = 'Add Exercise';
userWorkoutContainer.appendChild(addExerciseButton);

addExerciseButton.addEventListener('click', async() => {
try {
    let exerciseValue = document.getElementById('exercise').value;
    let setsValue = document.getElementById('sets').value;
    let repsValue = document.getElementById('reps').value;
    let response = await fetch('http://localhost:3000/api/all_exercises', {
        method: 'POST',
        body:JSON.stringify({
            exercise: exerciseValue,
            set_number: setsValue,
            reps: repsValue
        }),
        headers: {
            "Content-Type": 'application/json; charset=UTF-8'
        }
    });
    if(response.ok) {
        let resData = await response.json();
        console.log('exercise added', resData)
    } else {
        console.log('exercise was not added')
    }
}catch(error) {
console.log(error.stack)
}
})

submitButton.addEventListener('click', async() => {
try{
    let nameValue = document.getElementById('userNameInput').value;
    let response = await fetch('http://localhost:3000/api/users_workout', {
        method: "POST",
        body:JSON.stringify({
            workout_name: nameValue
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
    if(response.ok) {
        let resData = await response.json();
        console.log("Workout name added", resData)
    } else {
        console.log('Workout name was not added')
    }
}catch(error) {
    console.log(error.stack);
}
})

submitButton.addEventListener('click', () => {
    $(userWorkoutContainer).show()
    $(mainContainer).hide()
    $(createWorkoutContainer).hide();
})

let createButton = document.createElement('button');
createButton.textContent = 'Create Workout';
buttonContainer.appendChild(createButton)
createButton.addEventListener('click', () => {
    $(mainContainer).hide();
    $(workoutContainer).hide();
    $(workoutContainer).empty();
    $(createWorkoutContainer).show();
})



let mainContainer = document.createElement('div');
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'row';
mainContainer.style.justifyContent = 'center';
mainContainer.style.height = '75vh';
mainContainer.style.width = '92.8vw';
mainContainer.style.flexFlow = 'center'
mainContainer.style.alignItems = 'center'
mainContainer.style.justifyContent = 'space-around'
mainContainer.style.padding = '50px'
mainContainer.style.backgroundColor = 'blue'
body.appendChild(mainContainer);
$(mainContainer).hide();

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