import { useTranslation } from 'react-i18next'
import { LoginVector } from '../../core/icon'
import { useState } from 'react'
import { Stepper, ChangePassword, GetCode, SetNewPassword, AuthorizePanel } from '../../components/pages/authorize'

const ForgetPasswordLogin = () => {
    const [active, setActive] = useState(1)
    const { t, i18n } = useTranslation()
    const stepsFa = ["شماره تماس", "دریافت کد", "تغییر رمزعبور"]
    const stepsEn = ["Phone", "Code", "Change"]
    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <ChangePassword setActive={setActive} active={active} />
            case 2:
                return <GetCode setActive={setActive} active={active} />
            case 3:
                return <SetNewPassword />
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

export default ForgetPasswordLogin
