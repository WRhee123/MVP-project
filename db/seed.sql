INSERT INTO workouts (workout_name) VALUES ('Push');
INSERT INTO workouts (workout_name) VALUES ('Pull');
INSERT INTO workouts (workout_name) VALUES ('Legs');

INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Barbell Bench Press', 3, '5-8', 'advanced', 1);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Machine Shoulder Press', 3, '8-12','beginner', 1);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Dips', 3, '12-15', 'advanced', 1);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Barbell Skull Crushers', 3, '8-10', 'intermediate', 1);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Dumbbell Lateral Raises', 3, '12', 'beginner', 1);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Cable Tricep Pulldowns', 3, '15-20', 'beginner', 1);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Lat Pulldowns', 3, '10-12', 'intermediate', 2);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Machine Rows', 3, '10-12', 'beginner', 2);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Rope Face Pulls', 3, '10-12', 'intermediate', 2);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Incline Dumbbell Shrugs', 3, '15-20', 'intermediate', 2);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Reverse Pec Deck', 2, '15', 'beginner', 2);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Dumbbell Bicep Curls', 3, '12-15', 'beginner', 2);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Barbell Squats', 3, '5', 'advanced', 3);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Romanian Deadlifts', 3, '10', 'advanced', 3);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Unilateral Leg Press', 3, '15', 'beginner', 3);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Leg Extensions', 3, '10-12', 'beginner', 3);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Seated Hamstring Curls', 3, '10-12', 'beginner', 3);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Standing Calf Raises', 3, '10-12', 'beginner',3);
INSERT INTO exercises (exercise_name, set_number, reps, difficulty, workout_id) VALUES ('Decline Crunches', 2, '10-12', 'intermediate', 3);

INSERT INTO users_workout(workout_name) VALUES ('All Exercises');

INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Barbell Bench Press', 3, '5-8', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Machine Shoulder Press', 3, '8-12','beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Dips', 3, '12-15', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Cable Chest Press', 3, '10-12', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Dumbbell Chest Fly', 3, '10-12', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Decline Bench Press', 3, '5-8', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Incline Bench Press', 3, '5-8', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Incline Dumbbell Press', 3, '8-10', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Machine Chest Press', 3, '8-12', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Smith Machine Bench Press', 3, '6-10', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Smith Machine Incline Bench Press', 3, '6-10', 'beginner',1);


INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Dumbbell Lateral Raises', 3, '12', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Barbell Upright Row', 3, '10-12', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Cable Lateral Raise', 3, '12-15', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Overhead Barbell Shoulder Press', 3, '6-8', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Dumbbell Shoulder Press', 3, '10-12', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Machine Lateral Raise', 3, '12-15', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Reverse Cable Flyes', 3, '12-15', 'advanced', 1);

INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Barbell Skull Crushers', 3, '8-10', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Dumbbell Skull Crushers', 3, '10-12', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Cable Tricep Pulldowns', 3, '15-20', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Close Grip Bench Press', 3, '8-10', 'advanced', 1);



INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Lat Pulldowns', 3, '10-12', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Machine Rows', 3, '10-12', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Rope Face Pulls', 3, '10-12', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Incline Dumbbell Shrugs', 3, '15-20', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Reverse Pec Deck', 2, '15', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Barbell Row', 3, '8-10', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Pull Ups', 3, '10-12', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Deadlift', 3, '3-5', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Good Morning', 3, '8-10', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Unilateral Cable Rows', 3, '12-15', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Unilateral Lat Pulldowns', 3, '10-12', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Sumo Deadlift', 3, '3-5', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Trap Bar Deadlifts', 3, '6-8', 'beginner', 1);

INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Dumbbell Bicep Curls', 3, '12-15', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Barbell Curls', 3, '8-10', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Dumbbell Preacher Curls', 3, '8-10', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Hammer Curls', 3, '12-15', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Incline Dumbbell Curls', 3, '12-15', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Cable Curls', 3, '12-15', 'beginner', 1 );
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Spider Curls', 3, '12-15', 'advanced', 1);

INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Barbell Squats', 3, '5', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Romanian Deadlifts', 3, '10', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Unilateral Leg Press', 3, '15', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Leg Extensions', 3, '10-12', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Seated Hamstring Curls', 3, '10-12', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Standing Calf Raises', 3, '10-12', 'beginner',1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Bulgarian Split Squat', 3, '10-12', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Machine Hack Squat', 3, '8-10', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Leg Press', 3, '8-10', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Front Squat', 3, '5-8', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Goblet Squat', 3, '10-12', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Lying Leg Curl', 3, '12-15', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Hip Thrusts', 3, '8-10', 'advanced', 1);


INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Sit Ups', 3, '20-25', 'intermediate', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Hanging Leg Raises', 3, '15-20', 'advanced', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Planks', 3, '60 seconds', 'beginner', 1);
INSERT INTO all_exercises(exercise, set_number, reps, difficulty, user_id) VALUES ('Decline Crunches', 2, '10-12', 'intermediate', 1);




-- INSERT INTO exercise_type (muscle_group) VALUES ('Chest');
-- INSERT INTO exercise_type (muscle_group) VALUES ('Shoulders');
-- INSERT INTO exercise_type (muscle_group) VALUES ('Triceps');
-- INSERT INTO exercise_type (muscle_group) VALUES ('Back');
-- INSERT INTO exercise_type (muscle_group) VALUES ('Biceps');
-- INSERT INTO exercise_type (muscle_group) VALUES ('Legs');
-- INSERT INTO exercise_type (muscle_group) VALUES ('Abs');





