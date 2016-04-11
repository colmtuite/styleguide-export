import React from 'react';

export default function ColorRow({ color, textColor, title }) {
    ColorRow.propTypes = {
        color: React.PropTypes.string.isRequired,
        title: React.PropTypes.string.isRequired,
        textColor: React.PropTypes.string.isRequired,
    };

    return (
        <div className={`width-100 bg-${color}`} style={{ height: '80px' }}>
            <div className="width-100 height-100 display-table">
                <div className="paddingLeftRight-s display-tableCell verticalAlign-middle">
                    <div className={`fontSize-m lineHeight-m c-${textColor} textTransform-capitalize`}>{ title }</div>
                    <div className={`fontSize-s lineHeight-s textTransform-uppercase c-${textColor} opacity-70`}>#00ffdd</div>
                </div>
            </div>
        </div>
    );
}
