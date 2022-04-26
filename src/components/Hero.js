import React from "react";

export default function Hero() {
  return (
    <div className="bg-dark text-secondary">
      <div className="container col-xl-10 col-xxl-8 px-4 py-5">
        <div className="row align-items-center g-lg-5 py-5">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 mb-3">
              Shadow Lakes Homeowners Association
            </h1>
            <p className="col-lg-10 fs-4">
              The board and officers meet on the third Wednesday of the month at
              7:00 pm. The homeowners meeting is at 7:30 pm.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form
              className="p-4 p-md-5 border rounded-3 bg-light"
              action="https://shadowlakeshoa.us6.list-manage.com/subscribe/post?u=405e4e8110a357fc0af67bee8&amp;id=d466e2f72a"
              method="post"
              target="_blank"
              noValidate
            >
              <p>
                Sign up for Shadow Lakes Homeowners Association's Newsletter
              </p>
              <hr className="my-4" />
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="FNAME"
                  className="form-control"
                  id="floatingInput"
                  placeholder="John/Jan"
                  required
                />
                <label for="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="LNAME"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Smith"
                  required
                />
                <label for="floatingInput">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  name="EMAIL"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  required
                />
                <label for="floatingInput">Email address</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign up
              </button>
              <hr className="my-4" />
              <small className="text-muted">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
