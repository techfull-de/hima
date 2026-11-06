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
                {" Bewerbung "}
              </h1>
              <div className="uk-panel uk-text-primary uk-margin-remove-top uk-width-large uk-margin-auto" >
                <p style={{"textAlign":"center"}} >
                  {"Hier kannst Du uns Deine Unterlagen zusenden."}
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
      <div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1" >
        <div className="uk-grid-item-match uk-width-1-1" >
          <div className="uk-tile-primary uk-tile" >
            <div className="uk-panel uk-margin" >
              <ContactForm application={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>);
}
