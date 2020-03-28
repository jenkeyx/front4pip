import React from "react";
import {Link} from "react-router-dom";
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
                    <Link to={'/signIn'}>Sign in </Link>
                    <Link to={'/'}>Sign up</Link>

                </div>
            }

        </div>

    );
}