import React from 'react';
// import BackDrop from '../../UI/Backdrop/Backdrop'
import FullTabBar from '../FullTabBar/FullTabBar';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    from {     
        transform: translateX(-100%); 
    }
    to {
        transform: translateX(0); 
    }
`

// const slideOutAnimation = keyframes`
//     from {     
//         -webkit-transform: translate3d(0%, 0, 0);
//         transform: translate3d(0%, 0, 0); 
//     }
//     to {
//         -webkit-transform: translate3d(-100%, 0, 0);
//         ransform: translate3d(-100%, 0, 0);
//     }
// `

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

// const fadeOut = keyframes`
//   from {
//     opacity: 1;
//   }

//   to {
//     opacity: 0;
//   }
// `;

const OverlayTab = styled.div`
    position: absolute;
    z-index: 2000;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
`

const BackDrop = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    animation: ${fadeIn} 0.25s ease;
`

const Tab = styled.div`
    animation: ${slideIn} 0.25s ease;
    position: absolute;
    z-index: 3000;
`

const OverlayTabBar = (props) => {
    return (
        <OverlayTab>
            <BackDrop onClick={props.closed} />
            <Tab>
                <FullTabBar
                    isAuthenticated = {props.isAuthenticated}
                    showHeader={true}
                    closeMenu={props.closed}
                    playlist={[
                        {title: 'Keto'},
                        {title: 'HealthyRecipes'},
                        {title: 'MyPlaylist'},
                        {title: 'Beats'},
                        {title: 'Recipies'},
                        {title: 'Technical'}
                    ]}
                    subscriptions={[]}
                />
            </Tab>
        </OverlayTab>
    );
};

export default OverlayTabBar;