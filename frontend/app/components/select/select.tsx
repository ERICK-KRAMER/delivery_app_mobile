const Select = () => {
  return (
    <form className="w-full my-2 mx-auto">
      <label htmlFor="small" className="block mb-2 text-sm text-red-500 font-extrabold ">Pagar na Hora da entrega</label>
      <select id="small" className="block w-full p-2 py-4 mb-6 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-lg">
        <option selected>Escolha a Forma de pagamento</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Visa">Visa</option>
        <option value="pix">Pix</option>
      </select>
    </form>
  )
}
export { Select };