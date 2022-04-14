import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const SellGood = () => {
    const history = useHistory();
    const [src, setSrc] = useState("bg-6.jpg");
    const username = sessionStorage.getItem("username");

    const handleLogOut = ()=>{
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("jwt");
        sessionStorage.removeItem("username");
        history.push("/");
    };

    const handleImage = (e)=>{
        // let img = document.querySelector("img");
        setSrc(URL.createObjectURL(e.target.files[0]));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        let input = document.querySelectorAll("input");
        let textarea = document.querySelector("textarea");
        const d = new Date();
        const data = {
            productname : input[0].value,
            productproperties : textarea.value,
            starttime: Math.round(d.getTime() / 60000),
            productpicture: input[1].value,
            auctionstartingamount: input[2].value,
            auctionendingamount: input[2].value,
            owneroftheproduct : input[3].value,
            auctiontakenby: 'No one'
        };
        // console.log(data);
            fetch("http://localhost:8000/sellgood",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
            }).then((res)=>{
            console.log(res);
            history.push("/dashboard");
            })
            .catch(err=>console.log(err));


    //         const data1 = new FormData();
    // data1.append('file', input[1].files[0]);

    // fetch("http://localhost:8000/sellgood",{
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: data1
    //         }).then((res)=>{
    //         console.log(res);
    //         // history.push("/dashboard");
    //         })
    //         .catch(err=>console.log(err));



    // axios.post('/upload', data1)
    //   .then((res) => {
    //     this.setState({ photos: [res.data, ...this.state.photos] });
    //   });
    };
    return (
        <div className="sellgood">

            {/* <img src="bg-10.png" alt="bg" className="position-absolute background fixed dashBoard" /> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
            <button class="btn btn-primary ms-3 bg-secondary border-0 fw-bold fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i class="bi bi-list"></i>
                    </button>
                <div class="container">
                    
                    <a class="navbar-brand text-info fs-3 fw-bold" href="#"><Link className="text-info" to='/dashboard'><i class="bi bi-piggy-bank-fill"> </i>eAuction</Link></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active balance" aria-current="page" href="#"><i class="bi bi-coin p-1 border rounded shadow text-warning fw-bold" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Your Current Balance"> 1 </i></a>
                        {/* <a class="nav-link" href="#">Add money</a> */}
                            <p class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Add money
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">GPay</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Net Banking</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Credit/Debit Card</a></li>
                                </ul>
                            </p>
                        <Link class="nav-link" to="/sellgood">Sell goods</Link>
                        <button onClick={handleLogOut} class="btn btn-success border-0 logout btn-outline-danger ms-1 text-white nav-link">Log Out</button>
                    </div>
                    </div>
                </div>
            </nav>
            <marquee className='' direction="left" height="30px">
            Taking advantage of new developments in technology, E-auctions have significantly changed the way many companies conduct their purchasing. For buyers, the primary benefits include reduced purchase price, increased market efficiency, higher procurement process efficiency, and access to a larger supplier base.
            </marquee>

        {/* off canvas for attended auction */}

        <div className="offcanvas bg-warning opacity-75 offcanvas-start my-5 ms-2 rounded-1" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="container-fluid my-5">
  <div className="row align-items-center">
      <div className="col">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Options</h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body p-0 px-1 pt-2">
    <div>
      <ul className="text-center p-0">
          <li className="border-primary border py-2 border-success"><Link>Add money</Link></li>
          <li className="border-primary border py-2 border-success"><Link to='/sellgood'>Sell goods</Link></li>
          <li className="border-primary border py-2 border-success"><Link to='/participatedauctions'>Participated eAuctions</Link></li>
      </ul>
    </div>
    {/* <div className="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div> */}
  </div>
      </div>
  </div>
  </div>
</div>

{/* end */}


<section className="sellgood-form bg-light pb-5">
    <div className="container">
        <div className="display-5 fw-bold mb-3"><span className="border-bottom border-3">Sell Good</span></div>
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <div className="row justify-content-around align-items-center">
            <div className="col-3 shadow-lg border-3 border p-0 border-dark good-pic">
                <img src={src} alt="image" className="img-fluid img-thumbnail" />
            </div>
            <div className="col-6 shadow-lg p-4 text-primary">

            <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Product Name:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Eg. Laptop"/>
                </div>


                <div class="mb-3">
                    <label for="formFile" class="form-label">Picture of the product:</label>
                    <input class="form-control" name="image" type="file" id="formFile" onChange={handleImage}/>
                </div>
                

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Properties:</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Qualities of the product"></textarea>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Auction starting amount</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="Rs. 10,000"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Owner of the product</label>
                    <input type="text" class="form-control" readOnly id="exampleFormControlInput1" value={username}/>
                </div>

                <div className="text-center my-3">
                    <button type="submit" class="btn btn-primary">Start eAuction</button>
                </div>




            </div>
            
        </div>
        </form>

    </div>
</section>

            <section id="footer" className="mt-5 text-center bg-light">
                <p className="mb-0 p-3">Made with <i class="bi bi-heart-fill text-danger"></i> By <span className="text-primary fw-bold">J Sooraj Krishna</span></p>
            </section>



        </div>
    );
}
 
export default SellGood;