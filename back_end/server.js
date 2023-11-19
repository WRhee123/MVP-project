const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const {Pool} = require('pg')
const cors = require('cors');
const bcrypt = require('bcrypt')
const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    database: 'fitness',
    password: '1',
    port: '5432'
})

const PORT = 3000
// const sql = postgres(process.env.DATABASE_URL);


app.use(cors())
app.use(express.json())
app.use(express.static('Public'))



//routes for login/register
app.post('/api/users/register', async(req, res) => {
    const {users_name, users_password} = req.body;
 
    try {
        const existingUser = await pool.query('SELECT * FROM users WHERE users_name = $1', [users_name]);
        if(existingUser.rows.length > 0) {
            return res.status(400).json({error: 'Username already exists'});
        }
       const hashPassword = await bcrypt.hash(users_password, 10);
        const result = await pool.query('INSERT INTO users(users_name, users_password) VALUES ($1, $2) RETURNING *', [users_name, hashPassword]);
        const newUser = result.rows[0];
        console.log(newUser)
        res.status(200).json(newUser)
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.post('/api/users/login', async(req, res) => {
     const {userName, password} = req.body;
    try {
       const result = await pool.query('SELECT * FROM users WHERE users_name = $1', [userName]);
        if(result.rows.length > 0) {
            const user = result.rows[0];
            const passwordCheck = await bcrypt.compare(password, user.users_password);
            if(passwordCheck) {
                res.status(200).json({user, success: true, message: 'Login Successful'});
            } else {
                res.status(400).json({message: 'Invalid Password'});
            }
        } else {
            res.status(400).json({message: 'Invalid User'})
        }

    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
});

//Routes for users table
app.get('/api/users', async(req, res) => {
    try{
        const result = await pool.query("SELECT * FROM users")
        res.send(result.rows)
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/api/users/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        if(isNaN(id)|| id < 0) {
            return res.status(400).json({error: 'Invalid Id'})
        } else {
            let result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
            if(result.rows.length === 0) {
                return res.status(400).json({error: 'Not Found'})
            }
            return res.status(200).send(result.rows[0])
        }
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.post('/api/users', async(req, res) => {
    try{
        const {users_name, users_password} = req.body;
        let result = await pool.query('INSERT INTO users (users_name, users_password) VALUES ($1, $2) RETURNING *', [users_name, users_password]
        );
        res.send(result.rows[0])
    }catch(error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.put('/api/users/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {users_name} = req.body;
        const result = await pool.query(
            'UPDATE users SET users_name = $1 WHERE id = $2 RETURNING *', [users_name, id]
        );
        console.log(result.rows)
        if(result.rows.length === 0) {
            return res.status(400).send('user not found')
        }
        res.json(result.rows[0]);
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})
app.delete('/api/users/id', async(req, res) => {
    try {
        let id = parseInt(req.params.id);
        let result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        res.status(200).send(result.rows[0])
    } catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})
//Routes for workouts table
app.get('/api/workouts', async(req,res) => {
    try{
        const result = await pool.query("SELECT * FROM workouts");
        res.send(result.rows)
    } catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/api/workouts/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        if(isNaN(id) || id < 0) {
            return res.status(400).json({error: 'Invalid ID'})
        } else {
            let result = await pool.query('SELECT * FROM workouts WHERE id = $1', [id]);
            if(result.rows.length === 0) {
               return res.status(400).json({error: 'Not Found'})
            }
           return res.status(200).send(result.rows[0])
        }
    }catch(error) {
        console.log(error.stack);
        return res.status(500).json({error:'Internal Server Error'})
    }
})

app.post('/api/workouts', async(req, res) => {
    try{
        const {workout_name} = req.body;
        let result = await pool.query(
            'INSERT INTO workouts (workout_name) VALUES ($1) RETURNING *', [workout_name]
            );
        res.send(result.rows[0])
    } catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})

app.put('/api/workouts/:id', async(req, res) => {
    try{ 
        const id = parseInt(req.params.id);
    const {workout_name} = req.body;
    const result = await pool.query(
        'UPDATE workouts SET workout_name = $1 WHERE id = $2 RETURNING *', [workout_name, id]
        );
        console.log(result.rows)
    if(result.rows.length === 0) {
        return res.status(400).send('workout not found')
    }
    res.json(result.rows[0]);
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})

app.delete('/api/workouts/:id', async(req, res) => {
    try{ 
        let id = parseInt(req.params.id);
        let result = await pool.query('DELETE FROM workouts WHERE id = $1 RETURNING *', [id]);
        res.status(200).send(result.rows[0])
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})


//Routes for exercises table
app.get('/api/exercises', async(req,res) => {
    try{
        const result = await pool.query("SELECT * FROM exercises");
        res.send(result.rows)
    } catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/api/exercises/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        if(isNaN(id) || id < 0) {
            return res.status(400).json({error: 'Invalid ID'})
        } else {
            let result = await pool.query('SELECT * FROM exercises WHERE workout_id = $1', [id]);
            if(result.rows.length === 0) {
               return res.status(400).json({error: 'Not Found'})
            }
           return res.status(200).json(result.rows)
        }
    }catch(error) {
        console.log(error.stack);
        return res.status(500).json({error:'Internal Server Error'})
    }
})

app.post('/api/exercises', async(req, res) => {
    try{
        const {exercise_name, set_number, reps, difficulty, workout_id} = req.body;
        let result = await pool.query(
            'INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [exercise_name, set_number, reps, difficulty, workout_id]
            );
        res.send(result.rows[0])
    } catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})

app.put('/api/exercises/:id', async(req, res) => {
    try{ 
        const id = parseInt(req.params.id);
    const {exercise_name, set_number, reps, difficulty, workout_id} = req.body;
    const result = await pool.query(
        'UPDATE exercises SET workout_name = $1 , set_number = $2, reps = $3, difficulty = $4, workout_id = $5 WHERE id = $6 RETURNING *', [exercise_name, set_number, reps, difficulty, workout_id, id]
        );
        console.log(result.rows)
    if(result.rows.length === 0) {
        return res.status(400).send('exercises not found')
    }
    res.json(result.rows[0]);
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})

app.delete('/api/exercises/:id', async(req, res) => {
    try{ 
        let id = parseInt(req.params.id);
        let result = await pool.query('DELETE FROM exercises WHERE id = $1 RETURNING *', [id]);
        res.status(200).send(result.rows[0])
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})


//Routes for users_workout table
app.get('/api/users_workout', async(req,res) => {
    try{
        const result = await pool.query("SELECT * FROM users_workout");
        res.send(result.rows)
    } catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/api/users_workout/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        if(isNaN(id) || id < 0) {
            return res.status(400).json({error: 'Invalid ID'})
        } else {
            let result = await pool.query('SELECT * FROM users_workout WHERE id = $1', [id]);
            if(result.rows.length === 0) {
               return res.status(400).json({error: 'Not Found'})
            }
           return res.status(200).send(result.rows[0])
        }
    }catch(error) {
        console.log(error.stack);
        return res.status(500).json({error:'Internal Server Error'})
    }
})

app.post('/api/users_workout', async(req, res) => {
    try{
        const {workout_name, user_id} = req.body;
        let result = await pool.query(
            'INSERT INTO users_workout (workout_name, user_id) VALUES ($1, $2) RETURNING *', [workout_name, user_id]
            );
        const workout = result.rows[0]
        res.send(workout);

    } catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})

app.put('/api/users_workout/:id', async(req, res) => {
    try{ 
        const id = parseInt(req.params.id);
    const {workout_name} = req.body;
    const result = await pool.query(
        'UPDATE users_workout SET workout_name = $1 WHERE id = $2 RETURNING *', [workout_name, id]
        );
        console.log(result.rows)
    if(result.rows.length === 0) {
        return res.status(400).send('exercises not found')
    }
    res.json(result.rows[0]);
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})

app.delete('/api/users_workout/:id', async(req, res) => {
    try{ 
        const userId = parseInt(req.params.id);
        const workoutName = req.body.workout_name

        const workoutToDelete = await pool.query('SELECT * FROM users_workout WHERE user_id = 1 AND workout_name = $2', [userId, workoutName]);
        if(workoutToDelete.rows.length === 0) {
            return res.status(400).json({error: "workout not found"})
        }
        const result = await pool.query('DELETE FROM users_workout WHERE id = $1 RETURNING *', [workoutToDelete.rows[0].id]);
        res.status(200).send(result.rows[0])
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})
// app.delete('/api/workouts/:name', async (req, res) => {
//     try {
//         const workoutName = req.params.name;
//         const userId = req.body.userId; // Assuming userId is sent in the request body

//         if (!workoutName || workoutName.trim() === "" || !userId) {
//             return res.status(400).json({ error: 'Invalid workout name or userId' });
//         }

//         // Check if the user has permission to delete the workout (Optional)
//         // You may want to check if the user making the request owns the workout, etc.

//         const result = await pool.query('DELETE FROM workouts WHERE workout_name = $1 AND user_id = $2 RETURNING *', [workoutName, userId]);

//         if (result.rows.length === 0) {
//             return res.status(400).json({ error: 'Workout not found or user does not have permission to delete' });
//         }

//         return res.status(200).json({ message: 'Workout deleted successfully', deletedWorkout: result.rows[0] });
//     } catch (error) {
//         console.log(error.stack);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// });



//Routes for all_exercises table
app.get('/api/all_exercises', async(req,res) => {
    try{
        const result = await pool.query("SELECT * FROM all_exercises");
        res.send(result.rows)
    } catch(error) {
        console.log(error.stack);
        res.status(500).json({error: 'Internal Server Error'})
    }
})

app.get('/api/all_exercises/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id);
        if(isNaN(id) || id < 0) {
            return res.status(400).json({error: 'Invalid ID'})
        } else {
            let result = await pool.query('SELECT * FROM all_exercises WHERE id = $1', [id]);
            if(result.rows.length === 0) {
               return res.status(400).json({error: 'Not Found'})
            }
           return res.status(200).send(result.rows[0])
        }
    }catch(error) {
        console.log(error.stack);
        return res.status(500).json({error:'Internal Server Error'})
    }
})

app.post('/api/all_exercises', async(req, res) => {
    try{
        const {exercise, set_number, reps, workoutId} = req.body;
        let result = await pool.query(
            'INSERT INTO all_exercises (exercise, set_number, reps, users_id) VALUES ($1, $2, $3, $4) RETURNING *', [exercise, set_number, reps, workoutId]
            );
        res.send(result.rows[0])
    } catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})

app.put('/api/all_exercises/:id', async(req, res) => {
    try{ 
        const id = parseInt(req.params.id);
    const {exercise, set_number, reps, difficulty, users_id} = req.body;
    const result = await pool.query(
        'UPDATE all_exercises SET exercise = $1, set_number = $2, reps = $3, difficulty = $4, users_id = $5 WHERE id = $6 RETURNING *', [exercise, set_number, reps, difficulty, users_id, id]
        );
        console.log(result.rows)
    if(result.rows.length === 0) {
        return res.status(400).send('exercise was not updated')
    }
    res.json(result.rows[0]);
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})

app.delete('/api/all_exercises/:id', async(req, res) => {
    try{ 
        let id = parseInt(req.params.id);
        let result = await pool.query('DELETE FROM all_exercises WHERE id = $1 RETURNING *', [id]);
        res.status(200).send(result.rows[0])
    }catch(error) {
        console.log(error.stack);
        res.status(500).json({error: "Internal Server Error"})
    }
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})