import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

function RenderComments({comments, dishId}){
    if (comments != null) {
        let list = comments.map((comments)=>{
            return(
                <li key={comments.id} >
                    <div className="container">
                        <p>{comments.comment}</p>
                        <p>--{comments.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                    </div>
                </li>
            )
        })

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {list}
                </ul>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }
    render(dish) {

        if (this.props.dish != null) {
            return(
                <Card>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3>{this.props.dish.name}</h3>
                                <hr />
                            </div>
                        </div>
                        <div className="row">
                                <RenderDish dish={this.props.dish} />
                                <RenderComments 
                                    comments={this.props.dish.comments}
                                    dishId={this.props.dish.id}
                                />
                        </div>
                    </div>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

}

export default DishDetail