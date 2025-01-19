import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons";

export default function ChiefsCard({chief}){
    return (
        <div className="chief-card">
            <img src={chief.imageSrc} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chief.recipeCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
                <p className="chief-icon">
                    <FontAwesomeIcon icon= {faFacebook} />
                    <FontAwesomeIcon icon= {faInstagram} />
                    <FontAwesomeIcon icon= {faXTwitter} />
                </p>
            </div>
        </div>
    )
}