"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Library } from "@fortawesome/fontawesome-svg-core"
import { FaSymbol } from "@fortawesome/fontawesome-svg-core"
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons"

const search = <FontAwesomeIcon icon={faSearch} />

export default function Navigation() {
    return (
        <section className="navigationContainer">
            <div className="topNavContainer">
                <i></i>
                <p></p>
                <i></i>
            </div>
            <form className="searchContainer" action="">
                <input type="text" placeholder="Search for a city or airport" name="search" />
                <button type="submit"><i class="fa fa-search"></i>
                <FontAwesomeIcon icon="search" />
                </button>
            </form>
        </section>
    )
}