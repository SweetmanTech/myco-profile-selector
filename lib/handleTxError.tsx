import { toast } from 'react-toastify'

const errorMessages = [
  {
    error: 'gas required exceeds allowance',
    solution: 'Insufficient balance. Add more funds to your wallet.',
  },
  {
    error: 'err: insufficient funds for gas',
    solution: 'Insufficient balance. Add more funds to your wallet.',
  },
]

const handleTxError = (error: any) => {
  const primaryError = error?.reason || error?.data?.message
  const nestedError = error?.error?.message
  const fallbackError = error.message

  const matchedError = errorMessages.find(({ error }) => primaryError?.includes(error))
  const customToastMessage = matchedError?.solution

  const toastMessage = customToastMessage || primaryError || nestedError || fallbackError
  toast.error(toastMessage)
}

export default handleTxError
