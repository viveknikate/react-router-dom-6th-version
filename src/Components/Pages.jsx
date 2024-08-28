import { Link } from "react-router-dom"

const Home = () => {
     return (
          <center>
               <h1>Home Page</h1>
          </center>
     )
}
const About = () => {
     return (
          <center>
               <h1>About Us</h1>
          </center>
     )
}
const Contact = () => {
     return (
          <center>
               <h1>Contact Us</h1>
          </center>
     )
}
const Service = () => {
     return (
          <center>
               <h1>Our Services</h1>
          </center>
     )
}
const Articles = () => {
     return (
          <center>
               <h1>Our Articles</h1>
          </center>
     )
}
const Review = () => {
     return (
          <center>
               <h1>Our Reviews</h1>
          </center>
     )
}
const Blogs = () => {
     return (
          <center>
               <h1>Our Blogs</h1>
          </center>
     )
}

const deco = {
     textDecoration: 'none',
     color:'red',
     fontSize:'30px'
}
const NotFound = () => {
     return (
          <center>
               <h1>404 Page Doesnt exist</h1>
               <p>Go back to home page</p>
               <Link to={'/'} style={deco}>Home</Link>
          </center >
     )
}

export { Home, About, Contact, Service, Review, Blogs, NotFound, Articles };