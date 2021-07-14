import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickAge: props.Age
        };
    }
    clickHandler = () => {
        this.setState({
            clickAge: this.state.clickAge = this.state.clickAge + 1
        })
    }

    render() {
        const { firstname, lastname, haircolor } = this.props;
        return (
        <div >    
           < h1 > Name: { firstname } { lastname } </h1>  
           < p > Age: { this.state.clickAge } </p> 
           < p > Hair color: { haircolor } </p>  
            <button onClick = { this.clickHandler }> Add to Age </button>    
            </div>
        );
    }




}
export default PersonCard;