const SellGood = () => {
    return (
        <div className="sellgood">

            {/* <img src="bg-10.png" alt="bg" className="position-absolute background fixed dashBoard" /> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
            <button class="btn btn-primary ms-3 bg-secondary border-0 fw-bold fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i class="bi bi-list"></i>
                    </button>
                <div class="container">
                    
                    <a class="navbar-brand text-info fs-3 fw-bold" href="#"><i class="bi bi-piggy-bank-fill"> </i>eAuction</a>
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
                        <a class="nav-link" href="#">Sell goods</a>
                        <a class="btn btn-success border-0 logout btn-outline-danger ms-1 text-white nav-link">Log Out</a>
                    </div>
                    </div>
                </div>
            </nav>
            <marquee className='' direction="left" height="30px">
            Taking advantage of new developments in technology, E-auctions have significantly changed the way many companies conduct their purchasing. For buyers, the primary benefits include reduced purchase price, increased market efficiency, higher procurement process efficiency, and access to a larger supplier base.
            </marquee>

        {/* off canvas for attended auction */}

<div class="offcanvas offcanvas-start bg-light my-5 ms-2 rounded-1" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body p-0 px-1 pt-2">
    <div>
      <ul className="text-center p-0">
          <li className="border-primary border py-2 border-success">Add money</li>
          <li className="border-primary border py-2 border-success">Sell goods</li>
          <li className="border-primary border py-2 border-success">Participated eAuctions</li>
      </ul>
    </div>
    <div class="dropdown mt-3">
      {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul> */}
    </div>
  </div>
</div>

{/* end */}


<section className="sellgood-form bg-light pb-5">
    <div className="container">
        <div className="display-5 fw-bold mb-3"><span className="border-bottom border-3">Sell Good</span></div>
        <div className="row justify-content-around align-items-center">
            <div className="col-3 shadow-lg border-3 border p-0 border-dark good-pic">
                <img src="bg-10.png" alt="image" className="img-fluid img-thumbnail " />
            </div>
            <div className="col-6 shadow-lg p-4 text-primary">

            <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Product Name:</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Eg. Laptop"/>
                </div>


                <div class="mb-3">
                    <label for="formFile" class="form-label">Picture of the product:</label>
                    <input class="form-control" type="file" id="formFile" accept="image/png, image/jpg"/>
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
                    <input type="text" class="form-control" readOnly id="exampleFormControlInput1" value={'J Sooraj Krishna'}/>
                </div>

                <div className="text-center my-3">
                    <button type="button" class="btn btn-primary">Start eAuction</button>
                </div>




            </div>
        </div>

    </div>
</section>

            <section id="footer" className="mt-5 text-center bg-light">
                <p className="mb-0 p-3">Made with <i class="bi bi-heart-fill text-danger"></i> By <span className="text-primary fw-bold">J Sooraj Krishna</span></p>
            </section>



        </div>
    );
}
 
export default SellGood;