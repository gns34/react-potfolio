export default function SecondPage() {
    return (
        <div className="bg-gradient-to-b from-cyan-800 via-blue-500 to-gray-800 p-4 md:p-16">
            <div className="box-content p-2 bg-gray-900 rounded-3xl shadow-black shadow-2xl">
                <div className="px-4 md:px-14">
                    <h2 className="text-3xl text-cyan-200 font-['Times New Roman'] font-extrabold pt-6">
                        Skills & Technologies
                    </h2>
                    

                    <div className="text-white p-4 font-extrabold">
                        <br/><br/>
                        <h5 className="text-xl py-2">What I Work With</h5>
                        <h1 className="text-4xl py-6">Technical Expertise</h1>
                        <p className="text-xl py-2">Specialized in <span className="text-cyan-600">Modern Web Development</span></p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                        {/* Frontend Skills */}
                        <div className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                            <h3 className="text-cyan-400 text-xl font-bold mb-4">Frontend</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> React.js
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> Next.js
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> Tailwind CSS
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> JavaScript/TypeScript
                                </li>
                            </ul>
                        </div>

                        {/* Backend Skills */}
                        <div className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                            <h3 className="text-cyan-400 text-xl font-bold mb-4">Backend</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> Node.js
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> Express.js
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> RESTful APIs
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> GraphQL
                                </li>
                            </ul>
                        </div>

                        {/* Database Skills */}
                        <div className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                            <h3 className="text-cyan-400 text-xl font-bold mb-4">Database</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> PostgreSQL
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> MongoDB
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> Redis
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> SQL
                                </li>
                            </ul>
                        </div>

                        {/* Tools & Technologies */}
                        <div className="bg-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                            <h3 className="text-cyan-400 text-xl font-bold mb-4">Tools & Technologies</h3>
                            <ul className="space-y-2 text-gray-300">
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> PostgreSQL
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> MongoDB
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> Redis
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2">▹</span> SQL
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mx-4 py-8 text-center">
                        <button type="button"
                                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300">
                            View All Projects
                        </button>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    );
}
