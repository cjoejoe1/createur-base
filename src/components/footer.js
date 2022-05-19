import React from 'react'

const footer = () => {
  return (
    <footer>
        © {new Date().getFullYear()} &middot; Built with
        {` `}
        <a href="https://www.createur.com/">Createur</a>
    </footer>
  )
}

export default footer