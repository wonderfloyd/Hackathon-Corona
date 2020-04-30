import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AlbumList.css';

class AlbumList extends Component {

    renderImageClass(img_classification) {
        let previewImage = this.props.imageList.find(image => image.classification===img_classification);
        console.log('previewImage: ', previewImage)
        let previewURL = `http://localhost:3001/img/${previewImage.id}`;

        return (
            <div key={img_classification} className="fl w-50 w-25-m w-20-l pa2 bg-white" style={{height:'150px', width:'150px'}}>
                <div className="db link dim tc center" style={{height:'110px', width:'110px'}}>
                <img src={previewURL} style={{ height:'100px', width: '100px', borderRadius: '10px'}} className="w-100 db outline black-10 center"></img>
                        <dl className="mt2 f6 lh-copy">
                        <dt className="clip">Title</dt>
                        <dd className="ml0 black truncate w-100">{img_classification}</dd>
                        <dt className="clip">{img_classification}</dt>
                        <dd className="ml0 gray truncate w-100"></dd>
                    </dl>
                </div>
            </div>
        );
    }
    renderImageClassList() {
        return this.props.imageClass.map(img_classification => this.renderImageClass(img_classification));
    };
    render() {
        return (
            <article>
                <h2 class="f3 fw4 pa3 mv0">Albums</h2>
                <div className="cf pa2 center">
                    {this.renderImageClassList()}
                </div>
            </article>
        );
    };

};

const mapStateToProps = (state) => {
    return {
        User: state.User,
        imageList: state.imageList,
        imageClass: state.imageClass
    }
};

export default connect(mapStateToProps)(AlbumList);