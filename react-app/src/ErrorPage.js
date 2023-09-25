import React from "react";
import { useRouteError, NavLink } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>
                <i>{error.data || error.statusText || error.message}</i>
            </p>
            <p>You may return to <NavLink to={"/"}>the homepage</NavLink></p>
        </div>
    );
}
