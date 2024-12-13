export default function Header() {
    return (
        <div className="bg-gradient-to-b from-gray-800 via-blue-500 to-cyan-800 p-16">
            <div className="box-content p-2 bg-gray-900 rounded-3xl shadow-black shadow-2xl">
                <div className="px-14">
                    <nav className="text-white px-6 pt-3 flex justify-between items-center rounded-2xl ">
                        <div className="text-2xl text-blue-950">
                            <p className="text-cyan-200 font-['Times New Roman'] font-extrabold">Portfolio</p>
                        </div>
                        <ul className="mr-7 nav-items flex space-x-4 font-['Times New Roman'] font-bold">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Education</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="flex float-right">
                        <img src="./react.svg" alt="pic" height="300" width="300"
                             className="w-60 h-60 mr-32 ml-auto mt-20"/>
                    </div>
                    <div className="text-white p-4 font-extrabold">
                        <br/><br/>
                        <h5 className="text-xl py-2">Hello it's me</h5>
                        <h1 className="text-4xl py-6">Gopinath Sahu</h1>
                        <p className="text-xl" py-2>I am a <span
                            className="text-cyan-600">Full Stack Developer</span></p>
                    </div>
                    <br/>
                    <div className="ml-4">
                        <button type="button" name="fb"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mr-2 py-2 px-4 rounded">Facebook
                        </button>
                        <button type="button" name="tw"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mr-2 py-2 px-4 rounded">Twitter
                        </button>
                        <button type="button" name="li"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mr-2 py-2 px-4 rounded">Linkedin
                        </button>
                        <button type="button" name="git"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mr-2 py-2 px-4 rounded">Github
                        </button>
                    </div>
                    <br/>

                    <div className="mx-4 py-2">
                        <button type="button" name="cv"
                                className="bg-red-700 hover:bg-green-700 text-white font-bold py-2 px-4 ml-24 rounded-2xl">Download
                            CV
                        </button>
                    </div>
                    <br/><br/><br/>
                </div>
            </div>
        </div>
    );
}