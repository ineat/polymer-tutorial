import {
  html,
  PolymerElement
} from '@polymer/polymer/polymer-element.js';

/**
 * `my-progress-bar`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyProgressBar extends PolymerElement {
  static get template() {
    return html `
      <style>
        :host {
          display: block;
        }
        .progress {
          height: var(--progressbar-height, 3em);
          width: 100%;
          background-color: var(--progressbar-background, black);
          position: relative;
        }

        .progress:before {
          content: attr(data-label);
          font-size: var(--progressbar-font-size, 1.5em);
          font-family: Arial;
          color: var(--progressbar-text-color, white);
          position: absolute;
          text-align: center;
          top: var(--progressbar-top-position, 10px);
          left: 0;
          right: 0;
        }

        .progress .value {
          background-color: var(--progressbar-value-background, #eb1e54);
          display: inline-block;
          height: 100%;
        }
      <div class="progress" data-label="50% Complete">
        <span class="value" style="width:50%;"></span>
      </div>
    `;
  }
}

window.customElements.define('my-progress-bar', MyProgressBar);
