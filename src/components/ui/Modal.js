import React from 'react';

const Modal = props => {
  return (
    <div className="col-md-4">
      <button type="button" className="btn btn-block btn-warning mb-3" data-toggle="modal" data-target="#modal-notification">Notification</button>
      <div className="modal fade" id="modal-notification" tabindex="-1" role="dialog" aria-labelledby="modal-notification" aria-hidden="true">
        <div className="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
          <div className="modal-content bg-gradient-danger">

            <div className="modal-header">
              <h6 className="modal-title" id="modal-title-notification">Your attention is required</h6>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>

            <div className="modal-body">

              <div className="py-3 text-center">
                <i className="ni ni-bell-55 ni-3x"></i>
                <h4 className="heading mt-4">You should read this!</h4>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              </div>

            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-white">Ok, Got it</button>
              <button type="button" className="btn btn-link text-white ml-auto" data-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

