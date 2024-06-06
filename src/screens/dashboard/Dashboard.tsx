import React, { useEffect, useState } from 'react'
import { Column, Pie } from '@ant-design/plots';
import { Card, Col, Row } from 'antd'
import TaskCard from '../../shared/components/card/Card';
import { API_SERVICE } from '../../shared/services/api-service';
import Spinner from '../../shared/components/spinner/Spinner';
import { generateCardData, generateChartData, generatePieData, setTitle } from '../../shared/utils/common';
import "./Dashboard.scss"

const Dashboard = () => {

    const [loading, setLoading] = useState(false);
    const [cardData, setCardData] = useState([] as any)
    const [pieData, setPieData] = useState([
        { type: 'Todo', tasks: 45 },
        { type: 'Halted', tasks: 21 },
        { type: 'Completed', tasks: 17 },
        { type: 'In Progress', tasks: 13 }
    ])
    const [columnData, setColumnData] = useState([] as any)

    const getAllTasks = () => {
        setLoading(true)
        API_SERVICE.getAllTasks().then((data) => {
            setCardData(generateCardData(data));
            setColumnData(generateChartData(data))
            setPieData(generatePieData(data))
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        setTitle("Dashboard")
        getAllTasks()
    }, [])

    const ColumnConfig = {
        height: 200,
        data: columnData,
        xField: 'project',
        yField: 'value',
        stack: true,
        colorField: 'type',
        label: {
            style: {
                fill: '#ffff',
                fontSize: 12,
                fontWeight: 'bold',
            },
            offset: 10,
            text: 'value',
            position: 'inside',
            textBaseline: 'middle',
            textAlign: 'center',
            rotate: 0,
            autoRotate: true,
            autoHide: true,
            autoEllipsis: true,
            animate: true,
        },
        interaction: {
            elementHighlightByColor: {
                // link: true,
            },
        },
        state: {
            active: { linkFill: 'rgba(0,0,0,0.25)', stroke: 'black', lineWidth: 0.5 },
            inactive: { opacity: 0.5 },
        },
    };

    const pieConfig = {
        height: 200,
        alignItems: "center",
        data: pieData,
        angleField: 'tasks',
        colorField: 'type',
        // label: {
        //   text: 'value',
        //   style: {
        //     fontWeight: 'bold',
        //   },
        // },
        legend: {
            color: {
                title: true,
                position: 'right',
                rowPadding: 5,
            },
            custom: true, // Enable custom legend rendering
            position: 'right', // Adjust the position as needed
            offsetY: -20, // Adjust the offset as needed
            itemName: {
                style: {
                    textAlign: 'center',
                },
            },
        },
    };
    return (

        <>
            <Row gutter={[16, 16]}>
                {cardData?.map((card: any, idx: number) => (
                    <Col xs={12} sm={12} lg={6} key={idx}>
                        <TaskCard
                            loading={loading}
                            styles={{ marginBottom: 16, fontWeight: "bold" }}
                            title={card.title}
                            content={card.content}
                            className={'card'} />
                    </Col>
                ))}
            </Row>

            <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} lg={12}>
                    <Card className='chart-card' title="Project Wise Bug Status">
                        <Column {...ColumnConfig} />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={12}>
                    <Card className='chart-card' title="Total Bug Status %">
                        <Pie {...pieConfig} />
                    </Card>
                </Col>
            </Row>
            {loading && <Spinner />}
        </>
    )
}

export default Dashboard