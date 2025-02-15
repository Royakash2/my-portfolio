const Education = () => {
    return (
        <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6">Education</h1>
            <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                    <h2 className="text-xl font-semibold">Bachelor of Business Studies (BBS)</h2>
                    <p className="text-gray-300">[National Univercity Bnagladesh]</p>
                    <p className="text-gray-400">1st Year (2024 - Present)</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                    <h2 className="text-xl font-semibold">Higher Secondary Certificate (HSC)</h2>
                    <p className="text-gray-300">[Sunamganj Govt Collage,Sunamganj]</p>
                    <p className="text-gray-400">Graduated: 2019</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                    <h2 className="text-xl font-semibold">Secondary School Certificate (SSC)</h2>
                    <p className="text-gray-300">[Govt Jubilee High School Sunamganj]</p>
                    <p className="text-gray-400">Graduated: 2016</p>
                </div>
            </div>
        </div>
    );
};

export default Education;
