export default function Footer() {
 return (<footer >
  <div className="uk-section-default uk-section" >
    <div className="uk-container" >
      <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-large" >
        <div className="uk-width-1-1@m" >
          <hr />
          <div className="uk-panel uk-margin" >
            <ul className="uk-margin-remove-bottom uk-subnav  uk-subnav-divider uk-flex-center" >
              <li className="el-item uk-first-column" >
                <a className="el-link" href="/datenschutz/" >
                  {"Datenschutzerklärung"}
                </a>
              </li>
              <li >
                <a href="/cookie-richtlinie-eu/" >
                  {"Cookie-Richtlinie"}
                </a>
              </li>
              <li className="el-item" >
                <a className="el-link" href="/impressum/" >
                  {"Impressum"}
                </a>
              </li>
              <li className="el-item" >
                <a className="el-link" href="/kontakt/" >
                  {"Kontakt"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="uk-grid tm-grid-expand uk-margin" >
        <div className="uk-width-1-2@m" >
          <div className="uk-margin-remove-vertical uk-text-left@s uk-text-center" >
            <a className="el-link" href="#top" aria-label="Zurück nach oben" >
              <picture >
                <source type="image/webp" srcSet="/assets/e20ea5b066-logo-56cb2f3b.webp 150w, /assets/22811c4346-logo-c1ba9532.webp 300w" sizes="(min-width: 150px) 150px" />
                <img className="el-image" src="/assets/1c36cf5bf9-logo-f101f054.png" alt="" loading="lazy" width="150" height="63" />
              </picture>
            </a>
          </div>
        </div>
        <div className="uk-grid-item-match uk-flex-middle uk-width-1-2@m" >
          <div className="uk-panel uk-width-1-1" >
            <div className="uk-panel uk-margin uk-text-left@s uk-text-center" >
              <p style={{"textAlign":"right"}} >
                {"© "}
                {new Date().getFullYear()}
                {" HIMA Elektro Technik GmbH. All rights reserved."}
                <br className="uk-hidden@s" />

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>);
}
