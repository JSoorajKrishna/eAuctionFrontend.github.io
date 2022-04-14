import { Link, useHistory } from "react-router-dom";
import io from "socket.io-client";
// import { useCookies } from "react-cookie";

const SignUp = () => {
  const history = useHistory();
  // const [cookies, setCookie, removeCookie] = useCookies('');
  const handleSignUp = () =>{
    let input = document.querySelectorAll("input");
    const data = {
      username: input[0].value,
      email: input[1].value,
      password: input[2].value
    };
    fetch("http://localhost:8000/signup",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then((res)=>{
      return res.json();
    }).then(data=>{
      console.log(data);
      // setCookie('jwt',data.token);
      // setCookie('id',data.user);
      // console.log(cookies);
      sessionStorage.setItem("jwt",data.token);
      sessionStorage.setItem("id",data.userid);
      sessionStorage.setItem("username",data.username);
      const socket = io('http://localhost:8000');
      history.push("/dashboard");
    })
      .catch(err=>console.log(err));
  };
    return (
        <div className="signUp">
        <img src="bg-2.jpg" alt="bg" className="position-absolute background" />
        <div className="container">
          <div className="row ps-5 justify-content-around align-items-center">
            <div className="col-5 ps-5 border-0 rounded">
              <div className="card p-3 pb-1 mt-2" >
                  <div className="card-body">
                    <h5 className="card-title mb-5 text-white fw-bold display-6">Sign Up</h5>
                    <p className="card-text">
                      
                      <div className="input-group my-3">
                      <span className="input-group-text bg-warning border-0 fs-5"><i className="bi bi-person-fill"></i></span>
                          <div className="form-floating">
                            <input type="text" id="username" className='form-control me-3 pe-5 border-0 rounded-0 rounded-end' placeholder='username'/>
                            <label for="username">username</label>
                          </div>
                      </div>
                      <div className="input-group my-3">
                      <span className="input-group-text bg-warning border-0 fs-5"><i className="bi bi-envelope-fill"></i></span>
                        <div className="form-floating">
                          <input type="email" id="email" className='form-control me-3 pe-5 border-0 rounded-0 rounded-end' placeholder='email'/>
                          <label for="email">email</label>
                        </div>
                        
                      </div>
                      <div className="input-group my-2">
                      <span className="input-group-text bg-warning border-0 fs-5"><i className="bi bi-key-fill"></i></span>
                        <div className="form-floating">
                          <input type="password" id="password" className='form-control me-3 pe-5 border-0 rounded-0 rounded-end' placeholder='password'/>
                          <label for="password">password</label>
                        </div>
                      </div>
                    </p>
                    <div className='text-end mb-2'>
                    <button className="btn btn-outline-warning border-3 fw-bold" onClick={handleSignUp}>Sign Up</button>
                    </div>
                    <p className='text-white text-center border-bottom'>Already an member? <Link className='text-primary' to="/login">Log In</Link></p>
                    <div className='text-center'>
                    <button type="button" className="btn btn-primary m-1 py-2 px-3"><i className="bi bi-facebook"></i></button>
                    <button type="button" className="btn btn-secondary m-1 py-2 px-3"><i className="bi bi-google fw-bolder">+</i></button>
                    <button type="button" className="btn btn-success m-1 py-2 px-3"><i className="bi bi-twitter"></i></button>
                  </div>
                  <p className='text-center text-light'>Why Create An Account?</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default SignUp;