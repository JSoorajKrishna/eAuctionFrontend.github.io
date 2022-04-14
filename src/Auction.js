import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import io from "socket.io-client";

const socket = io('http://localhost:8000');
const Auction = () => {
    const history = useHistory();
    const {id} = useParams();
    const [auction, setAuction] = useState(null);
    const [amt, setAmt] = useState(null);
    const [auctiontakenby, setAuctiontakenby] = useState('-');
    const d = new Date();
    const [time, setTime] = useState(10);

    const handleLogOut = ()=>{
        sessionStorage.removeItem("id");
        sessionStorage.removeItem("jwt");
        sessionStorage.removeItem("username");
        history.push("/");
    };

    const handleAuction = ()=>{
        let input = document.querySelector("input");
        let info = document.querySelector(".info");
        if(input.value > auction.auctionendingamount)
        {
            info.innerHTML = '';
            socket.emit('amount',{
                amount: input.value,
                id,
                username: sessionStorage.getItem("username")
            });
            input.value = '';
        }
        else{
            info.innerHTML = 'Your entered amount is less than the current Auction amount';
        }
        
    };

    socket.on('amount',function(data){
        // auction.auctionendingamount = data.amount;
        // console.log(data);
        setAmt(data.amount);
        setAuctiontakenby(data.username);
    });

    useEffect(()=>{
        fetch(`http://localhost:8000/dashboard/${id}`)
            .then(res=>{
                return res.json();
            }).then(data=>{
                setAuction(data);
                setAmt(data.auctionendingamount);
                setAuctiontakenby(data.auctiontakenby);
            });
    },[]);


    return (
        <div className="auction">
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

            <section>
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

            </section>


            <section>
                <div className="container">
                    <p className="display-1 text-center">{auction && auction.productname}</p>
                    <div className="row justify-content-center">
                        {/* <div className="col-6 my-3">
                            <img src="../laptop.png" alt="productPicture" className="img-fluid"/>
                        </div> */}

                        <div className="col-4 rounded my-3 p-1 shadow-lg border-3 border p-0 border-dark good-pic">
                                        <img src='../Rolls-Royce-Ghost.jpg' alt="image" className="img-fluid img-thumbnail" />
                        </div>


                    </div>
                    <div className="row">
                    <div className="col-6 border-end border-3 border-dark">
                        <ul>
                            {auction && auction.productproperties.split("\n").map(data1=>(
                                <li className="text-warning">{data1}</li>
                            ))}
                        </ul>
                        <p className="lead text-info">Owner of the product: {auction && auction.owneroftheproduct}</p>
                        <p className="text-danger">Started {auction && (Math.round(d.getTime() / 60000) - auction.starttime)} minutes ago</p>
                    </div>
                    <div className="col-6 text-center">
                                <p>Time Remaining: {time} seconds</p>
                                <p>eAuction starting amount: {auction && auction.auctionstartingamount}</p>
                                <p>eAuction current amount: {amt}</p>
                                <p>eAuction taken by: <em>{auctiontakenby}</em></p>
                                
                                {/* <div class="input-group form-floating mb-3">
                                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-currency-dollar"></i></span>
                                    <input type="number" class="form-control" id="floatingInput" placeholder="Your amount" aria-label="Username" aria-describedby="basic-addon1"/>
                                    <label for="floatingInput">Your Amount: </label>
                                </div> */}

                        <div className="input-group my-3">
                        <span className="input-group-text border-0 fs-5"><i class="bi bi-currency-dollar"></i></span>
                            <div className="form-floating">
                                <input id="amount" type="number" className='me-3 pe-5 form-control rounded-0 rounded-end' placeholder='Your Amount: '/>
                                <label for="amount">Your amount: </label>
                            </div>
                        </div>
                        <div className="info my-3"></div>
                        <div>
                            <button className="btn btn-outline-primary" onClick={handleAuction}>Ask</button>
                        </div>

                    </div>
                    </div>
                </div>
            </section>




<section id="footer" className="mt-5 text-center bg-light">
                <p className="mb-0 p-3">Made with <i className="bi bi-heart-fill text-danger"></i> By <span className="text-primary fw-bold">J Sooraj Krishna</span></p>
            </section>





        </div>
    );
}
 
export default Auction;