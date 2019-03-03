import React from 'react'
import axios from 'axios'
import Navbar from './navbar'
import Points from './points'
import '../css/app.scss'
import Footer from './footer';
import image from '../images/beautyclose.jpg';
import lipstick from '../images/lipstick.jpg';


const Image = () => {
    return (
        <div className="image">
            <img className="image__responsive" src={image} />
        </div>
    )
}

const LipstickImg = () =>{
    return(
        <div className="am-img">
            <img src={lipstick} className="am-img__responsive" />
        </div>
    )
}

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.boxRef = React.createRef();
        this.changeClass = this.changeClass.bind(this);
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
        if (this.boxRef.current.classList.contains('is-active')) {
            this.boxRef.current.classList.toggle('is-active');
        }
        else {
            this.boxRef.current.classList.add('is-active')
        }
    }

    render() {
        const name = this.state.points.map(points => <span>{points.name}</span>)
        const points = this.state.points.map(points => <span>{points.points}</span>)
        return (
            <section>
                <Navbar key={points.id} name={name} />
                <Image />
                <section className="am-links">
                <ul className="am-list">
                    <li ref={this.boxRef} onClick={this.changeClass} className="am-list__item">Como Funciona:
                        <p className="am-list__item-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cum. Ipsam numquam hic ipsum aliquam vel perspiciatis dignissimos? Soluta eaque enim voluptas aut doloremque explicabo ipsa. Perspiciatis dolorem optio eligendi.
                        </p>
                    </li>
                    <li ref={this.boxRef} onClick={this.changeClass} className="am-list__item">Acumule seus pontos:
                        <p className="am-list__item-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cum. Ipsam numquam hic ipsum aliquam vel perspiciatis dignissimos? Soluta eaque enim voluptas aut doloremque explicabo ipsa. Perspiciatis dolorem optio eligendi.
                        </p>
                    </li>
                    <li ref={this.boxRef} onClick={this.changeClass} className="am-list__item">Troque pontos por brindes!
                        <p className="am-list__item-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cum. Ipsam numquam hic ipsum aliquam vel perspiciatis dignissimos? Soluta eaque enim voluptas aut doloremque explicabo ipsa. Perspiciatis dolorem optio eligendi.
                        </p>
                    </li>
                    <li ref={this.boxRef} onClick={this.changeClass} className="am-list__item">Vire cliente VIP Acervo!
                        <p className="am-list__item-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, cum. Ipsam numquam hic ipsum aliquam vel perspiciatis dignissimos? Soluta eaque enim voluptas aut doloremque explicabo ipsa. Perspiciatis dolorem optio eligendi.
                        </p>
                    </li>
                </ul>
                <LipstickImg/>
                </section>Ï
                <Points name={name} points={points} />
                <Footer date={new Date().getFullYear()} />
            </section>
        )
    }
}