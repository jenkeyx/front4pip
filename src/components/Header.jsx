import React from "react";
import {Link, Redirect} from "react-router-dom";
export default function Header(props) {

    return(
        <div id="header">
            <p>
                Григорьева Сардана
                Мхитарян Сергей<br/>
                Группа: P3200<br/>
                Вариант: 200042
            </p>

            {!(props.authStatus) &&
            <div>
                <button className='header-btn'><Link to={'/signIn'}>Sign in </Link></button>
                <button className='header-btn'><Link to={'/'}>Sign up</Link></button>

            </div>
            }

        </div>

    );
}