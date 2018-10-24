import React from 'react'
import ReactDOM from 'react-dom';
import {Form, FormControl,Button} from 'react-bootstrap';
// import $ from 'jquery';
import axios from 'axios';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      word:'',
      deff:''
    }
  }

  handleChange(e) {
    this.setState({
      word:e.target.value
    })
  }

  send(){
    var that = this;
    console.log('dsads')
    axios.post('/word',{"word":this.state.word})
    .then(response => {
      // If request is good...
      // res.send(response.data);
      
      console.log('helloooooooooooooooooo');
      that.setState({
        deff:response.data
      })
    })
    .catch((error) => {
      console.log('error 3 ' + error);
    });
    
  }
  s(){
    console.log(this.state)
  }
  render(){
    console.log('hi hi  hihi hh')
    return(
      <div className={"maindiv"}>
      <Form>
          <FormControl
            type="text"
            name="word"
            value={this.state.value}
            placeholder="Enter the word"
            onChange={this.handleChange.bind(this)}
          />
         <Button onClick={this.send.bind(this)}>send</Button>
      </Form>
      <h4 className={"text"}> {this.state.deff} </h4>
      </div>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));