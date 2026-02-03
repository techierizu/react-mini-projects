const Interest = ({ data, setData, errors }) => {
  const { interests } = data;

  const handleCheck = (e, name) => {
    setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Coding"
            checked={interests.includes("Coding")}
            onChange={(e) => handleCheck(e)}
          />
          Coding
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Swimming"
            checked={interests.includes("Swimming")}
            onChange={(e) => handleCheck(e)}
          />
          Swimming
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Cricket"
            checked={interests.includes("Cricket")}
            onChange={(e) => handleCheck(e)}
          />
          Cricket
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Travelling"
            checked={interests.includes("Travelling")}
            onChange={(e) => handleCheck(e)}
          />
          Travelling
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Gardening"
            checked={interests.includes("Gardening")}
            onChange={(e) => handleCheck(e)}
          />
          Gardening
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="Cycling"
            checked={interests.includes("Cycling")}
            onChange={(e) => handleCheck(e)}
          />
          Cycling
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
};
export default Interest;
