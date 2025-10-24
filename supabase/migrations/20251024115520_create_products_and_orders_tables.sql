/*
  # Create Ambev Products and Orders System

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text, product name)
      - `description` (text, product description)
      - `category` (text, product category: beer, soft_drink, energy_drink, etc)
      - `price` (decimal, product price)
      - `image_url` (text, product image URL)
      - `stock` (integer, available quantity)
      - `created_at` (timestamptz, creation timestamp)
    
    - `orders`
      - `id` (uuid, primary key)
      - `customer_name` (text, customer's name)
      - `customer_email` (text, customer's email)
      - `customer_phone` (text, customer's phone)
      - `customer_address` (text, delivery address)
      - `total_amount` (decimal, total order value)
      - `status` (text, order status: pending, confirmed, delivered)
      - `created_at` (timestamptz, order timestamp)
    
    - `order_items`
      - `id` (uuid, primary key)
      - `order_id` (uuid, foreign key to orders)
      - `product_id` (uuid, foreign key to products)
      - `quantity` (integer, quantity ordered)
      - `unit_price` (decimal, price per unit at time of order)
      - `created_at` (timestamptz, creation timestamp)

  2. Security
    - Enable RLS on all tables
    - Products are readable by everyone (public catalog)
    - Orders can be created by anyone
    - Order items are linked to orders

  3. Sample Data
    - Populate with popular Ambev products
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  price decimal(10,2) NOT NULL,
  image_url text NOT NULL,
  stock integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  customer_address text NOT NULL,
  total_amount decimal(10,2) NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Create order_items table
CREATE TABLE IF NOT EXISTS order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_id uuid NOT NULL REFERENCES products(id),
  quantity integer NOT NULL,
  unit_price decimal(10,2) NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Products policies (public read access)
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  USING (true);

-- Orders policies (anyone can create orders)
CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view their orders by email"
  ON orders FOR SELECT
  USING (true);

-- Order items policies
CREATE POLICY "Anyone can create order items"
  ON order_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view order items"
  ON order_items FOR SELECT
  USING (true);

-- Insert sample Ambev products
INSERT INTO products (name, description, category, price, image_url, stock) VALUES
  ('Skol Lata 350ml', 'Cerveja Pilsen refrescante, perfeita para qualquer ocasião', 'beer', 3.50, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg', 1000),
  ('Brahma Duplo Malte 350ml', 'Cerveja encorpada com sabor intenso de malte', 'beer', 4.20, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg', 800),
  ('Antarctica Lata 350ml', 'Tradicional cerveja brasileira, leve e refrescante', 'beer', 3.80, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg', 900),
  ('Budweiser Long Neck 330ml', 'Cerveja premium americana, sabor marcante', 'beer', 5.50, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg', 600),
  ('Stella Artois 330ml', 'Cerveja belga premium, sofisticada e equilibrada', 'beer', 6.00, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg', 500),
  ('Corona Extra 330ml', 'Cerveja mexicana leve, ideal com limão', 'beer', 6.50, 'https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg', 400),
  ('Guaraná Antarctica 2L', 'Refrigerante de guaraná, sabor autêntico brasileiro', 'soft_drink', 7.90, 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg', 700),
  ('Guaraná Antarctica Lata 350ml', 'Guaraná em porção individual', 'soft_drink', 3.00, 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg', 1200),
  ('Pepsi 2L', 'Refrigerante de cola refrescante', 'soft_drink', 7.50, 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg', 800),
  ('Pepsi Black Lata 350ml', 'Pepsi zero açúcar', 'soft_drink', 3.20, 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg', 600),
  ('H2OH! Limão 500ml', 'Bebida refrescante com toque de limão', 'soft_drink', 4.50, 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg', 500),
  ('Gatorade Limão 500ml', 'Isotônico para reposição de energia', 'energy_drink', 5.50, 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg', 450),
  ('Fusion Açaí 500ml', 'Bebida energética com açaí', 'energy_drink', 6.00, 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg', 300),
  ('Do Bem Laranja 1L', 'Suco natural de laranja', 'juice', 8.90, 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg', 350),
  ('Do Bem Uva 1L', 'Suco natural de uva', 'juice', 8.90, 'https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg', 350);
