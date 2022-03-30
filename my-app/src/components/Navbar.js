import React, { Component } from 'react'

export default class navBar extends Component {
    render() {
        return (
            <>
                <nav className="nav fixed top-0 left-0 right-0  flex flex-wrap items-center bg-gray-100 justify-between px-4">
                    <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
                        <span className="font-semibold text-xl tracking-tight">Marketplace</span>
                    </div>

                    <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                    <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                        <span className="navicon bg-grey-darkest flex items-center relative"></span>
                    </label>

                    <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
                        <li className="border-t md:border-none">
                            <a href="/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold">Home</a>
                        </li>
                        <li className="border-t md:border-none">
                            <a href="/about/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Explore</a>
                        </li>
                        <li className="border-t md:border-none">
                            <a href="/about/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Resources</a>
                        </li>

                        <li className="border-t md:border-none">
                            <a href="/blog/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker">Create</a>
                        </li>
                        <li className="border-t md:border-none">
                            <a href="/blog/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"><i class="bi bi-person"></i></a>
                        </li>
                        <li className="border-t md:border-none">
                            <a href="/blog/" className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"><i class="bi bi-wallet2"></i></a>
                        </li>

                    </ul>
                </nav>
            </>
        )
    }
}
