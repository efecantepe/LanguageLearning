DROP TABLE IF EXISTS Language;
DROP TABLE IF EXISTS learnerLanguages;
DROP TABLE IF EXISTS Level;
DROP TABLE IF EXISTS targetLanguages;
DROP TABLE IF EXISTS Learner;


CREATE TABLE IF NOT EXISTS  Language(
    languageName VARCHAR(50) PRIMARY KEY
);

Create TABLE IF NOT EXISTS Level(
    `level` VARCHAR(50) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Learner(
    learnerId VARCHAR(50) primary key ,
    `name` VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS learnerLanguages(
    languageName varchar(50),
    learnerId varchar(50),
    `level` varchar(50),
    FOREIGN KEY (languageName) references Language(languageName),
    FOREIGN KEY (learnerId) references Learner(learnerId),
    FOREIGN KEY (`level`) references Level(level)
);

CREATE TABLE IF NOT EXISTS targetLanguages(
    languageName varchar(50),
    learnerId varchar(50),
    targetLevel varchar(50),

    FOREIGN KEY (languageName) references Language(languageName),
    FOREIGN KEY (learnerId) references Learner(learnerId),
    FOREIGN KEY (targetLevel) references Level(level)
);




INSERT INTO Language VALUES
('German'),
('French'),
('Turkish');




