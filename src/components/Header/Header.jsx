import React, { useState } from "react";
import cl from './Header.module.css'


const Header = (props) => {


    let select = React.createRef();

    let change = () => {
        console.log(select.current.selected)
    }

    const [selects] = useState();

    let sel = (e) => {
        console.log(e.target.value);
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
                        Month:
                        <select ref={select} value={selects} onChange={sel}>
                            <option value="09" >September</option>
                            <option value="10" >October</option>
                            <option value="11" >November</option>
                            <option value="12" >December</option>
                            <option value="01" >January</option>
                            <option value="02" >February</option>
                            <option value="03" >March</option>
                            <option value="04" >April</option>
                            <option value="05" >May</option>
                            <option value="06" >June</option>
                            <option value="07" >July</option>
                            <option value="08" >August</option>
                        </select>
                        <button onClick={change}>Alert</button>
                    </li>
                </ul>

            </div>
        </header>
    )
}




export default Header;