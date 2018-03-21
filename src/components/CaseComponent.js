import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import './CaseComponent.css'

const CaseComponent = props => (
    <Card className="case-card">
        <CardContent className="case-card-component">
            <div>
                {props.id}
                Producto {props.product}
            </div>
            <div>
                {props.id}
                Producto {props.product}
            </div>
            <div>
                {props.id}
                Producto {props.product}
            </div>
            <div>
                {props.id}
                Producto {props.product}
            </div>
            <div>
                {props.id}
                Producto {props.product}
            </div>
        </CardContent>    
    </Card>
)

CaseComponent.propTypes = {

}

export default CaseComponent