import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import SideMenu from '../../partials/SideMenu';
import FlatButton from 'material-ui/FlatButton';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Client from '../../../models/Client';
import IconButton from 'material-ui/IconButton';
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ActionPanTool from 'material-ui/svg-icons/action/pan-tool';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
  
interface ClientState {
    client: Client;
    activeRow: number;
}
class ClientsEditList extends React.Component<any, ClientState> {
    state = {
        client: new Client(null, '', null, [], ''),
        activeRow: null
    };

    componentWillMount() {
        this.props.fetchClients();
    }

    handleAdd = () => {
        this.props.addClient(new Client(null, '', null, [], ''));
    }

    handleEdit = (e, ind) => {
        this.setState({
            activeRow: ind,
            client: this.props.clients[ind]
        });
    }

    handleChange = (event, newValue) => {
        let client = this.state.client;
        client[event.target.id] = newValue;
        this.setState({
            client: client
        });
    }

    handleSave = () => {
        this.props.editClient(this.state.client);
        this.setState({
            client: new Client(null, '', null, [], ''),
            activeRow: null
        });
    }

    handleDeleting = () => {
        this.props.deleteClient(this.state.client.id);
        this.setState({
            client: new Client(null, '', null, [], ''),
            activeRow: null
        });
    }

    render() {
        return (
            <div>
                <SideMenu {...this.props}/>
                <Table>
                    <TableHeader displaySelectAll={false} >
                        <TableRow>
                            <TableHeaderColumn/>
                            <TableHeaderColumn>Имя</TableHeaderColumn>
                            <TableHeaderColumn>Телефон</TableHeaderColumn>
                            <TableHeaderColumn>Социальные сети</TableHeaderColumn>
                            <TableHeaderColumn>Примечания</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody stripedRows={true} displayRowCheckbox={false}>
                        {this.props.clients.map((cl, ind) => {
                            return(
                                this.state.activeRow === ind ?  
                                    (
                                        <TableRow key={ind}>
                                            <TableRowColumn>    
                                                <IconButton onClick={() => this.handleSave()}>
                                                    <ActionDone />
                                                </IconButton>
                                                <IconButton onClick={() => this.handleDeleting()}>>
                                                    <ActionDelete />
                                                </IconButton>                           
                                            </TableRowColumn>
                                            <TableRowColumn>
                                                <TextField onChange={(e, v) => this.handleChange(e, v)} id="name" defaultValue={cl.name}/>
                                            </TableRowColumn>
                                            <TableRowColumn>
                                                <TextField onChange={(e, v) => this.handleChange(e, v)} id="phone" defaultValue={cl.phone}/>
                                            </TableRowColumn>
                                            <TableRowColumn>
                                                <TextField onChange={(e, v) => this.handleChange(e, v)} id="socials" defaultValue={cl.socials}/>
                                            </TableRowColumn>
                                            <TableRowColumn>
                                                <TextField onChange={(e, v) => this.handleChange(e, v)} id="notes" defaultValue={cl.notes}/>
                                            </TableRowColumn>
                                        </TableRow>
                                    )
                                    :
                                    (
                                        <TableRow key={ind}>
                                            <TableRowColumn>    
                                                <IconButton onClick={(e) => this.handleEdit(e, ind)}>
                                                    <ActionPanTool />
                                                </IconButton>                           
                                            </TableRowColumn>
                                            <TableRowColumn>{cl.name}</TableRowColumn>
                                            <TableRowColumn>{cl.phone}</TableRowColumn>
                                            <TableRowColumn>{cl.socials}</TableRowColumn>
                                            <TableRowColumn>{cl.notes}</TableRowColumn>
                                        </TableRow>
                                    )
                            );
                        })}                      
                    </TableBody>
                </Table>
                <FloatingActionButton mini={true} style={{margin: '30px'}} onClick={() => this.handleAdd()}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        );
    }
}

export default ClientsEditList;