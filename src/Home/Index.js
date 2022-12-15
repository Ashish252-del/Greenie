import "animate.css";
import React from 'react'
import Card from "./Card";

export default function 
() {
    return (
      <>
        <div>
          <h1 className="animate__animated animate__bounce">
            Welcome !!
            <br />
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et.`
          </h1>
          <div className="row g-5 p-3">
            <div className="col-sm-12  col-md-6  col-lg-4">
              <Card />
            </div>
            <div className="col-sm-12  col-md-6  col-lg-4">
              <Card />
            </div>
            <div className="col-sm-12  col-md-6  col-lg-4">
              <Card />
                    </div>
           
            <div className="col-sm-12  col-md-6  col-lg-4">
              <Card />
            </div>
            <div className="col-sm-12  col-md-6  col-lg-4">
              <Card />
            </div>
            <div className="col-sm-12  col-md-6  col-lg-4">
              <Card />
            </div>
          </div>
        </div>
      </>
    );
}
