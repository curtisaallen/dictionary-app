import React from 'react'

export const NoFoundComponent = () => {
  return (
    <section className='error'>
       <h2>😕</h2>
       <h1>No Definitions Found</h1>
       <p>Sorry pal, we couldn't find definitions for the word you were looking for.</p>
    </section>
  )
}
