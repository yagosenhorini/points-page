import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <header className="header">
                <nav className="nav">
                    <ul className="list">
                        <li className="list__item"><a href="/">Início</a></li>
                        <li className="list__item--name" key={this.props.id}>Olá, {this.props.name}</li>
                        <li className="list__item--exit">Sair</li>
                    </ul>
                </nav>
            </header>
        )
    }
}