class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos mt-5">

        <div class="py-3 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-5 align-middle">
                    <p class="mb-0" style="color: var(--light-gray);">© 2025 Shirley Mbeyu Ddaiddo</p>
                    <p class="my-0 pt-0"><a class="" href="mailto:sddaiddo@andrew.cmu.edu">sddaiddo@andrew.cmu.edu</a></p>

                </div>


                <div class="col col-md-7 text-right">
                    <p class="mb-0" style="color: var(--light-gray);">Quick Links</p>
                    <p class="my-0 pt-0">
                        <a href="https://shirleymbeyu.github.io/"><i class="mr-3 footer-icons fa-solid fa-house" aria-hidden="true"></i></a>
                        <a href="www.linkedin.com/in/shirley-ddaiddo" target="_blank"><i class="mr-3 fab footer-icons fa-linkedin" aria-hidden="true"></i></a>
                        <a href="https://github.com/shirleymbeyu" target="_blank"><i class="mr-3 fab footer-icons fa-github" aria-hidden="true"></i></a>
                    </p>
                </div>
            </div>
        </div>

    </div>
    `;
  }
}

customElements.define('footer-component', Footer);
