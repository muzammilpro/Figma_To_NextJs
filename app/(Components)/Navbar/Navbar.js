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
                        <li><a href="index.html">Home</a></li>
                        <li><a href="course.html">Course</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <i class="fa fa-bars" onclick="showMenu()"></i>
            </nav>
        </>
    )
}
