import React, {PureComponent} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Admin from './Admin'
import Dept from './pages/dept'
import Dic from './pages/dic'
import User from './pages/user'
import SalNp from './pages/salNp'
import SalLtx from './pages/salLtx'
import SalLx from './pages/salLx'
import ChangeSheet from './pages/changeSheet'
import ChangeSheetNeedHandle from './pages/changeSheetNeedHandle'
import Test from './pages/Test'
import Permission from './pages/permission'
import Role from './pages/role'
import Login from './pages/login'
import UserSalNp from './pages/report/userSalNp'
import {Constants} from './util'
//antd、noform和nowrapper的样式
import 'antd/dist/antd.less'
import 'noform/dist/index.css'
import 'nowrapper/dist/antd/index.css'
//全局通用样式
import './common.less'

class Router extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route path={Constants.projectName+"/login"} component={Login}/>
                        <Route path={Constants.projectName+"/"} render={() =>
                            <Admin>
                                <Switch>
                                    <Route path={Constants.projectName+'/dept'} component={Dept}/>
                                    <Route path={Constants.projectName+'/dic'} component={Dic}/>
                                    <Route path={Constants.projectName+'/user'} component={User}/>
                                    <Route path={Constants.projectName+'/salNp'} component={SalNp}/>
                                    <Route path={Constants.projectName+'/salLtx'} component={SalLtx}/>
                                    <Route path={Constants.projectName+'/salLx'} component={SalLx}/>
                                    <Route path={Constants.projectName+'/changeSheet'} component={ChangeSheet}/>
                                    <Route path={Constants.projectName+'/changeSheetNeedHandle'} component={ChangeSheetNeedHandle}/>
                                    <Route path={Constants.projectName+'/permission'} component={Permission}/>
                                    <Route path={Constants.projectName+'/role'} component={Role}/>
                                    <Route path={Constants.projectName+'/main'} component={Test}/>
                                    <Route path={Constants.projectName+'/userSalNp'} component={UserSalNp}/>
                                    }/>
                                </Switch>
                            </Admin>
                        }/>
                    </Switch>
                </App>
            </BrowserRouter>
        )
    }
}

export default Router
