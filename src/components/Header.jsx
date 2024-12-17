export default function Header() {
    return (
        <div className="bg-gradient-to-b from-gray-800 via-blue-500 to-cyan-800 p-4 md:p-16">
            <div className="box-content p-2 bg-gray-900 rounded-3xl shadow-black shadow-2xl">
                <div className="px-4 md:px-14">
                    <nav className="text-white px-2 md:px-6 pt-3 flex flex-col md:flex-row justify-between items-center rounded-2xl">
                        <div className="text-2xl text-blue-950 mb-4 md:mb-0">
                            <p className="text-cyan-200 font-['Times New Roman'] font-extrabold">Portfolio</p>
                        </div>
                        <ul className="nav-items flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 font-['Times New Roman'] font-bold">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="flex justify-center md:float-right">
                        <img src="./react.svg" alt="pic"
                             className="w-40 h-40 md:w-60 md:h-60 mt-10 md:mt-20 md:mr-32"/>
                    </div>
                    <div className="text-white p-4 font-extrabold">
                        <br/><br/>
                        <h5 className="text-xl py-2">Hello it's me</h5>
                        <h1 className="text-4xl py-6">Gopinath Sahu</h1>
                        <p className="text-xl" py-2>I am a <span
                            className="text-cyan-600">Full Stack Developer</span></p>
                    </div>
                    <br/>
                    <div className="ml-4 flex flex-wrap gap-2">
                        <button type="button" name="fb"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Facebook
                        </button>
                        <button type="button" name="tw"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Twitter
                        </button>
                        <button type="button" name="li"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Linkedin
                        </button>
                        <button type="button" name="git"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Github
                        </button>
                    </div>
                    <br/>

                    <div className="mx-4 py-2 text-center md:text-left">
                        <button type="button" name="cv"
                                className="bg-red-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl">Download CV
                        </button>
                    </div>
                    <br/><br/><br/>
                </div>
            </div>
        </div>
    );
}