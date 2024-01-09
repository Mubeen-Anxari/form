
import { contactTypes } from '@/types/componentstypes'
import React from 'react'

export default function Displaydata(props:contactTypes) {
  return (
    <div>
      <h1>Name:{props.name}</h1>
      <h1>Email:{props.email}</h1>
    </div>
  )
}
