import React, { Component } from 'react'

type ProfileDataI = object

interface ProfileStateI {
    name: string;
    email: string;
    phone: string
}


export class ProfileData extends Component< ProfileDataI ,ProfileStateI>{
    constructor(props: ProfileDataI){
        super(props);
        this.state = {
            name: "Name",
            email: "Email",
            phone: "Phone"
        }
    }

    componentDidMount(): void {
        try{
            const fetchData = async () => {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
                const data = await response.json();
                this.setState({
                    name: data.name,
                    email: data.email,
                    phone: data.phone
                })
            }

            fetchData()
        } catch (e){
            console.log(e);
        }
    }

    render() {
         return (
             <div>
                <p>Name: {this.state.name} </p>
                <p>Email:{this.state.email}</p>
                <p>Phone: {this.state.phone}</p>
             </div>
        )     
    }
 
}
