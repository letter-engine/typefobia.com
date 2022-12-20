import { Children, useContext } from "react";
import classes from "../../styles/Navbar.module.css";
import { ModalContext } from "../../store/modal-context";
// Components
import Link from "next/link";
import Button from "../UI/Button";

const menu = [
  { text: "Home", url: "/" },
  { text: "Charlas", url: "/charlas" },
  { text: "Talleres", url: "/talleres" },
  { text: "Actividades", url: "/actividades" },
];

export default function Navbar() {
  const modalctx = useContext(ModalContext);
  const handleClick = (prop) => {
    modalctx.mountHandler();
    modalctx.setModal(prop);
    console.log(modalctx.currentModal);
  };
  return (
    <nav className={classes.nav}>
      {menu.map((navEl, i) => (
        <Link key={`nav-link-${i}`} href={navEl.url}>
          {navEl.text}
        </Link>
      ))}
      <Button onClick={() => handleClick("Donar")}>Donar</Button>
      <Button onClick={() => handleClick("Registro")}>Registro</Button>
    </nav>
  );
}
