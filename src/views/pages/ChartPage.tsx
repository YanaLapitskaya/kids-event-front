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
        groupedProfit: [],
        timeInterval: 0
    };

    chartConfigs = {
        type: 'Area2D',
        className: 'fc-column2d', // ReactJS attribute-name for DOM classes
        dataFormat: 'JSON',
        dataSource: {
            chart: {
                caption: 'Выручка за период',
                xAxisName: 'Дата оформления заказа, дд/мм',
                yAxisName: 'Выручка, бел. руб.'
            },
            data: []
        }
    };

    render() {
        let groupedProfit = [];
        if ( this.props.orders.length !== 0 && this.state.groupedProfit.length === 0 ) {
            const processedOrders = this.props.orders.filter(ord => ord.status === 'обработан')
                .map((el) => {
                    el.dateOrder = new Date(el.dateOrder);
                    return el;
                })
                .sort((a, b) => {
                    return a.dateOrder - b.dateOrder;
                });

            const timeInterval = (processedOrders[processedOrders.length - 1].dateOrder - processedOrders[0].dateOrder) / (1000 * 60 * 60 * 24);

            let groupedProfitObj = {};

            processedOrders.map((el) => {
                const dateString = `${el.dateOrder.getDate()}/${el.dateOrder.getMonth() + 1}`;
                if (!groupedProfitObj[dateString]) {
                    groupedProfitObj[dateString] = Number(el.price);
                } else {
                    groupedProfitObj[dateString] += Number(el.price);
                }
            });

            groupedProfit = Object.keys(groupedProfitObj).map((key) => {
                return {label: key, value: groupedProfitObj[key]};
            });

            this.setState({
                groupedProfit: groupedProfit,
                timeInterval: timeInterval
            });
            this.chartConfigs.dataSource.data = groupedProfit;
        }

        const title = this.state.groupedProfit.length !== 0 ? 
            <h1 {...header}>Статистика за период: {this.state.groupedProfit[0].label} - {this.state.groupedProfit[this.state.groupedProfit.length - 1].label}</h1>
            : null;
        
        let chartText = null;
        if (this.state.groupedProfit.length !== 0) {
            let totalProfit = this.state.groupedProfit.reduce((sum, a) => {  return sum + Number(a.value); }, 0);
            let averageProfit = Math.floor(totalProfit / Math.floor(this.state.timeInterval));
            chartText = (<div {...textStyles}>
                <p>Выручка за период: <br/> <b>{totalProfit} бел. руб.</b></p>
                <p>Средняя выручка: <br/> <b>{averageProfit} бел. руб.</b></p>
            </div>);
        }

        return (
            <div>
                <SideMenu {...this.props}/>
                <div {...wrapper}>
                    {title}
                    <div {...chartWrapper}>
                        <ReactFC {...this.chartConfigs} />
                        {chartText}
                    </div>
                </div>
            </div>
        );
    }
}

const header = css({
    fontFamily: 'Roboto !important',
    marginBottom: '25px'
});

const wrapper = css({
    paddingTop: '25px',
    ' p': {
        fontFamily: 'Roboto !important'
    }
});

const chartWrapper = css({
    display: 'flex'
});

const textStyles = css({
    width: '30%',
    display: 'inline-block',
    fontSize: '30px',
    margin: '20px 40px'
});

export default ChartPage;