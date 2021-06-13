import React from 'react';
import styled from 'styled-components';
import { Icon, MenuItemRenderer, MenuTitle } from './Utils'

const TrailingIcon = styled(Icon)`
    display: ${(props) => props.src === null ? 'none' : 'block'}
`

const LeadingIcon = styled(Icon)`
    display: ${(props) => props.src === null ? 'none' : 'block'}
`

function ListItem({
    title,
    id,
    onClick=null,
    leadingIconUrl=null, 
    leadingIcon=null, 
    trailingIconUrl=null, 
    trailingIcon=null
}) {
    return (
        <MenuItemRenderer onClick={() => onClick(id)}>
            <LeadingIcon src={leadingIconUrl ?? leadingIcon}  />
            <MenuTitle>{title}</MenuTitle>
            <TrailingIcon src={trailingIconUrl ?? trailingIcon}  />
        </MenuItemRenderer>
    )
}

export default ListItem