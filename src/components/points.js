import React from 'react'
import '../css/components/box.scss'

const Box = (props) => {
    return (
        <div className="infoBox">
            <h4 className="infoBox__title">Seus pontos:</h4>
            <h4 className="infoBox__star"><i className="fa fa-star"></i><span className="infoBox__points">{props.points}</span></h4>
        </div>
    )
}

export default class Points extends React.Component {
    render() {
        return (
            <Box points={this.props.points} />
        )
    }
}