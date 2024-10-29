import { FaFemale, FaMale } from "react-icons/fa";

const GenderSelect = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex mt-2">
        <div className="form-control ">
            <label className={`label cursor-pointer ${selectedGender ==="male" ? "selected" : "" }`}>
                <span className="label-text  text-rose-500 text-2xl"><FaMale /></span>
                <input type="checkbox" 
                checked={selectedGender === "male" }
                onChange={()=> onCheckboxChange("male")}
                className="checkbox checkbox-error bg-white border-none" />
            </label>
        </div>
        <div className="form-control"> 
        <label className={`label cursor-pointer ${selectedGender ==="female" ? "selected" : "" }`}>
                <span className="label-text  text-pink-500 text-2xl "><FaFemale /></span>
                <input type="checkbox" 
                checked={selectedGender === "female" }
                onChange={()=> onCheckboxChange("female")}
                className="checkbox checkbox-secondary bg-white border-none" />
            </label>
        </div>
    </div>
  );
};

export default GenderSelect;
