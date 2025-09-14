import React from 'react'

const Result = ({ bmi, message }) => {
    return (
        <div>
            {bmi && (
                <h3 className="text-neutral-600 font-medium mt-3 mb-2">
                    Your BMI is =
                    <strong className={`text-lg sm:text-xl ${message.color}`} >  {bmi}</strong> kg/m²
                </h3>
            )}
            {message && (
                <div className="pt-3 mb-0 bg-gray-50 rounded-lg shadow-inner w-full px-0.5">
                    <>
                        <p className={`font-semibold ${message.color} text-lg sm:text-bas`}>
                            <strong className='font-semibold  text-gray-500 text-lg'>Category</strong> :{" "}
                            {message.category}
                        </p>

                        <p className="text-gray-700">
                            {/* <strong className='font-semibold  text-gray-500 text-md'>Risk</strong> :{" "} */}
                            {message.risk}</p>

                        {message.imgSrc && (
                            <div className="text-center mt-4">
                                <img
                                    className="sm:h-48 md:h-48 mx-auto"
                                    src={message.imgSrc}
                                    alt={message.category}
                                />
                            </div>
                        )}
                    </>
                </div>
            )}

        </div>
    )
}

export default Result