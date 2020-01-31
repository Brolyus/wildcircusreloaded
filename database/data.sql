USE wildcircusreloaded;

SET
    FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE user;

SET
    FOREIGN_KEY_CHECKS = 1;

INSERT INTO
    user (
        email,
        password,
        firstname,
        lastname,
        role
    )
VALUES
    (
        'desousanthony@gmail.com',
        'test',
        'Anthony',
        'De Sousa',
        'Admin'
    ),
    (
        'erza@gmail.com',
        'test',
        'Erza',
        'Scarlet',
        'Member'
    ),
    (
        'natsu@gmail.com',
        'test',
        'Natsu',
        'Ragnir',
        'Member'
    ),
    (
        'lucy@gmail.com',
        'test',
        'Lucy',
        'Heartfilia',
        'Member'
    ),
    (
        'grey@gmail.com',
        'test',
        'Grey',
        'Fullbuster',
        'Member'
    );

SET
    FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE guest;

SET
    FOREIGN_KEY_CHECKS = 1;

INSERT INTO
    guest (firstname, lastname)
VALUES
    ('Brigitte', 'De Sousa'),
    ('Romain', 'De Sousa'),
    ('Happy', 'Fairy Tail'),
    ('Jellal', 'Unknown'),
    ('Aquarius', 'Heartfilia');

SET
    FOREIGN_KEY_CHECKS = 0;

TRUNCATE TABLE ticket;

SET
    FOREIGN_KEY_CHECKS = 1;

INSERT INTO
    ticket(qrcode, user_id, guest_id)
VALUES
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Qrcode_wikipedia_fr_v2clean.png/800px-Qrcode_wikipedia_fr_v2clean.png',
        1,
        1
    ),
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Qrcode_wikipedia_fr_v2clean.png/800px-Qrcode_wikipedia_fr_v2clean.png',
        1,
        2
    ),
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Qrcode_wikipedia_fr_v2clean.png/800px-Qrcode_wikipedia_fr_v2clean.png',
        2,
        4
    ),
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Qrcode_wikipedia_fr_v2clean.png/800px-Qrcode_wikipedia_fr_v2clean.png',
        3,
        3
    ),
    (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Qrcode_wikipedia_fr_v2clean.png/800px-Qrcode_wikipedia_fr_v2clean.png',
        4,
        5
    );

TRUNCATE TABLE activity;

INSERT INTO
    activity(description, name)
VALUES
    (
        "Une fois plongé dans notre univers de réalité virtuelle, vous verrez un spectacle epoustouflant, durant lequel les flammes vont venir tournoyer autour de vous. Le cracheur de feu est dépassé, c'est maintenant le cirque qui crache du feu.",
        'Le feu tourbillonnant'
    ),
    (
        'Vous allez pouvoir vivre une expérience unique, où vous verrez un lion vous dévorer les entrailles',
        'Le lion affamé'
    );

TRUNCATE TABLE wilder;

INSERT INTO
    wilder(name, description, biography, image)
VALUES
    (
        'Anthony De Sousa',
        'Chef de la sécurité, service des addictions',
        'Ancien caféinomane reconverti',
        'https://media-exp1.licdn.com/dms/image/C4D03AQHpbz3vaj94tw/profile-displayphoto-shrink_100_100/0?e=1585785600&v=beta&t=Vb94y31OQiNXkwrARXn6GudY-vKDx0fh5lWcN7y2o4c'
    ),
    (
        'Jessy Coraboeuf',
        'Responsable production',
        "Travailleur acharné, il vérifie que l'activité de la société ne tourne jamais au ralenti",
        'https://media-exp1.licdn.com/dms/image/C4E03AQH-hffg25kuKw/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=c-UceOdyf2igdlF4kmvTtRgG3X1lEmC6jrfxUnfaiO0'
    ),
    (
        'Alexis Tonello',
        'Mime',
        "Peu enclin à parler, il a trouvé sa voie dans la gestuelle",
        'https://media-exp1.licdn.com/dms/image/C5603AQEVJ4FkUhQilw/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=Mz6xmxfaZoC9QgQt9aUbXyqgHVxpIJ9TkZFGoEPhrRc'
    ),
    (
        'Hugo Vallée',
        'Présentateur',
        "TBD",
        'https://media-exp1.licdn.com/dms/image/C5603AQHrrDL9R2VmVw/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=8x_X7K0nLORdZG64aBGCrm5WDnXftGy3WtMILaHSQOs'
    );