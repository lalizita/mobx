import React from "react"
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import axios from 'axios'

const crushs = [
  {
    name: "Carlão da Savana",
    phoneNumber: 986584255,
    status: true,
    image: "http://images-cdn.impresa.pt/blitz/2018-02-22-CARLAO4401_ritacarmo.jpg/original/mw-860"
  }, {
    name: "Fernandão",
    phoneNumber: 986584255,
    status: false,
    image: "http://4.bp.blogspot.com/-nUQYJjnKc70/U5LmOYZETqI/AAAAAAABP94/dpnjj8LYK-Q/s1600/fernandao_positivo_151206_i.jpg"
  }, {
    name: "Alisson",
    phoneNumber: 986584255,
    status: true,
    image: "http://hojeemdia.com.br/polopoly_fs/1.630432!/image/image.jpg_gen/derivatives/landscape_653/image.jpg"
  }, {
    phoneNumber: 986584255,
    name: "chris hemsworth",
    status: true,
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shutterstock-editorial-9323810i-hugemod2-1527873250-silo-1527879418.jpg?resize=980:*"
  }
]

export default class Crush extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contatinhos: []
    }
  }

  getCrushs = () => {
    // return axios.get('http://private-4b438e-contatinhos3.apiary-mock.com/contatinhos')
    // .then(response => {
    //   console.log(response.data)
    //   const contatinhos = JSON.parse(`${response.data}`)
    //   this.setState({contatinhos})
    // })
    this.setState({ contatinhos: crushs })
  }

  componentDidMount = () => {
    this.getCrushs()
  }

  render = () => {
    const { contatinhos } = this.state
    return (
      <div>
        {
          contatinhos.map((crush, index) => {
            return (
              <Card>
                <CardImg src={crush.image} width="100%"/>
                <CardBody>
                  <CardTitle className="text-center">{crush.name}</CardTitle>
                  <CardText className="text-center">
                    <b>telefone:</b>
                    <p>{crush.phoneNumber}</p>
                    <small>Disponibilidade:</small>
                    <h3>{crush.status ? 'Disponível': 'Indiponível'}</h3>
                    <Button color="success">Dar like</Button>
                  </CardText>
                </CardBody>
              </Card>
            )
          })
        }
      </div>
    )
  }
}