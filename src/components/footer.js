import React from 'react'
import '../css/components/footer.scss'

export default class Footer extends React.Component{
render(){
    return(
        <footer className="am__footer"><span className="am__footer--content">Acervo MakeUp - Todos os direitos reservados {this.props.date}</span></footer>
    )
}
}