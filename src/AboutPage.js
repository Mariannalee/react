import React, { useState } from "react";
import validator from "validator";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [inputValue, setInputValue] = useState(""); // 儲存輸入值

  const validateEmail = (value) => {
    setInputValue(value); // 更新輸入值
    if (validator.isEmail(value)) {
      setErrorMessage("Valid Email Address");
    } else {
      setErrorMessage("Enter a valid Email Address!");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // 當按下 Enter 鍵時，跳轉到 app.html
      if (validator.isEmail(inputValue)) {
        window.location.href = "MyComponent.js"; // 跳轉到猜單字頁面
      } else {
        alert("Please enter a valid email before proceeding.");
      }
    }
  };

  return (
    <div
      style={{
        display: "flex", // 使用 Flexbox
        justifyContent: "center", // 水平居中
        alignItems: "center", // 垂直居中
        height: "100vh", // 占滿視窗高度
        backgroundColor: "#f5f5f5", // 背景色可選
      }}
    >
      <div
        style={{
          textAlign: "center", // 內容文字居中
          padding: "20px",
          backgroundColor: " rgba(255, 182, 182, 0.2)", // 白色背景
          borderRadius: "10px", // 圓角
          boxShadow: "0 4px 8px rgba(249, 192, 192, 0.2)", // 添加陰影
        }}
      >
        <h2>Validating Email in ReactJS【按Enter可以跳轉到猜單字的頁面】</h2>
        <span>Enter Email: </span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => validateEmail(e.target.value)} // 處理輸入變更
          onKeyDown={handleKeyDown} // 改用 onKeyDown
          style={{
            padding: "10px",
            width: "80%",
            marginTop: "10px",
          }}
        />
        <br />
        <span
          style={{
            fontWeight: "bold",
            color: errorMessage === "Valid Email Address" ? "green" : "red",
          }}
        >
          {errorMessage}
        </span>
      </div>
    </div>
  );
};

export default App;
