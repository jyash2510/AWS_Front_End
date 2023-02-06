import React, { Component } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import {withRouter} from './withRouter';

class HeaderComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
        this.GetDataList = this.GetDataList.bind(this);
        this.GetInvalidData = this.GetInvalidData.bind(this);
        this.GetDustParticleData = this.GetDustParticleData.bind(this);
        this.GetInvalidDustParticle = this.GetInvalidDustParticle.bind(this);
        
    }
    
    GetDataList(){
        this.props.navigate('/list');
    }
    GetInvalidData(){
        this.props.navigate('/invaliddata');
    }
    GetDustParticleData(){
        this.props.navigate('/carbondioxide');
    }
    GetInvalidDustParticle(){
        this.props.navigate('/invalidcarbondioxide');
    }

     
    render() {
        return (
            <div>
                 
                         <div className >
                         <h1 className = "text-center text-light bg-dark">Air Quality Monitoring System Data</h1>
                         </div>
                          <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>                      
                              <MDBBtn className='mx-2'  color='primary'  onClick={this.GetDataList} active>
                              Data List
                                </MDBBtn>
                                <MDBBtn  className='mx-2' color='dark'onClick={this.GetInvalidData} active>
                                Invalid Data
                                </MDBBtn>
                                <MDBBtn  className='mx-2' color='warning'onClick={this.GetDustParticleData} active>
                                CarbonDioxide Data
                                </MDBBtn> 
                                <MDBBtn  className='mx-2' color='success'onClick={this.GetInvalidDustParticle} active>
                                Invalid CarbonDioxide Data                               
                                 </MDBBtn>   
                                 </div>
            </div>
        );
    }
}
export default withRouter (HeaderComponent);