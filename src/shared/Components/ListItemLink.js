import React from 'react';
import styled from 'styled-components';
import { IconImage, MenuItemRenderer, MenuTitle, TrailingIcon, Icon } from './Utils'

function ListItemLink({
    title,
    url,
    leadingIcon=null,
    leadingIconImage=null,
    leadingIconImageUrl=null,
    trailingIcon=null
}) {
    let leadingIconElement = null;
    if (leadingIcon !== null) {
        leadingIconElement = <Icon src={leadingIcon} />
    } else if (leadingIconImage !== null) {
        leadingIconElement = <IconImage src={leadingIconImage} />
    } else if (leadingIconImageUrl !== null) {
        leadingIconElement = <IconImage src={leadingIconImageUrl} />
    }
    return (
        <MenuItemRenderer onClick={() => { window.open(url, "_blank"); }}>
            {leadingIconElement}
            <MenuTitle>{title}</MenuTitle>
            <TrailingIcon src={trailingIcon}  />
        </MenuItemRenderer>
    )
}

export default ListItemLink;