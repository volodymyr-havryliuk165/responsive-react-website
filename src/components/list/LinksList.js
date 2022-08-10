import React from 'react'
import { Link } from 'react-router-dom'
import List from './List'

const makeLinkItem = (e) => {
  return (
    <li className="list__item" key={e.id}>
      <Link className="list__link" to={e.to}>{e.name}</Link>
    </li>
  ); 
}

function LinksList({ list, title }) {
  return (
    <List list={list} title={title} maker={makeLinkItem}/>
  )
}

export default LinksList