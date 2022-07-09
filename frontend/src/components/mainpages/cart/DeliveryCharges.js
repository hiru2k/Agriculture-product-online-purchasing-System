import React, {Component} from 'react';
import "./DeliveryCharges.css";


export default class DeliveryCharges extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Galle'

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Dear Customer,\nTotal no of kilometers to your Delivery Town is considered for your Delivery Charge.');
    event.preventDefault();
  }


    render(){
        return (
          <div className="container">
          <div className="chrges">
               
               <br/><h4 className="aw" ><b>Delivery Charge Calculation</b></h4><hr/>

               <br/><img height="100%" width="100%" src={'/static/images/s.jpg'}/>

            <br/><div className="chge">
            <h5>Dear Valued Customer,</h5>
                <p>                 It is a great pleasure to see you standing with us for your shopping experience. We improve our services day-by-day with 
                    new strategies to make you more satisfied.<br/>
                    Insert your Delivery Town and get know your total fee for the delivery. An additional Fee will be added as taxes and our service charge.Thank You!!!
                </p>
            </div>
               
        <table className="table1"> 
          <thead>
          <tr>
              <th><b><u><h5>Delivery Areas</h5></u></b></th>
              <th><b><u><h5>Amount We Charge</h5></u></b></th>
          </tr>
          </thead>
          <tbody>
              <tr>
                 <td>Colombo 1-12 areas</td> 
                 <td>$2</td>
              </tr>
              <tr>
              <td>Kurunegala</td>
              <td>$4</td>
              </tr>
              <tr>
                <td>Kandy</td>
                <td>$5</td>
              </tr>
              <tr>
                <td>Kegalle</td>
                <td>$3</td>
              </tr>
              <tr>
                <td>Galle</td>
                <td>$6</td>
              </tr>
              <tr>
                <td>Trinkomalee</td>
                <td>$7</td>
              </tr>
              <tr>
                <td>Anuradapura</td>
                <td>$5</td>
              </tr>
              <tr>
                <td>Jaffna</td>
                <td>$8</td>
              </tr>

          </tbody>

          </table>
          
          <br/><br/><br/><br/><br/>
           
          <div className="cge1">
        

          <br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          
         
        
          <br/><i class="fas fa-hand-point-right" style={{color:'red'}}></i><a style={{color:'white',fontSize:'30px',textAlign:'left'}} href="/DeliveryCreate"> Click Here to confirm delivery</a>
          
          </div> 
          
          </div>
          </div>
        )
}
}