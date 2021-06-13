import React, {Component} from "react";
import { connect } from "react-redux";
import classes from "./Root.module.css";
import MediaQuery from '../../Shared/MediaQuery'
import * as actions from './Redux/Actions';
import Masthead from "Components/Masthead/Masthead";
import Home from "../../Components/Home/Home";
import SideDrawer, { SideDrawerMenuType } from "Components/SideDrawer/SideDrawer";
import OverlayTabBar from "Components/SideDrawer/OverlayTabBar/OverlayTabBar";
import AuthSettingsMenu from '../../Components/SettingsMenu/UserSettings';

class Root extends Component {
  state = {
    sideDrawerMenuType: SideDrawerMenuType.none,
    showOverlayTabBar: false,
    showAuthSettingsMenu: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      ...this.state,
      showOverlayMenu: false
    });
    console.log("dismissMenu", this.state.showOverlayMenu);
  }

  toggleMenuHandler = () => {
    console.log("toggleMenuHandler", this.state);
    console.log("isLargeScreen", this.isLargeScreen());
    if (this.state.sideDrawerMenuType === SideDrawerMenuType.FullTabBar) {
      console.log("FullTabBar");
      this.setState({
        ...this.state,
        sideDrawerMenuType: SideDrawerMenuType.TabItems
      });
    } else if (this.state.sideDrawerMenuType === SideDrawerMenuType.TabItems && this.isXLScreen()) {
      console.log("XLScreen");
      this.setState({
        ...this.state,
        sideDrawerMenuType: SideDrawerMenuType.FullTabBar
      });
    } else if (this.isLargeScreen() || this.isSmallScreen()) {
      console.log("Large screen");
      this.setState({
        ...this.state,
        showOverlayTabBar: !this.state.showOverlayTabBar
      });
    }
  }

  showAuthSettingsMenuHandler = () => {
    console.log('showAuthSettingsMenuHandler userInfo', this.props.userInfo);
    this.setState({
      ...this.state,
      showAuthSettingsMenu: !this.state.showAuthSettingsMenu
    })
  }

  tabBarDismissed = () => {
    this.setState({
      ...this.state,
      showOverlayTabBar: false
    })
    console.log("tabBarDismissed", this.state);
  }

  isBigScreen = () => {
    return window.matchMedia("(min-width: 1300px)").matches;
  }

  componentDidMount() {
    let searchParams = new URLSearchParams(window.location.href);
    const hasToken = searchParams.has('access_token')
    if (hasToken) {
      const accessToken = searchParams.get('access_token');
      const expiresIn = searchParams.get('expires_in');
      if (accessToken !== null && expiresIn !== null) {
        this.props.authenticationCompleted(accessToken, expiresIn);
      } else {
        this.props.authenticationError(window.location.href);
      }
      
      window.history.replaceState(null, "New Page Title", "/")
    }

    MediaQuery.XLarge(() => {
      this.setState({
        ...this.state,
        sideDrawerMenuType: SideDrawerMenuType.FullTabBar
      });
    });
    MediaQuery.Large(() => {
      this.setState({
        ...this.state,
        sideDrawerMenuType: SideDrawerMenuType.TabItems
      });
    })
    MediaQuery.Small(() => {
      this.setState({
        ...this.state,
        sideDrawerMenuType: SideDrawerMenuType.none
      });
    })
    if (this.isLargeScreen()) {
      this.setState({
        ...this.state,
        sideDrawerMenuType: SideDrawerMenuType.TabItems
      });
    } else if (this.isXLScreen()) {
      this.setState({
        ...this.state,
        sideDrawerMenuType: SideDrawerMenuType.FullTabBar
      });
    }
    this.props.onTryAutoSignup();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Root componentDidUpdate', this.props.userInfo);
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps nextProps", nextProps);
  }

  isXLScreen = () => {
    return window.matchMedia("(min-width: 1300px)").matches;
  }

  isLargeScreen = () => {
    return window.matchMedia("(min-width: 800px) and (max-width: 1299px)").matches;
  }

  isSmallScreen = () => {
    return window.matchMedia("(min-width: 0px) and (max-width: 799px)").matches;
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevProps.isAuthenticated !== this.props.isAuthenticated && this.props.isAuthenticated) {
  //       this.props.fetchCategories();
  //   }
  // }

  render() {
    console.log("this.props.userInfo", this.props.userInfo);
    let sideDrawerSize = "";
    let homeSize = "100vw"
    let mainAttachedClasses = [classes.main]
    if (this.state.sideDrawerMenuType === SideDrawerMenuType.FullTabBar) {
      sideDrawerSize = '250px'
      homeSize = "calc(100vw - 250px)"
      mainAttachedClasses = [classes.main, classes.fullTabBar]
    } else if (this.state.sideDrawerMenuType === SideDrawerMenuType.TabItems) {
      sideDrawerSize = '70px'
      homeSize = "calc(100vw - 70px)"
      mainAttachedClasses = [classes.main, classes.tabItems]
    } else if (this.state.sideDrawerMenuType === SideDrawerMenuType.none) {
      sideDrawerSize = '0px';
      homeSize = "calc(100vw - 0px)";
      mainAttachedClasses = [classes.main];
    }

    return (
      <div className={classes.wrapper}>
        {this.state.showOverlayTabBar ? <OverlayTabBar 
          closed={this.tabBarDismissed} isAuthenticated={this.props.isAuthenticated} /> : null}
        <Masthead
          className={classes.toolBar}
          userInfo={this.props.userInfo}
          toggleMenu={() => this.toggleMenuHandler()}
          showAuthSettingsMenu={() => this.showAuthSettingsMenuHandler()}
        />
        {this.state.showAuthSettingsMenu ? <AuthSettingsMenu userInfo={this.props.userInfo} /> : null }
        <section className={mainAttachedClasses.join(" ")}>
          <SideDrawer
            clicked={this.tabBarDismissed}
            width={sideDrawerSize} 
            sideDrawerMenuType={this.state.sideDrawerMenuType} 
            tabBarDismissed={this.tabBarDismissed} 
          />
          <Home width={homeSize} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.root.accessToken !== null,
      userInfo: state.root.userInfo
  };
}

const mapDispatchToProps = dispatch => {
  return {
      authenticationCompleted: (accessToken, expiresIn) => dispatch(actions.authenticationCompleted(accessToken, expiresIn)),
      authenticationError: (location) => dispatch(actions.authenticationError(location)),
      onTryAutoSignup: () => dispatch( actions.authCheckState() ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
