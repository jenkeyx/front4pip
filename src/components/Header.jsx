import React from "react";
import {Link} from "react-router-dom";
export default function Header() {
    return(
        <div className="header">
            Григорьева Сарданаё<br/>
            Мхитарян СергейP3200<br/>
            Группа: P3200<br/>
            Вариант: 200042
            <Link to={'/welcome'}>Back</Link>
            {/*{this.props.setAuthStatus(false)}*/}

        </div>

    );
}