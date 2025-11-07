//import './App.css'
import Navbar from './components/Navbar'
import Card from "./components/Card";

function App() {
  // Example product data
  const product = {
    name: "HEADPHONES",
    description: "Comfortable over-ear headphones with noise cancellation.",
    price: 299.99,
    image:"https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?_gl=1*16s2ohw*_ga*OTYzNjcwMDQxLjE3MTc0Mzc5Njc.*_ga_8JE65Q40S6*czE3NjI0OTA4NjkkbzckZzEkdDE3NjI0OTEyNTkkajQ5JGwwJGgw"
  };

  return (
    <div className="App">
      <Navbar/>
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        backgroundColor: "#f7f7f7", 
        flexDirection: "column",
        width: "100%"
      }}>
        <h1 style={{ marginBottom: "20px" }}>Product Card Example</h1>
        <Card product={product} />
      </div>
    </div>
  );
}

export default App;
