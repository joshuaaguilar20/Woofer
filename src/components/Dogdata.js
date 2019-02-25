import React from 'react';
import pf from 'petfinder-client'
import '../index.css'
// import PropTypes from 'prop-types';
// import { Divider } from '@material-ui/core';


const petfinder = pf({
    key:'2ecbf7e62395bf59b779dcb29b331c33',
    secret: '5014f277cf09d7159c1d2c70bd4f849b'
})

export default class Dogdata extends React.Component {

    state = {
        loading:true,
        items: []
    }

    componentDidMount() {
        petfinder.pet.find({ find: "full", animal: 'dog', location: "77026" })
            .then(data => {
                console.log(data.petfinder)
                this.setState({
                    count: this.state.count + 1,
                    name: data.petfinder.pets.pet[1].name,
                    animal: data.petfinder.pets.pet[1].animal,
                    address: data.petfinder.pets.pet[1].contact.address1,
                    email: data.petfinder.pets.pet[1].contact.email,
                    phone: data.petfinder.pets.pet[1].contact.phone,
                    description: data.petfinder.pets.pet.description,
                    media: data.petfinder.pets.pet[1].media.photos.photo[2].value,
                    loading: false
                });
            })
    }

    render(){
        return( 
            <div>
                <h1>{this.state.name}</h1>
                <img className = 'dogImage' alt="Adopt this dog!" src={this.state.media}></img>
                <p>
                    {this.state.description}
                    <br />
                    {this.state.phone}
                    <br />
                    {this.state.email}
                </p>
            </div>
        )
        
    }
}


Dogdata.propTypes = {
    
};

//
//
// export default Dogdata 
