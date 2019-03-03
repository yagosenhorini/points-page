import React from 'react';

const NavMenu = () => {
    return (
        <header className="navmenu">
            <ul className="navmenu__list">
                <li className="item-navMenu">Sobre o Programa</li>
                <li className="item-navMenu">Vitrine de Prêmios</li>
                <li className="item-navMenu">Regulamento</li>
            </ul>
        </header>
    )
}

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <nav className="nav">
                        <ul className="list">
                            <li className="list__item" key={this.props.id}><a href="/">Início</a></li>
                            <li className="list__item--name" key={this.props.id}>Olá, {this.props.name}</li>
                            <li className="list__item--exit" key={this.props.id}>Sair</li>
                        </ul>
                    </nav>
                </header>
                <NavMenu />
            </div>
        )
    }
}