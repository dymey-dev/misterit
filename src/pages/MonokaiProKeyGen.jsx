import { useState } from "react";
import { saveAs } from "file-saver";
import md5 from "md5";

function MonokaiProKeyGen() {
  const [emailVscode, setEmailVscode] = useState("");
  const [emailVscodeValidation, setVscodeEmailValidation] = useState("");

  const handleMonokaiProKeyGen = (e) => {
    const email = emailVscode.trim();

    const emailError = email === "" ? "Email is required" : "";

    setVscodeEmailValidation(emailError);

    if (emailError) {
      return;
    }

    try {
      if (isValid) {
        return;
      }

      const uuid = "fd330f6f-3f41-421d-9fe5-de742d0c54c0";
      const hash = md5(`${uuid}${email}`).slice(0, 25);
      const license = hash.match(/.{1,5}/g).join("-");
      const content = `Email: ${email}\nLicense: ${license}`;

      const blob = new Blob([content], {
        type: "text/plain;charset=utf-8",
      });
      saveAs(blob, "Monokia_Pro_license.txt");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-4 mx-4 lg:mx-0">
      <legend className="fieldset-legend">Information</legend>

      <div className="tabs tabs-lift">
        <label className="tab">
          <input type="radio" name="ide_tab" defaultChecked />
          <svg
            fill="#000000"
            width="16px"
            height="16px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 fill-[#0098FF]"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M30.865 3.448l-6.583-3.167c-0.766-0.37-1.677-0.214-2.276 0.385l-12.609 11.505-5.495-4.167c-0.51-0.391-1.229-0.359-1.703 0.073l-1.76 1.604c-0.583 0.526-0.583 1.443-0.005 1.969l4.766 4.349-4.766 4.349c-0.578 0.526-0.578 1.443 0.005 1.969l1.76 1.604c0.479 0.432 1.193 0.464 1.703 0.073l5.495-4.172 12.615 11.51c0.594 0.599 1.505 0.755 2.271 0.385l6.589-3.172c0.693-0.333 1.13-1.031 1.13-1.802v-21.495c0-0.766-0.443-1.469-1.135-1.802zM24.005 23.266l-9.573-7.266 9.573-7.266z"></path>{" "}
            </g>
          </svg>
          VS Code
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <label className="label mb-1">
            Email <span className="text-error font-bold"> *</span>
          </label>
          <input
            type="email"
            className={`input ${emailVscodeValidation ? "input-error" : "input-primary"}`}
            placeholder="Email"
            value={emailVscode}
            onChange={(e) => setEmailVscode(e.target.value)}
            required
          />
          <p className="label text-error block mt-1">{emailVscodeValidation}</p>
          <button
            className="btn btn-primary mt-4"
            onClick={handleMonokaiProKeyGen}
          >
            Generate Key
          </button>
        </div>

        <label className="tab">
          <input type="radio" name="ide_tab" />
          <svg
            fill="#000000"
            width="16px"
            height="16px"
            viewBox="-3 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 fill-[#FF9800]"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="m.003 23.617v-5.687c.007-.298.194-.551.457-.654l.005-.002 7.453-2.361-7.454-2.366c-.181-.069-.323-.205-.398-.377l-.002-.005c-.038-.064-.061-.14-.061-.222 0-.005 0-.01 0-.014v.001-5.727c0-.003 0-.007 0-.01 0-.083.023-.161.064-.227l-.001.002c.077-.177.219-.313.395-.379l.005-.002 17.548-5.564c.036-.014.078-.022.121-.022.19 0 .343.154.343.343 0 .015-.001.029-.003.044v-.002 5.686c-.008.298-.195.55-.457.654l-.005.002-7.375 2.338 7.378 2.339c.268.105.455.358.462.656v.001 5.687.003c0 .036-.004.072-.011.106l.001-.003c-.043.258-.217.467-.45.558l-.005.002-17.549 5.564c-.038.013-.082.021-.128.022-.186-.005-.335-.158-.335-.345 0-.014.001-.028.003-.042v.002z"></path>
            </g>
          </svg>
          Sublime Text
        </label>
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {/* <label className="label mb-1">
            Email <span className="text-error font-bold"> *</span>
          </label> */}
          {/* <input
            type="email"
            className={`input ${emailValidation ? "input-error" : "input-primary"}`}
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="label text-error">{email}</p>
          <button
            className="btn btn-primary mt-4"
            onClick={handleMonokaiProKeyGen}
          >
            {isLoading ? "Generating..." : "Generate Key"}
          </button> */}
        </div>
      </div>
    </fieldset>
  );
}

export default MonokaiProKeyGen;
