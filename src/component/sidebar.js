import React from 'react'
import Logo from "../source/logo.png"
import '../css/style.css'

const Sidebar = () => {
  return (
    <div className='bgside'>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-auto bg-white vh-100'>
    <div className='bg-white sidebar p-2'>
        <div>
            <img className="Logo d-block mx-auto" src={Logo} alt='logo' ></img>
            <span classname='checklist fs-4'></span>
        </div>
        <hr className='text-dark'/>
        <div className='list-group list-group-flush'>
          <a href='/' className='list-group-item py-2 my-1'>
            <i className='bi bi-lock-fill fs-5 me-2'></i>
            <span className='fs-5'>Encryption</span>
          </a>
          <a href="/Decryption" className='list-group-item py-2 my-1'>
            <i className='bi bi-unlock-fill fs-4 me-2'></i>
            <span className='fs-5'>Decryption</span>
          </a>
          <a href="/Key" className='list-group-item py-2 my-1'>
            <i className='bi bi-key fs-4 me-2'></i>
            <span className='fs-5'>Key</span>
          </a>
        </div>
    </div>
    </div>
      </div>
    </div>
    </div>
  )
}

export default Sidebar

