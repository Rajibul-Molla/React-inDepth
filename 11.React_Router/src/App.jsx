import { BrowserRouter, Routes, Route, Link, useParams, Outlet } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Products from "./Products"
import Phone from "./Phone"
import Laptop from "./Laptop"

// Defined outside App to avoid re-creation on every render
function User() {
  const { id } = useParams()
  console.log(useParams())
  return <h2>User Profile for ID: {id}</h2>
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>
}

console.log(Outlet)

function App() {
  return (
    <BrowserRouter>
      <h1>React Router Example</h1>

      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="/user/10">User</Link> | {" "}
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        
        {/* Nested Routes for Products */}
        <Route path="/products" element={<Products />}>
          <Route path="phone" element={<Phone />} />
          <Route path="laptop" element={<Laptop />} />
        </Route>

        {/* 404 Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App