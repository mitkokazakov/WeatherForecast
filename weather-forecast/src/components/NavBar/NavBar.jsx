import React from 'react'
import style from '../NavBar/NavBar.module.css';

function NavBar() {
    return (
        <div className={style.nav}>
            <div className={style.logo}>
                <h3 className={style.logoHeading}>WEATHER</h3>
                <p className={style.logoParagraph}>book</p>
            </div>
        </div>
    )
}

export default NavBar