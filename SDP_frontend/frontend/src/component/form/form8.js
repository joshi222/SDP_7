import  React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Back from "../../img/form-v9.jpg";


export default class Form8 extends Component {
  constructor(props) {
    super(props);
 
    this.onChangePart1fname = this.onChangePart1fname.bind(this);
    this.onChangePart1lname = this.onChangePart1lname.bind(this);
    this.onChangePart1email= this.onChangePart1email.bind(this);
    this.onChangePart1contact= this.onChangePart1contact.bind(this);
    this.onChangePart1cid= this.onChangePart1cid.bind(this);
    this.onChangePart1college= this.onChangePart1college.bind(this);
    this.onChangePart2fname = this.onChangePart2fname.bind(this);
    this.onChangePart2lname = this.onChangePart2lname.bind(this);
    this.onChangePart2email= this.onChangePart2email.bind(this);
    this.onChangePart2contact= this.onChangePart2contact.bind(this);
    this.onChangePart2cid= this.onChangePart2cid.bind(this);
    this.onChangePart2college= this.onChangePart2college.bind(this);
    this.onChangePart3fname = this.onChangePart3fname.bind(this);
    this.onChangePart3lname = this.onChangePart3lname.bind(this);
    this.onChangePart3college= this.onChangePart3college.bind(this);
    this.onChangePart4fname = this.onChangePart4fname.bind(this);
    this.onChangePart4lname = this.onChangePart4lname.bind(this);
    this.onChangePart4college= this.onChangePart4college.bind(this);
    this.onChangePart5fname = this.onChangePart5fname.bind(this);
    this.onChangePart5lname = this.onChangePart5lname.bind(this);
    this.onChangePart5college= this.onChangePart5college.bind(this);
    this.onChangePart6fname = this.onChangePart6fname.bind(this);
    this.onChangePart6lname = this.onChangePart6lname.bind(this);
    this.onChangePart6college= this.onChangePart6college.bind(this);
    this.onChangePart7fname = this.onChangePart7fname.bind(this);
    this.onChangePart7lname = this.onChangePart7lname.bind(this);
    this.onChangePart7college= this.onChangePart7college.bind(this);
    this.onChangePart8fname = this.onChangePart8fname.bind(this);
    this.onChangePart8lname = this.onChangePart8lname.bind(this);
    this.onChangePart8college= this.onChangePart8college.bind(this);
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
      part2fname:'',
      part2lname:'',
      part2email:'',
      part2contact:'',
      part2cid:'',
      part2college:'',
      part3fname:'',
      part3lname:'',
      part3college:'',
      part4fname:'',
      part4lname:'',
      part4college:'',
      part5fname:'',
      part5lname:'',
      part5college:'',
      part6fname:'',
      part6lname:'',
      part6college:'',
      part7fname:'',
      part7lname:'',
      part7college:'',
      part8fname:'',
      part8lname:'',
      part8college:'',
      error: false,
      errorMessage: ""
 
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
  onChangePart2fname(e) {
    this.setState({
     part2fname: (e.target.value)
    });
  }
  onChangePart2lname(e) {
    this.setState({
     part2lname: (e.target.value)
    });
  }
  onChangePart2email(e) {
    this.setState({
     part2email: (e.target.value)
    });
  }
  onChangePart2contact(e) {
    this.setState({
     part2contact: (e.target.value)
    });
  }
  onChangePart2cid(e) {
    this.setState({
     part2cid: (e.target.value)
    });
  }
  onChangePart2college(e) {
    this.setState({
     part2college: (e.target.value)
    });
  }
  onChangePart3fname(e) {
    this.setState({
     part3fname: (e.target.value)
    });
  }
  onChangePart3lname(e) {
    this.setState({
     part3lname: (e.target.value)
    });
  }
  onChangePart3college(e) {
    this.setState({
     part3college: (e.target.value)
    });
  }
  onChangePart4fname(e) {
    this.setState({
     part4fname: (e.target.value)
    });
  }
  onChangePart4lname(e) {
    this.setState({
     part4lname: (e.target.value)
    });
  }
  onChangePart4college(e) {
    this.setState({
     part4college: (e.target.value)
    });
  }
  onChangePart5fname(e) {
    this.setState({
     part5fname: (e.target.value)
    });
  }
  onChangePart5lname(e) {
    this.setState({
     part5lname: (e.target.value)
    });
  }
  onChangePart5college(e) {
    this.setState({
     part5college: (e.target.value)
    });
  }
  onChangePart6fname(e) {
    this.setState({
     part6fname: (e.target.value)
    });
  }
  onChangePart6lname(e) {
    this.setState({
     part6lname: (e.target.value)
    });
  }
  onChangePart6college(e) {
    this.setState({
     part6college: (e.target.value)
    });
  }
  onChangePart7fname(e) {
    this.setState({
     part7fname: (e.target.value)
    });
  }
  onChangePart7lname(e) {
    this.setState({
     part7lname: (e.target.value)
    });
  }
  onChangePart7college(e) {
    this.setState({
     part7college: (e.target.value)
    });
  }
  onChangePart8fname(e) {
    this.setState({
     part8fname: (e.target.value)
    });
  }
  onChangePart8lname(e) {
    this.setState({
     part8lname: (e.target.value)
    });
  }
  onChangePart8college(e) {
    this.setState({
     part8college: (e.target.value)
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
      part1college:this.state.part1college,
      part2fname:this.state.part2fname,
      part2lname:this.state.part2lname,
      part2email:this.state.part2email,
      part2contact:this.state.part2contact,
      part2cid:this.state.part2cid,
      part2college:this.state.part2college,
      part3fname:this.state.part3fname,
      part3lname:this.state.part3lname,
      part3college:this.state.part3college,
      part4fname:this.state.part4fname,
      part4lname:this.state.part4lname,
      part4college:this.state.part4college,
      part5fname:this.state.part5fname,
      part5lname:this.state.part5lname,
      part5college:this.state.part5college,
      part6fname:this.state.part6fname,
      part6lname:this.state.part6lname,
      part6college:this.state.part6college,
      part7fname:this.state.part7fname,
      part7lname:this.state.part7lname,
      part7college:this.state.part7college,
      part8fname:this.state.part8fname,
      part8lname:this.state.part8lname,
      part8college:this.state.part8college

    }
    localStorage.setItem("bookevent" ,JSON.stringify( bookevent))
    console.log(bookevent);
   
    window.location = '/payment';
  }
  render() {
    return (

  <div className="page-content">
		<div className="form-v9-content" style={{ backgroundImage : `url(${Back})` }} >
			<form className="form-detail" onSubmit={this.onSubmit}>
    <h2>{this.state.eventname}</h2>
        <h4>Participant 1 Details: </h4>
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
		
        <h4>Participant 2 Details: </h4>
				 <div className="form-row-total">
					<div className="form-row">
						<input type="text" name="firstname"  className="input-text" placeholder="First Name" required   value={this.state.part2fname}
              onChange={this.onChangePart2fname}/>
					</div>
					<div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="Last Name"  required value={this.state.part2lname }
              onChange={this.onChangePart2lname} />
					</div>
				 </div>
				<div className="form-row-total">
					<div className="form-row">
						<input type="email" name="email1" className="input-text" placeholder="Email "  required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" required      value={this.state.part2email }
              onChange={this.onChangePart2email}/>
					</div>
					<div className="form-row">
						<input type="text"  className="input-text" placeholder="Contact Number" required    value={this.state.part2contact }
              onChange={this.onChangePart2contact}/>
        	</div>
				</div>
        <div className="form-row-total">
					<div className="form-row">
						<input type="text" name="cid2" className="input-text" placeholder="College ID "  required  value={this.state.part2cid}
              onChange={this.onChangePart2cid}/>
					</div>
					<div className="form-row">
						<input type="text" name="college"  className="input-text" placeholder="College Name" required    value={this.state.part2college }
              onChange={this.onChangePart2college}/>
        	</div>
				</div>
    <h4>Participant 3 Details: </h4>
        <div className="form-row-total">
					<div className="form-row">
						<input type="text" name="firstname"  className="input-text" placeholder="First Name" required   value={this.state.part3fname}
              onChange={this.onChangePart3fname}/>
					</div> 
          &nbsp;&nbsp;&nbsp;
					<div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="Last Name"  required value={this.state.part3lname }
              onChange={this.onChangePart3lname} />
					</div>
          &nbsp;&nbsp;&nbsp;
          <div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="College Name " required value={this.state.part3college }
              onChange={this.onChangePart3college} />
					</div>
				 </div>
    <h4>Participant 4 Details: </h4>
        <div className="form-row-total">
					<div className="form-row">
						<input type="text" name="firstname"  className="input-text" placeholder="First Name" required   value={this.state.part4fname}
              onChange={this.onChangePart4fname}/>
					</div> 
          &nbsp;&nbsp;&nbsp;
					<div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="Last Name"  required value={this.state.part4lname }
              onChange={this.onChangePart4lname} />
					</div>
          &nbsp;&nbsp;&nbsp;
          <div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="College Name " required value={this.state.part4college }
              onChange={this.onChangePart4college} />
					</div>
				 </div>
     <h4>Participant 5 Details: </h4>
        <div className="form-row-total">
					<div className="form-row">
						<input type="text" name="firstname"  className="input-text" placeholder="First Name" required   value={this.state.part5fname}
              onChange={this.onChangePart5fname}/>
					</div> 
          &nbsp;&nbsp;&nbsp;
					<div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="Last Name"  required value={this.state.part5lname }
              onChange={this.onChangePart5lname} />
					</div>
          &nbsp;&nbsp;&nbsp;
          <div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="College Name " required value={this.state.part5college }
              onChange={this.onChangePart5college} />
					</div>
				 </div>
    <h4>Participant 6 Details: </h4>
        <div className="form-row-total">
					<div className="form-row">
						<input type="text" name="firstname"  className="input-text" placeholder="First Name" required   value={this.state.part6fname}
              onChange={this.onChangePart6fname}/>
					</div> 
          &nbsp;&nbsp;&nbsp;
					<div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="Last Name"  required value={this.state.part6lname }
              onChange={this.onChangePart6lname} />
					</div>
          &nbsp;&nbsp;&nbsp;
          <div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="College Name " required value={this.state.part6college }
              onChange={this.onChangePart6college} />
					</div>
				 </div>
        <h4>Participant 7 Details: </h4>
        <div className="form-row-total">
					<div className="form-row">
						<input type="text" name="firstname"  className="input-text" placeholder="First Name" required   value={this.state.part7fname}
              onChange={this.onChangePart7fname}/>
					</div> 
          &nbsp;&nbsp;&nbsp;
					<div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="Last Name"  required value={this.state.part7lname }
              onChange={this.onChangePart7lname} />
					</div>
          &nbsp;&nbsp;&nbsp;
          <div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="College Name " required value={this.state.part7college }
              onChange={this.onChangePart7college} />
					</div>
				 </div>
    <h4>Participant 8 Details: </h4>
        <div className="form-row-total">
					<div className="form-row">
						<input type="text" name="firstname"  className="input-text" placeholder="First Name" required   value={this.state.part8fname}
              onChange={this.onChangePart8fname}/>
					</div> 
          &nbsp;&nbsp;&nbsp;
					<div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="Last Name"  required value={this.state.part8lname }
              onChange={this.onChangePart8lname} />
					</div>
          &nbsp;&nbsp;&nbsp;
          <div className="form-row">
						<input type="text" name="lastname" className="input-text" placeholder="College Name " required value={this.state.part8college }
              onChange={this.onChangePart8college} />
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
