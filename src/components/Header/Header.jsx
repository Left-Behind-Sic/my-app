import React from "react";
import cl from './Header.module.css'


const Header = (props) => {
    return (
        <header className={cl.header}>
            <h1>Event Listing</h1>
            <div className={cl.select}>
                <ul>
                    <li>
                        City: <select onChange={props.sel} >
                            <option value="Amsterdam" >Amsterdam </option>
                            <option value="Berlin" >Berlin </option>
                            <option value="Rim" >Rim </option>
                            <option value="St.Petersburg" >St.Petersburg </option>
                        </select>
                    </li>
                    <li>
                        Month:
                        <select onChange={props.sel}>
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
                        <button>Alert</button>
                    </li>
                </ul>

            </div>
        </header>
    )
}




export default Header;