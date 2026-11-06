import { ArrowRight, ContactForm, LocationMap, Masonry } from '../components.jsx';

export default function Page() {
  return (<main id="tm-main" >
  <div className="uk-section-default uk-section uk-section-medium-top uk-padding-remove-bottom" >
    <div className="uk-container" >
      <div className="uk-container" id="topics" >
        <div className="uk-grid tm-grid-expand uk-child-width-1-1" >
          <div className="uk-grid-item-match uk-flex-middle uk-width-1-1" >
            <div className="uk-panel uk-width-1-1" >
              <h1 className="uk-heading-small uk-heading-divider uk-width-xlarge uk-margin-auto uk-text-center" >
                {" Referenzen "}
              </h1>
              <div className="uk-panel uk-text-primary uk-margin-remove-top uk-width-large uk-margin-auto" >
                <p style={{"textAlign":"center"}} >
                  {"Auswahl aus der Referenzliste unserer Kunden"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="uk-section-default uk-section" >
    <div className="uk-container" >
      <div className="uk-container uk-container-xlarge uk-padding-remove-horizontal uk-margin-remove-vertical" >
        <div className="uk-grid tm-grid-expand uk-grid-column-collapse uk-child-width-1-1" >
          <div className="uk-grid-item-match uk-width-1-1" >
            <div className="uk-tile-primary uk-preserve-color uk-tile" >
              <div className="uk-margin-remove-vertical uk-text-center" >
                <Masonry className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m uk-child-width-1-4@l uk-grid-small" >
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" S. FISCHER Verlag GmbH "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung Redaktion und Liegenschaft"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Lion Investments S.A "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaften"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Cushman & Wakefield "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p style={{"fontWeight":"400"}} >
                          {"Neuinstallationen komplett mit Beleuchtung, Datentechnik etc. Büros, Schulen, Labore"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Alte Leipziger Versicherung "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Beratung, Planung, Installation, Kundendienst in allen Liegenschaften im Rhein/Main Gebiet, sowie Baustellen gesamte BRD"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" ATM Airsys / Thales "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Installationen für die Deutsche Flugsicherung"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Barclay "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Elektroinstallationen , EDV Netzwerke"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Bosch Siemens Hausgeräte GmbH "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaft, EDV Netzwerke"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Bürohaus Immobilien Gesellschaft "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Beratung , Planung, Installation, Kundendienst, EDV Netzwerke in allen Liegenschaften BRD"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Chemetall GmbH "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"(vormals Metallgesellschaft) Betreuung der Liegenschaft, Installation Laborbereiche, EIB Systeme."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Chemson GmbH "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"(vormals Metallgesellschaft) Betreuung der Liegenschaft, Installation Laborbereiche"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Clariant GmbH "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"(vormals Farbwerke Höchst) Werk Griesheim."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" CWW Gerko Automotive "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Elektro- Neuinstallationen"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" DAK "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaften"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Deutsche Landwirtschaft Gesellschaft e.V "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaften"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Diverse Architekten "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Beratung, Planung , Installation, Kundendienst, EIB Systeme in Liegenschaften im Rhein/Main Gebiet"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Frankfurter Inkasso "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaft"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" GTG Hausverwaltung der Deutschen Bank "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaften"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Hausverwaltungen diverse "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaften"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Jobs & Adverts Internet "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"EDV Netzwerke"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Ladengeschäfte in Frankfurt z.B. Zeil, Goethe – und Schillerstraße "}
                      </h4>
                      <div className="el-meta uk-text-meta uk-margin-small-top" >
                        {"Ladengeschäfte in Frankfurt z.B. Zeil, Goethe – und Schillerstraße"}
                      </div>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaften"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" MVG "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"(vormals Metallgesellschaft) Betreuung der Liegenschaft, Installation Werkstätten."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" OAR Consulting Internetbanking "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaft, EDV Netzwerke"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Siemens AG Abt. SIM "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Beratung, Planung , Installation, Kundendienst, in Liegenschaften im Rhein/Main Gebiet"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Speer & Partner Architekten "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaft, EDV Netzwerke"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Stadt Frankfurt "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Kundendienst"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Wang Deutschland GmbH "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"EDV Netzwerke, gesamt BRD und anliegendes Ausland z.B. alle US Air Base"}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div >
                    <div className="el-item uk-card uk-card-default uk-card-body uk-margin-remove-first-child" >
                      <h4 className="el-title uk-h4 uk-heading-divider uk-margin-top uk-margin-remove-bottom" >
                        {" Wormland Kaufhaus "}
                      </h4>
                      <div className="el-content uk-panel uk-text-meta uk-margin-small-top" >
                        <p >
                          {"Betreuung der Liegenschaft"}
                        </p>
                      </div>
                    </div>
                  </div>
                </Masonry>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="uk-section-default uk-section" >
    <div className="uk-container" >
      <div className="uk-grid-margin-large uk-container uk-container-small" >
        <div className="uk-grid tm-grid-expand uk-grid-large" >
          <div className="uk-grid-item-match uk-flex-middle uk-width-3-4@m" >
            <div className="uk-panel uk-width-1-1" >
              <h2 className="uk-h1 uk-text-primary uk-text-left@m uk-text-center" >
                {" Haben Sie Fragen? "}
              </h2>
              <div className="uk-panel uk-margin uk-text-left@m uk-text-center" >
                <p style={{"textAlign":"left"}} >
                  {"Nutzen Sie unser Kontaktformular!"}
                  <br />
                  {"Wir freuen uns darauf, Ihnen ein Angebot zu erstellen."}
                </p>
              </div>
              <div className="uk-margin-medium uk-text-left@m uk-text-center" >
                <a className="el-content uk-width-1-1 uk-button uk-button-primary uk-flex-inline uk-flex-center uk-flex-middle" href="/kontakt" >
                  {" Kontaktformular "}
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="uk-width-1-4@m" />
        </div>
      </div>
    </div>
  </div>
</main>);
}
