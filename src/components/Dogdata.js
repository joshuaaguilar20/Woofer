import React from 'react';
import pf from 'petfinder-client'
import '../index.css'
import { Card, CardWrapper } from 'react-swipeable-cards';

// import PropTypes from 'prop-types';
// import { Divider } from '@material-ui/core';


const petfinder = pf({
    key: '2ecbf7e62395bf59b779dcb29b331c33',
    secret: '5014f277cf09d7159c1d2c70bd4f849b'
})

class Dogdata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dogs: []
        }
    }


    componentDidMount() {
        petfinder.pet.find({ find: "full", animal: 'dog', location: "77026" })
            .then(data => {
                // console.log(data.petfinder.pets.pet)
                this.setState({
                    dogs: data.petfinder.pets.pet,
                });
            })
    }

    onDoubleTap() {
        let data = this.state.dogs;
        return (
            alert(data.name)
        )
    }

    onSwipeRight(data) {
        console.log("I was swiped right.");
      }
    

    renderCards() {
        let data = this.state.dogs;
        console.log(data)
        return data.map((d) => {
            return (
                <Card

                    key={d.id}
                    data={d}
                    onDoubleTap={this.onDoubleTap.bind(this)}
                    onSwipeRight={this.onSwipeRight.bind(this)}
                >
                    <div>
                        <h2 className='dogheader' >{d.name}, {d.age}</h2>
                        {d.breeds.breed[0]}
                        <img className='dogphoto' src={d.media.photos.photo[2].value} alt='adopt this dog'></img>
                        <p>{d.description}</p>


                    </div>
                </Card>
            );

        });
    }

    render() {
        return (
            <CardWrapper>
                {this.renderCards()}
            </CardWrapper>
        );
    }

}


Dogdata.propTypes = {

};

export default Dogdata

