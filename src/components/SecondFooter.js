import React from "react";

export default function SecondFooter() {
  return (
    <div className="mt-5 pt-5 pb-5 bg-dark footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2 className=" text-secondary">
              Shadow Lakes{" "}
              <small className="d-block">Homeowners Association</small>
            </h2>
            <p className="pr-5 text-white-50">
              Shadow Lakes Homeowners Association is managed by volunteers from
              the homeowners of Shadow Lakes.
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 links">
            <h4 className="mt-lg-0 mt-sm-3 text-secondary">Links</h4>
            <ul className="m-0 p-0">
              <li>
                <a href="/privacy-policy" className="text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="/" className="text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/newsletter-policy" className="text-white">
                  Newsletter Policy
                </a>
              </li>
              <li>
                <a href="/privacy-policy#11" className="text-white">
                  California Residents
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-xs-12 location text-white-50">
            <h4 className="mt-lg-0 mt-sm-4 text-secondary">Mailing Address</h4>
            <p>
              14851 State Road 52 <br />
              Suite 107-158 <br />
              Hudson, FL 34669
            </p>
            <a href="tel:7278088624" className="mb-0 text-white">
              (727) 808-8624
            </a>
            <br />
            <a
              href="mailto:hello@shadowlakeshoa.info"
              className="mb-0 text-white"
            >
              hello@shadowlakeshoa.info
            </a>
          </div>
          <div className="row mt-3">
            <div className="col copyright">
              <p className="text-center">
                <small className="text-white-50">
                  © 2021. All Rights Reserved. Designed by{" "}
                  <a
                    className="text-white"
                    href="https://terryhunt.dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Terry Hunt
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
