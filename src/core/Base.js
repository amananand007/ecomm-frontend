import React from "react";
import Menu from "./Menu";
import "./Base.css"


const Base = ({
    title="My Title",
    description="My description",
    className="text-dark p-3",
    children
}) => (
    <div>
        <Menu />
        <div className="">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
            </div>
          <div className={className}>{children}</div>
        </div>

        <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-dark text-white text-center py-3">
            <h4>If you got any question, fell free to react out!</h4>
            <button className="btn btn-warning btn-lg">Contact Us</button>
        </div>
        </footer>
       
    </div>
)

export default Base;