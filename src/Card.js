import React, { Component } from 'react';
import Card                 from '@mui/material/Card';
import CardHeader           from '@mui/material/CardHeader';
import CardMedia            from '@mui/material/CardMedia';
import CardContent          from '@mui/material/CardContent';
import Collapse             from '@mui/material/Collapse';
import Typography           from '@mui/material/Typography';

//strange work around
//i know this isn't a great solutions
var ok=false;

class NFTCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            isExpanded  :false,
            NFT         :this.props.NFT,
        };
    }
    render(){
        return(
            <Card sx={{ maxWidth: "20em" ,mx:3,my:4,minWidth:"20em"}} onClick={()=>{
                console.log(ok);
                if(ok){
                    this.setState({isExpanded:!this.state.isExpanded})
                }else{
                    ok = true
                } }}
                style={{"background":"#5DB1EE"}}
            >
            <CardHeader
                title={this.state.NFT["name"]}
                subheader={this.state.NFT["blockNumber"]}
            />
            <CardMedia
                component="img"
                height="194"
                src={this.state.NFT["imageURL"]}
                alt={this.state.NFT["name"]}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {this.state.NFT["contractType"]}
                </Typography>
            </CardContent>
            <Collapse in={this.state.isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                    {this.state.NFT["description"]}
                </Typography>
                <Typography paragraph>
                    Symbol:
                </Typography>
                <Typography paragraph>
                    {this.state.NFT["symbol"]}
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
        );
    }
}

export default NFTCard;