import { Card } from 'antd'


interface ITaskCard {
    title?: string,
    content?: string,
    styles?: any,
    className?: string
    loading?:boolean
}

const TaskCard = (props: ITaskCard) => {
    const { title, content, styles, className,loading } = props

    return (
        <>

            <div>
                <Card
                    style={styles}
                    loading={loading}
                    title={title}
                    className={className}>
                    <p>{content}</p>
                </Card>
            </div>


        </>
    )
}

export default TaskCard