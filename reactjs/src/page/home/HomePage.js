
// import {
//     Button,
//     Card,
//     Carousel,
//     Stack
// } from "react-bootstrap"
import {
    Button,
    Space,
    Select,
    QRCode
} from "antd"
import { SearchOutlined, DeleteFilled } from '@ant-design/icons';
function HomePage() {

    const onClickDefautl = () => {
        alert("click me")
    }
    return (
        <div style={{ padding: 30 }}>
            <QRCode 
                size={128*2}
                value="https://youtube.com"
            />
            <Select
                style={{width:300,marginBottom:10}}
                allowClear
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                // onChange={onChange}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                    {
                        value: 'jack',
                        label: 'Jack',
                    },
                    {
                        value: 'lucy',
                        label: 'Lucy',
                    },
                    {
                        value: 'tom',
                        label: 'Tom',
                    },
                ]}
            />
            <div style={{ width: 500 }}>
                <Button block={true} loading={true} type="primary">Primary Button</Button>
            </div>
            <Space wrap>

                <Button onClick={onClickDefautl}>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
                <Button loading={true} icon={<SearchOutlined />} type="primary">Serch</Button>
                <Button shape="circle" icon={<SearchOutlined />} type="primary" />
                <Button href="http://youtube.com" size="large" shape='round' icon={<DeleteFilled />} type="primary" />
                <Button danger={true} size="large" disabled={true} shape='round' icon={<DeleteFilled />} type="primary" />
            </Space>
            {/* <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                <Button variant="link">Link</Button> */}
        </div>
    )
}

export default HomePage;