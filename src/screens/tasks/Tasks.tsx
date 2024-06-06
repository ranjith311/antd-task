import { Button, Col, Flex, Form, Modal, Popconfirm, Progress, Row, Table, Tag, Typography, message } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react'
import useScreenSize from '../../shared/hooks/useScreen';
import FormSelect from '../../shared/components/form/FormSelect';
import Spinner from '../../shared/components/spinner/Spinner';
import FormInput from '../../shared/components/form/FormInput';
import { API_SERVICE } from '../../shared/services/api-service';
import { capitalizeFirstLetter, setTitle } from '../../shared/utils/common';
import "./Tasks.scss"

const { Text } = Typography

export interface Task {
  id: number;
  description: string;
  project: string;
  progress: number;
  status: string;
}
const Tasks: React.FC = () => {

  const [data, setData] = useState<Task[]>([]);
  const [modal, setModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const [editPayload, setEditPayload] = useState<Task | null>(null);
  const { isMobile } = useScreenSize()
  const [form] = Form.useForm();

  const columns: ColumnsType<Task> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Task Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Project',
      dataIndex: 'project',
      key: 'project',
      sorter: (a: Task, b: Task) => a.project.localeCompare(b.project),
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      render: (progress: number) => <Progress percent={progress} />,
      sorter: (a: Task, b: Task) => a.progress - b.progress,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, _) => {
        // console.log(_,status)
        let color;
        switch (status) {
          case 'Completed':
            color = 'green';
            break;
          case 'Halted':
            color = 'red';
            break;
          case 'Todo':
            color = 'blue';
            break;
          case 'In Progress':
            color = 'orange';
            break;
          default:
            color = 'grey';
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: Task) => (
        <span>
          <Flex>
            <Button onClick={() => updateTask(record)} type="primary" style={{ marginRight: 8 }}>Edit</Button>
            <Popconfirm
              title="Are you sure you want to delete this task?"
              onConfirm={() => deleteTask(record.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button className='btn-danger' type="default">Delete</Button>
            </Popconfirm>
          </Flex>
        </span>
      ),
    },
  ];

  const getAllTasks = () => {
    setLoading(true)
    API_SERVICE.getAllTasks().then((data) => {
      setData(data)
    }).catch((err) => {
      console.log(err)
    }).finally(() => {
      setLoading(false)
    })
  }

  useEffect(() => {
    setTitle("Tasks")
    getAllTasks()
  }, [])

  const showModal = () => {
    setModal(true);
  };

  const deleteTask = (id: number) => {
    //make api call
    API_SERVICE.deleteOneTask(id).then((data) => {
      message.success(data);
      getAllTasks()
    }).catch((err) => {
      console.log(err)
    });
  };

  const addTask = () => {
    form
      .validateFields()
      .then((values) => {
        //make api call
        values.project = capitalizeFirstLetter(values.project)
        API_SERVICE.createTask(values).then((data) => {
          form.resetFields();
          setModal(false);
          getAllTasks()
          message.success('New task added successfully');
        }).catch((err) => {
          console.log(err)
        });
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };

  const cancelAddTask = () => {
    form.resetFields();
    setModal(false);
  };

  const updateTask = (task: Task) => {
    setIsUpdate(true)
    setEditPayload(task)
    form.setFieldsValue(task);
    console.log(task)
    setModal(true)
  }

  const submitUpdate = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values)
        //make api call
        values.project = capitalizeFirstLetter(values.project)
        API_SERVICE.updateTask(editPayload!.id, values).then((data) => {
          // setData(data)
          form.resetFields();
          setModal(false);
          getAllTasks()
          message.success('Task Updated successfully');
        }).catch((err) => {
          console.log(err)
        });
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  }



  return (
    <>
      <div className='border border-radius-2' style={{padding:"8px"}}>
        <Flex style={{padding:"10px 0"}} justify='space-between' align='center'>
          <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>Tasks</Text>
          <Button className='btn' type="primary" onClick={showModal}>Add New Task</Button>
        </Flex>

        <div className='task-table' style={{ overflowX: 'auto' }}>
          <Table columns={columns} dataSource={data} rowKey="id" pagination={{ pageSize: 5 }} />
        </div>

        <Modal
          title="Add New Task"
          open={modal}
          onOk={isUpdate ? submitUpdate : addTask}
          onCancel={cancelAddTask}
          confirmLoading={loading}
        >
          <Form form={form} layout="vertical">
            <Row gutter={16}>
              <Col span={24}>
                <FormInput
                  style={{ width: "100%" }}
                  type={'text'}
                  name={"description"}
                  label='Task Description'
                  isRequired />
              </Col>
              <Col xs={24} md={12} span={12}>
                <FormInput
                  style={{ width: "100%" }}
                  type={'text'}
                  name={"project"}
                  label='Project'
                  isRequired />
              </Col>
              <Col xs={24} md={12} span={12}>
                <FormInput
                  style={{ width: "100%" }}
                  min={0}
                  max={100}
                  name={"progress"}
                  label='Progress'
                  isRequired />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormSelect
                  placeholder='Select a status'
                  isRequired
                  requiredLabel='Status'
                  label='Status'
                  name='status'
                  options={[
                    { label: "Todo", value: "Todo" },
                    { label: "Halted", value: "Halted" },
                    { label: "In Progress", value: "In Progress" },
                    { label: "Completed", value: "Completed" }
                  ]}
                />
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
      {loading && <Spinner />}
    </>
  )
};

export default Tasks