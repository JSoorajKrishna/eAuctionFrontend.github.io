import { Link } from "react-router-dom";

const Participated = () => {
    return (
        <div className="participated">


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

<section className="participated-auctions mb-5 pt-3 pb-5 bg-light">
    <div className="container">
        <div className="display-5 text-center mb-5">
            <span className="border-bottom border-3 fw-bold">List of Participated eAuctions</span>
        </div>
        <div className="row justify-content-center g-1 border border-primary border-3 py-3 pb-4">
            
            <div className="col-3">
                            <div class="card mt-5">
                                <img src="laptop.png" class="card-img-top" alt="..."/>
                                <div class="card-body border-top">
                                    <h5 class="card-title">Laptop</h5>
                                    <p class="card-text">
                                        <ul>
                                            <li>Hard Drive	1 TB 5400 rpm SATA</li>
                                            <li>Video Graphics	Intel HD Graphics 4400</li>
                                            <li>Memory, standard	4 GB DDR3L SDRAM (1 x 4 GB)</li>
                                            <li>Microprocessor	Intel® Core™ i5-4210U with Intel HD Graphics 4400 (1.7 GHz, up to 2.7 GHz, 3 MB cache, 2 cores)</li>
                                        </ul>
                                    </p>
                                    <div className="text-center">
                                        <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Join in Auction</a>
                                    </div>
                                    <p className="text-center mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><Link>View more properties</Link></p>
                                    <small class="text-muted">Posted 3 mins ago</small>
                                </div>
                            </div>
            </div>
                            <div className="col-4">
                                <div class="card border-primary border border-2 rounded mt-3 pb-3">
                                    <img src="playstation-5.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body border-top">
                                        <h5 class="card-title">PS-5</h5>
                                        <p class="card-text">
                                            <ul>
                                                <li>HDD 825GB PCie Gen 4 NVMe SSD</li>
                                                <li>Processor Custom 8-core AMD Zen 2 CPU @ 3.5GHz with SMT</li>
                                                <li>Graphics Custom AMD RDNA 2 GPU 36 CUs @ 2.23GHz (variable frequency)</li>
                                                <li>RAM 16GB GDDR6.</li>
                                                <li>USB 4.</li>
                                            </ul>
                                        </p>
                                        <div className="text-center">
                                            <a href="#" class="btn btn-primary">Join in Auction</a>
                                        </div>
                                        <p className="text-center mt-2"><Link>View more properties</Link></p>
                                        <small class="text-muted">Posted 3 mins ago</small>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div class="card mt-5">
                                <img src="Audi.jpg" class="card-img-top" alt="..."/>
                                <div class="card-body border-top">
                                    <h5 class="card-title">Audi A4</h5>
                                    <p class="card-text">
                                        <ul>
                                            <li>Number of cylinders: 4</li>
                                            <li>Fuel economy: 18 km/l combined</li>
                                            <li>Fuel tank capacity: 54 L</li>
                                            <li>Engine: 2.0 L 4-cylinder</li>
                                            <li>Horsepower: 140 kW</li>
                                            <li>Dimensions: 4,762 mm L x 1,847 mm W x 1,433 mm H</li>
                                        </ul>
                                    </p>
                                    <div className="text-center">
                                        <a href="#" class="btn btn-primary">Join in Auction</a>
                                    </div>
                                    <p className="text-center mt-2"><Link>View more properties</Link></p>
                                    <small class="text-muted">Posted 3 mins ago</small>
                                </div>
                                </div>
                            </div>
        </div>
    </div>
</section>

<section className="reviews">
    
</section>


        </div>
    );
}
 
export default Participated;