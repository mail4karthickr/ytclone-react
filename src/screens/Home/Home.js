import TabItems from 'components/SideDrawer/TabBar/TabItems';
import Toolbar from 'components/ToolBar/ToolBar';
import React from 'react';
import Aux from '../../shared/hoc/Aux';

const home = () => {
    return (
        <Aux>
            <Toolbar></Toolbar>
            <TabItems></TabItems>
        </Aux>
    );
};

export default home;