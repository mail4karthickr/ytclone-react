import React from 'react';
import YourChannelIcon from './assets/yourChannelIcon.svg'
import PurchaseAndMembershipsIcon from './assets/purchaseAndMembIcon.svg';
import youtubeStudioIcon from './assets/youtubeStudio.svg';
import switchAccountIcon from './assets/switchAccount.svg';
import signOutIcon from './assets/signOut.svg';
import rightArrowIcon from './assets/rightArrowIcon.svg';
import { Row, Column, Avatar, Link, MenuSectionRendererWithPadding, MenuSectionRenderer } from '../../Shared/Components/Utils';
import ListItem from '../../Shared/Components/ListItem';

export const UserSettingsMenuItemType = Object.freeze({
    YourChannel: 'Your channel',
    PurchasesAndMemberShips: 'Purchases and memberships',
    YoutubeStudio: 'YouTube Studio',
    SwitchAccount: 'Switch account',
    SignOut: 'Sign out'
});

export const menuItems = Object.freeze([
    {
        type: UserSettingsMenuItemType.YourChannel,
        leadingIcon: YourChannelIcon,
    },
    {
        type: UserSettingsMenuItemType.PurchasesAndMemberShips,
        leadingIcon: PurchaseAndMembershipsIcon,
    },
    {
        type: UserSettingsMenuItemType.YoutubeStudio,
        leadingIcon: youtubeStudioIcon
    },
    {
        type: UserSettingsMenuItemType.SwitchAccount,
        leadingIcon: switchAccountIcon,
        trailingIcon: rightArrowIcon
    },
    {
        type: UserSettingsMenuItemType.SignOut,
        leadingIcon: signOutIcon
    }
]);

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

function AuthSettingsMenu({userInfo, itemClicked}) {
    const listItems = menuItems.map((menuItem) => {
        return <ListItem
            id={menuItem.type}
            key={menuItem.type}
            title={menuItem.type}
            leadingIcon={menuItem.leadingIcon}
            trailingIcon={menuItem.trailingIcon}
            onClick={(id) => itemClicked(id)}                        
        />
    });
    return (
        <>
            <MenuSectionRendererWithPadding>
                <UserInfo userInfo={userInfo}/>
            </MenuSectionRendererWithPadding>
            <MenuSectionRenderer>
                {listItems}
            </MenuSectionRenderer>
        </>
    )
}

export default AuthSettingsMenu