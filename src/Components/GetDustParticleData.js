import React, { Component } from 'react';
import UserService from '../services/UserService';


class GetDustParticleData extends Component {

    constructor(props){
        super(props)
        this.state = {
            DustParticles:[]
        }
     }

     componentDidMount(){
        this.interval = setInterval(() => {
            UserService.getDustParticle().then((response) => {
                this.setState({ DustParticles: response.data})
            });
        },1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    

    render() {
        return (
          
                 <div>
                      <h2>Air Quality Monitor CarbonDioxide Data</h2>
            <div id = 'CarbonDioxide Data ' className='align-middle col-md-4 offset-4'>
                <table className = "table table-striped ">
                     <tbody>
                    {
                            this.state.DustParticles.map(
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

export default GetDustParticleData;