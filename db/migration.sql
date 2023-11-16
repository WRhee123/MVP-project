CREATE TABLE workouts (
    id SERIAL PRIMARY KEY NOT NULL,
    workout_name VARCHAR(50)
);

-- CREATE TABLE exercise_type(
--     id SERIAL PRIMARY KEY NOT NULL,
--      muscle_group VARCHAR(50)
-- );

CREATE TABLE exercises(
    id SERIAL PRIMARY KEY NOT NULL,
    exercise_name VARCHAR(50),
    set_number INTEGER,
    reps VARCHAR(10),
    difficulty VARCHAR(50),
    workout_id INTEGER REFERENCES workouts(id),
);



CREATE TABLE users_workout(
    id SERIAL PRIMARY KEY NOT NULL,
    workout_name VARCHAR(50)
);

CREATE TABLE all_exercises(
    id SERIAL PRIMARY KEY NOT NULL,
    exercise VARCHAR(50),
    set_number INTEGER,
    reps INTEGER,
    user_id INTEGER REFERENCES user(id)
);
