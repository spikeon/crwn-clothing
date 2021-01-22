import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';
import {createStructuredSelector} from 'reselect';

const Directory = ({sections}) => (
    <div className='directory-menu'>
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
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);