import React from "react";

function Experience() {
  return (
    <div
      name="experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16   bg-black text-white mt-10"
    >
      <h1 className="text-3xl font-bold mb-5 text-center mt-10 py-8">
        My Experience
      </h1>

      <br />
      <div className="max-w-screen-md mx-auto mb-8 p-8 border rounded-lg shadow-md hover:bg-slate-500">
        <h1 className="text-3xl font-bold mb-5 ">Pulse QA</h1>
        <p>
          The system enables easy test creation through an intuitive record-and-playback functionality, significantly reducing the need for manual scripting. It supports cross-platform testing, allowing test cases to be created and executed across multiple devices and platforms for broader coverage. With AI-driven test stability, the system adapts dynamically to UI changes, minimizing flaky tests and improving reliability. Additionally, it offers real-time execution monitoring, where AI tracks test runs, instantly detects failures, and suggests corrective actions during execution. Parallel test execution further enhances efficiency by allowing multiple test cases to run simultaneously, reducing overall testing time. Moreover, it integrates seamlessly with CI/CD pipelines, ensuring automated end-to-end testing throughout the development and deployment process.
        </p>
      </div>
      <br />

      <div className="max-w-screen-md mx-auto mb-8 p-8 border rounded-lg shadow-md hover:bg-slate-500">
        <h1 className="text-3xl font-bold mb-5 ">Digital Marketing</h1>
        <p>
          I worked in digital marketing and was responsible for maintaining
          servers and projects based on Node.js. My tasks included data-driven
          testing with both valid and invalid inputs, and creating an analytical
          service using Node.js and data science. I also implemented job
          schedulers, integrated them into the system, and set up inbound
          webhooks for Outlook and Gmail.
        </p>
      </div>
      <br />
      <div className="max-w-screen-md mx-auto mb-8 p-8 border rounded-lg shadow-md hover:bg-slate-500">
        <h1 className="text-3xl font-bold mb-5 ">Doctor Management System</h1>
        <p>
          I developed a Doctor Management System with a centralized server using
          Express and Node.js, and implemented ES6 features. I documented the
          API using Postman and handled front-end development with React.js.
          Additionally, I integrated Twilio and Microsoft Teams for
          communication features within the Node.js backend.Anyone can take
          their appointment through online portal
        </p>
      </div>

      <br />
      <div className="max-w-screen-md mx-auto mb-8 p-8 border rounded-lg shadow-md hover:bg-slate-500">
        <h1 className="text-3xl font-bold mb-5 ">Room Rental Website</h1>
        <p>
          I developed a Room Rental Website by creating APIs and writing unit
          test cases. I worked on Firestore API development using Node.js and
          implemented the front end with React.js, ensuring a seamless and
          functional user experience.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
    </div>
  );
}

export default Experience;
