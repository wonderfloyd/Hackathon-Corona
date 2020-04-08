import {Component, Prop, h} from '@stencil/core';

import { Video } from '../../types';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  @Prop() videos: Video[] = [];

  connectedCallback() {
    console.log('Get Videos');
    fetch('/api/videos')
      .then((response: Response) => response.json())
      .then(response => {
        console.log('Videos: ' + JSON.stringify(response));
        this.videos = response;
      });
  }

  componentDidLoad() {//instead of ngOnInit
    console.log('AppHome component has been rendered');
  }


  render() {
    return (
      <p>
        <ul> 
          {this.videos.map((video) =>
            <li >
              <stencil-route-link data-testid={`videoLink-${video._id}`} url={`/video/${video._id}`}>
                {video.title}
              </stencil-route-link>
            </li>
          )}
        </ul>
        <span>src/components/app-home/app-home.tsx</span>
      </p>
    );
  }

}
