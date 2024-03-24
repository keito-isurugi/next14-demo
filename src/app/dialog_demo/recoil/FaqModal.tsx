"use client"

import Dialog from "./_components/Dialog"
import useModal from './useModal'

const FaqModal = () => {
  const [isVisible, setIsVisible] = useModal('faq')

  return (
    isVisible && (
      <>
        <Dialog
          isOpen={isVisible}
          closeDialog={() => setIsVisible(false)}
        >
          Modalの中身
        </Dialog>
      </>
    )
  )
}

export default FaqModal
