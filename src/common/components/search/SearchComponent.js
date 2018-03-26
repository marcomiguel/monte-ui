import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton'
import SearchIcon from 'material-ui-icons/Search'
import CloseIcon from 'material-ui-icons/Close'
import './SearchComponent.css'

class SearchComponent extends Component {
    state = {
        collapsed: true
    }

    open() {
        this.setState({ collapsed : false }); 
    }

    close() {
        this.setState({ collapsed : true }); 
    }

    render(){
        const { collapsed } = this.state
        return (
            <div id="search-wrapper">
                <div>
                    <IconButton onClick={this.open.bind(this)}>
                        <SearchIcon />
                    </IconButton>
                </div>
                { !collapsed && 
                <form className="search-form">
                    <input type="text" placeholder="Search" name="search" className="search-input"/>
                    <IconButton onClick={this.close.bind(this)} className="search-btn-close">
                        <CloseIcon/>
                    </IconButton>
                </form> }
            </div>
        )
    } 
}

export default SearchComponent