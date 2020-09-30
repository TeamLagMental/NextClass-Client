import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Background from './../../assets/img/fondo.jpg'

import { AuthContext } from './../../context/auth'

function Home(){
    const { user } = useContext(AuthContext)
    const jumbotronStyle = {
        backgroundImage: `radial-gradient(circle, rgba(51,23,64,0.5662640056022409) 0%, rgba(21,11,27,0.7203256302521008) 100%), url(${Background})`,
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }
    const textResponsive = {
        fontSize: '12vw'
    }
    return(
        <main role="main">
            <div style={ jumbotronStyle } className="jumbotron rounded-0 text-center">
                <br/><br/>
                <div className="container">
                    <h1 className="display-3 text-light home-text" style={textResponsive}>¡Bienvenido!</h1>
                    <p className="text-light home-text">This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                    <p>
                        <Link to="/dashboard" className="btn btn-primary" role="button">
                            <i className="fas fa-meteor mr-1"></i> Descubrir
                        </Link>
                        &nbsp;
                        <Link to="/login" className="btn btn-primary" role="button">
                            <i className="fa fa-fw fa-rocket mr-1"></i> Ingresar
                        </Link>
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h2>Heading</h2>
                                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                                <p><Link to="/" className="btn btn-secondary" role="button">View details &raquo;</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h2>Heading</h2>
                                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                                <p><Link to="/" className="btn btn-secondary" role="button">View details &raquo;</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                <h2>Heading</h2>
                                <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                                <p><Link to="/" className="btn btn-secondary" role="button">View details &raquo;</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <br/>
                        <div className="card">
                            <div className="card-body">
                                Gg { user ? user.access_id : "Hi" }
                                { user ? user.username : "Hi" }
                                { user ? user.createdAt : "Hi" }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home