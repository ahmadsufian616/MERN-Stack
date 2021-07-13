import React, { Component } from 'react';


class PersonCard extends Component {
    render() {
        const { firstname, lastname, Age, haircolor } = this.props;
        return <div >
            <
            h1 > Name: { firstname } { lastname } < /h1>  <
            p > age: { Age } < /p> <
            p > Hair color: { haircolor } < /p> 

        <
        /div>
    }




}
export default PersonCard;