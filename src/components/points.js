import React from 'react'
import '../css/components/box.scss'

const Box = (props) => {
    return (
        <div className="infoBox">
            <h4 className="infoBox__title">Olá, {props.name}. Você possui:</h4>
            <h4 className="infoBox__star"><i className="fa fa-star"></i><span className="infoBox__points">{props.points} pontos</span></h4>
        </div>
    )
}

export default class Points extends React.Component {
    render() {
        return (
            <Box name={this.props.name} points={this.props.points} />
        )
    }
}