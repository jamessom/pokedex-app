import React from 'react';

const Pagination = props => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item disabled">
          <a className="page-link" href="/#" tabIndex="-1">
            <i className="fa fa-angle-left"></i>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="/#">1</a></li>
        <li className="page-item active"><a className="page-link" href="/#">2</a></li>
        <li className="page-item"><a className="page-link" href="/#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="/#">
            <i className="fa fa-angle-right"></i>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;