CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE list (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    creator_id  INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (creator_id) REFERENCES user(id)
);

CREATE TABLE item (
    id INT NOT NULL AUTO_INCREMENT,
    list_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    checked BOOLEAN DEFAULT FALSE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (list_id) REFERENCES list(id)
);

CREATE TABLE share_request (
    id INT NOT NULL AUTO_INCREMENT,
    token VARCHAR(255) NOT NULL,
    list_id INT NOT NULL,
    creator_id INT NOT NULL,
    is_valid BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (list_id) REFERENCES list(id),
    FOREIGN KEY (creator_id) REFERENCES user(id)
)

CREATE TABLE shared_relation (
    id INT NOT NULL AUTO_INCREMENT,
    list_id INT NOT NULL,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (list_id) REFERENCES list(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
)