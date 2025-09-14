import { useState } from "react"
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [height, setHeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("ft");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const CalBmi = (e) => {
    e.preventDefault();

    if (!weight || !height) return;

    //  Convert Weight
    let weightInKg = weightUnit === "kg" ? weight : weight * 0.453592;

    //  Convert Height
    let heightInMeters;
    if (heightUnit === "cm") heightInMeters = height / 100;
    else if (heightUnit === "ft") heightInMeters = height * 0.3048;
    else if (heightUnit === "in") heightInMeters = height * 0.0254;

    //  BMI Calculation
    let bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(1));

    let result = {};

    if (bmiValue < 16) {
      result = { category: "Underweight (Severe Thinness)", risk: "High risk", imgSrc: "/underweight-removebg-preview.png", color: "text-red-600" };
    } else if (bmiValue >= 16 && bmiValue < 17) {
      result = { category: "Underweight (Moderate Thinness)", risk: "Moderate risk", imgSrc: "/underweight-removebg-preview.png", color: "text-orange-500" };
    } else if (bmiValue >= 17 && bmiValue < 19.5) {
      result = { category: "Underweight (Mild Thinness)", risk: "Mild risk", imgSrc: "/underweight2-removebg-preview.png", color: "text-yellow-500" };
    } else if (bmiValue >= 19.5 && bmiValue < 25) {
      result = { category: "Normal (Healthy Weight)", risk: "Lowest risk", imgSrc: "/healthy-removebg-preview.png", color: "text-green-600" };
    } else if (bmiValue >= 25 && bmiValue < 30) {
      result = { category: "Overweight (Pre-Obese)", risk: "Increased risk", imgSrc: "/overweight-removebg-preview.png", color: "text-orange-500" };
    } else if (bmiValue >= 30 && bmiValue < 35) {
      result = { category: "Obese Class I (Moderate)", risk: "Moderate risk", imgSrc: "/obeese-removebg-preview.png", color: "text-red-500" };
    } else if (bmiValue >= 35 && bmiValue < 40) {
      result = { category: "Obese Class II (Severe)", risk: "High risk", imgSrc: "/obeese-removebg-preview.png", color: "text-red-600" };
    } else {
      result = { category: "Obese Class III (Very Severe)", risk: "Very high risk (life-threatening)", imgSrc: "/obeese-removebg-preview.png", color: "text-red-700" };
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
    <div className="flex justify-center items-center min-h-screen  bg-gradient-to-r from-black via-gray-700 to-gray-200 p-3  font-sans ">
      <div className="shadow-black shadow-lg  rounded-md p-6 bg-white md:p-4  sm:p-8 text-center w-[95%] sm:w-[80%] md:w-[60%] lg:w-[42%]">
        <div className="flex justify-center items-center ">
          <h1 className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold 
               bg-gradient-to-r from-neutral-500 via-gray-800 to-gray-500 
               bg-clip-text text-transparent text-center">
            BMI Calculator
          </h1>


          <img src="/download-removebg-preview.png" className="h-20 w-20" alt="bmi icon" />
        </div>

        {/* form component*/}
        <Form
          CalBmi={CalBmi}
          weightUnit={weightUnit}
          setWeightUnit={setWeightUnit}
          setHeightUnit={setHeightUnit}
          heightUnit={heightUnit}
          weight={weight}
          setWeight={setWeight}
          height={height}
          setHeight={setHeight}
          reload={reload}
        />


        {/* Result Component*/}
        <Result bmi={bmi} message={message} />
      </div>
    </div>
  );
}

export default App;
