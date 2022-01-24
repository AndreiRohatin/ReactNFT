import React, { Component }             from 'react';
import Button                           from '@mui/material/Button';
import TextField                        from '@mui/material/TextField';
import Autocomplete                     from '@mui/material/Autocomplete';
import Container                        from '@mui/material/Container';
import { w3cwebsocket as W3CWebSocket } from "websocket";


//required to validate addresses
const WAValidator = require('./wav');
//a list of available blockchains on moralis api
const availableChains = [{label:"Ethereum",symbol:"eth"},{label:"Binance Smart Chain",symbol:"bsc"},{label:"Polygon",symbol:"matic"},{label:"Solana",symbol:"sol"},{label:"Elrond",symbol:"egld"}];

//get ws connection
//connect react app with node.js in real time
const client = new W3CWebSocket('ws://localhost:8000');

class Form extends Component {

    constructor(props) {
      super(props);
      this.state = {
        chain:    '',
        address:  '',
        isError:  {error:false}
      };
      client.onopen = () => {
        console.log('WebSocket Client Connected');
      };
      client.onmessage = (message) => {
        this.handleResponseChange(message);
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleResponseChange = async (message)=>{
      this.props.getResponse(message);
  }
    

    validateAddress(address,chain){
        //validate only eth/matic/sol. There is no support atm for bsc/egld
        if(chain!='' && chain!='egld' && chain!='bsc' && address!=null && !WAValidator.validate(address, chain)){
            //user selected a network and wrote an address but they are wrong, let's give a warning
            this.setState({isError:{error:true}});
        }else{
            //since we can't validate no client side we'll guess for now that everything is ok
            this.setState({isError:{error:false}});
        }
    }
  
    handleSubmit(event) {
      if(this.state.address && this.state.chain) client.send(JSON.stringify({chain:this.state.chain,query:'nfts',user:this.state.address}));
      event.preventDefault();
    }
    render() {
      return (
        <Container maxWidth="sm">
          <form onSubmit={this.handleSubmit}>
            <Autocomplete
                disablePortal
                id="chain"
                onChange={(event, selectedValue) => {
                    //we can't use the value from state atm
                    const currChain=selectedValue!=null?selectedValue["symbol"]:'';

                    //null check in case the user wants to press x in order to delete current selection
                    this.setState({chain:currChain});
                    this.validateAddress(this.state.address,currChain);
                  }}
                options={availableChains}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Select a network" 
                />}
            />
            <TextField 
              onChange={(event)=>{this.setState({address:event.target.value}); this.validateAddress(event.target.value,this.state.chain) }}
              label="Enter Public Address" 
              variant="standard" {...this.state.isError}
              helperText={this.state.isError["error"]?"Wrong Address/Network":""}
              sx={{ my: 4, minWidth:400, maxWidth:600}}
              />
            <Button variant="outlined" type="submit" value="Submit" disabled={this.state.isError["error"]} style={{display:"block"}}>Search</Button>
          </form>
      </Container>
      )
    }
  }
  
export default Form;
