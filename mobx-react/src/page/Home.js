import React from 'react';
import Crush from '../components/crush/Crush'
import { Container, Row, Col } from 'reactstrap';
import store from "../store/crushStore";
import {observer} from 'mobx-react'

@observer()
class Home extends React.Component {
    render = () => {
        console.log(this.props.store)
        return (
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Crush/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home