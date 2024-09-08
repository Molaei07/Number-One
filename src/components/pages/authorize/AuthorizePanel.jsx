import ParticlesAuthorize from '../../../core/utility/Particles/particles'
import Typewriter from 'typewriter-effect';
import { FormHolder, ImportantWord } from '../../common'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { AdminIcon, HomeBtnPanelIcon } from '../../../core/icon';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const AuthorizePanel = ({ children, Vector }) => {
    const { t, i18n } = useTranslation()
    const persianWords = ["یادگیری", "تلاش", "استقامت"]
    const englishWords = ["Learning", "Effort", "Stamina"]
    return (
        <div className='w-full h-svh max-h-svh lg:px-44 sm:px-16 px-8 flex justify-center xl:justify-start items-center'>
            <ParticlesAuthorize />
            <div className='relative xl:w-full sm:h-[590px] flex justify-between rounded-[50px] bg-white/50'>
                <div className={`authorizeForm ${i18n.language == "en" ? "authorizePanel_shadow_en" : "authorizePanel_shadow_fa"}`}>
                    {children}
                </div>
                <div className='relative hidden w-full h-full xl:flex flex-wrap justify-end rounded-e-[50px] py-28 px-10'>
                    <div className='absolute top-8 flex gap-x-3 items-center'>
                        <Link data-tooltip-id="my-tooltip" data-tooltip-content={i18n.language != "en" ? "ادمین" : "Admin"} data-tooltip-variant='light'>
                            <AdminIcon fill="#050079" />
                        </Link>
                        <Link to="/" data-tooltip-id="my-tooltip" data-tooltip-content={i18n.language != "en" ? "خانه" : "Home"} data-tooltip-variant='light'>
                            <HomeBtnPanelIcon fill="#050079" />
                        </Link>
                        <Tooltip id='my-tooltip' />
                    </div>
                    <div className='w-full'>
                        <div className="flex justify-center md:justify-start flex-wrap h-fit gap-y-4 md:gap-x-3 items-end">
                            <h1 className='boldStyle_text w-full text-nowrap text-center md:w-auto'>{t("heroSectionTitle1")}</h1>
                            <ImportantWord holderStyle="h-8">
                                <Typewriter
                                    options={{
                                        strings: (i18n.language === "en" ? englishWords : persianWords),
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </ImportantWord>
                        </div>
                        <h1 className='boldStyle_text md:text-start text-center'>{t("heroSectionTitle2")}</h1>
                    </div>
                    <div className={i18n.language == "en" ? "reverse-img" : ""}>
                        <Vector width="350" height="350px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorizePanel
