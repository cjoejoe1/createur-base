import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Non disponible</h1>
    <p>Vous avez trouvé une page qui n'existe pas.</p>
  </Layout>
)

export default NotFoundPage
