import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useEffect, useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import axios from "axios";

function Update({ data, setData, setCounter }) {
  const [updateVisible, setUpdateVisible] = useState(false);
  const toast = useRef(null);
  const { control, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    reset(data[0]);
  }, [data]);

  const onSubmit = (updatedData) => {
    setLoading(true);
    axios
      .patch("http://localhost:8080/", updatedData)
      .then((res) => {
        setLoading(false);
        reset();
        setUpdateVisible(false);
        toast.current.show({
          severity: "success",
          summary: "Form Submitted",
          detail: res.data.message,
          life: 1000,
        });
      })
      .catch((err) => {
        setLoading(false);
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: err?.message,
          life: 1000,
        });
      });
  };

  return (
    <div>
      <Toast ref={toast} />
      <Button
        onClick={() => setUpdateVisible(true)}
        label="Update"
        severity="info"
      />
      {/* Update Dialog */}
      <Dialog
        header="Update"
        visible={updateVisible}
        style={{ width: "50vw" }}
        onHide={() => setUpdateVisible(false)}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-column gap-2"
        >
          <div className="grid mt-3">
            <div className="col-6 mt-2">
              <Controller
                name="firstName"
                control={control}
                // rules={{ required: "First Name is required." }}
                render={({ field, fieldState }) => (
                  <>
                    <label
                      htmlFor={field.name}
                      // className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        style={{ width: "100%" }}
                        id={field.name}
                        value={field.value}
                        className={classNames({
                          // "p-invalid": fieldState.error,
                        })}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label htmlFor={field.name}>First Name</label>
                    </span>
                    {/* {getFormErrorMessage(field.name)} */}
                  </>
                )}
              />
            </div>
            <div className="col-6 mt-2">
              <Controller
                name="lastName"
                control={control}
                // rules={{ required: "Last Name is required." }}
                render={({ field, fieldState }) => (
                  <>
                    <label
                      htmlFor={field.name}
                      // className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        style={{ width: "100%" }}
                        id={field.name}
                        value={field.value}
                        className={classNames({
                          // "p-invalid": fieldState.error,
                        })}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label htmlFor={field.name}>Last Name</label>
                    </span>
                    {/* {getFormErrorMessage(field.name)} */}
                  </>
                )}
              />
            </div>
            <div className="col-6 mt-2">
              <Controller
                name="position"
                control={control}
                // rules={{ required: "Position Name is required." }}
                render={({ field, fieldState }) => (
                  <>
                    <label
                      htmlFor={field.name}
                      // className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        style={{ width: "100%" }}
                        id={field.name}
                        value={field.value}
                        className={classNames({
                          // "p-invalid": fieldState.error,
                        })}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label htmlFor={field.name}>Position</label>
                    </span>
                    {/* {getFormErrorMessage(field.name)} */}
                  </>
                )}
              />
            </div>
            <div className="col-6 mt-2">
              <Controller
                name="address"
                control={control}
                // rules={{ required: "Address is required." }}
                render={({ field, fieldState }) => (
                  <>
                    <label
                      htmlFor={field.name}
                      // className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        style={{ width: "100%" }}
                        id={field.name}
                        value={field.value}
                        className={classNames({
                          // "p-invalid": fieldState.error,
                        })}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label htmlFor={field.name}>Address</label>
                    </span>
                    {/* {getFormErrorMessage(field.name)} */}
                  </>
                )}
              />
            </div>
          </div>
          <Button
            loading={loading}
            label="Update"
            type="submit"
            icon="pi pi-check"
          />
        </form>
      </Dialog>
    </div>
  );
}

export default Update;
