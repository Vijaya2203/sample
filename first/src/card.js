function Card(props){
    return(
        <div className="col-md-3">
        <div className="card text-center">
        <img src="./girl.jpg" className="card-img-top mx-auto mt-3" alt="Profile" style={{ width: '50%', height: '200px', objectFit: 'cover' }} />
        <div className="card-body">
            <h3 className="card-title">Name: {props.userFromArray}</h3>
            <h3 className="card-title">Id: {props.user.branch}</h3>
            <h3 className="card-title">Place: {props.user.year}</h3>
            <p className="card-text">You can connect with people to increase your network.</p>
            <button type="button" class="btn btn-dark">CONNECT</button>

        </div>
        </div>
        </div>
    );
}
export default Card;