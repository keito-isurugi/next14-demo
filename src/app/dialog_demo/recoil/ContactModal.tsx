"use client"

import Dialog from "./_components/Dialog"
import useModal from './useModal'

const ContactModal = () => {
  const [isVisible, setIsVisible] = useModal('contact')

  return (
    isVisible && (
      <>
        <Dialog
          isOpen={isVisible}
          closeDialog={() => setIsVisible(false)}
        >
          Modalの中身2
        </Dialog>
      </>
    )
  )
}

export default ContactModal
