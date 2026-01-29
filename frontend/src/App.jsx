import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
     async function fetchProducts(){
       try {
         const response = await fetch("http://localhost:8080/api/v1/products/all");
         const data = await response.json();
         setProducts(data);
       } catch (error) {
        console.error("Error fetching products:", error);
       }
     }

     fetchProducts();
  } , [])

 return (
  <div>
    <h1>Product List</h1>
    <ul>
         {
           products ?  products.map(product=>{
            return <li key={product.id}>{product.name}</li>
          }) : <p>NO PRODUCTS</p>
         }
      </ul>
  </div>
 )
}

export default App
