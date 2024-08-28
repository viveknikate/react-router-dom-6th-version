import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
     return (
          <div>
               <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', fontSize: '30px' }}>
                    <li>
                         <Link to={'/'} style={{ textDecoration: 'none' }}> Home </Link>
                    </li>
                    <li>
                         <Link to={'/about'} style={{ textDecoration: 'none' }}> About </Link>
                    </li>
                    <li>
                         <Link to={'/contact'} style={{ textDecoration: 'none' }}> Contact </Link>
                    </li>
                    <li>
                         <Link to={'/service'} style={{ textDecoration: 'none' }}> Service </Link>
                    </li>
                    <li>
                         <Link to={'/review'} style={{ textDecoration: 'none' }}> Review </Link>
                    </li>
                    <li>
                         <Link to={'/blogs'} style={{ textDecoration: 'none' }}> Blogs </Link>
                    </li>
                    <li>
                         <Link to={'/articles'} style={{ textDecoration: 'none' }}> Articles </Link>
                    </li>
               </ul>
          </div>
     )
}

export default Header
