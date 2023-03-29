import { Modal, Form, Input } from "antd";
import { useMemo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {GET_USER_DETAILS,SET_MODAL} from '../Redux/types'

const EditUser = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [initialvalue, setInitialvalue] = useState({});

  const { isModalOpen, userDetails, selectedUserDetails } = useSelector(
    (state) => state.reducer1
  );

  useEffect(() => {
    form.setFieldsValue(initialvalue)
   }, [form, initialvalue]);

  useMemo(
    () =>
      setInitialvalue({
        name: selectedUserDetails.name,
        email: selectedUserDetails.email,
        phone: selectedUserDetails.phone,
        website: selectedUserDetails.website,
      }),
    [selectedUserDetails]
  );

  const handleSubmit = (values) => {
    const copyUserDetails = [...userDetails];
    const selecteduserIndex = userDetails.findIndex((obj => obj.id ===  selectedUserDetails.id));
    copyUserDetails.splice(selecteduserIndex,1,{ ...selectedUserDetails, ...values })
    console.log(copyUserDetails,'copyUserDetails');
    dispatch({
      type: GET_USER_DETAILS,
      userDetails: [...copyUserDetails],
    });
    dispatch({ type: SET_MODAL, isModalOpen: false });
  };

  const handleCancel = () => {
    form.resetFields();
    dispatch({ type: SET_MODAL, isModalOpen: false });
  };
  
  return (
    <>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={form.submit}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={initialvalue}
          autoComplete="off"
          onFinish={handleSubmit}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{  required: true,type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="website"
            label="Website"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default EditUser;
