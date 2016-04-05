import React from 'react';
import hljs from 'highlight.js';

export default class SectionCode extends React.Component {
    componentDidMount() {
        this.highlight();
    }

    componentDidUpdate() {
        this.highlight();
    }

    highlight() {
        if (this.refs.code) {
            hljs.highlightBlock(this.refs.code);
        }
    }

    render() {
        const { code } = this.props;
        return (
            <div className="padding-m bg-snow borderWidth-0 borderRightWidth-1 borderBottomWidth-1 borderLeftWidth-1 borderStyle-solid borderColor-smoke borderRadiusBottom-m">
                <pre>
                    <code ref="code">{ code }</code>
                </pre>
            </div>
        );
    }
}

SectionCode.propTypes = {
    code: React.PropTypes.string.isRequired,
};
