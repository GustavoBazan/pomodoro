import { useState, useEffect } from "react";
import ProjectsLink from "./ProjectsLink";

import HamburguerMenu from "./HamburguerMenu";


const links = [
    {
        key: 1,
        name: 'Início',
        link: 'home'
    },
    {
        key: 2,
        name: 'Comunidade',
        link: 'about'
    },
];





export default function Navbar() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            };
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value: string) => {
        const element: HTMLElement = document.getElementById(value) as HTMLElement;
        element.scrollIntoView();
        setActiveLink(value);
    };

    const elements = {
        container: {
            base: ' w-screen h-16 flex flex-row items-center justify-between pl-8 pr-8 fixed z-50 outline outline-1 ',
            theme: ' outline-slate-300/5 font-interface ',
            scrolled: ' backdrop-blur-sm bg-slate-900/95 backdrop-brightness-110 ',
            responsive: ' lg:pl-72 lg:pr-72 lg:w-screen lg:h-16 lg:flex lg:flex-row lg:flex-wrap lg:items-center lg:justify-between md:fixed '
        },
        links: {
            base: ' hidden text-slate-200 text-lg hover:text-slate-400 ',
            theme: '',
            responsive: ' md:ml-1 lg:ml-5 lg:flex ',
            active: ' font-bold '
        }
    }

    const cl = {
        container: elements.container.base + elements.container.theme + (scrolled && (elements.container.scrolled)) + elements.container.responsive,
        links: elements.links.base + elements.links.theme + elements.links.responsive
    }

    return (

        <div id="NavBar" className={cl.container}>
            <div className="flex items-center self-start w-auto h-full ">
                <p className="text-2xl font-bold text-slate-200"><a href="/">BIZUBOARD</a></p>
            </div>
            <div className="flex flex-row items-center w-auto h-full">
                <ul className={cl.links}>

                    {
                        links.map((link) => <li key={link.key} className={(activeLink === link.link && (elements.links.active)) + cl.links}><a href={'/#/' + link.link} onClick={() => onUpdateActiveLink(link.link)}>{(link.name)}</a></li>)
                    }

                    <ProjectsLink />

                </ul>
                <HamburguerMenu />
            </div>
        </div>

    )

};