import styled from 'styled-components';

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
`
export const Link = styled.a`
    text-decoration: none;
    font-size: 0.90rem;
`
export const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`
export const MenuRenderer = styled.div`
    position: absolute;
    z-index: 200;
    padding: 8px 0px 0px 0px;
    top: 20px;
    right: 0px;
    width: 300px;
    border: 1px solid ${props => props.theme.borderColor};
    border-top: none;
    border-bottom: none;
    background-color: #ffff;
`
export const MenuSectionRenderer = styled.div`
    padding: 10px 0px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
`
export const MenuSectionRendererWithPadding = styled.div`
    padding: 15px;
    border-bottom: 1px solid ${props => props.theme.borderColor};
`
export const MenuItemRenderer = styled(Row)`
    padding: 7px 15px;
    cursor: pointer;
    gap: 20px;
    &:hover {
        background-color: ${props => props.theme.hoverBgColor};
    }
`
export const MenuTitle = styled.span`
    font-size: 0.9rem;
    flex: 1;
`
export const Divider = styled.div`
    border-top: 1px solid #d4d4d4;
    padding: 0px;
    width: 100%;
    margin: 0px;
`
export const DividerWithMargin = styled(Divider)`
    margin: 8px 0px;
`
export const Icon = styled.img`
    width: 24px;
    height: 24px;
    filter: invert(61%) sepia(0%) saturate(7009%) hue-rotate(83deg) brightness(85%) contrast(93%);
`