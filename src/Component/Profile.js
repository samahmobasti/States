import React , {Component} from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show: false,
         
         }
    }
    
  Show = ()=>{
    this.setState({
        show: true
    })
}

Hide = () =>{
    this.setState({
        show: false
    })
}

 

render() {
    if (this.state.show) {
      return (
        <div>
          <h1>Was mounted</h1>
          <button onClick={this.Hide}>Hide</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.Show}>Show</button>
        </div>
      );
    }
  }
}



export default Profile;