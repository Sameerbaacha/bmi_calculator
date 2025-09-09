import { useState } from "react"

function App() {
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const CalBmi = (e) => {
    e.preventDefault();

    if (!weight || !height) {
      alert("Please fill All Fields");
      return;
    }

    // ✅ Convert Weight
    let weightInKg = weightUnit === "kg" ? weight : weight * 0.453592;

    // ✅ Convert Height
    let heightInMeters;
    if (heightUnit === "cm") heightInMeters = height / 100;
    else if (heightUnit === "ft") heightInMeters = height * 0.3048;
    else if (heightUnit === "in") heightInMeters = height * 0.0254;

    // ✅ BMI Calculation
    let bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1));

    let result = {};

    if (bmiValue < 16) {
      result = {
        category: "Underweight (Severe Thinness)",
        risk: "High risk of nutritional deficiency, osteoporosis, low immunity",
        imgSrc: "/underweight-removebg-preview.png"
      };
    } else if (bmiValue >= 16 && bmiValue < 17) {
      result = {
        category: "Underweight (Moderate Thinness)",
        risk: "Moderate risk",
        imgSrc: "/underweight-removebg-preview.png"
      };
    } else if (bmiValue >= 17 && bmiValue < 19.5) {
      result = {
        category: "Underweight (Mild Thinness)",
        risk: "Mild risk",
        imgSrc: "/underweight2-removebg-preview.png"
      };
    } else if (bmiValue >= 19.5 && bmiValue < 25) {
      result = {
        category: "Normal (Healthy Weight)",
        risk: "Lowest risk",
        imgSrc: "/healthy-removebg-preview.png"
      };
    } else if (bmiValue >= 25 && bmiValue < 30) {
      result = {
        category: "Overweight (Pre-Obese)",
        risk: "Increased risk of cardiovascular diseases, diabetes",
        imgSrc: "/overweight-removebg-preview.png"
      };
    } else if (bmiValue >= 30 && bmiValue < 35) {
      result = {
        category: "Obese Class I (Moderate)",
        risk: "Moderate risk",
        imgSrc: "/obeese-removebg-preview.png"
      };
    } else if (bmiValue >= 35 && bmiValue < 40) {
      result = {
        category: "Obese Class II (Severe)",
        risk: "High risk",
        imgSrc: "/obeese-removebg-preview.png"
      };
    } else {
      result = {
        category: "Obese Class III (Very Severe / Morbid Obesity)",
        risk: "Very high risk (life-threatening)",
        imgSrc: "/obeese-removebg-preview.png"
      };
    }
    setMessage(result);
  };

  const reload = () => {
    setWeight("");
    setWeightUnit("kg");
    setHeight("");
    setHeightUnit("ft");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-500 p-4 font-sans">
      <div className="shadow-black shadow-lg rounded-md p-6 bg-white md:p-6 sm:p-8 text-center w-[95%] sm:w-[80%] md:w-[60%] lg:w-[42%]">
        <h2 className="text-2xl sm:text-3xl font-medium mb-4">BMI Calculator</h2>

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
              className="flex-1 px-6 py-3 text-xl font-semibold text-white bg-gray-800 rounded-xl shadow-md hover:bg-gray-900 transition duration-300 transform hover:scale-105"
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

        {/* Result */}
        <div>
          {bmi && (
            <h3 className="text-neutral-600 font-medium mt-4 mb-2">
              Your BMI is
              <strong className="text-lg sm:text-xl"> = {bmi}</strong> kg/m²
            </h3>
          )}
          {message && (
            <div className="pt-3 mb-0 bg-gray-50 rounded-lg shadow-inner w-full px-0.5">
              <>
                <p className="text-neutral-900 text-sm sm:text-base">
                  <strong className="text-neutral-800">Category</strong> :{" "}
                  {message.category}
                </p>
                <p className="text-neutral-900 max-w-full md:max-w-[30rem] mx-auto text-sm sm:text-base">
                  <strong className="text-neutral-800">Risk</strong> :{" "}
                  {message.risk}
                </p>

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
      </div>
    </div>
  );
}

export default App;
