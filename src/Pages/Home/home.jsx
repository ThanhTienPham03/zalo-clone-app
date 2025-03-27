import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h1 className="mb-4">Welcome to My Zalo</h1>
                <p className="lead">This is the homepage of your application.</p>
                    <a href="/login" className= 'btn btn-primary'>Get Started</a>
            </div>
            <div className="row mt-5">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Feature 1</h5>
                            <p className="card-text">Description of feature 1.</p>
                            <a href="#" className="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Feature 2</h5>
                            <p className="card-text">Description of feature 2.</p>
                            <a href="#" className="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Feature 3</h5>
                            <p className="card-text">Description of feature 3.</p>
                            <a href="#" className="btn btn-outline-primary">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;