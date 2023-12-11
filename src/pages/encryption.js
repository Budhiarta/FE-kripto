import React from 'react'
import Kotak from '../component/kotak'
import Sidebar from '../component/sidebar'


function Encryption() {
  return (
    <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col">
                    <Kotak/>
                </div>
            </div>
        </div>
  )
}

export default Encryption;