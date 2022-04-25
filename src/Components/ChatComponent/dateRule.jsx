const DateRule = ({ date }) => {
	return (
		<div className="flex flex-col items-center mt-2">
			<hr className="w-full" />
			<span className="flex items-center justify-center -mt-3 bg-white h-6 px-3 rounded-full border text-xs font-semibold mx-auto">
				{date}
			</span>
		</div>
	);
};

export default DateRule;
