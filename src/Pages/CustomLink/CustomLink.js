import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ fontWeight: match ? "bold" : "500", borderBottom: match ? "1px solid #fff" : "none" }}
                to={to} {...props}>
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;