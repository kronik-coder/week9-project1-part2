import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export default class Home extends Component {

    constructor(){
        super();
        this.state = {
            myItem: {}
        }
    }

    render() {
        
        return (
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                {this.props.items.map(
                    item => (
                        <Card style={{ width: '18rem' }} key={item.id}>
                        <Card.Img variant="top" src={item.image} height='300px'/>
                        <Card.Body>
                            <Card.Title style={{fontWeight: 'bold'}}>{item.title}</Card.Title>
                            <Card.Text style={{fontWeight: 'bold'}}>{item.category}</Card.Text>
                            <Card.Text>
                            {item.description}
                            </Card.Text>
                            <Card.Text>${item.price}</Card.Text>
                            <Button variant="primary" onClick={()=>{
                                this.setState({myItem: {title: item.title, price: item.price, image: item.image}})
                                this.props.addToCart(this.state.myItem)
                                console.log(this.state.myItem)
                            }}>ADD</Button>
                        </Card.Body>
                        </Card>
                    )
                )}
            </div>
        )
    }
}
