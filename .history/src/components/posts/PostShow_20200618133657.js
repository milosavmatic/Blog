import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';

class PostShow extends React.Component {
    componentDidMount() {
        const { fetchPost } = this.props;
        fetchPost();
    }

    render() {
        console.log(this.props.posts.body);
        if (!this.props.stream) {
            return <div>Loading...</div>;
        }
        const { title, body } = this.props.posts;
        return (
            <div class="ui centered card">
                <div class="image">
                    <img alt="Card cap" />
                </div>
                <div>
                    <h1>{title}</h1>
                    <h4>{body}</h4>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.id,
    };
};

export default connect(mapStateToProps, { fetchPost })(PostShow);
