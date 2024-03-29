import { memo } from "react";

const Input = memo(
  ({
    tokenAmount,
    changeAmount,
    handlePercentageClick,
    inputName,
    fetchAmount,
  }) => {
    const handleKeyDown = (event) => {
      const key = event.code || event.keyCode;
      if (
        key === "e" ||
        key === "E" ||
        key === "KeyE" ||
        key === "Keye" ||
        key === "Minus"
      ) {
        event.preventDefault();
      }
    };
    return (
      <>
        <div className="my-[8px] bg-[#F8FAFC] rounded-[8px] p-[8px] flex justify-between items-center">
          {inputName == "firstTokenAmount" ? (
            <button
              onClick={handlePercentageClick}
              className="py-[2px] px-[8px] rounded-[8px] text-[#697586] text-[14px] font-[400] font-Inter"
            >
              MAX
            </button>
          ) : (
            <div></div>
          )}
          <div className="">
            <input
              type="number"
              name={inputName}
              value={tokenAmount}
              onChange={changeAmount}
              onKeyDown={handleKeyDown}
              onBlur={fetchAmount}
              className="text-[#9AA4B2] h-[30px] font-Inter text-[20px] text-right w-full bg-transparent outline-none font-[500]"
              placeholder="0.0"
            />
            <p className="text-[#9AA4B2] text-[14px] font-[400] font-Inter text-right">
              {/* price here  */}
            </p>
          </div>
        </div>
        {inputName == "firstTokenAmount" ? (
          <div className="h-[28px] flex justify-between mb-[8px]">
            <button
              onClick={() => handlePercentageClick("25")}
              className="l-trans-btn small-btn"
            >
              25%
            </button>
            <button
              onClick={() => handlePercentageClick("50")}
              className="l-trans-btn small-btn"
            >
              50%
            </button>
            <button
              onClick={() => handlePercentageClick("75")}
              className="l-trans-btn small-btn"
            >
              75%
            </button>
            <button
              onClick={handlePercentageClick}
              className="l-trans-btn small-btn"
            >
              100%
            </button>
          </div>
        ) : null}
      </>
    );
  }
);

export default Input;
