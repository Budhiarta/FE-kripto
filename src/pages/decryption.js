import React from 'react'
import KotakD from '../component/kotakD';
import Sidebar from '../component/sidebar'


function Decryption() {
  return (
    <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col">
                    <KotakD/>
                </div>
            </div>
        </div>
  )
}

export default Decryption;