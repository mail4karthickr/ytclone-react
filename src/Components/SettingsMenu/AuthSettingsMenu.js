import React from 'react';
import YourChannelIcon from './assets/yourChannelIcon.svg'
import PurchaseAndMembershipsIcon from './assets/purchaseAndMembIcon.svg';
import youtubeStudioIcon from './assets/youtubeStudio.svg';
import switchAccountIcon from './assets/switchAccount.svg';
import signOutIcon from './assets/signOut.svg';
import rightArrowIcon from './assets/rightArrowIcon.svg';
import {  Menu, Row, Column, Avatar, Link, MenuSectionRendererWithAllPadding, Divider, MenuSectionRenderer } from '../../Shared/Components/Utils';
import ListItem from '../../Shared/Components/ListItem'
import SettingsMenu from './SettingsMenu';
import RootMenu from './RootMenu/RootMenu';

function UserInfo({userInfo}) {
    return (
        <Row style={{gap: "20px"}}>
            <Avatar src={userInfo.picture} alt="" />
            <Row>
                <Column>
                    <b>{userInfo.name}</b>
                    <Link href="">Manage your Google Account</Link>
                </Column>
            </Row>
        </Row>
    )
}

function AuthSettingsMenu({userInfo}) {
    return (
        <div>
            <MenuSectionRendererWithAllPadding>
                <UserInfo userInfo={userInfo}/>
            </MenuSectionRendererWithAllPadding>
            <Divider />
            <MenuSectionRenderer>
                <ListItem leadingIcon={YourChannelIcon} title={"Your channel"} />
                <ListItem leadingIcon={PurchaseAndMembershipsIcon} title={"Purchases and memberships"} />
                <ListItem leadingIcon={youtubeStudioIcon} title={"YouTube Studio"} />
                <ListItem leadingIcon={switchAccountIcon} title={"Switch account"} trailingIcon={rightArrowIcon} />
                <ListItem leadingIcon={signOutIcon} title={"Sign out"} />
            </MenuSectionRenderer>
            <Divider />
        </div>
    )
}

export default AuthSettingsMenu