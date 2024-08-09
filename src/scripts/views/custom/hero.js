class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .hero {
          display: flex;
          min-height: 400px;
          width: 100%;
          background-color: #fffbda;
          background-image: url("../images/hero-image_2-large.jpg");
          align-items: center;
          text-align: center;
        }

        .hero_inner {
          margin: 0 auto;
          max-width: 100%;
        }

        .hero_title {
          text-align: center;
          color: rgb(208, 22, 22);
          text-shadow: 2px 1px 1px #ffedcb;
          font-weight: 600;
          font-size: 5vw;
          max-width: 800px;
        }

        .hero_tagline {
          color: rgb(208, 22, 22);
          background-color: #ffedcb;
          margin-top: 16px;
          font-size: 23px;
          font-weight: 800;
          border-radius: 10px;
          padding: 10px;
        }

        .explore_list {
          width: 100%;
        }

        .explore_title {
          text-align: center;
          font-size: 30px;
          font-weight: 800;
          margin-top: 20px;
          color: #1a4d2e;
        }

        .fa-pepper-hot {
          color: #c63d2f;
        }

        @media only screen and (max-width: 650px) {
          .hero {
            background-image: url("../images/hero-image_2-small.jpg");
          }
        }

        @media only screen and (min-width: 651px) {
          .hero {
            background-image: url("../images/hero-image_2-large.jpg");
          }
        }
      </style>

      <div class="hero">
        <div class="hero_inner">
          <h1 class="hero_title">Selamat Datang</h1>
          <p class="hero_tagline">
            Temukan Petualangan Rasa di Setiap Sudut Nusantara!!
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-image', Hero);
