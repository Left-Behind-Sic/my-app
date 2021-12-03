import React from "react";
import cl from './Header.module.css'


const Header = (props) => {

   



    let select = React.createRef();

    let change = () => {
        console.log(select.current.selected)
    }

    
    return (
        <header className={cl.header}>
            <h1>Event Listing</h1>
            <div className={cl.select}>
                <ul>
                    <li>
                        City: <select name="select" id="">
                            <option selected="selected">  Amsterdam </option>
                        </select>
                    </li>
                    <li>
                        Month: <select name="select" id="" ref={select}>
                            <option selected="selected" >September</option>
                            <option >October</option>
                            <option >November</option>
                            <option >December</option>
                            <option >January</option>
                            <option >February</option>
                            <option >March</option>
                            <option >April</option>
                            <option >May</option>
                            <option >June</option>
                            <option >July</option>
                            <option >August</option>
                        </select>
                        <button onClick={change}>Alert</button>
                    </li>
                </ul>
               
            </div>
        </header>
    )
}

export default Header;