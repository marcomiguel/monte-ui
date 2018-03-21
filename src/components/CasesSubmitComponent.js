import React from 'react'
import PropTypes from 'prop-types'
import ExpansionPanel, { ExpansionPanelSummary, ExpansionPanelDetails, } from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
// import './CaseComponent.css'

const CasesSubmitComponent = props => (
    <div style={{ marginBottom: '100px'}}>
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>6 Sentri-Secure cases ready to submit</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
)

CasesSubmitComponent.propTypes = {

}

export default CasesSubmitComponent