CREATE TABLE workouts (
    id SERIAL PRIMARY KEY NOT NULL,
    workout_name VARCHAR(50)
);



CREATE TABLE exercises(
    id SERIAL PRIMARY KEY NOT NULL,
    exercise_name VARCHAR(50),
    set_number INTEGER,
    reps VARCHAR(10),
    difficulty VARCHAR(50),
    workout_id INTEGER REFERENCES workouts(id)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    users_name VARCHAR(500) NOT NULL,
    users_password VARCHAR(500) NOT NULL
);

CREATE TABLE users_workout(
    id SERIAL PRIMARY KEY NOT NULL,
    workout_name TEXT,
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE all_exercises(
    id SERIAL PRIMARY KEY NOT NULL,
    exercise VARCHAR(50),
    set_number INTEGER,
    reps VARCHAR(50),
    difficulty VARCHAR(50),
    users_id INTEGER REFERENCES users_workout(id)
);

