import React from 'react'
import axios from 'axios'
import Navbar from './navbar'
import Points from './points'
import '../css/app.scss'
import Footer from './footer';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            points: []
        }
    }
    componentDidMount() {
        axios.get('https://acervo-usage.herokuapp.com/v1/points')
            .then(res => {
                const points = res.data;
                this.setState({ points });
            });
    }

    changeClass(e) {
        let item = document.querySelectorAll('.am-list__item');
        for (let i = 0; i < item.length; i++) {
            if (item[i].classList.contains('is-active')) {
                item[i].classList.remove('is-active');
            } else {
                e.target.classList.add(`is-active`);
            }
        }
    }

    render() {
        const name = this.state.points.map(points => <span>{points.name}</span>)
        const points = this.state.points.map(points => <span>{points.points}</span>)
        return (
            <section>
                <Navbar key={points.id} name={name} />
                <Points name={name} points={points} />
                <ul className="am-list">
                    <li onClick={this.changeClass} className="am-list__item is-active">Como Funciona:</li>
                    <li onClick={this.changeClass} className="am-list__item">Acumule seus pontos:</li>
                    <li onClick={this.changeClass} className="am-list__item">Utilize seus pontos para trocar por brindes!</li>
                    <li onClick={this.changeClass} className="am-list__item">Vire cliente VIP Acervo!</li>
                </ul>
                <ul className="banners">
                    <li className="banners__description">
                        <p></p>
                    </li>
                    <li className="banners__description">
                        <p></p>                
                    </li>
                    <li className="banners__description">
                        <p></p>
                    </li>
                    <li className="banners__description">
                        <p></p>
                    </li>
                </ul>
                <Footer date={new Date().getFullYear()} />
            </section>
        )
    }
}