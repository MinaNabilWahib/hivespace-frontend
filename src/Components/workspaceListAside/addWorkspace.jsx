import { useFormik, FieldArray, FormikProvider } from "formik";
import React, { useEffect } from "react";
import { axiosInstance } from "./../../Network/axiosConfig";
import { useSelector } from "react-redux";

export default function Addworkspace() {
  const [showModal, setShowModal] = React.useState(false);
  const userId = useSelector((state) => state.authorization.currentUser._id);

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "workspace title is Required!";
    }

    if (!values.description) {
      errors.description = "workspace description is Required!";
    } else if (values.description.length > 200) {
      errors.description = "Must be 200 characters or less!";
    }

    if (!values.members[0]) {
      errors.members = "you should add members!";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      members: [],
      owner: userId,
    },
    validate,
    onSubmit: (values) => {
      axiosInstance.post(`/createWorkspace`, values);
      console.log(values);
    },
  });

  useEffect(() => {}, [formik]);

  return (
    <>
      <button
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent hover:bg-gray-400"
        data-modal-toggle="authentication-modal"
        onClick={() => setShowModal(true)}
      >
        <svg
          className="w-6 h-6 fill-current"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </button>

      {/* start modal */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Workspace</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body******************************************/}
                <FormikProvider value={formik}>
                  <form
                    onSubmit={formik.handleSubmit}
                    className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
                  >
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Workspace Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="type your new workspace title"
                      />
                      {formik.errors.title ? (
                        <div style={{ color: "red", fontWeight: "bold" }}>
                          {formik.errors.title}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Workspace Description
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        placeholder="type your workspace Description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      />
                      {formik.errors.description ? (
                        <div style={{ color: "red", fontWeight: "bold" }}>
                          {formik.errors.description}
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Workspace Members
                      </label>
                      <FieldArray
                        name="members"
                        onChange={formik.handleChange}
                        value={formik.values.members}
                        placeholder="Add Members"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        render={(arrayHelpers) => (
                          <div>
                            {formik.values.members.map((members, index) => (
                              <div key={index}>
                                <input
                                  name={`members[${index}]`}
                                  value={formik.values.members[index]}
                                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                  onChange={formik.handleChange}
                                />
                                <button
                                  type="button"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  -
                                </button>
                              </div>
                            ))}
                            <button
                              type="button"
                              onClick={() => arrayHelpers.push("")}
                            >
                              +
                            </button>
                          </div>
                        )}
                      />
                      {formik.errors.members ? (
                        <div style={{ color: "red", fontWeight: "bold" }}>
                          {formik.errors.members}
                        </div>
                      ) : null}
                    </div>
                    {/*footer*****************************************/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Add Workspace
                      </button>
                    </div>
                  </form>{" "}
                </FormikProvider>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
