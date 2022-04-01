import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="flex py-5 bg-gray-100 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/#" className="w-6 mx-1">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="/#" className="w-6 mx-1">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="/#" className="w-6 mx-1">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="/#" className="w-6 mx-1">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="/#" className="w-6 mx-1">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <div className="my-5">© Copyright 2020. All Rights Reserved.</div>
        </div>
      </>
    );
  }
}
