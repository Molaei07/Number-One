import { useTranslation } from 'react-i18next'
import { LoginVector } from '../../core/icon'
import { useState } from 'react'
import { Stepper, GetCode, AuthorizePanel, GetPhoneNumber } from '../../components/pages/authorize'

const Register = () => {
    const [active, setActive] = useState(1)
    const { t, i18n } = useTranslation()
    const stepsFa = ["شماره تماس", "دریافت کد", "مشخصات کاربری"]
    const stepsEn = ["Phone", "Code", "Information"]
    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <GetPhoneNumber active={active} setActive={setActive} />
            case 2:
                return <GetCode active={active} setActive={setActive} />
            case 3:
                return "case 3"
        }
    }
    return (
        <AuthorizePanel Vector={LoginVector}>
            <Stepper
                steps={i18n.language == "en" ? stepsEn : stepsFa}
                contents={displayStep}
                active={active}
                setActive={setActive}
            />
        </AuthorizePanel>
    )
}

export default Register
