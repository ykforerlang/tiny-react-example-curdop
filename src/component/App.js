import React from 'react'
import { Route, Link } from 'tinyy-router'
import Profile from './Profile'

const ReactPage = () => (
    <div>睿艾科特</div>
)


function homeRender() {
    return <div>Home</div>
}

export default () => (
    <div>
        <div className="header">
            <Link to="/profile">我的信息</Link>
            <Link to="/react">睿艾科特</Link>
            <Link to="/" >首页</Link>
        </div>
        <Route exact path="/" render={homeRender}/>
        <Route exact path="/index.html" render={homeRender}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/react" component={ReactPage}/>
    </div>
)

