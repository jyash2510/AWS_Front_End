import React, { Component } from 'react';
import UserService from '../services/UserService';

class GetInvalidDustParticle extends Component {

    constructor(props){
        super(props)
        this.state = {
            InvalidDustParticle:[]
        }
     }

     componentDidMount(){
        this.interval = setInterval(() => {
            UserService.getInvalidDustPartical().then((response) => {
                this.setState({ InvalidDustParticle: response.data})
            });
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }
     

    render() {
        return (
          
                  <div>
                      <h2>Air Quality Monitor Invalid CarbonDioxide Data</h2>
                    <div className='align-middle col-md-4 offset-4' >

                <table id = 'Invalid DustParticles Data' className = "table table-striped">
                    <tbody>
                    {
                            this.state.InvalidDustParticle.map(
                                (user,i) => 
                                <tr key={i}>
                                     <td className={user < 0 ? 'bg-dark text-white' : user > 15 ? 'bg-danger text-white' : " "}> {user}</td>   
                                   
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>

            </div> 
        )
    }
}

export default GetInvalidDustParticle;