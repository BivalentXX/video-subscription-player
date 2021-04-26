import React from 'react'
import { useContent } from '../hooks/useContent'
import selectionFilter from '../utils/selectionFilter'
import { BrowseContainer } from '../containers'

export default function Browse() {
  const { series } = useContent('series')
  const { films } = useContent('films')

  const slides = selectionFilter({ series, films});
  
  return (
    <>
    <BrowseContainer slides={slides} />
    
    </>
  )
}
