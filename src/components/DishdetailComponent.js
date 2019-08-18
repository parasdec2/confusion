import React from 'react';
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


    const DishDetail = (props) => {
        
        if (props.dish != null) {
            return(
                <Card>
                    <div className="container">
                        <div className="row">
                            <RenderDish dish={props.dish} />
                            <RenderComments 
                                comments={props.dish.comments}
                                dishId={props.dish.id}
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



export default DishDetail