import { Link } from "react-router-dom";

const LoginIn = () => {
  const handleLogIn = () =>{
    let input = document.querySelectorAll("input");
    const data = {
      email: input[0].value,
      password: input[1].value
    };
    fetch("http://localhost:8000/login",{
      method: "POST",
      headers: "application/json",
      body: JSON.stringify(data)
    }).then((res)=>{console.log(res)})
      .catch(err=>console.log(err));
  };
    return (
        <div className="login">
        <img src='bg-1.jpg' alt="bg" className="position-absolute background" />
        <div className="container">
          <div className="row ps-5 justify-content-around align-items-center">
            <div className="col-5 ps-5 border-0 rounded">
              <div className="card p-3 mt-3" >
                  <div className="card-body">
                    <h5 className="card-title mb-5 text-white fw-bold display-6">Log In</h5>
                    <p className="card-text">
                      
                        <div className="input-group my-3">
                        <span className="input-group-text bg-warning border-0 fs-5"><i className="bi bi-person-fill"></i></span>
                          <div className="form-floating">
                            <input id="email" type="text" className='me-3 pe-5 form-control border-0 rounded-0 rounded-end' placeholder='email'/>
                            <label for="email">email</label>
                          </div>
                        </div>
                      
                      <div className="input-group my-2">
                      <span className="input-group-text bg-warning border-0 fs-5"><i className="bi bi-key-fill"></i></span>
                        <div className="form-floating">
                          <input type="password" id="password" className='me-3 pe-5 form-control border-0 rounded-0 rounded-end' placeholder='password'/>
                          <label for="password">password</label>
                        </div>
                      </div>
                        <div className="form-check form-check-inline mt-2">
                          <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Remember me"/>
                          <label className="form-check-label text-white" for="inlineCheckbox1">Remember me</label>
                      </div>
                    </p>
                    <div className='text-end mb-4'>
                    <a href="#" className="btn btn-outline-warning border-3 fw-bold" onClick={handleLogIn}>Log In</a>
                    </div>
                    <p className='text-white text-center'>Don't have an account? <Link className='text-info' to="/signup">Sign Up</Link></p>
                    <p className='text-center text-center border-bottom border-white border-1 pb-1'><a className='text-info' href="">Forgot your password?</a></p>
                    <div className='text-center'>
                    <button type="button" className="btn btn-primary m-1 py-2 px-3"><i className="bi bi-facebook"></i></button>
                    <button type="button" className="btn btn-secondary m-1 py-2 px-3"><i className="bi bi-google fw-bolder">+</i></button>
                    <button type="button" className="btn btn-success m-1 py-2 px-3"><i className="bi bi-twitter"></i></button>
                  </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default LoginIn;