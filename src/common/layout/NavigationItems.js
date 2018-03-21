import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import FolderIcon from 'material-ui-icons/Folder'
import HistoryIcon from 'material-ui-icons/History'
import HelpOutlineIcon from 'material-ui-icons/HelpOutline'
import LinkIcon from 'material-ui-icons/Link'

import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})

function SimpleList(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List component="nav">
        <ListItem component={Link} to="/dashboard" button>
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText primary="All Cases" />
        </ListItem>
        <ListItem component={Link} to="/dashboard" button>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary="History" />
        </ListItem>
        <ListItem component={Link} to="/users" button>
          <ListItemIcon>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Help Center" />
        </ListItem>
        <ListItem component={Link} to="/users" button>
          <ListItemIcon>
            <LinkIcon />
          </ListItemIcon>
          <ListItemText primary="My Links" />
        </ListItem>
      </List>
    </div>
  )
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleList)