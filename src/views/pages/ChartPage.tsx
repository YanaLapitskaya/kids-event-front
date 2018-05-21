import * as React from 'react';
import EmployeesSiteList from '../components/employees/EmployeesSiteList';
import ReviewsSiteList from '../components/reviews/ReviewsSiteList';
import { css } from 'glamor';
import BasePage from './BasePage';
import SideMenu from '../partials/SideMenu';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

charts(fusioncharts);

class ChartPage extends React.Component<any, any> {
    state = {
        groupedProfit: []
    };

    chartConfigs = {
        type: 'Area2D',
        className: 'fc-column2d', // ReactJS attribute-name for DOM classes
        dataFormat: 'JSON',
        dataSource: {
            chart: {
                caption: 'Выручка за период',
                xAxisName: 'Дата оформления заказа, дд.мм',
                yAxisName: 'Выручка, бел. руб.'
            },
            data: []
        }
    };

    render() {
        let groupedByDate  = [];
        if ( this.props.orders.length !== 0 && this.state.groupedProfit.length === 0 ) {
            let groupedProfitObj = {};
            groupedByDate = this.props.orders.map((ord) => {
                const dateString = ord.dateOrder;
                const date = new Date(dateString);
                return [`${date.getDate()}.${date.getMonth() + 1}`, ord];
            });
            groupedByDate.map((el) => {
                if (!groupedProfitObj[el[0]]) {
                    groupedProfitObj[el[0]] = Number(el[1].price);
                } else {
                    groupedProfitObj[el[0]] += Number(el[1].price);
                }
            });
            const groupedProfit: Array<Object> = Object.keys(groupedProfitObj).sort().map((key) => {
                return {label: key, value: groupedProfitObj[key]};
            });
            this.setState({
                groupedProfit: groupedProfit
            });
            this.chartConfigs.dataSource.data = groupedProfit;
        }
        return (
            <div>
                <SideMenu {...this.props}/>
                <div>
                    <ReactFC {...this.chartConfigs} />
                    <p>Выручка за период: {profit}</p> 
                </div>
            </div>
        );
    }
}

export default ChartPage;