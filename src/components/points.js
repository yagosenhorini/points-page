import React from 'react'
import '../css/components/box.scss'

const Box = (props) => {
    return (
        <section class="informations">
            <div className="infoBox">
                <h4 className="infoBox__title">{props.name}</h4>
            </div>
            <div className="infoBox">
                <h4 className="infoBox__star"><i className="fa fa-star"></i><span className="infoBox__points">{props.points} pontos</span></h4>
            </div>
            <div className="infoBox">
                <h4 className="infoBox__star"><i className="fa fa-star"></i><span className="infoBox__points">{props.points} pontos</span></h4>
            </div>
        </section>
    )
}

export default class Points extends React.Component {
    render() {
        return (
            <Box name={this.props.name} points={this.props.points} />
        )
    }
}