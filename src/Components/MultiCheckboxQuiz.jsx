import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Slide data (example)
const slidesData = [
  Array(10).fill(null), // Slide 1
  Array(10).fill(null), // Slide 2
  Array(10).fill(null), // Slide 3
  Array(10).fill(null), // Slide 4
  Array(10).fill(null), // Slide 5
];

const MultiCheckboxQuiz = () => {
  // Firebase config
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // States
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(slidesData.length).fill(Array(10).fill(false))
  );
  const [finalScore, setFinalScore] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Phone number state
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedAction, setSelectedAction] = useState("No action"); // State to track button click
  const [savedState, setSavedState] = useState({})

  // Handle checkbox change
  const handleCheckboxChange = (slideIndex, optionIndex) => {
    const updatedSelection = selectedOptions.map((slide, index) =>
      index === slideIndex
        ? slide.map((checked, idx) => (idx === optionIndex ? !checked : checked))
        : slide
    );
    setSelectedOptions(updatedSelection);
  };

  // Calculate average for each slide
  const calculateSlideAverage = (slideIndex) => {
    const selectedCount = selectedOptions[slideIndex].filter(Boolean).length;
    return (selectedCount / 10) * 100;
  };

  // Go to next slide
  const handleNext = () => {
    if (currentSlide < slidesData.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  // Go to previous slide
  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // Get the score and show form
  const handleGetScore = () => {
    const totalAverage = selectedOptions
      .map((_, index) => calculateSlideAverage(index))
      .reduce((sum, average) => sum + average, 0);

    const finalScore = totalAverage / slidesData.length;
    setFinalScore(finalScore.toFixed(2));
    setIsFormVisible(true); // Show form after clicking get score 
  };

  // Handle form submission
  const handleSubmitForm = () => {
    if (!name || !email || !phone) {
      alert("Please enter your name, email, and phone number.");
      return;
    }

    // Flatten the selectedOptions array
    const flattenedSelectedOptions = selectedOptions.flat();

    // Log the values for debugging
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Button Clicked: ", selectedAction); // Check if selectedAction has the correct value
    console.log("Score: ", finalScore); // Check score value

    // Add check for which button was clicked
    const buttonClicked = selectedAction; // Track the button action (e.g., "Get Tips" or "Request a Call")

    setSavedState({
      name,
      email,
      phone,
      selectedOptions: flattenedSelectedOptions,
      score: finalScore,
      buttonClicked,
      timestamp: serverTimestamp(),
    })

    setIsModalOpen(true)

  };

  // Handle button click action (Get Tips or Request a Call)
  const handleButtonClick = (actionType) => {
    setSelectedAction(actionType); // Set the action (e.g., "Get Tips" or "Request a Call")
    console.log("Selected Action: ", actionType); // Log for debugging

    // Save data to Firestore
    addDoc(collection(db, "quizResults"), {
      ...savedState,
      buttonClicked : actionType
    })
      .then((data) => {
       console.log("Data saved, Congrats!", data);
      })
      .catch((error) => {
        console.error("Error submitting data: ", error);
        console.log(error)
        alert("There was an issue submitting the form.");
      });

    // Close modal and form after clicking a button
    setIsModalOpen(false);
    setIsFormVisible(false);
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 py-8">
      <div className="bg-white w-full max-w-7xl p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-center mb-4">Slide {currentSlide + 1}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            {slidesData[currentSlide].slice(0, 5).map((_, index) => (
              <div key={index} className="block text-gray-700 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2 font-bold">{index + 1}.</span>
                  Option {index + 1}
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                  checked={selectedOptions[currentSlide][index]}
                  onChange={() => handleCheckboxChange(currentSlide, index)}
                />
              </div>
            ))}
          </div>
          <div className="space-y-3">
            {slidesData[currentSlide].slice(5, 10).map((_, index) => (
              <div key={index + 5} className="block text-gray-700 flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-2 font-bold">{index + 6}.</span>
                  Option {index + 6}
                </div>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-blue-500"
                  checked={selectedOptions[currentSlide][index + 5]}
                  onChange={() => handleCheckboxChange(currentSlide, index + 5)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-6">
          {currentSlide > 0 && (
            <button
              onClick={handleBack}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Back
            </button>
          )}
          {currentSlide < slidesData.length - 1 ? (
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleGetScore}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Get Score
            </button>
          )}
        </div>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h3 className="text-2xl font-semibold mb-4">Enter Your Details</h3>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-3 p-2 border rounded"
            />
            <button
              onClick={handleSubmitForm}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <h3 className="text-2xl font-semibold mb-4">Your Total Score</h3>
            <p className="text-lg font-bold text-green-600 mb-4">{`Your score: ${finalScore}`}</p>
            <p className="text-5xl">
              {finalScore < 70 ? "😞" : "😊"}
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => handleButtonClick("Get Tips")}
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Get Tips
              </button>
              <button
                onClick={() => handleButtonClick("Request a Call")}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Request a Call
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiCheckboxQuiz;