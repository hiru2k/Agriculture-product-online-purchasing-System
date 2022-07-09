import React, {Component} from 'react';
import axios from 'axios';
import './DeliveryCreate.css'


export default class CreateDelivery extends Component {

    constructor(props) {
        super(props);
        this.state={
            DeliveryFee:"",
          
            Address:"",
            Instruction:"",
           Note:""
           
        }
    }

    handleInputChange = (e) =>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e) =>{

        e.preventDefault();

        const {DeliveryFee,Address,Instruction,Note} = this.state;

        const data = {
            DeliveryFee:DeliveryFee,
         
            Address:Address,
            Instruction:Instruction,
            Note:Note
            
        }

        console.log(data)

        axios.post("api/post/save",data).then((res) =>{
            if(res.data.success){
                alert("Delivery Information Inserted Successfully!!")
                this.setState(
                    {
                        DeliveryFee:"",
                   
                       Address:"",
                        Instruction:"",
                        Note:""
                       
                    }
                
                )
            }
        })
    }

    render(){
        return (
	 
            <div className="container">
            <div className="crte" style={{width:"85%"}}>

           
           <br/>


            <div class="w3-card-4 w3-margin" style={{width:'800px',height:'900px'}} >
                    <br/><form className="cte"> 

<center>
                    <div style={{fontFamily:'Times New Roman',fontWeight:"bold"}}>
<label class="container1" >Colombo-$2
  <input type="radio"   value="$2" name="DeliveryFee"   onChange={(rbvalue)=>{this.setState({DeliveryFee:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>


<div style={{fontFamily:'Times New Roman',fontWeight:"bold"}}>
<label class="container1">Kurunegala-$4
  <input type="radio"  value="$4" name="DeliveryFee"   onChange={(rbvalue)=>{this.setState({DeliveryFee:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>

<div style={{fontFamily:'Times New Roman',fontWeight:"bold"}}>
<label class="container1">Kandy-$5
  <input type="radio"  value="$5" name="DeliveryFee"   onChange={(rbvalue)=>{this.setState({DeliveryFee:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>

<div style={{fontFamily:'Times New Roman',fontWeight:"bold"}}>
<label class="container1">Kegalle-$3
  <input type="radio"  value="$3" name="DeliveryFee"   onChange={(rbvalue)=>{this.setState({DeliveryFee:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>

<div style={{fontFamily:'Times New Roman',fontWeight:"bold"}}>
<label class="container1">Galle-$6
  <input type="radio"  value="$6" name="DeliveryFee"   onChange={(rbvalue)=>{this.setState({DeliveryFee:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>

<div style={{fontFamily:'Times New Roman',fontWeight:"bold"}}>
<label class="container1">Trinkomalee-$7
  <input type="radio"  value="$7" name="DeliveryFee"   onChange={(rbvalue)=>{this.setState({DeliveryFee:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>

<div style={{fontFamily:'Times New Roman',fontWeight:"bold"}}>
<label class="container1">Anuradapura-$5
  <input type="radio"  value="$5" name="DeliveryFee"   onChange={(rbvalue)=>{this.setState({DeliveryFee:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>

<div style={{fontFamily:'Times New Roman',fontWeight:"bold"}}>
<label class="container1">Jaffna-$8
  <input type="radio"  value="$8" name="DeliveryFee"   onChange={(rbvalue)=>{this.setState({DeliveryFee:rbvalue.target.value})}}/>
  <span class="checkmark"></span>
</label>
</div>
</center>


             
              <br></br>

                    <div className="form-group" style={{marginBottom:"15px",fontWeight:"bold"}}>
                        <label style={{marginBottom:"5px"}}>Address</label>
                        <input type="text" required
                        className="form-control"
                        name="Address"
                        placeholder="Enter your Address"
                        value={this.state.Address}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px",fontWeight:"bold"}}>
                        <label style={{marginBottom:"5px"}}>Delivery Instructions</label>
                        <input type="text" 
                        className="form-control"
                        name="Instruction"
                        placeholder="Enter any Delivery Instruction" 
                        value={this.state.Instruction}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:"15px",fontWeight:"bold"}}>
                        <label style={{marginBottom:"5px"}}>Note</label>
                        <input type="text" 
                        className="form-control"
                        name="Note"
                        placeholder="Enter any special note about food"
                        value={this.state.Note}
                        onChange={this.handleInputChange}/>
                    </div>

                    <br/><center>

                    <button className="btn btn-success"  type="submit" style={{marginTop:'20px',width:'160px',height:'80px',float: 'center'}} onClick={this.onSubmit}> 
                    
                        <i className="far fa-check-square"></i>
                        &nbsp; Confirm Delivery
                    </button>
                    </center>

                </form>
            </div>
                </div>
                </div> 
		 
        )
    }
}