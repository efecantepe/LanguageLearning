DROP TABLE IF EXISTS homeworksInClass;
DROP TABLE IF EXISTS class;
DROP TABLE IF EXISTS learnerLanguages;
DROP TABLE IF EXISTS targetLanguages;
DROP TABLE IF EXISTS Learner ;
DROP TABLE IF EXISTS Teacher;

DROP TABLE IF EXISTS inbox_participants;
DROP TABLE IF EXISTS inbox;
DROP TABLE IF EXISTS messages;


DROP TABLE IF EXISTS Language;
DROP TABLE IF EXISTS Level;
DROP TABLE IF EXISTS Gender;

CREATE TABLE IF NOT EXISTS Gender(
    genderName VARCHAR(50) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS  Language(
    languageName VARCHAR(50) PRIMARY KEY
);


Create TABLE IF NOT EXISTS Level(
    level VARCHAR(50) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Learner(
    learnerId VARCHAR(20) primary key ,
    username VARCHAR(50) UNIQUE ,
    learnerName VARCHAR(50),
    surname VARCHAR(50),
    gender VARCHAR(50),
    email VARCHAR(345) UNIQUE,
    "password" VARCHAR(50),
    FOREIGN KEY (gender) references Gender(genderName)
);

CREATE TABLE IF NOT EXISTS Teacher(
    teacherId varchar(20) PRIMARY KEY,
    username VARCHAR(50) UNIQUE ,
    teacherName varchar(50),
    surname VARCHAR(50),
    gender VARCHAR(50),
    email VARCHAR(345) UNIQUE ,
    "password" VARCHAR(50),
    FOREIGN KEY (gender) references Gender(genderName)
);


CREATE TABLE IF NOT EXISTS learnerLanguages(
    languageName varchar(50),
    learnerId varchar(50),
    level varchar(50),
    FOREIGN KEY (languageName) references Language(languageName),
    FOREIGN KEY (learnerId) references Learner(learnerId),
    FOREIGN KEY (level) references Level(level)
);

CREATE TABLE IF NOT EXISTS targetLanguages(
    languageName varchar(50),
    learnerId varchar(50),
    targetLevel varchar(50),

    FOREIGN KEY (languageName) references Language(languageName),
    FOREIGN KEY (learnerId) references Learner(learnerId),
    FOREIGN KEY (targetLevel) references Level(level)
);

CREATE TABLE IF NOT EXISTS class(

    classId SERIAL PRIMARY KEY, /* can be redundant*/
    languageName varchar(50),
    learnerId varchar(50),
    teacherId varchar(50),
    classLevel varchar(50),
    creationTime date default NOW(),
    classDate date,
    classStatus VARCHAR(50) default 'waiting',

    FOREIGN KEY (languageName) references Language(languageName),
    FOREIGN KEY (learnerId) references Learner(learnerId),
    FOREIGN KEY (teacherId) references Teacher(teacherId)


);

CREATE TABLE IF NOT EXISTS homeworksInClass(
    classId INT,
    teacherId varchar(50),
    learnerId varchar(50),
    homeworkDescription varchar(1000),
    dueDate date,

    FOREIGN KEY (learnerId) references Learner(learnerId),
    FOREIGN KEY (teacherId) references Teacher(teacherId),
    FOREIGN KEY (classId) references class(classId)
);

CREATE VIEW waitingClasses AS (
    Select * FROM class WHERE class.classStatus = 'waiting'
);

CREATE VIEW activeClasses AS (

    Select * FROM class WHERE class.classStatus = 'active'

);

CREATE VIEW rejectedClasses AS(

    Select * FROM class WHERE class.classStatus = 'rejected'

);

CREATE VIEW finishedClasses AS(
    Select * FROM class WHERE class.classStatus = 'finished'
);

CREATE TABLE messages (

    inbox_id varchar(8),
    user_id varchar(20),
    "message" varchar(500),
    created_at date default now()

);

CREATE TABLE inbox(

    inbox_id varchar(8),
    last_message varchar(500) default NULL,
    last_sent_user_id varchar(20) default NULL

);

CREATE TABLE inbox_participants(

    user_id varchar(20),
    inbox_id varchar(8),

    PRIMARY KEY (user_id, inbox_id)
);

CREATE TABLE IF NOT EXISTS teacherLanguages(
    languageName varchar(50),
    teacherid varchar(50),
    level varchar(50),
    FOREIGN KEY (languageName) references Language(languageName),
    FOREIGN KEY (teacherid) references teacher(teacherid),
    FOREIGN KEY (level) references Level(level)
);

ALTER TABLE Level ADD rank INT;


CREATE VIEW teacher_name_surname AS
    SELECT teacherid, teacherName, surname FROM teacher;





INSERT INTO Language VALUES
                    ('English'),
                    ('French'),
                    ('Turkish');

INSERT INTO Level Values
                      ('A1'),
                      ('A2'),
                      ('B1'),
                      ('B2'),
                      ('C1'),
                      ('C2'),
                      ('Native');

INSERT INTO Gender VALUES
                       ('Male'),
                       ('Female'),
                       ('Other');

/*
INSERT INTO learnerLanguages VALUES
                        ('French', 'a18fbf9acca53f39a929', 'A1' ),
                        ('English', 'a18fbf9acca53f39a929', 'B2');



SELECT teacherLanguages.teacherid ,teacherName, surname FROM teacher_name_surname ,teacherLanguages, Level a, Level b, Level c
         WHERE teacherLanguages.languageName = 'English'
               AND teacherLanguages.level = a.level
               AND b.level = 'A1' AND c.level = 'C2'
               AND a.rank >= b.rank AND a.rank <= c.rank
               AND teacher_name_surname.teacherId = teacherLanguages.teacherid;

CREATE SEQUENCE class_seq START 1;
*/



