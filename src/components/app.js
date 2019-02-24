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
    render() {
        const name = this.state.points.map(points => <span>{points.name}</span>)
        const points = this.state.points.map(points => <span>{points.points}</span>)
        return (
            <section>
                <Navbar key={points.id} name={name} />
                <Points name={name} points={points} />
                <Footer date={new Date().getFullYear()}/>
            </section>
        )
    }
}