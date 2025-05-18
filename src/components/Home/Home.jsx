import avatarImg from "../../assets/7358602-removebg-preview.png";
const Home = () => {
    return (
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
            <div className="md:w-2/4 md:pt-10 ">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    Hello, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Anshul
                    </span>
                </h1>
                <p className="text-sm md:text-2xl tracking-tight">
                    Aspiring Full-Stack Developer with a passion for solving real-world problems through technology.
                    Currently pursuing B-Tech in Information Technology.
                </p>
                <a href="#contact">
                    <button className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 
                        hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
                        Contact Me
                    </button>
                </a>
            </div>
            <div>
                <img className="w-50 h-50 md:w-164 md:h-90 object-contain" src={avatarImg} alt="Avatar" />
            </div>
        </div>
    );
};

export default Home;
