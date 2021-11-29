import Button from '@restart/ui/esm/Button'
import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

export default class Cart extends Component {
    constructor(){
        super();
        this.state = {
            myItem: {},
            total: 0
        }
    }

    render() {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', textAlign: 'center'}}>
                <p className="form-control" style={{fontSize: '50px', fontWeight: 'bold'}}>Your Items</p>
                <h4>TOTAL: ${this.props.getTotal()}</h4>
                <Button className="btn-danger form-control" onClick={()=>{
                    this.props.clearCart()}}>CLEAR CART</Button>
                {this.props.myItems.map(
                    item => (
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.image} height='300px'/>
                        <Card.Body>
                            <Card.Title style={{fontWeight: 'bold'}}>{item.title}</Card.Title>
                            <Card.Text style={{fontWeight: 'bold'}}>{item.category}</Card.Text>
                            <Card.Text>
                            {item.description}
                            </Card.Text>
                            <Card.Text>${item.price}</Card.Text>
                            <Button className="btn-danger"  onClick={()=>{
                                this.props.deleteFromCart(this.state.myItem)
                                console.log(this.state.myItem)
                            }}>DELETE</Button>
                        </Card.Body>
                        </Card>
                    )
                )}
            </div>
        )
    }
}
