import React from "react";

export default function Features() {
  return (
    <div>
      <div className="container px-4 py-5" id="featured-3">
        <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <h2>Complaint Form</h2>
            <p>
              The option to file a complaint toward a violation against the deed
              restriction or bylaws in Shadow Lakes. This complaint form will go
              directly to the deed enforcement with the option of filling out
              the form as anonymously or requesting a callback from the deed
              enforcement.
            </p>
            <a href="/">Call to action</a>
          </div>
          <div className="feature col">
            <h2>Frequently Asked Questions</h2>
            <p>
              The most frequently asked questions in Shadow Lakes. The
              frequently asked questions are updated often with new questions
              during the Homeowners Association meeting. If there is an
              unanswered question, don't hesitate to contact us through the
              contact form or ask during the Homeowners Association meeting.
            </p>
            <a href="/">Call to action</a>
          </div>
          <div className="feature col">
            <h2>Board Members</h2>
            <p>
              The volunteer board members directory of Shadow Lakes. Would you
              like to volunteer to help improve Shadow Lakes? The Homeowners
              Association is always looking for new board members or fine
              committee members.
            </p>
            <a href="/">Call to action</a>
          </div>
        </div>
        <hr />
        <div className="row g-4 py-3 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <h2>Approved Exterior Colors</h2>
            <p>
              The most commonly asked question is about exterior paint colors
              for the house. Shadow Lakes enjoy seeing homes with new and fresh
              paint. Be sure to check out the approved exterior paint colors for
              your home.
            </p>
            <a href="/">Call to action</a>
          </div>
          <div className="feature col">
            <h2>Deed Restrictions</h2>
            <p>
              The deed restriction for Shadow Lakes is available to view online
              and in PDF format. In addition, both forms are available to be
              printed for your copy.
            </p>
            <a href="/">Call to action</a>
          </div>
          <div className="feature col">
            <h2>Bylaws</h2>
            <p>
              The bylaws for the Shadow Lakes are available to view online and
              in PDF format. In addition, both forms are available to be printed
              for your copy.
            </p>
            <a href="/">Call to action</a>
          </div>
        </div>
      </div>
    </div>
  );
}
