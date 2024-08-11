import { TypeAnimation } from "react-type-animation";

function Contact() {
  return (
    <div
      id="contact"
      className="bg-gray-900 grid grid-cols-2 items-center justify-center min-h-screen"
    >
      <div className="col-span-2 text-center">
        <pre className="font-bold text-xl text-green-800 m-5">
          <code>&lt;Contact /&gt;</code>
        </pre>
      </div>
      <div className="border-topbarBg bg-topbarBg h-full items-center justify-center z-10">
        <div className="shadow p-4 flex flex-col gap-5 font-mono w-full max-w-xl mx-auto h-full">
          <div className="shadow-2xl shadow-green-700 bg-black bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-5 p-4 flex flex-col gap-5">
            <form
              className="flex flex-col gap-5 w-full"
              action="https://formspree.io/f/xzzpzkgw"
              method="POST"
            >
              <input
                type="text"
                placeholder="Name"
                className="p-2 placeholder-lime-900 text-lime-400"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="p-2 placeholder-lime-900 text-lime-400"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="p-2 placeholder-lime-900 text-lime-400"
              ></textarea>
              <button type="submit" className="bg-green-800 p-2 drop-shadow-xl">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-topbarBg bg-topbarBg h-full z-10 ">
        <span className="text-lg font-bold text-lime-600 mr-2">~$</span>
        <span>
          <TypeAnimation
            className="text-lime-700 text-xl lowercase drop-shadow-xl max-w-lg mx-auto"
            sequence={[
              "I'm thrilled to connect with you! whether",
              2500,
              "you have a question, a project idea, or just want to say hello",
              2000,
              "feel free to reach out.",
              2000,
              "Please enter your email, name and message on the left.",
              2000,
              "and I'll get back to you soon!",
              2000,
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </span>
      </div>
    </div>
  );
}

export default Contact;
