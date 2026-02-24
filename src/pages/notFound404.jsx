import React from 'react'

import { Link } from 'react-router-dom';

import './notFound404.css'
import Navbar from '../components/navbar/nav/navbar'

export default function NotFound() {
    return (
        <div className="pageNotFound">

            <Navbar isNotFound={true} />

            <div className="notFoundMsg">
                <h1>Oops...</h1>

                <h1>Parece que a página que você procura não existe</h1>

            </div>


            {/* <button> <Link to="/" >Voltar</Link> </button> */}
        </div>
    )
};
