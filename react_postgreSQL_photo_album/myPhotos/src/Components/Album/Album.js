import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImageList, selectClassification } from '../../actions/index'


class Album extends Component {
    renderImages(images) {
        return images.map(image =>
            <div>
                <img src={`http://localhost:3001/img/${image.id}`}></img>
            </div>)
    };

    render() {
        let images = this.props.imageList.filter(image => image.classification===this.props.selected)
        console.log(images)
        return (
            <article>
                <h2 class="f3 fw4 pa3 mv0">Albums</h2>
                <div className="cf pa2 center">
                    {this.props.selected}
                </div>
                <div>
                    {this.renderImages(images)}
                </div>
            </article>
        );
    };

};

const mapStateToProps = (state) => {
    return {
        User: state.User,
        imageList: state.imageList,
        imageClass: state.imageClass,
        selected: state.selected
    }
};

export default connect(mapStateToProps, { fetchImageList, selectClassification })(Album);