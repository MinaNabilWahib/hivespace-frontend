
const SignButton = ({ click, disabled, title }) => {
    return (
        <div
            onClick={click}
            className="p-1 shadow-xl bg-gradient-to-r from-primary to-secondary rounded-full mr-2 mb-4 w-full px-8  transition duration-300 hover:scale-105 active:scale-110">
            <button
                type="button"
                disabled={disabled}
                className="group h-12 px-1 sm:px-12  bg-main  rounded-full transition duration-300 hover:bg-main-x  w-full">
                <div className=" w-full space-x-4 justify-center">
                    <span className="inline-block text-center tracking-normal  font-bold tracking-wide text-main  transition duration-300  group-hover:text-main-x sm:text-base">
                        {title}
                    </span>
                </div>
            </button>
        </div>

    )
}
export default SignButton;