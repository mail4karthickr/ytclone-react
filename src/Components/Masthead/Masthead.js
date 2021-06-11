import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './Masthead.module.css';
import SearchBox from './SearchBox/SearchBox';
import TrailingItems from './TrailingItems/TrailingItems';
import LeadingItems from './LeadingItems/LeadingItems';
import styles from '../../Shared/Styles/styles.module.css';
import SearchIcon from './assets/searchIcon.svg';
import MicrophoneIcon from "./assets/microphoneIcon.svg";
import MediaQuery from '../../Shared/MediaQuery'
import BackArrowIcon from './assets/backArrowIcon.svg';

const BarType = Object.freeze({
    ToolBar: 'Toolbar',
    SearchBar: 'SearchBar',
    IconBar: 'IconBar'
});

class Masthead extends Component {
    state = {
        barType: BarType.ToolBar
    }

    changeBarTypeHandler = () => {
        this.setState({
            ...this.state,
            barType: BarType.SearchBar
        })
    }
    
    backButtonClickedHandler = () => {
        this.setState({
            ...this.state,
            barType: BarType.IconBar
        })
    }

    componentDidMount() {
        if (MediaQuery.isSmall) {
            this.setState({
                ...this.state,
                barType: BarType.IconBar
            })
        } else {
            this.setState({
                ...this.state,
                barType: BarType.ToolBar
            })
        }
        MediaQuery.Small(() => {
            this.setState({
                ...this.state,
                barType: BarType.IconBar
            })
        })
        MediaQuery.Large(() => {
            this.setState({
                ...this.state,
                barType: BarType.ToolBar
            })
        })
    }

    render() {
        let bar = null;
        switch (this.state.barType) {
            case BarType.ToolBar:
                bar = this.bar(false)
                break;
            case BarType.IconBar:
                bar = this.bar(true)
                break;
            case BarType.SearchBar:
                bar = <div className={`${classes.searchBoxContainer}`} >
                    <img 
                        src={BackArrowIcon}
                        className={`${styles.icon} ${classes.backArrowIcon}`}
                        onClick={this.backButtonClickedHandler}
                        alt=""
                    />
                    <SearchBox />
                </div>
                break;
            default:
                break;
         
        }
        return bar
    }

    bar(searchIcon) {
        return (
            <div className={`${classes.toolbar}`}>
                <LeadingItems toggleMenu={this.props.toggleMenu} />
                {searchIcon ? <div className={classes.seaContainer}>
                    <img 
                        src={MicrophoneIcon} 
                        className={`${styles.icon} ${classes.microphoneIcon}`}
                        alt=""
                    />
                    <img 
                        src={SearchIcon} 
                        className={`${styles.icon} ${classes.searchIcon}`}
                        onClick={this.changeBarTypeHandler}
                        alt=""
                    />
                </div> : <SearchBox />}
                <TrailingItems
                    isAuthenticated={this.props.isAuthenticated}
                    userInfo={this.props.userInfo}
                    avatarClicked={this.props.showAuthSettingsMenu}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.root.isAuthenticated,
        userInfo: state.root.userInfo
    };
  }

export default connect(mapStateToProps, null)(Masthead);