import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="homepage">
            <img src="bg-4.jpg" alt="bg" className="position-absolute background" />
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center">
                <div className="m-3"></div>
                    <div className="col-6 border-0 rounded p-3 py-5 mt-5 ps-0 text-center">
                        <p className="display-4 mt-2 fw-bold text-danger">Want to be a part of eAuction?</p>
                        <Link to="/login" className="btn me-3 fw-bold btn-outline-dark border-2">Log In</Link>
                        <Link to="/signup" className="btn fw-bold btn-outline-dark border-2">Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HomePage;