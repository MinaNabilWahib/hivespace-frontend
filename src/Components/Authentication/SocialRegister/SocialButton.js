
const SocialButton = ({ provider, click, disabled, icon, title }) => {
    return (
        <div
            onClick={(e) => click(e, provider)}
            className="p-1 shadow-xl bg-gradient-to-r from-primary to-secondary rounded-full mr-2 mb-4 w-full pr-8  transition duration-300 hover:scale-105 active:scale-110">
            <button
                disabled={disabled}
                className="group h-12 px-3 sm:px-6 pr-12 bg-main-x  rounded-full transition duration-300 hover:bg-main  w-full">
                <div className="relative flex items-center space-x-4 justify-center">
                    <img src={`${icon}`} className="absolute left-0 w-5" alt="google logo" />
                    <span className="block w-max pl-12 font-bold tracking-wide text-main-x  transition duration-300  group-hover:text-main sm:text-base">
                        {title}
                    </span>
                </div>
            </button>
        </div>

    )
}
export default SocialButton;