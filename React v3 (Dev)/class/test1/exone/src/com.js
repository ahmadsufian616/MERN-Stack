import React, { Component } from 'react'

class com1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickAge: props.age
        };
    } 
    clickHandler = () => {
        this.setState({
            clickAge: this.state.clickAge + 1
        })
    }
    
    render() {
        consr ={name1,age,haircolor}=this.props
        return (
            <div>
                <div></div>
                <P>name: {name1} age :{age}</P>
                <p> hair : {haircolor}  </p>
                <button onClick = {this.clickHandler} >addage</button>
            </div>
        )
    }
}

export default com1
