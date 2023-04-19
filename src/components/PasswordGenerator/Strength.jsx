const Strength = ({ value }) => {
    const levels = [
      { message: "TOO WEAK!", classes: "bg-red border-red" },
      { message: "WEAK", classes: "bg-orange border-orange" },
      { message: "MEDIUM", classes: "bg-yellow border-yellow" },
      { message: "STRONG", classes: "bg-strong-green border-strong-green" },
    ];
    const StrengthBars = () => (
      <div className="flex items-center gap-1">
        {levels.map((level, index) => (
          <div
            key={index}
            className={
              "border w-4 h-12 " +
              (index <= value ? levels[value]?.classes : "")
            }
          />
        ))}
      </div>
    );
    return (
      <div
        className="flex justify-between items-center bg-deep-purple px-4 py-3
      sm:px-8 sm:py-5"
      >
        <p className="text-very-dark-grey sm:text-lg">Strength</p>
        <div className="flex items-center gap-2">
          <p className="text-lg sm:text-2xl">
            {levels[value]?.message || "Select at least 1"}
          </p>
          {value === -1 ? null : <StrengthBars />}
        </div>
      </div>
    );
  };
  
  export default Strength;