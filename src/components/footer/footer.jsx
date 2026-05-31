import React from "react";

import "./footer.css";
import Icons from "../../ui/icons/icons";
import Actions from "../../ui/actions/actions";

import logo from "../../assets/portfolio_logo_imagem_png.png";

const currentYear = () => new Date().getFullYear();

export default function Footer() {
    return (
        <footer>
            <Icons isFooter={true} />

            <Actions isNav={false} />

            <div className="msg">
                <h3 className="">Desenvolvido com React, Vite, GSAP, WebGL</h3>
                <h3 className="rights">
                    Henrique Radavelli Machado - {currentYear()}
                </h3>
                <h3 className="rights">© Todos os direitos reservados</h3>
                <img className="logo" src={logo} loading="lazy" alt="" />
            </div>
        </footer>
    );
}
