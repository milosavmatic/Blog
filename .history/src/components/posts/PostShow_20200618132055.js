import React from 'react';
import { fetchPost } from '../../actions';

class PostShow extends React.Component {
    componentDidMount() {
        const { fetchPost } = this.props;
        fetchPost();
    }

    render() {
        return (
            <div class="ui centered card" style={{ width: 500, marginTop: 30 }}>
                <div class="image">
                    <img alt="Card cap" />
                </div>
                <div>
                    <h1></h1>
                </div>
            </div>
        );
    }
}

mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, {fetchPost})(PostShow);
