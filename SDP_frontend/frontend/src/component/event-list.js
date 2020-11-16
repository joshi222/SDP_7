import React,  { Component } from 'react' ;
import { Button } from 'reactstrap';
//import {browserHistory } from 'react-dom';
import {Link} from 'react-router-dom';
import img from '../img/org1.png'

export default class EventList extends Component{
    
    render(){
        return (
            <div className="container days" style={{display:'flex',justifyContent:'space-around'}}>

                    <div className="col-" style={{marginTop:"120px"}}>

                    <h1 style={{color:'white',fontSize:'60px',textAlign:'center',letterSpacing:'5px'}}>Felicific</h1>   
                             
                    <h1 style={{color:'white',fontSize:'40px',textAlign:'center'}}> 06 - 10 March 2021</h1>
                      <br/>
                    <div style={{display:'flex',justifyContent:'space-around'}}>

                        <div className='mx-auto'>
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <Link to="/day1event" > <Button type="button" className="btn btn-outline-light">Day 1</Button></Link>

                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <Link to="/day2event"><Button type="button" className="btn btn-outline-light">Day 2</Button></Link>
       
                            <div style={{marginLeft:'46px'}}>
                             
                            <div style={{marginLeft:'46px'}}>
                                <br/> &nbsp;&nbsp;&nbsp;
                            <Link to="/day3event"><Button type="button" className="btn btn-outline-light">Day 3</Button></Link>
                            </div>

                             <br/>
                            <Link to="/day4event"><Button type="button" className="btn btn-outline-light">Day 4</Button></Link>

                            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;

                            <Link to="/day5event"><Button type="button" className="btn btn-outline-light">Day 5</Button></Link> 

                        </div>
                    
                    </div>
                        
                    </div>
            </div>
                   

        
            

             </div>    
    
           
        );
    }
}