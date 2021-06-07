import Divider from 'Shared/Components/UI/Divider/Divider';
import React, { Component } from 'react';
import { updateObject } from 'Shared/Utility';
import classes from './CategoriesBar.module.css';
import Chips from './Chips/Chips';

class CategoriesBar extends Component {
    state = {
        selectedTab: 0
    }

    tabChangedHandler = (id) => {
        this.setState({selectedTab: id});
    }

    render() {
        let categories = this.props.categories
        .map((category) => {
            return <Chips 
                        key={category.id}
                        id={category.id}
                        title={category.snippet.title}
                        isSelected={this.state.selectedTab === category.id}
                        tabChanged={(id) => this.tabChangedHandler(id)}
                    />
        })
        categories.unshift(
            <Chips 
                key={0}
                id={0}
                title={"All"}
                isSelected={this.state.selectedTab === 0}
                tabChanged={(id) => this.tabChangedHandler(id)}
            />
        )
    
        return (
            <div className={classes.container}>
                <Divider />
                <div className={classes.categoriesBar}>
                    {categories}
                </div>
                <Divider />
            </div>
        );
    }
}

export default CategoriesBar;