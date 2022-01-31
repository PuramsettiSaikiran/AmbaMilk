import "./Header.css"

function Header(){
    return <div className="container p-0">
    <nav id="navbar-header" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{border:"1px solid silver", borderTop:"none", borderLeft:"none", borderRight:"none"}}>
        <a className="navbar-brand" href="/">
            <img src="./AmbaMilkLogo.jpg" alt="" width="75" height="45" className="d-inline-block align-text-top"/>
            AmbaMilk
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav" style={{marginLeft:"auto", justifyContent:"space-evenly", width:"75%"}}>
            <li className="nav-item">
                <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#service">Service</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#aboutus">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#contactus">Contact Us</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    <div data-bs-spy="scroll" data-bs-target="#navbar-header" data-bs-offset="50" tabIndex="0" style={{position:"fixed", overflow:"scroll", overflowX:"hidden", height:"90%", width:"100%"}}>
        <div id="home" className="d-flex mt-5 flex-column">
            <div className="d-flex justify-content-center" style={{fontSize:"35px"}}>Our Vision</div>
            <div className="d-flex h-100 w-100 align-items-center justify-content-evenly  flex-wrap">
                <div className="card mt-5" style={{height:"325px", width:"370px"}}>
                    <div className="row h-100 w-100 m-0">
                        <div className="d-flex align-items-center" style={{fontSize:"28px"}}>
                           <img style={{height:"100px"}} src="../AncientBuffaloFarming.png" className="img-fluid rounded-start" alt="..."/>
                           <div>Ancient Farming</div>
                        </div>
                        <div className="d-flex">
                        <div className="card-body h-100 w-100">
                            <div className="d-flex flex-column h-100 w-100 justify-content-evenly">
                                <p className="card-text">
                                    Buffaloes is not animals rather it is a family to us.
                                    Our buffaloes won't be tied by ropes. We won't stop the buffaloes in middle of their meal. 
                                    We give complete freedom to buffaloes, because it is not meant for just milk.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5" style={{height:"325px", width:"370px"}}>
                    <div className="row h-100 w-100 m-0">
                        <div className="d-flex align-items-center justify-content-evenly" style={{fontSize:"28px"}}>
                          <img style={{height:"100px"}} src="../ZeroWaterMilk.jfif" className="img-fluid rounded-start" alt="..."/>
                          <div>Zero Water</div>
                        </div>
                        <div className="d-flex">
                            <div className="card-body h-100 w-100">
                                <div className="d-flex flex-column h-100 w-100">
                                    <p className="card-text">
                                        We promise you a delivery of zero water in our milk. If you prove that our milk
                                        has water content in our presence, we will charge money on that day. That's our commitment.
                                        We build on values not money.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card mt-5" style={{height:"325px", width:"370px"}}>
                    <div className="row h-100 w-100 m-0">
                        <div className="d-flex align-items-center" style={{fontSize:"28px"}}>
                          <img style={{height:"100px"}} src="../HygieneDelivery.jpg" className="img-fluid rounded-start" alt="..."/>
                          <div>Hygiene Delivery</div>
                        </div>
                        <div className="d-flex">
                        <div className="card-body h-100 w-100">
                            <div className="d-flex flex-column h-100 w-100">
                                <p className="card-text">
                                    Customer safety is our utmost priority. No matter, what worse situation we have
                                    we deliver on-time with out no space for excuses. We won't charge delivery for that 
                                    day if we are being late.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="service" className="d-flex mt-5 flex-column">
            <div className="d-flex justify-content-center p-5" style={{fontSize:"35px"}}>Our services</div>
            <div id="carouselServiceIndicators" className="carousel slide h-100 w-100" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselServiceIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselServiceIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselServiceIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselServiceIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselServiceIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner h-100 w-100">
                    <div className="carousel-item active">
                      <img src="../MilkDelivery.jfif" height="400" className="d-block w-100" alt="..."/>
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Door delivery</h1>
                        <p>We deliver all our products at your door steps.</p>
                     </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../LiveTracking.jpg" height="400" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Live tracking</h1>
                            <p>You can track all our deliver partner on just a click.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../OnlinePayment.png" height="400" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Online payment</h1>
                            <p>You can pay your monthly bills using online payment mode.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../PayLater.jpg" height="400" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Pay later</h1>
                            <p>We provide a one month pay later grace period for the needed ones.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="../AllPaymentsSupported.jpg" height="400" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h1>Payment modes</h1>
                            <p>We supports all types of payment modes in all ways.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselServiceIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselServiceIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div id="products" className="d-flex mt-5 flex-column">
            <div className="d-flex justify-content-center p-3" style={{fontSize:"35px"}}>Our products</div>
            <div className="d-flex flex-column flex-wrap">
                <div className="card mt-5" style={{width:"100%"}}>
                        <div className="row h-100 w-100 m-0">
                            <div className="col-4" style={{alignSelf:"center"}}>
                              <img style={{height:"300px", width:"100%"}} src="../Milk.jfif" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-8">
                            <div className="card-body h-100 w-100">
                                <div className="d-flex flex-column h-100 w-100 justify-content-evenly">
                                    <h5 className="card-title" style={{fontSize:"50px"}}>Milk in diposable bags</h5>
                                    <p className="card-text">We promise a pure raw milk from the buffalo to your home with out any third party hands.
                                    You don't need to pay us if you find any water quantity in our milk. Your's health is our health. Ours health is Indias future health.</p>
                                    <p className="card-text"><small className="text-muted">24,500 people have liked the quality of todays milk.</small></p>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                <div className="card mt-5" style={{width:"100%"}}>
                        <div className="row h-100 w-100 m-0">
                            <div className="col-4"  style={{alignSelf:"center"}}>
                            <img style={{height:"300px", width:"100%"}} src="../Yogurt.jpg" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-8">
                            <div className="card-body h-100 w-100">
                                <div className="d-flex flex-column h-100 w-100 justify-content-evenly">
                                    <h5 className="card-title" style={{fontSize:"50px"}}>Yogurt in soil made pots.</h5>
                                    <p className="card-text">
                                        Soil is the god's gift given to us. Soil has many properties which keeps our health 
                                        in check. So, we decided to deliver our curd in the pots with added lemon, chilli etc to 
                                        keep our curd fresh for a long time. We prepare the curd with the same day milk. 
                                    </p>
                                    <p className="card-text"><small className="text-muted">12,000 has been served with our delicious curd so far.</small></p>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
                <div className="card mt-5" style={{width:"100%"}}>
                        <div className="row h-100 w-100 m-0">
                            <div className="col-4"  style={{alignSelf:"center"}}>
                            <img style={{height:"300px", width:"100%"}} src="../Ghee.jpg" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-8">
                            <div className="card-body h-100 w-100">
                                <div className="d-flex flex-column h-100 w-100 justify-content-evenly">
                                    <h5 className="card-title" style={{fontSize:"50px"}}>Ghee in soil made jar.</h5>
                                    <p className="card-text">
                                        Ghee is one of our dialy necessity in our breakfast, lunch and dinner. So, we makes the Ghee
                                        with the right combination of milk in order to get the more vitmains and minerals as it is a 
                                        primary ingredient. So, we make sure that each time you take ghee, it will equal to the cup of milk.
                                    </p>
                                    <p className="card-text"><small className="text-muted">2.1 million mothers have served their daughters with our ghee.</small></p>
                                </div>
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div id="aboutus" className="d-flex mt-5 flex-column w-100">
            <div className="d-flex justify-content-center p-3" style={{fontSize:"35px"}}>About us</div>
                <div className="d-flex flex-row flex-wrap justify-content-evenly">
                    <div className="card mt-5" style={{height:"350px",width:"300px"}}>
                        <img src="../VijayDhan.PNG" style={{height:"200px"}} className="card-img-top" alt="..."/>
                        <div className="card-body" style={{textAlign:"center"}}>
                            <h5 className="card-title" style={{fontSize:"28px"}}>Vijay Swarna</h5>
                            <p className="card-text">General Manager</p>
                            <button className="btn btn-primary">View Profile</button>
                        </div>
                    </div>
                    <div className="card mt-5" style={{height:"350px",width:"300px"}}>
                        <img src="../Saikiran.PNG" style={{height:"200px"}} className="card-img-top" alt="..."/>
                        <div className="card-body" style={{textAlign:"center"}}>
                            <h5 className="card-title" style={{fontSize:"28px"}}>Saikiran Puramsetti</h5>
                            <p className="card-text">Chief Executive Officer</p>
                            <button className="btn btn-primary">View Profile</button>
                        </div>
                    </div>
                    <div className="card mt-5" style={{height:"350px",width:"300px"}}>
                        <img src="../Manoj.PNG" style={{height:"200px"}} className="card-img-top" alt="..."/>
                        <div className="card-body" style={{textAlign:"center"}}>
                            <h5 className="card-title" style={{fontSize:"28px"}}>Manoj Mekapati</h5>
                            <p className="card-text">Category Manager</p>
                            <button className="btn btn-primary">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        <div id="contactus" className="d-flex mt-5 flex-column">
            <div className="d-flex justify-content-center" style={{fontSize:"35px"}}>Contact Us</div>
            <div className="card align-items-center">
                <div className="card-header border-0" style={{backgroundColor:"white"}}>
                    AmbaMilk (Head Office)
                </div>
                <div className="card-body">
                    <h5 className="card-title text-align-center">MobileNo - 9398577483</h5>
                    <p className="card-text">
                        DR:NO-4:33, Penamaluru Mandal, Krishna District, Vijayawada, Andhra Pradesh, 521139.
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
}

export default Header;