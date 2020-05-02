import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AlbumList.css';
import { fetchImageList, selectClassification } from '../../actions/index'
import AlbumListCarD from './AlbumListCard/AlbumListCard'

class AlbumList extends Component {
    constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
    renderButton(num) {
        let side = 'left'
        return (
        <div key={`button_${num}`}
        className="fl w-50 w-25-m w-20-l pa2 bg-white class_card" 
        style={{height:'150px', width:'150px'}}
        >
            <div className="db link dim tc center" style={{height:'110px', width:'110px'}}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASEAAACvCAMAAACFDpg1AAAAXVBMVEX39/cBAQHm5uYbGxv////7+/v19fXX19fk5OTa2tr29vZZWVk/Pz9bW1s8PDxCQkIJCQkXFxcQEBDr6+s3NzfDw8PKysrQ0NBTU1NHR0ccHBwkJCQtLS1PT0/v7++kXmUVAAACxElEQVR4nO3di07bMABG4ZrGYQuwC+02oKzv/5hAufTm5NgSklF8vieIjtI/dcu6xUKSJEmSNEtxG2tfwtfWXYY/Xe2L+Mq67yGEvyYatQtkonFvgUL4Z6Kk5w0KJppwEMhEKR8vMROlnQQK4dJER84ChfDNt44HjjbIROeSgcKtid6lA4Xw20SvxgI9J7ow0SI50vtEKxNN3EE7q9rXVx0EuutrX2BtEOgqtv4qMxCYGumXQAsDeQdN8iUGMFDtC6zNOwhAoBtH2pGe5ksMONLAOwjQSBvIkZ5mIOAGAZ9iwJEGsEEGcqSBgYAjDXCka19gbY40MBBwpIEjDQwEPGoAAwFHGvh5EHCkgRsEDAQ8agBHGjjSwEDAkQYGAh41AN1BXZyZTw50v7qYm+FTA81R2b+DazBQWSEY6XkqKdTiHVRUqM1ABYUaDZRfqNVA2YWaHOmdzELtBsosFFt9iYXsQve1r7OezEL9de0LrSZzh2L/o/aV1pL7LIvDuvalVpL9fqjZuyj/PXWrW1RwLms0UcnZvs1ERZ8Pxb7BuS77jLHFRIW/RkZPtIfNcmZKC9EWPW67uSn+OggS+SuC+EJbmojmeukPLdJddGsi2qJfJqJE3kWYyLnmuTYRJfKng53rDCZCHkCQBxDkXKM4eAABzjWK/c/JF5pb5AGE+XkRgrn2ieZcZ4C59qHPBxAT4QHERPQnWN5FfgOSAebaJxo/0Xx37QGEwVybCOfaJxr/raOJPIAwP1JDfgOCnGvk50XIAwjyAII8gCCfaMjPi5BzjSCRZzRKdFP4+1mzNLVF/j8nO+OJ/OHPN3FIvy/yZxs/pLfozkB7qUT/DXTo/AByPRjoyOlcr3sDnTj+EywDJRxu0XproIR9okcDpb0n2hhozOtcb1YGGvUy1w8GmhL7Kz/vAOW/oSFJkiRJkiRJkk49ARibQNW05n+0AAAAAElFTkSuQmCC" 
            style={{ height:'100px', width: '100px', borderRadius: '10px'}} className="w-100 db outline black-10 center"></img>
                    <dl className="mt2 f6 lh-copy">
                    <dt className="clip">Title</dt>
                    <dd className="ml0 black truncate w-100">{`${side}`}</dd>
                    <dt className="clip">{`${side}`}</dt>
                    <dd className="ml0 gray truncate w-100"></dd>
                </dl>
            </div>
        </div>
        )
    };

    renderImageClass(img_classification) {
        let previewImage = this.props.imageList.find(image => image.classification===img_classification);
        let previewURL = `http://localhost:3001/img/${previewImage.id}`;

        return (
            <AlbumListCarD 
            classification={img_classification} 
            previewURL={previewURL} 
            selectClassification={this.props.selectClassification}
            />
        );
    };
    renderImageClassList() {
        let classificationCards = this.props.imageClass.map(img_classification => this.renderImageClass(img_classification));
        return [this.renderButton('left') ,...classificationCards, this.renderButton('right')];
    };
    render() {
        return (
            <div className="center">
                <div id="albumList" className="mw9" ref={this.myRef}>
                    {this.renderImageClassList()}
                </div>
            </div>
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

export default connect(mapStateToProps, { fetchImageList, selectClassification })(AlbumList);