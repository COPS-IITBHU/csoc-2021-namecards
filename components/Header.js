import React from "react";
import Link from "next/link";
import { PRIMARY } from "@utils/colors";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const HEADER_ITEMS = [
    {
        id: 1,
        title: "Submit A Card",
        url: "https://github.com/COPS-IITBHU/csoc-2021-namecards",
    },
    {
        id: 2,
        title: "COPS Website",
        url: "https://www.copsiitbhu.co.in/",
    },
];

export default function Header(props) {
    const [mobileNav, setMobileNav] = React.useState(false);
    return (
        <div className="outer-container item-shadow py-3 w-100">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="px-3">
                    <Link href="/">
                        <a className="d-flex align-items-center py-2">
                            <h4 className="font-weight-bold m-0">CSOC NAMECARDS</h4>
                        </a>
                    </Link>
                </div>
                <div className="d-block d-lg-none">
                    <div className="p-3 cursor-pointer" onClick={() => setMobileNav(true)}>
                        <RiMenu3Line size="26" color="grey" />
                    </div>
                    <div className={`mobile-nav-container font-12 ${mobileNav ? "show-nav" : "hide-nav"}`}>
                        <div className="text-right py-3 px-4 mr-2 cursor-pointer" onClick={() => setMobileNav(false)}>
                            <MdClose size="30" color="white" />
                        </div>
                        {HEADER_ITEMS.map((item, index) => (
                            <React.Fragment key={`mobile-nav-${item.id}`}>
                                {item.url && (
                                    <div className="py-2" onClick={() => setMobileNav(false)}>
                                        <a href={item.url} target="_blank">
                                            <div className={`position-relative text-white`}>
                                                <h5>{item.title}</h5>
                                                <div className="menu-item-underline"></div>
                                            </div>
                                        </a>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <div className="d-none d-lg-flex align-items-center">
                    {HEADER_ITEMS.map((item, index) => (
                        <React.Fragment key={`desktop-nav-${item.id}`}>
                            {item.url && (
                                <div>
                                    <a href={item.url} target="_blank" className={`menu-item position-relative`}>
                                        {item.title}
                                        <div className="menu-item-underline"></div>
                                    </a>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                    <div></div>
                </div>
            </div>
            <style jsx>{`
                .outer-container {
                    transition: 0.3s !important;
                    position: fixed;
                    z-index: 4;
                }
                .menu-item {
                    cursor: pointer;
                    text-decoration: none;
                    padding: 34px 20px;
                    color: grey;
                    transition: 0.2s;
                }
                .menu-item-underline {
                    position: absolute;
                    bottom: 24px;
                    left: 20px;
                    height: 2px;
                    width: 0px;
                    background: ${PRIMARY};
                    transition: 0.2s;
                }
                .menu-item:hover {
                    color: black;
                }
                .menu-item:hover > .menu-item-underline {
                    width: 36px;
                }
                .mobile-nav-container {
                    position: fixed;
                    z-index: 1;
                    background: black;
                    left: 0;
                    height: 100vh;
                    width: 100vw;
                    padding-left: 50px;
                    transition: 0.4s;
                }
                .show-nav {
                    top: 0vh;
                }
                .hide-nav {
                    top -100vh;
                }
            `}</style>
        </div>
    );
}
