import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss'
})
export class AppHome {
  @Prop() videos: any = [];

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
        {this.videos.map((video) =>
          <ul>
            <li>
              <stencil-route-link url={`/video/${video._id}`}>
                {video.title}
              </stencil-route-link>
            </li>
          </ul>
        )}
        <span>src/components/app-home/app-home.tsx</span>
      </p>
    );
  }

}
