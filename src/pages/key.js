import React from 'react'
import KotakK from '../component/kotakK';
import Sidebar from '../component/sidebar'


function Key() {
  return (
    <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col">
                    <KotakK/>
                </div>
            </div>
        </div>
  )
}

export default Key;