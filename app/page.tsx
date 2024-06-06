import React from 'react'
import Content from './(components)/content/content'
import Features from './(components)/features/features'

export default function landingPage() {
  return (
    <div>
      <div className="landingPage1">
        <div className="list">

          <ul >
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="heading">
          <h5>Startup 3</h5>
          <h1>Forget About Code</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, impedit. Ducimus autem eligendi incidunt provident dolore necessitatibus, repudiandae facilis nulla eius quasi, perferendis nisi, voluptatum quos debitis laudantium libero iusto</p>
          <button >Create an Account</button>
        </div>
      </div>
      <Content/>
      <Features/>


    </div>
  )
}
