import { useState } from "react";

import "../sidebar.css"

function SideBar (){

    const [isSubListVisible, setSubListVisible] = useState(false);

    const toggleSubList = () => {
        setSubListVisible(prevState => !prevState);
    };


    return(
        <div className="SideBar">
            <ul className="UL">
                <li className="list"><a className="AA">ITEM A</a></li>
                <li className="list"><a className="AA">ITEM B</a></li>
                <li  onClick={toggleSubList} className="list"><a className="AA">ITEM C</a>
                    <ul className={`sublist ${isSubListVisible ? 'visible' : ''}`}>
                        <li className="list"><a className="AA">ITEM C a</a></li>
                        <li className="list"><a className="AA">ITEM C b</a></li>
                        <li className="list"><a className="AA">ITEM C c</a></li>
                    </ul>
                </li>

            </ul>
            <ul>
            </ul>
        </div>
    );
}

export default SideBar