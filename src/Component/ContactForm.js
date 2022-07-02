export default function ContactForm() {
    return (
        <div className=" container mx-auto">
            <div className="flex flex-col">
                <form action="#" method="POST">
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="company-website"
                                           className="block text-sm font-medium text-gray-700">
                                        Your Name
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input
                                            type="text"
                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-3 sm:col-span-2">
                                    <label htmlFor="company-website"
                                           className="block text-sm font-medium text-gray-700">
                                        Your Email
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">

                                        <input
                                            type="text"
                                            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                            placeholder="Your Email ..."
                                        />
                                    </div>
                                </div>
                            </div>


                            <div>
                                <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                    Your query
                                </label>
                                <div className="mt-1">
                      <textarea
                          id="about"
                          name="about"
                          rows={3}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                          placeholder="you@example.com"
                          defaultValue={''}
                      />
                                </div>
                            </div>


                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}
