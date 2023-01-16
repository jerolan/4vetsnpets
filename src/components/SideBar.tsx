import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Link, NavLink } from "react-router-dom";
import { GiDogHouse } from "react-icons/gi";
import * as Fa from "react-icons/fa";
import * as FaIcons from "react-icons/fa";

function SideBar(props: any) {
  const { user } = UserAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItems = [
    {
      path: "/vets",
      name: `${user.rol === "admin" ? "Add vet" : "View vets"}`,
      icon: <Fa.FaHandHoldingMedical />,
    },
    {
      path: "/pets",
      name: `${user.rol === "user" ? "Add pet" : "View pet"}`,
      icon: <GiDogHouse />,
    },
    {
      path: "/appointments",
      name: `${
        user.rol === "admin" ? "Check appointments" : "Add appointment"
      }`,
      icon: <Fa.FaCalendarAlt />,
    },
    {
      path: "/status",
      name: `${user.rol === "admin" ? "Pet status" : "Check status"}`,
      icon: <Fa.FaBath />,
    },
    {
      path: "/history",
      name: "Medical history",
      icon: <Fa.FaNotesMedical />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <img src="src/assets/img/logo.png" alt="4vetsnpets logo" />
            {user.rol === 'admin' ? "Vets" : "Pets"}
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaIcons.FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={(isActive) => "link" + (!isActive ? " active" : "")}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{props.children}</main>
    </div>
  );
}

export default SideBar;
