import React from 'react';
import chair from '../../../images/Chair.png'
const HeaderMain = () => {
    return (
        <main className="row d-flex align-items-center" style={{height:'600px'}}>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile<br></br> Starts Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad quis enim, explicabo cum totam a?</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} className="img-fluid" alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;