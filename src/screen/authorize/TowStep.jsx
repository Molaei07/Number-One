import { useTranslation } from 'react-i18next'
import { FormInput, FormHolder, Button } from '../../components/common'
import { LoginVector } from '../../core/icon'
import { AuthorizePanel } from '../../components/pages/authorize'
import { getCodeValidation } from "../../core/validations/validations"

const TowStepLogin = () => {
    const { t } = useTranslation()
    return (
        <AuthorizePanel Vector={LoginVector} >
            <FormHolder
                initialValues={{ verificationCode: "" }}
                onSubmit={(event) => { console.log(event) }}
                validations={getCodeValidation}
                style="w-full h-[390px]"
            >
                <h1 className='boldStyle_text w-full mb-5'>{t("GetCodeCaption")}</h1>
                <p className='mediumStyle_text mb-5'>{t("GetCodeDesc")}</p>
                <FormInput
                    certificate="verificationCode"
                    fieldStyle="rounded-full mb-5  py-2.5 h-auto"
                    placeholder={t("GetCodePlaceholder")}
                    fullSize
                    variants="simple"
                />
                <Button vType="button" vStyle="yellow" text="GetCodeBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
            </FormHolder>
        </AuthorizePanel>
    )
}

export default TowStepLogin