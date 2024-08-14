import logo from "../../assets/images/LOGO.svg";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";

export default function Header() {
	return (
		<header className="headerWrap">
			<figure className="headerWrap__fig">
				<Link to="/">
					<img className="logo" src={logo} alt="logo de l'agence kasa" />
				</Link>
			</figure>
			<Nav className="nav-header" />
		</header>
	);
}
