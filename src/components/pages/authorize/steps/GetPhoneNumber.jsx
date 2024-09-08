import { useTranslation } from "react-i18next"
import { FormInput, FormHolder, Button } from "../../../common"
import { getPhoneNumber } from "../../../../core/validations/validations"

const GetPhoneNumber = ({active, setActive}) => {
    const { t } = useTranslation()
    return (
        <FormHolder
            initialValues={{ phoneNumber: "" }}
            onSubmit={(event) => { setActive(active + 1); console.log(event) }}
            validations={getPhoneNumber}
            style="w-full"
        >
            <h1 className='boldStyle_text w-full mb-5'>ثبت نام</h1>
            <p className='mediumStyle_text mb-5'>جهت دریافت کد یک بار مصرف شماره تلفن خود را وارد کنید</p>
            <FormInput
                certificate="phoneNumber"
                fieldStyle="rounded-full mb-5  py-2.5 h-auto"
                placeholder="شماره مبایل خود را وارد کنید"
                fullSize
                variants="simple"
            />
            <Button vType="button" vStyle="yellow" text="GetCodeBtn" style="w-full mb-5 justify-center !py-2.5 h-auto" />
        </FormHolder>
    )
}

export default GetPhoneNumber
