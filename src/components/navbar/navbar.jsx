import React from 'react'
import './navbar.css'


const navItems = [
  { label: "Início", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" }
];

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="brand">
                <h1> {`< Radavelli />`} </h1>
            </div>

            <div className="navActions">
                    {navItems.map(itens => (
                        <a key={itens.href} href={itens.href}>{itens.label} </a>
                    ))}
            </div>
        </nav>
    )
};
