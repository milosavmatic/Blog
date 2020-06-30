import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/postActions';

import CommentsList from '../comments/CommentsList';

class PostShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        const { fetchPost } = this.props;
        fetchPost(id);
    }

    render() {
        if (!this.props.posts) {
            return <div>Loading...</div>;
        }
        const { title, body, image_path } = this.props.posts;
        return (
            <div>
                <div className="ui centered card" style={{ width: 800 }}>
                    <div className="image">
                        <img src={image_path} alt="Card cap" />
                    </div>
                    <div>
                        <h1>{title}</h1>
                        <h4>{body}</h4>
                    </div>
                </div>
                <hr />
                <CommentsList post_id={this.props.match.params.id} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { posts: state.posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchPost })(PostShow);
