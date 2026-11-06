import { ArrowRight, ContactForm, LocationMap } from '../components.jsx';

export default function Page() {
  return (<main id="tm-main" >
  <div className="uk-section-default uk-section uk-section-medium-top uk-padding-remove-bottom" >
    <div className="uk-container" >
      <div className="uk-container" id="topics" >
        <div className="uk-grid tm-grid-expand uk-child-width-1-1" >
          <div className="uk-grid-item-match uk-flex-middle uk-width-1-1" >
            <div className="uk-panel uk-width-1-1" >
              <h1 className="uk-heading-small uk-heading-divider uk-width-xlarge uk-margin-auto uk-text-center" >
                {" Kontakt "}
              </h1>
              <div className="uk-panel uk-text-primary uk-margin-remove-top uk-width-large uk-margin-auto" >
                <p style={{"textAlign":"center"}} >
                  {"Wir freuen uns auf Ihre Nachricht."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="location" className="uk-section-default uk-section" >
    <div className="uk-container" >
      <div className="uk-grid-margin uk-grid tm-grid-expand" >
        <div className="uk-grid-item-match uk-width-1-2@m" >
          <div className="uk-tile-primary uk-tile" >
            <h3 className="uk-text-center@m uk-text-center" >
              {" HIMA Elektro Technik GmbH "}
            </h3>
            <div className="uk-h5 uk-margin-remove-vertical uk-text-left@m uk-text-center" >
              <p >
                {"Ahornstr. 54a "}
                <br />
                {"65933 Frankfurt am Main"}
              </p>
            </div>
            <div className="uk-h5 uk-margin-remove-vertical uk-text-left@m uk-text-center" >
              <a className="el-link uk-link-reset" href="tel:+496938998649" >
                <p >
                  {"Tel: 069/ 38 99 86 49"}
                </p>
              </a>
            </div>
            <div className="uk-h5 uk-margin-remove-vertical uk-text-left@m uk-text-center" >
              <p >
                {"Fax: 069/ 38 99 86 50"}
              </p>
            </div>
            <div className="uk-h5 uk-margin-remove-vertical uk-text-left@m uk-text-center" >
              <a className="el-link uk-link-reset" href="mailto:info@hima-elektro.de" >
                <p >
                  {"info(at)hima-elektro.de"}
                </p>
              </a>
            </div>
            <div className="uk-margin" >
              <LocationMap />
            </div>
          </div>
        </div>
        <div className="uk-grid-item-match uk-width-1-2@m" >
          <div className="uk-tile-primary uk-tile" >
            <div className="uk-panel uk-margin" >
              <p style={{"textAlign":"center"}} >
                {"Nutzen Sie unser Kontaktformular !"}
                <br />
                {"Wir freuen uns auf Ihre Nachricht."}
              </p>
              <ContactForm application={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>);
}
