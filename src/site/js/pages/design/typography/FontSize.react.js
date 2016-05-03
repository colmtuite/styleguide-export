import React from 'react';

export default function FontSize({ fontSize, fontDescription }) {
    FontSize.propTypes = {
        fontSize: React.PropTypes.string.isRequired,
        fontDescription: React.PropTypes.string.isRequired,
    };

    return (
        <div className="borderWidth-0 borderBottomWidth-1 borderStyle-solid borderColor-smoke">
            <div className="antiscroll-wrap width-100">
                <div className="antiscroll-inner overflowX-scroll whiteSpace-nowrap padding-m">
                    <div className="padding-xxs">
                        <div className="marginBottom-s">
                            <p className={`fontSize-${fontSize}`}>
                                The quick brown fox jumps over the lazy dog
                            </p>
                        </div>

                        <p className="fontSize-s fontWeight-3 c-silver">
                            { fontDescription }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
