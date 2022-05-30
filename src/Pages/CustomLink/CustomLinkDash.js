import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLinkDash({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ fontWeight: match ? "bold" : "400", color: match ? "#51A800" : "#000000", borderBottom: match ? "2px solid #51A800" : "none" }}
                to={to} {...props}>
                {children}
            </Link>
        </div>
    );
}

export default CustomLinkDash;