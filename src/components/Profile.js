import React from 'react'

export default function Profile(props) {
  return (
    <div>
        <form >
        <label>
          Name:
          <input type="text" value={props.name}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h1>hhh</h1>
    </div>
  )
}
