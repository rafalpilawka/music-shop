import React, {useEffect, useState, useReducer} from 'react'

const INITIAL_STATE = {
  user: null,
  searchQuery: 'bot'
}

const reducer = (state, action)=>{
  switch (action.type) {
    case 'SET_USER':
      return{
        ...state,
        user: action.payload
      }
    case 'SET_QUERY':
      return{
        ...state,
        searchQuery: action.payload
      }
    default:
      break;
  }
}

const setUser = user =>({
  type: 'SET_USER',
  payloaf: user
})
const setUser = query =>({
  type: 'SET_QUERY',
  payloaf: query
})

export const useHooksPatterns = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const {user, searchQuery}= state;
  const user = useFetch('url params')
  // USE EFFECT PATTERN FOR FETCHING
  useEffect(() => {
    const fetchres = async () => {
      const res = await fetch(url)
      const posts = await res.json()
      return dispatch(setPosts(post[0]))
    }
    fetchres()
  }, [])
  return (
    <div>
      HooksPaterns
    </div>
  )
}

export const useFetch = (inputUrl) =>{
  const [data, setData] = setState(null)
  useEffect(() => {
    const fetchres = async () => {
      const res = await fetch(inputUrl)
      const posts = await res.json()
      return setData(post[0])
    }
    fetchres()
      , [inputUrl]
  })
  return data
}




