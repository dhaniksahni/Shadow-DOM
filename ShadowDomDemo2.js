class CustomButton extends HTMLElement {
    constructor() {
      super();
      
      const shadowRoot= this.attachShadow({mode: 'open'});
      const styles=`
          :host {
              position: relative;
              font-family: sans-serif;
          }

          #custom-button {
            position: relative;
            background-color: #4CAF50;
            border: none;
            font-size: 28px;
            color: #FFFFFF;
            padding: 20px;
            width: 200px;
          }
        
      `;
      shadowRoot.innerHTML = `
      <style>${styles}</style>
      <button id='custom-button'> Custom Button </button>`;
    }    
  }
  customElements.define("custom-button", CustomButton);
