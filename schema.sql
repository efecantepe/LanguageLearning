DROP TABLE IF EXISTS homeworksInClass;
DROP TABLE IF EXISTS class;
DROP TABLE IF EXISTS learnerLanguages;
DROP TABLE IF EXISTS targetLanguages;
DROP TABLE IF EXISTS Learner;
DROP TABLE IF EXISTS Teacher;
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
    username VARCHAR(50) ,
    teacherName varchar(50),
    surname VARCHAR(50),
    gender VARCHAR(50),
    email VARCHAR(345),
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

    classId INT PRIMARY KEY , /* can be redundant*/
    languageName varchar(50),
    learnerId varchar(50),
    teacherId varchar(50),
    classLevel varchar(50),
    creationTime date default NOW(),
    classDate date,
    classStatus VARCHAR(50) default 'pending',

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
                       ('Other')





