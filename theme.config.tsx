import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  head: (
    <>
      <title>Spalla API</title>
      <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1635649856/team/88326d517986c17ae791cb5eae678761bc5f04f77198730c0d6fad9ee5ba9a6f"/>
    </>
  ),

  logo: (
    <>
      <img src="https://res.cloudinary.com/postman/image/upload/t_team_logo/v1635649856/team/88326d517986c17ae791cb5eae678761bc5f04f77198730c0d6fad9ee5ba9a6f"
      alt="Spalla Logo"
      height={45}
      width={45}/>
    </>
  ),

  docsRepositoryBase: "https://github.com/matheusgbt/doc-spalla-api/tree/main",

  footer: {
    text: `Documentação Spalla API - ${new Date().getFullYear()}`,
  }
}

export default config