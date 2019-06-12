import React, {PureComponent,Fragment} from 'react'
import {Button, Card} from 'antd'
import {Input} from 'nowrapper/lib/antd'
import Form, {FormItem, FormCore} from 'noform'
import {MyBreadcrumb} from '../components'

//内聘职工工资清单表
class UserSalNp extends PureComponent {
    state = {
        src:'',
        clientHeight: '0px'
    }
    constructor(props) {
        super(props);
        this.core = new FormCore()
    }

    handleOperator = () => {
        const values = this.core.getValues()
        this.setState({clientHeight:this.state.endClientHeight,src:'http://localhost/ureport/preview?_u=file:test.ureport.xml&userName=王'})
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleEnterKey)
        //设置iframe的高度
        this.setState({endClientHeight: document.body.clientHeight-100})
    }

    handleEnterKey = (e) => {
        if (e.keyCode === 13) {
            this.handleOperator()
        }
    }

    render() {
        return <Fragment>
            <MyBreadcrumb msg={'报表管理/内聘职工清单表'}/>
            <Card>
                <Form core={this.core} inline defaultMinWidth={false}>
                    <FormItem label="姓名" name="name"><Input/></FormItem>
                    <FormItem className="marginLeft10" label="部门" name="dept"><Input/></FormItem>
                    <Button className="marginLeft20" type="primary" icon="search"
                            onClick={this.handleOperator}>查询</Button>
                </Form>
            </Card>
            <Card className='marginTop'>
                <iframe src={this.state.src}
                        style={{border: 0, width: '100%', height: this.state.clientHeight}}
                        frameBorder="0"/>
            </Card>
        </Fragment>
    }
}

export default UserSalNp
