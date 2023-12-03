'use client';

import { usePathname } from 'next/navigation'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

const Header = () => {
    const pathname = usePathname()
    const navItems = [{ path: "/", name: "搜尋" }, { path: "/todo", name: "行程" }]

    return (
        <Navbar shouldHideOnScroll>
            <NavbarBrand>
            </NavbarBrand>
            <NavbarContent className="" justify="center">
                {
                    navItems.map((navItem) => (
                        pathname === navItem.path ?
                            <NavbarItem key={navItem.name} isActive>
                                <Link href={navItem.path} aria-current="page">
                                    {navItem.name}
                                </Link>
                            </NavbarItem> : <NavbarItem key={navItem.name}>
                                <Link href={navItem.path} color="foreground">
                                    {navItem.name}
                                </Link>
                            </NavbarItem>
                    ))
                }
            </NavbarContent>
            <NavbarContent justify="end">
            </NavbarContent>
        </Navbar>
    )
}

export default Header