import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import React, { useRef, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";

function Update() {
  const [updateVisible, setUpdateVisible] = useState(false);
  const toast = useRef(null);

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    setUpdateVisible(false);
    toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      // detail: getValues("value"),
      life: 1000,
    });
  };

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
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
            <div className="col-6">
              <Controller
                name="firstName"
                control={control}
                rules={{ required: "First Name is required." }}
                render={({ field, fieldState }) => (
                  <>
                    <label
                      htmlFor={field.name}
                      className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        style={{ width: "100%" }}
                        id={field.name}
                        value={field.value}
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label htmlFor={field.name}>First Name</label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </>
                )}
              />
            </div>
            <div className="col-6">
              <Controller
                name="lastName"
                control={control}
                rules={{ required: "Last Name is required." }}
                render={({ field, fieldState }) => (
                  <>
                    <label
                      htmlFor={field.name}
                      className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        style={{ width: "100%" }}
                        id={field.name}
                        value={field.value}
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label htmlFor={field.name}>Last Name</label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </>
                )}
              />
            </div>
            <div className="col-6">
              <Controller
                name="position"
                control={control}
                rules={{ required: "Position Name is required." }}
                render={({ field, fieldState }) => (
                  <>
                    <label
                      htmlFor={field.name}
                      className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        style={{ width: "100%" }}
                        id={field.name}
                        value={field.value}
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label htmlFor={field.name}>Position</label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </>
                )}
              />
            </div>
            <div className="col-6">
              <Controller
                name="address"
                control={control}
                rules={{ required: "Address is required." }}
                render={({ field, fieldState }) => (
                  <>
                    <label
                      htmlFor={field.name}
                      className={classNames({ "p-error": errors.value })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        style={{ width: "100%" }}
                        id={field.name}
                        value={field.value}
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label htmlFor={field.name}>Address</label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </>
                )}
              />
            </div>
          </div>
          <Button label="Submit" type="submit" icon="pi pi-check" />
        </form>
      </Dialog>
    </div>
  );
}

export default Update;
