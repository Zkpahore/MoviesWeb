import React from 'react'
const users =[
  {
    id: 1,
    name: 'mike',
    age: 22,
    avail: true
  },
  {
    id: 2,
    name: 'joe',
    age: 34,
    avail: false
  },
  {
    id: 3,
    name: 'john',
    age: 37,
    avail: true
  }
];
const App = () => {
 const items = users.map(user => 
  <li key={user.id} style={{color: user.avail ? 'blue' : 'red'}}>Name- {user.name}  _  Age- {user.age}</li>
  )
  return (
    <div>
      <ul>{items}</ul>
      
      {/* {users.map((user) => (
<div key={user.id}>
<p>{user.name}</p>
<p>{user.age}</p>
</div>
      ))} */}
    </div>
  )
}

export default App
