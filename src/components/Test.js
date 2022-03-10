import React, { useEffect } from 'react'

export default function Test() {

    //everytime
    //useEffect(() =>{
    //    console.log("asd")
    //})

    //Solo es llamado la primera vez
    //useEffect(() =>{
    //    console.log("asd")
    //}, [])

    //Solo es llamado la primera vez con condicion
    //cada vez que testVar se modifica
    useEffect(() =>{
        console.log("asd")
    }, [{/*testVar*/}])

  return (
    <div>Test</div>
  )
}
