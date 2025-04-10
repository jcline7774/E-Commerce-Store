CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  price REAL,
  image TEXT
);

INSERT INTO products (name, price, image) VALUES
('Cool Gadget', 49.99, 'https://via.placeholder.com/150'),
('Fancy Item', 89.99, 'https://via.placeholder.com/150'),
('Useful Thing', 19.99, 'https://via.placeholder.com/150');
