import React, { Component } from 'react';
import Modal                from '@mui/material/Modal';
import Box                  from '@mui/material/Box';
import Container            from '@mui/material/Container';
import Typography           from '@mui/material/Typography';
import Form                 from './Form';
import NFTCard              from './Card';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      response:      {},
      isSuccessful:  null,
      modalOpen:     false,
    }
  }
  
  handleResponse = (response) =>{
    const rspv = JSON.parse(response["data"]);
    console.log(rspv);
    if(rspv["isSuccessful"]){
      this.setState({isSuccessful:  true});
      this.setState({response:      rspv["data"]});
    }else{
      this.setState({isSuccessful:  false});
      this.setState({response:      rspv["error"]});
      this.setState({modalOpen:     true});
    }
  }

  renderResponse(){
    if(this.state.isSuccessful == true){
      return(this.state.response.map(elm => <NFTCard key={elm["blockNumber"]} NFT={elm}  sx={{ my: 10 }} className="col-4" />));
    }else if(this.state.isSuccessful == false){
      return(
        <Modal
          open={this.state.modalOpen}
          //not a smart idea but it works for this case, we don't have more functionality so nothing is affected by this
          onClose={()=>{this.setState({modalOpen : !this.state.modalOpen})}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <Box style={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Something gone wrong
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {this.state.response["message"]}
          </Typography>
        </Box>
      </Modal>);
    }
  }

  render() {
    return (
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" style={{"textAlign":"center"}} gutterBottom>
            NFT Searcher using WebSockets
          </Typography>
        </Box>
        <Form getResponse={this.handleResponse} />
        <div className="row">
          { this.renderResponse() }
        </div>
      </Container>
    );
  }
}

export default App;