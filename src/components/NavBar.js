import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import profile from '../images/perfil.png'

export const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-primary bg-nav p-2 sticky-top'>
            <div className='container-fluid'>
                <h1 className='title-nav'>Columbus</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='d-flex'>
                    <div className='data'>
                        <h6>ANA MARIA</h6>
                        <span>POS</span>
                    </div>
                    <img src={profile} className='img-nav' alt="profile" />
                    <div className='d-flex justify-content-center align-items-center m-4'>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                </div>
            </div>
        </nav>
    )
}