import React, { useState, useEffect } from 'react';
import API from './API';
import 'antd/dist/antd.css';
import { Row, Col, Card, Input, Spin } from 'antd';
import { Link, BrowserRouter } from 'react-router-dom';
import UserProfile from './UserProfile';

const { Search } = Input;

const Profile = () => {

    const [loading, setLoading] = useState(true)
    const [userData, setUserData] = useState([]);
    const [value, setValue] = useState('');
    const [captureData, setCaptureData] = useState([]);

    useEffect(() => {
        const handleFetch = async () => {
            try {
                const apires = await API.get(`users`);
                setUserData(apires.data);
                setLoading(false);
                let userData = apires.data
                userData.map((item) => {
                    item.name = item.name ? item.name : '';
                    item.phone = item.phone ? item.phone : '';
                    item.username = item.username ? item.username : '';
                    item.company.name = item.company.name ? item.company.name : '';
                })
            } catch (err) {
                setLoading(false)
                console.log(err);
            }
        }
        handleFetch();
    }, [])

    const captureUser = (data) => {
        // let capData = []
        //  capData.push(data)
        //setCaptureData(capData)
        setCaptureData(data)
    }

    return (
        <div >
            <Row className="container" >
                <Card className="childContainer">
                    <Row type="flex" justify="end">
                        <Col span={6} >
                            <Search
                                className="input"
                                placeholder="search by user Name"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                style={{ width: 300 }}
                            />
                        </Col>
                    </Row>

                    <Row className="FULLNAME">
                        <BrowserRouter>
                            <Link to="/UserProfile" >

                                {loading === true ? <Spin tip="Loading..."> </Spin> :
                                    <table>
                                        <tbody>
                                            <tr >
                                                <th>FULLNAME</th>
                                                <th>PHONE</th>
                                                <th>USER NAME</th>
                                                <th>COMPANY NAME</th>
                                            </tr>
                                            {userData && userData.length > 0 ? userData.filter((list) => {
                                                return list.username.toLowerCase().search(value.toLowerCase()) !== -1
                                            }).map((item) => {
                                                return (
                                                    <tr className="listitem" onClick={() => captureUser(item)} key={item.id} >
                                                        <td >{item.name}</td>
                                                        <td>{item.phone}</td>
                                                        <td>{item.username}</td>
                                                        <td>{item.company.name}</td>
                                                    </tr>
                                                )
                                            }) : null}
                                        </tbody>
                                    </table>
                                }

                            </Link>
                        </BrowserRouter>
                    </Row>
                    {captureData && captureData.name !== undefined ? <UserProfile /> : null}
                </Card>
            </Row>
        </div>
    );
}

export default Profile;






