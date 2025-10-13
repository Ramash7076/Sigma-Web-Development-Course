"use client";

import React from 'react'
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div>
            <div>Navbar</div>
            <div>Current Pathname: {pathname}</div>
        </div>
    )
}

export default Navbar
