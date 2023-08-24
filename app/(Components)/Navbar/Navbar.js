import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav>
                <a href="index.html" class="logo">Xplore
                    <i class="fab fa-staylinked"></i>kill
                </a>
                <div class="nav-links" id="navLinks">
                    <i class="fa fa-times" onclick="hideMenu()"></i>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/Course">Course</Link></li>
                        <li><Link href="/Blog">Blog</Link></li>
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <i class="fa fa-bars" onclick="showMenu()"></i>
            </nav>
        </>
    )
}
