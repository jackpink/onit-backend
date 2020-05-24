
DROP TABLE task;
DROP TABLE roadmap;

CREATE TABLE task (
  id serial PRIMARY KEY,
  title varchar(255) NOT NULL,
  status ,
  completion date,
  roadmap_id int references roadmap(id),
);

CREATE TABLE roadmap (
  id SERIAL,
  title varchar(255) NOT NULL,
  status , -- This could be obtained from the nested tasks status'
  completion date, -- This could be obtained from the nested tasks completions?
  userID varchar(127),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`userID`)
);

CREATE TABLE roadmap_step_of_roadmap (
  parent_roadmap_id varchar(63) NOT NULL,
  child_roadmap_id varchar(63) NOT NULL,
  user_id,
  PRIMARY KEY (`parent_roadmap_id`, `child_roadmap_id`)
);