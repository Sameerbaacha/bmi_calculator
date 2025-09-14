import React from 'react'

const Form = ({ CalBmi, weight, setWeight, height, setHeight, reload, weightUnit, heightUnit, setHeightUnit, setWeightUnit }) => {
   
    return (
        <div>
            <form onSubmit={CalBmi}>
                {/* Weight Input */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-4 sm:space-x-4">
                    <input
                        className="flex-1 p-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition duration-200"
                        type="number"
                        placeholder={`Enter Weight in ${weightUnit}`}
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                    <select
                        value={weightUnit}
                        onChange={(e) => setWeightUnit(e.target.value)}
                        className="p-3 text-lg border border-gray-300 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 mb-4 transition duration-200"
                    >
                        <option value="kg">kg</option>
                        <option value="lb">lb</option>
                    </select>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <input
                        className="flex-1 p-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 transition duration-200"
                        type="number"
                        placeholder={`Enter height in ${heightUnit}`}
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <select
                        value={heightUnit}
                        onChange={(e) => setHeightUnit(e.target.value)}
                        className="p-[0.6rem] py-[12px] px-[10px] text-lg border border-gray-300 rounded-xl bg-gray-800 text-white  focus:outline-none focus:ring-2 transition duration-200"
                    >
                        <option value="cm">cm</option>
                        <option value="ft">ft</option>
                        <option value="in">in</option>
                    </select>
                </div>


                {/* Buttons */}
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-4">
                    <button
                        type="submit"
                        disabled={!weight || !height}
                        className={`flex-1 px-6 py-3 text-xl font-semibold rounded-xl shadow-md transform transition duration-300 ${!weight || !height
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-gradient-to-r from-slate-600 to-gray-700 text-white hover:scale-105 hover:shadow-lg"
                            }`}
                    >
                        Calculate
                    </button>
                    <button
                        type="button"
                        onClick={reload}
                        className="flex-1 px-6 py-3 text-xl font-semibold text-gray-800 bg-gray-200 rounded-xl shadow-md hover:bg-gray-300 transition duration-300 transform hover:scale-105"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form