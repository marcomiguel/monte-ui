import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import CloseIcon from 'material-ui-icons/Close'
import './SearchComponent.css'

class SearchComponent extends Component {
    state = {
        collapsed: true
    }

    collapse() {
        this.setState({ collapsed : !this.state.collapsed }); 
    }

    render(){
        const { collapsed } = this.state
        return (
            <div id="search-wrapper">
                { !collapsed && <form>
                    <input type="search" placeholder="" name="search" className="search-input"/>
                </form> }
                <div>
                    <IconButton aria-label="Search" onClick={this.collapse.bind(this)}>
                        { collapsed && <SearchIcon /> }
                        { !collapsed && <CloseIcon /> }
                    </IconButton>
                </div>
            </div>
        )
    } 
}

export default SearchComponent