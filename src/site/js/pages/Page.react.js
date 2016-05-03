import React from 'react';

export default function Page(props) {
    return (
        <div
            className="padding-m breakPointS-padding-l breakPointM-padding-xl centered"
            style={{ maxWidth: '960px' }}>
            {props.children}
        </div>
    );
}

Page.propTypes = {
    children: React.PropTypes.node,
};
