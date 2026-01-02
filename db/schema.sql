USE `main`;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100),
    user_email VARCHAR(100) NOT NULL UNIQUE,
    user_password VARCHAR(200) NOT NULL
);

CREATE TABLE posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author_id INT NOT NULL,
    post_text TEXT,
    CONSTRAINT fk_posts_user
        FOREIGN KEY (author_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);
