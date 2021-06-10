import React from 'react';
import styled from 'styled-components';
import { Icon, MenuItemRenderer, MenuTitle } from './Utils'

const TrailingIcon = styled(Icon)`
    display: ${(props) => props.src === null ? 'none' : 'block'}
`

function ListItem({leadingIconUrl=null, leadingIcon=null, title, trailingIconUrl=null, trailingIcon=null}) {
    return (
        <MenuItemRenderer>
            <Icon src={leadingIconUrl ?? leadingIcon}  />
            <MenuTitle>{title}</MenuTitle>
            <TrailingIcon src={trailingIconUrl ?? trailingIcon}  />
        </MenuItemRenderer>
    )
}

export default ListItem