import { NavbarProps } from "../interfaces";

export default function Navbar(props: NavbarProps) {
  const { onSetClassification, classification } = props;
  const classificationArr = ["All", "New", "Used", "Offer"];

  return (
    <div className="nav-container">
      <div className="navbar">
        <ul className="classification-selectors-div">
          {classificationArr.map((selectedClass: string) => {
            return (
              <li
                className={`selectors ${
                  classification === selectedClass ? "active" : ""
                }`}
                onClick={() => {
                  onSetClassification(selectedClass);
                }}
              >
                {selectedClass}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
