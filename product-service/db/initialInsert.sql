create table products (
 id uuid primary key default uuid_generate_v4(),
 title text,
 artist text,
 description text,
 price integer,
 coverUrl text
)

create table stocks (
	product_id uuid,
	count integer,
	foreign key ("product_id") references "products" ("id")
)

INSERT INTO products (title, artist, description, price, coverUrl) VALUES
('Lost & Found', 'Jorja Smith', 'awesome record', 2300, 'https://miro.medium.com/max/807/0*p4iC9z-_fz8Fl3gc.jpg'),
('Hands Rest', 'Aparde', 'awesome record', 2100 , 'https://i1.sndcdn.com/artworks-000522208638-xu3x9f-t500x500.jpg'),
('MAGDALENE', 'FKA Twigs', 'awesome record', 2500, 'https://musicviking.ru/wp-content/uploads/2019/12/fka-twigs-magdalene-album-cover.jpg'),
('Mutant', 'Arka', 'awesome record', 2300, 'https://media.pitchfork.com/photos/5929b1f09d034d5c69bf4ac3/1:1/w_600/39d465c8.jpg'),
('Dancehall', 'The Blaze', 'awesome record', 2700, 'https://media.pitchfork.com/photos/5b86fe31a9c65c4d906eb87b/1:1/w_600/theblaze.jpg'),
('Not to Dissapear', 'Daughter', 'awesome record', 2900, 'https://vinyla.com/files/products/daughter-not-to-dissapear.800x800.png?318e9e196be91ac406e554aa2f8a31f2');

INSERT INTO stocks (count, product_id) VALUES
('4', 'c0a5b1f7-8aed-4bfd-97f8-9cfcc084a9fa'),
('6', '8dd3855d-d200-4d9a-bea9-95a2e6e239c4'),
('2', '9361acba-a500-4acc-9e53-e648c3126c61'),
('5', 'a71080b4-e7b9-4970-9784-15348f231fd9'),
('6', '02488606-ae35-43bb-b8f5-57a06f381550'),
('10', 'a284bccc-5c28-4a61-878f-34bad3c6a4a1');