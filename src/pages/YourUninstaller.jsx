function YourUninstaller() {
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl border p-4 mt-4 mx-4 lg:mx-0">
      <legend className="fieldset-legend">Information</legend>
      <div className="collapse bg-base-100 border border-base-300">
        <input id="collapse-1-toggle" type="checkbox" className="peer" />
        <label
          htmlFor="collapse-1-toggle"
          className="fixed inset-0 hidden peer-checked:block"
        ></label>
        <div className="collapse-title font-semibold">
          Click to show the license key.
        </div>
        <div className="collapse-content text-sm z-1">
          01FQ1P-2BE3G6-2TQQ7U-KDNY8V-ZZFZZZ-ZZZZZZ-ZWCJP9-51VJ00-800000-000000
        </div>
      </div>
    </fieldset>
  );
}

export default YourUninstaller;
