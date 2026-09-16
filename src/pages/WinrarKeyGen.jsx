import { useState } from "react";
import Winrar_KeyGen from "../hooks/useWinrar";
import { saveAs } from "file-saver";
import JSZip from "jszip";

function WinrarKeyGen() {
  const zip = new JSZip();

  const [registerName, setRegisterName] = useState("");
  const [nameValidation, setNameValidation] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [licenseValidation, setLicenseValidation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleWinrarKeyGen = () => {
    const name = registerName.trim();
    const license = licenseType.trim();

    const nameError = name === "" ? "Registration Name is required" : "";
    const licenseError = license === "" ? "License Type is required" : "";

    setNameValidation(nameError);
    setLicenseValidation(licenseError);

    if (nameError || licenseError) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const key = Winrar_KeyGen(registerName, licenseType);
      zip.file("rarreg.key", key);
      zip.generateAsync({ type: "blob" }).then(function (blob) {
        saveAs(blob, "rarkey.rar");
      });
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-4 mx-4 lg:mx-0">
      <legend className="fieldset-legend">Information</legend>

      <label className="label">Registration Name</label>
      <input
        type="text"
        className={`input ${nameValidation ? "input-error" : "input-primary"}`}
        placeholder="Registration Name"
        value={registerName}
        onChange={(e) => setRegisterName(e.target.value)}
      />
      <p className="label text-error">{nameValidation}</p>

      <label className="label">License Type</label>
      <select
        value={licenseType}
        onChange={(e) => setLicenseType(e.target.value)}
        className={`select ${licenseValidation ? "select-error" : "select-primary"}`}
      >
        <option value="" selected disabled={true}>
          Select License Type
        </option>
        <option value="Single PC usage license">Single PC usage license</option>
        <option value="Local Site License">Local Site License</option>
        <option value="Unlimited Company License">
          Unlimited Company License
        </option>
        <option value="1000 PC usage license">1000 PC usage license</option>
      </select>
      <p className="label text-error">{licenseValidation}</p>
      <button className="btn btn-primary mt-4" onClick={handleWinrarKeyGen}>
        {isLoading ? "Generating..." : "Generate Key"}
      </button>
    </fieldset>
  );
}

export default WinrarKeyGen;
