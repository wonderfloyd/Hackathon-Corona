import {Component, h} from '@stencil/core';

console.log('src/components/app-root/app-root.tsx');

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>Video Store</h1>
        </header>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/video/:id' component='video-page' />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <span>src/components/app-root/app-root.tsx</span>
      </div>
    );
  }
}
