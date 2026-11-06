import { ArrowRight, ContactForm, LocationMap } from '../components.jsx';

export default function Page() {
  return (<main id="tm-main" >
  <div className="uk-section-default uk-section" >
    <div className="uk-container" >
      <div className="uk-container" id="topics" >
        <div className="uk-grid tm-grid-expand uk-child-width-1-1" >
          <div className="uk-grid-item-match uk-flex-middle uk-width-1-1" >
            <div className="uk-panel uk-width-1-1" >
              <h1 className="uk-heading-small uk-heading-divider uk-width-xlarge uk-margin-auto uk-text-center" >
                {" Über Uns "}
              </h1>
              <div className="uk-panel uk-text-primary uk-margin-remove-top uk-width-large uk-margin-auto" >
                <p style={{"textAlign":"center"}} >
                  {"Die Firma HIMA Elektro Technik GmbH"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="uk-section-primary uk-section" >
    <div className="uk-container uk-container-large" >
      <div className="uk-grid-margin uk-grid tm-grid-expand" >
        <div className="uk-grid-item-match uk-flex-middle uk-width-1-2@s uk-width-1-2@m" >
          <div className="uk-panel uk-width-1-1" >
            <div className="uk-margin uk-text-center" >
              <picture >
                <source type="image/webp" srcSet="/assets/a8288774ae-C8D77124-4335-48B4-85CF-6C6E2A8BB9B6_1_201_a-scaled-789aa95e.webp 480w, /assets/1cb747817e-C8D77124-4335-48B4-85CF-6C6E2A8BB9B6_1_201_a-scaled-1f8926b6.webp 768w, /assets/b608012927-C8D77124-4335-48B4-85CF-6C6E2A8BB9B6_1_201_a-scaled-56d955f5.webp 960w" sizes="(min-width: 480px) 480px" />
                <img decoding="async" className="el-image" src="/assets/85b2bcf4ff-C8D77124-4335-48B4-85CF-6C6E2A8BB9B6_1_201_a-scaled-ffa47d2b.jpeg" alt="Meisterbrief im Elektrotechniker-Handwerk von Florian Hildebrandt" loading="lazy" width="480" height="600" />
              </picture>
            </div>
          </div>
        </div>
        <div className="uk-grid-item-match uk-flex-middle uk-width-1-2@s uk-width-1-2@m" >
          <div className="uk-panel uk-width-1-1" >
            <div className="uk-panel uk-text-secondary uk-margin-medium" >
              <p style={{"textAlign":"left"}} >
                {"Die Firma HIMA Elektro Technik GmbH wurde 1997 in Frankfurt-Griesheim gegründet."}
              </p>
              <p style={{"textAlign":"left"}} >
                {"Das Aufgabengebiet umfasst die gesamte Elektro-Technik mit Fachberatung, Planung, Installation Telekommunikations-Sprech- u. Videoanlagen, EDV-Netzwerke, Glasfaser- u. Beleuchtungs-Technik sowie Kundendienst."}
              </p>
              <p style={{"textAlign":"left"}} >
                {"Neben den von der Handwerkskammer und Stadtwerken geforderten Konzessionen ist die Firma HIMA seit Juni 2000 im Besitz des Europäischen-Installations-Bus "}
                <strong >
                  {"–EIB- "}
                </strong>
                {"Partner Zertifikats."}
              </p>
              <p style={{"textAlign":"left"}} >
                {"Zurzeit nimmt das Unternehmen an den zum Erwerb der Zertifikation ISO 9000 / 2000 notwendigen PIMM Seminaren der Handwerkskammer Rhein/Main im Rahmen des europäischen Pilotprojektes teil, mit dem Ziel der Zertifizierung"}
              </p>
              <p style={{"textAlign":"left"}} >
                {"Ihr 25-jähriges Firmenjubiläum feierte die HIMA Elektro Technik GmbH in Griesheim im Jahr 2022"}
              </p>
              <p style={{"textAlign":"left"}} >
                {"Nicht zuletzt die Firmenstrategie, "}
                <strong >
                  {"„Gute Qualität zu einem vernünftigen Preis“"}
                </strong>
                {", hat dabei dazu beigetragen, dass es gelungen ist, die Firma in einer keineswegs glorreichen Zeit, so hervorragend am Markt zu etablieren."}
              </p>
              <p style={{"textAlign":"left"}} >
                {"Ständige Schulungen der Mitarbeiter, in einer sich fast täglich änderten Technologie, sind dabei eine notwendige Selbstverständlichkeit."}
              </p>
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
                  {"Nutzen Sie das Kontaktformular!"}
                  <br />
                  {"Ich freue mich darauf, Ihnen ein modernes und zukunftssicheres Konzept mit einem kostengünstigen Angebot zu erstellen."}
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
