import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'video-page',
  styleUrl: 'video-page.css',
  // shadow: true
})
export class VideoPage {
  @Prop() match: MatchResults; //identical in concept to Angular’s @Input
  @Prop() video: any;

  connectedCallback() {
    const videoId = this.match.params.id;
    console.log('Get Video ' + videoId);
    fetch('/api/videos/' + videoId)
      .then((response: Response) => response.json())
      .then(response => {
        console.log('Video: ' + JSON.stringify(response));
        this.video = response;
      });
  }

  render() {
    return (
      <div class="video-page">
        <h1>Video Page</h1>
        <form>
          <label>Title</label>
          <input class="form-control" type="text" value={this.video ? this.video.title : ""}/>
        </form>
        <form>
          <label>Description</label>
          <textarea class="form-control" value={this.video ? this.video.description : ""}/>
        </form>
        <span>src/components/video-page/video-page.tsx</span>
      </div>
    );
  }
}
