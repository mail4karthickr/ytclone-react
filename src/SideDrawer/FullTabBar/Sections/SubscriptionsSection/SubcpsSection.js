import React, { Component } from 'react';
import LiveIcon from '../../../assets/liveIcon.svg';
import ShowMoreSubscpsIcon from '../../../../assets/images/showMoreIcon.svg';
import ShowFewerSubscpsIcon from '../../../../assets/images/showFewerIcon.svg';
import ListItem from 'Shared/Components/UI/ListItem/ListItem';
import classes from './SubcpsSection.module.css';
import TabItem from '../TabItem/TabItem';
import SectionItem from '../SectionItem/SectionItem';

class SubcpsSection extends Component {
    state = {
        showMoreSubscriptions: false
    }

    showMoreButtonTapped = () => {
        this.setState({
            ...this.state,
            showMoreSubscriptions: !this.state.showMoreSubscriptions
        })
    }
    
    componentDidMount() {
        console.log("ComponentDidMount Subscriptions", this.props.subscriptions);
    }

    render() {
        const noOfItemsToShow = 3;
        let showMoreMessage = `Show ${this.props.subscriptions.length - noOfItemsToShow} more`
        let subscriptions = this.state.showMoreSubscriptions ? this.props.subscriptions : this.props.subscriptions.slice(0, noOfItemsToShow)
        const menuItems = subscriptions.map((subscription) => {
            return <SectionItem
                key={subscription.snippet.title}
                title={subscription.snippet.title}
                channelLogo={subscription.snippet.thumbnails.default.url}
                isLive={false}
                hasActivity={false}
            />
        })
        let showMoreButton = this.state.showMoreSubscriptions ? <TabItem 
                key={"Show fewer"} 
                icon={ShowFewerSubscpsIcon}
                title={"Show fewer"}
                onClick={() => this.showMoreButtonTapped()}
            /> : <TabItem 
                key={"Show more"} 
                icon={ShowMoreSubscpsIcon} 
                title={showMoreMessage}
                onClick={() => this.showMoreButtonTapped()}
            />
        return (
            <div className={classes.subscriptions}>
                {menuItems}
                {showMoreButton}
            </div>
        );
    }
}

export default SubcpsSection;