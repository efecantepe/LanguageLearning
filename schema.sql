/*

    CREATE TABLE IF NOT EXISTS student(
    sid CHAR(6) NOT NULL,
    sname VARCHAR(50) character set utf8, -- for inserting ş I added character set utf 8
    bdate DATE,
    dept CHAR(2),
    year VARCHAR(15),
    gpa FLOAT,
    PRIMARY KEY (sid)
);

CREATE TABLE IF NOT EXISTS company(
    cid CHAR(5) NOT NULL ,
    cname VARCHAR(20) character set utf8,
    quota INT,
    gpa_threshold FLOAT,
    city VARCHAR(20),
    PRIMARY KEY (cid)
);

CREATE TABLE IF NOT EXISTS apply(
    sid CHAR(6),
    cid CHAR(5),

    FOREIGN KEY (sid) references student(sid),
    FOREIGN KEY (cid) references company(cid)
);
INSERT INTO student VALUES
                        ('S101', 'Ali', '1999-07-15', 'CS', 'sophomore', 2.92),
                        ('S102', 'Veli', '2002-01-07', 'EE', 'junior', 3.96),
                        ('S103', 'Ayse', '2004-02-12', 'IE', 'freshman', 3.30),
                        ('S104', 'Mehmet', '2003-05-23', 'CS', 'junior', 3.07);

INSERT INTO company VALUES
                        ('C101','tubitak', 10, 2.50, 'Ankara'),
                        ('C102','bist', 2, 2.80, 'Istanbul'),
                        ('C103','aselsan', 3, 3.00, 'Ankara'),
                        ('C104','thy', 5, 2.40, 'Istanbul'),
                        ('C105','milsoft', 6, 2.50, 'Ankara'),
                        ('C106','amazon', 1, 3.80, 'Palo Alto'),
                        ('C107','tai', 4, 3.00, 'Ankara');


INSERT INTO apply VALUES ('S101', 'C101'),
                         ('S101', 'C102'),
                         ('S101', 'C104'),
                         ('S102', 'C106'),
                         ('S103', 'C104'),
                         ('S103', 'C107'),
                         ('S104', 'C102'),
                         ('S104', 'C107');

*/

DROP TABLE IF EXISTS apply;
DROP TABLE IF EXISTS company;
DROP TABLE IF EXISTS student;

DROP TABLE IF EXISTS Language;

CREATE TABLE IF NOT EXISTS  Language(
    languageName VARCHAR(50)
);

INSERT INTO Language VALUES
('German'),
('French'),
('Turkish');


