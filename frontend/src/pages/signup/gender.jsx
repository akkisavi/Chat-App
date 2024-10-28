import { FaFemale, FaMale } from "react-icons/fa";

const GenderSelect = () => {
  return (
    <div className="flex mt-2">
        <div className="form-control ">
            <label className="label cursor-pointer ">
                <span className="label-text  text-white text-2xl"><FaMale /></span>
                <input type="checkbox" defaultChecked className="checkbox bg-white " />
            </label>
        </div>
        <div className="form-control">
        <label className="label cursor-pointer">
                <span className="label-text  text-white text-2xl"><FaFemale /></span>
                <input type="checkbox" defaultChecked className="checkbox  bg-white" />
            </label>
        </div>
    </div>
  );
};

export default GenderSelect;
