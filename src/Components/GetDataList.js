import React, { Component } from 'react';
import UserService from '../services/UserService';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';


class GetDataList extends Component {

    constructor(props){
        super(props)
        this.state = {
            users:[],
            selectedFloor:"all",
            selectedFloorName:"All"
        }
    
     }

     componentDidMount(){
        this.interval = setInterval(() => {
            UserService.getList().then((response) => {
                this.setState({ users: response.data})
            });
        },1000);

        this.interval =  setInterval(()=>{
             UserService.sendEmail()
             console.log("Message sent");
        },60000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }

    handleChange = (event) => {
        this.setState({ selectedFloor: event });
      };


      handleSelect = (event) => {
        this.setState({ selectedFloorName: event });
      };


    render() {

        const { users, selectedFloor,selectedFloorName } = this.state;
  
        let filteredItems = users;
        if (selectedFloor !== 'all') {
          filteredItems = users.filter(user => user.floor === selectedFloor);
        }

        return (
          
                 <div>

                      <h2>Air Quality Monitor Data List</h2>
                      <div className='d-flex align-items-center justify-content-center'>
                      <h5>Select Floor : &nbsp;  </h5> <MDBDropdown>
      <MDBDropdownToggle color="primary"> {selectedFloorName}</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link onClick={()=>{this.handleChange("all");this.handleSelect("All Floor")}}>All Floor</MDBDropdownItem>
        <MDBDropdownItem link onClick={()=>{this.handleChange(1);this.handleSelect("Floor 1")}}>Floor 1 </MDBDropdownItem>
        <MDBDropdownItem link onClick={()=>{this.handleChange(2);this.handleSelect("Floor 2")}}>Floor 2</MDBDropdownItem>
        <MDBDropdownItem link onClick={()=>{this.handleChange(3);this.handleSelect("Floor 3")}}>Floor 3</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
                      </div>
                       
                <table id = 'Data List' className = "table table-striped ">
                    <thead>
                        <tr>

                            <td>Id</td>
                            
                            <td> CarbonDioxide</td>
                            <td> CarbonMonoxide</td>
                            <td> NitrogenDioxide</td>
                            <td> SulphureDioxide</td>
                            <td> Year</td>
                            <td> Month</td>
                            <td> Day</td>
                            <td> Floor</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            filteredItems.map(
                                user => 
                                <tr key = {user.id}>
                                     <td>{user.id}</td>   
                                       
                                     <td className={user.carbonDioxide > 15 ? 'bg-danger text-white' : " "}> {user.carbonDioxide}</td>   
                                     <td className={user.carbonMonoxide > 15 ? 'bg-danger text-white' : " "}> {user.carbonMonoxide}</td>
                                     <td className={user.nitrogenDioxide > 15 ? 'bg-danger text-white' : " "}> {user.nitrogenDioxide}</td>
                                     <td className={user.sculptureDioxide > 15 ? 'bg-danger text-white' : " "}> {user.sculptureDioxide}</td>
                                     <td> {user.year}</td>
                                     <td> {user.month}</td>
                                     <td> {user.day}</td>   
                                     <td> {user.floor}</td> 
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default GetDataList;