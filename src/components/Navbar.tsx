import { NavbarProps } from "../interfaces";

export default function Navbar(props: NavbarProps) {
  const { onSetClassification, classification } = props;
  const classificationArr = ["All", "New", "Used", "Offer"];

  return (
    <div className="nav-container">
      <div className="navbar">
        <ul className="classification-selectors-div">
          {classificationArr.map((selectedClass: string, index: number) => {
            return (
              <li
                className={`selectors ${
                  classification === selectedClass ? "active" : ""
                }`}
                key={index}
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
