import { useTranslation } from "react-i18next";

const BlueButton = ({ text,Class}) => {
    const { t, i18n } = useTranslation();
    return (
        <button className={`${Class} bg-Purple rounded-3xl text-white pb-3 pt-1.5 block  
        BoxShadow-BtnBlue hover:BoxShadow-BtnBlue_Hover duration-200`}>
            <span className="text-sm">{t(text)}</span>
            <img src="./icons/ArrowSvg.svg" alt="Arrow" className={`${i18n.language === "en" ? "reverse-img" : ""}
            inline mx-2 h-3 `} />
        </button>
    )
}

export default BlueButton