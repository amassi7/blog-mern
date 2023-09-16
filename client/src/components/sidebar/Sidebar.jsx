import { useEffect, useState } from "react"
import "./sidebar.css"
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats,setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
        const res = await axios.get("/categories")
        setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
            <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_birthofstars_0.jpg" alt=""></img>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque obcaecati iure culpa recusandae?</p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                {cats.map(c=>(
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarLstItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className='sidebarTitle'>Follow Me</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
