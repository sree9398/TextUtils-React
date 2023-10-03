// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white",
  // });
  // const [btntext, setBtnText] = useState("Enable Dark Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //       borderRadius: "20px",
  //     });
  //     setBtnText("Enable White mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //       borderRadius: "20px",
  //     });
  //     setBtnText("Enable Dark Mode ");
  //   }
  // };
  return (
    <>
      <div class="bg-dark text-secondary px-4 py-5 text-center" >
        <div class="py-5">
          <h1 class="display-5 fw-bold text-white">{props.mode} color hero</h1>
          <div class="col-lg-6 mx-auto">
            <p class="fs-5 mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
        </div>
      </div>
      {/* <div onClick={toggleStyle} className="button btn btn-primary my-3 mx-10">
        {btntext}{" "}
      </div> */}
    </>
  );
}
