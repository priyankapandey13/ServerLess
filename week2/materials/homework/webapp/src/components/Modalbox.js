const Modalbox = (props) => {
  //   <!-- Modal -->
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Shopping List
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {props.Emailaddress.slice(0, props.Emailaddress.search("@"))}{" "}
            {props.notifications}
            <div className="container">
              {props.cart.map((element, index) => (
                <div className="row">
                  <div className="col-xs-3 col-md-2">
                    <img
                      alt={element.name}
                      src={element.imageURL}
                      key={index}
                    />
                  </div>
                  <div className="col-xs-12 col-md-10 flex" key={index}>
                    <span className="groceryname">{element.name}</span>{" "}
                    <span className="groceryprice">
                      {element.price} {element.currency}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary confetti-button">
              Pay {props.totalprice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalbox;
