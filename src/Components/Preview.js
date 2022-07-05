const Preview=() =>{
    return  <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <div className="card-body">
                        <img className="img-fluid" src="https://api.apiflash.com/v1/urltoimage?access_key=30de2096f0804ee1ba003e3a8c3de485&wait_until=page_loaded&url=http://google.com" />
                    </div> 
                </div>
            </div>
        </div>
    </div>
}


export default Preview;