import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `my-button`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class MyButton extends PolymerElement {
  static get template() {
    return html`
      <style>
        #dummy-button {
          width: var(--button-width, 150px);
          height: var(--button-height, 45px);
          background-color: var(--button-background-color, #eb1e54);
          color: var(--button-color, white);
          font-size: var(--button-font-size, 1.2em);
          border-radius: 5px;
          border: none;
          outline: none;
          box-shadow: 0 0 5px lightgrey;
          cursor: pointer;
        }

        /* Ripple effect */
        .ripple {
          background-position: center;
          transition: background 0.7s;
        }
        .ripple:hover {
          background: var(--button-background-ripple-color, #f55a82) radial-gradient(circle, transparent 1%, var(--button-background-ripple-color, #f55a82) 1%) center/15000%;
        }
        .ripple:active {
          background-size: 100%;
          transition: background 0s;
        }
      </style>
      <button id="dummy-button" class="ripple" type="submit" on-click="handleClick">[[text]]</button>
    `;
  }

  static get properties() {
    return {
      text: {
        type: String,
        value: 'Click on me!',
      },
    };
  }

  handleClick() {
    this.dispatchEvent(new CustomEvent('start-process'));
  }
}

window.customElements.define('my-button', MyButton);
