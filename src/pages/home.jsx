import { ArrowRight, ContactForm, LocationMap } from '../components.jsx';

export default function Page() {
  return (<main id="tm-main" >
  <div className="uk-section-default uk-section uk-padding-remove-vertical" >
    <div className="uk-container uk-container-xlarge uk-padding-remove-horizontal" >
      <div className="uk-grid tm-grid-expand uk-grid-collapse uk-child-width-1-1" >
        <div className="uk-grid-item-match uk-width-1-1" >
          <div className="uk-tile-muted uk-tile uk-flex uk-flex-middle" >
            <div className="uk-panel uk-width-1-1" >
              <h1 className="uk-h2 uk-margin-small uk-width-xlarge uk-margin-auto@m uk-margin-auto uk-text-center@m uk-text-center" >
                {" Gute Qualität zu einem vernünftigen Preis "}
              </h1>
              <div className="uk-divider-small uk-text-center@m uk-text-center uk-margin-medium" />
              <div className="uk-panel uk-margin-medium uk-width-large uk-margin-auto@m uk-margin-auto uk-text-center@m uk-text-center" >
                <p style={{"textAlign":"center"}} >
                  {"Unser langjährigen Erfahrungen umfasst die gesamte Elektro-Technik mit Fachberatung, Planung, Installation Telekommunikations-Sprech- u. Videoanlagen, EDV-Netzwerke, Glasfaser- u. Beleuchtungs-Technik sowie Kundendienst."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="uk-section-primary uk-section" >
    <div className="uk-container" >
      <div className="uk-grid-margin uk-grid tm-grid-expand uk-child-width-1-1" >
        <div className="uk-width-1-1" >
          <h2 className="uk-h3 uk-text-center" >
            {" Unsere Aufgabengebiete "}
          </h2>
          <div className="uk-margin uk-text-center" >
            <div className="uk-grid uk-child-width-1-1 uk-child-width-1-4@m uk-flex-center uk-flex-middle uk-grid-match services-grid" >
              <div >
                <div className="el-item uk-margin-auto uk-width-medium uk-panel uk-margin-remove-first-child" >
                  <picture >
                    <source type="image/webp" srcSet="/assets/2c116fec42-beleuchtung-c93ec3d6.webp 100w" sizes="(min-width: 70px) 70px" />
                    <img decoding="async" className="el-image" src="/assets/ce61414bfc-beleuchtung-f4898b33.png" alt="" loading="lazy" width="70" height="70" />
                  </picture>
                  <h4 className="el-title uk-h4 uk-heading-divider uk-font-default uk-text-secondary uk-margin-small-top uk-margin-remove-bottom" >
                    {" Beleuchtungstechnik "}
                  </h4>
                  <div className="el-content uk-panel uk-margin-small-top" >
                    <p >
                      {"Wir planen, liefern und installieren Ihnen "}
                      <strong >
                        {"intelligente Lichtlösungen"}
                      </strong>
                      {" mit "}
                      <strong >
                        {"stromsparender LED-Technik"}
                      </strong>
                      {" mit Funktionen wie z.B. "}
                      <strong >
                        {"Dimmbarkeit und Farbänderung"}
                      </strong>
                      {" für Büro oder Privathaushalt."}
                    </p>
                  </div>
                </div>
              </div>
              <div >
                <div className="el-item uk-margin-auto uk-width-medium uk-panel uk-margin-remove-first-child" >
                  <picture >
                    <source type="image/webp" srcSet="/assets/956e8011ea-altbausanierung-8679ce8a.webp 100w" sizes="(min-width: 70px) 70px" />
                    <img decoding="async" className="el-image" src="/assets/5cebd609aa-altbausanierung-88877623.png" alt="" loading="lazy" width="70" height="70" />
                  </picture>
                  <h4 className="el-title uk-h4 uk-heading-divider uk-font-default uk-text-secondary uk-margin-small-top uk-margin-remove-bottom" >
                    {" Altbausanierung "}
                  </h4>
                  <div className="el-content uk-panel uk-margin-small-top" >
                    <p >
                      {"Wir realisieren Sanierungen gemäß neuesten Standards, Leitungsnetze, Bussysteme z.B. KNX, EIB, Zähleranlagen und Verteilungen, Autoladestationen (Wallbox mit Bezahlmanagement) sowie Photovoltaik."}
                    </p>
                  </div>
                </div>
              </div>
              <div >
                <div className="el-item uk-margin-auto uk-width-medium uk-panel uk-margin-remove-first-child" >
                  <picture >
                    <source type="image/webp" srcSet="/assets/79376bfdf3-datentechnikk-9095b459.webp 100w" sizes="(min-width: 70px) 70px" />
                    <img decoding="async" className="el-image" src="/assets/cc2686c791-datentechnikk-c77fa8f8.png" alt="" loading="lazy" width="70" height="70" />
                  </picture>
                  <h4 className="el-title uk-h4 uk-heading-divider uk-font-default uk-text-secondary uk-margin-small-top uk-margin-remove-bottom" >
                    {" Datentechnik "}
                  </h4>
                  <div className="el-content uk-panel uk-margin-small-top" >
                    <p >
                      {"Wir planen, liefern und installieren mit einer durchdachten Auswahl von Komponenten zukunftstaugliche Daten- und Netzwerktechnik – Telefon und Datennetze, in Kupfer und Glasfaser."}
                    </p>
                  </div>
                </div>
              </div>
              <div >
                <div className="el-item uk-margin-auto uk-width-medium uk-panel uk-margin-remove-first-child" >
                  <picture >
                    <source type="image/webp" srcSet="/assets/24c3ebb706-notbeleuchtung-1c233d77.webp 100w" sizes="(min-width: 70px) 70px" />
                    <img decoding="async" className="el-image" src="/assets/aa9e269eab-notbeleuchtung-c21f59e0.png" alt="" loading="lazy" width="70" height="70" />
                  </picture>
                  <h4 className="el-title uk-h4 uk-heading-divider uk-font-default uk-text-secondary uk-margin-small-top uk-margin-remove-bottom" >
                    {" Netzersatz und Notbeleuchtung "}
                  </h4>
                  <div className="el-content uk-panel uk-margin-small-top" >
                    <p >
                      {"Sicherheitsrelevante Anlagen, die mit Strom betrieben werden, müssen auch im Fall eines Stromausfalls funktionieren. Für die Sicherheit von Menschen und Gebäuden Planen und montieren wir Notbeleuchtung und Batterieanlagen."}
                    </p>
                  </div>
                </div>
              </div>
              <div >
                <div className="el-item uk-margin-auto uk-width-medium uk-panel uk-margin-remove-first-child" >
                  <picture >
                    <source type="image/webp" srcSet="/assets/89b627fc88-sprechnanlagen-0e199ed7.webp 90w" sizes="(min-width: 70px) 70px" />
                    <img decoding="async" className="el-image" src="/assets/c05185d5d7-sprechnanlagen-150d6f1b.png" alt="" loading="lazy" width="70" height="70" />
                  </picture>
                  <h4 className="el-title uk-h4 uk-heading-divider uk-font-default uk-text-secondary uk-margin-small-top uk-margin-remove-bottom" >
                    {" Sprech-, Videoanlagen "}
                  </h4>
                  <div className="el-content uk-panel uk-margin-small-top" >
                    <p >
                      {"Mehr Sicherheit für Sie und Ihr Heim bietet eine moderne und leistungsfähige Türkommunikation Wir modernisieren Ihre Klingelanlage ohne viel Aufwand in eine Videoanlage eine Sprech-Videoanlage mit Audio und Video auf Ihr Smartphone Wissen wer klingelt, sprechen und ggf. öffnen egal wo sie sich befinden Zutrittskontrolle ohne mechanischen Schlüssel, Fingerprint oder ähnlich"}
                    </p>
                  </div>
                </div>
              </div>
              <div >
                <div className="el-item uk-margin-auto uk-width-medium uk-panel uk-margin-remove-first-child" >
                  <picture >
                    <source type="image/webp" srcSet="/assets/78937f67f9-alarm-b2caa009.webp 100w" sizes="(min-width: 70px) 70px" />
                    <img decoding="async" className="el-image" src="/assets/9166059d3f-alarm-e5473ef3.png" alt="" loading="lazy" width="70" height="70" />
                  </picture>
                  <h4 className="el-title uk-h4 uk-heading-divider uk-font-default uk-text-secondary uk-margin-small-top uk-margin-remove-bottom" >
                    {" Alarmanlagen "}
                  </h4>
                  <div className="el-content uk-panel uk-margin-small-top" >
                    <p >
                      {"Wir bieten Alarm- und Einbruch-Meldetechnik, Alarmanlagen mit VDS Zulassung, Funk- und Drahtsysteme Videoüberwachung."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="uk-section-default uk-section uk-section-large" >
    <div className="uk-container" >
      <div className="uk-grid tm-grid-expand uk-child-width-1-1 uk-margin-remove-vertical" >
        <div className="uk-width-1-1@s uk-width-1-1@m" >
          <h2 className="uk-h2 uk-text-center" >
            {" Partner "}
          </h2>
          <div className="uk-text-center" >
            <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@s uk-flex-center uk-flex-middle uk-grid-large uk-grid-match" >
              <div >
                <div className="el-item uk-panel uk-margin-remove-first-child" >
                  <picture >
                    <source type="image/webp" srcSet="/assets/4f31250da2-siedle-e8ba2255.webp 200w, /assets/70cc7a14a7-siedle-a2b3e462.webp 400w" sizes="(min-width: 200px) 200px" />
                    <img decoding="async" className="el-image" src="/assets/9f9daf3777-siedle-b0c27025.png" alt="" loading="lazy" width="200px" height="200px" />
                  </picture>
                  <div className="el-meta uk-text-meta uk-margin-top" >
                    {"Klingel-Sprech- Videoanlage"}
                  </div>
                </div>
              </div>
              <div >
                <div className="el-item uk-panel uk-margin-remove-first-child" >
                  <picture >
                    <source type="image/webp" srcSet="/assets/e23d91e404-gira-45fb5390.webp 200w, /assets/5263e96ad9-gira-9e755061.webp 400w" sizes="(min-width: 200px) 200px" />
                    <img decoding="async" className="el-image" src="/assets/a92be2a75e-gira-cb5ecc5f.jpg" alt="" loading="lazy" width="200px" height="200px" />
                  </picture>
                  <div className="el-meta uk-text-meta uk-margin-top" >
                    {"Schalterprogramme, Bussysteme"}
                  </div>
                </div>
              </div>
              <div >
                <div className="el-item uk-panel uk-margin-remove-first-child" >
                  <picture >
                    <source type="image/webp" srcSet="/assets/4b94f30e24-hanger-aa3415bc.webp 200w, /assets/17b35f3469-hanger-582fa7b3.webp 400w" sizes="(min-width: 200px) 200px" />
                    <img decoding="async" className="el-image" src="/assets/d258e1afdf-hanger-b540e648.jpg" alt="" loading="lazy" width="200px" height="200px" />
                  </picture>
                  <div className="el-meta uk-text-meta uk-margin-top" >
                    {"Verteiler und Zähleranlagen, Bussysteme"}
                  </div>
                </div>
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
