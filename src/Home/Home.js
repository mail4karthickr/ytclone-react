import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Home.module.css';
import * as actions from './Redux/Actions';
import CategoriesBar from './CategoriesBar/CategoriesBar';
import Divider from 'Shared/Components/UI/Divider/Divider';
import Videos from 'Home/Videos/Videos';


class Home extends Component {

    componentDidMount() {
        this.props.fetchVideos();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isAuthenticated !== this.props.isAuthenticated && this.props.isAuthenticated) {
            this.props.fetchCategories();
        }
    }

    render() {
        return(
            <div style={{maxWidth: this.props.width}} className={classes.home}> 
                {this.props.categories.length > 0 ? <CategoriesBar className={classes.categoriesBar} categories={this.props.categories} /> : null } 
                <Videos className={classes.videos} videos={this.props.videos} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.root.accessToken !== null,
        loading: state.home.fetchMostPopularVideosStart,
        videos: state.home.fetchMostPopularVideosSuccess,
        fetchVideosError: state.home.fetchMostPopularVideosError,
        categories: state.home.fetchedVideoCategoriesSuccess
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVideos: (regionCode, categoryId) => dispatch(actions.fetchMostPopularVideos(regionCode, categoryId)),
        fetchCategories: () => dispatch(actions.fetchVideoCategories()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);