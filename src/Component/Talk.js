import React, { Component } from "react";
class Talking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgAli:"",
            msgMohamed:"",
            name1:Ali,
            name2:Mohamed,
            affichage:""


          }
    }

   envoieAli = () =>{
       this.setState({msg:this.state.msgAli})
    }
    envoieMohamed = () =>{
        this.setState({msg:this.state.msgMohamed})
     }

    render() { 
        return (
            <div>
<div className="Ali">
    <p>{name1}</p>
    <input type="text" />
    <button onClick={this.envoieMohamed}></button>
    <h1>Message</h1>

</div>

<div className="Mohamed">
    <p>{name2}</p>
    <input type="text" />
    <button onClick={this.envoieAli}></button>
    <h1>Message</h1>
    
</div>

            </div>
        );
    }
}
 
export default Talking ;