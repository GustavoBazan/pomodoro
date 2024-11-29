import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';


const HomeIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>

    );
};

const SkillsIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clipRule="evenodd" />
        </svg>

    );
};

const CodeIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clipRule="evenodd" />
        </svg>
    );
};


const projects = [
    { name: 'Início', description: 'Home', href: 'home', icon: HomeIcon },
    { name: 'Comunidade', description: 'Comunidade', href: 'comunidade', icon: SkillsIcon },
    { name: 'Ferramentas', description: "Todas as Ferramentas", href: 'ferramentas', icon: CodeIcon },
];

const onClickLink = (value: string) => {
    const element: HTMLElement = document.getElementById(value) as HTMLElement;
    element.scrollIntoView();
};

export default function HamburguerMenu() {

    return (
        <>
    <Popover className="relative md:ml-1 lg:ml-5">
            <Popover.Button className="inline-flex items-center text-lg leading-6 gap-x-1 font-interface text-slate-200 hover:text-slate-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-slate-200 lg:hidden">
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>


            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 -right-60 max-w-max">
                    <div className="flex-auto w-screen max-w-md overflow-hidden text-sm leading-6 shadow-lg rounded-3xl bg-slate-900/50 backdrop-blur-sm ring-1 ring-slate-100/5">
                        <div className="p-4">
                            {projects.map((item) => (
                                <div key={item.name} className="relative flex p-4 rounded-lg group gap-x-6 hover:bg-slate-700/50">
                                    <div className="flex items-center justify-center flex-none mt-1 rounded-lg h-11 w-11 bg-slate-700/50 group-hover:bg-slate-600/50">
                                        <item.icon aria-hidden="true" />
                                    </div>
                                    <div>
                                        <a onClick={() => onClickLink(item.href)} href={'/#/'+item.href} className="font-semibold text-slate-200">
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </a>
                                        <p className="mt-1 text-slate-300">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
        </>
    )
};