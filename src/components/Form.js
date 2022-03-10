import React, { Component } from 'react'

//minuto 2
//https://www.udemy.com/course/react-with-hooks-for-beginners/learn/lecture/28305280#content

export default class Form extends Component {
  render() {
    return (
      <form>
          <input id='name' type="text" />
          <input type="submit"/> 
      </form>
    )
  }
}
