import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';

class PostShow extends React.Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        //const { fetchPost } = this.props;
        //fetchPost(id);
    }

    render() {
        console.log(this.props);
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

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        posts: state.posts[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, { fetchPost })(PostShow);
