import React from "react";
import {Link} from 'react-router-dom';


function Sidebar() {


    return(
        
        <div className="w-80 h-screen bg-amber-300 flex flex-col space-y-3 p-2">
           <Link to="/AssignmentPage">Assignment Page</Link>
           <Link to="/LecturePage">Lecture Page</Link>        
        </div>
    )
}
export default Sidebar;