import React from 'react';
import RequestItem from './request_item';

class Requests extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            deleteId: '',
            requestId: ''
        };

        this.handlePost = this.handlePost.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleFetch = this.handleFetch.bind(this);
    };

    componentDidMount() {
        this.props.createRequest({ request: {request_type: 'GET' } })
            .then(this.props.fetchRequests());
    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    };

    handleFetch(e) {
        e.preventDefault();
        this.props.fetchRequest(this.state.requestId);
        this.setState({ ['requestId']: '' });
    };

    handlePost(e) {
        e.preventDefault();
        this.props.createRequest({request: {request_type: 'POST', comment: this.state.comment }});
        this.setState({ ['comment']: ''});
    };

    handleDelete(e) {
        e.preventDefault();
        const requestId = parseInt(this.state.deleteId);
        this.props.deleteRequest(requestId)
        this.props.createRequest({request: {request_type: 'DELETE'}})
        this.setState({ ['deleteId']: ''})
    };

    handleUpdate(e) {
        e.preventDefault();
        this.props.updateRequest();
    };

    render() {
        const { requests } = this.props;
        return (
            <div className='request-container'>
                <div className='interface-container'>
                    <div className='get'>
                        <input
                            value={this.state.requestId}
                            onChange={this.handleInput('requestId')}
                            type="text"
                        />
                        <button onClick={this.handleFetch}> GET </button>
                    </div>

                    <div className='post'>
                        <input 
                            value={this.state.comment} 
                            onChange={this.handleInput('comment')} 
                            type="text"
                        />
                        <button onClick={this.handlePost}> POST </button>
                    </div>

                    <div className='delete'>
                        <input 
                            value={this.state.deleteId}
                            onChange={this.handleInput('deleteId')}
                            type="text"
                        />
                        <button onClick={this.handleDelete}> DELETE </button>
                    </div>

                    <div className='update'>
                        <button onClick={this.handleUpdate}> UPDATE </button>
                    </div>
                </div>

                {requests.map(request => <RequestItem key={request.id} request={request} />)}
            </div>
        );
    };
};

export default Requests;