import React, { Component } from 'react';
import { connect } from 'react-redux';

class AlbumListCarD extends Component {
    render() {
        return (
            <div key={this.props.classification}
            className="fl w-50 w-25-m w-20-l pa2 bg-white class_card" 
            style={{height:'150px', width:'150px'}}
            onClick={()=>this.props.selectClassification(this.props.classification)}>
                <div className="db link dim tc center" style={{height:'110px', width:'110px'}}>
                <img src={this.props.previewURL} style={{ height:'100px', width: '100px', borderRadius: '10px'}} className="w-100 db outline black-10 center"></img>
                        <dl className="mt2 f6 lh-copy">
                        <dt className="clip">Title</dt>
                        <dd className="ml0 black truncate w-100">{this.props.classification}</dd>
                        <dt className="clip">{this.props.classification}</dt>
                        <dd className="ml0 gray truncate w-100"></dd>
                    </dl>
                </div>
            </div>
        );
    }

};

export default AlbumListCarD;