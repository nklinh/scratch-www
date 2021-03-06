var classNames = require('classnames');
var FormattedMessage = require('react-intl').FormattedMessage;
var React = require('react');

var SocialMessage = require('../../../components/social-message/social-message.jsx');

var StudioActivityMessage = React.createClass({
    type: 'StudioActivityMessage',
    propTypes: {
        studioId: React.PropTypes.number.isRequired,
        studioTitle: React.PropTypes.string.isRequired,
        datetimeCreated: React.PropTypes.string.isRequired
    },
    render: function () {
        var studioLink = '/studios/' + this.props.studioId;

        var classes = classNames(
            'mod-studio-activity',
            this.props.className
        );
        return (
            <SocialMessage
                className={classes}
                datetime={this.props.datetimeCreated}
                iconSrc="/svgs/messages/studio-activity.svg"
                iconAlt="studio activity notification image"
            >
                <FormattedMessage
                    id='messages.studioActivityText'
                    values={{
                        studioLink: <a href={studioLink}>{this.props.studioTitle}</a>
                    }}
                />
            </SocialMessage>
        );
    }
});

module.exports = StudioActivityMessage;
