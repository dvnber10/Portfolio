import React from 'react'
import '../Styles/Info.scss'
import face from'../Images/facebook.png'
import git from '../Images/github (1).png'
import insta from '../Images/instagram.png'
import wh from '../Images/whatsapp (1).png'
import link from '../Images/linkedin.png'

function Info() {
  return (
    <div>
        <div className='cont'>
            <div >
                <h1>Edgar Duvan Bernal Acero</h1>
                <img className='img-perfil' src="https://avatars.githubusercontent.com/u/112027240?v=4" alt="" />
            </div>
            <div>
                <div className='Description'>
                    <h2>Junior Backend Devloper</h2>
                    <p>I build web aplications  and web services reliably with design, development and maintenance of logic and infrastructure </p>
                </div>
                <div className='social-icons'>
                    <img className='image' src={face}  alt="" />
                    <img className='image' src={wh} alt="" />
                    <img className='image' src={insta} alt="" />
                    <img className='image' src={git} alt="" />
                    <img className='image' src={link} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info