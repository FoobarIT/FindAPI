import React from 'react'
import {Card, Elevation, NonIdealState} from '@blueprintjs/core'

const UnknownSearch = (props) => {
  return (
    <NonIdealState>
      <div className="bp4-non-ideal-state">
        <div className="bp4-non-ideal-state-visual noResult">
            <box-icon name='search-alt-2' color='#394b59' size='60' ></box-icon>
        <div/>
      <h4 className="bp4-heading">No search results</h4></div>
    </NonIdealState>
  )
}

const Output = (props) => {
  const options = props.results && props.results.map((r, i) => (  
    <Card className="cardModifier bp3-dark" interactive={false} elevation={Elevation.TWO} key={i+1}>
        <h2>{r.API}</h2>
        <p>Description: {r.Description}</p>
        <p>Category: {r.Category}</p>
        <hr />
        <p>Auth: {r.Auth.length === 0 ? 'null' : r.Auth} </p>
        <p>Cors: {r.Cors}</p>
        <a className="bp3-button" target="_blank" rel="noopener noreferrer" href={`${r.Link}`}><i className="lni-enter"></i> <span>Visit Website</span></a>
    </Card>
  ))
  

  return <ul>{options}</ul>
}

export {Output, UnknownSearch}
