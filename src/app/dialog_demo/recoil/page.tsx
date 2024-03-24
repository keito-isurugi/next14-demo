"use client"

import useModal from './useModal'
import FaqModal from './FaqModal'
import ContactModal from './ContactModal'

const Faq = () => {
  const [, setIsVisible] = useModal("faq")

  return (
    <>
      <button onClick={() => setIsVisible(true)}>
        クリックするとFAQモーダルが開くよ
      </button>
      <FaqModal/>
    </>
  )
}
const Contact = () => {
  const [, setIsVisibl] = useModal("contact")

  return (
    <>
      <button onClick={() => setIsVisibl(true)}>
        クリックするとFAQモーダルが開くよ
      </button>
      <ContactModal/>
    </>
  )
}

const CallModalComponent = () => {
  return (
    <>
      <Faq/>
      <Contact/>
    </>
  )
}

export default CallModalComponent
