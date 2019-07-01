import * as React from 'react';
import { DatePicker, LocaleProvider, message } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

interface HelloProps {
  date?: moment.Moment;
}

class HelloComponent extends React.Component<HelloProps, {}> {
  public render(): React.ReactNode {
    const { date } = this.props;
    return (
      <LocaleProvider locale={zhCN}>
        <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={this.handleChange} />
          <div style={{ marginTop: 20 }}>
            当前日期：{date ? date.format('YYYY-MM-DD') : '未选择'}
          </div>
        </div>
      </LocaleProvider>
    );
  }
  private handleChange = (date: moment.Moment) => {
    message.info(`您选择的日期是: ${date.format('YYYY-MM-DD')}`);
    this.setState({ date });
  };
}

export default HelloComponent;
