import { Outlet, Link } from "react-router-dom";

function Layout() {

return (

    <>
    <header>
<nav className="background-color: rgb(203 213 225)">

<ul className="list-none fixed top-2 left-12 flex ">


    <li className="mr-6">

    <Link to="/Cocktail">Cocktail</Link>

    </li>

    <li className="mr-6">

    <Link to="/Favoris">Favoris</Link>

    </li>

</ul>

</nav>
    </header>
<Outlet />


</>

);

}

export default Layout;