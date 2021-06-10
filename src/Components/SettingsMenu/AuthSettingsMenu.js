import React from 'react';
import YourChannelIcon from './assets/yourChannelIcon.svg'
import PurchaseAndMembershipsIcon from './assets/purchaseAndMembIcon.svg';
import youtubeStudioIcon from './assets/youtubeStudio.svg';
import switchAccountIcon from './assets/switchAccount.svg';
import signOutIcon from './assets/signOut.svg';
import rightArrowIcon from './assets/rightArrowIcon.svg';
import {  Menu, Row, Column, Avatar, Link, MenuItemRenderer, Divider, MenuSectionRenderer } from '../../Shared/Components/Utils';
import ListItem from '../../Shared/Components/ListItem'

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
        <Menu>
            <MenuSectionRenderer>
                <UserInfo userInfo={userInfo}/>
            </MenuSectionRenderer>
            <Divider />
            <MenuSectionRenderer>
                <ListItem leadingIcon={YourChannelIcon} title={"This is a title"} />
                <ListItem leadingIcon={PurchaseAndMembershipsIcon} title={"This is a title"} />
                <ListItem leadingIcon={youtubeStudioIcon} title={"This is a title"} />
                <ListItem leadingIcon={switchAccountIcon} title={"This is a title"} trailingIcon={rightArrowIcon} />
                <ListItem leadingIcon={signOutIcon} title={"This is a title"} />
            </MenuSectionRenderer>
        </Menu>
    )
}

export default AuthSettingsMenu