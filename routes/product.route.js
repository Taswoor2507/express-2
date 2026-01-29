import { Router } from "express";
export const productRouter = Router();

productRouter.get("/all" , (req,res,next)=>{
    res.json( [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    price: 79.99,
    category: "Electronics",
    inStock: true,
    rating: 4.5,
    image: "headphones.jpg"
  },
  {
    id: 2,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    category: "Home & Kitchen",
    inStock: true,
    rating: 4.8,
    image: "water-bottle.jpg"
  },
  {
    id: 3,
    name: "Yoga Mat - Premium Non-Slip",
    price: 34.99,
    category: "Sports & Fitness",
    inStock: false,
    rating: 4.6,
    image: "yoga-mat.jpg"
  },
  {
    id: 4,
    name: "LED Desk Lamp",
    price: 45.50,
    category: "Home & Office",
    inStock: true,
    rating: 4.3,
    image: "desk-lamp.jpg"
  },
  {
    id: 5,
    name: "Organic Green Tea - 100 Bags",
    price: 12.99,
    category: "Food & Beverages",
    inStock: true,
    rating: 4.7,
    image: "green-tea.jpg"
  },
  {
    id: 6,
    name: "Running Shoes - Men's Size 10",
    price: 89.99,
    category: "Footwear",
    inStock: true,
    rating: 4.4,
    image: "running-shoes.jpg"
  },
  {
    id: 7,
    name: "Portable Phone Charger 20000mAh",
    price: 39.99,
    category: "Electronics",
    inStock: false,
    rating: 4.6,
    image: "power-bank.jpg"
  },
  {
    id: 8,
    name: "Cotton Bath Towel Set (4-piece)",
    price: 29.99,
    category: "Home & Kitchen",
    inStock: true,
    rating: 4.5,
    image: "towel-set.jpg"
  },
  {
    id: 9,
    name: "Laptop Backpack - Water Resistant",
    price: 54.99,
    category: "Bags & Accessories",
    inStock: true,
    rating: 4.7,
    image: "backpack.jpg"
  },
  {
    id: 10,
    name: "Smart Watch - Fitness Tracker",
    price: 129.99,
    category: "Electronics",
    inStock: true,
    rating: 4.2,
    image: "smart-watch.jpg"
  }
])
})