import  React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import Back from "../../img/form-v9.jpg";


export default class Form1 extends Component {
  constructor(props) {
    super(props);
 
    this.onChangePart1fname = this.onChangePart1fname.bind(this);
    this.onChangePart1lname = this.onChangePart1lname.bind(this);
    this.onChangePart1email= this.onChangePart1email.bind(this);
    this.onChangePart1contact= this.onChangePart1contact.bind(this);
    this.onChangePart1cid= this.onChangePart1cid.bind(this);
    this.onChangePart1college= this.onChangePart1college.bind(this);
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      bookdate:new Date(),
      eventname:'',
      eventdate:'',
      eventtime:'',
      part1fname:'',
      part1lname:'',
      part1email:'',
      part1contact:'',
      part1cid:'',
      part1college:'',
   
     
      error: false,
      errorMessage: ""
    //   events: [],
    // filterEvents: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/routes/event/'+this.props.match.params.id)
    
      .then(response => {
      
        this.setState({
          eventname: response.data.eventname,
          time: response.data.time,
          date: response.data.date
        })
            
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangePart1fname(e) {
    this.setState({
     part1fname: (e.target.value)
    });
  }
  onChangePart1lname(e) {
    this.setState({
     part1lname: (e.target.value)
    });
  }
  onChangePart1email(e) {
    this.setState({
     part1email: (e.target.value)
    });
  }
  onChangePart1contact(e) {
    this.setState({
     part1contact: (e.target.value)
    });
  }
  onChangePart1cid(e) {
    this.setState({
     part1cid: (e.target.value)
    });
  }
  onChangePart1college(e) {
    this.setState({
     part1college: (e.target.value)
    });
  }
  


  onSubmit(e) {
    e.preventDefault();

    const bookevent = {
      bookdate:this.state.bookdate,
      eventname: this.state.eventname,
      eventdate:this.state.date,
      eventtime: this.state.time,
      part1fname:this.state.part1fname,
      part1lname:this.state.part1lname,
      part1email:this.state.part1email,
      part1contact:this.state.part1contact,
      part1cid:this.state.part1cid,
      part1college:this.state.part1college
    
    }
    localStorage.setItem("bookevent" ,JSON.stringify(bookevent))
    console.log(bookevent);
        //  axios.post('http://localhost:5000/routes/bookevent/book', bookevent)
        //  .then(res => console.log(res.data))

        window.location = '/payment';
  }
  render() {
    return (

  <div className="page-content">
		<div className="form-v9-content" style={{ backgroundImage : `url(${Back})` }} >
			<form className="form-detail" onSubmit={this.onSubmit}>
    <h2>{this.state.eventname}</h2>
      
				 <div className="form-row-total">
					<div className="form-row">
						<input type="text" name="firstname"  className="input-text" placeholder="First Name" required   value={this.state.part1fname}
              onChange={this.onChangePart1fname}/>
					</div>
					<div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="Last Name" required value={this.state.part1lname }
              onChange={this.onChangePart1lname} />
					</div>
				 </div>
				<div className="form-row-total">
					<div className="form-row">
						<input type="email" name="email1" className="input-text" placeholder="Email"  required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" required      value={this.state.part1email }
              onChange={this.onChangePart1email}/>
					</div>
					<div className="form-row">
						<input type="text" name="contactno"  className="input-text" placeholder="Contact Number" required    value={this.state.part1contact }
              onChange={this.onChangePart1contact}/>
        	</div>
	     	</div>

      	<div className="form-row-total">
					<div className="form-row">
						<input type="text" name="cid1" className="input-text" placeholder="College ID "  required  value={this.state.part1cid}
              onChange={this.onChangePart1cid}/>
					</div>
					<div className="form-row">
						<input type="text" name="college"  className="input-text" placeholder="College Name" required    value={this.state.part1college }
              onChange={this.onChangePart1college}/>
        	</div>
	    </div>
    
				<div className="form-row-last">
         
					<input type="submit" name="register" className="register" value="Register"/>
       
				</div>
			</form>
		</div>
	</div>      
    )
  }
}
