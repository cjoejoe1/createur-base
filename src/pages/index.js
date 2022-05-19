import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Row} from "react-bootstrap";


const IndexPage = () => (
  <Layout>

    <Seo title="Accueil" />
    <Container>
      <Row>
        <div id='homeImg'>
          <StaticImage src="../images/createur-rocket.png" width={100} quality={100} alt="Createur" placeholder='NONE'/>
        </div>
      </Row>
    </Container>

  </Layout>
)

export default IndexPage
