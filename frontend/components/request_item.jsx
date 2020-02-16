import React from 'react';

class RequestItem extends React.Component {
    constructor(props) {
        super(props);
    };

    displayComment(request) {
        if (request.comment) {
            return (
                <div className='comment-content'>
                    {request.comment}
                </div>
            );
        };
    };

    render() {
        const request = this.props.request;
        return (
            <div className='request'>
                <div className='id'>
                    <p>
                        ID:
                    </p> 
                    {request.id}
                </div>

                <div className='type'>
                    <p>
                        TYPE: 
                    </p>
                    {request.request_type}
                </div>

                <div className='time'>
                    <p>
                        CREATED AT:
                    </p>
                    {request.created_at}
                </div>

                <div className='comment'>
                    <p>
                        COMMENT:
                    </p>
                    {this.displayComment(request)}
                </div>

            </div>
        );
    };
};

export default RequestItem;