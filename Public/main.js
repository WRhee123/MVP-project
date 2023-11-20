document.addEventListener('DOMContentLoaded', () => {
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = '#000000';

    window.addEventListener('beforeunload', () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('workoutId');
        localStorage.removeItem('exerciseId');
    })

const createTitleContainer =() => {let titleContainer = document.createElement('div');
titleContainer.style.display = 'flex';
titleContainer.style.alignItems = 'center';
titleContainer.style.justifyContent = 'center';
titleContainer.style.backgroundColor = 'gray';
titleContainer.style.height = '20vh';
titleContainer.style.width = '98vw';
titleContainer.style.textAlign = 'center';
titleContainer.style.fontSize = '100px';

 let titleSpan = document.createElement('span');
 titleSpan.textContent = 'MVP ';
 titleSpan.style.color = '#E5E5E5';
 let fitnessSpan = document.createElement('span');
 fitnessSpan.style.fontStyle = 'italic';
 fitnessSpan.style.color = '#FCA311';
 fitnessSpan.textContent = 'Fitness';
 titleContainer.appendChild(titleSpan);
 titleContainer.appendChild(fitnessSpan);
 titleContainer.style.fontSize = '100px';
body.appendChild(titleContainer);}
createTitleContainer();


let buttonContainer = document.createElement('div');
buttonContainer.style.height = '5vh';
buttonContainer.style.width = '98vw';
buttonContainer.style.backgroundColor = 'black';
buttonContainer.style.display = 'flex';
buttonContainer.style.gap = '20px';
body.appendChild(buttonContainer);



let homeButton = document.createElement('button');
homeButton.textContent = 'Home';
homeButton.style.width = '100px';
homeButton.className = 'rounded-button';
buttonContainer.appendChild(homeButton);
homeButton.addEventListener('click', () => {
    $(mainContainer).hide();
    $(mainContainer).fadeIn(1000);
    $(pushButton).hide();
    $(pushButton).fadeIn(2000);
    $(pullButton).hide();
    $(pullButton).fadeIn(3000);
    $(legsButton).hide();
    $(legsButton).fadeIn(4000);
    $(workoutContainer).hide();
    $(workoutContainer).empty();
    $(createWorkoutContainer).hide();
    $(loginContainer).hide();
    $(addExerciseContainer).hide();
    $(myWorkoutsContainer).hide();
})

const getUsersWorkouts = async() => {
try {
    let userId = localStorage.getItem('userId');
let response = await fetch(`http://localhost:3000/api/users_workout/${userId}`);
const data = await response.json();
console.log(data);
let myWorkoutsContainer = document.createElement('div');
myWorkoutsContainer.style.display = 'flex';
myWorkoutsContainer.id = "myWorkoutsContainer";
myWorkoutsContainer.style.flexWrap = 'wrap';
myWorkoutsContainer.style.flexDirection = 'row';
myWorkoutsContainer.style.height = '80vh';
myWorkoutsContainer.style.width = '92.8vw';
myWorkoutsContainer.style.justifyContent = 'flex-start';
myWorkoutsContainer.style.backgroundColor = '#14213D';
body.appendChild(myWorkoutsContainer);

let secondDelete = document.createElement('button');
secondDelete.textContent = 'Delete workout';
secondDelete.className = 'rounded-button';


let myExercisesContainer = document.createElement('div');
myExercisesContainer.style.display = 'flex';
myExercisesContainer.id = "myWorkoutsContainer";
myExercisesContainer.style.flexWrap = 'wrap';
myExercisesContainer.style.flexDirection = 'row';
myExercisesContainer.style.height = '80vh';
myExercisesContainer.style.width = '92.8vw';
myExercisesContainer.style.justifyContent = 'flex-start';
myExercisesContainer.style.backgroundColor = '#14213D';
body.appendChild(myExercisesContainer)
$(mainContainer).hide();
$(workoutContainer).hide();
$(createWorkoutContainer).hide();
$(loginContainer).hide();
$(addExerciseContainer).hide();

data.forEach((workout) => {
    let container = document.createElement('div');
    container.style.height = '15vh';
    container.style.width = '15vw';
    container.style.backgroundColor = '#E5E5E5';
    container.style.justifyContent = 'space-around';
    container.style.borderRadius = '5px'
    container.style.marginTop = '10px';
    container.style.marginLeft = '10px';
    myWorkoutsContainer.appendChild(container);
    let h1 = document.createElement('h1');
    h1.textContent = workout.workout_name
    container.appendChild(h1);
    container.addEventListener('click', async(e) => {
        let workoutNameValue = h1.textContent;
        let workoutId = workout.id
        localStorage.setItem('workoutId', workoutId)
        console.log(workoutId);
        // let userId = localStorage.getItem('userId');
        console.log(`click on workout ${workoutNameValue} with workout id ${workoutId}`);
        try{
            let response = await fetch(`http://localhost:3000/api/all_exercises/${workoutId}`)
            let result = await response.json();
            console.log(result)
            result.forEach((exercise) => {
                let exerciseDiv = document.createElement('div');
                exerciseDiv.style.height = '25vh';
                exerciseDiv.style.width = '15vw';
                exerciseDiv.style.backgroundColor = '#E5E5E5';
                exerciseDiv.style.borderRadius = '5px'
                exerciseDiv.style.justifyContent = 'space-around';
                exerciseDiv.style.marginTop = '10px';
                exerciseDiv.style.marginLeft = '10px';
                myExercisesContainer.appendChild(exerciseDiv);
                let h1 = document.createElement('h1');
                h1.textContent = exercise.exercise;
                exerciseDiv.appendChild(h1)
                
                let sets = document.createElement('h3');
                let setsNumber = exercise.set_number
                sets.textContent = `sets: ${setsNumber}`
                exerciseDiv.appendChild(sets);

                let reps = document.createElement('h3');
                let repsNumber = exercise.reps
                reps.textContent = `reps: ${repsNumber}`;
                exerciseDiv.appendChild(reps)

                let secondDelete = document.createElement('button');
                secondDelete.textContent = 'delete exercise';
                secondDelete.className = 'rounded-button';
                exerciseDiv.appendChild(secondDelete);

                secondDelete.addEventListener('click', async(e) => {
                    let exerciseId = exercise.id
                    localStorage.setItem('exerciseId', exerciseId)
                    console.log(exerciseId)
                    try {
                        const response = await fetch(`http://localhost:3000/api/all_exercises/${exerciseId}`, {
                            method: 'DELETE'
                        });
                        if(response.ok) {
                            let resData = await response.json();
                            alert(`exercise deleted`, resData)
                        } else {
                            alert('failed to delete exercise')
                        }
                    }catch(error) {
                        console.log(error.stack)
                    }
                })
                //create a edit button and add put route
                let editExerciseButton = document.createElement('button');
                editExerciseButton.textContent = "edit";
                editExerciseButton.className = 'rounded-button';
                exerciseDiv.appendChild(editExerciseButton);
                
                let editContainer = document.createElement('div');
                    editContainer.style.height = '25vh';
                    editContainer.style.width = '15vw';
                    editContainer.id = 'editContainer';
                    editContainer.style.backgroundColor = '#E5E5E5'
                    editContainer.style.marginTop = '10px'
                    exerciseDiv.appendChild(editContainer);
                    $(editContainer).hide();
                    let editExerciseNameInput = document.createElement('input');
                   editExerciseNameInput.placeholder = 'exercise name';
                //    editExerciseNameInput.id = 'editExerciseNameInput';
                   editContainer.appendChild(editExerciseNameInput);
                   let editSetsInput = document.createElement('input');
                   editSetsInput.placeholder = 'sets';
                //    editSetsInput.id = 'editSetsInput';
                   editContainer.appendChild(editSetsInput);
                   let editRepsInput = document.createElement('input');
                   editRepsInput.placeholder = 'reps';
                //    editRepsInput.id = 'editRepsInput'
                   editContainer.appendChild(editRepsInput);
                    let submitChangesButton = document.createElement('button');
                    submitChangesButton.className = 'rounded-button';
                    submitChangesButton.textContent = 'submit changes';
                    editContainer.appendChild(submitChangesButton);
                   editExerciseButton.addEventListener('click', (e) => {
                   $(editContainer).toggle();
                   let exerciseId = exercise.id
                   localStorage.setItem('exerciseId', exerciseId)
                   console.log(exerciseId)
                })

                submitChangesButton.addEventListener('click', async(e) => {
                    let exerciseId = exercise.id
                    localStorage.setItem('exerciseId', exerciseId)
                    let workoutId = localStorage.getItem('workoutId')
                    console.log(exerciseId)
                    let exerciseNameValue = editExerciseNameInput.value;
                    let setsValue = editSetsInput.value;
                    let repsValue = editRepsInput.value
                    try{
                        let response = await fetch(`http://localhost:3000/api/all_exercises/${exerciseId}`, {
                            method: "PUT",
                            body: JSON.stringify({
                                exercise: exerciseNameValue,
                                set_number: setsValue,
                                reps: repsValue,
                                users_id: workoutId
                            }),
                            headers: {
                            "Content-Type": 'application/json; charset=UTF-8'
                        }
                        });
                        // console.log(await response.json());
                        if(response.ok) {
                            let resData = await response.json();
                            console.log('exercise was edited', resData);
                            alert('exercise was edited')
                        } else {
                            console.log('exercise failed to edit')
                            alert('exercise failed to edit')
                        }
                    }catch(error) {
                        console.log(error.stack)
                    }
                })

                $(myExercisesContainer).fadeIn(1000);
                $(myWorkoutsContainer).hide()
            
            })
        }catch(error) {
            console.log(error.stack)
        }

    })
})
}catch(error) {
console.log(error.stack);
}
};

let myWorkoutsButton = document.createElement('button');
myWorkoutsButton.textContent = 'My Workouts';
myWorkoutsButton.className = 'rounded-button';
buttonContainer.appendChild(myWorkoutsButton);
myWorkoutsButton.addEventListener('click', getUsersWorkouts );







let loginContainer = document.createElement('div');
loginContainer.style.borderRadius = '15px';
loginContainer.style.display = 'flex';
loginContainer.style.alignItems = 'center';
loginContainer.style.justifyContent = 'center';
loginContainer.style.height = "50vh";
loginContainer.style.width = '50vw';
loginContainer.style.backgroundColor = '#14213D';
loginContainer.style.margin = 'auto';
loginContainer.style.marginTop = '5rem';
body.appendChild(loginContainer);

let form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.alignItems = 'center';
form.style.justifyContent = 'center';
form.style.gap = '10px';
loginContainer.appendChild(form);

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission
    // Your form handling logic here
});

let userNameInput = document.createElement('input');
userNameInput.placeholder = 'Username';
userNameInput.id = "userName";
userNameInput.type = 'text';
userNameInput.style.borderRadius = '5px';
userNameInput.name = 'userName';
form.appendChild(userNameInput);

let passwordInput = document.createElement('input');
passwordInput.placeholder = 'Password';
passwordInput.id = 'password';
passwordInput.type = 'password';
passwordInput.style.borderRadius = '5px';
passwordInput.name = 'password';
form.appendChild(passwordInput);

let loginButton = document.createElement('button');
loginButton.textContent = 'Login';
loginButton.className = 'rounded-button';
form.appendChild(loginButton);

let registerButton = document.createElement('button');
registerButton.textContent = 'Register';
registerButton.className = 'rounded-button';
registerButton.type = 'submit';
form.appendChild(registerButton);

registerButton.addEventListener('click', async() => {
   
    try{
         let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    console.log(userName);
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
    console.log(error.stack);
    }
})


loginButton.addEventListener('click', async() => {
try{
    let userName = document.getElementById('userName').value;
let password = document.getElementById('password').value;
console.log(userName);

    const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
         body: JSON.stringify({
        userName,
        password
        })
    });
    const result = await response.json();
    
    if(response.ok && result.success) {
        let userId = result.user.id;
        localStorage.setItem('userId', userId);
        console.log('login successful', result);
        $(loginContainer).hide()
        $(mainContainer).fadeIn(1000)
        
    } else {
        console.log('login failed');
        alert('login failed')
    }
}catch(error) {
console.log(error.stack);
}
});


let createWorkoutContainer = document.createElement('div');
createWorkoutContainer.style.height = '75vh';
createWorkoutContainer.style.width= '98.2vw';
createWorkoutContainer.style.backgroundColor = '#14213D';
createWorkoutContainer.style.textAlign = 'center';
// createWorkoutContainer.style.display = 'flex';
// createWorkoutContainer.style.flexDirection ='row';
// createWorkoutContainer.style.justifyContent = 'center';
// createWorkoutContainer.style.alignItems = 'center'
body.appendChild(createWorkoutContainer);

let name = document.createElement('label');
name.textContent = 'Workout Name';
name.style.fontSize = '50px';
name.style.margin ='auto';
createWorkoutContainer.appendChild(name)
$(createWorkoutContainer).hide();

let workoutNameInput = document.createElement('input');
workoutNameInput.style.borderRadius = '5px';
workoutNameInput.style.height = '30px';
workoutNameInput.style.width = '150px'
workoutNameInput.id = 'workoutName';
workoutNameInput.type = 'text';
createWorkoutContainer.appendChild(workoutNameInput);

let userIdInput = document.createElement('input');
userIdInput.id = 'userIdInput';
userIdInput.type = 'hidden';
createWorkoutContainer.appendChild(userIdInput);

let submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.className = 'rounded-button';
createWorkoutContainer.appendChild(submitButton);

let deleteWorkoutButton = document.createElement('button');
deleteWorkoutButton.textContent = 'Delete Workout';
deleteWorkoutButton.className = 'rounded-button';
createWorkoutContainer.appendChild(deleteWorkoutButton)



//might need to edit later 
deleteWorkoutButton.addEventListener('click', async() => {
    try {
        const workoutNameToDelete = document.getElementById('workoutName').value;
        const userId = localStorage.getItem('userId')
        const response = await fetch(`http://localhost:3000/api/users_workout/:${userId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               user_id: userId,
                workout_name: workoutNameToDelete,
            }),
        });
        if(response.ok) {
            let resData = await response.json();
            let resDataName = resData.workout_name
            alert(`${resDataName} was deleted`)
            console.log('Workout deleted', resData)
        } else {
            console.log('Failed to delete workout')
        }
    }catch(error) {
console.log(error);
    }
})


let addExerciseContainer = document.createElement('div');
addExerciseContainer.style.display = 'flex';
addExerciseContainer.style.flexDirection = 'column';
addExerciseContainer.style.height = '75vh';
addExerciseContainer.style.width = '98.2vw';
addExerciseContainer.style.backgroundColor = '#14213D';
body.appendChild(addExerciseContainer);
$(addExerciseContainer).hide();

let exerciseLabel = document.createElement('label');
exerciseLabel.textContent = 'exercise name';
exerciseLabel.style.backgroundColor = '#E5E5E5'
addExerciseContainer.appendChild(exerciseLabel);
let exerciseInput = document.createElement('input');
exerciseInput.style.borderRadius = '5px';
exerciseInput.style.width = '10%';
exerciseInput.id = 'exercise';
addExerciseContainer.appendChild(exerciseInput);


let setsLabel = document.createElement('label');
setsLabel.textContent = 'sets';
setsLabel.style.color = '#E5E5E5'
addExerciseContainer.appendChild(setsLabel);
let setsInput = document.createElement('input');
setsInput.style.borderRadius = '5px';
setsInput.id = 'sets';
setsInput.style.width = '10%';
addExerciseContainer.appendChild(setsInput);

let repsLabel = document.createElement('label');
repsLabel.textContent = 'reps';
repsLabel.style.color = '#E5E5E5'
addExerciseContainer.appendChild(repsLabel);
let repsInput = document.createElement('input');
repsInput.style.borderRadius = '5px';
repsInput.id = 'reps';
repsInput.style.width = '10%';
addExerciseContainer.appendChild(repsInput);

let addExerciseButton = document.createElement('button');
addExerciseButton.textContent = 'Add Exercise';
addExerciseButton.style.width = "10%";
addExerciseButton.className = 'rounded-button';
addExerciseContainer.appendChild(addExerciseButton);

let workoutIdInput = document.createElement('input');
workoutIdInput.type = 'hidden';
workoutIdInput.id = 'workoutIdInput';
addExerciseContainer.appendChild(workoutIdInput);


addExerciseButton.addEventListener('click', async() => {
try {
    let exerciseValue = document.getElementById('exercise').value;
    let setsValue = document.getElementById('sets').value;
    let repsValue = document.getElementById('reps').value;
    let workoutIdInput = localStorage.getItem('workoutId')
    let response = await fetch('http://localhost:3000/api/all_exercises', {
        method: 'POST',
        body:JSON.stringify({
            exercise: exerciseValue,
            set_number: setsValue,
            reps: repsValue,
            workoutId: workoutIdInput
        }),
        headers: {
            "Content-Type": 'application/json; charset=UTF-8'
        }
    });
    if(response.ok) {
        let resData = await response.json();
        
        console.log('exercise added', resData)
        alert(`${exerciseValue}, sets:${setsValue}, reps:${repsValue} was added`)
    } else {
        console.log('exercise was not added')
    }
}catch(error) {
console.log(error.stack)
}
})

submitButton.addEventListener('click', async() => {
try{
    let nameValue = document.getElementById('workoutName').value;
    let userIdInput = localStorage.getItem('userId');
    console.log(userIdInput);
    let response = await fetch('http://localhost:3000/api/users_workout', {
        method: "POST",
        body:JSON.stringify({
            workout_name: nameValue,
            user_id: userIdInput
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
    if(response.ok) {
        let resData = await response.json();
        let workoutId = resData.id;
        localStorage.setItem('workoutId', workoutId);
        console.log("Workout name added", resData);
        alert(`${nameValue} added`)
    } else {
        console.log('Workout name was not added')
    }
}catch(error) {
    console.log(error.stack);
}
})

submitButton.addEventListener('click', () => {
    $(addExerciseContainer).hide();
    $(addExerciseContainer).fadeIn(2000);
    $(mainContainer).hide();
    $(createWorkoutContainer).hide();
})

let createWorkoutButton = document.createElement('button');
createWorkoutButton.textContent = 'Create/Delete Workout';
createWorkoutButton.className = 'rounded-button';
buttonContainer.appendChild(createWorkoutButton)
createWorkoutButton.addEventListener('click', () => {
    $(mainContainer).hide();
    $(workoutContainer).hide();
    $(workoutContainer).empty();
    $(createWorkoutContainer).hide();
    $(createWorkoutContainer).fadeIn(1000);
    $(loginContainer).hide();
})



let mainContainer = document.createElement('div');
mainContainer.style.display = 'flex';
mainContainer.style.flexDirection = 'row';
mainContainer.style.justifyContent = 'center';
mainContainer.style.height = '75vh';
mainContainer.style.width = '92.8vw';
mainContainer.style.flexFlow = 'center';
mainContainer.style.alignItems = 'center';
mainContainer.style.justifyContent = 'space-around';
mainContainer.style.padding = '50px';
mainContainer.style.backgroundColor = '#14213D';
body.appendChild(mainContainer);
$(mainContainer).hide();

let workoutContainer = document.createElement('div');
workoutContainer.style.display = 'flex';
workoutContainer.style.flex = 'wrap';
workoutContainer.style.flexDirection = 'row';
workoutContainer.style.justifyContent = 'space-around';
workoutContainer.style.height = '75vh';
workoutContainer.style.width = '98vw';
workoutContainer.style.backgroundColor = '#14213D';
body.appendChild(workoutContainer);
$(workoutContainer).hide();

homePage();

    async function homePage() {
        const response = await fetch('http://localhost:3000/api/workouts');
       const data = await response.json();
       console.log(data);
   let pushButton = document.createElement('button');
   pushButton.textContent = data[0].workout_name;
   pushButton.className = 'rounded-button';
   pushButton.style.fontSize = '30px';
   pushButton.style.height = '20vh';
   pushButton.style.width = '20vw';
     pushButton.id = 'pushButton';
   mainContainer.appendChild(pushButton)
   
   pushButton.addEventListener('click', async() => {
    const response = await fetch('http://localhost:3000/api/exercises/1')
    const data = await response.json();
    console.log(data);
    $(pushButton).hide();
    $(pullButton).hide();
    $(legsButton).hide();
    $(mainContainer).hide();
    $(workoutContainer).show();
    data.forEach((exercise) => {
      let pushContainer = document.createElement('div');
      $(pushContainer).hide();
      $(pushContainer).fadeIn(1000);
      pushContainer.style.borderRadius = '10px';
    pushContainer.style.height = '30vh';
    pushContainer.style.width = '15vw';
    pushContainer.style.backgroundColor = '#E5E5E5';
    workoutContainer.appendChild(pushContainer) ;
    
    let h1 = document.createElement('h1');
    h1.textContent = exercise.exercise_name;
    pushContainer.appendChild(h1);

    let sets = document.createElement('h3');
    sets.textContent = `sets: ${exercise.set_number}`;
    pushContainer.appendChild(sets);

    let reps = document.createElement('h3');
    reps.textContent = `reps: ${exercise.reps}`;
    pushContainer.appendChild(reps);

    let difficulty = document.createElement('h3');
    difficulty.textContent = `difficulty: ${exercise.difficulty}`
    pushContainer.appendChild(difficulty)
    })
   
    
})

   let pullButton = document.createElement('button');
   pullButton.textContent = data[1].workout_name;
   pullButton.className = 'rounded-button';
   pullButton.style.fontSize = '30px';
   pullButton.style.height = '20vh';
   pullButton.style.width = '20vw';
   pullButton.id = 'pullButton';
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
      $(pullContainer).hide();
      $(pullContainer).fadeIn(1000);
      pullContainer.style.borderRadius = '10px';
    pullContainer.style.height = '30vh';
    pullContainer.style.width = '15vw';
    pullContainer.style.backgroundColor = '#E5E5E5';
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
    difficulty.textContent = `difficulty: ${exercise.difficulty}`;
    pullContainer.appendChild(difficulty);
    })
   })

   let legsButton = document.createElement('button');
    legsButton.textContent = data[2].workout_name;
    legsButton.className = 'rounded-button';
    legsButton.style.fontSize = '30px';
   legsButton.style.height = '20vh';
   legsButton.style.width = '20vw';
legsButton.id = 'legsButton';
mainContainer.appendChild(legsButton)

legsButton.addEventListener('click', async() => {
    const response = await fetch('http://localhost:3000/api/exercises/3')
    const data = await response.json();
    console.log(data);
    $(pushButton).hide();
    $(pullButton).hide();
    $(legsButton).hide();
    $(mainContainer).hide();
    $(workoutContainer).show();
    data.forEach((exercise) => {
      let legsContainer = document.createElement('div');
      $(legsContainer).hide();
      $(legsContainer).fadeIn(1000);
    //   legsContainer.style.display = 'flex'
    //   legsContainer.style.flex = 'wrap'
      legsContainer.style.justifyContent = 'space-around';
      legsContainer.style.borderRadius = '10px';
      legsContainer.style.margin = '10px';
    legsContainer.style.height = '30vh';
    legsContainer.style.width = '15vw';
    legsContainer.style.backgroundColor = '#E5E5E5';
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