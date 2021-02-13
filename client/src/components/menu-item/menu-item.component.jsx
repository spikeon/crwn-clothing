import React from 'react';
import {withRouter} from 'react-router-dom';
import {MenuItemBackgroundImage, MenuItemContainer, MenuItemContentContainer, MenuItemSubtitle, MenuItemTitle} from './menu-item.styles';

const MenuItem = ({title, imageUrl, size, linkUrl, match, history}) => (
    <MenuItemContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <MenuItemBackgroundImage imageUrl={imageUrl} />
        <MenuItemContentContainer>
            <MenuItemTitle>
                {title}
            </MenuItemTitle>
            <MenuItemSubtitle>
                SHOP NOW
            </MenuItemSubtitle>
        </MenuItemContentContainer>
    </MenuItemContainer>
);

export default withRouter(MenuItem);