import React, { Component } from "react";
export default class Explore extends Component {
  dataList = [
    {
      id: 1,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "https://www.google.com",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      id: 2,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "https://www.google.com",
      image:
        "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
    },
    {
      id: 3,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "https://www.google.com",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
    {
      id: 4,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      link: "https://www.google.com",
      image:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    },
  ];
  render() {
    return (
      <>
        

        <h1 className="text-4xl mx-3 siz text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Explore the Collections of extraordinary NFTs
        </h1>

        <div className="grid explore-grid grid-cols-1 md:grid-cols-3 gap-4 px-10">
          {this.dataList.map((element) => {
            return (
              <div
                key={Math.random()}
                className="max-w-sm h-50 w-50  border-4 rounded-lg font-semibold  bg-gray-200 hover:bg-gray-100 bg-gray-200 "
              >
                <a href="/">
                  <img className="rounded-t-lg" src={element.image} alt="" />
                </a>
                <div className="p-5">
                  <a href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 light:text-white">
                      {element.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 light:text-gray-400">
                    {element.description}
                  </p>
                  <a
                    href={element.link}
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center bg-gray-700 rounded-lg text-white hover:bg-gray-800"
                  >
                    Read more
                    <svg
                      className="ml-2 -mr-1 w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
