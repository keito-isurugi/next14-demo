import { useRecoilState, SetterOrUpdater } from 'recoil'
import { ModalVisibilityState, ModalType } from './modal'

type Response = [
  boolean,
  SetterOrUpdater<boolean>
]

const useModal = (modalType: ModalType): Response => {
  const [isVisible, setIsVisible] = useRecoilState(
    ModalVisibilityState(modalType)
  )

  return [isVisible, setIsVisible]
}

export default useModal
