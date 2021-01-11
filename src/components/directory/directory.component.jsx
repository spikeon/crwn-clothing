import React from 'react';
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./sections.data";

export class Directory extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            sections : SECTIONS_DATA
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(
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
    }
}