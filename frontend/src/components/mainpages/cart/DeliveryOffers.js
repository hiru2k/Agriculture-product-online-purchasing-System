import React, {Component} from 'react';
import axios from 'axios';

import './DeliveryOffers.css';


export default class DeliveryOffers extends Component {
    constructor(props){
      super(props);
    
      this.state={
        offers:[]
      };
    
    }

componentDidMount(){
    this.retrieveOffers();
}
      
retrieveOffers(){
    axios.get("/api/offers").then(res =>{
        if(res.data.success){
            this.setState({
            offers:res.data.existingOffers//me posts variable eka uda this.state yata use krpu ekami
            });
      
            console.log(this.state.offers)
        }
      
    });
}

onDelete = (id) =>{

    axios.delete(`/api/offer/delete/${id}`).then((res) =>{
        
        alert("Deleted Successfully!!");
        this.retrieveOffers();
    })
  }

  /*GeneratePDF =()=>{
  
    doc.html(document.querySelector('.opt'),{
           callback: function(pdf){
               pdf.save("Alloffers.pdf");
           }
    });
  };

  */

  filterData(offers,searchKey){
   
    const result = offers.filter((offer) =>
    offer.offerID.toLowerCase().includes(searchKey)||
    offer.offerName.toLowerCase().includes(searchKey)
  
    )
  
    this.setState({offers:result})
  }

 handleSearchArea = (e) =>{
  
     const searchKey = e.currentTarget.value;
  
     axios.get("/api/offers").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingOffers,searchKey)
      }
    });
  }
    render(){
        return(
	   
          

           
          

<div>

    
        <center>
<div class="w3-card-4 w3-indigo" style={{width:'1000px',height:'500px'}} >
  
  <div class="w3-container w3-white" style={{width:'1000px',height:'100px'}}>


 
     
    <h style={{fontWeight:'bold'}}>ENJOY OUR DELIVERY OFFERS</h> 
    <br></br>
    <h>check on the website for daily updatable delivery offers</h>

        
        </div>
     
     

	    <center>
                <table className="opt">
		   <center>
                <br/><table className="opttable" style={{width:"77%",fontWeight:'bold'}}>
                    <thead>
                        <tr>
                       
                        
                        
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.offers.map((offers,index) =>{

                            return <tr key={index}>
                            
                            <td>{offers.offerName}</td>

                            <br></br>
                            <td>{offers.description}</td>
                           
                              
                           
                            </tr>
                        })}
                    </tbody>
                    <br/>
                    
                </table>

                <div class="w3-container w3-white"  style={{width:'1000px',height:'100px'}}></div>
                </center>
	</table>
    </center>     
  
             </div>  
             </center> 
    </div>
 
                
            
        )
    }
     
}