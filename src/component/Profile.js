import React, { Component } from 'react'
import { Link, Route } from "tinyy-router"

export default class Profile extends Component{

    render() {
        return (
            <div className="profile">
                <ul>
                    <li><Link to="/profile/userinfo">个人信息</Link></li>
                    <li><Link to="/profile/avatar">修改头像</Link></li>
                    <li><Link to="/profile/history">浏览历史</Link></li>
                    <li><Link to="/profile/setting">个人设置</Link></li>
                </ul>

                <div className="content">
                    <Route path="/profile" exact strict>
                        <div>{JSON.stringify({
                            operation: "userinfo"
                        })}</div>
                    </Route>
                    <Route path="/profile/:operation" render={({ match }) => <div>{JSON.stringify(match.params)}</div>}/>
                </div>
            </div>
        )
    }
}