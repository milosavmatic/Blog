import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/postActions';

class EditPost extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.match.params.id);
    }

    render() {
        console.log(Object.values(this.props.post));
        const { title, body } = this.props;
        if (!this.props.post) {
            return <h1>Loading...</h1>;
        }
        return (
            <div className="ui form">
                <div className="field">
                    <label>Title</label>
                    <input
                        initialValue={this.props.title}
                        value={title}
                        onChange={(e) =>
                            this.setState({ title: e.target.value })
                        }
                    />
                </div>
                <div className="field">
                    <label>Description</label>
                    <textarea
                        value={body}
                        onChange={(e) =>
                            this.setState({ body: e.target.value })
                        }
                    ></textarea>
                </div>
                <button
                    className="ui button"
                    type="submit"
                    onClick={this.onSubmit}
                >
                    Submit
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps.match.params.id);
    return {
        post: state.posts[ownProps.match.params.id],
    };
};

export default connect(mapStateToProps, { fetchPost })(EditPost);
