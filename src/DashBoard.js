import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const DashBoard = () => {
    const history = useHistory();
    const [auction,setAuction] = useState(null);

    const handleLogOut = ()=>{
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("jwt");
        sessionStorage.removeItem("username");
        history.push("/");
    };


    const d = new Date();



    useEffect(()=>{
        fetch("http://localhost:8000/dashboard")
            .then(res=>{
            return res.json();
        }).then((data)=>{
            setAuction(data);

        }).catch(err=>console.log(err));
    },[auction]);
    return (
        <div className="dashboard">
            {/* <img src="bg-6.jpg" alt="bg" className="position-absolute fixed dashBoard" /> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-secondary sticky-top">
            <button className="btn btn-primary ms-3 bg-secondary border-0 fw-bold fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <i className="bi bi-list"></i>
                    </button>
                <div className="container">
                    
                    <a className="navbar-brand text-info fs-3 fw-bold" href="#"><Link className="text-info" to='/dashboard'><i class="bi bi-piggy-bank-fill"> </i>eAuction</Link></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active balance" aria-current="page" href="#"><i className="bi bi-coin p-1 border rounded shadow text-warning fw-bold" type="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Your Current Balance"> 1 </i></a>
                        {/* <a class="nav-link" href="#">Add money</a> */}
                            <p className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Add money
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">GPay</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Net Banking</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Credit/Debit Card</a></li>
                                </ul>
                            </p>
                        <Link className="nav-link" to="/sellgood">Sell goods</Link>
                        <button onClick={handleLogOut} className="btn btn-success border-0 logout btn-outline-danger ms-1 text-white nav-link">Log Out</button>
                    </div>
                    </div>
                </div>
            </nav>
            <marquee className='' direction="left" height="30px">
            Taking advantage of new developments in technology, E-auctions have significantly changed the way many companies conduct their purchasing. For buyers, the primary benefits include reduced purchase price, increased market efficiency, higher procurement process efficiency, and access to a larger supplier base.
            </marquee>
            
            <section className="content m-5 mt-2">
                <div className="container">
                    <p className="display-5 fw-bold mb-5"><span className="border-bottom border-2">List of eAuctions</span></p>
                    <div className="row">


                    {auction && auction.map(data => (
                                <div className="col-4 mb-5">
                                <div className="card shadow-lg">
                                    <img src="laptop.png" className="card-img-top" alt="..."/>
                                    <div className="card-body border-top">
                                        <h5 className="card-title">{data.productname}</h5>
                                        <p className="card-text">
                                            <ul>
                                                {data.productproperties.split("\n").map(data1=>(
                                                    <li className="property">{data1}</li>
                                                    
                                                ))}
                                                
                                            </ul>
                                        </p>
                                        <div className="text-center">
                                            <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#canvas${data._id}${data._id}`} type="button">Join in Auction</a>
                                        </div>
                                        <p className="text-center mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target={`#canvas${data._id}`} aria-controls="offcanvasRight"><Link to='#'>View more properties</Link></p>
                                        <small className="text-muted">Posted {Math.round(d.getTime() / 60000) - data.starttime} mins ago</small>
                                    </div>
                                </div>
                                </div>
                    ))}



                        {/* <div className="col-4">
                        <div className="card shadow-lg">
                            <img src="laptop.png" className="card-img-top" alt="..."/>
                            <div className="card-body border-top">
                                <h5 className="card-title">Laptop</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>Hard Drive	1 TB 5400 rpm SATA</li>
                                        <li>Video Graphics	Intel HD Graphics 4400</li>
                                        <li>Memory, standard	4 GB DDR3L SDRAM (1 x 4 GB)</li>
                                        <li>Microprocessor	Intel® Core™ i5-4210U with Intel HD Graphics 4400 (1.7 GHz, up to 2.7 GHz, 3 MB cache, 2 cores)</li>
                                    </ul>
                                </p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Join in Auction</a>
                                </div>
                                <p className="text-center mt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><Link to='#'>View more properties</Link></p>
                                <small className="text-muted">Posted 3 mins ago</small>
                            </div>
                        </div>
                        </div> */}







                        {/* <div className="col-4">
                        <div className="card shadow-lg">
                            <img src="playstation-5.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body border-top">
                                <h5 className="card-title">PS-5</h5>
                                <p className="card-text">
                                    <ul>
                                        <li>HDD 825GB PCie Gen 4 NVMe SSD</li>
                                        <li>Processor Custom 8-core AMD Zen 2 CPU @ 3.5GHz with SMT</li>
                                        <li>Graphics Custom AMD RDNA 2 GPU 36 CUs @ 2.23GHz (variable frequency)</li>
                                        <li>RAM 16GB GDDR6.</li>
                                        <li>USB 4.</li>
                                    </ul>
                                </p>
                                <div className="text-center">
                                    <a href="#" className="btn btn-primary">Join in Auction</a>
                                </div>
                                <p className="text-center mt-2"><Link to='#'>View more properties</Link></p>
                                <small className="text-muted">Posted 3 mins ago</small>
                            </div>
                            </div>
                        </div>

                        <div className="col-4">
                        <div className="card shadow-lg">
                            <img src="Audi.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body border-top">
                                <h5 className="card-title">Audi A4</h5>
                                <p className="card-text">
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
                                    <a href="#" className="btn btn-primary">Join in Auction</a>
                                </div>
                                <p className="text-center mt-2"><Link to='#'>View more properties</Link></p>
                                <small className="text-muted">Posted 3 mins ago</small>
                            </div>
                            </div>
                        </div> */}



                    </div>

                    {auction && auction.map(data=>(
                    <div className="offcanvas offcanvas-end" tabindex="-1" id={`canvas${data._id}`} aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">More features</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul>
                            {data.productproperties.split("\n").map(data1=>(
                                <li>{data1}</li>
                            ))}
                            
                        </ul>
                    </div>
                    </div>
                    ))}



                    {/* <!-- Button trigger modal --> */}
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
</button> */}

{/* <!-- Modal --> */}

{auction && auction.map(data=>(
<div className="modal fade" id={`canvas${data._id}${data._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id={`canvas${data._id}`}>Current Status of Auction</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p>Auction Starting amount: ${data.auctionstartingamount}</p>
        <p>Auction Current amount: ${data.auctionendingamount}</p>
        <p>Owner of the product: {data.owneroftheproduct}</p>
        <p>Auction currently taken by: {data.auctiontakenby}</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <Link to={`/dashboard/${data._id}`} type="button" className="btn btn-primary">Join</Link>
      </div>
    </div>
  </div>
</div>
))}

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




                </div>
            </section>

            <section id="footer" className="mt-5 text-center bg-light">
                <p className="mb-0 p-3">Made with <i className="bi bi-heart-fill text-danger"></i> By <span className="text-primary fw-bold">J Sooraj Krishna</span></p>
            </section>


        </div>
    );
}
 
export default DashBoard;