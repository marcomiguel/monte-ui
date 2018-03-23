import React from 'react'
import PropTypes from 'prop-types'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import './CaseComponent.css'

const CaseComponent = props => (
    <Card className="case-card">
        <CardContent className="case-card-component">
            <div className="ccc-column-a">
                <div className="ccc-header ccc-id">{props.id}</div>
                <div className="ccc-column-title">Product</div>
                <div className="ccc-column-description">{props.product}</div>
            </div>
            <div className="ccc-column-b">
                <div className="ccc-header ccc-header-b">{props.status}</div>
                <div className="ccc-column-title">Event Preview</div>
                <div className="ccc-column-description">{ props.eventPreview.items.map((item, key) => <span key={key}>{item}; </span>)}</div>
            </div>
            <div className="ccc-column-c">
                <div className="ccc-header ccc-header-c">{ props.isValid ? 'VALID' : 'NON-VALID'}</div>
                <div className="ccc-column-title">Reporter</div>
                <div className="ccc-column-description">{props.reporter.name}</div>
            </div>
            <div className="ccc-column-d">
                <div className="ccc-header ccc-header-d">{props.daysLeft} DAYS LEFT</div>
                <div className="ccc-column-title">Patient</div>
                <div className="ccc-column-description">{props.patient.name}</div>
            </div>
            <div className="ccc-column-e">
                <div className="">
                    <button className="btn-view-case">View Case</button>
                </div>
                <div className="btn-comments">SENTRi COMMENTS</div>
            </div>
        </CardContent>    
    </Card>
)

CaseComponent.propTypes = {

}

export default CaseComponent