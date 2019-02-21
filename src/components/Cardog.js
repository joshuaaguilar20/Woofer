import React, { Component } from 'react';
import { Card, CardWrapper } from 'react-swipeable-cards';
import Dogdata from './Dogdata'
class Cardog extends Component {
  render() {
    return(
      <CardWrapper>
        <Card>
          <Dogdata />
        </Card>
        <Card>
        <Dogdata />
        </Card>
        <Card>
        <Dogdata />
        </Card>
        <Card>
        <Dogdata />
        </Card>
        <Card>
        <Dogdata />
        </Card>
        <Card>
        <Dogdata />
        </Card>
      </CardWrapper>
    );
  }
}

export default Cardog
