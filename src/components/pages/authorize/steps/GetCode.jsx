import { useTranslation } from "react-i18next";
import { FormInput, FormHolder, Button } from "../../../common"
import { getCodeValidation } from "../../../../core/validations/validations"

const GetCode = ({ active, setActive }) => {
    const { t } = useTranslation()
    return (
        <FormHolder
            initialValues={{ verificationCode: "" }}
            onSubmit={(event) => { setActive(active + 1); console.log(event) }}
            validations={getCodeValidation}
            style="w-full"
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
    )
}

export default GetCode
