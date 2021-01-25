import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';
import {DirectoryMenuContainer} from './directory.styles';

const Directory = ({sections}) => (
    <DirectoryMenuContainer>
        {
            sections.map(
                ({id, ...sectionProps}) =>
                    <MenuItem
                        key={id}
                        title={sectionProps.title}
                        imageUrl={sectionProps.imageUrl}
                        size={sectionProps.size}
                        linkUrl={sectionProps.linkUrl}
                    />
            )
        }
    </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);